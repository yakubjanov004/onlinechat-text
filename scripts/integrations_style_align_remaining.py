from pathlib import Path

base = Path(r"C:\Users\User\Desktop\onlinechat-text\html\26-integrations")

pages = [
 ("10-viber-setup.html","Viber Setup","Viber bot token, keyboard tugmalar va callback monitoring sozlamalari.","09-facebook-setup.html","11-email-setup.html",[("Bot ID","viber-qulay-01"),("Keyboard buttons","6"),("Callback health","Healthy")]),
 ("11-email-setup.html","Email Setup","IMAP/SMTP credentiallar, mailbox verification va inbound routing.","10-viber-setup.html","12-email-settings.html",[("Mailboxes","4"),("SMTP TLS","Enabled"),("Inbound route","Configured")]),
 ("12-email-settings.html","Email Settings","Signature, threading rules, auto-reply va email policy boshqaruvi.","11-email-setup.html","13-sms-setup.html",[("Signature","Default"),("Threading","Message-ID"),("Auto-reply","Working hours")]),
 ("13-sms-setup.html","SMS Setup","SMS gateway ulash, sender ID va callback endpoint sozlamalari.","12-email-settings.html","14-sms-settings.html",[("Gateway","Eskiz"),("Sender ID","QULAY"),("DLR","Enabled")]),
 ("14-sms-settings.html","SMS Settings","Template policy, belgi limiti va delivery monitoring sozlamalari.","13-sms-setup.html","15-bitrix24-setup.html",[("Unicode","Auto"),("Max chars","480"),("Retry","2x")]),
 ("15-bitrix24-setup.html","Bitrix24 Setup","Bitrix24 OAuth ulanishi va CRM field mapping sozlamalari.","14-sms-settings.html","16-amocrm-setup.html",[("Portal","qulay.bitrix24.ru"),("Mapped fields","19"),("Sync","2 min")]),
 ("16-amocrm-setup.html","AmoCRM Setup","Pipeline mapping, stage sync va owner assignment boshqaruvi.","15-bitrix24-setup.html","17-zapier-setup.html",[("Pipelines","3"),("Stages","15"),("Sync errors","0")]),
 ("17-zapier-setup.html","Zapier Setup","Zap trigger/action konfiguratsiyasi va tayyor automation shablonlari.","16-amocrm-setup.html","18-custom-webhook.html",[("Active zaps","11"),("Success","98.7%"),("Last run","2 min oldin")]),
 ("18-custom-webhook.html","Custom Webhook","Custom endpoint, auth header va payload/retry policy boshqaruvi.","17-zapier-setup.html","19-integration-logs.html",[("Endpoints","5"),("Auth","HMAC SHA256"),("Retry","Exp backoff")]),
 ("19-integration-logs.html","Integration Logs","Event loglar, xatolar, retrylar va eksport filtrlari paneli.","18-custom-webhook.html","20-integration-status.html",[("Events/24h","42,380"),("Error rate","0.9%"),("Avg retry","1.3x")]),
 ("20-integration-status.html","Integration Status","Health dashboard, uptime va incident timeline ko‘rinishi.","19-integration-logs.html","01-channels-overview.html",[("Healthy","12/14"),("Degraded","2"),("SLO","99.93%")]),
]

nav = [
('01-channels-overview.html','Channels Overview'),('02-telegram-setup.html','Telegram Setup'),('03-telegram-settings.html','Telegram Settings'),('04-telegram-test.html','Telegram Test'),('05-whatsapp-setup.html','WhatsApp Setup'),('06-whatsapp-templates.html','WhatsApp Templates'),('07-whatsapp-settings.html','WhatsApp Settings'),('08-instagram-setup.html','Instagram Setup'),('09-facebook-setup.html','Facebook Setup'),('10-viber-setup.html','Viber Setup'),('11-email-setup.html','Email Setup'),('12-email-settings.html','Email Settings'),('13-sms-setup.html','SMS Setup'),('14-sms-settings.html','SMS Settings'),('15-bitrix24-setup.html','Bitrix24 Setup'),('16-amocrm-setup.html','AmoCRM Setup'),('17-zapier-setup.html','Zapier Setup'),('18-custom-webhook.html','Custom Webhook'),('19-integration-logs.html','Integration Logs'),('20-integration-status.html','Integration Status')
]

