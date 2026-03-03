from pathlib import Path

base = Path(r"C:\Users\User\Desktop\onlinechat-text\html\09-settings")

pages = [
("09-custom-fields.html","Custom Fields","Kontakt va chatlar uchun maxsus maydonlarni yaratish va boshqarish."),
("10-tags-manager.html","Tags Manager","Taglar, ranglar va guruhlash qoidalarini markaziy boshqarish."),
("11-canned-manager.html","Canned Manager","Shablon javoblarni kategoriya bo‘yicha tahrirlash va tarqatish."),
("12-ip-restriction.html","IP Restriction","Workspace kirishini IP whitelist/blacklist orqali cheklash."),
("13-activity-log.html","Activity Log","Agent va admin amallarining audit jurnalini ko‘rish."),
("14-file-storage.html","File Storage","Yuklangan fayllar hajmi, limitlar va tozalash boshqaruvi."),
("15-account-management.html","Account Management","Workspace ownership, export va account lifecycle boshqaruvi."),
("16-workspace-switcher.html","Workspace Switcher","Bir nechta workspace o‘rtasida tez almashish paneli."),
("17-agent-availability.html","Agent Availability","Agent ish jadvali va timezone bo‘yicha mavjudlik sozlamasi."),
("18-agent-canned-personal.html","Agent Canned Personal","Agentning shaxsiy canned javoblarini boshqarish."),
]

subnav=[
("01-workspace-general.html","Workspace General"),("01b-workspace-branding.html","Workspace Branding"),("02-widget-settings.html","Widget Settings"),("03-security.html","Security"),("04-notifications.html","Notifications"),("05-profile.html","Profile"),("06-privacy-export.html","Privacy Export"),("07-privacy-delete.html","Privacy Delete"),("08-privacy-settings.html","Privacy Settings"),("09-custom-fields.html","Custom Fields"),("10-tags-manager.html","Tags Manager"),("11-canned-manager.html","Canned Manager"),("12-ip-restriction.html","IP Restriction"),("13-activity-log.html","Activity Log"),("14-file-storage.html","File Storage"),("15-account-management.html","Account Management"),("16-workspace-switcher.html","Workspace Switcher"),("17-agent-availability.html","Agent Availability"),("18-agent-canned-personal.html","Agent Canned Personal")
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
  <body data-active-nav="settings" class="dashboard-shell-page">
    <main class="app-content">
      <div class="subnav-scroll"><div class="subnav-tabs">{nav_html(f)}</div></div>
      <div data-roles="admin agent">
        <nav class="breadcrumbs" aria-label="Breadcrumb"><a href="../04-dashboard/01-dashboard.html">Dashboard</a><i data-lucide="chevron-right"></i><a href="./01-workspace-general.html">Settings</a><i data-lucide="chevron-right"></i><span class="current">{t}</span></nav>
        <div class="page-header"><div><h1>{t}</h1><p class="text-muted">{d}</p></div><div class="page-header-actions"><a class="btn btn-secondary" href="./{prev}"><i data-lucide="arrow-left"></i> {title(prev)}</a><a class="btn btn-primary" href="./{nxt}">{title(nxt)} <i data-lucide="arrow-right"></i></a></div></div>

        <section class="grid cols-3" style="margin-bottom:14px">
          <article class="card"><div class="card-body"><p class="text-muted" style="margin:0 0 6px">Status</p><h3 style="margin:0">Active</h3></div></article>
          <article class="card"><div class="card-body"><p class="text-muted" style="margin:0 0 6px">Updated</p><h3 style="margin:0">Bugun 17:02</h3></div></article>
          <article class="card"><div class="card-body"><p class="text-muted" style="margin:0 0 6px">Owner</p><h3 style="margin:0">Ulug‘bek</h3></div></article>
        </section>

        <section class="split-grid" style="margin-bottom:14px">
          <article class="card"><div class="card-header"><h3>Asosiy sozlamalar</h3></div><div class="card-body"><label>Primary option<input class="input" value="Enabled" /></label><label style="margin-top:10px;display:block">Secondary option<input class="input" value="Configured" /></label><div class="flex gap-2 wrap" style="margin-top:12px"><button class="btn btn-secondary" type="button"><i data-lucide="rotate-cw"></i> Tekshirish</button><button class="btn btn-primary" type="button"><i data-lucide="save"></i> Saqlash</button></div></div></article>
          <article class="card"><div class="card-header"><h3>Checklist</h3></div><div class="card-body"><div class="list-stack"><div class="list-item"><div class="item-main"><div class="item-title">Policy tekshirildi</div></div><span class="badge badge-success">OK</span></div><div class="list-item"><div class="item-main"><div class="item-title">Role permission mos</div></div><span class="badge badge-primary">Active</span></div><div class="list-item"><div class="item-main"><div class="item-title">Review kerak</div></div><span class="badge badge-warning">Watch</span></div></div></div></article>
        </section>

        <section class="card" style="margin-bottom:14px"><div class="card-header"><h3>So‘nggi faoliyat</h3></div><div class="card-body"><div class="table-wrap"><table class="table"><thead class="table-header"><tr><th>Vaqt</th><th>Event</th><th>Holat</th><th>Mas’ul</th></tr></thead><tbody><tr class="table-row"><td>17:02</td><td>Settings updated</td><td><span class="badge badge-success">Done</span></td><td>Ulug‘bek</td></tr><tr class="table-row"><td>16:56</td><td>Validation run</td><td><span class="badge badge-primary">Pass</span></td><td>Jahongir</td></tr><tr class="table-row"><td>16:48</td><td>Rule edited</td><td><span class="badge badge-warning">Review</span></td><td>Dilnoza</td></tr></tbody></table></div></div></section>

        <div class="sticky-save-bar"><a class="btn btn-secondary" href="./{prev}">Oldingi sahifa</a><a class="btn btn-primary" href="./{nxt}">Keyingi sahifa</a></div>
      </div>
    </main>
    <script>window.addEventListener("DOMContentLoaded",function(){{if(window.lucide&&window.lucide.createIcons)window.lucide.createIcons();}});</script>
  </body>
</html>'''
    (base / f).write_text(html, encoding='utf-8')

print('settings 09-18 aligned')
