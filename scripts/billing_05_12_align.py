from pathlib import Path

base = Path(r"C:\Users\User\Desktop\onlinechat-text\html\10-billing")

pages=[
("05-upgrade-downgrade.html","Upgrade & Downgrade","Plan o‘zgarishini proration va effective date bilan boshqarish."),
("06-billing-alerts.html","Billing Alerts","Limit va to‘lov muddati bo‘yicha ogohlantirishlarni boshqarish."),
("07-coupon-promo.html","Coupon & Promo","Promo kodlarni tekshirish va chegirma qoidalarini qo‘llash."),
("08-trial-management.html","Trial Management","Trial muddati va upgrade konversiyasini nazorat qilish."),
("09-payment-history.html","Payment History","To‘lovlar tarixini holat va receipt bo‘yicha ko‘rish."),
("10-billing-contacts.html","Billing Contacts","Buxgalteriya kontaktlari va yuridik rekvizitlar."),
("11-tax-settings.html","Tax Settings","QQS/VAT hisoblash va soliq sozlamalarini boshqarish."),
("12-seat-management.html","Seat Management","Agent seatlari soni va xarajat prognozini boshqarish."),
]

subnav=[
("01-plan.html","Plan"),("02-payment.html","Payment"),("03-invoices.html","Invoices"),("04-usage.html","Usage"),
("05-upgrade-downgrade.html","Upgrade & Downgrade"),("06-billing-alerts.html","Billing Alerts"),("07-coupon-promo.html","Coupon & Promo"),("08-trial-management.html","Trial Management"),("09-payment-history.html","Payment History"),("10-billing-contacts.html","Billing Contacts"),("11-tax-settings.html","Tax Settings"),("12-seat-management.html","Seat Management")
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
  <body data-active-nav="billing" class="dashboard-shell-page">
    <main class="app-content">
      <div class="subnav-scroll"><div class="subnav-tabs">{nav_html(f)}</div></div>
      <div data-roles="admin">
        <nav class="breadcrumbs" aria-label="Breadcrumb"><a href="../04-dashboard/01-dashboard.html">Dashboard</a><i data-lucide="chevron-right"></i><a href="./01-plan.html">Billing</a><i data-lucide="chevron-right"></i><span class="current">{t}</span></nav>
        <div class="page-header"><div><h1>{t}</h1><p class="text-muted">{d}</p></div><div class="page-header-actions"><a class="btn btn-secondary" href="./{prev}"><i data-lucide="arrow-left"></i> {title(prev)}</a><a class="btn btn-primary" href="./{nxt}">{title(nxt)} <i data-lucide="arrow-right"></i></a></div></div>

        <section class="grid cols-3" style="margin-bottom:14px">
          <article class="card"><div class="card-body"><p class="text-muted" style="margin:0 0 6px">Current status</p><h3 style="margin:0">Active</h3></div></article>
          <article class="card"><div class="card-body"><p class="text-muted" style="margin:0 0 6px">Next billing</p><h3 style="margin:0">01-apr</h3></div></article>
          <article class="card"><div class="card-body"><p class="text-muted" style="margin:0 0 6px">Usage</p><h3 style="margin:0">72%</h3></div></article>
        </section>

        <section class="split-grid" style="margin-bottom:14px">
          <article class="card"><div class="card-header"><h3>Asosiy boshqaruv</h3></div><div class="card-body"><label>Primary option<input class="input" value="Enabled" /></label><label style="margin-top:10px;display:block">Secondary option<input class="input" value="Configured" /></label><div class="flex gap-2 wrap" style="margin-top:12px"><button class="btn btn-secondary" type="button"><i data-lucide="refresh-cw"></i> Tekshirish</button><button class="btn btn-primary" type="button"><i data-lucide="save"></i> Saqlash</button></div></div></article>
          <article class="card"><div class="card-header"><h3>Checklist</h3></div><div class="card-body"><div class="list-stack"><div class="list-item"><div class="item-main"><div class="item-title">Plan/price sync</div></div><span class="badge badge-success">OK</span></div><div class="list-item"><div class="item-main"><div class="item-title">Tax rule applied</div></div><span class="badge badge-primary">Active</span></div><div class="list-item"><div class="item-main"><div class="item-title">Payment retry monitor</div></div><span class="badge badge-warning">Watch</span></div></div></div></article>
        </section>

        <section class="card" style="margin-bottom:14px"><div class="card-header"><h3>So‘nggi billing activity</h3></div><div class="card-body"><div class="table-wrap"><table class="table"><thead class="table-header"><tr><th>Vaqt</th><th>Event</th><th>Holat</th><th>Mas’ul</th></tr></thead><tbody><tr class="table-row"><td>17:03</td><td>Billing settings updated</td><td><span class="badge badge-success">Done</span></td><td>Ulug‘bek</td></tr><tr class="table-row"><td>16:57</td><td>Invoice sync</td><td><span class="badge badge-primary">Updated</span></td><td>Jahongir</td></tr><tr class="table-row"><td>16:49</td><td>Retry policy check</td><td><span class="badge badge-warning">Review</span></td><td>Dilnoza</td></tr></tbody></table></div></div></section>

        <div class="sticky-save-bar"><a class="btn btn-secondary" href="./{prev}">Oldingi sahifa</a><a class="btn btn-primary" href="./{nxt}">Keyingi sahifa</a></div>
      </div>
    </main>
    <script>window.addEventListener("DOMContentLoaded",function(){{if(window.lucide&&window.lucide.createIcons)window.lucide.createIcons();}});</script>
  </body>
</html>'''
    (base/f).write_text(html, encoding='utf-8')

print('billing 05-12 aligned')
