(function () {
  "use strict";

  function bySel(sel, root) { return (root || document).querySelector(sel); }
  function bySelAll(sel, root) { return Array.from((root || document).querySelectorAll(sel)); }

  var demoMessages = {
    "chat-101": [
      { who: "in", text: "Salom, Pro tarifda nechta operator qo'shsa bo'ladi?", time: "14:22" },
      { who: "out", text: "Assalomu alaykum! Pro tarifda 10 tagacha operator qo'shish mumkin.", time: "14:23" },
      { who: "in", text: "Telegram integratsiyasi ham kiradimi?", time: "14:24" },
      { who: "out", text: "Ha, Telegram, Web Widget va Email integratsiyalari mavjud.", time: "14:25" }
    ],
    "chat-106": [
      { who: "in", text: "Invoice PDF yuklanmayapti", time: "16:10" },
      { who: "out", text: "Fayl hajmini tekshirib ko'rasizmi? 20MB limit bor.", time: "16:11" },
      { who: "in", text: "12MB. Hali ham error chiqyapti.", time: "16:12" },
      { who: "out", text: "Rahmat, texnik jamoaga eskalatsiya qildim. 10 daqiqada qaytaman.", time: "16:13" }
    ]
  };

  function renderMessages(panel, chatId) {
    var box = bySel('.inbox-messages', panel);
    if (!box) return;
    var list = demoMessages[chatId] || demoMessages["chat-101"];
    var html = '<div class="msg-system">Chat boshlandi • Bugun</div>';
    list.forEach(function (m) {
      html += '<div class="msg-group ' + m.who + '">';
      html += '<div class="msg-bubble">' + m.text + '</div>';
      html += '<div class="msg-meta">' + (m.who === 'in' ? 'Mijoz' : 'Agent') + ' • ' + m.time + '</div>';
      html += '</div>';
    });
    box.innerHTML = html;
    box.scrollTop = box.scrollHeight;
  }

  function updateHeader(panel, item) {
    var strong = bySel('.inbox-chat-header strong', panel);
    if (strong) strong.textContent = item.getAttribute('data-name') || 'Mijoz';
    var sub = bySel('.inbox-chat-header .text-muted', panel);
    if (sub) sub.innerHTML = '<span class="status-dot online"></span> Online • ' + (item.getAttribute('data-channel') || 'Web');
  }

  function updateRightInfo(item) {
    var name = item.getAttribute('data-name') || 'Mijoz';
    bySelAll('.inbox-info-card strong').forEach(function (s) {
      if (s.textContent && (s.textContent.indexOf('Valiyev') > -1 || s.textContent.indexOf('Ahmad') > -1)) {
        s.textContent = name;
      }
    });
  }

  function setActiveChat(item) {
    var list = item.closest('[data-inbox-list]');
    bySelAll('.inbox-chat-item', list).forEach(function (n) {
      n.classList.remove('active');
      n.setAttribute('aria-selected', 'false');
    });
    item.classList.add('active');
    item.setAttribute('aria-selected', 'true');

    var panel = bySel('[data-inbox-chat-panel]');
    if (!panel) return;

    var empty = bySel('[data-inbox-empty]', panel);
    if (empty) empty.hidden = true;

    if (!bySel('.inbox-chat-header', panel)) {
      window.location.href = './02-chat-open.html';
      return;
    }

    updateHeader(panel, item);
    updateRightInfo(item);
    renderMessages(panel, item.getAttribute('data-chat-id'));
  }

  function applyListFilters() {
    var list = bySel('[data-inbox-list]');
    if (!list) return;
    var activeTab = bySel('[data-tab-group="inbox-list"].active');
    var mode = activeTab ? activeTab.getAttribute('data-tab') : 'all';
    var q = (bySel('[data-inbox-search]') || {}).value || '';
    q = q.toLowerCase().trim();

    bySelAll('.inbox-chat-item', list).forEach(function (item) {
      var status = (item.getAttribute('data-status') || '').toLowerCase();
      var name = (item.getAttribute('data-name') || '').toLowerCase();
      var preview = (bySel('.preview', item) || {}).textContent || '';
      var text = (name + ' ' + preview.toLowerCase());

      var okTab = mode === 'all' || status.indexOf(mode) > -1;
      var okSearch = !q || text.indexOf(q) > -1;
      item.style.display = (okTab && okSearch) ? '' : 'none';
    });
  }

  function initComposer() {
    var panel = bySel('[data-inbox-chat-panel]');
    if (!panel) return;
    var composer = bySel('[data-chat-composer]', panel);
    var sendBtn = bySel('.inbox-send-row .btn-primary', panel);
    var msgBox = bySel('.inbox-messages', panel);
    if (!composer || !sendBtn || !msgBox) return;

    function sendMessage() {
      var text = (composer.value || '').trim();
      if (!text) return;
      var t = new Date();
      var hm = String(t.getHours()).padStart(2, '0') + ':' + String(t.getMinutes()).padStart(2, '0');
      var wrap = document.createElement('div');
      wrap.className = 'msg-group out';
      wrap.innerHTML = '<div class="msg-bubble"></div><div class="msg-meta">Siz • ' + hm + '</div>';
      bySel('.msg-bubble', wrap).textContent = text;
      msgBox.appendChild(wrap);
      composer.value = '';
      msgBox.scrollTop = msgBox.scrollHeight;
      sendBtn.classList.add('is-sent');
      setTimeout(function () { sendBtn.classList.remove('is-sent'); }, 500);
    }

    sendBtn.addEventListener('click', sendMessage);
    composer.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        sendMessage();
      }
    });

    bySelAll('[data-quick-reply]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        composer.value = btn.getAttribute('data-quick-reply') || '';
        composer.focus();
      });
    });

    var toggle = bySel('[data-quick-replies-toggle]', panel);
    var menu = bySel('[data-quick-replies-menu]', panel);
    if (toggle && menu) {
      toggle.addEventListener('click', function () { menu.hidden = !menu.hidden; });
    }
  }

  function initAssignFlow() {
    var modal = bySel('[data-modal="assign-agent"]');
    if (!modal) return;
    bySelAll('.modal-body .list-item', modal).forEach(function (btn) {
      btn.addEventListener('click', function () {
        bySelAll('.modal-body .list-item', modal).forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');

        var name = (bySel('.item-title', btn) || {}).textContent || 'Agent';
        var active = bySel('.inbox-chat-item.active');
        if (active) {
          active.setAttribute('data-agent', name);
          var agentLabel = bySel('.text-muted', active);
          if (agentLabel) agentLabel.textContent = 'Agent: ' + name;
        }
      });
    });
  }

  function initActions() {
    var closeBtn = bySel('.inbox-chat-header [data-message="Chat yopildi"]');
    if (closeBtn) {
      closeBtn.addEventListener('click', function () {
        var active = bySel('.inbox-chat-item.active');
        if (!active) return;
        var st = active.getAttribute('data-status') || '';
        if (st.indexOf('closed') > -1) {
          active.setAttribute('data-status', st.replace('closed', 'active').trim());
          closeBtn.innerHTML = '<i data-lucide="check"></i> Close';
        } else {
          active.setAttribute('data-status', (st + ' closed').trim());
          closeBtn.innerHTML = '<i data-lucide="rotate-ccw"></i> Reopen';
        }
        applyListFilters();
        if (window.lucide && window.lucide.createIcons) window.lucide.createIcons();
      });
    }
  }

  function init() {
    var list = bySel('[data-inbox-list]');
    if (!list) return;

    list.addEventListener('click', function (e) {
      var item = e.target.closest('.inbox-chat-item');
      if (!item) return;
      setActiveChat(item);
    });

    var search = bySel('[data-inbox-search]');
    if (search) search.addEventListener('input', applyListFilters);

    bySelAll('[data-tab-group="inbox-list"][data-tab]').forEach(function (tab) {
      tab.addEventListener('click', function () { setTimeout(applyListFilters, 0); });
    });

    initComposer();
    initAssignFlow();
    initActions();
    applyListFilters();
  }

  document.addEventListener('DOMContentLoaded', init);
})();
