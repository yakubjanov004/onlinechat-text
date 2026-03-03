$files = Get-ChildItem -LiteralPath 'C:\Users\User\Desktop\onlinechat-text\html\26-integrations' -Filter '*.html'
foreach($f in $files){
  $c = Get-Content -LiteralPath $f.FullName -Raw
  $c = $c.Replace([char]0x2018, "'")
  $c = $c.Replace([char]0x2019, "'")
  $c = $c.Replace([string][char]0x2192, '->')
  Set-Content -LiteralPath $f.FullName -Value $c -Encoding UTF8
}
Write-Host 'normalized'
