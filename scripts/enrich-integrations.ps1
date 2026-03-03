$ErrorActionPreference = 'Stop'

$baseDir = 'C:\Users\User\Desktop\onlinechat-text\html\26-integrations'

$pages = @(
  @{f='01-channels-overview.html'; t='Channels Overview'; d='Barcha kanallar holati, ulanish sifati va real-time monitoring markazi.'; img='integrations-network.svg'; kpi1='Faol kanallar'; v1='14 ta'; kpi2='Uptime'; v2='99.93%'; kpi3='So‘nggi xato'; v3='12 daqiqa oldin'; rel=@('02-telegram-setup.html','05-whatsapp-setup.html','19-integration-logs.html')},
  @{f='02-telegram-setup.html'; t='Telegram Setup'; d='Bot token, webhook URL, allowed updates va xavfsizlik sozlamalari.'; img='integrations-network.svg'; kpi1='Bot username'; v1='@qulay_support_bot'; kpi2='Webhook RTT'; v2='280 ms'; kpi3='Mode'; v3='Production'; rel=@('03-telegram-settings.html','04-telegram-test.html','01-channels-overview.html')},
  @{f='03-telegram-settings.html'; t='Telegram Settings'; d='Welcome message, auto-reply, routing va media policy qoidalari.'; img='integrations-network.svg'; kpi1='Auto-reply'; v1='Yoqilgan'; kpi2='Media limit'; v2='20 MB'; kpi3='Default queue'; v3='Telegram L1'; rel=@('02-telegram-setup.html','04-telegram-test.html','19-integration-logs.html')},
  @{f='04-telegram-test.html'; t='Telegram Test'; d='Test chat, webhook verifikatsiya va event tracing paneli.'; img='integrations-network.svg'; kpi1='Test holati'; v1='Pass'; kpi2='Round-trip'; v2='1.2 s'; kpi3='Fail ratio'; v3='0.4%'; rel=@('02-telegram-setup.html','03-telegram-settings.html','19-integration-logs.html')},
  @{f='05-whatsapp-setup.html'; t='WhatsApp Setup'; d='BSP ulash, raqam verifikatsiyasi, callback URL va quality check.'; img='integrations-network.svg'; kpi1='BSP'; v1='360dialog'; kpi2='WABA status'; v2='Verified'; kpi3='Display name'; v3='Approved'; rel=@('06-whatsapp-templates.html','07-whatsapp-settings.html','01-channels-overview.html')},
  @{f='06-whatsapp-templates.html'; t='WhatsApp Templates'; d='Template kutubxonasi, Meta approval va version nazorati.'; img='integrations-network.svg'; kpi1='Approved'; v1='27 ta'; kpi2='Pending'; v2='3 ta'; kpi3='Rejected'; v3='1 ta'; rel=@('05-whatsapp-setup.html','07-whatsapp-settings.html','19-integration-logs.html')},
  @{f='07-whatsapp-settings.html'; t='WhatsApp Settings'; d='Session policy, media qoidalari va routing strategiyasi.'; img='integrations-network.svg'; kpi1='24h session'; v1='Yoqilgan'; kpi2='Max media'; v2='15 MB'; kpi3='Routing'; v3='Skill-based'; rel=@('05-whatsapp-setup.html','06-whatsapp-templates.html','20-integration-status.html')},
  @{f='08-instagram-setup.html'; t='Instagram Setup'; d='Instagram DM uchun Facebook App connect va permission mapping.'; img='integrations-network.svg'; kpi1='Connected pages'; v1='2 ta'; kpi2='Scope'; v2='messages_manage'; kpi3='Token expiry'; v3='42 kun'; rel=@('09-facebook-setup.html','01-channels-overview.html','20-integration-status.html')},
  @{f='09-facebook-setup.html'; t='Facebook Setup'; d='Page connect, greeting text, ice breakers va fallback qoidalari.'; img='integrations-network.svg'; kpi1='Connected page'; v1='Qulay Chat'; kpi2='Greeting'; v2='Enabled'; kpi3='Webhook subs'; v3='6 ta'; rel=@('08-instagram-setup.html','10-viber-setup.html','19-integration-logs.html')},
  @{f='10-viber-setup.html'; t='Viber Setup'; d='Bot token, keyboard actionlar va callback monitoring sozlamalari.'; img='integrations-network.svg'; kpi1='Bot ID'; v1='viber-qulay-01'; kpi2='Callbacks'; v2='Stable'; kpi3='Retry'; v3='3x'; rel=@('09-facebook-setup.html','11-email-setup.html','20-integration-status.html')},
  @{f='11-email-setup.html'; t='Email Setup'; d='IMAP/SMTP credentiallar, mailbox verification va inbound routing.'; img='integrations-network.svg'; kpi1='Inbox count'; v1='4 ta'; kpi2='SMTP'; v2='TLS'; kpi3='Catch-all'; v3='Off'; rel=@('12-email-settings.html','13-sms-setup.html','01-channels-overview.html')},
  @{f='12-email-settings.html'; t='Email Settings'; d='Signature, threading rules, auto-reply va SLA teglar.'; img='integrations-network.svg'; kpi1='Threading'; v1='By Message-ID'; kpi2='Auto-reply'; v2='Working hours'; kpi3='Signature'; v3='Team default'; rel=@('11-email-setup.html','19-integration-logs.html','20-integration-status.html')},
  @{f='13-sms-setup.html'; t='SMS Setup'; d='Eskiz/PlayMobile API ulash, sender nomi va callback endpoint.'; img='integrations-network.svg'; kpi1='Gateway'; v1='Eskiz'; kpi2='Sender ID'; v2='QULAY'; kpi3='DLR'; v3='Enabled'; rel=@('14-sms-settings.html','11-email-setup.html','20-integration-status.html')},
  @{f='14-sms-settings.html'; t='SMS Settings'; d='Template, belgilar limiti va delivery report monitoring paneli.'; img='integrations-network.svg'; kpi1='Unicode mode'; v1='Auto'; kpi2='Max chars'; v2='480'; kpi3='Retry'; v3='2x'; rel=@('13-sms-setup.html','19-integration-logs.html','01-channels-overview.html')},
  @{f='15-bitrix24-setup.html'; t='Bitrix24 Setup'; d='OAuth connect, field mapping va lead sync yo‘nalishlari.'; img='integrations-network.svg'; kpi1='Portal'; v1='qulay.bitrix24.ru'; kpi2='Sync'; v2='Every 2 min'; kpi3='Mapped fields'; v3='19 ta'; rel=@('16-amocrm-setup.html','17-zapier-setup.html','19-integration-logs.html')},
  @{f='16-amocrm-setup.html'; t='AmoCRM Setup'; d='Pipeline mapping, deal stage sync va owner assignment.'; img='integrations-network.svg'; kpi1='Pipelines'; v1='3 ta'; kpi2='Stages mapped'; v2='15'; kpi3='Sync errors'; v3='0'; rel=@('15-bitrix24-setup.html','17-zapier-setup.html','20-integration-status.html')},
  @{f='17-zapier-setup.html'; t='Zapier Setup'; d='Trigger/action konfiguratsiyasi, API key va tayyor zap shablonlar.'; img='integrations-network.svg'; kpi1='Active zaps'; v1='11 ta'; kpi2='Task success'; v2='98.7%'; kpi3='Last run'; v3='2 min oldin'; rel=@('18-custom-webhook.html','19-integration-logs.html','20-integration-status.html')},
  @{f='18-custom-webhook.html'; t='Custom Webhook'; d='Custom endpoint, header policy, payload format va retry mexanizmi.'; img='integrations-network.svg'; kpi1='Endpoints'; v1='5 ta'; kpi2='Auth'; v2='HMAC SHA256'; kpi3='Retry policy'; v3='Exp backoff'; rel=@('17-zapier-setup.html','19-integration-logs.html','20-integration-status.html')},
  @{f='19-integration-logs.html'; t='Integration Logs'; d='Barcha kanallar bo‘yicha event log, xatolar va retry kuzatuvi.'; img='integrations-network.svg'; kpi1='Events/24h'; v1='42,380'; kpi2='Error rate'; v2='0.9%'; kpi3='Avg retry'; v3='1.3x'; rel=@('20-integration-status.html','01-channels-overview.html','18-custom-webhook.html')},
  @{f='20-integration-status.html'; t='Integration Status'; d='Health dashboard: kanal holati, uptime va so‘nggi sync statistikasi.'; img='integrations-network.svg'; kpi1='Healthy'; v1='12/14'; kpi2='Degraded'; v2='2 ta'; kpi3='Last incident'; v3='Bugun 11:42'; rel=@('01-channels-overview.html','19-integration-logs.html','02-telegram-setup.html')}
)

