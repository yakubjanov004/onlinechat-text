(function () {
  "use strict";
  let paused = false;
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
    setTimeout(() => d.remove(), 1400);
  }
  function rnd(base, delta) {
    return Math.max(0, base + Math.floor(Math.random() * delta * 2 - delta));
  }
  function refreshRealtime() {
    const a = document.querySelector("[data-rt-agents]");
    const c = document.querySelector("[data-rt-active]");
    const q = document.querySelector("[data-rt-queue]");
    const r = document.querySelector("[data-rt-resp]");
    if (a) a.textContent = String(rnd(12, 2));
    if (c) c.textContent = String(rnd(37, 5));
    if (q) q.textContent = String(rnd(5, 3));
    if (r) r.textContent = String(rnd(46, 12)) + "s";
  }
  document.addEventListener("click", (e) => {
    let b = e.target.closest("[data-rt-refresh]");
    if (b) {
      e.preventDefault();
      refreshRealtime();
      toast("Realtime yangilandi");
      return;
    }
    b = e.target.closest("[data-rt-pause]");
    if (b) {
      e.preventDefault();
      paused = !paused;
      b.textContent = paused ? "Resume" : "Pause";
      toast(paused ? "Realtime pauza qilindi" : "Realtime davom etmoqda");
      return;
    }
    b = e.target.closest("[data-sr-save]");
    if (b) {
      e.preventDefault();
      const em = document.querySelector("[data-sr-email]")?.value?.trim();
      if (!em) {
        toast("Email kiriting");
        return;
      }
      toast("Schedule saqlandi: " + em);
      return;
    }
    b = e.target.closest("[data-sr-create]");
    if (b) {
      e.preventDefault();
      toast("Yangi schedule formi yuqorida tayyor");
    }
  });
  setInterval(() => {
    if (!paused) refreshRealtime();
  }, 5000);
})();
