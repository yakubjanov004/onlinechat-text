$ErrorActionPreference = "Stop"

$repoRoot = "C:\Users\User\Desktop\onlinechat-text"
$htmlRoot = Join-Path $repoRoot "html"
$mapPath = Join-Path $repoRoot "QULAY-CHAT-FILE-MAP.md"

function HtmlEncode {
  param([string]$Text)
  if ($null -eq $Text) { return "" }
  $Text = $Text -replace '&', '&amp;'
  $Text = $Text -replace '<', '&lt;'
  $Text = $Text -replace '>', '&gt;'
  $Text = $Text -replace '"', '&quot;'
  $Text = $Text -replace "'", '&#39;'
  return $Text
}

function ToTitle {
  param([string]$FileName)
  $stem = [System.IO.Path]::GetFileNameWithoutExtension($FileName)
  $stem = $stem -replace '^[0-9]{2}[a-z]?-', ''
  $parts = $stem.Split('-')
  $map = @{
    "kb" = "KB"
    "ai" = "AI"
    "api" = "API"
    "nps" = "NPS"
    "csat" = "CSAT"
    "sla" = "SLA"
    "crm" = "CRM"
    "sms" = "SMS"
    "imap" = "IMAP"
    "smtp" = "SMTP"
    "ip" = "IP"
    "seo" = "SEO"
    "dns" = "DNS"
    "oauth" = "OAuth"
    "pwa" = "PWA"
    "uzs" = "UZS"
    "sdk" = "SDK"
    "whatsapp" = "WhatsApp"
    "bitrix24" = "Bitrix24"
    "amocrm" = "AmoCRM"
  }
  $out = @()
  foreach ($p in $parts) {
    if ([string]::IsNullOrWhiteSpace($p)) { continue }
    if ($map.ContainsKey($p)) { $out += $map[$p]; continue }
    if ($p.Length -eq 1) { $out += $p.ToUpper(); continue }
    $out += ($p.Substring(0,1).ToUpper() + $p.Substring(1))
  }
  if ($out.Count -eq 0) { return "Page" }
  return ($out -join ' ')
}

function FolderLabel {
  param([string]$Folder)
  $map = @{
    "03-onboarding" = "Onboarding"
    "04-dashboard" = "Dashboard"
    "05-inbox" = "Inbox"
    "06-automation" = "Automation"
    "08-analytics" = "Analytics"
    "09-settings" = "Settings"
    "10-billing" = "Billing"
    "15-knowledge-base" = "Knowledge Base"
    "16-addons" = "Addons"
    "17-developer" = "Developer"
    "26-integrations" = "Integrations"
    "27-payments" = "Payments"
    "28-mobile-agent" = "Mobile Agent"
  }
  if ($map.ContainsKey($Folder)) { return $map[$Folder] }
  return $Folder
}

function ActiveNav {
  param([string]$Folder)
  $map = @{
    "04-dashboard" = "dashboard"
    "05-inbox" = "inbox"
    "06-automation" = "automation"
    "07-team" = "team"
    "08-analytics" = "analytics"
    "09-settings" = "settings"
    "10-billing" = "billing"
    "12-contacts" = "contacts"
    "13-visitors" = "visitors"
    "14-team-chat" = "team-chat"
    "15-knowledge-base" = "knowledge-base"
    "16-addons" = "addons"
    "17-developer" = "developer"
    "20-notifications" = "notifications"
    "21-help-support" = "help-support"
    "22-email-templates" = "email-templates"
    "23-multi-language" = "multi-language"
    "24-gdpr-compliance" = "gdpr"
    "26-integrations" = "addons"
    "27-payments" = "billing"
    "28-mobile-agent" = "dashboard"
  }
  if ($map.ContainsKey($Folder)) { return $map[$Folder] }
  return "dashboard"
}

