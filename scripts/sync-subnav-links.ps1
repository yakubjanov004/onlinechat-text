$ErrorActionPreference = "Stop"

$repoRoot = "C:\Users\User\Desktop\onlinechat-text"
$htmlRoot = Join-Path $repoRoot "html"

$targetFolders = @(
  "03-onboarding",
  "04-dashboard",
  "05-inbox",
  "06-automation",
  "08-analytics",
  "09-settings",
  "10-billing",
  "15-knowledge-base",
  "16-addons",
  "17-developer",
  "26-integrations",
  "27-payments",
  "28-mobile-agent"
)

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
    $out += ($p.Substring(0, 1).ToUpper() + $p.Substring(1))
  }
  if ($out.Count -eq 0) { return "Page" }
  return ($out -join " ")
}

function SortKey {
  param([string]$FileName)
  if ($FileName -match '^([0-9]{2})([a-z]?)-(.+)\.html$') {
    $num = [int]$Matches[1]
    $suffix = $Matches[2]
    $rest = $Matches[3]
    if ([string]::IsNullOrWhiteSpace($suffix)) { $suffix = "a" }
    return ("{0:D2}-{1}-{2}" -f $num, $suffix, $rest)
  }
  return "99-z-$FileName"
}

function ExtractLabel {
  param([string]$FilePath, [string]$FileName)
  $raw = Get-Content -Path $FilePath -Raw -Encoding UTF8
  $m = [regex]::Match($raw, '<title>\s*QULAY CHAT\s*-\s*(.*?)\s*</title>', [System.Text.RegularExpressions.RegexOptions]::IgnoreCase)
  if ($m.Success) {
    return [System.Net.WebUtility]::HtmlDecode($m.Groups[1].Value.Trim())
  }
  return (ToTitle $FileName)
}

$updated = @()
$skipped = @()

foreach ($folder in $targetFolders) {
  $folderPath = Join-Path $htmlRoot $folder
  if (-not (Test-Path $folderPath)) {
    $skipped += "$folder (folder not found)"
    continue
  }

  $files = Get-ChildItem -Path $folderPath -File -Filter *.html |
    Sort-Object @{ Expression = { SortKey $_.Name } }, Name
  if (-not $files -or $files.Count -eq 0) {
    $skipped += "$folder (no html files)"
    continue
  }

  $labels = @{}
  foreach ($f in $files) {
    $labels[$f.Name] = ExtractLabel -FilePath $f.FullName -FileName $f.Name
  }

  foreach ($file in $files) {
    $content = Get-Content -Path $file.FullName -Raw -Encoding UTF8
    $pattern = '(?s)<div class="subnav-scroll[^"]*"[^>]*>\s*<div class="([^"]*\bsubnav-tabs\b[^"]*)"[^>]*>.*?</div>\s*</div>'
    $m = [regex]::Match($content, $pattern)
    if (-not $m.Success) {
      $skipped += "$($file.FullName) (subnav not found)"
      continue
    }

    $tabClass = $m.Groups[1].Value
    $links = @()
    foreach ($target in $files) {
      $cls = "subnav-tab"
      if ($target.Name -eq $file.Name) { $cls += " active" }
      $href = "./$($target.Name)"
      $label = [System.Net.WebUtility]::HtmlEncode($labels[$target.Name])
      $links += "<a class=`"$cls`" href=`"$href`">$label</a>"
    }
    $linkHtml = ($links -join "")
    $replacement = "<div class=`"subnav-scroll`">`r`n<div class=`"$tabClass`">`r`n$linkHtml`r`n</div>`r`n</div>"

    $newContent =
      $content.Substring(0, $m.Index) +
      $replacement +
      $content.Substring($m.Index + $m.Length)

    if ($newContent -ne $content) {
      Set-Content -Path $file.FullName -Value $newContent -Encoding UTF8
      $updated += $file.FullName
    }
  }
}

Write-Output "Updated files: $($updated.Count)"
$updated | Sort-Object | ForEach-Object { $_ }
if ($skipped.Count -gt 0) {
  Write-Output "Skipped entries: $($skipped.Count)"
  $skipped | Sort-Object | ForEach-Object { $_ }
}
