from pathlib import Path

base = Path(r"C:\Users\User\Desktop\onlinechat-text\html\08-analytics")

pages = [
("14-agent-goals.html","Agent Goals","Agent KPI maqsadlari va targetga nisbatan progress kuzatuvi."),
("15-csat-trends.html","CSAT Trends","CSAT ko‘rsatkichining kunlik/haftalik trend tahlili."),
("16-nps-survey.html","NPS Survey","NPS so‘rovnomasi natijalari va segmentlar bo‘yicha ko‘rinish."),
("17-feedback-wall.html","Feedback Wall","Mijoz fikr-mulohazalarini markaziy devorda filtrlab ko‘rish."),
]

subnav = [
("01-overview.html","Overview"),("02-response-times.html","Response Times"),("03-operators.html","Operators"),("04-operator-detail.html","Operator Detail"),("05-sla.html","SLA"),("06-channels.html","Channels"),("07-segments.html","Segments"),("08-tags.html","Tags"),("09-custom-reports.html","Custom Reports"),("10-export.html","Export"),("11-my-stats.html","My Stats"),("12-realtime-monitor.html","Realtime Monitor"),("13-scheduled-reports.html","Scheduled Reports"),("14-agent-goals.html","Agent Goals"),("15-csat-trends.html","CSAT Trends"),("16-nps-survey.html","NPS Survey"),("17-feedback-wall.html","Feedback Wall")
]

def nav_html(active):
    return ''.join([f'<a class="subnav-tab{" active" if f==active else ""}" href="./{f}">{t}</a>' for f,t in subnav])

def prev_next(file):
    idx=[f for f,_ in subnav].index(file)
    prev=subnav[idx-1][0] if idx>0 else subnav[-1][0]
    nxt=subnav[idx+1][0] if idx<len(subnav)-1 else subnav[0][0]
    return prev,nxt

def title(file):
    for f,t in subnav:
        if f==file:return t
    return file

for f,t,d in pages:
    prev,nxt=prev_next(f)
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
  <body data-active-nav="analytics" class="dashboard-shell-page">
    <main class="app-content">
      <div class="subnav-scroll"><div class="subnav-tabs">{nav_html(f)}</div></div>
      <div data-roles="admin">
        <nav class="breadcrumbs" aria-label="Breadcrumb"><a href="../04-dashboard/01-dashboard.html">Dashboard</a><i data-lucide="chevron-right"></i><a href="./01-overview.html">Analytics</a><i data-lucide="chevron-right"></i><span class="current">{t}</span></nav>
        <div class="page-header"><div><h1>{t}</h1><p class="text-muted">{d}</p></div><div class="page-header-actions"><a class="btn btn-secondary" href="./{prev}"><i data-lucide="arrow-left"></i> {title(prev)}</a><a class="btn btn-primary" href="./{nxt}">{title(nxt)} <i data-lucide="arrow-right"></i></a></div></div>
        <section class="grid cols-4" style="margin-bottom:14px"><article class="card"><div class="card-body"><p class="text-muted" style="margin:0 0 6px">Metric A</p><h3 style="margin:0">94.8%</h3></div></article><article class="card"><div class="card-body"><p class="text-muted" style="margin:0 0 6px">Metric B</p><h3 style="margin:0">4.7</h3></div></article><article class="card"><div class="card-body"><p class="text-muted" style="margin:0 0 6px">Metric C</p><h3 style="margin:0">+8%</h3></div></article><article class="card"><div class="card-body"><p class="text-muted" style="margin:0 0 6px">Metric D</p><h3 style="margin:0">127</h3></div></article></section>
        <section class="split-grid" style="margin-bottom:14px"><article class="card"><div class="card-header"><h3>Asosiy tahlil</h3></div><div class="card-body"><div class="table-wrap"><table class="table"><thead class="table-header"><tr><th>Ko‘rsatkich</th><th>Bugun</th><th>Kecha</th><th>Trend</th></tr></thead><tbody><tr class="table-row"><td>Response quality</td><td>92%</td><td>89%</td><td><span class="badge badge-success">Up</span></td></tr><tr class="table-row"><td>Resolution speed</td><td>84%</td><td>81%</td><td><span class="badge badge-primary">Up</span></td></tr><tr class="table-row"><td>Escalation share</td><td>7%</td><td>9%</td><td><span class="badge badge-success">Down</span></td></tr></tbody></table></div></div></article><article class="card"><div class="card-header"><h3>Filtrlar</h3></div><div class="card-body"><label>Period<select class="input"><option>Today</option><option>7 days</option><option>30 days</option></select></label><label style="margin-top:10px;display:block">Segment<select class="input"><option>All</option><option>VIP</option><option>New users</option></select></label><div class="flex gap-2 wrap" style="margin-top:12px"><button class="btn btn-secondary" type="button"><i data-lucide="funnel"></i> Qo‘llash</button><button class="btn btn-primary" type="button"><i data-lucide="download"></i> Export</button></div></div></article></section>
        <div class="sticky-save-bar"><a class="btn btn-secondary" href="./{prev}">Oldingi sahifa</a><a class="btn btn-primary" href="./{nxt}">Keyingi sahifa</a></div>
      </div>
    </main>
    <script>window.addEventListener("DOMContentLoaded",function(){{if(window.lucide&&window.lucide.createIcons)window.lucide.createIcons();}});</script>
  </body>
</html>'''
    (base / f).write_text(html, encoding='utf-8')

print('analytics 14-17 aligned')
