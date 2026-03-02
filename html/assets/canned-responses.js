(function () {
  "use strict";

  function toast(message, type) {
    if (window.pushToast) {
      window.pushToast(message, type || "info");
      return;
    }
    var root =
      document.getElementById("qc-toast") ||
      (function () {
        var r = document.createElement("div");
        r.id = "qc-toast";
        r.style.position = "fixed";
        r.style.right = "16px";
        r.style.bottom = "16px";
        r.style.zIndex = "9999";
        document.body.appendChild(r);
        return r;
      })();
    var item = document.createElement("div");
    item.textContent = message;
    item.style.cssText =
      "margin-top:8px;padding:10px 12px;border-radius:10px;color:#fff;background:#334155;font-size:13px";
    if (type === "success") item.style.background = "#059669";
    if (type === "warn") item.style.background = "#d97706";
    root.appendChild(item);
    setTimeout(function () {
      item.remove();
    }, 1600);
  }

  function rows() {
    return Array.from(document.querySelectorAll("[data-cr-item]"));
  }

  function updateStats() {
    var list = rows().filter(function (r) {
      return !r.hidden;
    });
    var total = list.length;
    var top = list.reduce(function (max, r) {
      return Math.max(max, Number(r.getAttribute("data-used") || 0));
    }, 0);
    var today = Math.round(total * 2.4 + 5);
    var totalEl = document.querySelector("[data-cr-total]");
    var topEl = document.querySelector("[data-cr-top]");
    var todayEl = document.querySelector("[data-cr-today]");
    if (totalEl) totalEl.textContent = String(total);
    if (topEl) topEl.textContent = String(top);
    if (todayEl) todayEl.textContent = String(today);
  }

  function applyFilters() {
    var q = (document.querySelector("[data-cr-search]")?.value || "")
      .toLowerCase()
      .trim();
    var c = document.querySelector("[data-cr-category]")?.value || "all";
    var l = document.querySelector("[data-cr-language]")?.value || "all";

    rows().forEach(function (r) {
      var t = r.textContent.toLowerCase();
      var rc = r.getAttribute("data-category");
      var rl = r.getAttribute("data-language");
      var okQ = !q || t.includes(q);
      var okC = c === "all" || rc === c;
      var okL = l === "all" || rl === l;
      r.hidden = !(okQ && okC && okL);
    });

    updateStats();
  }

  function copyRow(btn) {
    var row = btn.closest("[data-cr-item]");
    var text = row?.children?.[1]?.textContent?.trim() || "";
    if (!text) return;
    navigator.clipboard
      ?.writeText(text)
      .then(function () {
        toast("Shablon nusxalandi", "success");
      })
      .catch(function () {
        toast("Clipboard xatosi", "warn");
      });
  }

  function editRow(btn) {
    var row = btn.closest("[data-cr-item]");
    if (!row) return;
    var current = row.children[1].textContent.trim();
    var next = prompt("Shablon matnini tahrirlang:", current);
    if (next && next.trim()) {
      row.children[1].textContent = next.trim();
      toast("Shablon yangilandi", "success");
    }
  }

  function createRow() {
    var sc = document.querySelector("[data-cr-new-shortcut]")?.value?.trim();
    var tx = document.querySelector("[data-cr-new-text]")?.value?.trim();
    var ct =
      document.querySelector("[data-cr-new-category]")?.value || "support";
    if (!sc || !tx) {
      toast("Shortcut va matn majburiy", "warn");
      return;
    }

    var tbody = document.querySelector("[data-cr-table]");
    if (!tbody) return;
    var tr = document.createElement("tr");
    tr.setAttribute("data-cr-item", "");
    tr.setAttribute("data-category", ct);
    tr.setAttribute("data-language", "uz");
    tr.setAttribute("data-used", "0");

    var catBadge =
      ct === "greeting"
        ? "badge-info"
        : ct === "pricing"
          ? "badge-primary"
          : ct === "followup"
            ? "badge-success"
            : "badge-warning";
    var catText =
      ct === "greeting"
        ? "Salomlashuv"
        : ct === "pricing"
          ? "Pricing"
          : ct === "followup"
            ? "Follow-up"
            : "Support";

    tr.innerHTML =
      "<td><code>" +
      sc +
      "</code></td><td>" +
      tx +
      '</td><td><span class="badge ' +
      catBadge +
      '">' +
      catText +
      '</span></td><td>UZ</td><td>0</td><td><button class="btn btn-ghost btn-sm" type="button" data-cr-copy>Copy</button> <button class="btn btn-ghost btn-sm" type="button" data-cr-edit>Edit</button></td>';
    tbody.prepend(tr);

    document.querySelector("[data-cr-new-shortcut]").value = "";
    document.querySelector("[data-cr-new-text]").value = "";
    toast("Yangi canned response qo‘shildi", "success");
    applyFilters();
  }

  document.addEventListener("input", function (e) {
    if (
      e.target.matches(
        "[data-cr-search], [data-cr-category], [data-cr-language]",
      )
    )
      applyFilters();
  });

  document.addEventListener("click", function (e) {
    var b = e.target.closest("[data-cr-copy]");
    if (b) {
      e.preventDefault();
      copyRow(b);
      return;
    }

    b = e.target.closest("[data-cr-edit]");
    if (b) {
      e.preventDefault();
      editRow(b);
      return;
    }

    b = e.target.closest("[data-cr-reset]");
    if (b) {
      e.preventDefault();
      var s = document.querySelector("[data-cr-search]");
      if (s) s.value = "";
      var c = document.querySelector("[data-cr-category]");
      if (c) c.value = "all";
      var l = document.querySelector("[data-cr-language]");
      if (l) l.value = "all";
      applyFilters();
      return;
    }

    b = e.target.closest("[data-cr-create]");
    if (b) {
      e.preventDefault();
      createRow();
    }
  });

  document.addEventListener("DOMContentLoaded", applyFilters);
})();
