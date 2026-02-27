
// ═══ QULAY CHAT Design System ═══
var PRIMARY = {r:79/255,g:70/255,b:229/255};
var PRIMARY_HOVER = {r:67/255,g:56/255,b:202/255};
var PRIMARY_LIGHT = {r:238/255,g:242/255,b:255/255};
var WHITE = {r:1,g:1,b:1};
var BG = {r:249/255,g:250/255,b:251/255};
var G50 = {r:249/255,g:250/255,b:251/255};
var G100 = {r:243/255,g:244/255,b:246/255};
var G200 = {r:229/255,g:231/255,b:235/255};
var G300 = {r:209/255,g:213/255,b:219/255};
var G400 = {r:156/255,g:163/255,b:175/255};
var G500 = {r:107/255,g:114/255,b:128/255};
var G600 = {r:75/255,g:85/255,b:99/255};
var G700 = {r:55/255,g:65/255,b:81/255};
var G800 = {r:31/255,g:41/255,b:55/255};
var G900 = {r:17/255,g:24/255,b:39/255};
var SUCCESS = {r:16/255,g:185/255,b:129/255};
var SUCCESS_L = {r:236/255,g:253/255,b:245/255};
var DANGER = {r:239/255,g:68/255,b:68/255};
var DANGER_L = {r:254/255,g:242/255,b:242/255};
var WARNING = {r:245/255,g:158/255,b:11/255};
var WARNING_L = {r:255/255,g:251/255,b:235/255};
var INFO = {r:59/255,g:130/255,b:246/255};
var INFO_L = {r:239/255,g:246/255,b:255/255};
var SIDEBAR_BG = {r:17/255,g:24/255,b:39/255};
var SIDEBAR_TEXT = {r:209/255,g:213/255,b:219/255};

await figma.loadFontAsync({family:"Inter",style:"Regular"});
await figma.loadFontAsync({family:"Inter",style:"Medium"});
await figma.loadFontAsync({family:"Inter",style:"Semi Bold"});
await figma.loadFontAsync({family:"Inter",style:"Bold"});

function txt(parent,text,opts){
  var t=figma.createText();
  t.fontName={family:"Inter",style:opts.style||"Regular"};
  t.characters=text;
  t.fontSize=opts.size||14;
  t.fills=[{type:'SOLID',color:opts.color||G900}];
  if(opts.align)t.textAlignHorizontal=opts.align;
  if(opts.x!==undefined)t.x=opts.x;
  if(opts.y!==undefined)t.y=opts.y;
  if(opts.w)t.resize(opts.w,t.height);
  if(opts.wrap)t.textAutoResize="HEIGHT";
  parent.appendChild(t);
  return t;
}

function rect(parent,w,h,color,opts){
  var r=figma.createRectangle();
  r.resize(w,h);
  r.fills=[{type:'SOLID',color:color}];
  if(opts){
    if(opts.radius)r.cornerRadius=opts.radius;
    if(opts.x!==undefined)r.x=opts.x;
    if(opts.y!==undefined)r.y=opts.y;
    if(opts.stroke){r.strokes=[{type:'SOLID',color:opts.stroke}];r.strokeWeight=opts.strokeW||1;}
  }
  parent.appendChild(r);
  return r;
}

function frame(parent,name,w,h,opts){
  var f=figma.createFrame();
  f.name=name;
  f.resize(w,h);
  f.fills=opts&&opts.color?[{type:'SOLID',color:opts.color}]:[];
  if(opts){
    if(opts.x!==undefined)f.x=opts.x;
    if(opts.y!==undefined)f.y=opts.y;
    if(opts.radius)f.cornerRadius=opts.radius;
    if(opts.layout){
      f.layoutMode=opts.layout;
      f.itemSpacing=opts.spacing||0;
      if(opts.pad){f.paddingTop=opts.pad;f.paddingBottom=opts.pad;f.paddingLeft=opts.pad;f.paddingRight=opts.pad;}
      if(opts.padX){f.paddingLeft=opts.padX;f.paddingRight=opts.padX;}
      if(opts.padY){f.paddingTop=opts.padY;f.paddingBottom=opts.padY;}
      if(opts.alignX)f.counterAxisAlignItems=opts.alignX;
      if(opts.alignY)f.primaryAxisAlignItems=opts.alignY;
    }
    if(opts.stroke){f.strokes=[{type:'SOLID',color:opts.stroke}];f.strokeWeight=opts.strokeW||1;}
    if(opts.shadow)f.effects=[{type:'DROP_SHADOW',color:{r:0,g:0,b:0,a:0.08},offset:{x:0,y:4},radius:12,visible:true,blendMode:'NORMAL'}];
  }
  if(parent)parent.appendChild(f);
  return f;
}

// ═══════════════════════════════════════════
// SECTION: TEAM CHAT (3 screens)
// ═══════════════════════════════════════════

// Section label
var sLabel=figma.createFrame();
sLabel.name="— TEAM CHAT —";
sLabel.resize(4560, 60);
sLabel.fills=[{type:'SOLID',color:{r:0,g:0,b:0}}];
sLabel.cornerRadius=8;
sLabel.x=0;sLabel.y=16720;
sLabel.layoutMode="HORIZONTAL";sLabel.primaryAxisAlignItems="CENTER";sLabel.counterAxisAlignItems="CENTER";
var slTxt=figma.createText();
slTxt.fontName={family:"Inter",style:"Bold"};
slTxt.characters="TEAM CHAT (3)";
slTxt.fontSize=20;
slTxt.fills=[{type:'SOLID',color:{r:1,g:1,b:1}}];
sLabel.appendChild(slTxt);
figma.currentPage.appendChild(sLabel);

