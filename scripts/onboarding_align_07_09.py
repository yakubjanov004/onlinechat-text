from pathlib import Path

base = Path(r"C:\Users\User\Desktop\onlinechat-text\html\03-onboarding")

pages = [
 ("07-progress-checklist.html","Progress Checklist","Onboarding bosqichlari progressi va keyingi qadamlarni boshqarish.","06-widget-verify.html","08-interactive-tutorial.html",[("Bajarilgan","3/7"),("Qolgan","4"),("Vaqt","8 daqiqa")]),
 ("08-interactive-tutorial.html","Interactive Tutorial","Spotlight tur orqali asosiy UI bo‘limlarini interaktiv o‘rganish.","07-progress-checklist.html","09-first-chat-demo.html",[("Bosqich","6"),("Ko‘rilgan","4"),("Skip","1")]),
 ("09-first-chat-demo.html","First Chat Demo","Soxta mijoz bilan birinchi suhbat simulyatsiyasi va agent oqimini mashq qilish.","08-interactive-tutorial.html","07-progress-checklist.html",[("Demo chat","1"),("Reply time","26s"),("CSAT","5/5")]),
]

subnav = '''<a class="subnav-tab" href="./01-welcome.html">Welcome</a>
<a class="subnav-tab" href="./02-branding.html">Branding</a>
<a class="subnav-tab" href="./03-team-invite.html">Team Invite</a>
<a class="subnav-tab" href="./04-channel-connect.html">Channel Connect</a>
<a class="subnav-tab" href="./05-whatsapp-setup.html">WhatsApp Setup</a>
<a class="subnav-tab" href="./06-widget-verify.html">Widget Verify</a>
<a class="subnav-tab" href="./07-progress-checklist.html">Progress Checklist</a>
<a class="subnav-tab" href="./08-interactive-tutorial.html">Interactive Tutorial</a>
<a class="subnav-tab" href="./09-first-chat-demo.html">First Chat Demo</a>'''

for f,t,d,prev,nxt,kpis in pages:
    active_subnav = subnav.replace(f'href="./{f}"', f'class="subnav-tab active" href="./{f}"')
    active_subnav = active_subnav.replace('class="subnav-tab active" class="subnav-tab active"','class="subnav-tab active"')
    kpi_html=''.join([f"<article class='card'><div class='card-body'><p class='text-muted' style='margin:0 0 6px'>{k}</p><h3 style='margin:0'>{v}</h3></div></article>" for k,v in kpis])

    extra = ""
    if f=="07-progress-checklist.html":
        extra = """
<section class="card" style="margin-bottom:14px"><div class="card-header"><h3>Checklist</h3></div><div class="card-body"><div class="list-stack"><div class="list-item"><div class="item-main"><div class="item-title">Workspace nomi kiritildi</div></div><span class="badge badge-success">Done</span></div><div class="list-item"><div class="item-main"><div class="item-title">Asosiy kanal ulandi</div></div><span class="badge badge-warning">In progress</span></div><div class="list-item"><div class="item-main"><div class="item-title">Birinchi automation yaratiladi</div></div><span class="badge badge-primary">Next</span></div></div></div></section>
"""
    elif f=="08-interactive-tutorial.html":
        extra = """
<section class="split-grid" style="margin-bottom:14px"><article class="card"><div class="card-header"><h3>Spotlight step</h3></div><div class="card-body"><p class="text-muted">Hozirgi fokus: <strong>Inbox filter paneli</strong></p><button class="btn btn-secondary" type="button">Keyingi highlight</button></div></article><article class="card"><div class="card-header"><h3>O‘quv holati</h3></div><div class="card-body"><div class="list-stack"><div class="list-item"><div class="item-main"><div class="item-title">UI asoslari</div></div><span class="badge badge-success">Done</span></div><div class="list-item"><div class="item-main"><div class="item-title">Routing qoidasi</div></div><span class="badge badge-primary">Active</span></div><div class="list-item"><div class="item-main"><div class="item-title">Tag tizimi</div></div><span class="badge badge-warning">Next</span></div></div></div></article></section>
"""
    else:
        extra = """
<section class="card" style="margin-bottom:14px"><div class="card-header"><h3>Demo suhbat</h3></div><div class="card-body"><div class="table-wrap"><table class="table"><thead class="table-header"><tr><th>Rol</th><th>Xabar</th></tr></thead><tbody><tr class="table-row"><td>Mijoz</td><td>Salom, buyurtmam qayerda?</td></tr><tr class="table-row"><td>Agent</td><td>Salom! Raqamni yuboring, tekshiraman.</td></tr><tr class="table-row"><td>Mijoz</td><td>#A12933</td></tr></tbody></table></div></div></section>
"""

    html = f'''<!doctype html>
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
  <body data-active-nav="onboarding" class="dashboard-shell-page">
    <main class="app-content">
      <div class="subnav-scroll"><div class="subnav-tabs">{active_subnav}</div></div>
      <div data-roles="admin">
        <nav class="breadcrumbs" aria-label="Breadcrumb"><a href="../04-dashboard/01-dashboard.html">Dashboard</a><i data-lucide="chevron-right"></i><a href="./01-welcome.html">Onboarding</a><i data-lucide="chevron-right"></i><span class="current">{t}</span></nav>
        <div class="page-header"><div><h1>{t}</h1><p class="text-muted">{d}</p></div><div class="page-header-actions"><a class="btn btn-secondary" href="./{prev}"><i data-lucide="arrow-left"></i> Oldingi</a><a class="btn btn-primary" href="./{nxt}">Keyingi <i data-lucide="arrow-right"></i></a></div></div>
        <section class="grid cols-3" style="margin-bottom:14px">{kpi_html}</section>
        {extra}
        <section class="card" style="margin-bottom:14px"><div class="card-header"><h3>Tavsiya</h3></div><div class="card-body"><p class="text-muted" style="margin:0">Bu bosqichni yakunlagach keyingi onboarding sahifasiga o‘tib amaliy tekshiruvni davom ettiring.</p></div></section>
        <div class="sticky-save-bar"><a class="btn btn-secondary" href="./{prev}">Oldingi sahifa</a><a class="btn btn-primary" href="./{nxt}">Keyingi sahifa</a></div>
      </div>
    </main>
    <script>window.addEventListener("DOMContentLoaded", function () {{ if (window.lucide && window.lucide.createIcons) window.lucide.createIcons(); }});</script>
  </body>
</html>'''
    (base / f).write_text(html, encoding='utf-8')

print('onboarding 07-09 aligned')
