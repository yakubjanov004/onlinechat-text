(function () {
  "use strict";

  var STORE_KEY = "qc_inbox_state_v3";

  function qs(sel, root) { return (root || document).querySelector(sel); }
  function qsa(sel, root) { return Array.from((root || document).querySelectorAll(sel)); }
  function nowHM() { var d = new Date(); return String(d.getHours()).padStart(2, '0') + ':' + String(d.getMinutes()).padStart(2, '0'); }
  function uid() { return "chat-" + Math.floor(100 + Math.random() * 900) + "-" + Date.now().toString().slice(-4); }

  var CHANNEL_SLA_MIN = {
    Web: 3,
    Telegram: 2,
    WhatsApp: 4,
    Instagram: 3,
    Email: 10
  };

  var fallbackMessages = {
    "chat-101": [
      { who: "in", text: "Salom, Pro tarifda nechta operator qo'shsa bo'ladi?", time: "14:22" },
      { who: "out", text: "Assalomu alaykum! Pro tarifda 10 tagacha operator qo'shish mumkin.", time: "14:23" }
    ],
    "chat-106": [
      { who: "in", text: "Invoice PDF yuklanmayapti", time: "16:10" },
      { who: "out", text: "Rahmat, tekshirib qaytaman.", time: "16:11" }
    ]
  };

  var state = { chats: {}, activeChatId: null, lastIncomingAt: 0 };
  var slaTimerInterval = null;
  var incomingInterval = null;

  function loadState() {
    try {
      var raw = localStorage.getItem(STORE_KEY);
      if (raw) state = JSON.parse(raw);
    } catch (e) {}
    if (!state || !state.chats) state = { chats: {}, activeChatId: null, lastIncomingAt: 0 };
  }

  function saveState() {
    try { localStorage.setItem(STORE_KEY, JSON.stringify(state)); } catch (e) {}
  }

  function slaDueAtByChannel(channel) {
    var mins = CHANNEL_SLA_MIN[channel] || 3;
    return Date.now() + mins * 60 * 1000;
  }

  function bootstrapFromDOM() {
    qsa('.inbox-chat-item[data-chat-id]').forEach(function (item) {
      var id = item.getAttribute('data-chat-id');
      if (!id) return;
      if (!state.chats[id]) {
        var channel = item.getAttribute('data-channel') || 'Web';
        state.chats[id] = {
          id: id,
          status: (item.getAttribute('data-status') || 'active').toLowerCase(),
          agent: item.getAttribute('data-agent') || 'Unassigned',
          channel: channel,
          name: item.getAttribute('data-name') || 'Mijoz',
          preview: ((qs('.preview', item) || {}).textContent || '').trim(),
          unread: parseInt((qs('.badge', item) || {}).textContent || '0', 10) || 0,
          messages: fallbackMessages[id] || fallbackMessages['chat-101'],
          slaDueAt: slaDueAtByChannel(channel),
          notes: 'Demo uchun qiziqmoqda. Ertaga follow-up yuborish tavsiya etiladi.',
          tags: ['Pricing', 'Lead']
        };
      }
    });

    if (!state.activeChatId) {
      var active = qs('.inbox-chat-item.active[data-chat-id]') || qs('.inbox-chat-item[data-chat-id]');
      if (active) state.activeChatId = active.getAttribute('data-chat-id');
    }
    saveState();
  }

  function getChat(id) { return state.chats[id] || null; }

  function renderSingleChatListItem(item, chat) {
    if (!item || !chat) return;
    item.setAttribute('data-status', chat.status);
    item.setAttribute('data-agent', chat.agent);
    item.setAttribute('data-channel', chat.channel);
    item.setAttribute('data-name', chat.name);

    var nameStrong = qs('.name-row strong', item);
    if (nameStrong) nameStrong.textContent = chat.name;
    var preview = qs('.preview', item);
    if (preview) preview.textContent = chat.preview || 'Yangi xabar';

    var muted = qsa('.text-muted', item);
    if (muted.length) muted[muted.length - 1].textContent = 'Agent: ' + chat.agent;

    var channel = qs('.channel-pill', item);
    if (channel) channel.textContent = chat.channel;

    var badge = qs('.badge.badge-danger', item);
    if (chat.unread > 0) {
      if (!badge) {
        badge = document.createElement('span');
        badge.className = 'badge badge-danger';
        var meta = qs('.inbox-chat-meta', item);
        if (meta) meta.appendChild(badge);
      }
      badge.textContent = String(chat.unread);
    } else if (badge && badge.parentNode) {
      badge.parentNode.removeChild(badge);
    }
  }

  function appendChatListItem(chat) {
    var list = qs('[data-inbox-list]');
    if (!list) return;
    var div = document.createElement('div');
    div.className = 'inbox-chat-item';
    div.setAttribute('role', 'option');
    div.setAttribute('aria-selected', 'false');
    div.setAttribute('data-chat-id', chat.id);
    div.innerHTML = '' +
      '<span class="status-dot online"></span>' +
      '<div class="inbox-chat-main">' +
      '  <div class="name-row"><strong class="truncate"></strong></div>' +
      '  <div class="preview truncate"></div>' +
      '  <div class="text-muted" style="font-size:12px"></div>' +
      '</div>' +
      '<div class="inbox-chat-meta"><span class="time">hozir</span><span class="channel-pill"></span></div>';
    list.prepend(div);
    renderSingleChatListItem(div, chat);
  }

  function applyListFilters() {
    var list = qs('[data-inbox-list]');
    if (!list) return;
    var activeTab = qs('[data-tab-group="inbox-list"].active');
    var mode = activeTab ? activeTab.getAttribute('data-tab') : 'all';
    var q = ((qs('[data-inbox-search]') || {}).value || '').toLowerCase().trim();

    var visible = 0;
    qsa('.inbox-chat-item', list).forEach(function (item) {
      var id = item.getAttribute('data-chat-id');
      var chat = getChat(id);
      var status = chat ? chat.status : (item.getAttribute('data-status') || '').toLowerCase();
      var name = (item.getAttribute('data-name') || '').toLowerCase();
      var preview = ((qs('.preview', item) || {}).textContent || '').toLowerCase();
      var text = name + ' ' + preview;

      var okTab = mode === 'all' || status.indexOf(mode) > -1;
      var okSearch = !q || text.indexOf(q) > -1;
      item.style.display = (okTab && okSearch) ? '' : 'none';
      if (okTab && okSearch) visible++;
    });
    var empty = qs('[data-empty-state="inbox-list"]');
    var wrap = qs('[data-inbox-list-wrap]');
    if (empty) empty.hidden = visible > 0;
    if (wrap) wrap.hidden = visible === 0;
  }

  function renderMessages(chatId) {
    var panel = qs('[data-inbox-chat-panel]');
    var msgBox = panel ? qs('.inbox-messages', panel) : null;
    if (!panel || !msgBox) return;
    var chat = getChat(chatId);
    if (!chat) return;

    var html = '<div class="msg-system">Chat boshlandi • Bugun</div>';
    chat.messages.forEach(function (m) {
      html += '<div class="msg-group ' + m.who + '">';
      html += '<div class="msg-bubble"></div>';
      html += '<div class="msg-meta">' + (m.who === 'in' ? 'Mijoz' : 'Agent') + ' • ' + m.time + '</div>';
      html += '</div>';
    });
    msgBox.innerHTML = html;
    qsa('.msg-bubble', msgBox).forEach(function (b, i) { b.textContent = chat.messages[i].text; });
    msgBox.scrollTop = msgBox.scrollHeight;
  }

  function renderTagsAndNotes(chatId) {
    var chat = getChat(chatId);
    if (!chat) return;

    var notes = qsa('.inbox-info-card textarea');
    notes.forEach(function (ta) { ta.value = chat.notes || ''; });

    var tagCloud = qs('.inbox-info-card .tag-cloud');
    if (tagCloud) {
      tagCloud.innerHTML = '';
      (chat.tags || []).forEach(function (tag) {
        var span = document.createElement('span');
        span.className = 'badge badge-primary';
        span.textContent = tag;
        tagCloud.appendChild(span);
      });
    }
  }

  function ensureHeaderControls(panel) {
    var right = qs('.inbox-chat-header .right', panel);
    if (!right) return;
    if (!qs('[data-chat-status-select]', right)) {
      var select = document.createElement('select');
      select.className = 'select inbox-status-select';
      select.setAttribute('data-chat-status-select', '1');
      select.innerHTML = '<option value="active">Open</option><option value="pending">Pending</option><option value="resolved">Resolved</option><option value="closed">Closed</option>';
      right.insertBefore(select, right.firstChild);
      select.addEventListener('change', function () {
        var id = state.activeChatId;
        if (!id || !state.chats[id]) return;
        var v = select.value;
        state.chats[id].status = v === 'closed' ? 'closed' : 'active ' + v;
        var item = qs('.inbox-chat-item.active');
        if (item) renderSingleChatListItem(item, state.chats[id]);
        saveState();
        applyListFilters();
      });
    }
    if (!qs('[data-sla-timer]', right)) {
      var t = document.createElement('span');
      t.className = 'badge badge-warning sla-timer';
      t.setAttribute('data-sla-timer', '1');
      t.textContent = 'SLA --:--';
      right.insertBefore(t, right.firstChild);
    }
  }

  function updateHeader(chatId) {
    var panel = qs('[data-inbox-chat-panel]');
    if (!panel) return;
    if (!qs('.inbox-chat-header', panel)) return;
    var chat = getChat(chatId);
    if (!chat) return;

    ensureHeaderControls(panel);

    var strong = qs('.inbox-chat-header strong', panel);
    if (strong) strong.textContent = chat.name;
    var sub = qs('.inbox-chat-header .text-muted', panel);
    if (sub) sub.innerHTML = '<span class="status-dot online"></span> Online • ' + chat.channel;

    var select = qs('[data-chat-status-select]', panel);
    if (select) {
      if (chat.status.indexOf('closed') > -1) select.value = 'closed';
      else if (chat.status.indexOf('resolved') > -1) select.value = 'resolved';
      else if (chat.status.indexOf('pending') > -1) select.value = 'pending';
      else select.value = 'active';
    }
  }

  function updateRightInfo(chatId) {
    var chat = getChat(chatId);
    if (!chat) return;
    qsa('.inbox-info-card strong').forEach(function (s) {
      if (/Valiyev|Ahmad/i.test(s.textContent || '')) s.textContent = chat.name;
    });
    renderTagsAndNotes(chatId);
  }

  function tickSLA() {
    var panel = qs('[data-inbox-chat-panel]');
    var el = panel ? qs('[data-sla-timer]', panel) : null;
    if (!el || !state.activeChatId) return;
    var chat = getChat(state.activeChatId);
    if (!chat || !chat.slaDueAt) return;

    var remain = Math.max(0, chat.slaDueAt - Date.now());
    var m = Math.floor(remain / 60000);
    var s = Math.floor((remain % 60000) / 1000);
    el.textContent = 'SLA ' + String(m).padStart(2, '0') + ':' + String(s).padStart(2, '0');
    el.className = 'badge sla-timer ' + (remain < 60000 ? 'badge-danger' : remain < 180000 ? 'badge-warning' : 'badge-success');
  }

  function startSLATimer() {
    if (slaTimerInterval) clearInterval(slaTimerInterval);
    slaTimerInterval = setInterval(tickSLA, 1000);
    tickSLA();
  }

  function setActiveChat(item) {
    var list = item.closest('[data-inbox-list]');
    qsa('.inbox-chat-item', list).forEach(function (n) {
      n.classList.remove('active');
      n.setAttribute('aria-selected', 'false');
    });
    item.classList.add('active');
    item.setAttribute('aria-selected', 'true');

    var panel = qs('[data-inbox-chat-panel]');
    if (!panel) return;
    var empty = qs('[data-inbox-empty]', panel);
    if (empty) empty.hidden = true;

    if (!qs('.inbox-chat-header', panel)) {
      window.location.href = './02-chat-open.html';
      return;
    }

    var id = item.getAttribute('data-chat-id');
    state.activeChatId = id;
    if (state.chats[id]) state.chats[id].unread = 0;
    saveState();

    renderSingleChatListItem(item, state.chats[id]);
    updateHeader(id);
    updateRightInfo(id);
    renderMessages(id);
    startSLATimer();
  }

  function appendMessage(chatId, who, text) {
    var chat = getChat(chatId);
    if (!chat) return;
    chat.messages.push({ who: who, text: text, time: nowHM() });
    chat.preview = text;
    if (who === 'in' && state.activeChatId !== chatId) chat.unread = (chat.unread || 0) + 1;
    saveState();

    var item = qs('.inbox-chat-item[data-chat-id="' + chatId + '"]');
    if (item) renderSingleChatListItem(item, chat);

    if (state.activeChatId === chatId) renderMessages(chatId);
  }

  function simulateTypingReply(chatId) {
    var panel = qs('[data-inbox-chat-panel]');
    var msgBox = panel ? qs('.inbox-messages', panel) : null;
    if (!msgBox || state.activeChatId !== chatId) return;

    var typing = document.createElement('div');
    typing.className = 'msg-group in';
    typing.innerHTML = '<div class="msg-bubble"><span class="typing-dots"><span></span><span></span><span></span></span> Mijoz yozyapti...</div>';
    msgBox.appendChild(typing);
    msgBox.scrollTop = msgBox.scrollHeight;

    setTimeout(function () {
      if (typing.parentNode) typing.parentNode.removeChild(typing);
      appendMessage(chatId, 'in', 'Rahmat, oldim. Yana bir savol bo‘lsa yozaman.');
    }, 1500 + Math.floor(Math.random() * 1200));
  }

  function initComposer() {
    var panel = qs('[data-inbox-chat-panel]');
    if (!panel) return;
    var composer = qs('[data-chat-composer]', panel);
    var sendBtn = qs('.inbox-send-row .btn-primary', panel);
    var msgBox = qs('.inbox-messages', panel);
    if (!composer || !sendBtn || !msgBox) return;

    function sendMessage() {
      var text = (composer.value || '').trim();
      if (!text || !state.activeChatId) return;
      appendMessage(state.activeChatId, 'out', text);
      composer.value = '';
      sendBtn.classList.add('is-sent');
      setTimeout(function () { sendBtn.classList.remove('is-sent'); }, 500);
      simulateTypingReply(state.activeChatId);
    }

    sendBtn.addEventListener('click', sendMessage);
    composer.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        sendMessage();
      }
    });

    qsa('[data-quick-reply]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        composer.value = btn.getAttribute('data-quick-reply') || '';
        composer.focus();
      });
    });

    var toggle = qs('[data-quick-replies-toggle]', panel);
    var menu = qs('[data-quick-replies-menu]', panel);
    if (toggle && menu) toggle.addEventListener('click', function () { menu.hidden = !menu.hidden; });
  }

  function initAssignFlow() {
    var modal = qs('[data-modal="assign-agent"]');
    if (!modal) return;
    qsa('.modal-body .list-item', modal).forEach(function (btn) {
      btn.addEventListener('click', function () {
        qsa('.modal-body .list-item', modal).forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');

        var id = state.activeChatId;
        if (!id || !state.chats[id]) return;
        var name = (qs('.item-title', btn) || {}).textContent || 'Agent';
        state.chats[id].agent = name;
        var active = qs('.inbox-chat-item.active');
        if (active) renderSingleChatListItem(active, state.chats[id]);
        saveState();
      });
    });
  }

  function initNotesTagsPersistence() {
    qsa('.inbox-info-card textarea').forEach(function (ta) {
      ta.addEventListener('input', function () {
        var id = state.activeChatId;
        if (!id || !state.chats[id]) return;
        state.chats[id].notes = ta.value;
        saveState();
      });
    });

    qsa('[data-action="save"]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var id = state.activeChatId;
        if (!id || !state.chats[id]) return;
        var notes = qs('.inbox-info-card textarea');
        if (notes) state.chats[id].notes = notes.value;
        saveState();
      });
    });

    qsa('[data-message="Tag qo\'shish oynasi ochildi"]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var id = state.activeChatId;
        if (!id || !state.chats[id]) return;
        var tag = prompt("Yangi tag kiriting:", "Follow-up");
        if (!tag) return;
        tag = String(tag).trim();
        if (!tag) return;
        if (!state.chats[id].tags) state.chats[id].tags = [];
        if (state.chats[id].tags.indexOf(tag) === -1) state.chats[id].tags.push(tag);
        saveState();
        renderTagsAndNotes(id);
      });
    });
  }

  function initActions() {
    var closeBtn = qs('.inbox-chat-header [data-message="Chat yopildi"]');
    if (closeBtn) {
      closeBtn.addEventListener('click', function () {
        var id = state.activeChatId;
        if (!id || !state.chats[id]) return;
        var isClosed = state.chats[id].status.indexOf('closed') > -1;
        state.chats[id].status = isClosed ? 'active' : 'closed';
        var active = qs('.inbox-chat-item.active');
        if (active) renderSingleChatListItem(active, state.chats[id]);
        closeBtn.innerHTML = isClosed ? '<i data-lucide="check"></i> Close' : '<i data-lucide="rotate-ccw"></i> Reopen';
        saveState();
        applyListFilters();
        if (window.lucide && window.lucide.createIcons) window.lucide.createIcons();
      });
    }
  }

  function fakeIncomingEvent() {
    var allIds = Object.keys(state.chats);
    if (!allIds.length) return;

    var useNewChat = Math.random() < 0.28;
    var targetId = allIds[Math.floor(Math.random() * allIds.length)];

    if (useNewChat) {
      var names = ['Jasur T.', 'Munisa A.', 'Asadbek R.', 'Shahnoza M.'];
      var channels = ['Web', 'Telegram', 'WhatsApp', 'Instagram', 'Email'];
      var name = names[Math.floor(Math.random() * names.length)];
      var channel = channels[Math.floor(Math.random() * channels.length)];
      targetId = uid();
      state.chats[targetId] = {
        id: targetId,
        status: 'active unread',
        agent: 'Unassigned',
        channel: channel,
        name: name,
        preview: 'Yangi murojaat: yordam kerak',
        unread: 1,
        messages: [{ who: 'in', text: 'Salom, yordam kerak edi.', time: nowHM() }],
        slaDueAt: slaDueAtByChannel(channel),
        notes: '',
        tags: ['New']
      };
      appendChatListItem(state.chats[targetId]);
    } else {
      var phrases = [
        'Yana bir savolim bor edi.',
        'Rahmat, tushunarli bo‘ldi.',
        'Demo vaqtini o‘zgartira olamizmi?',
        'Invoice hali ham ochilmadi.'
      ];
      var txt = phrases[Math.floor(Math.random() * phrases.length)];
      appendMessage(targetId, 'in', txt);
      if (state.chats[targetId]) {
        state.chats[targetId].status = (state.chats[targetId].status + ' unread').replace(/\s+/g, ' ').trim();
        state.chats[targetId].slaDueAt = slaDueAtByChannel(state.chats[targetId].channel);
      }
    }

    saveState();
    applyListFilters();
  }

  function initIncomingStream() {
    if (incomingInterval) clearInterval(incomingInterval);
    incomingInterval = setInterval(function () {
      if (document.hidden) return;
      if (Date.now() - (state.lastIncomingAt || 0) < 25000) return;
      state.lastIncomingAt = Date.now();
      fakeIncomingEvent();
      saveState();
    }, 9000);
  }

  function initEvents() {
    var list = qs('[data-inbox-list]');
    if (list) {
      list.addEventListener('click', function (e) {
        var item = e.target.closest('.inbox-chat-item');
        if (item) setActiveChat(item);
      });
    }

    var search = qs('[data-inbox-search]');
    if (search) search.addEventListener('input', applyListFilters);

    qsa('[data-tab-group="inbox-list"][data-tab]').forEach(function (tab) {
      tab.addEventListener('click', function () { setTimeout(applyListFilters, 0); });
    });
  }

  function restoreActive() {
    var item = state.activeChatId ? qs('.inbox-chat-item[data-chat-id="' + state.activeChatId + '"]') : null;
    if (!item) item = qs('.inbox-chat-item.active') || qs('.inbox-chat-item');
    if (item) setActiveChat(item);
  }

  function init() {
    if (!qs('[data-inbox-list]')) return;
    loadState();
    bootstrapFromDOM();
    initEvents();
    initComposer();
    initAssignFlow();
    initNotesTagsPersistence();
    initActions();
    applyListFilters();
    restoreActive();
    initIncomingStream();
  }

  document.addEventListener('DOMContentLoaded', init);
})();