// TEAM CHAT / Team Chat
var screen=figma.createFrame();
screen.name="01-team-chat - Team Chat";
screen.resize(1440,900);
screen.fills=[{type:'SOLID',color:BG}];
screen.x=0;screen.y=16800;


  // ═══ SIDEBAR ═══
  var sidebar=frame(screen,"Sidebar",260,900,{x:0,y:0,color:SIDEBAR_BG});
  
  // Logo
  var sLogo=frame(sidebar,"Logo",220,40,{x:20,y:20,color:PRIMARY,radius:8,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  txt(sLogo,"QULAY CHAT",{style:"Bold",size:13,color:WHITE});
  
  // Nav: Dashboard
  var nav0=frame(sidebar,"Nav Dashboard",240,36,{x:10,y:80,color:{r:0,g:0,b:0} ,radius:8,color:{r:17/255,g:24/255,b:39/255}});
  nav0.fills=[];
  txt(nav0,"Dashboard",{style:"Medium",size:13,color:SIDEBAR_TEXT,x:36,y:9});
  // Nav: Inbox
  var nav1=frame(sidebar,"Nav Inbox",240,36,{x:10,y:120,color:{r:0,g:0,b:0} ,radius:8,color:{r:17/255,g:24/255,b:39/255}});
  nav1.fills=[];
  txt(nav1,"Inbox",{style:"Medium",size:13,color:SIDEBAR_TEXT,x:36,y:9});
  // Nav: Contacts
  var nav2=frame(sidebar,"Nav Contacts",240,36,{x:10,y:160,color:{r:0,g:0,b:0} ,radius:8,color:{r:17/255,g:24/255,b:39/255}});
  nav2.fills=[];
  txt(nav2,"Contacts",{style:"Medium",size:13,color:SIDEBAR_TEXT,x:36,y:9});
  // Nav: Visitors
  var nav3=frame(sidebar,"Nav Visitors",240,36,{x:10,y:200,color:{r:0,g:0,b:0} ,radius:8,color:{r:17/255,g:24/255,b:39/255}});
  nav3.fills=[];
  txt(nav3,"Visitors",{style:"Medium",size:13,color:SIDEBAR_TEXT,x:36,y:9});
  // Nav: Automation
  var nav4=frame(sidebar,"Nav Automation",240,36,{x:10,y:240,color:{r:0,g:0,b:0} ,radius:8,color:{r:17/255,g:24/255,b:39/255}});
  nav4.fills=[];
  txt(nav4,"Automation",{style:"Medium",size:13,color:SIDEBAR_TEXT,x:36,y:9});
  // Nav: Team
  var nav5=frame(sidebar,"Nav Team",240,36,{x:10,y:280,color:{r:0,g:0,b:0} ,radius:8,color:{r:17/255,g:24/255,b:39/255}});
  nav5.fills=[];
  txt(nav5,"Team",{style:"Medium",size:13,color:SIDEBAR_TEXT,x:36,y:9});
  // Nav: Team Chat
  var nav6=frame(sidebar,"Nav Team Chat",240,36,{x:10,y:320,color:PRIMARY ,radius:8});
  
  txt(nav6,"Team Chat",{style:"Medium",size:13,color:WHITE,x:36,y:9});
  // Nav: Analytics
  var nav7=frame(sidebar,"Nav Analytics",240,36,{x:10,y:360,color:{r:0,g:0,b:0} ,radius:8,color:{r:17/255,g:24/255,b:39/255}});
  nav7.fills=[];
  txt(nav7,"Analytics",{style:"Medium",size:13,color:SIDEBAR_TEXT,x:36,y:9});
  // Nav: Knowledge Base
  var nav8=frame(sidebar,"Nav Knowledge Base",240,36,{x:10,y:400,color:{r:0,g:0,b:0} ,radius:8,color:{r:17/255,g:24/255,b:39/255}});
  nav8.fills=[];
  txt(nav8,"Knowledge Base",{style:"Medium",size:13,color:SIDEBAR_TEXT,x:36,y:9});
  // Nav: Addons
  var nav9=frame(sidebar,"Nav Addons",240,36,{x:10,y:440,color:{r:0,g:0,b:0} ,radius:8,color:{r:17/255,g:24/255,b:39/255}});
  nav9.fills=[];
  txt(nav9,"Addons",{style:"Medium",size:13,color:SIDEBAR_TEXT,x:36,y:9});
  // Nav: Developer
  var nav10=frame(sidebar,"Nav Developer",240,36,{x:10,y:480,color:{r:0,g:0,b:0} ,radius:8,color:{r:17/255,g:24/255,b:39/255}});
  nav10.fills=[];
  txt(nav10,"Developer",{style:"Medium",size:13,color:SIDEBAR_TEXT,x:36,y:9});
  // Nav: Settings
  var nav11=frame(sidebar,"Nav Settings",240,36,{x:10,y:520,color:{r:0,g:0,b:0} ,radius:8,color:{r:17/255,g:24/255,b:39/255}});
  nav11.fills=[];
  txt(nav11,"Settings",{style:"Medium",size:13,color:SIDEBAR_TEXT,x:36,y:9});
  // Nav: Billing
  var nav12=frame(sidebar,"Nav Billing",240,36,{x:10,y:560,color:{r:0,g:0,b:0} ,radius:8,color:{r:17/255,g:24/255,b:39/255}});
  nav12.fills=[];
  txt(nav12,"Billing",{style:"Medium",size:13,color:SIDEBAR_TEXT,x:36,y:9});
  

// Inbox 3-column layout
var inboxArea=frame(screen,"Inbox Area",1180,900,{x:260,y:0,color:WHITE});

// Chat list panel (320px)
var chatList=frame(inboxArea,"Chat List",320,900,{x:0,y:0,color:WHITE,stroke:G200});
// Search
var searchBox=frame(chatList,"Search",288,40,{x:16,y:16,color:G50,radius:8,stroke:G200,layout:"HORIZONTAL",padX:12,alignX:"CENTER"});
txt(searchBox,"Mijoz ismi yoki xabar...",{size:13,color:G400});

// Tabs
var tabs=frame(chatList,"Tabs",288,32,{x:16,y:68,layout:"HORIZONTAL",spacing:4});
tabs.primaryAxisSizingMode="AUTO";tabs.counterAxisSizingMode="AUTO";
var tab0=frame(tabs,"Tab",60,28,{color:PRIMARY_LIGHT,radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
txt(tab0,"Hammasi",{size:12,color:PRIMARY,style:"Medium"});
var tab1=frame(tabs,"Tab",50,28,{radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});tab1.fills=[];
txt(tab1,"Faol",{size:12,color:G500});
var tab2=frame(tabs,"Tab",60,28,{radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});tab2.fills=[];
txt(tab2,"Javobsiz",{size:12,color:G500});

// Chat items

var ci0=frame(chatList,"Chat Ahmad Valiyev",320,72,{x:0,y:108,color:PRIMARY_LIGHT,layout:"HORIZONTAL",padX:16,padY:12,spacing:12,alignX:"CENTER"});
ci0.strokes=[{type:'SOLID',color:G100}];ci0.strokeWeight=1;
var dot0=figma.createEllipse();dot0.resize(8,8);dot0.fills=[{type:'SOLID',color:SUCCESS}];ci0.appendChild(dot0);
var ciInfo0=frame(ci0,"Info",240,48,{layout:"VERTICAL",spacing:4});ciInfo0.primaryAxisSizingMode="AUTO";ciInfo0.counterAxisSizingMode="AUTO";
txt(ciInfo0,"Ahmad Valiyev",{style:"Semi Bold",size:13,color:G900});
txt(ciInfo0,"Salom, tariflar haqida savol bor.",{size:12,color:G500});
var ciMeta0=frame(ci0,"Meta",40,48,{layout:"VERTICAL",spacing:4,alignX:"MAX"});ciMeta0.primaryAxisSizingMode="AUTO";ciMeta0.counterAxisSizingMode="AUTO";
txt(ciMeta0,"2m",{size:11,color:G400});
var chPill0=frame(ciMeta0,"Pill",40,18,{color:INFO_L,radius:4,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
chPill0.primaryAxisSizingMode="AUTO";chPill0.counterAxisSizingMode="AUTO";chPill0.paddingLeft=6;chPill0.paddingRight=6;
txt(chPill0,"Web",{size:10,color:INFO});

var ci1=frame(chatList,"Chat Dilnoza R.",320,72,{x:0,y:180,color:WHITE,layout:"HORIZONTAL",padX:16,padY:12,spacing:12,alignX:"CENTER"});
ci1.strokes=[{type:'SOLID',color:G100}];ci1.strokeWeight=1;
var dot1=figma.createEllipse();dot1.resize(8,8);dot1.fills=[{type:'SOLID',color:WARNING}];ci1.appendChild(dot1);
var ciInfo1=frame(ci1,"Info",240,48,{layout:"VERTICAL",spacing:4});ciInfo1.primaryAxisSizingMode="AUTO";ciInfo1.counterAxisSizingMode="AUTO";
txt(ciInfo1,"Dilnoza R.",{style:"Semi Bold",size:13,color:G900});
txt(ciInfo1,"Telegram integratsiyasi ishlamayapti.",{size:12,color:G500});
var ciMeta1=frame(ci1,"Meta",40,48,{layout:"VERTICAL",spacing:4,alignX:"MAX"});ciMeta1.primaryAxisSizingMode="AUTO";ciMeta1.counterAxisSizingMode="AUTO";
txt(ciMeta1,"5m",{size:11,color:G400});
var chPill1=frame(ciMeta1,"Pill",40,18,{color:{r:0.9,g:0.95,b:1},radius:4,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
chPill1.primaryAxisSizingMode="AUTO";chPill1.counterAxisSizingMode="AUTO";chPill1.paddingLeft=6;chPill1.paddingRight=6;
txt(chPill1,"Telegram",{size:10,color:G600});

var ci2=frame(chatList,"Chat Rustam K.",320,72,{x:0,y:252,color:WHITE,layout:"HORIZONTAL",padX:16,padY:12,spacing:12,alignX:"CENTER"});
ci2.strokes=[{type:'SOLID',color:G100}];ci2.strokeWeight=1;
var dot2=figma.createEllipse();dot2.resize(8,8);dot2.fills=[{type:'SOLID',color:G300}];ci2.appendChild(dot2);
var ciInfo2=frame(ci2,"Info",240,48,{layout:"VERTICAL",spacing:4});ciInfo2.primaryAxisSizingMode="AUTO";ciInfo2.counterAxisSizingMode="AUTO";
txt(ciInfo2,"Rustam K.",{style:"Semi Bold",size:13,color:G900});
txt(ciInfo2,"Buyurtma statusini tekshira olasizmi?",{size:12,color:G500});
var ciMeta2=frame(ci2,"Meta",40,48,{layout:"VERTICAL",spacing:4,alignX:"MAX"});ciMeta2.primaryAxisSizingMode="AUTO";ciMeta2.counterAxisSizingMode="AUTO";
txt(ciMeta2,"11m",{size:11,color:G400});
var chPill2=frame(ciMeta2,"Pill",40,18,{color:G100,radius:4,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
chPill2.primaryAxisSizingMode="AUTO";chPill2.counterAxisSizingMode="AUTO";chPill2.paddingLeft=6;chPill2.paddingRight=6;
txt(chPill2,"WhatsApp",{size:10,color:G600});

var ci3=frame(chatList,"Chat Malika O.",320,72,{x:0,y:324,color:WHITE,layout:"HORIZONTAL",padX:16,padY:12,spacing:12,alignX:"CENTER"});
ci3.strokes=[{type:'SOLID',color:G100}];ci3.strokeWeight=1;
var dot3=figma.createEllipse();dot3.resize(8,8);dot3.fills=[{type:'SOLID',color:G300}];ci3.appendChild(dot3);
var ciInfo3=frame(ci3,"Info",240,48,{layout:"VERTICAL",spacing:4});ciInfo3.primaryAxisSizingMode="AUTO";ciInfo3.counterAxisSizingMode="AUTO";
txt(ciInfo3,"Malika O.",{style:"Semi Bold",size:13,color:G900});
txt(ciInfo3,"Rahmat, hammasi tushunarli.",{size:12,color:G500});
var ciMeta3=frame(ci3,"Meta",40,48,{layout:"VERTICAL",spacing:4,alignX:"MAX"});ciMeta3.primaryAxisSizingMode="AUTO";ciMeta3.counterAxisSizingMode="AUTO";
txt(ciMeta3,"32m",{size:11,color:G400});
var chPill3=frame(ciMeta3,"Pill",40,18,{color:G100,radius:4,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
chPill3.primaryAxisSizingMode="AUTO";chPill3.counterAxisSizingMode="AUTO";chPill3.paddingLeft=6;chPill3.paddingRight=6;
txt(chPill3,"Email",{size:10,color:G600});

var ci4=frame(chatList,"Chat Olim E.",320,72,{x:0,y:396,color:WHITE,layout:"HORIZONTAL",padX:16,padY:12,spacing:12,alignX:"CENTER"});
ci4.strokes=[{type:'SOLID',color:G100}];ci4.strokeWeight=1;
var dot4=figma.createEllipse();dot4.resize(8,8);dot4.fills=[{type:'SOLID',color:SUCCESS}];ci4.appendChild(dot4);
var ciInfo4=frame(ci4,"Info",240,48,{layout:"VERTICAL",spacing:4});ciInfo4.primaryAxisSizingMode="AUTO";ciInfo4.counterAxisSizingMode="AUTO";
txt(ciInfo4,"Olim E.",{style:"Semi Bold",size:13,color:G900});
txt(ciInfo4,"Demo sorovi yubordim.",{size:12,color:G500});
var ciMeta4=frame(ci4,"Meta",40,48,{layout:"VERTICAL",spacing:4,alignX:"MAX"});ciMeta4.primaryAxisSizingMode="AUTO";ciMeta4.counterAxisSizingMode="AUTO";
txt(ciMeta4,"1h",{size:11,color:G400});
var chPill4=frame(ciMeta4,"Pill",40,18,{color:INFO_L,radius:4,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
chPill4.primaryAxisSizingMode="AUTO";chPill4.counterAxisSizingMode="AUTO";chPill4.paddingLeft=6;chPill4.paddingRight=6;
txt(chPill4,"Web",{size:10,color:INFO});

var ci5=frame(chatList,"Chat Shaxlo N.",320,72,{x:0,y:468,color:WHITE,layout:"HORIZONTAL",padX:16,padY:12,spacing:12,alignX:"CENTER"});
ci5.strokes=[{type:'SOLID',color:G100}];ci5.strokeWeight=1;
var dot5=figma.createEllipse();dot5.resize(8,8);dot5.fills=[{type:'SOLID',color:WARNING}];ci5.appendChild(dot5);
var ciInfo5=frame(ci5,"Info",240,48,{layout:"VERTICAL",spacing:4});ciInfo5.primaryAxisSizingMode="AUTO";ciInfo5.counterAxisSizingMode="AUTO";
txt(ciInfo5,"Shaxlo N.",{style:"Semi Bold",size:13,color:G900});
txt(ciInfo5,"Widget rangi ozgarmayapti.",{size:12,color:G500});
var ciMeta5=frame(ci5,"Meta",40,48,{layout:"VERTICAL",spacing:4,alignX:"MAX"});ciMeta5.primaryAxisSizingMode="AUTO";ciMeta5.counterAxisSizingMode="AUTO";
txt(ciMeta5,"2h",{size:11,color:G400});
var chPill5=frame(ciMeta5,"Pill",40,18,{color:INFO_L,radius:4,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
chPill5.primaryAxisSizingMode="AUTO";chPill5.counterAxisSizingMode="AUTO";chPill5.paddingLeft=6;chPill5.paddingRight=6;
txt(chPill5,"Web",{size:10,color:INFO});

var ci6=frame(chatList,"Chat Farrux T.",320,72,{x:0,y:540,color:WHITE,layout:"HORIZONTAL",padX:16,padY:12,spacing:12,alignX:"CENTER"});
ci6.strokes=[{type:'SOLID',color:G100}];ci6.strokeWeight=1;
var dot6=figma.createEllipse();dot6.resize(8,8);dot6.fills=[{type:'SOLID',color:G300}];ci6.appendChild(dot6);
var ciInfo6=frame(ci6,"Info",240,48,{layout:"VERTICAL",spacing:4});ciInfo6.primaryAxisSizingMode="AUTO";ciInfo6.counterAxisSizingMode="AUTO";
txt(ciInfo6,"Farrux T.",{style:"Semi Bold",size:13,color:G900});
txt(ciInfo6,"API key haqida savol.",{size:12,color:G500});
var ciMeta6=frame(ci6,"Meta",40,48,{layout:"VERTICAL",spacing:4,alignX:"MAX"});ciMeta6.primaryAxisSizingMode="AUTO";ciMeta6.counterAxisSizingMode="AUTO";
txt(ciMeta6,"3h",{size:11,color:G400});
var chPill6=frame(ciMeta6,"Pill",40,18,{color:INFO_L,radius:4,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
chPill6.primaryAxisSizingMode="AUTO";chPill6.counterAxisSizingMode="AUTO";chPill6.paddingLeft=6;chPill6.paddingRight=6;
txt(chPill6,"Web",{size:10,color:INFO});


// Chat window (540px)
var chatWin=frame(inboxArea,"Chat Window",540,900,{x:320,y:0,color:WHITE,stroke:G200});

// Chat header
var chatHeader=frame(chatWin,"Chat Header",540,60,{x:0,y:0,color:WHITE,layout:"HORIZONTAL",padX:16,alignX:"CENTER",spacing:12});
chatHeader.primaryAxisAlignItems="SPACE_BETWEEN";chatHeader.strokes=[{type:'SOLID',color:G200}];chatHeader.strokeWeight=1;
var chatHLeft=frame(chatHeader,"Left",300,36,{layout:"HORIZONTAL",spacing:10,alignX:"CENTER"});
chatHLeft.primaryAxisSizingMode="AUTO";chatHLeft.counterAxisSizingMode="AUTO";
var avtr=frame(chatHLeft,"Avatar",36,36,{color:PRIMARY,radius:18,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
txt(avtr,"AV",{style:"Bold",size:12,color:WHITE});
var chatHInfo=frame(chatHLeft,"Info",200,36,{layout:"VERTICAL",spacing:2});
chatHInfo.primaryAxisSizingMode="AUTO";chatHInfo.counterAxisSizingMode="AUTO";
txt(chatHInfo,"Ahmad Valiyev",{style:"Semi Bold",size:14,color:G900});
txt(chatHInfo,"Online • Web",{size:12,color:SUCCESS});

// Messages area
var msgArea=frame(chatWin,"Messages",508,700,{x:16,y:70,layout:"VERTICAL",spacing:12});
msgArea.primaryAxisSizingMode="AUTO";

// Sample messages
var m0=frame(msgArea,"Msg Visitor",350,60,{color:G100,radius:12,pad:12});m0.primaryAxisSizingMode="AUTO";m0.counterAxisSizingMode="FIXED";m0.resize(350,10);
txt(m0,"Salom, tariflar haqida savol bor. Pro rejada nechta agent bo'lishi mumkin?",{size:13,color:G900,w:326,wrap:true});

var m1=frame(msgArea,"Msg Agent",350,50,{color:PRIMARY,radius:12,pad:12});m1.primaryAxisSizingMode="AUTO";m1.counterAxisSizingMode="FIXED";m1.resize(350,10);m1.x=160;
txt(m1,"Salom! Pro rejada 10 gacha agent bo'lishi mumkin.",{size:13,color:WHITE,w:326,wrap:true});

var m2=frame(msgArea,"Msg Visitor",300,40,{color:G100,radius:12,pad:12});m2.primaryAxisSizingMode="AUTO";m2.counterAxisSizingMode="FIXED";m2.resize(300,10);
txt(m2,"Narxi qancha bo'ladi oyiga?",{size:13,color:G900,w:276,wrap:true});

var m3=frame(msgArea,"Msg Agent",380,60,{color:PRIMARY,radius:12,pad:12});m3.primaryAxisSizingMode="AUTO";m3.counterAxisSizingMode="FIXED";m3.resize(380,10);m3.x=130;
txt(m3,"Pro reja oyiga $49 turadi. 14 kunlik bepul trial ham bor.",{size:13,color:WHITE,w:356,wrap:true});

// Input bar
var inputBar=frame(chatWin,"Input",508,48,{x:16,y:830,color:WHITE,radius:8,stroke:G300,layout:"HORIZONTAL",padX:14,alignX:"CENTER",spacing:8});
txt(inputBar,"Xabar yozing...",{size:14,color:G400});

// Info panel (320px)
var infoPanel=frame(inboxArea,"Info Panel",320,900,{x:860,y:0,color:WHITE});
infoPanel.strokes=[{type:'SOLID',color:G200}];infoPanel.strokeWeight=1;

// Visitor info
txt(infoPanel,"Mijoz ma'lumotlari",{style:"Semi Bold",size:14,color:G900,x:16,y:16});

var vAvatar=frame(infoPanel,"Avatar Big",60,60,{x:130,y:50,color:PRIMARY,radius:30,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
txt(vAvatar,"AV",{style:"Bold",size:18,color:WHITE});
txt(infoPanel,"Ahmad Valiyev",{style:"Semi Bold",size:16,color:G900,x:90,y:120,align:"CENTER"});
txt(infoPanel,"ahmad@company.uz",{size:13,color:G500,x:85,y:142,align:"CENTER"});

// Info rows

txt(infoPanel,"Kanal",{size:12,color:G500,x:16,y:180});
txt(infoPanel,"Web Chat",{style:"Medium",size:13,color:G900,x:140,y:180});
rect(infoPanel,288,1,G100,{x:16,y:200});

txt(infoPanel,"Davlat",{size:12,color:G500,x:16,y:216});
txt(infoPanel,"O'zbekiston",{style:"Medium",size:13,color:G900,x:140,y:216});
rect(infoPanel,288,1,G100,{x:16,y:236});

txt(infoPanel,"Brauzer",{size:12,color:G500,x:16,y:252});
txt(infoPanel,"Chrome 120",{style:"Medium",size:13,color:G900,x:140,y:252});
rect(infoPanel,288,1,G100,{x:16,y:272});

txt(infoPanel,"Sahifa",{size:12,color:G500,x:16,y:288});
txt(infoPanel,"/pricing",{style:"Medium",size:13,color:G900,x:140,y:288});
rect(infoPanel,288,1,G100,{x:16,y:308});

txt(infoPanel,"Birinchi tashrif",{size:12,color:G500,x:16,y:324});
txt(infoPanel,"2026-02-20",{style:"Medium",size:13,color:G900,x:140,y:324});
rect(infoPanel,288,1,G100,{x:16,y:344});

txt(infoPanel,"Jami chatlar",{size:12,color:G500,x:16,y:360});
txt(infoPanel,"5",{style:"Medium",size:13,color:G900,x:140,y:360});
rect(infoPanel,288,1,G100,{x:16,y:380});


figma.currentPage.appendChild(screen);

// TEAM CHAT / Room Settings
var screen=figma.createFrame();
screen.name="02-room-settings - Room Settings";
screen.resize(1440,900);
screen.fills=[{type:'SOLID',color:BG}];
screen.x=1560;screen.y=16800;


  // ═══ SIDEBAR ═══
  var sidebar=frame(screen,"Sidebar",260,900,{x:0,y:0,color:SIDEBAR_BG});
  
  // Logo
  var sLogo=frame(sidebar,"Logo",220,40,{x:20,y:20,color:PRIMARY,radius:8,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  txt(sLogo,"QULAY CHAT",{style:"Bold",size:13,color:WHITE});
  
  // Nav: Dashboard
  var nav0=frame(sidebar,"Nav Dashboard",240,36,{x:10,y:80,color:{r:0,g:0,b:0} ,radius:8,color:{r:17/255,g:24/255,b:39/255}});
  nav0.fills=[];
  txt(nav0,"Dashboard",{style:"Medium",size:13,color:SIDEBAR_TEXT,x:36,y:9});
  // Nav: Inbox
  var nav1=frame(sidebar,"Nav Inbox",240,36,{x:10,y:120,color:{r:0,g:0,b:0} ,radius:8,color:{r:17/255,g:24/255,b:39/255}});
  nav1.fills=[];
  txt(nav1,"Inbox",{style:"Medium",size:13,color:SIDEBAR_TEXT,x:36,y:9});
  // Nav: Contacts
  var nav2=frame(sidebar,"Nav Contacts",240,36,{x:10,y:160,color:{r:0,g:0,b:0} ,radius:8,color:{r:17/255,g:24/255,b:39/255}});
  nav2.fills=[];
  txt(nav2,"Contacts",{style:"Medium",size:13,color:SIDEBAR_TEXT,x:36,y:9});
  // Nav: Visitors
  var nav3=frame(sidebar,"Nav Visitors",240,36,{x:10,y:200,color:{r:0,g:0,b:0} ,radius:8,color:{r:17/255,g:24/255,b:39/255}});
  nav3.fills=[];
  txt(nav3,"Visitors",{style:"Medium",size:13,color:SIDEBAR_TEXT,x:36,y:9});
  // Nav: Automation
  var nav4=frame(sidebar,"Nav Automation",240,36,{x:10,y:240,color:{r:0,g:0,b:0} ,radius:8,color:{r:17/255,g:24/255,b:39/255}});
  nav4.fills=[];
  txt(nav4,"Automation",{style:"Medium",size:13,color:SIDEBAR_TEXT,x:36,y:9});
  // Nav: Team
  var nav5=frame(sidebar,"Nav Team",240,36,{x:10,y:280,color:{r:0,g:0,b:0} ,radius:8,color:{r:17/255,g:24/255,b:39/255}});
  nav5.fills=[];
  txt(nav5,"Team",{style:"Medium",size:13,color:SIDEBAR_TEXT,x:36,y:9});
  // Nav: Team Chat
  var nav6=frame(sidebar,"Nav Team Chat",240,36,{x:10,y:320,color:PRIMARY ,radius:8});
  
  txt(nav6,"Team Chat",{style:"Medium",size:13,color:WHITE,x:36,y:9});
  // Nav: Analytics
  var nav7=frame(sidebar,"Nav Analytics",240,36,{x:10,y:360,color:{r:0,g:0,b:0} ,radius:8,color:{r:17/255,g:24/255,b:39/255}});
  nav7.fills=[];
  txt(nav7,"Analytics",{style:"Medium",size:13,color:SIDEBAR_TEXT,x:36,y:9});
  // Nav: Knowledge Base
  var nav8=frame(sidebar,"Nav Knowledge Base",240,36,{x:10,y:400,color:{r:0,g:0,b:0} ,radius:8,color:{r:17/255,g:24/255,b:39/255}});
  nav8.fills=[];
  txt(nav8,"Knowledge Base",{style:"Medium",size:13,color:SIDEBAR_TEXT,x:36,y:9});
  // Nav: Addons
  var nav9=frame(sidebar,"Nav Addons",240,36,{x:10,y:440,color:{r:0,g:0,b:0} ,radius:8,color:{r:17/255,g:24/255,b:39/255}});
  nav9.fills=[];
  txt(nav9,"Addons",{style:"Medium",size:13,color:SIDEBAR_TEXT,x:36,y:9});
  // Nav: Developer
  var nav10=frame(sidebar,"Nav Developer",240,36,{x:10,y:480,color:{r:0,g:0,b:0} ,radius:8,color:{r:17/255,g:24/255,b:39/255}});
  nav10.fills=[];
  txt(nav10,"Developer",{style:"Medium",size:13,color:SIDEBAR_TEXT,x:36,y:9});
  // Nav: Settings
  var nav11=frame(sidebar,"Nav Settings",240,36,{x:10,y:520,color:{r:0,g:0,b:0} ,radius:8,color:{r:17/255,g:24/255,b:39/255}});
  nav11.fills=[];
  txt(nav11,"Settings",{style:"Medium",size:13,color:SIDEBAR_TEXT,x:36,y:9});
  // Nav: Billing
  var nav12=frame(sidebar,"Nav Billing",240,36,{x:10,y:560,color:{r:0,g:0,b:0} ,radius:8,color:{r:17/255,g:24/255,b:39/255}});
  nav12.fills=[];
  txt(nav12,"Billing",{style:"Medium",size:13,color:SIDEBAR_TEXT,x:36,y:9});
  

// Content area
var content=frame(screen,"Content",1180,900,{x:260,y:0,color:BG,layout:"VERTICAL",spacing:0});


  // ═══ HEADER ═══
  var header=frame(content,"Header",1180,56,{color:WHITE,layout:"HORIZONTAL",alignX:"CENTER",padX:24});
  header.primaryAxisAlignItems="SPACE_BETWEEN";header.counterAxisAlignItems="CENTER";
  var headerLeft=frame(header,"Header Left",400,40,{layout:"VERTICAL",spacing:2});
  headerLeft.primaryAxisSizingMode="AUTO";headerLeft.counterAxisSizingMode="AUTO";
  txt(headerLeft,"Room Settings",{style:"Semi Bold",size:20,color:G900});
  txt(headerLeft,"Xona sozlamalari",{size:13,color:G500});
  var headerActions=frame(header,"Actions",300,36,{layout:"HORIZONTAL",spacing:8});
  headerActions.primaryAxisSizingMode="AUTO";headerActions.counterAxisSizingMode="AUTO";
  headerActions.primaryAxisAlignItems="MAX";
  
  var hBtn0=frame(headerActions,"Btn Saqlash",95,36,{color:PRIMARY,radius:8,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  txt(hBtn0,"Saqlash",{style:"Medium",size:13,color:WHITE});
  


  // Subnav
  var subnavWrap=frame(content,"Subnav Wrap",1180,44,{color:WHITE,padX:24,padY:4});
  subnavWrap.strokes=[{type:'SOLID',color:G200}];subnavWrap.strokeWeight=1;
  subnavWrap.strokeAlign="INSIDE";subnavWrap.strokesIncludedInLayout=false;
  var subnav=frame(subnavWrap,"Subnav",1132,36,{layout:"HORIZONTAL",spacing:4});
  subnav.primaryAxisSizingMode="AUTO";subnav.counterAxisSizingMode="AUTO";
  
  var sTab0=frame(subnav,"Tab Team Chat",96,36,{color:PRIMARY_LIGHT,radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  
  txt(sTab0,"Team Chat",{style:"Medium",size:13,color:PRIMARY});
  var sTab1=frame(subnav,"Tab Room Settings",128,36,{color:{r:0,g:0,b:0},radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  sTab1.fills=[];
  txt(sTab1,"Room Settings",{style:"Medium",size:13,color:G600});
  var sTab2=frame(subnav,"Tab Notifications",128,36,{color:{r:0,g:0,b:0},radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  sTab2.fills=[];
  txt(sTab2,"Notifications",{style:"Medium",size:13,color:G600});
  



// Spacer
var contentSpacer=frame(content,"Spacer",1180,16);contentSpacer.fills=[];


  // Card: Room Settings ma'lumotlari
  var card0=frame(content,"Card Room Settings ma'lumotlari",1132,200,{x:24,color:WHITE,radius:12,layout:"VERTICAL",stroke:G200,shadow:true});
  card0.primaryAxisSizingMode="AUTO";
  var cardH0=frame(card0,"Card Header",1132,48,{color:WHITE,layout:"HORIZONTAL",padX:20,padY:14,alignX:"CENTER"});
  cardH0.primaryAxisAlignItems="SPACE_BETWEEN";cardH0.layoutSizingHorizontal="FILL";
  txt(cardH0,"Room Settings ma'lumotlari",{style:"Semi Bold",size:15,color:G900});
  var cardB0=frame(card0,"Card Body",1132,150,{padX:20,padY:16});
  cardB0.layoutSizingHorizontal="FILL";cardB0.primaryAxisSizingMode="AUTO";cardB0.layoutMode="VERTICAL";cardB0.itemSpacing=8;
  
  txt(cardB0,"Bu sahifada Room Settings bo'limining asosiy kontenti joylashadi.",{size:14,color:G600,w:600,wrap:true});
  txt(cardB0,"HTML sahifa: html/team-chat/02-room-settings.html",{size:12,color:G400,w:600});

  rect(card0,1132,1,G200,{});
  

// Second card
var card1=frame(content,"Card Details",1132,180,{x:24,color:WHITE,radius:12,layout:"VERTICAL",stroke:G200,shadow:true});
card1.primaryAxisSizingMode="AUTO";
var cardH1=frame(card1,"Card Header",1132,48,{color:WHITE,layout:"HORIZONTAL",padX:20,padY:14,alignX:"CENTER"});
cardH1.layoutSizingHorizontal="FILL";
txt(cardH1,"Batafsil ma'lumot",{style:"Semi Bold",size:15,color:G900});
var cardB1=frame(card1,"Card Body",1132,120,{padX:20,padY:16});
cardB1.layoutSizingHorizontal="FILL";cardB1.primaryAxisSizingMode="AUTO";cardB1.layoutMode="VERTICAL";cardB1.itemSpacing=4;

// Sample table headers
var tHead=frame(cardB1,"Table Header",1092,36,{color:G50,radius:4,layout:"HORIZONTAL",padX:16,alignX:"CENTER"});
tHead.layoutSizingHorizontal="FILL";
txt(tHead,"Nomi",{style:"Medium",size:12,color:G500,x:0,y:0});
txt(tHead,"Status",{style:"Medium",size:12,color:G500,x:220,y:0});
txt(tHead,"Sana",{style:"Medium",size:12,color:G500,x:440,y:0});
txt(tHead,"Amallar",{style:"Medium",size:12,color:G500,x:660,y:0});

// Sample rows
var tRow0=frame(cardB1,"Row 1",1092,36,{layout:"HORIZONTAL",padX:16,alignX:"CENTER"});
tRow0.layoutSizingHorizontal="FILL";
txt(tRow0,"Element 1",{size:13,color:G900,x:0,y:0});
txt(tRow0,"Faol",{size:13,color:SUCCESS,x:220,y:0});
txt(tRow0,"2026-02-27",{size:13,color:G500,x:440,y:0});
txt(tRow0,"Tahrirlash",{size:13,color:PRIMARY,x:660,y:0});

var tRow1=frame(cardB1,"Row 2",1092,36,{color:G50,layout:"HORIZONTAL",padX:16,alignX:"CENTER"});
tRow1.layoutSizingHorizontal="FILL";
txt(tRow1,"Element 2",{size:13,color:G900,x:0,y:0});
txt(tRow1,"Nofaol",{size:13,color:DANGER,x:220,y:0});
txt(tRow1,"2026-02-25",{size:13,color:G500,x:440,y:0});
txt(tRow1,"Tahrirlash",{size:13,color:PRIMARY,x:660,y:0});

var tRow2=frame(cardB1,"Row 3",1092,36,{layout:"HORIZONTAL",padX:16,alignX:"CENTER"});
tRow2.layoutSizingHorizontal="FILL";
txt(tRow2,"Element 3",{size:13,color:G900,x:0,y:0});
txt(tRow2,"Faol",{size:13,color:SUCCESS,x:220,y:0});
txt(tRow2,"2026-02-20",{size:13,color:G500,x:440,y:0});
txt(tRow2,"Tahrirlash",{size:13,color:PRIMARY,x:660,y:0});

figma.currentPage.appendChild(screen);

// TEAM CHAT / Notifications
var screen=figma.createFrame();
screen.name="03-notifications - Notifications";
screen.resize(1440,900);
screen.fills=[{type:'SOLID',color:BG}];
screen.x=3120;screen.y=16800;


  // ═══ SIDEBAR ═══
  var sidebar=frame(screen,"Sidebar",260,900,{x:0,y:0,color:SIDEBAR_BG});
  
  // Logo
  var sLogo=frame(sidebar,"Logo",220,40,{x:20,y:20,color:PRIMARY,radius:8,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  txt(sLogo,"QULAY CHAT",{style:"Bold",size:13,color:WHITE});
  
  // Nav: Dashboard
  var nav0=frame(sidebar,"Nav Dashboard",240,36,{x:10,y:80,color:{r:0,g:0,b:0} ,radius:8,color:{r:17/255,g:24/255,b:39/255}});
  nav0.fills=[];
  txt(nav0,"Dashboard",{style:"Medium",size:13,color:SIDEBAR_TEXT,x:36,y:9});
  // Nav: Inbox
  var nav1=frame(sidebar,"Nav Inbox",240,36,{x:10,y:120,color:{r:0,g:0,b:0} ,radius:8,color:{r:17/255,g:24/255,b:39/255}});
  nav1.fills=[];
  txt(nav1,"Inbox",{style:"Medium",size:13,color:SIDEBAR_TEXT,x:36,y:9});
  // Nav: Contacts
  var nav2=frame(sidebar,"Nav Contacts",240,36,{x:10,y:160,color:{r:0,g:0,b:0} ,radius:8,color:{r:17/255,g:24/255,b:39/255}});
  nav2.fills=[];
  txt(nav2,"Contacts",{style:"Medium",size:13,color:SIDEBAR_TEXT,x:36,y:9});
  // Nav: Visitors
  var nav3=frame(sidebar,"Nav Visitors",240,36,{x:10,y:200,color:{r:0,g:0,b:0} ,radius:8,color:{r:17/255,g:24/255,b:39/255}});
  nav3.fills=[];
  txt(nav3,"Visitors",{style:"Medium",size:13,color:SIDEBAR_TEXT,x:36,y:9});
  // Nav: Automation
  var nav4=frame(sidebar,"Nav Automation",240,36,{x:10,y:240,color:{r:0,g:0,b:0} ,radius:8,color:{r:17/255,g:24/255,b:39/255}});
  nav4.fills=[];
  txt(nav4,"Automation",{style:"Medium",size:13,color:SIDEBAR_TEXT,x:36,y:9});
  // Nav: Team
  var nav5=frame(sidebar,"Nav Team",240,36,{x:10,y:280,color:{r:0,g:0,b:0} ,radius:8,color:{r:17/255,g:24/255,b:39/255}});
  nav5.fills=[];
  txt(nav5,"Team",{style:"Medium",size:13,color:SIDEBAR_TEXT,x:36,y:9});
  // Nav: Team Chat
  var nav6=frame(sidebar,"Nav Team Chat",240,36,{x:10,y:320,color:PRIMARY ,radius:8});
  
  txt(nav6,"Team Chat",{style:"Medium",size:13,color:WHITE,x:36,y:9});
  // Nav: Analytics
  var nav7=frame(sidebar,"Nav Analytics",240,36,{x:10,y:360,color:{r:0,g:0,b:0} ,radius:8,color:{r:17/255,g:24/255,b:39/255}});
  nav7.fills=[];
  txt(nav7,"Analytics",{style:"Medium",size:13,color:SIDEBAR_TEXT,x:36,y:9});
  // Nav: Knowledge Base
  var nav8=frame(sidebar,"Nav Knowledge Base",240,36,{x:10,y:400,color:{r:0,g:0,b:0} ,radius:8,color:{r:17/255,g:24/255,b:39/255}});
  nav8.fills=[];
  txt(nav8,"Knowledge Base",{style:"Medium",size:13,color:SIDEBAR_TEXT,x:36,y:9});
  // Nav: Addons
  var nav9=frame(sidebar,"Nav Addons",240,36,{x:10,y:440,color:{r:0,g:0,b:0} ,radius:8,color:{r:17/255,g:24/255,b:39/255}});
  nav9.fills=[];
  txt(nav9,"Addons",{style:"Medium",size:13,color:SIDEBAR_TEXT,x:36,y:9});
  // Nav: Developer
  var nav10=frame(sidebar,"Nav Developer",240,36,{x:10,y:480,color:{r:0,g:0,b:0} ,radius:8,color:{r:17/255,g:24/255,b:39/255}});
  nav10.fills=[];
  txt(nav10,"Developer",{style:"Medium",size:13,color:SIDEBAR_TEXT,x:36,y:9});
  // Nav: Settings
  var nav11=frame(sidebar,"Nav Settings",240,36,{x:10,y:520,color:{r:0,g:0,b:0} ,radius:8,color:{r:17/255,g:24/255,b:39/255}});
  nav11.fills=[];
  txt(nav11,"Settings",{style:"Medium",size:13,color:SIDEBAR_TEXT,x:36,y:9});
  // Nav: Billing
  var nav12=frame(sidebar,"Nav Billing",240,36,{x:10,y:560,color:{r:0,g:0,b:0} ,radius:8,color:{r:17/255,g:24/255,b:39/255}});
  nav12.fills=[];
  txt(nav12,"Billing",{style:"Medium",size:13,color:SIDEBAR_TEXT,x:36,y:9});
  

// Content area
var content=frame(screen,"Content",1180,900,{x:260,y:0,color:BG,layout:"VERTICAL",spacing:0});


  // ═══ HEADER ═══
  var header=frame(content,"Header",1180,56,{color:WHITE,layout:"HORIZONTAL",alignX:"CENTER",padX:24});
  header.primaryAxisAlignItems="SPACE_BETWEEN";header.counterAxisAlignItems="CENTER";
  var headerLeft=frame(header,"Header Left",400,40,{layout:"VERTICAL",spacing:2});
  headerLeft.primaryAxisSizingMode="AUTO";headerLeft.counterAxisSizingMode="AUTO";
  txt(headerLeft,"Notifications",{style:"Semi Bold",size:20,color:G900});
  txt(headerLeft,"Chat bildirishnomalari",{size:13,color:G500});
  var headerActions=frame(header,"Actions",300,36,{layout:"HORIZONTAL",spacing:8});
  headerActions.primaryAxisSizingMode="AUTO";headerActions.counterAxisSizingMode="AUTO";
  headerActions.primaryAxisAlignItems="MAX";
  
  var hBtn0=frame(headerActions,"Btn Saqlash",95,36,{color:PRIMARY,radius:8,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  txt(hBtn0,"Saqlash",{style:"Medium",size:13,color:WHITE});
  


  // Subnav
  var subnavWrap=frame(content,"Subnav Wrap",1180,44,{color:WHITE,padX:24,padY:4});
  subnavWrap.strokes=[{type:'SOLID',color:G200}];subnavWrap.strokeWeight=1;
  subnavWrap.strokeAlign="INSIDE";subnavWrap.strokesIncludedInLayout=false;
  var subnav=frame(subnavWrap,"Subnav",1132,36,{layout:"HORIZONTAL",spacing:4});
  subnav.primaryAxisSizingMode="AUTO";subnav.counterAxisSizingMode="AUTO";
  
  var sTab0=frame(subnav,"Tab Team Chat",96,36,{color:PRIMARY_LIGHT,radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  
  txt(sTab0,"Team Chat",{style:"Medium",size:13,color:PRIMARY});
  var sTab1=frame(subnav,"Tab Room Settings",128,36,{color:{r:0,g:0,b:0},radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  sTab1.fills=[];
  txt(sTab1,"Room Settings",{style:"Medium",size:13,color:G600});
  var sTab2=frame(subnav,"Tab Notifications",128,36,{color:{r:0,g:0,b:0},radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  sTab2.fills=[];
  txt(sTab2,"Notifications",{style:"Medium",size:13,color:G600});
  



// Spacer
var contentSpacer=frame(content,"Spacer",1180,16);contentSpacer.fills=[];


  // Card: Notifications ma'lumotlari
  var card0=frame(content,"Card Notifications ma'lumotlari",1132,200,{x:24,color:WHITE,radius:12,layout:"VERTICAL",stroke:G200,shadow:true});
  card0.primaryAxisSizingMode="AUTO";
  var cardH0=frame(card0,"Card Header",1132,48,{color:WHITE,layout:"HORIZONTAL",padX:20,padY:14,alignX:"CENTER"});
  cardH0.primaryAxisAlignItems="SPACE_BETWEEN";cardH0.layoutSizingHorizontal="FILL";
  txt(cardH0,"Notifications ma'lumotlari",{style:"Semi Bold",size:15,color:G900});
  var cardB0=frame(card0,"Card Body",1132,150,{padX:20,padY:16});
  cardB0.layoutSizingHorizontal="FILL";cardB0.primaryAxisSizingMode="AUTO";cardB0.layoutMode="VERTICAL";cardB0.itemSpacing=8;
  
  txt(cardB0,"Bu sahifada Notifications bo'limining asosiy kontenti joylashadi.",{size:14,color:G600,w:600,wrap:true});
  txt(cardB0,"HTML sahifa: html/team-chat/03-notifications.html",{size:12,color:G400,w:600});

  rect(card0,1132,1,G200,{});
  

// Second card
var card1=frame(content,"Card Details",1132,180,{x:24,color:WHITE,radius:12,layout:"VERTICAL",stroke:G200,shadow:true});
card1.primaryAxisSizingMode="AUTO";
var cardH1=frame(card1,"Card Header",1132,48,{color:WHITE,layout:"HORIZONTAL",padX:20,padY:14,alignX:"CENTER"});
cardH1.layoutSizingHorizontal="FILL";
txt(cardH1,"Batafsil ma'lumot",{style:"Semi Bold",size:15,color:G900});
var cardB1=frame(card1,"Card Body",1132,120,{padX:20,padY:16});
cardB1.layoutSizingHorizontal="FILL";cardB1.primaryAxisSizingMode="AUTO";cardB1.layoutMode="VERTICAL";cardB1.itemSpacing=4;

// Sample table headers
var tHead=frame(cardB1,"Table Header",1092,36,{color:G50,radius:4,layout:"HORIZONTAL",padX:16,alignX:"CENTER"});
tHead.layoutSizingHorizontal="FILL";
txt(tHead,"Nomi",{style:"Medium",size:12,color:G500,x:0,y:0});
txt(tHead,"Status",{style:"Medium",size:12,color:G500,x:220,y:0});
txt(tHead,"Sana",{style:"Medium",size:12,color:G500,x:440,y:0});
txt(tHead,"Amallar",{style:"Medium",size:12,color:G500,x:660,y:0});

// Sample rows
var tRow0=frame(cardB1,"Row 1",1092,36,{layout:"HORIZONTAL",padX:16,alignX:"CENTER"});
tRow0.layoutSizingHorizontal="FILL";
txt(tRow0,"Element 1",{size:13,color:G900,x:0,y:0});
txt(tRow0,"Faol",{size:13,color:SUCCESS,x:220,y:0});
txt(tRow0,"2026-02-27",{size:13,color:G500,x:440,y:0});
txt(tRow0,"Tahrirlash",{size:13,color:PRIMARY,x:660,y:0});

var tRow1=frame(cardB1,"Row 2",1092,36,{color:G50,layout:"HORIZONTAL",padX:16,alignX:"CENTER"});
tRow1.layoutSizingHorizontal="FILL";
txt(tRow1,"Element 2",{size:13,color:G900,x:0,y:0});
txt(tRow1,"Nofaol",{size:13,color:DANGER,x:220,y:0});
txt(tRow1,"2026-02-25",{size:13,color:G500,x:440,y:0});
txt(tRow1,"Tahrirlash",{size:13,color:PRIMARY,x:660,y:0});

var tRow2=frame(cardB1,"Row 3",1092,36,{layout:"HORIZONTAL",padX:16,alignX:"CENTER"});
tRow2.layoutSizingHorizontal="FILL";
txt(tRow2,"Element 3",{size:13,color:G900,x:0,y:0});
txt(tRow2,"Faol",{size:13,color:SUCCESS,x:220,y:0});
txt(tRow2,"2026-02-20",{size:13,color:G500,x:440,y:0});
txt(tRow2,"Tahrirlash",{size:13,color:PRIMARY,x:660,y:0});

figma.currentPage.appendChild(screen);

return {success:true, section:"TEAM CHAT", screens:3};
