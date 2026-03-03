from pathlib import Path

base = Path(r"C:\Users\User\Desktop\onlinechat-text\html\26-integrations")

pages = [
    {
        "f":"01-channels-overview.html","t":"Channels Overview","color":"#2563EB","icon":"layout-dashboard",
        "desc":"Barcha kanallar holatini bitta control-center ichida kuzatish.",
        "kpis":[("Faol kanal","14"),("Open incident","2"),("Uptime","99.93%")],
        "related":["02-telegram-setup.html","05-whatsapp-setup.html","20-integration-status.html"],
        "extra":"""
<section class='card' style='border-left:4px solid var(--accent)'><div class='card-header'><h3><i data-lucide='radar'></i> Live Traffic Heat</h3></div><div class='card-body'><div class='grid cols-3'><div class='pill'>Telegram: High</div><div class='pill'>WhatsApp: Medium</div><div class='pill'>Email: Low</div></div></div></section>
"""
    },
    {
        "f":"02-telegram-setup.html","t":"Telegram Setup","color":"#0EA5E9","icon":"send",
        "desc":"Bot token, webhook URL va allowed_updates ni ulash ustasi.",
        "kpis":[("Bot","@qulay_support_bot"),("Webhook","Connected"),("Token","Valid")],
        "related":["03-telegram-settings.html","04-telegram-test.html","19-integration-logs.html"],
        "extra":"""
<section class='split-grid'><article class='card' style='border-top:3px solid var(--accent)'><div class='card-header'><h3><i data-lucide='key-round'></i> Credential</h3></div><div class='card-body'><label>Bot token<input class='input' value='********:AAH...' /></label></div></article><article class='card' style='border-top:3px solid var(--accent)'><div class='card-header'><h3><i data-lucide='link-2'></i> Webhook Bind</h3></div><div class='card-body'><label>URL<input class='input' value='https://api.qulaychat.uz/tg/webhook' /></label></div></article></section>
"""
    },
    {
        "f":"03-telegram-settings.html","t":"Telegram Settings","color":"#38BDF8","icon":"sliders-horizontal",
        "desc":"Welcome, routing va media policy qoidalarini nozik sozlash.",
        "kpis":[("Welcome","On"),("Media limit","20 MB"),("Queue","TG-L1")],
        "related":["02-telegram-setup.html","04-telegram-test.html","01-channels-overview.html"],
        "extra":"""
<section class='card' style='background:linear-gradient(135deg,#f0f9ff,#ffffff)'><div class='card-header'><h3><i data-lucide='message-square-heart'></i> Reply Policy</h3></div><div class='card-body'><div class='list-stack'><div class='list-item'><div class='item-main'><div class='item-title'>/start -> welcome text</div></div><span class='badge badge-success'>Enabled</span></div><div class='list-item'><div class='item-main'><div class='item-title'>keyword: tolov -> billing queue</div></div><span class='badge badge-warning'>Review</span></div></div></div></section>
"""
    },
    {
        "f":"04-telegram-test.html","t":"Telegram Test","color":"#06B6D4","icon":"flask-conical",
        "desc":"Telegram kanalini end-to-end test qilib, latency va retry ni baholash.",
        "kpis":[("Testlar","8"),("Pass","100%"),("Avg RTT","410 ms")],
        "related":["02-telegram-setup.html","03-telegram-settings.html","19-integration-logs.html"],
        "extra":"""
<section class='card'><div class='card-header'><h3><i data-lucide='list-checks'></i> Test Matrix</h3></div><div class='card-body'><div class='table-wrap'><table class='table'><tr><th>Case</th><th>Status</th></tr><tr><td>Text inbound</td><td><span class='badge badge-success'>Pass</span></td></tr><tr><td>Photo inbound</td><td><span class='badge badge-success'>Pass</span></td></tr><tr><td>Webhook retry</td><td><span class='badge badge-success'>Pass</span></td></tr></table></div></div></section>
"""
    },
    {
        "f":"05-whatsapp-setup.html","t":"WhatsApp Setup","color":"#22C55E","icon":"message-circle",
        "desc":"BSP, WABA va raqam verifikatsiyasini ishga tushirish sahifasi.",
        "kpis":[("BSP","360dialog"),("WABA","Verified"),("Phone","Connected")],
        "related":["06-whatsapp-templates.html","07-whatsapp-settings.html","20-integration-status.html"],
        "extra":"""
<section class='split-grid'><article class='card' style='border:1px dashed var(--accent)'><div class='card-header'><h3><i data-lucide='badge-check'></i> Business Verify</h3></div><div class='card-body'><p class='text-muted'>Display name tasdiqlangan va quality rating: High.</p></div></article><article class='card' style='border:1px dashed var(--accent)'><div class='card-header'><h3><i data-lucide='phone-call'></i> Number Health</h3></div><div class='card-body'><p class='text-muted'>Messaging limit: 10K/day</p></div></article></section>
"""
    },
    {
        "f":"06-whatsapp-templates.html","t":"WhatsApp Templates","color":"#16A34A","icon":"files",
        "desc":"Template kutubxonasi, approval pipeline va versiya boshqaruvi.",
        "kpis":[("Approved","27"),("Pending","3"),("Rejected","1")],
        "related":["05-whatsapp-setup.html","07-whatsapp-settings.html","19-integration-logs.html"],
        "extra":"""
<section class='card' style='background:linear-gradient(120deg,#f0fdf4,#fff)'><div class='card-header'><h3><i data-lucide='file-badge'></i> Approval Board</h3></div><div class='card-body'><div class='grid cols-3'><div class='pill'>Utility</div><div class='pill'>Marketing</div><div class='pill'>Authentication</div></div></div></section>
"""
    },
    {
        "f":"07-whatsapp-settings.html","t":"WhatsApp Settings","color":"#15803D","icon":"settings-2",
        "desc":"Session policy, quick replies va media nazoratini boshqarish.",
        "kpis":[("24h Session","Enabled"),("Quick replies","12"),("Max media","15 MB")],
        "related":["05-whatsapp-setup.html","06-whatsapp-templates.html","20-integration-status.html"],
        "extra":"""
<section class='card' style='border-left:5px solid var(--accent)'><div class='card-header'><h3><i data-lucide='timer'></i> Session Rules</h3></div><div class='card-body'><label>Session timeout<select class='input'><option>24 soat</option><option>12 soat</option></select></label></div></section>
"""
    },
    {
        "f":"08-instagram-setup.html","t":"Instagram Setup","color":"#E11D48","icon":"instagram",
        "desc":"Instagram DM ulash, page-binding va scope mapping jarayoni.",
        "kpis":[("Pages","2"),("Token","42 kun"),("DM Sync","Active")],
        "related":["09-facebook-setup.html","01-channels-overview.html","20-integration-status.html"],
        "extra":"""
<section class='card' style='background:linear-gradient(135deg,#fff1f2,#ffffff)'><div class='card-header'><h3><i data-lucide='at-sign'></i> Scope Pack</h3></div><div class='card-body'><div class='pill'>instagram_manage_messages</div><div class='pill'>pages_manage_metadata</div></div></section>
"""
    },
    {
        "f":"09-facebook-setup.html","t":"Facebook Setup","color":"#1D4ED8","icon":"facebook",
        "desc":"Messenger page greeting, ice-breakers va webhook subscription sozlamalari.",
        "kpis":[("Page","QULAY CHAT"),("Greeting","Enabled"),("Ice breakers","3")],
        "related":["08-instagram-setup.html","10-viber-setup.html","19-integration-logs.html"],
        "extra":"""
<section class='split-grid'><article class='card'><div class='card-header'><h3><i data-lucide='handshake'></i> Greeting</h3></div><div class='card-body'><p class='text-muted'>Salom! Savolingizni yozing, operator ulanadi.</p></div></article><article class='card'><div class='card-header'><h3><i data-lucide='sparkles'></i> Ice Breakers</h3></div><div class='card-body'><div class='pill'>Buyurtma holati</div><div class='pill'>To'lov savoli</div></div></article></section>
"""
    },
    {
        "f":"10-viber-setup.html","t":"Viber Setup","color":"#7C3AED","icon":"message-square",
        "desc":"Viber bot token, keyboard actionlar va callback kuzatuvi.",
        "kpis":[("Bot ID","viber-qulay-01"),("Keyboard","6") ,("Callback","Healthy")],
        "related":["09-facebook-setup.html","11-email-setup.html","20-integration-status.html"],
        "extra":"""
<section class='card' style='border:1px solid #ddd'><div class='card-header'><h3><i data-lucide='keyboard'></i> Keyboard Layout</h3></div><div class='card-body'><div class='grid cols-3'><div class='pill'>Yordam</div><div class='pill'>Operator</div><div class='pill'>Aksiya</div></div></div></section>
"""
    },
    {
        "f":"11-email-setup.html","t":"Email Setup","color":"#EA580C","icon":"mail",
        "desc":"IMAP/SMTP credentiallar va mailbox verifikatsiya oqimi.",
        "kpis":[("Mailboxes","4"),("SMTP TLS","On"),("Inbound","Configured")],
        "related":["12-email-settings.html","13-sms-setup.html","19-integration-logs.html"],
        "extra":"""
<section class='split-grid'><article class='card'><div class='card-header'><h3><i data-lucide='inbox'></i> IMAP</h3></div><div class='card-body'><input class='input' value='imap.qulaychat.uz:993' /></div></article><article class='card'><div class='card-header'><h3><i data-lucide='send-horizontal'></i> SMTP</h3></div><div class='card-body'><input class='input' value='smtp.qulaychat.uz:465' /></div></article></section>
"""
    },
    {
        "f":"12-email-settings.html","t":"Email Settings","color":"#C2410C","icon":"mail-check",
        "desc":"Signature, threading va auto-reply policy konfiguratsiyasi.",
        "kpis":[("Signature","Default"),("Threading","Message-ID"),("Auto reply","Working hours")],
        "related":["11-email-setup.html","19-integration-logs.html","20-integration-status.html"],
        "extra":"""
<section class='card' style='background:linear-gradient(120deg,#fff7ed,#fff)'><div class='card-header'><h3><i data-lucide='pen-square'></i> Signature Studio</h3></div><div class='card-body'><textarea class='input' rows='4'>Hurmat bilan, QULAY Support Team</textarea></div></section>
"""
    },
    {
        "f":"13-sms-setup.html","t":"SMS Setup","color":"#0F766E","icon":"message-square-code",
        "desc":"SMS gateway ulash, sender ID va callback endpoint sozlash.",
        "kpis":[("Gateway","Eskiz"),("Sender","QULAY"),("DLR","Enabled")],
        "related":["14-sms-settings.html","11-email-setup.html","20-integration-status.html"],
        "extra":"""
<section class='card'><div class='card-header'><h3><i data-lucide='tower-control'></i> Gateway Endpoint</h3></div><div class='card-body'><input class='input' value='https://notify.eskiz.uz/api' /><button class='btn btn-secondary' style='margin-top:10px'>Ping API</button></div></section>
"""
    },
    {
        "f":"14-sms-settings.html","t":"SMS Settings","color":"#0D9488","icon":"message-square-more",
        "desc":"SMS template, uzunlik limiti va delivery report kuzatuvi.",
        "kpis":[("Unicode","Auto"),("Max chars","480"),("Retry","2x")],
        "related":["13-sms-setup.html","19-integration-logs.html","01-channels-overview.html"],
        "extra":"""
<section class='split-grid'><article class='card'><div class='card-header'><h3><i data-lucide='file-text'></i> Template Rule</h3></div><div class='card-body'><div class='pill'>otp_code expires in 5 min</div></div></article><article class='card'><div class='card-header'><h3><i data-lucide='bar-chart-3'></i> DLR</h3></div><div class='card-body'><p class='text-muted'>Success 97.2%</p></div></article></section>
"""
    },
    {
        "f":"15-bitrix24-setup.html","t":"Bitrix24 Setup","color":"#2563EB","icon":"briefcase-business",
        "desc":"Bitrix24 OAuth va CRM maydon mapping konfiguratsiyasi.",
        "kpis":[("Portal","qulay.bitrix24.ru"),("Mapped","19"),("Sync","2 min")],
        "related":["16-amocrm-setup.html","17-zapier-setup.html","19-integration-logs.html"],
        "extra":"""
<section class='card'><div class='card-header'><h3><i data-lucide='table2'></i> Mapping Grid</h3></div><div class='card-body'><div class='table-wrap'><table class='table'><tr><th>Local</th><th>Bitrix</th></tr><tr><td>customer_name</td><td>CONTACT.NAME</td></tr><tr><td>phone</td><td>CONTACT.PHONE</td></tr></table></div></div></section>
"""
    },
    {
        "f":"16-amocrm-setup.html","t":"AmoCRM Setup","color":"#0284C7","icon":"network",
        "desc":"AmoCRM pipeline va stage mapping, owner assignment siyosati.",
        "kpis":[("Pipelines","3"),("Stages","15"),("Errors","0")],
        "related":["15-bitrix24-setup.html","17-zapier-setup.html","20-integration-status.html"],
        "extra":"""
<section class='card' style='border-left:6px solid var(--accent)'><div class='card-header'><h3><i data-lucide='git-branch'></i> Stage Route</h3></div><div class='card-body'><div class='pill'>New -> L1</div><div class='pill'>Qualified -> L2</div><div class='pill'>Won -> Closed</div></div></section>
"""
    },
    {
        "f":"17-zapier-setup.html","t":"Zapier Setup","color":"#F97316","icon":"zap",
        "desc":"Zap trigger/action konfiguratsiyasi va integration templates.",
        "kpis":[("Active zaps","11"),("Success","98.7%"),("Last run","2 min")],
        "related":["18-custom-webhook.html","19-integration-logs.html","20-integration-status.html"],
        "extra":"""
<section class='card' style='background:linear-gradient(130deg,#fff7ed,#fff)'><div class='card-header'><h3><i data-lucide='workflow'></i> Zap Blueprints</h3></div><div class='card-body'><div class='list-stack'><div class='list-item'><div class='item-main'><div class='item-title'>Escalation -> Slack alert</div></div><span class='badge badge-success'>Active</span></div><div class='list-item'><div class='item-main'><div class='item-title'>Low CSAT -> CRM task</div></div><span class='badge badge-warning'>Paused</span></div></div></div></section>
"""
    },
    {
        "f":"18-custom-webhook.html","t":"Custom Webhook","color":"#DC2626","icon":"webhook",
        "desc":"Custom endpoint, HMAC auth va payload/retry boshqaruvi.",
        "kpis":[("Endpoints","5"),("Auth","HMAC"),("Retry","Backoff")],
        "related":["17-zapier-setup.html","19-integration-logs.html","20-integration-status.html"],
        "extra":"""
<section class='card' style='background:#0f172a;color:#e2e8f0'><div class='card-header'><h3><i data-lucide='code-xml'></i> Payload Preview</h3></div><div class='card-body'><pre style='white-space:pre-wrap'>{"event":"ticket.created","id":"T-12933","channel":"telegram"}</pre></div></section>
"""
    },
    {
        "f":"19-integration-logs.html","t":"Integration Logs","color":"#7C2D12","icon":"scroll-text",
        "desc":"Event stream, xatolar, retrylar va eksport filtrlari paneli.",
        "kpis":[("Events/24h","42380"),("Error rate","0.9%"),("Avg retry","1.3x")],
        "related":["20-integration-status.html","01-channels-overview.html","18-custom-webhook.html"],
        "extra":"""
<section class='card'><div class='card-header'><h3><i data-lucide='funnel'></i> Log Filters</h3></div><div class='card-body'><div class='grid cols-3'><select class='input'><option>Kanal: All</option><option>Telegram</option><option>WhatsApp</option></select><select class='input'><option>Sev: All</option><option>Warn</option><option>Error</option></select><button class='btn btn-secondary'>Export JSONL</button></div></div></section>
"""
    },
    {
        "f":"20-integration-status.html","t":"Integration Status","color":"#4F46E5","icon":"activity",
        "desc":"Sistem salomatligi, incident timeline va SLO natijalarini kuzatish.",
        "kpis":[("Healthy","12/14"),("Degraded","2"),("SLO","99.93%")],
        "related":["01-channels-overview.html","19-integration-logs.html","02-telegram-setup.html"],
        "extra":"""
<section class='split-grid'><article class='card'><div class='card-header'><h3><i data-lucide='siren'></i> Incident Timeline</h3></div><div class='card-body'><div class='list-item'><div class='item-main'><div class='item-title'>11:42 WhatsApp latency spike</div></div><span class='badge badge-warning'>Open</span></div><div class='list-item'><div class='item-main'><div class='item-title'>10:16 SMTP reconnect</div></div><span class='badge badge-success'>Resolved</span></div></div></article><article class='card'><div class='card-header'><h3><i data-lucide='gauge'></i> SLO Meter</h3></div><div class='card-body'><p class='text-muted'>Target 99.9% / Current <strong>99.93%</strong></p></div></article></section>
"""
    }
]

