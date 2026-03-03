from pathlib import Path

base = Path(r"C:\Users\User\Desktop\onlinechat-text\html\26-integrations")

pages = [
 ("01-channels-overview.html","Channels Overview","Barcha kanallar holati, ulanish sifati va real-time monitoring markazi.","Faol kanallar","14 ta","Uptime","99.93%","Songgi xato","12 daqiqa oldin",["02-telegram-setup.html","05-whatsapp-setup.html","19-integration-logs.html"]),
 ("02-telegram-setup.html","Telegram Setup","Bot token, webhook URL, allowed updates va xavfsizlik sozlamalari.","Bot username","@qulay_support_bot","Webhook RTT","280 ms","Mode","Production",["03-telegram-settings.html","04-telegram-test.html","01-channels-overview.html"]),
 ("03-telegram-settings.html","Telegram Settings","Welcome message, auto-reply, routing va media policy qoidalari.","Auto-reply","Yoqilgan","Media limit","20 MB","Default queue","Telegram L1",["02-telegram-setup.html","04-telegram-test.html","19-integration-logs.html"]),
 ("04-telegram-test.html","Telegram Test","Test chat, webhook verifikatsiya va event tracing paneli.","Test holati","Pass","Round-trip","1.2 s","Fail ratio","0.4%",["02-telegram-setup.html","03-telegram-settings.html","19-integration-logs.html"]),
 ("05-whatsapp-setup.html","WhatsApp Setup","BSP ulash, raqam verifikatsiyasi, callback URL va quality check.","BSP","360dialog","WABA status","Verified","Display name","Approved",["06-whatsapp-templates.html","07-whatsapp-settings.html","01-channels-overview.html"]),
 ("06-whatsapp-templates.html","WhatsApp Templates","Template kutubxonasi, Meta approval va version nazorati.","Approved","27 ta","Pending","3 ta","Rejected","1 ta",["05-whatsapp-setup.html","07-whatsapp-settings.html","19-integration-logs.html"]),
 ("07-whatsapp-settings.html","WhatsApp Settings","Session policy, media qoidalari va routing strategiyasi.","24h session","Yoqilgan","Max media","15 MB","Routing","Skill-based",["05-whatsapp-setup.html","06-whatsapp-templates.html","20-integration-status.html"]),
 ("08-instagram-setup.html","Instagram Setup","Instagram DM uchun Facebook App connect va permission mapping.","Connected pages","2 ta","Scope","messages_manage","Token expiry","42 kun",["09-facebook-setup.html","01-channels-overview.html","20-integration-status.html"]),
 ("09-facebook-setup.html","Facebook Setup","Page connect, greeting text, ice breakers va fallback qoidalari.","Connected page","Qulay Chat","Greeting","Enabled","Webhook subs","6 ta",["08-instagram-setup.html","10-viber-setup.html","19-integration-logs.html"]),
 ("10-viber-setup.html","Viber Setup","Bot token, keyboard actionlar va callback monitoring sozlamalari.","Bot ID","viber-qulay-01","Callbacks","Stable","Retry","3x",["09-facebook-setup.html","11-email-setup.html","20-integration-status.html"]),
 ("11-email-setup.html","Email Setup","IMAP/SMTP credentiallar, mailbox verification va inbound routing.","Inbox count","4 ta","SMTP","TLS","Catch-all","Off",["12-email-settings.html","13-sms-setup.html","01-channels-overview.html"]),
 ("12-email-settings.html","Email Settings","Signature, threading rules, auto-reply va SLA teglari.","Threading","By Message-ID","Auto-reply","Working hours","Signature","Team default",["11-email-setup.html","19-integration-logs.html","20-integration-status.html"]),
 ("13-sms-setup.html","SMS Setup","Eskiz/PlayMobile API ulash, sender nomi va callback endpoint.","Gateway","Eskiz","Sender ID","QULAY","DLR","Enabled",["14-sms-settings.html","11-email-setup.html","20-integration-status.html"]),
 ("14-sms-settings.html","SMS Settings","Template, belgilar limiti va delivery report monitoring paneli.","Unicode mode","Auto","Max chars","480","Retry","2x",["13-sms-setup.html","19-integration-logs.html","01-channels-overview.html"]),
 ("15-bitrix24-setup.html","Bitrix24 Setup","OAuth connect, field mapping va lead sync yonalishlari.","Portal","qulay.bitrix24.ru","Sync","Every 2 min","Mapped fields","19 ta",["16-amocrm-setup.html","17-zapier-setup.html","19-integration-logs.html"]),
 ("16-amocrm-setup.html","AmoCRM Setup","Pipeline mapping, deal stage sync va owner assignment.","Pipelines","3 ta","Stages mapped","15","Sync errors","0",["15-bitrix24-setup.html","17-zapier-setup.html","20-integration-status.html"]),
 ("17-zapier-setup.html","Zapier Setup","Trigger/action konfiguratsiyasi, API key va tayyor zap shablonlar.","Active zaps","11 ta","Task success","98.7%","Last run","2 min oldin",["18-custom-webhook.html","19-integration-logs.html","20-integration-status.html"]),
 ("18-custom-webhook.html","Custom Webhook","Custom endpoint, header policy, payload format va retry mexanizmi.","Endpoints","5 ta","Auth","HMAC SHA256","Retry policy","Exp backoff",["17-zapier-setup.html","19-integration-logs.html","20-integration-status.html"]),
 ("19-integration-logs.html","Integration Logs","Barcha kanallar boyicha event log, xatolar va retry kuzatuvi.","Events/24h","42,380","Error rate","0.9%","Avg retry","1.3x",["20-integration-status.html","01-channels-overview.html","18-custom-webhook.html"]),
 ("20-integration-status.html","Integration Status","Health dashboard: kanal holati, uptime va songgi sync statistikasi.","Healthy","12/14","Degraded","2 ta","Last incident","Bugun 11:42",["01-channels-overview.html","19-integration-logs.html","02-telegram-setup.html"]),
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
<body data-active-nav="integrations" class="dashboard-shell-page">
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
  <a href="./01-channels-overview.html">Integrations</a>
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
    <div class="card-header"><div><h3>Diagramma va arxitektura</h3></div></div>
    <div class="card-body">
      <img src="../assets/illustrations/integrations-network.svg" alt="{t} diagrammasi" style="width:100%;height:auto;border:1px solid #E2E8F0;border-radius:12px;background:#fff" />
      <p class="text-muted" style="margin:10px 0 0">Event oqimi: <strong>Receive -> Normalize -> Route -> Observe</strong>. Har bosqich log va alert bilan kuzatiladi.</p>
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
      <p class="text-muted" style="margin:0 0 8px">Tez navigatsiya:</p>
      <div class="flex gap-2 wrap">
        <a class="btn btn-ghost" href="./01-channels-overview.html">Overview</a>
        <a class="btn btn-ghost" href="./19-integration-logs.html">Logs</a>
        <a class="btn btn-ghost" href="./20-integration-status.html">Status</a>
      </div>
    </div>
  </article>
</section>

<section class="split-grid" style="margin-top:14px">
  <article class="card">
    <div class="card-header"><div><h3>Konfiguratsiya formasi</h3></div></div>
    <div class="card-body">
      <div class="grid cols-2" style="gap:12px">
        <label>Environment
          <select class="input"><option>Production</option><option>Staging</option><option>Sandbox</option></select>
        </label>
        <label>Retry policy
          <select class="input"><option>Exponential backoff</option><option>Linear</option><option>No retry</option></select>
        </label>
        <label class="col-span-2">Webhook URL
          <input class="input" type="text" value="https://api.qulaychat.uz/integrations/webhook" />
        </label>
      </div>
      <div class="flex gap-2 wrap" style="margin-top:12px">
        <button type="button" class="btn btn-secondary" data-action="log"><i data-lucide="flask-conical"></i> Test ulanish</button>
        <button type="button" class="btn btn-primary" data-action="save"><i data-lucide="save"></i> Sozlamani saqlash</button>
      </div>
    </div>
  </article>
  <article class="card">
    <div class="card-header"><div><h3>Checklist</h3></div></div>
    <div class="card-body">
      <div class="list-stack">
        <div class="list-item"><div class="item-main"><div class="item-title">Credentiallar shifrlangan holda saqlansin</div><div class="item-sub">Security</div></div><span class="badge badge-success">OK</span></div>
        <div class="list-item"><div class="item-main"><div class="item-title">Fallback kanal yonalishi tekshirilsin</div><div class="item-sub">Reliability</div></div><span class="badge badge-warning">Tekshirish</span></div>
        <div class="list-item"><div class="item-main"><div class="item-title">Alert threshold 2% xatoga sozlansin</div><div class="item-sub">Monitoring</div></div><span class="badge badge-primary">Yangi</span></div>
      </div>
    </div>
  </article>
</section>

<section class="card" style="margin-top:14px">
  <div class="card-header"><div><h3>Songgi eventlar</h3></div></div>
  <div class="card-body">
    <div class="table-wrap">
      <table class="table">
        <thead class="table-header"><tr><th>Vaqt</th><th>Event</th><th>Kanal</th><th>Holat</th><th>Havola</th></tr></thead>
        <tbody>
          <tr class="table-row"><td>14:41</td><td>Webhook verify</td><td>{t}</td><td><span class="badge badge-success">Muvaffaqiyatli</span></td><td><a class="btn btn-ghost" href="./19-integration-logs.html">Log</a></td></tr>
          <tr class="table-row"><td>14:35</td><td>Token refresh</td><td>{t}</td><td><span class="badge badge-primary">Yakunlandi</span></td><td><a class="btn btn-ghost" href="./20-integration-status.html">Status</a></td></tr>
          <tr class="table-row"><td>14:20</td><td>Latency spike</td><td>{t}</td><td><span class="badge badge-warning">Kuzatuvda</span></td><td><a class="btn btn-ghost" href="./01-channels-overview.html">Overview</a></td></tr>
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

print('done')
