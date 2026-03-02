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
      "margin-top:8px;padding:10px 12px;border-radius:10px;background:#0369a1;color:#fff;font-size:13px";
    r.appendChild(d);
    setTimeout(() => d.remove(), 1600);
  }

  function filterList() {
    const q = (document.querySelector("[data-et-search]")?.value || "")
      .toLowerCase()
      .trim();
    const t = document.querySelector("[data-et-type]")?.value || "all";
    document.querySelectorAll("[data-et-item]").forEach((el) => {
      const type = el.getAttribute("data-type");
      const okT = t === "all" || t === type;
      const okQ = !q || el.textContent.toLowerCase().includes(q);
      el.hidden = !(okT && okQ);
    });
  }

  function resetList() {
    const s = document.querySelector("[data-et-search]");
    if (s) s.value = "";
    const t = document.querySelector("[data-et-type]");
    if (t) t.value = "all";
    filterList();
  }

  function insertBlock(kind) {
    const area = document.querySelector("[data-et-body]");
    if (!area) return;
    const blocks = {
      heading: "\n<h2>{{title}}</h2>",
      paragraph: "\n<p>{{paragraph}}</p>",
      button:
        '\n<a href="{{link}}" style="display:inline-block;padding:10px 14px;background:#2563eb;color:#fff;border-radius:8px;text-decoration:none">{{cta_text}}</a>',
      divider: '\n<hr style="border:none;border-top:1px solid #e5e7eb">',
    };
    area.value += blocks[kind] || "";
    toast("Block qo'shildi: " + kind);
  }

  function renderPreview() {
    const box = document.querySelector("[data-et-preview]");
    const varsRaw = document.querySelector("[data-et-vars]")?.value || "{}";
    let vars = {};
    try {
      vars = JSON.parse(varsRaw);
    } catch {
      toast("JSON noto'g'ri");
      return;
    }
    const name = vars.user_name || "Foydalanuvchi";
    const link = vars.verification_link || "#";
    if (box)
      box.innerHTML =
        '<div style="text-align:left;width:100%"><h3>Salom, ' +
        name +
        '!</h3><p>Email manzilingizni tasdiqlash uchun tugmani bosing.</p><p><a href="' +
        link +
        '" class="btn btn-primary btn-sm">Tasdiqlash</a></p></div>';
    toast("Preview render qilindi");
  }

  document.addEventListener("input", (e) => {
    if (e.target.matches("[data-et-search],[data-et-type]")) filterList();
  });
  document.addEventListener("click", (e) => {
    let b = e.target.closest("[data-et-reset]");
    if (b) {
      e.preventDefault();
      resetList();
      return;
    }
    b = e.target.closest("[data-et-save]");
    if (b) {
      e.preventDefault();
      toast("Template saqlandi");
      return;
    }
    b = e.target.closest("[data-et-new]");
    if (b) {
      e.preventDefault();
      toast("Yangi template yaratish oqimi ochiladi");
      return;
    }
    b = e.target.closest("[data-et-variables]");
    if (b) {
      e.preventDefault();
      toast("Mavjud variables: {{user_name}}, {{verification_link}}");
      return;
    }
    b = e.target.closest("[data-et-insert]");
    if (b) {
      e.preventDefault();
      insertBlock(b.getAttribute("data-et-insert"));
      return;
    }
    b = e.target.closest("[data-et-render]");
    if (b) {
      e.preventDefault();
      renderPreview();
      return;
    }
    b = e.target.closest("[data-et-send-test]");
    if (b) {
      e.preventDefault();
      const em = document.querySelector("[data-et-test-email]")?.value?.trim();
      if (!em) {
        toast("Test email kiriting");
        return;
      }
      toast("Test email yuborildi: " + em);
      return;
    }
    b = e.target.closest("[data-et-test-smtp]");
    if (b) {
      e.preventDefault();
      toast("SMTP connection: OK");
      return;
    }
    b = e.target.closest("[data-et-save-smtp]");
    if (b) {
      e.preventDefault();
      toast("SMTP sozlamalari saqlandi");
      return;
    }
  });
})();