nav = [(p['f'], p['t']) for p in pages]

def title_of(f):
    for x,y in nav:
        if x == f:
            return y
    return f

for i,p in enumerate(pages):
    prev = pages[i-1]['f'] if i>0 else pages[-1]['f']
    nxt = pages[i+1]['f'] if i < len(pages)-1 else pages[0]['f']
    nav_html = ''.join([f"<a class='subnav-tab{' active' if f==p['f'] else ''}' href='./{f}'>{t}</a>" for f,t in nav])
    rel_html = ''.join([f"<a class='btn btn-secondary' href='./{r}'><i data-lucide='arrow-right'></i> {title_of(r)}</a>" for r in p['related']])
    kpi_html = ''.join([f"<article class='card'><div class='card-body'><p class='text-muted' style='margin:0 0 6px'>{k}</p><h3 style='margin:0'>{v}</h3></div></article>" for k,v in p['kpis']])

    html = f"""<!doctype html>
<html lang='uz'>
<head>
<meta charset='UTF-8'>
<meta name='viewport' content='width=device-width, initial-scale=1.0'>
<title>QULAY CHAT - {p['t']}</title>
<link rel='preconnect' href='https://fonts.googleapis.com'>
<link rel='preconnect' href='https://fonts.gstatic.com' crossorigin>
<link href='https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap' rel='stylesheet'>
<link rel='stylesheet' href='../assets/qulay-chat-design-system.css'>
<script src='https://unpkg.com/lucide@latest' defer></script>
<script src='../assets/qulay-chat-shell.js' defer></script>
<script src='../assets/qulay-chat-runtime.js' defer></script>
<style>
:root{{--accent:{p['color']};}}
.page-hero{{display:flex;align-items:center;justify-content:space-between;background:linear-gradient(130deg,{p['color']}15,#fff);border:1px solid {p['color']}55;border-radius:14px;padding:16px;margin:12px 0;}}
.page-hero .iconwrap{{width:52px;height:52px;border-radius:12px;background:{p['color']};display:grid;place-items:center;color:#fff;}}
</style>
</head>
<body data-active-nav='integrations' class='dashboard-shell-page'>
<main class='app-content'>
<div class='subnav-scroll'><div class='subnav-tabs'>{nav_html}</div></div>
<div data-roles='agent' class='card' style='border-color:#FCD34D;background:#FFFBEB;margin-top:12px'><div class='card-body'><h3 style='margin:0 0 6px'>Admin only</h3><p class='text-muted' style='margin:0 0 12px'>Bu bo'lim faqat adminlar uchun.</p><a class='btn btn-secondary' href='../04-dashboard/02-dashboard-agent.html'>Agent dashboardga qaytish</a></div></div>
<div data-roles='admin'>
<nav class='breadcrumbs' aria-label='Breadcrumb'><a href='../04-dashboard/01-dashboard.html'>Dashboard</a><i data-lucide='chevron-right'></i><a href='./01-channels-overview.html'>Integrations</a><i data-lucide='chevron-right'></i><span class='current'>{p['t']}</span></nav>

<section class='page-hero'>
  <div>
    <h1 style='margin:0 0 6px'>{p['t']}</h1>
    <p class='text-muted' style='margin:0'>{p['desc']}</p>
  </div>
  <div class='iconwrap'><i data-lucide='{p['icon']}'></i></div>
</section>

<div class='page-header-actions' style='margin-bottom:10px'>
  <a class='btn btn-secondary' href='./{prev}'><i data-lucide='arrow-left'></i> {title_of(prev)}</a>
  <a class='btn btn-primary' href='./{nxt}'>{title_of(nxt)} <i data-lucide='arrow-right'></i></a>
</div>

<section class='grid cols-3'>{kpi_html}</section>

<section class='card' style='margin-top:14px;border-top:4px solid var(--accent)'>
  <div class='card-header'><h3><i data-lucide='git-fork'></i> Bog'liq yo'nalishlar</h3></div>
  <div class='card-body'><div class='flex gap-2 wrap'>{rel_html}</div></div>
</section>

{p['extra']}

<section class='card' style='margin-top:14px'>
  <div class='card-header'><h3><i data-lucide='history'></i> So'nggi faoliyat</h3></div>
  <div class='card-body'><div class='list-stack'><div class='list-item'><div class='item-main'><div class='item-title'>Config sync yakunlandi</div></div><span class='badge badge-success'>OK</span></div><div class='list-item'><div class='item-main'><div class='item-title'>Validation qayta tekshirildi</div></div><span class='badge badge-warning'>Review</span></div></div></div>
</section>

<div class='sticky-save-bar'><a class='btn btn-secondary' href='./{prev}'>Oldingi sahifa</a><a class='btn btn-primary' href='./{nxt}'>Keyingi sahifa</a></div>
</div></main>
<script>window.addEventListener('DOMContentLoaded',()=>{{if(window.lucide&&window.lucide.createIcons)window.lucide.createIcons();}});</script>
</body></html>"""

    (base / p['f']).write_text(html, encoding='utf-8')

print('26 redesigned unique styles/icons done')
