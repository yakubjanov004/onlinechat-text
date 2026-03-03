from pathlib import Path

base = Path(r"C:\Users\User\Desktop\onlinechat-text\html\27-payments")

pages = [
 ("01-payment-overview.html","Payment Overview","Ulangan tolov tizimlari, default gateway va tranzaksiya sogligining umumiy korinishi.","Faol gateway","6 ta","Muvaffaqiyat darajasi","98.9%","Songgi tolov","2 daqiqa oldin",["02-payme-setup.html","03-click-setup.html","08-payment-logs.html"]),
 ("02-payme-setup.html","Payme Setup","Merchant ID, key, callback URL va test/production switch sozlamalari.","Merchant holati","Active","Callback RTT","310 ms","Mode","Production",["01-payment-overview.html","07-payment-test.html","08-payment-logs.html"]),
 ("03-click-setup.html","Click Setup","Service ID, merchant ID, secret key va return URL boshqaruvi.","Service holati","Active","Imzo tekshiruvi","Enabled","Pending callbacks","2 ta",["01-payment-overview.html","07-payment-test.html","08-payment-logs.html"]),
 ("04-uzum-setup.html","Uzum Setup","Uzum/Uzcard terminal ulanishi, credential va endpoint mapping.","Terminal","UZM-01","Auth holati","Verified","Settlement","Daily",["01-payment-overview.html","07-payment-test.html","08-payment-logs.html"]),
 ("05-stripe-setup.html","Stripe Setup","Publishable/secret key, webhook endpoint va currency policy sozlamalari.","Account","Connected","Webhook","Healthy","Primary currency","USD",["01-payment-overview.html","07-payment-test.html","08-payment-logs.html"]),
 ("06-bank-transfer.html","Bank Transfer","Invoice generation, INN/MFO rekvizitlari va manual tasdiqlash oqimi.","Open invoices","14 ta","Tasdiqlash vaqti","18 min","Auto match","72%",["01-payment-overview.html","08-payment-logs.html","07-payment-test.html"]),
 ("07-payment-test.html","Payment Test","Sandbox test tolov, callback tekshiruv va natija tracing paneli.","Test case","12 ta","Pass rate","100%","Avg response","840 ms",["02-payme-setup.html","03-click-setup.html","05-stripe-setup.html"]),
 ("08-payment-logs.html","Payment Logs","Muvaffaqiyatli/rad etilgan/kutilayotgan tranzaksiyalar, refund va audit loglar.","Events/24h","18,240","Fail rate","1.1%","Refundlar","23 ta",["01-payment-overview.html","06-bank-transfer.html","07-payment-test.html"]),
]

nav = [(p[0], p[1]) for p in pages]

def nav_html(cur):
    return '\n'.join([f'<a class="subnav-tab{" active" if f==cur else ""}" href="./{f}">{t}</a>' for f,t in nav])

def title_of(file):
    for f,t in nav:
        if f==file:
            return t
    return file

