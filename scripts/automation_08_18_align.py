from pathlib import Path

base = Path(r"C:\Users\User\Desktop\onlinechat-text\html\06-automation")

pages = [
("08-chatbot-flow-editor.html","Chatbot Flow Editor","Drag-drop flow orqali bot ssenariylarini vizual boshqarish."),
("09-chatbot-testing.html","Chatbot Testing","Bot javoblarini sandbox rejimda step-by-step test qilish."),
("10-chatbot-analytics.html","Chatbot Analytics","Bot samaradorligi, completion va drop-off metrikalarini ko‘rish."),
("11-chatbot-variables.html","Chatbot Variables","Dinamik o‘zgaruvchilar va personalizatsiya maydonlarini boshqarish."),
("12-workflow-builder.html","Workflow Builder","IF/ELSE asosidagi ko‘p bosqichli workflow zanjirini tuzish."),
("13-auto-tagging.html","Auto Tagging","Chat mazmuniga qarab avtomatik teg qo‘yish qoidalari."),
("14-auto-assignment.html","Auto Assignment","Round-robin, load-balancing va skill-based taqsimot."),
("15-sla-rules.html","SLA Rules","Javob va yechim muddatlari bo‘yicha SLA qoidalarini sozlash."),
("16-escalation-rules.html","Escalation Rules","Muddati o‘tgan chatlarni avtomatik eskalatsiya qilish."),
("17-business-rules.html","Business Rules","Biznes shartlari va trigger/action kombinatsiyalarini boshqarish."),
("18-scheduled-messages.html","Scheduled Messages","Rejalashtirilgan follow-up xabarlarni vaqt bo‘yicha yuborish."),
]

subnav = [
("01-working-hours.html","Working Hours"),("02-auto-reply.html","Auto Reply"),("03-triggers.html","Triggers"),("04-greetings.html","Greetings"),("05-chatbot-builder.html","Chatbot Builder"),("06-chatbot-templates.html","Chatbot Templates"),("07-routing-rules.html","Routing Rules"),("08-chatbot-flow-editor.html","Chatbot Flow Editor"),("09-chatbot-testing.html","Chatbot Testing"),("10-chatbot-analytics.html","Chatbot Analytics"),("11-chatbot-variables.html","Chatbot Variables"),("12-workflow-builder.html","Workflow Builder"),("13-auto-tagging.html","Auto Tagging"),("14-auto-assignment.html","Auto Assignment"),("15-sla-rules.html","SLA Rules"),("16-escalation-rules.html","Escalation Rules"),("17-business-rules.html","Business Rules"),("18-scheduled-messages.html","Scheduled Messages")
]

def nav_html(active):
    return ''.join([f'<a class="subnav-tab{" active" if f==active else ""}" href="./{f}">{t}</a>' for f,t in subnav])

def prev_next(file):
    idx = [f for f,_ in subnav].index(file)
    prev = subnav[idx-1][0] if idx>0 else subnav[-1][0]
    nxt = subnav[idx+1][0] if idx<len(subnav)-1 else subnav[0][0]
    return prev,nxt

def title(file):
    for f,t in subnav:
        if f==file:return t
    return file

for f,t,d in pages:
    prev,nxt = prev_next(f)
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
  <body data-active-nav="automation" class="dashboard-shell-page">
    <main class="app-content">
      <div class="subnav-scroll"><div class="subnav-tabs">{nav_html(f)}</div></div>
      <div data-roles="admin">
        <nav class="breadcrumbs" aria-label="Breadcrumb"><a href="../04-dashboard/01-dashboard.html">Dashboard</a><i data-lucide="chevron-right"></i><a href="./01-working-hours.html">Automation</a><i data-lucide="chevron-right"></i><span class="current">{t}</span></nav>
        <div class="page-header"><div><h1>{t}</h1><p class="text-muted">{d}</p></div><div class="page-header-actions"><a class="btn btn-secondary" href="./{prev}"><i data-lucide="arrow-left"></i> {title(prev)}</a><a class="btn btn-primary" href="./{nxt}">{title(nxt)} <i data-lucide="arrow-right"></i></a></div></div>

        <section class="grid cols-3" style="margin-bottom:14px">
          <article class="card"><div class="card-body"><p class="text-muted" style="margin:0 0 6px">Active rules</p><h3 style="margin:0">18</h3></div></article>
          <article class="card"><div class="card-body"><p class="text-muted" style="margin:0 0 6px">Success rate</p><h3 style="margin:0">96.4%</h3></div></article>
          <article class="card"><div class="card-body"><p class="text-muted" style="margin:0 0 6px">Last update</p><h3 style="margin:0">Bugun 16:58</h3></div></article>
        </section>

        <section class="split-grid" style="margin-bottom:14px">
          <article class="card">
            <div class="card-header"><h3>Asosiy boshqaruv</h3></div>
            <div class="card-body">
              <label>Primary setting<input class="input" value="Enabled" /></label>
              <label style="margin-top:10px;display:block">Secondary setting<input class="input" value="Configured" /></label>
              <div class="flex gap-2 wrap" style="margin-top:12px">
                <button class="btn btn-secondary" type="button"><i data-lucide="flask-conical"></i> Test run</button>
                <button class="btn btn-primary" type="button"><i data-lucide="save"></i> Saqlash</button>
              </div>
            </div>
          </article>
          <article class="card">
            <div class="card-header"><h3>Checklist</h3></div>
            <div class="card-body">
              <div class="list-stack">
                <div class="list-item"><div class="item-main"><div class="item-title">Rule validation</div></div><span class="badge badge-success">OK</span></div>
                <div class="list-item"><div class="item-main"><div class="item-title">Fallback policy</div></div><span class="badge badge-primary">Active</span></div>
                <div class="list-item"><div class="item-main"><div class="item-title">Rate-limit check</div></div><span class="badge badge-warning">Review</span></div>
              </div>
            </div>
          </article>
        </section>

        <section class="card" style="margin-bottom:14px">
          <div class="card-header"><h3>So‘nggi faoliyat</h3></div>
          <div class="card-body">
            <div class="table-wrap">
              <table class="table">
                <thead class="table-header"><tr><th>Vaqt</th><th>Event</th><th>Holat</th><th>Mas’ul</th></tr></thead>
                <tbody>
                  <tr class="table-row"><td>16:58</td><td>Rule saved</td><td><span class="badge badge-success">Done</span></td><td>Jahongir</td></tr>
                  <tr class="table-row"><td>16:52</td><td>Test executed</td><td><span class="badge badge-primary">Pass</span></td><td>Dilnoza</td></tr>
                  <tr class="table-row"><td>16:44</td><td>Condition updated</td><td><span class="badge badge-warning">Review</span></td><td>Madina</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <div class="sticky-save-bar"><a class="btn btn-secondary" href="./{prev}">Oldingi sahifa</a><a class="btn btn-primary" href="./{nxt}">Keyingi sahifa</a></div>
      </div>
    </main>
    <script>window.addEventListener("DOMContentLoaded",function(){{if(window.lucide&&window.lucide.createIcons)window.lucide.createIcons();}});</script>
  </body>
</html>'''
    (base / f).write_text(html, encoding='utf-8')

print('06 automation 08-18 aligned')