$nav = @(
 '01-channels-overview.html|Channels Overview',
 '02-telegram-setup.html|Telegram Setup',
 '03-telegram-settings.html|Telegram Settings',
 '04-telegram-test.html|Telegram Test',
 '05-whatsapp-setup.html|WhatsApp Setup',
 '06-whatsapp-templates.html|WhatsApp Templates',
 '07-whatsapp-settings.html|WhatsApp Settings',
 '08-instagram-setup.html|Instagram Setup',
 '09-facebook-setup.html|Facebook Setup',
 '10-viber-setup.html|Viber Setup',
 '11-email-setup.html|Email Setup',
 '12-email-settings.html|Email Settings',
 '13-sms-setup.html|SMS Setup',
 '14-sms-settings.html|SMS Settings',
 '15-bitrix24-setup.html|Bitrix24 Setup',
 '16-amocrm-setup.html|AmoCRM Setup',
 '17-zapier-setup.html|Zapier Setup',
 '18-custom-webhook.html|Custom Webhook',
 '19-integration-logs.html|Integration Logs',
 '20-integration-status.html|Integration Status'
)

function Get-NavHtml($current){
  $items = foreach($n in $nav){
    $parts = $n -split '\|'
    $cls = if($parts[0] -eq $current){'subnav-tab active'} else {'subnav-tab'}
    ('<a class="{0}" href="./{1}">{2}</a>' -f $cls, $parts[0], $parts[1])
  }
  return ($items -join "`n")
}