function RoleType {
  param([string]$Folder, [string]$FileName)
  switch ($Folder) {
    "26-integrations" { return "admin" }
    "27-payments" { return "admin" }
    "10-billing" { return "admin" }
    "06-automation" { return "admin" }
    "17-developer" { return "admin" }
    "28-mobile-agent" { return "agent" }
    "09-settings" {
      if ($FileName -in @("17-agent-availability.html","18-agent-canned-personal.html")) { return "agent" }
      return "admin"
    }
    "08-analytics" {
      if ($FileName -eq "14-agent-goals.html") { return "both" }
      return "admin"
    }
    "15-knowledge-base" {
      if ($FileName -eq "14-kb-internal.html") { return "both" }
      return "admin"
    }
    "04-dashboard" {
      if ($FileName -eq "05-manager-dashboard.html") { return "admin" }
      return "both"
    }
    default { return "both" }
  }
}

function BuildSubnav {
  param(
    [string]$CurrentFile,
    [string[]]$AllFiles
  )
  $links = @()
  foreach ($f in $AllFiles) {
    $className = "subnav-tab"
    if ($f -eq $CurrentFile) { $className = "subnav-tab active" }
    $label = HtmlEncode (ToTitle $f)
    $href = "./$f"
    $links += "<a class=`"$className`" href=`"$href`">$label</a>"
  }
  return ($links -join "")
}

function BuildAdminWarning {
  return @"
<div data-roles="agent" class="card" style="border-color:#FCD34D;background:#FFFBEB;margin-top:12px">
  <div class="card-body">
    <h3 style="margin:0 0 6px">Admin only</h3>
    <p class="text-muted" style="margin:0 0 12px">Bu bo'lim faqat adminlar uchun.</p>
    <a class="btn btn-secondary" href="../04-dashboard/02-dashboard-agent.html">Agent dashboardga qaytish</a>
  </div>
</div>
"@
}

