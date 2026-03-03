from pathlib import Path

base = Path(r"C:\Users\User\Desktop\onlinechat-text\html\26-integrations")

pages = [
("01-channels-overview.html","Channels Overview","Barcha kanallar holati, navbat yuklamasi va sog'liq monitoringi.","Faol kanallar","14","Uptime","99.93%","Open incidents","2",["02-telegram-setup.html","05-whatsapp-setup.html","20-integration-status.html"],
 '''<section class="card" style="margin-top:14px"><div class="card-header"><div><h3>Kanal kesimida holat</h3></div></div><div class="card-body"><div class="table-wrap"><table class="table"><thead class="table-header"><tr><th>Kanal</th><th>Queue</th><th>Latency</th><th>Holat</th></tr></thead><tbody><tr class="table-row"><td>Telegram</td><td>31</td><td>220 ms</td><td><span class="badge badge-success">Healthy</span></td></tr><tr class="table-row"><td>WhatsApp</td><td>54</td><td>390 ms</td><td><span class="badge badge-warning">Degraded</span></td></tr><tr class="table-row"><td>Email</td><td>12</td><td>1.4 s</td><td><span class="badge badge-success">Healthy</span></td></tr></tbody></table></div></div></section>'''),

("02-telegram-setup.html","Telegram Setup","Bot token, webhook URL va allowed updates konfiguratsiyasi.","Bot username","@qulay_support_bot","Webhook","Configured","Token status","Valid",["03-telegram-settings.html","04-telegram-test.html","19-integration-logs.html"],
 '''<section class="split-grid" style="margin-top:14px"><article class="card"><div class="card-header"><div><h3>Bot identifikatsiyasi</h3></div></div><div class="card-body"><label>Bot username<input class="input" value="@qulay_support_bot"/></label><label style="margin-top:10px;display:block">Bot token<input class="input" value="********:AAH..."/></label></div></article><article class="card"><div class="card-header"><div><h3>Webhook</h3></div></div><div class="card-body"><label>Webhook URL<input class="input" value="https://api.qulaychat.uz/tg/webhook"/></label><button class="btn btn-secondary" style="margin-top:10px" data-action="log">Verify webhook</button></div></article></section>'''),

("03-telegram-settings.html","Telegram Settings","Welcome message, auto-reply va routing qoidalarini boshqarish.","Welcome msg","Enabled","Auto-reply","Working hours","Primary queue","TG-L1",["02-telegram-setup.html","04-telegram-test.html","01-channels-overview.html"],
 '''<section class="card" style="margin-top:14px"><div class="card-header"><div><h3>Telegram kanal qoidalari</h3></div></div><div class="card-body"><div class="list-stack"><div class="list-item"><div class="item-main"><div class="item-title">/start xabarida welcome text</div><div class="item-sub">Mijozga birinchi javob</div></div><span class="badge badge-success">Yoqilgan</span></div><div class="list-item"><div class="item-main"><div class="item-title">Media limit 20MB</div><div class="item-sub">File policy</div></div><span class="badge badge-primary">Default</span></div><div class="list-item"><div class="item-main"><div class="item-title">Keyword: "to'lov" -> Billing queue</div><div class="item-sub">Routing</div></div><span class="badge badge-warning">Tekshirish</span></div></div></div></section>'''),

("04-telegram-test.html","Telegram Test","Telegram ulanishini end-to-end sinash, update tracing va xatolarni ko'rish.","Test suite","8","Pass rate","100%","Last test","2 min oldin",["02-telegram-setup.html","03-telegram-settings.html","19-integration-logs.html"],
 '''<section class="card" style="margin-top:14px"><div class="card-header"><div><h3>Test natijalari</h3></div></div><div class="card-body"><div class="table-wrap"><table class="table"><thead class="table-header"><tr><th>Case</th><th>Natija</th><th>RTT</th></tr></thead><tbody><tr class="table-row"><td>Text message</td><td><span class="badge badge-success">Pass</span></td><td>410 ms</td></tr><tr class="table-row"><td>Photo upload</td><td><span class="badge badge-success">Pass</span></td><td>920 ms</td></tr><tr class="table-row"><td>Webhook retry</td><td><span class="badge badge-success">Pass</span></td><td>1.3 s</td></tr></tbody></table></div></div></section>'''),

("05-whatsapp-setup.html","WhatsApp Setup","WABA ulash, BSP credentiallari va phone number verification.","BSP","360dialog","WABA","Verified","Phone number","Connected",["06-whatsapp-templates.html","07-whatsapp-settings.html","20-integration-status.html"],
 '''<section class="split-grid" style="margin-top:14px"><article class="card"><div class="card-header"><div><h3>Business profile</h3></div></div><div class="card-body"><label>Display name<input class="input" value="QULAY Support"/></label><label style="margin-top:10px;display:block">Phone number<input class="input" value="+998 90 123 45 67"/></label></div></article><article class="card"><div class="card-header"><div><h3>Verification</h3></div></div><div class="card-body"><p class="text-muted">Meta verification holati: <strong>Approved</strong></p><button class="btn btn-secondary" data-action="log">Re-check status</button></div></article></section>'''),

("06-whatsapp-templates.html","WhatsApp Templates","Shablonlar, Meta approval holati va category bo'yicha boshqaruv.","Approved","27","Pending","3","Rejected","1",["05-whatsapp-setup.html","07-whatsapp-settings.html","19-integration-logs.html"],
 '''<section class="card" style="margin-top:14px"><div class="card-header"><div><h3>Template katalogi</h3></div></div><div class="card-body"><div class="table-wrap"><table class="table"><thead class="table-header"><tr><th>Template</th><th>Category</th><th>Language</th><th>Status</th></tr></thead><tbody><tr class="table-row"><td>order_update_uz</td><td>Utility</td><td>UZ</td><td><span class="badge badge-success">Approved</span></td></tr><tr class="table-row"><td>promo_weekend</td><td>Marketing</td><td>UZ</td><td><span class="badge badge-warning">Pending</span></td></tr><tr class="table-row"><td>otp_login</td><td>Authentication</td><td>EN</td><td><span class="badge badge-success">Approved</span></td></tr></tbody></table></div></div></section>'''),

("07-whatsapp-settings.html","WhatsApp Settings","Session policy, quick replies va media/routing sozlamalari.","24h session","Enabled","Quick replies","12","Routing","Skill-based",["05-whatsapp-setup.html","06-whatsapp-templates.html","20-integration-status.html"],
 '''<section class="card" style="margin-top:14px"><div class="card-header"><div><h3>Session va policy</h3></div></div><div class="card-body"><div class="grid cols-2" style="gap:10px"><label>Session timeout<select class="input"><option>24 soat</option><option>12 soat</option></select></label><label>Media max size<select class="input"><option>15 MB</option><option>20 MB</option></select></label></div><div class="flex gap-2 wrap" style="margin-top:10px"><button class="btn btn-secondary" data-action="log">Apply policy</button></div></div></section>'''),

("08-instagram-setup.html","Instagram Setup","Instagram DM ulash, page tanlash va permission scope sozlash.","Connected pages","2","Token expiry","42 kun","DM sync","Active",["09-facebook-setup.html","01-channels-overview.html","20-integration-status.html"],
 '''<section class="card" style="margin-top:14px"><div class="card-header"><div><h3>Instagram connection</h3></div></div><div class="card-body"><p class="text-muted">Facebook App orqali quyidagi permissionlar aktiv:</p><div class="grid cols-2" style="gap:8px"><div class="pill">instagram_manage_messages</div><div class="pill">pages_manage_metadata</div><div class="pill">pages_read_engagement</div><div class="pill">business_management</div></div></div></section>'''),

("09-facebook-setup.html","Facebook Setup","Messenger page connect, greeting text va ice breakers boshqaruvi.","Connected page","QULAY CHAT","Greeting","Enabled","Ice breakers","3",["08-instagram-setup.html","10-viber-setup.html","19-integration-logs.html"],
 '''<section class="split-grid" style="margin-top:14px"><article class="card"><div class="card-header"><div><h3>Greeting & Ice Breakers</h3></div></div><div class="card-body"><div class="list-stack"><div class="list-item"><div class="item-main"><div class="item-title">Salom! Qanday yordam bera olamiz?</div></div></div><div class="list-item"><div class="item-main"><div class="item-title">Buyurtmam holatini tekshirish</div></div></div><div class="list-item"><div class="item-main"><div class="item-title">Operator bilan bog'lanish</div></div></div></div></div></article><article class="card"><div class="card-header"><div><h3>Webhook subscriptions</h3></div></div><div class="card-body"><p class="text-muted">messages, messaging_postbacks, message_deliveries</p></div></article></section>'''),

("10-viber-setup.html","Viber Setup","Viber bot token, keyboard tugmalar va callback monitoring.","Bot ID","viber-qulay-01","Keyboard buttons","6","Callback health","Healthy",["09-facebook-setup.html","11-email-setup.html","20-integration-status.html"],
 '''<section class="card" style="margin-top:14px"><div class="card-header"><div><h3>Keyboard konfiguratsiyasi</h3></div></div><div class="card-body"><div class="grid cols-3" style="gap:8px"><div class="pill">Buyurtma</div><div class="pill">To'lov</div><div class="pill">Operator</div><div class="pill">Aksiya</div><div class="pill">Lokatsiya</div><div class="pill">Yordam</div></div></div></section>'''),

("11-email-setup.html","Email Setup","IMAP/SMTP ulanish, mailbox verifikatsiyasi va inbound routing.","Mailboxes","4","SMTP TLS","Enabled","Inbound route","Configured",["12-email-settings.html","13-sms-setup.html","19-integration-logs.html"],
 '''<section class="split-grid" style="margin-top:14px"><article class="card"><div class="card-header"><div><h3>IMAP</h3></div></div><div class="card-body"><label>Host<input class="input" value="imap.qulaychat.uz"/></label><label style="margin-top:10px;display:block">Port<input class="input" value="993"/></label></div></article><article class="card"><div class="card-header"><div><h3>SMTP</h3></div></div><div class="card-body"><label>Host<input class="input" value="smtp.qulaychat.uz"/></label><label style="margin-top:10px;display:block">Port<input class="input" value="465"/></label></div></article></section>'''),

("12-email-settings.html","Email Settings","Signature, auto-reply, threading rules va email policy.","Signature","Team default","Threading","Message-ID","Auto-reply","Working hours",["11-email-setup.html","19-integration-logs.html","20-integration-status.html"],
 '''<section class="card" style="margin-top:14px"><div class="card-header"><div><h3>Email qoidalari</h3></div></div><div class="card-body"><div class="list-stack"><div class="list-item"><div class="item-main"><div class="item-title">Subject prefiksi: [SUPPORT]</div></div><span class="badge badge-primary">On</span></div><div class="list-item"><div class="item-main"><div class="item-title">Auto-close 72h inactivity</div></div><span class="badge badge-warning">Review</span></div><div class="list-item"><div class="item-main"><div class="item-title">Attachment virus scan</div></div><span class="badge badge-success">Enabled</span></div></div></div></section>'''),

("13-sms-setup.html","SMS Setup","SMS gateway ulash (Eskiz/PlayMobile), sender ID va callback endpoint.","Gateway","Eskiz","Sender ID","QULAY","DLR","Enabled",["14-sms-settings.html","11-email-setup.html","20-integration-status.html"],
 '''<section class="card" style="margin-top:14px"><div class="card-header"><div><h3>Gateway ulanish ma'lumotlari</h3></div></div><div class="card-body"><label>API endpoint<input class="input" value="https://notify.eskiz.uz/api"/></label><label style="margin-top:10px;display:block">Callback URL<input class="input" value="https://api.qulaychat.uz/sms/dlr"/></label><button class="btn btn-secondary" style="margin-top:10px" data-action="log">Send test SMS</button></div></section>'''),

("14-sms-settings.html","SMS Settings","Template, belgi limiti va yetkazib berish hisobotlari monitoringi.","Unicode mode","Auto","Max chars","480","Retry","2x",["13-sms-setup.html","19-integration-logs.html","01-channels-overview.html"],
 '''<section class="split-grid" style="margin-top:14px"><article class="card"><div class="card-header"><div><h3>Template policy</h3></div></div><div class="card-body"><p class="text-muted">OTP template alohida prioritet bilan yuboriladi.</p><div class="pill">otp_code: Expire 5 min</div></div></article><article class="card"><div class="card-header"><div><h3>Delivery monitoring</h3></div></div><div class="card-body"><p class="text-muted">DLR success: <strong>97.2%</strong></p></div></article></section>'''),

("15-bitrix24-setup.html","Bitrix24 Setup","Bitrix24 OAuth, field mapping va lead/contact sync qoidalari.","Portal","qulay.bitrix24.ru","Mapped fields","19","Sync interval","2 min",["16-amocrm-setup.html","17-zapier-setup.html","19-integration-logs.html"],
 '''<section class="card" style="margin-top:14px"><div class="card-header"><div><h3>Field mapping</h3></div></div><div class="card-body"><div class="table-wrap"><table class="table"><thead class="table-header"><tr><th>QULAY maydon</th><th>Bitrix24 maydon</th><th>Holat</th></tr></thead><tbody><tr class="table-row"><td>customer_name</td><td>CONTACT.NAME</td><td><span class="badge badge-success">Mapped</span></td></tr><tr class="table-row"><td>phone</td><td>CONTACT.PHONE</td><td><span class="badge badge-success">Mapped</span></td></tr><tr class="table-row"><td>issue_type</td><td>LEAD.UF_CRM_ISSUE</td><td><span class="badge badge-warning">Review</span></td></tr></tbody></table></div></div></section>'''),

("16-amocrm-setup.html","AmoCRM Setup","AmoCRM pipeline mapping, stage sync va owner assignment.","Pipelines","3","Stages mapped","15","Sync errors","0",["15-bitrix24-setup.html","17-zapier-setup.html","20-integration-status.html"],
 '''<section class="split-grid" style="margin-top:14px"><article class="card"><div class="card-header"><div><h3>Pipeline mapping</h3></div></div><div class="card-body"><div class="pill">New lead -> Inbox New</div><div class="pill">Qualified -> L2 Queue</div><div class="pill">Won -> Closed Resolved</div></div></article><article class="card"><div class="card-header"><div><h3>Owner assignment</h3></div></div><div class="card-body"><p class="text-muted">Round-robin + skill-tag asosida.</p></div></article></section>'''),

("17-zapier-setup.html","Zapier Setup","Zap trigger/action va API key orqali avtomatlashtirish ulanishi.","Active zaps","11","Task success","98.7%","Last run","2 min oldin",["18-custom-webhook.html","19-integration-logs.html","20-integration-status.html"],
 '''<section class="card" style="margin-top:14px"><div class="card-header"><div><h3>Zap template'lar</h3></div></div><div class="card-body"><div class="list-stack"><div class="list-item"><div class="item-main"><div class="item-title">New ticket -> Google Sheets row</div></div><span class="badge badge-success">Active</span></div><div class="list-item"><div class="item-main"><div class="item-title">Escalation -> Slack alert</div></div><span class="badge badge-success">Active</span></div><div class="list-item"><div class="item-main"><div class="item-title">CSAT low -> CRM task</div></div><span class="badge badge-warning">Paused</span></div></div></div></section>'''),

("18-custom-webhook.html","Custom Webhook","Custom URL, header auth, payload format va retry policy sozlamalari.","Endpoints","5","Auth","HMAC SHA256","Retry","Exp backoff",["17-zapier-setup.html","19-integration-logs.html","20-integration-status.html"],
 '''<section class="card" style="margin-top:14px"><div class="card-header"><div><h3>Payload preview</h3></div></div><div class="card-body"><pre style="background:#0f172a;color:#e2e8f0;padding:12px;border-radius:10px;overflow:auto">{
  "event":"ticket.created",
  "ticket_id":"T-12933",
  "channel":"telegram",
  "created_at":"2026-03-03T10:03:00Z"
}</pre></div></section>'''),

("19-integration-logs.html","Integration Logs","Event log, xatolar, retry tarixlari va debug kuzatuvlari.","Events/24h","42380","Error rate","0.9%","Avg retry","1.3x",["20-integration-status.html","01-channels-overview.html","18-custom-webhook.html"],
 '''<section class="card" style="margin-top:14px"><div class="card-header"><div><h3>Log filtrlari</h3></div></div><div class="card-body"><div class="grid cols-3" style="gap:10px"><select class="input"><option>Kanal: Barchasi</option><option>Telegram</option><option>WhatsApp</option><option>Email</option></select><select class="input"><option>Sev: Barchasi</option><option>Info</option><option>Warn</option><option>Error</option></select><button class="btn btn-secondary"><i data-lucide="download"></i> Export JSONL</button></div></div></section>'''),

("20-integration-status.html","Integration Status","Health dashboard: uptime, degraded servislar va incident timeline.","Healthy","12/14","Degraded","2","Last incident","11:42",["01-channels-overview.html","19-integration-logs.html","02-telegram-setup.html"],
 '''<section class="split-grid" style="margin-top:14px"><article class="card"><div class="card-header"><div><h3>Incident timeline</h3></div></div><div class="card-body"><div class="list-stack"><div class="list-item"><div class="item-main"><div class="item-title">11:42 WhatsApp latency spike</div></div><span class="badge badge-warning">Open</span></div><div class="list-item"><div class="item-main"><div class="item-title">10:16 Email SMTP reconnect</div></div><span class="badge badge-success">Resolved</span></div></div></div></article><article class="card"><div class="card-header"><div><h3>SLO</h3></div></div><div class="card-body"><p class="text-muted">Monthly target: 99.9%, current: <strong>99.93%</strong></p></div></article></section>''')
]

