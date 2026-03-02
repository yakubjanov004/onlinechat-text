(function () {
  "use strict";
  function toast(msg) {
    const r =
      document.getElementById("qc-toast") ||
      (() => {
        const x = document.createElement("div");
        x.id = "qc-toast";
        x.style = "position:fixed;right:16px;bottom:16px;z-index:9999";
        document.body.appendChild(x);
        return x;
      })();
    const d = document.createElement("div");
    d.textContent = msg;
    d.style =
      "margin-top:8px;padding:10px 12px;border-radius:10px;background:#0f766e;color:#fff;font-size:13px";
    r.appendChild(d);
    setTimeout(() => d.remove(), 1600);
  }
  function filterHelp() {
    const q = (document.querySelector("[data-help-search]")?.value || "")
      .toLowerCase()
      .trim();
    document.querySelectorAll("[data-help-item]").forEach((el) => {
      el.hidden = !(!q || el.textContent.toLowerCase().includes(q));
    });
  }
  function submitTicket() {
    const s = document.querySelector("[data-ticket-subject]")?.value?.trim();
    const b = document.querySelector("[data-ticket-body]")?.value?.trim();
    if (!s || !b) {
      toast("Mavzu va tavsifni to‘ldiring");
      return;
    }
    toast("Ticket yuborildi: #SUP-" + Math.floor(400 + Math.random() * 500));
  }
  function startTour() {
    let i = 1;
    const steps = [...document.querySelectorAll("[data-tour-step]")];
    if (!steps.length) {
      toast("Tour elementlari topilmadi");
      return;
    }
    steps.forEach((x) => (x.style.outline = "none"));
    const timer = setInterval(() => {
      steps.forEach((x) => (x.style.outline = "none"));
      const cur = steps.find(
        (s) => s.getAttribute("data-tour-step") === String(i),
      );
      if (cur) {
        cur.style.outline = "2px solid #2563eb";
        toast("Tour step " + i);
      }
      i++;
      if (i > steps.length) {
        clearInterval(timer);
        toast("Tour tugadi");
      }
    }, 900);
  }
  function syncTicketEmpty() {
    const rows = document.querySelectorAll("[data-ticket-list] tr");
    const empty = document.querySelector('[data-empty-state="tickets"]');
    const table = document.querySelector('[data-ticket-table]');
    if (!empty || !table) return;
    const hasRows = rows.length > 0;
    empty.hidden = hasRows;
    table.hidden = !hasRows;
  }

  document.addEventListener("input", (e) => {
    if (e.target.matches("[data-help-search]")) filterHelp();
  });
  document.addEventListener("click", (e) => {
    let b = e.target.closest("[data-ticket-submit]");
    if (b) {
      e.preventDefault();
      submitTicket();
      return;
    }
    b = e.target.closest("[data-tour-start]");
    if (b) {
      e.preventDefault();
      startTour();
    }
  });

  document.addEventListener("DOMContentLoaded", () => {
    syncTicketEmpty();
  });
})();