function BuildGenericBody {
  param(
    [string]$Folder,
    [string]$FileName,
    [string]$Title,
    [string]$Description,
    [string]$Role
  )
  $folderLabel = FolderLabel $Folder
  $titleSafe = HtmlEncode $Title
  $descSafe = HtmlEncode $Description
  $moduleSafe = HtmlEncode $folderLabel
  $adminWarning = ""
  $openRole = ""
  $closeRole = ""
  if ($Role -eq "admin") {
    $adminWarning = BuildAdminWarning
    $openRole = "<div data-roles=`"admin`">"
    $closeRole = "</div>"
  } elseif ($Role -eq "agent") {
    $openRole = "<div data-roles=`"agent`">"
    $closeRole = "</div>"
  }

  return @"
$adminWarning
$openRole
<nav class="breadcrumbs" aria-label="Breadcrumb">
  <a href="../04-dashboard/01-dashboard.html">Dashboard</a>
  <i data-lucide="chevron-right"></i>
  <a href="./$FileName">$moduleSafe</a>
  <i data-lucide="chevron-right"></i>
  <span class="current">$titleSafe</span>
</nav>

<div class="page-header">
  <div>
    <h1>$titleSafe</h1>
    <p class="text-muted">$descSafe</p>
  </div>
  <div class="page-header-actions">
    <button type="button" class="btn btn-secondary" data-action="log"><i data-lucide="refresh-cw"></i> Yangilash</button>
    <button type="button" class="btn btn-primary" data-action="save"><i data-lucide="check"></i> Saqlash</button>
  </div>
</div>

<section class="grid cols-3">
  <article class="card">
    <div class="card-body">
      <p class="text-muted" style="margin:0 0 6px">Bugungi so'rovlar</p>
      <h3 style="margin:0 0 6px">148 ta</h3>
      <p class="text-muted" style="margin:0">Toshkent va Samarqand bo'yicha</p>
    </div>
  </article>
  <article class="card">
    <div class="card-body">
      <p class="text-muted" style="margin:0 0 6px">Faol status</p>
      <h3 style="margin:0 0 6px">98.6%</h3>
      <p class="text-muted" style="margin:0">Oxirgi 24 soat uptime</p>
    </div>
  </article>
  <article class="card">
    <div class="card-body">
      <p class="text-muted" style="margin:0 0 6px">Oylik xarajat</p>
      <h3 style="margin:0 0 6px">1 250 000 so'm</h3>
      <p class="text-muted" style="margin:0">Reja ichida: 82%</p>
    </div>
  </article>
</section>

<section class="split-grid" style="margin-top:14px">
  <article class="card">
    <div class="card-header"><div><h3>Asosiy sozlamalar</h3></div></div>
    <div class="card-body">
      <div class="form-grid">
        <label class="form-field">
          <span class="form-label">Mas'ul agent</span>
          <input class="input" value="Sardor Karimov" />
        </label>
        <label class="form-field">
          <span class="form-label">Shahar</span>
          <select class="select">
            <option selected>Toshkent</option>
            <option>Samarqand</option>
            <option>Farg'ona</option>
          </select>
        </label>
        <label class="form-field">
          <span class="form-label">Kanal</span>
          <select class="select">
            <option selected>Telegram</option>
            <option>WhatsApp</option>
            <option>Email</option>
          </select>
        </label>
        <label class="form-field">
          <span class="form-label">Status</span>
          <select class="select">
            <option selected>Active</option>
            <option>Draft</option>
            <option>Paused</option>
          </select>
        </label>
      </div>
      <label class="form-field" style="margin-top:12px">
        <span class="form-label">Izoh</span>
        <textarea class="textarea" rows="4">$descSafe</textarea>
      </label>
      <div class="divider" style="margin:12px 0"></div>
      <div class="flex gap-2 wrap">
        <button type="button" class="btn btn-secondary" data-action="log"><i data-lucide="file-text"></i> Log yozish</button>
        <button type="button" class="btn btn-danger" data-action="delete"><i data-lucide="trash-2"></i> O'chirish</button>
      </div>
    </div>
  </article>
  <article class="card">
    <div class="card-header"><div><h3>So'nggi faoliyat</h3></div></div>
    <div class="card-body">
      <div class="list-stack">
        <div class="list-item">
          <div class="item-main">
            <div class="item-title">Webhook tekshirildi</div>
            <div class="item-sub">03-mart, 11:20 | +998 90 123 45 67</div>
          </div>
          <span class="badge badge-success">OK</span>
        </div>
        <div class="list-item">
          <div class="item-main">
            <div class="item-title">SLA signal</div>
            <div class="item-sub">03-mart, 10:55 | 1 ta ogohlantirish</div>
          </div>
          <span class="badge badge-warning">Risk</span>
        </div>
        <div class="list-item">
          <div class="item-main">
            <div class="item-title">Qo'lda yangilash</div>
            <div class="item-sub">03-mart, 09:40 | Manager panelidan</div>
          </div>
          <span class="badge badge-primary">Manual</span>
        </div>
      </div>
    </div>
  </article>
</section>

<section class="card" style="margin-top:14px">
  <div class="card-header"><div><h3>Operatsiyalar jadvali</h3></div></div>
  <div class="card-body">
    <div class="table-wrap">
      <table class="table">
        <thead class="table-header">
          <tr>
            <th>Obyekt</th>
            <th>Mas'ul</th>
            <th>So'nggi yangilanish</th>
            <th>Holat</th>
            <th>Harakat</th>
          </tr>
        </thead>
        <tbody>
          <tr class="table-row">
            <td>$titleSafe | Segment A</td>
            <td>Sardor</td>
            <td>03-mart 12:10</td>
            <td><span class="badge badge-success">Active</span></td>
            <td><button class="btn btn-ghost" type="button" data-action="log"><i data-lucide="eye"></i> Ko'rish</button></td>
          </tr>
          <tr class="table-row">
            <td>$titleSafe | Segment B</td>
            <td>Madina</td>
            <td>03-mart 11:38</td>
            <td><span class="badge badge-warning">Pending</span></td>
            <td><button class="btn btn-ghost" type="button" data-action="save"><i data-lucide="edit"></i> Tahrirlash</button></td>
          </tr>
          <tr class="table-row">
            <td>$titleSafe | Segment C</td>
            <td>Jahongir</td>
            <td>03-mart 10:12</td>
            <td><span class="badge badge-danger">Paused</span></td>
            <td><button class="btn btn-ghost" type="button" data-action="delete"><i data-lucide="trash-2"></i> O'chirish</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</section>

<div class="sticky-save-bar">
  <button type="button" class="btn btn-secondary" data-action="log">Test run</button>
  <button type="button" class="btn btn-primary" data-action="save">O'zgarishlarni saqlash</button>
</div>
$closeRole
"@
}

