from pathlib import Path

base = Path(r"C:\Users\User\Desktop\onlinechat-text\html\15-knowledge-base")

pages=[
("10-kb-versioning.html","KB Versioning","Maqola versiyalari tarixi, diff va revert boshqaruvi."),
("11-kb-multilingual.html","KB Multilingual","UZ/RU/EN tillar bo‘yicha kontent sinxronlashuvi."),
("12-kb-ai-suggest.html","KB AI Suggest","AI asosida maqola tavsiyasi va draft takliflari."),
("13-kb-feedback-detail.html","KB Feedback Detail","\"Foydali bo‘ldimi?\" feedback natijalari tahlili."),
("14-kb-internal.html","KB Internal","Faqat ichki jamoa uchun SOP va troubleshooting bazasi."),
("15-kb-import.html","KB Import","Zendesk/Intercom/CSV/MD’dan maqola import jarayoni."),
("16-kb-custom-domain.html","KB Custom Domain","Help markaz uchun custom domain va SSL sozlash."),
("17-kb-seo.html","KB SEO","Meta, sitemap va robots orqali knowledge base SEO boshqaruvi."),
("18-kb-widget-link.html","KB Widget Link","Widget ichidagi article suggest qoidalari va mapping."),
]

subnav=[
("01-kb-dashboard.html","KB Dashboard"),("02-article-editor.html","Article Editor"),("03-categories.html","Categories"),("04-kb-settings.html","KB Settings"),("05-kb-analytics.html","KB Analytics"),("10-kb-versioning.html","KB Versioning"),("11-kb-multilingual.html","KB Multilingual"),("12-kb-ai-suggest.html","KB AI Suggest"),("13-kb-feedback-detail.html","KB Feedback Detail"),("14-kb-internal.html","KB Internal"),("15-kb-import.html","KB Import"),("16-kb-custom-domain.html","KB Custom Domain"),("17-kb-seo.html","KB SEO"),("18-kb-widget-link.html","KB Widget Link")
]

def nav_html(active):
    return ''.join([f'<a class="subnav-tab{" active" if f==active else ""}" href="./{f}">{t}</a>' for f,t in subnav])

def prev_next(file):
    i=[f for f,_ in subnav].index(file)
    prev=subnav[i-1][0] if i>0 else subnav[-1][0]
    nxt=subnav[i+1][0] if i<len(subnav)-1 else subnav[0][0]
    return prev,nxt

def title(file):
    for f,t in subnav:
        if f==file:return t
    return file

for f,t,d in pages:
    prev,nxt=prev_next(f)
    html=f'''<!doctype html>
<html lang="uz">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>QULAY CHAT - {t}</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="../assets/qulay-chat-design-system.css" />
    <script src="https://unpkg.com/lucide@latest" defer></script>
    <script src="../assets/qulay-chat-shell.js" defer></script>
    <script src="../assets/qulay-chat-runtime.js" defer></script>
  </head>
  <body data-active-nav="knowledge-base" class="dashboard-shell-page">
    <main class="app-content">
      <div class="subnav-scroll"><div class="subnav-tabs">{nav_html(f)}</div></div>
      <div data-roles="admin agent">
        <nav class="breadcrumbs" aria-label="Breadcrumb"><a href="../04-dashboard/01-dashboard.html">Dashboard</a><i data-lucide="chevron-right"></i><a href="./01-kb-dashboard.html">Knowledge Base</a><i data-lucide="chevron-right"></i><span class="current">{t}</span></nav>
        <div class="page-header"><div><h1>{t}</h1><p class="text-muted">{d}</p></div><div class="page-header-actions"><a class="btn btn-secondary" href="./{prev}"><i data-lucide="arrow-left"></i> {title(prev)}</a><a class="btn btn-primary" href="./{nxt}">{title(nxt)} <i data-lucide="arrow-right"></i></a></div></div>

        <section class="grid cols-3" style="margin-bottom:14px">
          <article class="card"><div class="card-body"><p class="text-muted" style="margin:0 0 6px">Articles</p><h3 style="margin:0">248</h3></div></article>
          <article class="card"><div class="card-body"><p class="text-muted" style="margin:0 0 6px">Views today</p><h3 style="margin:0">3,412</h3></div></article>
          <article class="card"><div class="card-body"><p class="text-muted" style="margin:0 0 6px">Helpfulness</p><h3 style="margin:0">91%</h3></div></article>
        </section>

        <section class="split-grid" style="margin-bottom:14px">
          <article class="card"><div class="card-header"><h3>Asosiy boshqaruv</h3></div><div class="card-body"><label>Primary option<input class="input" value="Enabled" /></label><label style="margin-top:10px;display:block">Secondary option<input class="input" value="Configured" /></label><div class="flex gap-2 wrap" style="margin-top:12px"><button class="btn btn-secondary" type="button"><i data-lucide="rotate-cw"></i> Tekshirish</button><button class="btn btn-primary" type="button"><i data-lucide="save"></i> Saqlash</button></div></div></article>
          <article class="card"><div class="card-header"><h3>Checklist</h3></div><div class="card-body"><div class="list-stack"><div class="list-item"><div class="item-main"><div class="item-title">Structure validation</div></div><span class="badge badge-success">OK</span></div><div class="list-item"><div class="item-main"><div class="item-title">Access policy</div></div><span class="badge badge-primary">Active</span></div><div class="list-item"><div class="item-main"><div class="item-title">Translation review</div></div><span class="badge badge-warning">Watch</span></div></div></div></article>
        </section>

        <section class="card" style="margin-bottom:14px"><div class="card-header"><h3>So‘nggi faoliyat</h3></div><div class="card-body"><div class="table-wrap"><table class="table"><thead class="table-header"><tr><th>Vaqt</th><th>Event</th><th>Holat</th><th>Mas’ul</th></tr></thead><tbody><tr class="table-row"><td>17:05</td><td>Article update</td><td><span class="badge badge-success">Done</span></td><td>Ulug‘bek</td></tr><tr class="table-row"><td>16:58</td><td>Content sync</td><td><span class="badge badge-primary">Updated</span></td><td>Jahongir</td></tr><tr class="table-row"><td>16:50</td><td>SEO check</td><td><span class="badge badge-warning">Review</span></td><td>Dilnoza</td></tr></tbody></table></div></div></section>

        <div class="sticky-save-bar"><a class="btn btn-secondary" href="./{prev}">Oldingi sahifa</a><a class="btn btn-primary" href="./{nxt}">Keyingi sahifa</a></div>
      </div>
    </main>
    <script>window.addEventListener("DOMContentLoaded",function(){{if(window.lucide&&window.lucide.createIcons)window.lucide.createIcons();}});</script>
  </body>
</html>'''
    (base/f).write_text(html, encoding='utf-8')

print('kb 10-18 aligned')
