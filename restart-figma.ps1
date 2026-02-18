Write-Output 'Stopping Figma...'
Get-Process -Name Figma -ErrorAction SilentlyContinue | Stop-Process -Force -ErrorAction SilentlyContinue
Start-Sleep -s 1
$exe='C:\Users\user\AppData\Local\Figma\app-126.1.2\Figma.exe'
if (-not (Test-Path $exe)) {
  Write-Output 'EXE_NOT_FOUND'
  Write-Output $exe
  exit 0
}
# Port may be provided via env var FIGMA_CDP_PORT or as first script arg
$port = $env:FIGMA_CDP_PORT
if (-not $port -and $args.Count -gt 0) { $port = $args[0] }
if (-not $port) { $port = '9229' }
Write-Output "Starting Figma: $exe with debug port $port"
Start-Process -FilePath $exe -ArgumentList "--remote-debugging-port=$port"
Start-Sleep -s 6
Try {
  $c=(Invoke-WebRequest ("http://localhost:$port/json/version") -UseBasicParsing -TimeoutSec 8).Content
  Write-Output 'CDP_OK'
  Write-Output $c
} Catch {
  Write-Output 'CDP_FAIL'
  Write-Output $_.Exception.Message
}
Write-Output 'Running bridge script now...'
node .\figma-bridge.js --file .\figma-designs\02-auth\05-welcome-first-login.js
