from pathlib import Path

base = Path(r"C:\Users\User\Desktop\onlinechat-text\html\03-onboarding")

pages = [
    {
        "f":"07-progress-checklist.html",
        "t":"Progress Checklist",
        "icon":"list-checks",
        "color":"#2563EB",
        "desc":"Onboarding bosqichlarini progress bilan kuzatish va keyingi qadamlarni boshqarish.",
        "kpi":[("Bajarilgan","3/7"),("Qolgan","4"),("Vaqt","8 daq")],
        "body":"<section class='card'><div class='card-header'><h3><i data-lucide='check-check'></i> Qadamlar</h3></div><div class='card-body'><div class='list-stack'><div class='list-item'><div class='item-main'><div class='item-title'>Workspace nomi</div></div><span class='badge badge-success'>Done</span></div><div class='list-item'><div class='item-main'><div class='item-title'>Kanal ulash</div></div><span class='badge badge-warning'>In progress</span></div><div class='list-item'><div class='item-main'><div class='item-title'>Birinchi avtomatsiya</div></div><span class='badge badge-primary'>Next</span></div></div></div></section>"
    },
    {
        "f":"08-interactive-tutorial.html",
        "t":"Interactive Tutorial",
        "icon":"sparkles",
        "color":"#7C3AED",
        "desc":"Spotlight tur orqali inbox, chat va settings bo'limlarini interaktiv o'rganish.",
        "kpi":[("Bosqichlar","6"),("Ko'rilgan","4"),("Skip","1")],
        "body":"<section class='split-grid'><article class='card'><div class='card-header'><h3><i data-lucide='mouse-pointer-click'></i> Spotlight step</h3></div><div class='card-body'><p class='text-muted'>Hozirgi fokus: <strong>Inbox filter paneli</strong></p><button class='btn btn-secondary'>Next highlight</button></div></article><article class='card'><div class='card-header'><h3><i data-lucide='graduation-cap'></i> O'quv holati</h3></div><div class='card-body'><div class='pill'>UI asoslari</div><div class='pill'>Routing qoidasi</div><div class='pill'>Tag tizimi</div></div></article></section>"
    },
    {
        "f":"09-first-chat-demo.html",
        "t":"First Chat Demo",
        "icon":"messages-square",
        "color":"#0EA5E9",
        "desc":"Soxta mijoz bilan birinchi suhbatni simulyatsiya qilib, agent oqimini mashq qilish.",
        "kpi":[("Demo chat","1"),("Reply time","26s"),("CSAT","5/5")],
        "body":"<section class='card'><div class='card-header'><h3><i data-lucide='bot'></i> Simulyatsiya</h3></div><div class='card-body'><div class='table-wrap'><table class='table'><tr><th>Rol</th><th>Xabar</th></tr><tr><td>Mijoz</td><td>Salom, buyurtmam qayerda?</td></tr><tr><td>Agent</td><td>Salom! Raqamni yuboring, tekshiraman.</td></tr><tr><td>Mijoz</td><td>#A12933</td></tr></table></div></div></section>"
    }
]

for i,p in enumerate(pages):
    prev = pages[i-1]['f'] if i>0 else pages[-1]['f']
    nxt = pages[i+1]['f'] if i < len(pages)-1 else pages[0]['f']

    html = f"""<!doctype html>
<html lang='uz'>
<head>
<meta charset='UTF-8'><meta name='viewport' content='width=device-width, initial-scale=1.0'>
<title>QULAY CHAT - {p['t']}</title>
<link rel='preconnect' href='https://fonts.googleapis.com'><link rel='preconnect' href='https://fonts.gstatic.com' crossorigin>
<link href='https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap' rel='stylesheet'>
<link rel='stylesheet' href='../assets/qulay-chat-design-system.css'>
<script src='https://unpkg.com/lucide@latest' defer></script>
<script src='../assets/qulay-chat-shell.js' defer></script>
<script src='../assets/qulay-chat-runtime.js' defer></script>
<style>:root{{--accent:{p['color']};}} .hero{{display:flex;justify-content:space-between;align-items:center;padding:16px;border-radius:14px;border:1px solid {p['color']}66;background:linear-gradient(135deg,{p['color']}18,#fff);margin-top:12px}} .hero .icon{{width:50px;height:50px;border-radius:12px;background:{p['color']};display:grid;place-items:center;color:#fff}}</style>
</head>
<body data-active-nav='onboarding' class='dashboard-shell-page'>
<main class='app-content'>
<div class='subnav-scroll'><div class='subnav-tabs'>
<a class='subnav-tab' href='./07-progress-checklist.html'>Progress Checklist</a>
<a class='subnav-tab' href='./08-interactive-tutorial.html'>Interactive Tutorial</a>
<a class='subnav-tab' href='./09-first-chat-demo.html'>First Chat Demo</a>
</div></div>
<div data-roles='admin'>
<nav class='breadcrumbs'><a href='../04-dashboard/01-dashboard.html'>Dashboard</a><i data-lucide='chevron-right'></i><a href='./07-progress-checklist.html'>Onboarding</a><i data-lucide='chevron-right'></i><span class='current'>{p['t']}</span></nav>
<section class='hero'><div><h1 style='margin:0 0 6px'>{p['t']}</h1><p class='text-muted' style='margin:0'>{p['desc']}</p></div><div class='icon'><i data-lucide='{p['icon']}'></i></div></section>
<div class='page-header-actions' style='margin:10px 0'><a class='btn btn-secondary' href='./{prev}'><i data-lucide='arrow-left'></i> Oldingi</a><a class='btn btn-primary' href='./{nxt}'>Keyingi <i data-lucide='arrow-right'></i></a></div>
<section class='grid cols-3'>
{''.join([f"<article class='card'><div class='card-body'><p class='text-muted' style='margin:0 0 6px'>{k}</p><h3 style='margin:0'>{v}</h3></div></article>" for k,v in p['kpi']])}
</section>
{p['body']}
<section class='card' style='margin-top:14px'><div class='card-header'><h3><i data-lucide='lightbulb'></i> Tavsiya</h3></div><div class='card-body'><p class='text-muted'>Bu bosqichni tugatgach, keyingi onboarding sahifasiga o'tib amaliy test qiling.</p></div></section>
<div class='sticky-save-bar'><a class='btn btn-secondary' href='./{prev}'>Oldingi sahifa</a><a class='btn btn-primary' href='./{nxt}'>Keyingi sahifa</a></div>
</div></main>
<script>window.addEventListener('DOMContentLoaded',()=>{{if(window.lucide&&window.lucide.createIcons)window.lucide.createIcons();const t=document.querySelectorAll('.subnav-tab');t.forEach(a=>{{if(a.getAttribute('href')==='./{p['f']}')a.classList.add('active')}})}});</script>
</body></html>"""

    (base / p['f']).write_text(html, encoding='utf-8')

print('03-onboarding new pages redesigned')
