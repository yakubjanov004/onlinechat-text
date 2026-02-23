(function () {
  "use strict";

  var STORE_KEY = "qc_inbox_state_v2";

  function qs(sel, root) { return (root || document).querySelector(sel); }
  function qsa(sel, root) { return Array.from((root || document).querySelectorAll(sel)); }
  function nowHM() { var d = new Date(); return String(d.getHours()).padStart(2, '0') + ':' + String(d.getMinutes()).padStart(2, '0'); }

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

  var state = { chats: {}, activeChatId: null };
  var slaTimerInterval = null;

  function loadState() {
    try {
      var raw = localStorage.getItem(STORE_KEY);
      if (raw) state = JSON.parse(raw);
    } catch (e) {}
    if (!state || !state.chats) state = { chats: {}, activeChatId: null };
  }

  function saveState() {
    try { localStorage.setItem(STORE_KEY, JSON.stringify(state)); } catch (e) {}
  }

  function bootstrapFromDOM() {
    qsa('.inbox-chat-item[data-chat-id]').forEach(function (item) {
      var id = item.getAttribute('data-chat-id');
      if (!id) return;
      if (!state.chats[id]) {
        state.chats[id] = {
          status: (item.getAttribute('data-status') || 'active').toLowerCase(),
          agent: item.getAttribute('data-agent') || 'Unassigned',
          channel: item.getAttribute('data-channel') || 'Web',
          name: item.getAttribute('data-name') || 'Mijoz',
          messages: fallbackMessages[id] || fallbackMessages['chat-101'],
          slaDueAt: Date.now() + (2 + Math.floor(Math.random() * 6)) * 60 * 1000
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

  function applyListFilters() {
    var list = qs('[data-inbox-list]');
    if (!list) return;
    var activeTab = qs('[data-tab-group="inbox-list"].active');
    var mode = activeTab ? activeTab.getAttribute('data-tab') : 'all';
    var q = ((qs('[data-inbox-search]') || {}).value || '').toLowerCase().trim();

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
    });
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
        if (item) item.setAttribute('data-status', state.chats[id].status);
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
    saveState();
    updateHeader(id);
    updateRightInfo(id);
    renderMessages(id);
    startSLATimer();
  }

  function appendMessage(chatId, who, text) {
    var chat = getChat(chatId);
    if (!chat) return;
    chat.messages.push({ who: who, text: text, time: nowHM() });
    saveState();
    renderMessages(chatId);
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
        if (active) {
          active.setAttribute('data-agent', name);
          var labels = qsa('.text-muted', active);
          if (labels[labels.length - 1]) labels[labels.length - 1].textContent = 'Agent: ' + name;
        }
        saveState();
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
        if (active) active.setAttribute('data-status', state.chats[id].status);
        closeBtn.innerHTML = isClosed ? '<i data-lucide="check"></i> Close' : '<i data-lucide="rotate-ccw"></i> Reopen';
        saveState();
        applyListFilters();
        if (window.lucide && window.lucide.createIcons) window.lucide.createIcons();
      });
    }
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
    initActions();
    applyListFilters();
    restoreActive();
  }

  document.addEventListener('DOMContentLoaded', init);
})();
