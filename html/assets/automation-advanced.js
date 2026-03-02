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
    setTimeout(() => d.remove(), 1500);
  }

  function addNode(type) {
    const canvas = document.querySelector("[data-bot-canvas]");
    if (!canvas) return;
    const i = canvas.querySelectorAll("[data-bot-node]").length + 1;
    const row = document.createElement("div");
    row.className = "list-item";
    row.setAttribute("data-bot-node", "");
    row.innerHTML =
      '<div class="item-main"><div class="item-title">' +
      i +
      ") " +
      type +
      ' node</div><div class="item-sub">Yangi blok qo\'shildi</div></div><button class="btn btn-ghost btn-sm" type="button" data-node-remove>Remove</button>';
    canvas.appendChild(row);
    toast(type + " node qo‘shildi");
  }

  document.addEventListener("click", (e) => {
    let b = e.target.closest("[data-node-type]");
    if (b) {
      e.preventDefault();
      addNode(b.getAttribute("data-node-type"));
      return;
    }
    b = e.target.closest("[data-bot-add-node]");
    if (b) {
      e.preventDefault();
      addNode("message");
      return;
    }
    b = e.target.closest("[data-node-remove]");
    if (b) {
      e.preventDefault();
      b.closest("[data-bot-node]")?.remove();
      toast("Node o‘chirildi");
      return;
    }
    b = e.target.closest("[data-bot-save]");
    if (b) {
      e.preventDefault();
      toast("Bot flow saqlandi");
      return;
    }
    b = e.target.closest("[data-template-apply]");
    if (b) {
      e.preventDefault();
      toast("Template qo‘llandi: " + b.getAttribute("data-template-apply"));
      return;
    }
    b = e.target.closest("[data-route-add]");
    if (b) {
      e.preventDefault();
      const list = document.querySelector("[data-route-list]");
      if (list) {
        const tr = document.createElement("tr");
        tr.innerHTML =
          '<td>New rule</td><td>channel=web</td><td>Support</td><td>5</td><td><button class="btn btn-ghost btn-sm" type="button" data-route-toggle>ON</button></td>';
        list.appendChild(tr);
      }
      toast("Routing rule qo‘shildi");
      return;
    }
    b = e.target.closest("[data-route-toggle]");
    if (b) {
      e.preventDefault();
      b.textContent = b.textContent === "ON" ? "OFF" : "ON";
      toast("Rule holati yangilandi");
    }
  });
})();