function GetRelatedHtml($rel){
  $items = foreach($r in $rel){
    $title = ($nav | Where-Object {$_ -like "$r|*"} | ForEach-Object { ($_ -split '\|')[1] })
    ('<a class="btn btn-secondary" href="./{0}"><i data-lucide="arrow-right"></i> {1}</a>' -f $r, $title)
  }
  $items -join "`n"
}

for($i=0; $i -lt $pages.Count; $i++){
  $p = $pages[$i]
  $prev = if($i -gt 0){$pages[$i-1].f}else{$pages[$pages.Count-1].f}
  $next = if($i -lt $pages.Count-1){$pages[$i+1].f}else{$pages[0].f}
  $prevTitle = $pages[([Math]::Max(0,$i-1))].t
  if($i -eq 0){$prevTitle = $pages[$pages.Count-1].t}
  $nextTitle = $pages[([Math]::Min($pages.Count-1,$i+1))].t
  if($i -eq $pages.Count-1){$nextTitle = $pages[0].t}

  $content = @"
<!doctype html>
<html lang="uz">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>QULAY CHAT - $($p.t)</title>
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
$(Get-NavHtml $p.f)
</div></div>

<div data-roles="agent" class="card" style="border-color:#FCD34D;background:#FFFBEB;margin-top:12px">
  <div class="card-body">
    <h3 style="margin:0 0 6px">Admin only</h3>
    <p class="text-muted" style="margin:0 0 12px">Bu bo‘lim faqat adminlar uchun.</p>
    <a class="btn btn-secondary" href="../04-dashboard/02-dashboard-agent.html">Agent dashboardga qaytish</a>
  </div>
</div>

<div data-roles="admin">
<nav class="breadcrumbs" aria-label="Breadcrumb">
  <a href="../04-dashboard/01-dashboard.html">Dashboard</a>
  <i data-lucide="chevron-right"></i>
  <a href="./01-channels-overview.html">Integrations</a>
  <i data-lucide="chevron-right"></i>
  <span class="current">$($p.t)</span>
</nav>

<div class="page-header">
  <div>
    <h1>$($p.t)</h1>
    <p class="text-muted">$($p.d)</p>
  </div>
  <div class="page-header-actions">
    <a class="btn btn-secondary" href="./$prev"><i data-lucide="arrow-left"></i> $prevTitle</a>
    <a class="btn btn-primary" href="./$next">$nextTitle <i data-lucide="arrow-right"></i></a>
  </div>
</div>

<section class="grid cols-3">
  <article class="card"><div class="card-body"><p class="text-muted" style="margin:0 0 6px">$($p.kpi1)</p><h3 style="margin:0">$($p.v1)</h3></div></article>
  <article class="card"><div class="card-body"><p class="text-muted" style="margin:0 0 6px">$($p.kpi2)</p><h3 style="margin:0">$($p.v2)</h3></div></article>
  <article class="card"><div class="card-body"><p class="text-muted" style="margin:0 0 6px">$($p.kpi3)</p><h3 style="margin:0">$($p.v3)</h3></div></article>
</section>

<section class="split-grid" style="margin-top:14px">
  <article class="card">
    <div class="card-header"><div><h3>Diagramma va arxitektura</h3></div></div>
    <div class="card-body">
      <img src="../assets/illustrations/$($p.img)" alt="$($p.t) diagrammasi" style="width:100%;height:auto;border:1px solid #E2E8F0;border-radius:12px;background:#fff" />
      <p class="text-muted" style="margin:10px 0 0">Ushbu sxema event oqimi: <strong>Receive → Normalize → Route → Observe</strong> bosqichlarini ko‘rsatadi. Har bosqich log va alert bilan kuzatiladi.</p>
    </div>
  </article>
  <article class="card">
    <div class="card-header"><div><h3>Bog‘liq sahifalar</h3></div></div>
    <div class="card-body">
      <p class="text-muted" style="margin:0 0 10px">$($p.t) uchun keyingi amallar:</p>
      <div class="flex gap-2 wrap">
        $(GetRelatedHtml $p.rel)
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
        <div class="list-item"><div class="item-main"><div class="item-title">Fallback kanal yo‘nalishi tekshirilsin</div><div class="item-sub">Reliability</div></div><span class="badge badge-warning">Tekshirish</span></div>
        <div class="list-item"><div class="item-main"><div class="item-title">Alert threshold 2% xatoga sozlansin</div><div class="item-sub">Monitoring</div></div><span class="badge badge-primary">Yangi</span></div>
      </div>
    </div>
  </article>
</section>

<section class="card" style="margin-top:14px">
  <div class="card-header"><div><h3>So‘nggi eventlar</h3></div></div>
  <div class="card-body">
    <div class="table-wrap">
      <table class="table">
        <thead class="table-header"><tr><th>Vaqt</th><th>Event</th><th>Kanal</th><th>Holat</th><th>Havola</th></tr></thead>
        <tbody>
          <tr class="table-row"><td>14:41</td><td>Webhook verify</td><td>$($p.t)</td><td><span class="badge badge-success">Muvaffaqiyatli</span></td><td><a class="btn btn-ghost" href="./19-integration-logs.html">Log</a></td></tr>
          <tr class="table-row"><td>14:35</td><td>Token refresh</td><td>$($p.t)</td><td><span class="badge badge-primary">Yakunlandi</span></td><td><a class="btn btn-ghost" href="./20-integration-status.html">Status</a></td></tr>
          <tr class="table-row"><td>14:20</td><td>Latency spike</td><td>$($p.t)</td><td><span class="badge badge-warning">Kuzatuvda</span></td><td><a class="btn btn-ghost" href="./01-channels-overview.html">Overview</a></td></tr>
        </tbody>
      </table>
    </div>
  </div>
</section>

<div class="sticky-save-bar">
  <a class="btn btn-secondary" href="./$prev">Oldingi sahifa</a>
  <a class="btn btn-primary" href="./$next">Keyingi sahifa</a>
</div>
</div>
</main>
<script>window.addEventListener("DOMContentLoaded", function(){ if (window.lucide && window.lucide.createIcons) { window.lucide.createIcons(); } });</script>
</body>
</html>
"@

  Set-Content -LiteralPath (Join-Path $baseDir $p.f) -Value $content -Encoding UTF8
}

Write-Host "26-integrations complete"