for i,p in enumerate(pages):
    f,t,d,k1,v1,k2,v2,k3,v3,rel = p
    prev = pages[i-1][0] if i>0 else pages[-1][0]
    nxt = pages[i+1][0] if i<len(pages)-1 else pages[0][0]
    prev_t = title_of(prev)
    next_t = title_of(nxt)
    rel_html = '\n'.join([f'<a class="btn btn-secondary" href="./{r}"><i data-lucide="arrow-right"></i> {title_of(r)}</a>' for r in rel])

    html = f'''<!doctype html>
<html lang="uz">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>QULAY CHAT - {t}</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="../assets/qulay-chat-design-system.css">
<script src="https://unpkg.com/lucide@latest" defer></script>
<script src="../assets/qulay-chat-shell.js" defer></script>
<script src="../assets/qulay-chat-runtime.js" defer></script>
</head>
<body data-active-nav="billing" class="dashboard-shell-page">
<main class="app-content">
<div class="subnav-scroll"><div class="subnav-tabs">
{nav_html(f)}
</div></div>

<div data-roles="agent" class="card" style="border-color:#FCD34D;background:#FFFBEB;margin-top:12px">
  <div class="card-body">
    <h3 style="margin:0 0 6px">Admin only</h3>
    <p class="text-muted" style="margin:0 0 12px">Bu bolim faqat adminlar uchun.</p>
    <a class="btn btn-secondary" href="../04-dashboard/02-dashboard-agent.html">Agent dashboardga qaytish</a>
  </div>
</div>

<div data-roles="admin">
<nav class="breadcrumbs" aria-label="Breadcrumb">
  <a href="../04-dashboard/01-dashboard.html">Dashboard</a>
  <i data-lucide="chevron-right"></i>
  <a href="./01-payment-overview.html">Payments</a>
  <i data-lucide="chevron-right"></i>
  <span class="current">{t}</span>
</nav>

<div class="page-header">
  <div>
    <h1>{t}</h1>
    <p class="text-muted">{d}</p>
  </div>
  <div class="page-header-actions">
    <a class="btn btn-secondary" href="./{prev}"><i data-lucide="arrow-left"></i> {prev_t}</a>
    <a class="btn btn-primary" href="./{nxt}">{next_t} <i data-lucide="arrow-right"></i></a>
  </div>
</div>

<section class="grid cols-3">
  <article class="card"><div class="card-body"><p class="text-muted" style="margin:0 0 6px">{k1}</p><h3 style="margin:0">{v1}</h3></div></article>
  <article class="card"><div class="card-body"><p class="text-muted" style="margin:0 0 6px">{k2}</p><h3 style="margin:0">{v2}</h3></div></article>
  <article class="card"><div class="card-body"><p class="text-muted" style="margin:0 0 6px">{k3}</p><h3 style="margin:0">{v3}</h3></div></article>
</section>

<section class="split-grid" style="margin-top:14px">
  <article class="card">
    <div class="card-header"><div><h3>To'lov arxitekturasi</h3></div></div>
    <div class="card-body">
      <img src="../assets/illustrations/payments-routing.svg" alt="{t} diagrammasi" style="width:100%;height:auto;border:1px solid #E2E8F0;border-radius:12px;background:#fff" />
      <p class="text-muted" style="margin:10px 0 0">Gateway oqimi: <strong>Init -> Authorize -> Capture -> Reconcile</strong>. Har bosqichda audit izi va xatolik fallback qoidasi mavjud.</p>
    </div>
  </article>
  <article class="card">
    <div class="card-header"><div><h3>Bogliq sahifalar</h3></div></div>
    <div class="card-body">
      <p class="text-muted" style="margin:0 0 10px">{t} uchun keyingi amallar:</p>
      <div class="flex gap-2 wrap">
        {rel_html}
      </div>
      <div class="divider" style="margin:12px 0"></div>
      <div class="flex gap-2 wrap">
        <a class="btn btn-ghost" href="./01-payment-overview.html">Overview</a>
        <a class="btn btn-ghost" href="./07-payment-test.html">Test</a>
        <a class="btn btn-ghost" href="./08-payment-logs.html">Logs</a>
      </div>
    </div>
  </article>
</section>

<section class="split-grid" style="margin-top:14px">
  <article class="card">
    <div class="card-header"><div><h3>Konfiguratsiya</h3></div></div>
    <div class="card-body">
      <div class="grid cols-2" style="gap:12px">
        <label>Environment
          <select class="input"><option>Production</option><option>Staging</option><option>Sandbox</option></select>
        </label>
        <label>Currency
          <select class="input"><option>UZS</option><option>USD</option><option>EUR</option></select>
        </label>
        <label class="col-span-2">Callback URL
          <input class="input" type="text" value="https://api.qulaychat.uz/payments/callback" />
        </label>
      </div>
      <div class="flex gap-2 wrap" style="margin-top:12px">
        <button type="button" class="btn btn-secondary" data-action="log"><i data-lucide="flask-conical"></i> Test tolov</button>
        <button type="button" class="btn btn-primary" data-action="save"><i data-lucide="save"></i> Sozlamani saqlash</button>
      </div>
    </div>
  </article>
  <article class="card">
    <div class="card-header"><div><h3>Checklist</h3></div></div>
    <div class="card-body">
      <div class="list-stack">
        <div class="list-item"><div class="item-main"><div class="item-title">API kalitlar vault ichida saqlansin</div><div class="item-sub">Security</div></div><span class="badge badge-success">OK</span></div>
        <div class="list-item"><div class="item-main"><div class="item-title">Idempotency key majburiy bolsin</div><div class="item-sub">Reliability</div></div><span class="badge badge-warning">Tekshirish</span></div>
        <div class="list-item"><div class="item-main"><div class="item-title">Refund limiti roli boyicha cheklansin</div><div class="item-sub">Risk</div></div><span class="badge badge-primary">Yangi</span></div>
      </div>
    </div>
  </article>
</section>

<section class="card" style="margin-top:14px">
  <div class="card-header"><div><h3>Songgi tranzaksiyalar</h3></div></div>
  <div class="card-body">
    <div class="table-wrap">
      <table class="table">
        <thead class="table-header"><tr><th>Vaqt</th><th>Tx ID</th><th>Gateway</th><th>Summa</th><th>Holat</th><th>Havola</th></tr></thead>
        <tbody>
          <tr class="table-row"><td>14:52</td><td>TX-948120</td><td>{t}</td><td>420,000 UZS</td><td><span class="badge badge-success">Success</span></td><td><a class="btn btn-ghost" href="./08-payment-logs.html">Log</a></td></tr>
          <tr class="table-row"><td>14:47</td><td>TX-948104</td><td>{t}</td><td>1,250,000 UZS</td><td><span class="badge badge-warning">Pending</span></td><td><a class="btn btn-ghost" href="./07-payment-test.html">Test</a></td></tr>
          <tr class="table-row"><td>14:41</td><td>TX-948090</td><td>{t}</td><td>99,000 UZS</td><td><span class="badge badge-danger">Failed</span></td><td><a class="btn btn-ghost" href="./01-payment-overview.html">Overview</a></td></tr>
        </tbody>
      </table>
    </div>
  </div>
</section>

<div class="sticky-save-bar">
  <a class="btn btn-secondary" href="./{prev}">Oldingi sahifa</a>
  <a class="btn btn-primary" href="./{nxt}">Keyingi sahifa</a>
</div>
</div>
</main>
<script>window.addEventListener("DOMContentLoaded", function(){{ if (window.lucide && window.lucide.createIcons) {{ window.lucide.createIcons(); }} }});</script>
</body>
</html>
'''
    (base / f).write_text(html, encoding='utf-8')

print('27-payments done')
