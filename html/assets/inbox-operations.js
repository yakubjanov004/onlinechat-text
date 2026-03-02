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
      "margin-top:8px;padding:10px 12px;border-radius:10px;background:#0f766e;color:#fff;font-size:13px";
    root.appendChild(d);
    setTimeout(() => d.remove(), 1700);
  }

  function transfer() {
    const agent = document.querySelector('input[name="agent"]:checked')?.value;
    const reason = document
      .querySelector("[data-transfer-reason]")
      ?.value?.trim();
    if (!agent) {
      toast("Agent tanlang");
      return;
    }
    if (!reason) {
      toast("Transfer sababini kiriting");
      return;
    }
    toast("Chat " + agent + " ga transfer qilindi");
  }

  function autoAssign() {
    const first = document.querySelector('input[name="agent"]');
    if (first) {
      first.checked = true;
      toast("Auto-assign: eng mos agent tanlandi");
    }
  }

  function merge() {
    const selected = Array.from(
      document.querySelectorAll("[data-merge-list] input:checked"),
    ).length;
    if (!selected) {
      toast("Kamida bitta chat tanlang");
      return;
    }
    toast(selected + " ta chat birlashtirildi");
  }

  function updateBulkCount() {
    const count = document.querySelectorAll("[data-bulk-item]:checked").length;
    const el = document.querySelector("[data-bulk-count]");
    if (el) el.textContent = String(count);
  }

  function applyBulk() {
    const count = document.querySelectorAll("[data-bulk-item]:checked").length;
    const action =
      document.querySelector("[data-bulk-action]")?.value || "assign";
    const value =
      document.querySelector("[data-bulk-value]")?.value?.trim() || "-";
    if (!count) {
      toast("Hech narsa tanlanmagan");
      return;
    }
    toast(
      "Bulk " + action + " qo‘llandi (" + count + " ta, qiymat: " + value + ")",
    );
  }

  document.addEventListener("click", (e) => {
    let b = e.target.closest("[data-transfer-submit]");
    if (b) {
      e.preventDefault();
      transfer();
      return;
    }
    b = e.target.closest("[data-transfer-auto]");
    if (b) {
      e.preventDefault();
      autoAssign();
      return;
    }
    b = e.target.closest("[data-merge-submit]");
    if (b) {
      e.preventDefault();
      merge();
      return;
    }
    b = e.target.closest("[data-bulk-apply]");
    if (b) {
      e.preventDefault();
      applyBulk();
      return;
    }
    b = e.target.closest("[data-bulk-select-all]");
    if (b) {
      e.preventDefault();
      document
        .querySelectorAll("[data-bulk-item]")
        .forEach((x) => (x.checked = true));
      const m = document.querySelector("[data-bulk-master]");
      if (m) m.checked = true;
      updateBulkCount();
      return;
    }
    b = e.target.closest("[data-bulk-master]");
    if (b) {
      document
        .querySelectorAll("[data-bulk-item]")
        .forEach((x) => (x.checked = b.checked));
      updateBulkCount();
      return;
    }
  });

  document.addEventListener("change", (e) => {
    if (e.target.matches("[data-bulk-item]")) updateBulkCount();
  });
  document.addEventListener("DOMContentLoaded", updateBulkCount);
})();
