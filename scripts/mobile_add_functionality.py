from pathlib import Path

base = Path(r"C:\Users\User\Desktop\onlinechat-text\html\28-mobile-agent")

# 1) Mobile Inbox
(base / '01-mobile-inbox.html').write_text("""<!doctype html><html lang='uz'><head><meta charset='UTF-8'><meta name='viewport' content='width=device-width, initial-scale=1.0'><title>QULAY CHAT - Mobile Inbox</title>
<link rel='preconnect' href='https://fonts.googleapis.com'><link rel='preconnect' href='https://fonts.gstatic.com' crossorigin><link href='https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap' rel='stylesheet'>
<link rel='stylesheet' href='../assets/qulay-chat-design-system.css'><script src='https://unpkg.com/lucide@latest' defer></script><script src='../assets/qulay-chat-shell.js' defer></script><script src='../assets/qulay-chat-runtime.js' defer></script>
<style>.chat-row.hidden{display:none}.filter-pills .pill{cursor:pointer}</style></head><body data-active-nav='mobile-agent' class='dashboard-shell-page'><main class='app-content'>
<div class='subnav-scroll'><div class='subnav-tabs'><a class='subnav-tab active' href='./01-mobile-inbox.html'>Mobile Inbox</a><a class='subnav-tab' href='./02-mobile-chat.html'>Mobile Chat</a><a class='subnav-tab' href='./03-mobile-notifications.html'>Mobile Notifications</a><a class='subnav-tab' href='./04-mobile-status.html'>Mobile Status</a><a class='subnav-tab' href='./05-mobile-settings.html'>Mobile Settings</a></div></div>
<div data-roles='admin'><h1>Mobile Inbox</h1><p class='text-muted'>Unreadlar va filtrlar.</p>
<section class='card'><div class='card-body'><div class='filter-pills'><span class='pill' data-filter='all'>Barchasi</span><span class='pill' data-filter='vip'>VIP</span><span class='pill' data-filter='telegram'>Telegram</span><span class='pill' data-filter='email'>Email</span></div></div></section>
<section class='card'><div class='card-body' id='chatList'>
<div class='chat-row' data-tag='vip telegram'><strong>VIP: Aziza</strong> — To'lov muammosi</div>
<div class='chat-row' data-tag='telegram'><strong>@jamshid</strong> — Buyurtma holati</div>
<div class='chat-row' data-tag='email'><strong>dilnoza@..</strong> — Invoice so'rovi</div>
</div></section>
<a class='btn btn-primary' href='./02-mobile-chat.html'>Keyingi</a></div></main>
<script>window.addEventListener('DOMContentLoaded',()=>{if(window.lucide&&window.lucide.createIcons)window.lucide.createIcons();const pills=[...document.querySelectorAll('[data-filter]')];const rows=[...document.querySelectorAll('.chat-row')];function apply(f){rows.forEach(r=>r.classList.toggle('hidden',f!=='all'&&!r.dataset.tag.includes(f)));localStorage.setItem('mobileInboxFilter',f);}pills.forEach(p=>p.onclick=()=>apply(p.dataset.filter));apply(localStorage.getItem('mobileInboxFilter')||'all');});</script></body></html>""", encoding='utf-8')

# 2) Mobile Chat
(base / '02-mobile-chat.html').write_text("""<!doctype html><html lang='uz'><head><meta charset='UTF-8'><meta name='viewport' content='width=device-width, initial-scale=1.0'><title>QULAY CHAT - Mobile Chat</title>
<link rel='stylesheet' href='../assets/qulay-chat-design-system.css'><script src='https://unpkg.com/lucide@latest' defer></script><script src='../assets/qulay-chat-shell.js' defer></script><script src='../assets/qulay-chat-runtime.js' defer></script>
<style>.msg{padding:8px 10px;border-radius:10px;margin:6px 0}.in{background:#eef2ff}.out{background:#dbeafe;margin-left:auto;max-width:80%}.chatbox{min-height:220px}</style></head><body data-active-nav='mobile-agent' class='dashboard-shell-page'><main class='app-content'>
<div class='subnav-scroll'><div class='subnav-tabs'><a class='subnav-tab' href='./01-mobile-inbox.html'>Mobile Inbox</a><a class='subnav-tab active' href='./02-mobile-chat.html'>Mobile Chat</a><a class='subnav-tab' href='./03-mobile-notifications.html'>Mobile Notifications</a><a class='subnav-tab' href='./04-mobile-status.html'>Mobile Status</a><a class='subnav-tab' href='./05-mobile-settings.html'>Mobile Settings</a></div></div>
<div data-roles='admin'><h1>Mobile Chat</h1><section class='card'><div class='card-body chatbox' id='chatbox'><div class='msg in'>Salom, buyurtmam qayerda?</div></div></section>
<section class='card'><div class='card-body'><button class='btn btn-secondary tool' data-tool='attachment'>Attachment</button> <button class='btn btn-secondary tool' data-tool='voice'>Voice</button><div class='divider' style='margin:10px 0'></div>
<button class='btn btn-ghost qr' data-text="Buyurtma raqamingizni yuboring">Quick 1</button>
<button class='btn btn-ghost qr' data-text="Operatorga ulayapman">Quick 2</button></div></section>
<a class='btn btn-secondary' href='./01-mobile-inbox.html'>Oldingi</a> <a class='btn btn-primary' href='./03-mobile-notifications.html'>Keyingi</a></div></main>
<script>window.addEventListener('DOMContentLoaded',()=>{if(window.lucide&&window.lucide.createIcons)window.lucide.createIcons();const box=document.getElementById('chatbox');document.querySelectorAll('.qr').forEach(b=>b.onclick=()=>{const d=document.createElement('div');d.className='msg out';d.textContent=b.dataset.text;box.appendChild(d);box.scrollTop=box.scrollHeight;});document.querySelectorAll('.tool').forEach(t=>t.onclick=()=>alert(t.dataset.tool+' ochildi (demo)'));});</script></body></html>""", encoding='utf-8')

