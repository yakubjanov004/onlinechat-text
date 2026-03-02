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
      "margin-top:8px;padding:10px 12px;border-radius:10px;background:#334155;color:#fff;font-size:13px";
    r.appendChild(d);
    setTimeout(() => d.remove(), 1500);
  }

  function filterRows() {
    const q = (document.querySelector("[data-ml-search]")?.value || "")
      .toLowerCase()
      .trim();
    document.querySelectorAll("[data-ml-row]").forEach((r) => {
      r.hidden = !(!q || r.textContent.toLowerCase().includes(q));
    });
  }

  function previewLang(lang) {
    const map = {
      uz: { sub: "Online", hello: "Salom! Qanday yordam bera olamiz?" },
      ru: { sub: "Онлайн", hello: "Здравствуйте! Чем можем помочь?" },
      en: { sub: "Online", hello: "Hi! How can we help you?" },
    };
    const v = map[lang] || map.uz;
    const s = document.querySelector("[data-ml-preview-sub]");
    const h = document.querySelector("[data-ml-preview-hello]");
    if (s) s.textContent = v.sub;
    if (h) h.textContent = v.hello;
  }

  document.addEventListener("input", (e) => {
    if (e.target.matches("[data-ml-search]")) filterRows();
  });
  document.addEventListener("click", (e) => {
    let b = e.target.closest("[data-ml-save]");
    if (b) {
      e.preventDefault();
      toast("Til sozlamalari saqlandi");
      return;
    }
    b = e.target.closest("[data-ml-import]");
    if (b) {
      e.preventDefault();
      toast("Import oynasi ochiladi");
      return;
    }
    b = e.target.closest("[data-ml-export]");
    if (b) {
      e.preventDefault();
      toast("JSON export yuklandi");
      return;
    }
    b = e.target.closest("[data-ml-apply]");
    if (b) {
      e.preventDefault();
      filterRows();
      return;
    }
    b = e.target.closest("[data-ml-widget-save]");
    if (b) {
      e.preventDefault();
      toast("Widget til sozlamasi saqlandi");
      return;
    }
    b = e.target.closest("[data-ml-preview-lang]");
    if (b) {
      e.preventDefault();
      previewLang(b.getAttribute("data-ml-preview-lang"));
      return;
    }
  });
})();
