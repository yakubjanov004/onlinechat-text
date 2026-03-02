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
      "margin-top:8px;padding:10px 12px;border-radius:10px;background:#1e40af;color:#fff;font-size:13px";
    r.appendChild(d);
    setTimeout(() => d.remove(), 1400);
  }

  function openModal() {
    const o = document.querySelector('[data-modal="global-search"]');
    if (!o) return;
    o.hidden = false;
    requestAnimationFrame(() => o.classList.add("is-open"));
    document.body.classList.add("modal-open");
    const i = document.querySelector("[data-gs-input]");
    if (i) {
      i.focus();
      i.select?.();
    }
  }

  function closeModal() {
    const o = document.querySelector('[data-modal="global-search"].is-open');
    if (!o) return;
    o.classList.remove("is-open");
    setTimeout(() => (o.hidden = true), 120);
    document.body.classList.remove("modal-open");
  }

  function applyModalFilter() {
    const q = (document.querySelector("[data-gs-input]")?.value || "")
      .toLowerCase()
      .trim();
    const f =
      document
        .querySelector("[data-gs-filter].active")
        ?.getAttribute("data-gs-filter") || "all";
    document.querySelectorAll("[data-gs-item]").forEach((el) => {
      const t = el.getAttribute("data-type");
      const okF = f === "all" || f === t;
      const okQ = !q || el.textContent.toLowerCase().includes(q);
      el.hidden = !(okF && okQ);
    });
  }

  function applyPageFilter() {
    const q = (document.querySelector("[data-gs-page-search]")?.value || "")
      .toLowerCase()
      .trim();
    const t = document.querySelector("[data-gs-page-type]")?.value || "all";
    document.querySelectorAll("[data-gs-row]").forEach((r) => {
      const rt = r.getAttribute("data-type");
      const okT = t === "all" || t === rt;
      const okQ = !q || r.textContent.toLowerCase().includes(q);
      r.hidden = !(okT && okQ);
    });
  }

  document.addEventListener("click", (e) => {
    let b = e.target.closest("[data-gs-open]");
    if (b) {
      e.preventDefault();
      openModal();
      return;
    }
    b = e.target.closest("[data-modal-close]");
    if (b) {
      e.preventDefault();
      closeModal();
      return;
    }
    b = e.target.closest("[data-gs-filter]");
    if (b) {
      e.preventDefault();
      document
        .querySelectorAll("[data-gs-filter]")
        .forEach((x) => x.classList.remove("active"));
      b.classList.add("active");
      applyModalFilter();
      return;
    }
    b = e.target.closest("[data-gs-item]");
    if (b) {
      e.preventDefault();
      const target = b.getAttribute("data-target");
      if (target) window.location.href = target;
      return;
    }
    b = e.target.closest("[data-gs-page-reset]");
    if (b) {
      e.preventDefault();
      const s = document.querySelector("[data-gs-page-search]");
      const t = document.querySelector("[data-gs-page-type]");
      if (s) s.value = "";
      if (t) t.value = "all";
      applyPageFilter();
      toast("Filtr tozalandi");
      return;
    }
    if (e.target.classList?.contains("modal-overlay")) closeModal();
  });

  document.addEventListener("input", (e) => {
    if (e.target.matches("[data-gs-input]")) applyModalFilter();
    if (e.target.matches("[data-gs-page-search],[data-gs-page-type]"))
      applyPageFilter();
  });

  document.addEventListener("keydown", (e) => {
    if ((e.ctrlKey || e.metaKey) && String(e.key).toLowerCase() === "k") {
      e.preventDefault();
      openModal();
    }
    if (e.key === "Escape") closeModal();
    if (e.key === "Enter") {
      const first = Array.from(
        document.querySelectorAll("[data-gs-item]"),
      ).find((x) => !x.hidden);
      if (
        first &&
        document.querySelector('[data-modal="global-search"].is-open')
      ) {
        e.preventDefault();
        first.click();
      }
    }
  });

  document.addEventListener("DOMContentLoaded", () => {
    applyModalFilter();
    applyPageFilter();
  });
})();
