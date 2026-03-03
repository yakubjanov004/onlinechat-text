$files = Get-ChildItem -LiteralPath 'C:\Users\User\Desktop\onlinechat-text\html\26-integrations' -Filter '*.html'
foreach($f in $files){
  $c = Get-Content -LiteralPath $f.FullName -Raw
  $c = $c.Replace('вЂ', "'")
  $c = $c.Replace('вЂ', "'")
  $c = $c.Replace('в†’', '->')
  Set-Content -LiteralPath $f.FullName -Value $c -Encoding UTF8
}
Write-Host 'fixed mojibake'
