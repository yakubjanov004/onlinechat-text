(function () {
  "use strict";

  var page = 1;
  var perPage = 5;

  function ensureToastRoot() {
    var root = document.getElementById("qc-toast");
    if (root) return root;
    root = document.createElement("div");
    root.id = "qc-toast";
    root.style.position = "fixed";
    root.style.right = "16px";
    root.style.bottom = "16px";
    root.style.zIndex = "9999";
    root.style.display = "grid";
    root.style.gap = "8px";
    document.body.appendChild(root);
    return root;
  }

  function toast(message, type) {
    var root = ensureToastRoot();
    var item = document.createElement("div");
    item.textContent = message;
    item.style.padding = "10px 12px";
    item.style.borderRadius = "10px";
    item.style.color = "#fff";
    item.style.fontSize = "13px";
    item.style.boxShadow = "0 10px 24px rgba(15,23,42,.2)";
    item.style.background =
      type === "success"
        ? "#059669"
        : type === "warn"
          ? "#d97706"
          : type === "error"
            ? "#dc2626"
            : "#334155";
    item.style.opacity = "0";
    item.style.transform = "translateY(6px)";
    item.style.transition = "all .15s ease";
    root.appendChild(item);
    requestAnimationFrame(function () {
      item.style.opacity = "1";
      item.style.transform = "translateY(0)";
    });
    setTimeout(function () {
      item.style.opacity = "0";
      item.style.transform = "translateY(6px)";
      setTimeout(function () {
        if (item.parentNode) item.parentNode.removeChild(item);
      }, 170);
    }, 1700);
  }

  function allItems() {
    return Array.from(
      document.querySelectorAll("[data-notification], [data-notification-row]"),
    );
  }
  function tableRows() {
    return Array.from(document.querySelectorAll("[data-notification-row]"));
  }
  function isUnread(el) {
    return el.getAttribute("data-unread") === "true";
  }

  function visibleRows() {
    return tableRows().filter(function (r) {
      return !r.hidden;
    });
  }

  function applyPagination() {
    var rows = visibleRows();
    if (!rows.length) {
      updatePaginationInfo(0, 0, 0);
      return;
    }
    var totalPages = Math.max(1, Math.ceil(rows.length / perPage));
    if (page > totalPages) page = totalPages;
    if (page < 1) page = 1;
    var start = (page - 1) * perPage;
    var end = Math.min(start + perPage, rows.length);

    rows.forEach(function (row, i) {
      row.style.display = i >= start && i < end ? "" : "none";
    });
    updatePaginationInfo(start + 1, end, rows.length);

    var prev = document.querySelector("[data-page-prev]");
    var next = document.querySelector("[data-page-next]");
    if (prev) prev.disabled = page <= 1;
    if (next) next.disabled = page >= totalPages;
  }

  function updatePaginationInfo(from, to, total) {
    var el = document.querySelector("[data-pagination-info]");
    if (el) el.textContent = total ? from + "-" + to + " / " + total : "0 / 0";
  }

  function updateCounters() {
    var items = allItems().filter(function (x) {
      return !x.hidden;
    });
    var total = items.length;
    var unread = items.filter(isUnread).length;
    var read = total - unread;

    var badge = document.querySelector("[data-unread-badge]");
    if (badge) badge.textContent = String(unread);

    var totalEl = document.querySelector("[data-total-count]");
    var unreadEl = document.querySelector("[data-unread-count]");
    var readEl = document.querySelector("[data-read-count]");
    if (totalEl) totalEl.textContent = String(total);
    if (unreadEl) unreadEl.textContent = String(unread);
    if (readEl) readEl.textContent = String(read);
  }

  function markItemAsRead(item) {
    if (!item || !isUnread(item)) return false;
    item.setAttribute("data-unread", "false");
    if (item.matches("[data-notification-row]")) {
      var statusCell = item.children[4];
      if (statusCell)
        statusCell.innerHTML = '<span class="badge badge-success">Read</span>';
      var actionCell = item.children[5];
      if (actionCell)
        actionCell.innerHTML =
          '<button class="btn btn-ghost btn-sm" type="button" data-delete-notification>O‘chirish</button>';
    } else {
      var btn = item.querySelector("[data-mark-read]");
      if (btn) btn.remove();
    }
    return true;
  }

  function setActiveFilterButton(mode) {
    document.querySelectorAll("[data-filter]").forEach(function (btn) {
      btn.classList.toggle("active", btn.getAttribute("data-filter") === mode);
    });
  }

  function applyDropdownFilter(mode) {
    var query = (
      document.querySelector("[data-notification-search-dropdown]")?.value || ""
    )
      .toLowerCase()
      .trim();
    document.querySelectorAll("[data-notification]").forEach(function (el) {
      var unread = isUnread(el);
      var text = el.textContent.toLowerCase();
      var modeOk = mode === "unread" ? unread : true;
      var queryOk = !query || text.includes(query);
      el.hidden = !(modeOk && queryOk);
    });
    updateCounters();
  }

  function filterTable() {
    var type = document.querySelector("[data-type-filter]")?.value || "all";
    var status = document.querySelector("[data-status-filter]")?.value || "all";
    var query = (
      document.querySelector("[data-notification-search]")?.value || ""
    )
      .toLowerCase()
      .trim();

    tableRows().forEach(function (row) {
      var rowType = row.getAttribute("data-type");
      var unread = isUnread(row);
      var text = row.textContent.toLowerCase();
      var matchType = type === "all" || rowType === type;
      var matchStatus =
        status === "all" || (status === "unread" ? unread : !unread);
      var matchQuery = !query || text.includes(query);
      row.hidden = !(matchType && matchStatus && matchQuery);
      if (!row.hidden) row.style.display = "";
    });

    page = 1;
    applyPagination();
    updateCounters();
  }

  function openDetailFromRow(row) {
    var title = row.children[1]?.textContent?.trim() || "-";
    var type = row.getAttribute("data-type") || "-";
    var time = row.children[3]?.textContent?.trim() || "-";
    var status = isUnread(row) ? "Unread" : "Read";

    var t = document.querySelector("[data-detail-title]");
    var ty = document.querySelector("[data-detail-type]");
    var tm = document.querySelector("[data-detail-time]");
    var st = document.querySelector("[data-detail-status]");
    var body = document.querySelector("[data-detail-body]");
    if (t) t.textContent = title;
    if (ty) ty.textContent = type;
    if (tm) tm.textContent = time;
    if (st) st.textContent = status;
    if (body)
      body.textContent =
        "Event payload: type=" +
        type +
        ", status=" +
        status +
        ", source=notification-center";

    var overlay = document.querySelector('[data-modal="notification-detail"]');
    if (overlay) {
      overlay.hidden = false;
      requestAnimationFrame(function () {
        overlay.classList.add("is-open");
      });
      document.body.classList.add("modal-open");
    }
  }

  function closeModal(el) {
    var overlay = el?.closest ? el.closest(".modal-overlay") : null;
    if (!overlay) overlay = document.querySelector(".modal-overlay.is-open");
    if (!overlay) return;
    overlay.classList.remove("is-open");
    setTimeout(function () {
      overlay.hidden = true;
    }, 120);
    document.body.classList.remove("modal-open");
  }

  document.addEventListener("click", function (event) {
    var btn = event.target.closest("[data-mark-read]");
    if (btn) {
      event.preventDefault();
      if (
        markItemAsRead(
          btn.closest("[data-notification], [data-notification-row]"),
        )
      ) {
        updateCounters();
        applyPagination();
        toast("Notification o‘qilgan deb belgilandi", "success");
      }
      return;
    }

    btn = event.target.closest("[data-mark-all-read]");
    if (btn) {
      event.preventDefault();
      var changed = 0;
      allItems().forEach(function (item) {
        if (markItemAsRead(item)) changed++;
      });
      updateCounters();
      applyPagination();
      toast(
        changed
          ? "Barcha notification o‘qilgan qilindi"
          : "Unread notification yo‘q",
        "success",
      );
      return;
    }

    btn = event.target.closest("[data-clear-read]");
    if (btn) {
      event.preventDefault();
      document
        .querySelectorAll(
          '[data-notification-row][data-unread="false"], [data-notification][data-unread="false"]',
        )
        .forEach(function (el) {
          el.remove();
        });
      updateCounters();
      applyPagination();
      toast("O‘qilgan notificationlar tozalandi", "warn");
      return;
    }

    btn = event.target.closest("[data-filter]");
    if (btn) {
      event.preventDefault();
      var mode = btn.getAttribute("data-filter") || "all";
      setActiveFilterButton(mode);
      applyDropdownFilter(mode);
      return;
    }

    btn = event.target.closest("[data-delete-notification]");
    if (btn) {
      event.preventDefault();
      var row = btn.closest("[data-notification-row], [data-notification]");
      if (row) row.remove();
      updateCounters();
      applyPagination();
      toast("Notification o‘chirildi", "warn");
      return;
    }

    btn = event.target.closest("[data-page-prev]");
    if (btn) {
      event.preventDefault();
      page -= 1;
      applyPagination();
      return;
    }

    btn = event.target.closest("[data-page-next]");
    if (btn) {
      event.preventDefault();
      page += 1;
      applyPagination();
      return;
    }

    btn = event.target.closest("[data-modal-close]");
    if (btn) {
      event.preventDefault();
      closeModal(btn);
      return;
    }

    var row = event.target.closest("[data-notification-row]");
    if (row && !event.target.closest("button,input,a")) {
      openDetailFromRow(row);
    }

    if (
      event.target.classList &&
      event.target.classList.contains("modal-overlay")
    )
      closeModal(event.target);
  });

  document.addEventListener("input", function (event) {
    if (
      event.target.matches(
        "[data-notification-search], [data-type-filter], [data-status-filter]",
      )
    )
      filterTable();
    if (event.target.matches("[data-notification-search-dropdown]")) {
      var active =
        document
          .querySelector("[data-filter].active")
          ?.getAttribute("data-filter") || "all";
      applyDropdownFilter(active);
    }
  });

  document.addEventListener("DOMContentLoaded", function () {
    setActiveFilterButton("all");
    applyDropdownFilter("all");
    filterTable();
    updateCounters();
    applyPagination();
  });
})();
