from pathlib import Path

base = Path(r"C:\Users\User\Desktop\onlinechat-text\html\28-mobile-agent")

pages = [
    {
        "f":"01-mobile-inbox.html","t":"Mobile Inbox","icon":"smartphone","color":"#2563EB",
        "desc":"Agent uchun mobil inbox: chatlar ro'yxati, unread badge va tez filter.",
        "k":[("Unreads","18"),("Avg first reply","38s"),("Online agents","6")],
        "extra":"<section class='card'><div class='card-header'><h3><i data-lucide='list-filter'></i> Tez filtrlash</h3></div><div class='card-body'><div class='grid cols-3'><div class='pill'>VIP</div><div class='pill'>Yangi</div><div class='pill'>Eskalatsiya</div></div></div></section>"
    },
    {
        "f":"02-mobile-chat.html","t":"Mobile Chat","icon":"message-circle","color":"#0EA5E9",
        "desc":"Mobil chat oynasi: xabar yozish, attachment, quick replies va typing status.",
        "k":[("Open chat","42"),("Typing now","7"),("Attachment","On")],
        "extra":"<section class='split-grid'><article class='card'><div class='card-header'><h3><i data-lucide='paperclip'></i> Attachment panel</h3></div><div class='card-body'><div class='pill'>Image</div><div class='pill'>PDF</div><div class='pill'>Voice</div></div></article><article class='card'><div class='card-header'><h3><i data-lucide='reply'></i> Quick replies</h3></div><div class='card-body'><div class='pill'>Salom! Qanday yordam?</div><div class='pill'>Buyurtma raqamini yuboring</div></div></article></section>"
    },
    {
        "f":"03-mobile-notifications.html","t":"Mobile Notifications","icon":"bell-ring","color":"#F59E0B",
        "desc":"Push bildirishnomalar, tovush/vibratsiya va DND vaqt oralig'i sozlamalari.",
        "k":[("Push","Enabled"),("Critical only","Off"),("DND","23:00-07:00")],
        "extra":"<section class='card' style='background:linear-gradient(120deg,#fffbeb,#fff)'><div class='card-header'><h3><i data-lucide='alarm-clock'></i> Quiet hours</h3></div><div class='card-body'><label>Start<input class='input' value='23:00'></label><label style='margin-top:8px;display:block'>End<input class='input' value='07:00'></label></div></section>"
    },
    {
        "f":"04-mobile-status.html","t":"Mobile Status","icon":"radio","color":"#22C55E",
        "desc":"Agent statusini tez almashtirish: online/away/busy/offline + avtomatik reason.",
        "k":[("Current","Online"),("Away reason","Lunch"),("Auto reset","30 min")],
        "extra":"<section class='card'><div class='card-header'><h3><i data-lucide='toggle-left'></i> Status presets</h3></div><div class='card-body'><div class='grid cols-4'><div class='pill'>Online</div><div class='pill'>Away</div><div class='pill'>Busy</div><div class='pill'>Offline</div></div></div></section>"
    },
    {
        "f":"05-mobile-settings.html","t":"Mobile Settings","icon":"settings","color":"#7C3AED",
        "desc":"Mobil ilova sozlamalari: theme, language, cache clear va app diagnostics.",
        "k":[("Theme","System"),("Language","UZ"),("Cache","126 MB")],
        "extra":"<section class='split-grid'><article class='card'><div class='card-header'><h3><i data-lucide='palette'></i> Theme</h3></div><div class='card-body'><select class='input'><option>System</option><option>Light</option><option>Dark</option></select></div></article><article class='card'><div class='card-header'><h3><i data-lucide='trash-2'></i> Storage</h3></div><div class='card-body'><button class='btn btn-secondary'>Cache tozalash</button></div></article></section>"
    },
]

nav=[(p['f'],p['t']) for p in pages]

def title(f):
    for x,y in nav:
        if x==f:return y
    return f

for i,p in enumerate(pages):
    prev=pages[i-1]['f'] if i>0 else pages[-1]['f']
    nxt=pages[i+1]['f'] if i<len(pages)-1 else pages[0]['f']
    nav_html=''.join([f"<a class='subnav-tab{' active' if f==p['f'] else ''}' href='./{f}'>{t}</a>" for f,t in nav])
    kpi=''.join([f"<article class='card'><div class='card-body'><p class='text-muted' style='margin:0 0 6px'>{a}</p><h3 style='margin:0'>{b}</h3></div></article>" for a,b in p['k']])

    html=f"""<!doctype html>
<html lang='uz'><head>
<meta charset='UTF-8'><meta name='viewport' content='width=device-width, initial-scale=1.0'>
<title>QULAY CHAT - {p['t']}</title>
<link rel='preconnect' href='https://fonts.googleapis.com'><link rel='preconnect' href='https://fonts.gstatic.com' crossorigin>
<link href='https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap' rel='stylesheet'>
<link rel='stylesheet' href='../assets/qulay-chat-design-system.css'>
<script src='https://unpkg.com/lucide@latest' defer></script><script src='../assets/qulay-chat-shell.js' defer></script><script src='../assets/qulay-chat-runtime.js' defer></script>
<style>:root{{--accent:{p['color']};}} .mobile-hero{{display:flex;justify-content:space-between;align-items:center;padding:16px;border-radius:14px;border:1px solid {p['color']}66;background:linear-gradient(135deg,{p['color']}18,#fff);margin-top:12px}} .mobile-hero .ico{{width:50px;height:50px;border-radius:12px;background:{p['color']};display:grid;place-items:center;color:#fff}}</style>
</head>
<body data-active-nav='mobile-agent' class='dashboard-shell-page'><main class='app-content'>
<div class='subnav-scroll'><div class='subnav-tabs'>{nav_html}</div></div>
<div data-roles='admin'>
<nav class='breadcrumbs' aria-label='Breadcrumb'><a href='../04-dashboard/01-dashboard.html'>Dashboard</a><i data-lucide='chevron-right'></i><a href='./01-mobile-inbox.html'>Mobile Agent</a><i data-lucide='chevron-right'></i><span class='current'>{p['t']}</span></nav>
<section class='mobile-hero'><div><h1 style='margin:0 0 6px'>{p['t']}</h1><p class='text-muted' style='margin:0'>{p['desc']}</p></div><div class='ico'><i data-lucide='{p['icon']}'></i></div></section>
<div class='page-header-actions' style='margin:10px 0'><a class='btn btn-secondary' href='./{prev}'><i data-lucide='arrow-left'></i> {title(prev)}</a><a class='btn btn-primary' href='./{nxt}'>{title(nxt)} <i data-lucide='arrow-right'></i></a></div>
<section class='grid cols-3'>{kpi}</section>
{p['extra']}
<section class='card' style='margin-top:14px'><div class='card-header'><h3><i data-lucide='activity'></i> Real-time holat</h3></div><div class='card-body'><p class='text-muted'>Mobil agent sessiyasi barqaror. Oxirgi sync: 12 soniya oldin.</p></div></section>
<div class='sticky-save-bar'><a class='btn btn-secondary' href='./{prev}'>Oldingi sahifa</a><a class='btn btn-primary' href='./{nxt}'>Keyingi sahifa</a></div>
</div></main><script>window.addEventListener('DOMContentLoaded',()=>{{if(window.lucide&&window.lucide.createIcons)window.lucide.createIcons();}});</script></body></html>"""
    (base/p['f']).write_text(html,encoding='utf-8')

print('28 mobile-agent redesigned')