# 3) Notifications
(base / '03-mobile-notifications.html').write_text("""<!doctype html><html lang='uz'><head><meta charset='UTF-8'><meta name='viewport' content='width=device-width, initial-scale=1.0'><title>QULAY CHAT - Mobile Notifications</title>
<link rel='stylesheet' href='../assets/qulay-chat-design-system.css'><script src='../assets/qulay-chat-shell.js' defer></script><script src='../assets/qulay-chat-runtime.js' defer></script></head><body data-active-nav='mobile-agent' class='dashboard-shell-page'><main class='app-content'>
<div data-roles='admin'><h1>Mobile Notifications</h1><section class='card'><div class='card-body'>
<label><input type='checkbox' id='push'> Push yoqilgan</label><br><label><input type='checkbox' id='sound'> Sound yoqilgan</label>
<div style='margin-top:8px'><input id='dndStart' value='23:00'> - <input id='dndEnd' value='07:00'> <button class='btn btn-secondary' id='saveBtn'>Saqlash</button></div>
<p id='saved' class='text-muted'></p></div></section>
<a class='btn btn-secondary' href='./02-mobile-chat.html'>Oldingi</a> <a class='btn btn-primary' href='./04-mobile-status.html'>Keyingi</a></div></main>
<script>const k='mobileNotify';window.addEventListener('DOMContentLoaded',()=>{const st=JSON.parse(localStorage.getItem(k)||'{}');push.checked=!!st.push;sound.checked=!!st.sound;dndStart.value=st.s||'23:00';dndEnd.value=st.e||'07:00';saveBtn.onclick=()=>{localStorage.setItem(k,JSON.stringify({push:push.checked,sound:sound.checked,s:dndStart.value,e:dndEnd.value}));saved.textContent='Saqlandi ✅';};});</script></body></html>""", encoding='utf-8')

# 4) Status
(base / '04-mobile-status.html').write_text("""<!doctype html><html lang='uz'><head><meta charset='UTF-8'><meta name='viewport' content='width=device-width, initial-scale=1.0'><title>QULAY CHAT - Mobile Status</title>
<link rel='stylesheet' href='../assets/qulay-chat-design-system.css'><script src='../assets/qulay-chat-shell.js' defer></script><script src='../assets/qulay-chat-runtime.js' defer></script>
<style>.status{cursor:pointer;padding:8px;border:1px solid #ddd;border-radius:8px;margin:6px 0}.status.active{border-color:#22c55e;background:#f0fdf4}</style></head><body data-active-nav='mobile-agent' class='dashboard-shell-page'><main class='app-content'>
<div data-roles='admin'><h1>Mobile Status</h1><p>Joriy holat: <strong id='cur'>Online</strong></p>
<div class='status' data-v='Online'>Online</div><div class='status' data-v='Away'>Away</div><div class='status' data-v='Busy'>Busy</div><div class='status' data-v='Offline'>Offline</div>
<a class='btn btn-secondary' href='./03-mobile-notifications.html'>Oldingi</a> <a class='btn btn-primary' href='./05-mobile-settings.html'>Keyingi</a></div></main>
<script>window.addEventListener('DOMContentLoaded',()=>{const k='mobileStatus';const cur=document.getElementById('cur');const items=[...document.querySelectorAll('.status')];function set(v){cur.textContent=v;items.forEach(i=>i.classList.toggle('active',i.dataset.v===v));localStorage.setItem(k,v);}items.forEach(i=>i.onclick=()=>set(i.dataset.v));set(localStorage.getItem(k)||'Online');});</script></body></html>""", encoding='utf-8')

# 5) Settings
(base / '05-mobile-settings.html').write_text("""<!doctype html><html lang='uz'><head><meta charset='UTF-8'><meta name='viewport' content='width=device-width, initial-scale=1.0'><title>QULAY CHAT - Mobile Settings</title>
<link rel='stylesheet' href='../assets/qulay-chat-design-system.css'><script src='../assets/qulay-chat-shell.js' defer></script><script src='../assets/qulay-chat-runtime.js' defer></script></head><body data-active-nav='mobile-agent' class='dashboard-shell-page'><main class='app-content'>
<div data-roles='admin'><h1>Mobile Settings</h1>
<section class='card'><div class='card-body'>
<label>Theme <select id='theme'><option>system</option><option>light</option><option>dark</option></select></label>
<label style='margin-left:10px'>Language <select id='lang'><option>uz</option><option>ru</option><option>en</option></select></label>
<div style='margin-top:10px'>Cache: <strong id='cache'>126</strong> MB <button class='btn btn-secondary' id='clear'>Cache tozalash</button></div>
</div></section>
<a class='btn btn-secondary' href='./04-mobile-status.html'>Oldingi</a> <a class='btn btn-primary' href='./01-mobile-inbox.html'>Bo'lim boshiga</a></div></main>
<script>const k='mobileSettings';window.addEventListener('DOMContentLoaded',()=>{const s=JSON.parse(localStorage.getItem(k)||'{"theme":"system","lang":"uz","cache":126}');theme.value=s.theme;lang.value=s.lang;cache.textContent=s.cache;function save(){localStorage.setItem(k,JSON.stringify({theme:theme.value,lang:lang.value,cache:+cache.textContent}));}theme.onchange=save;lang.onchange=save;clear.onclick=()=>{cache.textContent='0';save();};});</script></body></html>""", encoding='utf-8')

print('mobile functionality added')