nav = [(p[0], p[1]) for p in pages]

def nav_html(cur):
    out=[]
    for f,t in nav:
        cls = 'subnav-tab active' if f==cur else 'subnav-tab'
        out.append(f'<a class="{cls}" href="./{f}">{t}</a>')
    return '\n'.join(out)

def title_of(f):
    for x,y in nav:
        if x==f:
            return y
    return f

for i,p in enumerate(pages):
    f,t,d,k1,v1,k2,v2,k3,v3,rels,extra = p
    prev = pages[i-1][0] if i>0 else pages[-1][0]
    nxt = pages[i+1][0] if i < len(pages)-1 else pages[0][0]
    rel_html='\n'.join([f'<a class="btn btn-secondary" href="./{r}"><i data-lucide="arrow-right"></i> {title_of(r)}</a>' for r in rels])

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
<div class="subnav-scroll"><div class="subnav-tabs">{nav_html(f)}</div></div>

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
  <div><h1>{t}</h1><p class="text-muted">{d}</p></div>
  <div class="page-header-actions">
    <a class="btn btn-secondary" href="./{prev}"><i data-lucide="arrow-left"></i> {title_of(prev)}</a>
    <a class="btn btn-primary" href="./{nxt}">{title_of(nxt)} <i data-lucide="arrow-right"></i></a>
  </div>
