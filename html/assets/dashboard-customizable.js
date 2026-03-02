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
      "margin-top:8px;padding:10px 12px;border-radius:10px;background:#1d4ed8;color:#fff;font-size:13px";
    r.appendChild(d);
    setTimeout(() => d.remove(), 1400);
  }
  function moveCard(btn, dir) {
    const card = btn.closest("[data-widget]");
    if (!card) return;
    const parent = card.parentElement;
    if (dir === "up" && card.previousElementSibling)
      parent.insertBefore(card, card.previousElementSibling);
    if (dir === "down" && card.nextElementSibling)
      parent.insertBefore(card.nextElementSibling, card);
  }
  document.addEventListener("click", (e) => {
    let b = e.target.closest("[data-move]");
    if (b) {
      e.preventDefault();
      moveCard(b, b.getAttribute("data-move"));
      return;
    }
    b = e.target.closest("[data-dc-save]");
    if (b) {
      e.preventDefault();
      toast("Dashboard layout saqlandi");
      return;
    }
    b = e.target.closest("[data-dc-reset]");
    if (b) {
      e.preventDefault();
      window.location.reload();
    }
  });
})();
