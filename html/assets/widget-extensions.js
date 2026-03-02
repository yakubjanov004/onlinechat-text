(function () {
  "use strict";
  function toast(msg) {
    const root =
      document.getElementById("qc-toast") ||
      (() => {
        const r = document.createElement("div");
        r.id = "qc-toast";
        r.style = "position:fixed;right:16px;bottom:16px;z-index:9999";
        document.body.appendChild(r);
        return r;
      })();
    const d = document.createElement("div");
    d.textContent = msg;
    d.style =
      "margin-top:8px;padding:10px 12px;border-radius:10px;background:#1d4ed8;color:#fff;font-size:13px";
    root.appendChild(d);
    setTimeout(() => d.remove(), 1700);
  }

  function startPrechat() {
    const name = document.querySelector("[data-prechat-name]")?.value?.trim();
    const email = document.querySelector("[data-prechat-email]")?.value?.trim();
    const msg = document.querySelector("[data-prechat-message]")?.value?.trim();
    const consent = document.querySelector("[data-prechat-consent]")?.checked;
    if (!name || !email || !msg) {
      toast("Majburiy maydonlarni to‘ldiring");
      return;
    }
    if (!consent) {
      toast("Rozilikni tasdiqlang");
      return;
    }
    toast("Suhbat yaratildi, agentga uzatildi");
  }

  function filterKb() {
    const q = (document.querySelector("[data-kb-search]")?.value || "")
      .toLowerCase()
      .trim();
    document.querySelectorAll("[data-kb-item]").forEach((el) => {
      el.hidden = !(!q || el.textContent.toLowerCase().includes(q));
    });
  }

  document.addEventListener("click", (e) => {
    const b = e.target.closest("[data-prechat-start]");
    if (b) {
      e.preventDefault();
      startPrechat();
    }
  });
  document.addEventListener("input", (e) => {
    if (e.target.matches("[data-kb-search]")) filterKb();
  });
})();