def nav_html(active):
    return ''.join([f'<a class="subnav-tab{" active" if f==active else ""}" href="./{f}">{t}</a>' for f,t in nav])

def title(file):
    for f,t in nav:
        if f==file:return t
    return file

for f,t,d,prev,nxt,kpis in pages:
    kpi_html=''.join([f"<article class='card'><div class='card-body'><p class='text-muted' style='margin:0 0 6px'>{k}</p><h3 style='margin:0'>{v}</h3></div></article>" for k,v in kpis])
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
  <body data-active-nav="integrations" class="dashboard-shell-page">
    <main class="app-content">
      <div class="subnav-scroll"><div class="subnav-tabs">{nav_html(f)}</div></div>
      <div data-roles="agent" class="card" style="border-color:#FCD34D;background:#FFFBEB;margin-top:12px"><div class="card-body"><h3 style="margin:0 0 6px">Admin only</h3><p class="text-muted" style="margin:0 0 12px">Bu bo‘lim faqat adminlar uchun.</p><a class="btn btn-secondary" href="../04-dashboard/02-dashboard-agent.html">Agent dashboardga qaytish</a></div></div>
      <div data-roles="admin">
        <nav class="breadcrumbs" aria-label="Breadcrumb"><a href="../04-dashboard/01-dashboard.html">Dashboard</a><i data-lucide="chevron-right"></i><a href="./01-channels-overview.html">Integrations</a><i data-lucide="chevron-right"></i><span class="current">{t}</span></nav>
        <div class="page-header"><div><h1>{t}</h1><p class="text-muted">{d}</p></div><div class="page-header-actions"><a class="btn btn-secondary" href="./{prev}"><i data-lucide="arrow-left"></i> {title(prev)}</a><a class="btn btn-primary" href="./{nxt}">{title(nxt)} <i data-lucide="arrow-right"></i></a></div></div>
        <section class="grid cols-3" style="margin-bottom:14px">{kpi_html}</section>
        <section class="split-grid" style="margin-bottom:14px"><article class="card"><div class="card-header"><h3>Asosiy sozlamalar</h3></div><div class="card-body"><label>Primary setting<input class="input" value="Configured" /></label><label style="margin-top:10px;display:block">Secondary setting<input class="input" value="Enabled" /></label><div class="flex gap-2 wrap" style="margin-top:12px"><button class="btn btn-secondary" type="button"><i data-lucide="flask-conical"></i> Tekshirish</button><button class="btn btn-primary" type="button"><i data-lucide="save"></i> Saqlash</button></div></div></article><article class="card"><div class="card-header"><h3>Checklist</h3></div><div class="card-body"><div class="list-stack"><div class="list-item"><div class="item-main"><div class="item-title">Credentiallar tekshirildi</div></div><span class="badge badge-success">OK</span></div><div class="list-item"><div class="item-main"><div class="item-title">Routing qoidasi yangilandi</div></div><span class="badge badge-primary">Active</span></div><div class="list-item"><div class="item-main"><div class="item-title">Fallback nazoratda</div></div><span class="badge badge-warning">Watch</span></div></div></div></article></section>
        <section class="card" style="margin-bottom:14px"><div class="card-header"><h3>So‘nggi faoliyat</h3></div><div class="card-body"><div class="table-wrap"><table class="table"><thead class="table-header"><tr><th>Vaqt</th><th>Event</th><th>Holat</th><th>Mas’ul</th></tr></thead><tbody><tr class="table-row"><td>16:50</td><td>Config sync</td><td><span class="badge badge-success">Yakunlandi</span></td><td>Behruz</td></tr><tr class="table-row"><td>16:43</td><td>Validation run</td><td><span class="badge badge-warning">Review</span></td><td>Madina</td></tr><tr class="table-row"><td>16:31</td><td>Rule update</td><td><span class="badge badge-primary">Updated</span></td><td>Dilnoza</td></tr></tbody></table></div></div></section>
        <div class="sticky-save-bar"><a class="btn btn-secondary" href="./{prev}">Oldingi sahifa</a><a class="btn btn-primary" href="./{nxt}">Keyingi sahifa</a></div>
      </div>
    </main>
    <script>window.addEventListener("DOMContentLoaded", function () {{ if (window.lucide && window.lucide.createIcons) window.lucide.createIcons(); }});</script>
  </body>
</html>'''
    (base / f).write_text(html, encoding='utf-8')

print('done remaining 10-20')