</div>

<section class="grid cols-3">
  <article class="card"><div class="card-body"><p class="text-muted" style="margin:0 0 6px">{k1}</p><h3 style="margin:0">{v1}</h3></div></article>
  <article class="card"><div class="card-body"><p class="text-muted" style="margin:0 0 6px">{k2}</p><h3 style="margin:0">{v2}</h3></div></article>
  <article class="card"><div class="card-body"><p class="text-muted" style="margin:0 0 6px">{k3}</p><h3 style="margin:0">{v3}</h3></div></article>
</section>

<section class="split-grid" style="margin-top:14px">
  <article class="card"><div class="card-header"><div><h3>Diagramma</h3></div></div><div class="card-body"><img src="../assets/illustrations/integrations-network.svg" alt="{t} diagrammasi" style="width:100%;height:auto;border:1px solid #E2E8F0;border-radius:12px;background:#fff" /><p class="text-muted" style="margin-top:10px">Ulanish oqimi va kuzatuv bosqichlari ko'rsatildi.</p></div></article>
  <article class="card"><div class="card-header"><div><h3>Bog'liq sahifalar</h3></div></div><div class="card-body"><div class="flex gap-2 wrap">{rel_html}</div></div></article>
</section>

{extra}

<section class="card" style="margin-top:14px"><div class="card-header"><div><h3>Operatsion log</h3></div></div><div class="card-body"><div class="table-wrap"><table class="table"><thead class="table-header"><tr><th>Vaqt</th><th>Event</th><th>Holat</th><th>Amal</th></tr></thead><tbody><tr class="table-row"><td>15:01</td><td>Config sync</td><td><span class="badge badge-success">OK</span></td><td><a class="btn btn-ghost" href="./19-integration-logs.html">Ko'rish</a></td></tr><tr class="table-row"><td>14:56</td><td>Validation</td><td><span class="badge badge-warning">Review</span></td><td><a class="btn btn-ghost" href="./20-integration-status.html">Status</a></td></tr></tbody></table></div></div></section>

<div class="sticky-save-bar"><a class="btn btn-secondary" href="./{prev}">Oldingi sahifa</a><a class="btn btn-primary" href="./{nxt}">Keyingi sahifa</a></div>
</div>
</main>
<script>window.addEventListener("DOMContentLoaded", function(){{ if (window.lucide && window.lucide.createIcons) {{ window.lucide.createIcons(); }} }});</script>
</body>
</html>'''
    (base / f).write_text(html, encoding='utf-8')

print('26 integrations name-specific enrichment done')