function BuildMobileBody {
  param(
    [string]$FileName,
    [string]$Title,
    [string]$Description,
    [string]$SubnavHtml
  )
  $titleSafe = HtmlEncode $Title
  $descSafe = HtmlEncode $Description
  return @"
<style>
  .mobile-page { background: #f3f6fb; min-height: 100vh; }
  .mobile-shell { max-width: 420px; margin: 0 auto; padding: 14px 14px 88px; }
  .mobile-bottom-nav { position: fixed; left: 50%; transform: translateX(-50%); bottom: 0; width: min(420px, 100%); background: #fff; border-top: 1px solid #e5e7eb; display: grid; grid-template-columns: repeat(4, 1fr); gap: 4px; padding: 8px; }
  .mobile-bottom-nav .btn { width: 100%; justify-content: center; padding: 8px 6px; font-size: 12px; }
</style>
<div class="mobile-shell">
  <div class="subnav-scroll" style="margin-bottom:10px">
    <div class="subnav-tabs">$SubnavHtml</div>
  </div>
  <nav class="breadcrumbs" aria-label="Breadcrumb">
    <a href="../04-dashboard/02-dashboard-agent.html">Agent</a>
    <i data-lucide="chevron-right"></i>
    <span class="current">$titleSafe</span>
  </nav>
  <div class="page-header">
    <div>
      <h1 style="font-size:20px">$titleSafe</h1>
      <p class="text-muted">$descSafe</p>
    </div>
    <div class="page-header-actions">
      <button type="button" class="btn btn-primary" data-action="save"><i data-lucide="check"></i> Saqlash</button>
    </div>
  </div>

  <section class="card">
    <div class="card-body">
      <div class="list-stack">
        <div class="list-item">
          <div class="item-main">
            <div class="item-title">Yangi chat: +998 90 777 22 11</div>
            <div class="item-sub">Telegram | 1 daqiqa oldin</div>
          </div>
          <span class="badge badge-success">New</span>
        </div>
        <div class="list-item">
          <div class="item-main">
            <div class="item-title">Status yangilandi</div>
            <div class="item-sub">Away -> Online</div>
          </div>
          <span class="badge badge-primary">Sync</span>
        </div>
        <div class="list-item">
          <div class="item-main">
            <div class="item-title">Push bildirishnoma</div>
            <div class="item-sub">Samarqand lead uchun follow-up</div>
          </div>
          <span class="badge badge-warning">Action</span>
        </div>
      </div>
    </div>
  </section>

  <section class="card" style="margin-top:12px">
    <div class="card-body">
      <label class="form-field">
        <span class="form-label">Tezkor izoh</span>
        <textarea class="textarea" rows="4">$descSafe</textarea>
      </label>
      <div class="flex gap-2 wrap" style="margin-top:10px">
        <button type="button" class="btn btn-secondary" data-action="log"><i data-lucide="message-square"></i> Log</button>
        <button type="button" class="btn btn-danger" data-action="delete"><i data-lucide="trash-2"></i> O'chirish</button>
      </div>
    </div>
  </section>
</div>

<nav class="mobile-bottom-nav">
  <a class="btn btn-ghost" href="./01-mobile-inbox.html"><i data-lucide="inbox"></i> Inbox</a>
  <a class="btn btn-ghost" href="./02-mobile-chat.html"><i data-lucide="message-square"></i> Chat</a>
  <a class="btn btn-ghost" href="./03-mobile-notifications.html"><i data-lucide="bell"></i> Alerts</a>
  <a class="btn btn-ghost" href="./05-mobile-settings.html"><i data-lucide="settings"></i> Sozlama</a>
</nav>
"@
}

function BuildPage {
  param(
    [string]$Folder,
    [string]$FileName,
    [string]$Title,
    [string]$Description,
    [string]$Role,
    [string[]]$AllFiles
  )

  $activeNav = ActiveNav $Folder
  $subnavHtml = BuildSubnav -CurrentFile $FileName -AllFiles $AllFiles
  $titleSafe = HtmlEncode $Title
  $bodyClass = "dashboard-shell-page"
  if ($Folder -eq "28-mobile-agent") { $bodyClass = "mobile-page" }

  $bodyContent = ""
  if ($Folder -eq "28-mobile-agent") {
    $bodyContent = BuildMobileBody -FileName $FileName -Title $Title -Description $Description -SubnavHtml $subnavHtml
  } else {
    $bodyContent = @"
<div class="subnav-scroll">
<div class="subnav-tabs">
$subnavHtml
</div>
</div>
$(BuildGenericBody -Folder $Folder -FileName $FileName -Title $Title -Description $Description -Role $Role)
"@
  }

  return @"
<!doctype html>
<html lang="uz">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>QULAY CHAT - $titleSafe</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="../assets/qulay-chat-design-system.css">
<script src="https://unpkg.com/lucide@latest" defer></script>
<script src="../assets/qulay-chat-shell.js" defer></script>
<script src="../assets/qulay-chat-runtime.js" defer></script>
</head>
<body data-active-nav="$activeNav" class="$bodyClass">
<main class="app-content">
$bodyContent
</main>
<script>window.addEventListener("DOMContentLoaded", function(){ if (window.lucide && window.lucide.createIcons) { window.lucide.createIcons(); } });</script>
</body>
</html>
"@
}

$lines = Get-Content -Path $mapPath -Encoding UTF8
$currentFolder = $null
$entries = @()
foreach ($line in $lines) {
  if ($line -match '^###\s+.*`([0-9]{2}-[a-z-]+)/`') {
    $currentFolder = $Matches[1]
    continue
  }
  if ($currentFolder -and $line -match '([0-9]{2}-[a-z0-9-]+\.html)\s+(.+)$') {
    $fileName = $Matches[1]
    $desc = $Matches[2].Trim()
    if ($desc.Length -gt 0 -and $desc[0] -notmatch '[A-Za-z0-9]') {
      $desc = $desc.Substring(1).Trim()
    }
    $entries += [pscustomobject]@{
      Folder = $currentFolder
      File = $fileName
      Desc = $desc
    }
  }
}

if ($entries.Count -ne 88) {
  throw "88 ta fayl topilmadi. Topilgan: $($entries.Count)"
}

$entriesByFolder = @{}
foreach ($e in $entries) {
  if (-not $entriesByFolder.ContainsKey($e.Folder)) {
    $entriesByFolder[$e.Folder] = @()
  }
  $entriesByFolder[$e.Folder] += $e
}

foreach ($folder in $entriesByFolder.Keys) {
  $folderPath = Join-Path $htmlRoot $folder
  if (-not (Test-Path $folderPath)) {
    New-Item -Path $folderPath -ItemType Directory | Out-Null
  }
}

$created = @()
foreach ($folder in ($entriesByFolder.Keys | Sort-Object)) {
  $folderPath = Join-Path $htmlRoot $folder
  $existing = @()
  if (Test-Path $folderPath) {
    $existing = Get-ChildItem -Path $folderPath -File -Filter *.html | Select-Object -ExpandProperty Name
  }
  $newFiles = $entriesByFolder[$folder] | Select-Object -ExpandProperty File
  $allFiles = ($existing + $newFiles | Sort-Object -Unique)
  foreach ($entry in $entriesByFolder[$folder]) {
    $title = ToTitle $entry.File
    $role = RoleType -Folder $folder -FileName $entry.File
    $html = BuildPage -Folder $folder -FileName $entry.File -Title $title -Description $entry.Desc -Role $role -AllFiles $allFiles
    $target = Join-Path $folderPath $entry.File
    Set-Content -Path $target -Value $html -Encoding UTF8
    $created += $target
  }
}

Write-Output "Created files: $($created.Count)"
$created | Sort-Object | ForEach-Object { $_ }
