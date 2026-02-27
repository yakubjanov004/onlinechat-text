
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
// SECTION: KNOWLEDGE BASE (9 screens)
// ═══════════════════════════════════════════

// Section label
var sLabel=figma.createFrame();
sLabel.name="— KNOWLEDGE BASE —";
sLabel.resize(13920, 60);
sLabel.fills=[{type:'SOLID',color:{r:0,g:0,b:0}}];
sLabel.cornerRadius=8;
sLabel.x=0;sLabel.y=17920;
sLabel.layoutMode="HORIZONTAL";sLabel.primaryAxisAlignItems="CENTER";sLabel.counterAxisAlignItems="CENTER";
var slTxt=figma.createText();
slTxt.fontName={family:"Inter",style:"Bold"};
slTxt.characters="KNOWLEDGE BASE (9)";
slTxt.fontSize=20;
slTxt.fills=[{type:'SOLID',color:{r:1,g:1,b:1}}];
sLabel.appendChild(slTxt);
figma.currentPage.appendChild(sLabel);

// KNOWLEDGE BASE / KB Dashboard
var screen=figma.createFrame();
screen.name="01-kb-dashboard - KB Dashboard";
screen.resize(1440,900);
screen.fills=[{type:'SOLID',color:BG}];
screen.x=0;screen.y=18000;


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
  var nav6=frame(sidebar,"Nav Team Chat",240,36,{x:10,y:320,color:{r:0,g:0,b:0} ,radius:8,color:{r:17/255,g:24/255,b:39/255}});
  nav6.fills=[];
  txt(nav6,"Team Chat",{style:"Medium",size:13,color:SIDEBAR_TEXT,x:36,y:9});
  // Nav: Analytics
  var nav7=frame(sidebar,"Nav Analytics",240,36,{x:10,y:360,color:{r:0,g:0,b:0} ,radius:8,color:{r:17/255,g:24/255,b:39/255}});
  nav7.fills=[];
  txt(nav7,"Analytics",{style:"Medium",size:13,color:SIDEBAR_TEXT,x:36,y:9});
  // Nav: Knowledge Base
  var nav8=frame(sidebar,"Nav Knowledge Base",240,36,{x:10,y:400,color:PRIMARY ,radius:8});
  
  txt(nav8,"Knowledge Base",{style:"Medium",size:13,color:WHITE,x:36,y:9});
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
  txt(headerLeft,"KB Dashboard",{style:"Semi Bold",size:20,color:G900});
  txt(headerLeft,"Bilim bazasi boshqaruvi",{size:13,color:G500});
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
  
  var sTab0=frame(subnav,"Tab Dashboard",96,36,{color:PRIMARY_LIGHT,radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  
  txt(sTab0,"Dashboard",{style:"Medium",size:13,color:PRIMARY});
  var sTab1=frame(subnav,"Tab Article Editor",136,36,{color:{r:0,g:0,b:0},radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  sTab1.fills=[];
  txt(sTab1,"Article Editor",{style:"Medium",size:13,color:G600});
  var sTab2=frame(subnav,"Tab Categories",104,36,{color:{r:0,g:0,b:0},radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  sTab2.fills=[];
  txt(sTab2,"Categories",{style:"Medium",size:13,color:G600});
  var sTab3=frame(subnav,"Tab KB Settings",112,36,{color:{r:0,g:0,b:0},radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  sTab3.fills=[];
  txt(sTab3,"KB Settings",{style:"Medium",size:13,color:G600});
  var sTab4=frame(subnav,"Tab KB Analytics",120,36,{color:{r:0,g:0,b:0},radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  sTab4.fills=[];
  txt(sTab4,"KB Analytics",{style:"Medium",size:13,color:G600});
  



// Spacer
var contentSpacer=frame(content,"Spacer",1180,16);contentSpacer.fills=[];


  // Card: KB Dashboard ma'lumotlari
  var card0=frame(content,"Card KB Dashboard ma'lumotlari",1132,200,{x:24,color:WHITE,radius:12,layout:"VERTICAL",stroke:G200,shadow:true});
  card0.primaryAxisSizingMode="AUTO";
  var cardH0=frame(card0,"Card Header",1132,48,{color:WHITE,layout:"HORIZONTAL",padX:20,padY:14,alignX:"CENTER"});
  cardH0.primaryAxisAlignItems="SPACE_BETWEEN";cardH0.layoutSizingHorizontal="FILL";
  txt(cardH0,"KB Dashboard ma'lumotlari",{style:"Semi Bold",size:15,color:G900});
  var cardB0=frame(card0,"Card Body",1132,150,{padX:20,padY:16});
  cardB0.layoutSizingHorizontal="FILL";cardB0.primaryAxisSizingMode="AUTO";cardB0.layoutMode="VERTICAL";cardB0.itemSpacing=8;
  
  txt(cardB0,"Bu sahifada KB Dashboard bo'limining asosiy kontenti joylashadi.",{size:14,color:G600,w:600,wrap:true});
  txt(cardB0,"HTML sahifa: html/knowledge-base/01-kb-dashboard.html",{size:12,color:G400,w:600});

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

// KNOWLEDGE BASE / Article Editor
var screen=figma.createFrame();
screen.name="02-article-editor - Article Editor";
screen.resize(1440,900);
screen.fills=[{type:'SOLID',color:BG}];
screen.x=1560;screen.y=18000;


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
  var nav6=frame(sidebar,"Nav Team Chat",240,36,{x:10,y:320,color:{r:0,g:0,b:0} ,radius:8,color:{r:17/255,g:24/255,b:39/255}});
  nav6.fills=[];
  txt(nav6,"Team Chat",{style:"Medium",size:13,color:SIDEBAR_TEXT,x:36,y:9});
  // Nav: Analytics
  var nav7=frame(sidebar,"Nav Analytics",240,36,{x:10,y:360,color:{r:0,g:0,b:0} ,radius:8,color:{r:17/255,g:24/255,b:39/255}});
  nav7.fills=[];
  txt(nav7,"Analytics",{style:"Medium",size:13,color:SIDEBAR_TEXT,x:36,y:9});
  // Nav: Knowledge Base
  var nav8=frame(sidebar,"Nav Knowledge Base",240,36,{x:10,y:400,color:PRIMARY ,radius:8});
  
  txt(nav8,"Knowledge Base",{style:"Medium",size:13,color:WHITE,x:36,y:9});
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
  txt(headerLeft,"Article Editor",{style:"Semi Bold",size:20,color:G900});
  txt(headerLeft,"Maqola tahrirlash",{size:13,color:G500});
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
  
  var sTab0=frame(subnav,"Tab Dashboard",96,36,{color:PRIMARY_LIGHT,radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  
  txt(sTab0,"Dashboard",{style:"Medium",size:13,color:PRIMARY});
  var sTab1=frame(subnav,"Tab Article Editor",136,36,{color:{r:0,g:0,b:0},radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  sTab1.fills=[];
  txt(sTab1,"Article Editor",{style:"Medium",size:13,color:G600});
  var sTab2=frame(subnav,"Tab Categories",104,36,{color:{r:0,g:0,b:0},radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  sTab2.fills=[];
  txt(sTab2,"Categories",{style:"Medium",size:13,color:G600});
  var sTab3=frame(subnav,"Tab KB Settings",112,36,{color:{r:0,g:0,b:0},radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  sTab3.fills=[];
  txt(sTab3,"KB Settings",{style:"Medium",size:13,color:G600});
  var sTab4=frame(subnav,"Tab KB Analytics",120,36,{color:{r:0,g:0,b:0},radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  sTab4.fills=[];
  txt(sTab4,"KB Analytics",{style:"Medium",size:13,color:G600});
  



// Spacer
var contentSpacer=frame(content,"Spacer",1180,16);contentSpacer.fills=[];


  // Card: Article Editor ma'lumotlari
  var card0=frame(content,"Card Article Editor ma'lumotlari",1132,200,{x:24,color:WHITE,radius:12,layout:"VERTICAL",stroke:G200,shadow:true});
  card0.primaryAxisSizingMode="AUTO";
  var cardH0=frame(card0,"Card Header",1132,48,{color:WHITE,layout:"HORIZONTAL",padX:20,padY:14,alignX:"CENTER"});
  cardH0.primaryAxisAlignItems="SPACE_BETWEEN";cardH0.layoutSizingHorizontal="FILL";
  txt(cardH0,"Article Editor ma'lumotlari",{style:"Semi Bold",size:15,color:G900});
  var cardB0=frame(card0,"Card Body",1132,150,{padX:20,padY:16});
  cardB0.layoutSizingHorizontal="FILL";cardB0.primaryAxisSizingMode="AUTO";cardB0.layoutMode="VERTICAL";cardB0.itemSpacing=8;
  
  txt(cardB0,"Bu sahifada Article Editor bo'limining asosiy kontenti joylashadi.",{size:14,color:G600,w:600,wrap:true});
  txt(cardB0,"HTML sahifa: html/knowledge-base/02-article-editor.html",{size:12,color:G400,w:600});

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

// KNOWLEDGE BASE / Categories
var screen=figma.createFrame();
screen.name="03-categories - Categories";
screen.resize(1440,900);
screen.fills=[{type:'SOLID',color:BG}];
screen.x=3120;screen.y=18000;


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
  var nav6=frame(sidebar,"Nav Team Chat",240,36,{x:10,y:320,color:{r:0,g:0,b:0} ,radius:8,color:{r:17/255,g:24/255,b:39/255}});
  nav6.fills=[];
  txt(nav6,"Team Chat",{style:"Medium",size:13,color:SIDEBAR_TEXT,x:36,y:9});
  // Nav: Analytics
  var nav7=frame(sidebar,"Nav Analytics",240,36,{x:10,y:360,color:{r:0,g:0,b:0} ,radius:8,color:{r:17/255,g:24/255,b:39/255}});
  nav7.fills=[];
  txt(nav7,"Analytics",{style:"Medium",size:13,color:SIDEBAR_TEXT,x:36,y:9});
  // Nav: Knowledge Base
  var nav8=frame(sidebar,"Nav Knowledge Base",240,36,{x:10,y:400,color:PRIMARY ,radius:8});
  
  txt(nav8,"Knowledge Base",{style:"Medium",size:13,color:WHITE,x:36,y:9});
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
  txt(headerLeft,"Categories",{style:"Semi Bold",size:20,color:G900});
  txt(headerLeft,"Kategoriyalar",{size:13,color:G500});
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
  
  var sTab0=frame(subnav,"Tab Dashboard",96,36,{color:PRIMARY_LIGHT,radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  
  txt(sTab0,"Dashboard",{style:"Medium",size:13,color:PRIMARY});
  var sTab1=frame(subnav,"Tab Article Editor",136,36,{color:{r:0,g:0,b:0},radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  sTab1.fills=[];
  txt(sTab1,"Article Editor",{style:"Medium",size:13,color:G600});
  var sTab2=frame(subnav,"Tab Categories",104,36,{color:{r:0,g:0,b:0},radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  sTab2.fills=[];
  txt(sTab2,"Categories",{style:"Medium",size:13,color:G600});
  var sTab3=frame(subnav,"Tab KB Settings",112,36,{color:{r:0,g:0,b:0},radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  sTab3.fills=[];
  txt(sTab3,"KB Settings",{style:"Medium",size:13,color:G600});
  var sTab4=frame(subnav,"Tab KB Analytics",120,36,{color:{r:0,g:0,b:0},radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  sTab4.fills=[];
  txt(sTab4,"KB Analytics",{style:"Medium",size:13,color:G600});
  



// Spacer
var contentSpacer=frame(content,"Spacer",1180,16);contentSpacer.fills=[];


  // Card: Categories ma'lumotlari
  var card0=frame(content,"Card Categories ma'lumotlari",1132,200,{x:24,color:WHITE,radius:12,layout:"VERTICAL",stroke:G200,shadow:true});
  card0.primaryAxisSizingMode="AUTO";
  var cardH0=frame(card0,"Card Header",1132,48,{color:WHITE,layout:"HORIZONTAL",padX:20,padY:14,alignX:"CENTER"});
  cardH0.primaryAxisAlignItems="SPACE_BETWEEN";cardH0.layoutSizingHorizontal="FILL";
  txt(cardH0,"Categories ma'lumotlari",{style:"Semi Bold",size:15,color:G900});
  var cardB0=frame(card0,"Card Body",1132,150,{padX:20,padY:16});
  cardB0.layoutSizingHorizontal="FILL";cardB0.primaryAxisSizingMode="AUTO";cardB0.layoutMode="VERTICAL";cardB0.itemSpacing=8;
  
  txt(cardB0,"Bu sahifada Categories bo'limining asosiy kontenti joylashadi.",{size:14,color:G600,w:600,wrap:true});
  txt(cardB0,"HTML sahifa: html/knowledge-base/03-categories.html",{size:12,color:G400,w:600});

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

// KNOWLEDGE BASE / KB Settings
var screen=figma.createFrame();
screen.name="04-kb-settings - KB Settings";
screen.resize(1440,900);
screen.fills=[{type:'SOLID',color:BG}];
screen.x=4680;screen.y=18000;


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
  var nav6=frame(sidebar,"Nav Team Chat",240,36,{x:10,y:320,color:{r:0,g:0,b:0} ,radius:8,color:{r:17/255,g:24/255,b:39/255}});
  nav6.fills=[];
  txt(nav6,"Team Chat",{style:"Medium",size:13,color:SIDEBAR_TEXT,x:36,y:9});
  // Nav: Analytics
  var nav7=frame(sidebar,"Nav Analytics",240,36,{x:10,y:360,color:{r:0,g:0,b:0} ,radius:8,color:{r:17/255,g:24/255,b:39/255}});
  nav7.fills=[];
  txt(nav7,"Analytics",{style:"Medium",size:13,color:SIDEBAR_TEXT,x:36,y:9});
  // Nav: Knowledge Base
  var nav8=frame(sidebar,"Nav Knowledge Base",240,36,{x:10,y:400,color:PRIMARY ,radius:8});
  
  txt(nav8,"Knowledge Base",{style:"Medium",size:13,color:WHITE,x:36,y:9});
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
  txt(headerLeft,"KB Settings",{style:"Semi Bold",size:20,color:G900});
  txt(headerLeft,"Bilim bazasi sozlamalari",{size:13,color:G500});
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
  
  var sTab0=frame(subnav,"Tab Dashboard",96,36,{color:PRIMARY_LIGHT,radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  
  txt(sTab0,"Dashboard",{style:"Medium",size:13,color:PRIMARY});
  var sTab1=frame(subnav,"Tab Article Editor",136,36,{color:{r:0,g:0,b:0},radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  sTab1.fills=[];
  txt(sTab1,"Article Editor",{style:"Medium",size:13,color:G600});
  var sTab2=frame(subnav,"Tab Categories",104,36,{color:{r:0,g:0,b:0},radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  sTab2.fills=[];
  txt(sTab2,"Categories",{style:"Medium",size:13,color:G600});
  var sTab3=frame(subnav,"Tab KB Settings",112,36,{color:{r:0,g:0,b:0},radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  sTab3.fills=[];
  txt(sTab3,"KB Settings",{style:"Medium",size:13,color:G600});
  var sTab4=frame(subnav,"Tab KB Analytics",120,36,{color:{r:0,g:0,b:0},radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  sTab4.fills=[];
  txt(sTab4,"KB Analytics",{style:"Medium",size:13,color:G600});
  



// Spacer
var contentSpacer=frame(content,"Spacer",1180,16);contentSpacer.fills=[];


  // Card: KB Settings ma'lumotlari
  var card0=frame(content,"Card KB Settings ma'lumotlari",1132,200,{x:24,color:WHITE,radius:12,layout:"VERTICAL",stroke:G200,shadow:true});
  card0.primaryAxisSizingMode="AUTO";
  var cardH0=frame(card0,"Card Header",1132,48,{color:WHITE,layout:"HORIZONTAL",padX:20,padY:14,alignX:"CENTER"});
  cardH0.primaryAxisAlignItems="SPACE_BETWEEN";cardH0.layoutSizingHorizontal="FILL";
  txt(cardH0,"KB Settings ma'lumotlari",{style:"Semi Bold",size:15,color:G900});
  var cardB0=frame(card0,"Card Body",1132,150,{padX:20,padY:16});
  cardB0.layoutSizingHorizontal="FILL";cardB0.primaryAxisSizingMode="AUTO";cardB0.layoutMode="VERTICAL";cardB0.itemSpacing=8;
  
  txt(cardB0,"Bu sahifada KB Settings bo'limining asosiy kontenti joylashadi.",{size:14,color:G600,w:600,wrap:true});
  txt(cardB0,"HTML sahifa: html/knowledge-base/04-kb-settings.html",{size:12,color:G400,w:600});

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

// KNOWLEDGE BASE / KB Analytics
var screen=figma.createFrame();
screen.name="05-kb-analytics - KB Analytics";
screen.resize(1440,900);
screen.fills=[{type:'SOLID',color:BG}];
screen.x=6240;screen.y=18000;


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
  var nav6=frame(sidebar,"Nav Team Chat",240,36,{x:10,y:320,color:{r:0,g:0,b:0} ,radius:8,color:{r:17/255,g:24/255,b:39/255}});
  nav6.fills=[];
  txt(nav6,"Team Chat",{style:"Medium",size:13,color:SIDEBAR_TEXT,x:36,y:9});
  // Nav: Analytics
  var nav7=frame(sidebar,"Nav Analytics",240,36,{x:10,y:360,color:{r:0,g:0,b:0} ,radius:8,color:{r:17/255,g:24/255,b:39/255}});
  nav7.fills=[];
  txt(nav7,"Analytics",{style:"Medium",size:13,color:SIDEBAR_TEXT,x:36,y:9});
  // Nav: Knowledge Base
  var nav8=frame(sidebar,"Nav Knowledge Base",240,36,{x:10,y:400,color:PRIMARY ,radius:8});
  
  txt(nav8,"Knowledge Base",{style:"Medium",size:13,color:WHITE,x:36,y:9});
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
  txt(headerLeft,"KB Analytics",{style:"Semi Bold",size:20,color:G900});
  txt(headerLeft,"Maqolalar statistikasi",{size:13,color:G500});
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
  
  var sTab0=frame(subnav,"Tab Dashboard",96,36,{color:PRIMARY_LIGHT,radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  
  txt(sTab0,"Dashboard",{style:"Medium",size:13,color:PRIMARY});
  var sTab1=frame(subnav,"Tab Article Editor",136,36,{color:{r:0,g:0,b:0},radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  sTab1.fills=[];
  txt(sTab1,"Article Editor",{style:"Medium",size:13,color:G600});
  var sTab2=frame(subnav,"Tab Categories",104,36,{color:{r:0,g:0,b:0},radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  sTab2.fills=[];
  txt(sTab2,"Categories",{style:"Medium",size:13,color:G600});
  var sTab3=frame(subnav,"Tab KB Settings",112,36,{color:{r:0,g:0,b:0},radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  sTab3.fills=[];
  txt(sTab3,"KB Settings",{style:"Medium",size:13,color:G600});
  var sTab4=frame(subnav,"Tab KB Analytics",120,36,{color:{r:0,g:0,b:0},radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  sTab4.fills=[];
  txt(sTab4,"KB Analytics",{style:"Medium",size:13,color:G600});
  



// Spacer
var contentSpacer=frame(content,"Spacer",1180,16);contentSpacer.fills=[];


  // Card: KB Analytics ma'lumotlari
  var card0=frame(content,"Card KB Analytics ma'lumotlari",1132,200,{x:24,color:WHITE,radius:12,layout:"VERTICAL",stroke:G200,shadow:true});
  card0.primaryAxisSizingMode="AUTO";
  var cardH0=frame(card0,"Card Header",1132,48,{color:WHITE,layout:"HORIZONTAL",padX:20,padY:14,alignX:"CENTER"});
  cardH0.primaryAxisAlignItems="SPACE_BETWEEN";cardH0.layoutSizingHorizontal="FILL";
  txt(cardH0,"KB Analytics ma'lumotlari",{style:"Semi Bold",size:15,color:G900});
  var cardB0=frame(card0,"Card Body",1132,150,{padX:20,padY:16});
  cardB0.layoutSizingHorizontal="FILL";cardB0.primaryAxisSizingMode="AUTO";cardB0.layoutMode="VERTICAL";cardB0.itemSpacing=8;
  
  txt(cardB0,"Bu sahifada KB Analytics bo'limining asosiy kontenti joylashadi.",{size:14,color:G600,w:600,wrap:true});
  txt(cardB0,"HTML sahifa: html/knowledge-base/05-kb-analytics.html",{size:12,color:G400,w:600});

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

// KNOWLEDGE BASE / Public Home
var screen=figma.createFrame();
screen.name="06-public-home - Public Home";
screen.resize(1440,900);
screen.fills=[{type:'SOLID',color:WHITE}];
screen.x=7800;screen.y=18000;

// Top nav
var kbNav=frame(screen,"KB Nav",1440,60,{x:0,y:0,color:WHITE,layout:"HORIZONTAL",padX:80,alignX:"CENTER"});
kbNav.primaryAxisAlignItems="SPACE_BETWEEN";
kbNav.strokes=[{type:'SOLID',color:G200}];kbNav.strokeWeight=1;
txt(kbNav,"QULAY CHAT — Yordam markazi",{style:"Semi Bold",size:16,color:G900});
var kbSearch=frame(kbNav,"Search",300,36,{color:G50,radius:8,stroke:G200,layout:"HORIZONTAL",padX:12,alignX:"CENTER"});
txt(kbSearch,"Qidiring...",{size:13,color:G400});

// Hero
var kbHero=frame(screen,"Hero",1440,200,{x:0,y:60,color:PRIMARY,layout:"VERTICAL",alignX:"CENTER",alignY:"CENTER",spacing:16});
txt(kbHero,"Public Home",{style:"Bold",size:32,color:WHITE,align:"CENTER"});
txt(kbHero,"Ommaviy bosh sahifa",{size:16,color:{r:200/255,g:200/255,b:255/255},align:"CENTER"});

// Content area
var kbContent=frame(screen,"Content",1000,600,{x:220,y:280,layout:"VERTICAL",spacing:20});
kbContent.primaryAxisSizingMode="AUTO";


// Category cards
var catGrid=frame(kbContent,"Categories",1000,300,{layout:"HORIZONTAL",spacing:20});
catGrid.primaryAxisSizingMode="AUTO";catGrid.counterAxisSizingMode="AUTO";
catGrid.layoutWrap="WRAP";

var kbCat0=frame(catGrid,"Cat",310,120,{color:WHITE,radius:12,stroke:G200,layout:"VERTICAL",pad:20,spacing:8,shadow:true});
kbCat0.primaryAxisSizingMode="AUTO";
txt(kbCat0,"Boshlash",{style:"Semi Bold",size:16,color:G900});
txt(kbCat0,"3 ta maqola",{size:13,color:G500});

var kbCat1=frame(catGrid,"Cat",310,120,{color:WHITE,radius:12,stroke:G200,layout:"VERTICAL",pad:20,spacing:8,shadow:true});
kbCat1.primaryAxisSizingMode="AUTO";
txt(kbCat1,"Sozlamalar",{style:"Semi Bold",size:16,color:G900});
txt(kbCat1,"4 ta maqola",{size:13,color:G500});

var kbCat2=frame(catGrid,"Cat",310,120,{color:WHITE,radius:12,stroke:G200,layout:"VERTICAL",pad:20,spacing:8,shadow:true});
kbCat2.primaryAxisSizingMode="AUTO";
txt(kbCat2,"Billing",{style:"Semi Bold",size:16,color:G900});
txt(kbCat2,"5 ta maqola",{size:13,color:G500});

var kbCat3=frame(catGrid,"Cat",310,120,{color:WHITE,radius:12,stroke:G200,layout:"VERTICAL",pad:20,spacing:8,shadow:true});
kbCat3.primaryAxisSizingMode="AUTO";
txt(kbCat3,"API",{style:"Semi Bold",size:16,color:G900});
txt(kbCat3,"6 ta maqola",{size:13,color:G500});

var kbCat4=frame(catGrid,"Cat",310,120,{color:WHITE,radius:12,stroke:G200,layout:"VERTICAL",pad:20,spacing:8,shadow:true});
kbCat4.primaryAxisSizingMode="AUTO";
txt(kbCat4,"Widget",{style:"Semi Bold",size:16,color:G900});
txt(kbCat4,"7 ta maqola",{size:13,color:G500});

var kbCat5=frame(catGrid,"Cat",310,120,{color:WHITE,radius:12,stroke:G200,layout:"VERTICAL",pad:20,spacing:8,shadow:true});
kbCat5.primaryAxisSizingMode="AUTO";
txt(kbCat5,"Jamoa",{style:"Semi Bold",size:16,color:G900});
txt(kbCat5,"8 ta maqola",{size:13,color:G500});



figma.currentPage.appendChild(screen);

// KNOWLEDGE BASE / Public Search
var screen=figma.createFrame();
screen.name="07-public-search - Public Search";
screen.resize(1440,900);
screen.fills=[{type:'SOLID',color:WHITE}];
screen.x=9360;screen.y=18000;

// Top nav
var kbNav=frame(screen,"KB Nav",1440,60,{x:0,y:0,color:WHITE,layout:"HORIZONTAL",padX:80,alignX:"CENTER"});
kbNav.primaryAxisAlignItems="SPACE_BETWEEN";
kbNav.strokes=[{type:'SOLID',color:G200}];kbNav.strokeWeight=1;
txt(kbNav,"QULAY CHAT — Yordam markazi",{style:"Semi Bold",size:16,color:G900});
var kbSearch=frame(kbNav,"Search",300,36,{color:G50,radius:8,stroke:G200,layout:"HORIZONTAL",padX:12,alignX:"CENTER"});
txt(kbSearch,"Qidiring...",{size:13,color:G400});

// Hero
var kbHero=frame(screen,"Hero",1440,200,{x:0,y:60,color:PRIMARY,layout:"VERTICAL",alignX:"CENTER",alignY:"CENTER",spacing:16});
txt(kbHero,"Public Search",{style:"Bold",size:32,color:WHITE,align:"CENTER"});
txt(kbHero,"Ommaviy qidiruv",{size:16,color:{r:200/255,g:200/255,b:255/255},align:"CENTER"});

// Content area
var kbContent=frame(screen,"Content",1000,600,{x:220,y:280,layout:"VERTICAL",spacing:20});
kbContent.primaryAxisSizingMode="AUTO";


// List / Search results

var kbItem1=frame(kbContent,"Item",1000,80,{color:WHITE,radius:8,stroke:G200,layout:"VERTICAL",pad:16,spacing:6,shadow:true});
kbItem1.primaryAxisSizingMode="AUTO";kbItem1.layoutSizingHorizontal="FILL";
txt(kbItem1,"Maqola sarlavhasi 1",{style:"Semi Bold",size:15,color:PRIMARY});
txt(kbItem1,"Qisqacha tavsif — maqola kontentining birinchi qismi...",{size:13,color:G600,w:960});

var kbItem2=frame(kbContent,"Item",1000,80,{color:WHITE,radius:8,stroke:G200,layout:"VERTICAL",pad:16,spacing:6,shadow:true});
kbItem2.primaryAxisSizingMode="AUTO";kbItem2.layoutSizingHorizontal="FILL";
txt(kbItem2,"Maqola sarlavhasi 2",{style:"Semi Bold",size:15,color:PRIMARY});
txt(kbItem2,"Qisqacha tavsif — maqola kontentining birinchi qismi...",{size:13,color:G600,w:960});

var kbItem3=frame(kbContent,"Item",1000,80,{color:WHITE,radius:8,stroke:G200,layout:"VERTICAL",pad:16,spacing:6,shadow:true});
kbItem3.primaryAxisSizingMode="AUTO";kbItem3.layoutSizingHorizontal="FILL";
txt(kbItem3,"Maqola sarlavhasi 3",{style:"Semi Bold",size:15,color:PRIMARY});
txt(kbItem3,"Qisqacha tavsif — maqola kontentining birinchi qismi...",{size:13,color:G600,w:960});

var kbItem4=frame(kbContent,"Item",1000,80,{color:WHITE,radius:8,stroke:G200,layout:"VERTICAL",pad:16,spacing:6,shadow:true});
kbItem4.primaryAxisSizingMode="AUTO";kbItem4.layoutSizingHorizontal="FILL";
txt(kbItem4,"Maqola sarlavhasi 4",{style:"Semi Bold",size:15,color:PRIMARY});
txt(kbItem4,"Qisqacha tavsif — maqola kontentining birinchi qismi...",{size:13,color:G600,w:960});

var kbItem5=frame(kbContent,"Item",1000,80,{color:WHITE,radius:8,stroke:G200,layout:"VERTICAL",pad:16,spacing:6,shadow:true});
kbItem5.primaryAxisSizingMode="AUTO";kbItem5.layoutSizingHorizontal="FILL";
txt(kbItem5,"Maqola sarlavhasi 5",{style:"Semi Bold",size:15,color:PRIMARY});
txt(kbItem5,"Qisqacha tavsif — maqola kontentining birinchi qismi...",{size:13,color:G600,w:960});



figma.currentPage.appendChild(screen);

// KNOWLEDGE BASE / Public Category
var screen=figma.createFrame();
screen.name="08-public-category - Public Category";
screen.resize(1440,900);
screen.fills=[{type:'SOLID',color:WHITE}];
screen.x=10920;screen.y=18000;

// Top nav
var kbNav=frame(screen,"KB Nav",1440,60,{x:0,y:0,color:WHITE,layout:"HORIZONTAL",padX:80,alignX:"CENTER"});
kbNav.primaryAxisAlignItems="SPACE_BETWEEN";
kbNav.strokes=[{type:'SOLID',color:G200}];kbNav.strokeWeight=1;
txt(kbNav,"QULAY CHAT — Yordam markazi",{style:"Semi Bold",size:16,color:G900});
var kbSearch=frame(kbNav,"Search",300,36,{color:G50,radius:8,stroke:G200,layout:"HORIZONTAL",padX:12,alignX:"CENTER"});
txt(kbSearch,"Qidiring...",{size:13,color:G400});

// Hero
var kbHero=frame(screen,"Hero",1440,200,{x:0,y:60,color:PRIMARY,layout:"VERTICAL",alignX:"CENTER",alignY:"CENTER",spacing:16});
txt(kbHero,"Public Category",{style:"Bold",size:32,color:WHITE,align:"CENTER"});
txt(kbHero,"Ommaviy kategoriya",{size:16,color:{r:200/255,g:200/255,b:255/255},align:"CENTER"});

// Content area
var kbContent=frame(screen,"Content",1000,600,{x:220,y:280,layout:"VERTICAL",spacing:20});
kbContent.primaryAxisSizingMode="AUTO";


// List / Search results

var kbItem1=frame(kbContent,"Item",1000,80,{color:WHITE,radius:8,stroke:G200,layout:"VERTICAL",pad:16,spacing:6,shadow:true});
kbItem1.primaryAxisSizingMode="AUTO";kbItem1.layoutSizingHorizontal="FILL";
txt(kbItem1,"Maqola sarlavhasi 1",{style:"Semi Bold",size:15,color:PRIMARY});
txt(kbItem1,"Qisqacha tavsif — maqola kontentining birinchi qismi...",{size:13,color:G600,w:960});

var kbItem2=frame(kbContent,"Item",1000,80,{color:WHITE,radius:8,stroke:G200,layout:"VERTICAL",pad:16,spacing:6,shadow:true});
kbItem2.primaryAxisSizingMode="AUTO";kbItem2.layoutSizingHorizontal="FILL";
txt(kbItem2,"Maqola sarlavhasi 2",{style:"Semi Bold",size:15,color:PRIMARY});
txt(kbItem2,"Qisqacha tavsif — maqola kontentining birinchi qismi...",{size:13,color:G600,w:960});

var kbItem3=frame(kbContent,"Item",1000,80,{color:WHITE,radius:8,stroke:G200,layout:"VERTICAL",pad:16,spacing:6,shadow:true});
kbItem3.primaryAxisSizingMode="AUTO";kbItem3.layoutSizingHorizontal="FILL";
txt(kbItem3,"Maqola sarlavhasi 3",{style:"Semi Bold",size:15,color:PRIMARY});
txt(kbItem3,"Qisqacha tavsif — maqola kontentining birinchi qismi...",{size:13,color:G600,w:960});

var kbItem4=frame(kbContent,"Item",1000,80,{color:WHITE,radius:8,stroke:G200,layout:"VERTICAL",pad:16,spacing:6,shadow:true});
kbItem4.primaryAxisSizingMode="AUTO";kbItem4.layoutSizingHorizontal="FILL";
txt(kbItem4,"Maqola sarlavhasi 4",{style:"Semi Bold",size:15,color:PRIMARY});
txt(kbItem4,"Qisqacha tavsif — maqola kontentining birinchi qismi...",{size:13,color:G600,w:960});

var kbItem5=frame(kbContent,"Item",1000,80,{color:WHITE,radius:8,stroke:G200,layout:"VERTICAL",pad:16,spacing:6,shadow:true});
kbItem5.primaryAxisSizingMode="AUTO";kbItem5.layoutSizingHorizontal="FILL";
txt(kbItem5,"Maqola sarlavhasi 5",{style:"Semi Bold",size:15,color:PRIMARY});
txt(kbItem5,"Qisqacha tavsif — maqola kontentining birinchi qismi...",{size:13,color:G600,w:960});



figma.currentPage.appendChild(screen);

// KNOWLEDGE BASE / Public Article
var screen=figma.createFrame();
screen.name="09-public-article - Public Article";
screen.resize(1440,900);
screen.fills=[{type:'SOLID',color:WHITE}];
screen.x=12480;screen.y=18000;

// Top nav
var kbNav=frame(screen,"KB Nav",1440,60,{x:0,y:0,color:WHITE,layout:"HORIZONTAL",padX:80,alignX:"CENTER"});
kbNav.primaryAxisAlignItems="SPACE_BETWEEN";
kbNav.strokes=[{type:'SOLID',color:G200}];kbNav.strokeWeight=1;
txt(kbNav,"QULAY CHAT — Yordam markazi",{style:"Semi Bold",size:16,color:G900});
var kbSearch=frame(kbNav,"Search",300,36,{color:G50,radius:8,stroke:G200,layout:"HORIZONTAL",padX:12,alignX:"CENTER"});
txt(kbSearch,"Qidiring...",{size:13,color:G400});

// Hero
var kbHero=frame(screen,"Hero",1440,200,{x:0,y:60,color:PRIMARY,layout:"VERTICAL",alignX:"CENTER",alignY:"CENTER",spacing:16});
txt(kbHero,"Public Article",{style:"Bold",size:32,color:WHITE,align:"CENTER"});
txt(kbHero,"Ommaviy maqola",{size:16,color:{r:200/255,g:200/255,b:255/255},align:"CENTER"});

// Content area
var kbContent=frame(screen,"Content",1000,600,{x:220,y:280,layout:"VERTICAL",spacing:20});
kbContent.primaryAxisSizingMode="AUTO";


// Article content
var article=frame(kbContent,"Article",800,500,{color:WHITE,radius:12,stroke:G200,pad:32,layout:"VERTICAL",spacing:16,shadow:true});
article.primaryAxisSizingMode="AUTO";
txt(article,"Maqola sarlavhasi",{style:"Bold",size:24,color:G900});
txt(article,"Oxirgi yangilangan: 2026-02-27",{size:12,color:G500});
rect(article,736,1,G200,{});
txt(article,"Bu yerda maqola matni joylashadi. Batafsil ko'rsatmalar, rasmlar va video qo'llanmalar...",{size:15,color:G700,w:736,wrap:true});
txt(article,"Qadam 1: Kirish",{style:"Semi Bold",size:16,color:G900});
txt(article,"Birinchi navbatda tizimga kiring va sozlamalar bo'limiga o'ting...",{size:15,color:G700,w:736,wrap:true});


figma.currentPage.appendChild(screen);

return {success:true, section:"KNOWLEDGE BASE", screens:9};
