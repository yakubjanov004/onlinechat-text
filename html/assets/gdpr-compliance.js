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
      "margin-top:8px;padding:10px 12px;border-radius:10px;background:#111827;color:#fff;font-size:13px";
    r.appendChild(d);
    setTimeout(() => d.remove(), 1500);
  }

  function filterAudit() {
    const q = (document.querySelector("[data-audit-search]")?.value || "")
      .toLowerCase()
      .trim();
    const a = document.querySelector("[data-audit-action]")?.value || "all";
    document.querySelectorAll("[data-audit-row]").forEach((r) => {
      const ra = r.getAttribute("data-action");
      const okA = a === "all" || a === ra;
      const okQ = !q || r.textContent.toLowerCase().includes(q);
      r.hidden = !(okA && okQ);
    });
  }

  document.addEventListener("click", (e) => {
    let b = e.target.closest("[data-gdpr-export]");
    if (b) {
      e.preventDefault();
      toast("Data map eksport qilindi");
      return;
    }
    b = e.target.closest("[data-gdpr-scan]");
    if (b) {
      e.preventDefault();
      toast("Compliance scan yakunlandi: 3 warning");
      return;
    }
    b = e.target.closest("[data-consent-save]");
    if (b) {
      e.preventDefault();
      toast("Consent sozlamalari saqlandi");
      return;
    }
    b = e.target.closest("[data-retention-save]");
    if (b) {
      e.preventDefault();
      toast("Retention policy saqlandi");
      return;
    }
    b = e.target.closest("[data-audit-export]");
    if (b) {
      e.preventDefault();
      toast("Audit CSV yuklandi");
      return;
    }
    b = e.target.closest("[data-audit-filter]");
    if (b) {
      e.preventDefault();
      filterAudit();
      return;
    }
  });
  document.addEventListener("input", (e) => {
    if (e.target.matches("[data-audit-search],[data-audit-action]"))
      filterAudit();
  });
})();
