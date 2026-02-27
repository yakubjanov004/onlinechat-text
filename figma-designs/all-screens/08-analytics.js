
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
// SECTION: ANALYTICS (11 screens)
// ═══════════════════════════════════════════

// Section label
var sLabel=figma.createFrame();
sLabel.name="— ANALYTICS —";
sLabel.resize(17040, 60);
sLabel.fills=[{type:'SOLID',color:{r:0,g:0,b:0}}];
sLabel.cornerRadius=8;
sLabel.x=0;sLabel.y=8320;
sLabel.layoutMode="HORIZONTAL";sLabel.primaryAxisAlignItems="CENTER";sLabel.counterAxisAlignItems="CENTER";
var slTxt=figma.createText();
slTxt.fontName={family:"Inter",style:"Bold"};
slTxt.characters="ANALYTICS (11)";
slTxt.fontSize=20;
slTxt.fills=[{type:'SOLID',color:{r:1,g:1,b:1}}];
sLabel.appendChild(slTxt);
figma.currentPage.appendChild(sLabel);

// ANALYTICS / Overview
var screen=figma.createFrame();
screen.name="01-overview - Overview";
screen.resize(1440,900);
screen.fills=[{type:'SOLID',color:BG}];
screen.x=0;screen.y=8400;


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
  var nav7=frame(sidebar,"Nav Analytics",240,36,{x:10,y:360,color:PRIMARY ,radius:8});
  
  txt(nav7,"Analytics",{style:"Medium",size:13,color:WHITE,x:36,y:9});
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
  txt(headerLeft,"Overview",{style:"Semi Bold",size:20,color:G900});
  txt(headerLeft,"Umumiy ko'rsatkichlar",{size:13,color:G500});
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
  
  var sTab0=frame(subnav,"Tab Overview",88,36,{color:PRIMARY_LIGHT,radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  
  txt(sTab0,"Overview",{style:"Medium",size:13,color:PRIMARY});
  var sTab1=frame(subnav,"Tab Response Times",136,36,{color:{r:0,g:0,b:0},radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  sTab1.fills=[];
  txt(sTab1,"Response Times",{style:"Medium",size:13,color:G600});
  var sTab2=frame(subnav,"Tab Operators",96,36,{color:{r:0,g:0,b:0},radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  sTab2.fills=[];
  txt(sTab2,"Operators",{style:"Medium",size:13,color:G600});
  var sTab3=frame(subnav,"Tab SLA",48,36,{color:{r:0,g:0,b:0},radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  sTab3.fills=[];
  txt(sTab3,"SLA",{style:"Medium",size:13,color:G600});
  var sTab4=frame(subnav,"Tab Channels",88,36,{color:{r:0,g:0,b:0},radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  sTab4.fills=[];
  txt(sTab4,"Channels",{style:"Medium",size:13,color:G600});
  var sTab5=frame(subnav,"Tab Segments",88,36,{color:{r:0,g:0,b:0},radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  sTab5.fills=[];
  txt(sTab5,"Segments",{style:"Medium",size:13,color:G600});
  var sTab6=frame(subnav,"Tab Tags",56,36,{color:{r:0,g:0,b:0},radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  sTab6.fills=[];
  txt(sTab6,"Tags",{style:"Medium",size:13,color:G600});
  var sTab7=frame(subnav,"Tab Custom Reports",136,36,{color:{r:0,g:0,b:0},radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  sTab7.fills=[];
  txt(sTab7,"Custom Reports",{style:"Medium",size:13,color:G600});
  var sTab8=frame(subnav,"Tab Export",72,36,{color:{r:0,g:0,b:0},radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  sTab8.fills=[];
  txt(sTab8,"Export",{style:"Medium",size:13,color:G600});
  var sTab9=frame(subnav,"Tab My Stats",88,36,{color:{r:0,g:0,b:0},radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  sTab9.fills=[];
  txt(sTab9,"My Stats",{style:"Medium",size:13,color:G600});
  


  // Metrics
  var metricsRow=frame(content,"Metrics",1180,120,{layout:"HORIZONTAL",spacing:16,padX:24,padY:10});
  metricsRow.primaryAxisSizingMode="FIXED";
  
  var mc0=frame(metricsRow,"Metric Jami chatlar",270,100,{color:WHITE,radius:12,layout:"VERTICAL",spacing:6,pad:20,stroke:G200,shadow:true});
  txt(mc0,"Jami chatlar",{size:13,color:G500});
  txt(mc0,"1,247",{style:"Bold",size:28,color:G900});
  txt(mc0,"+18%",{size:12,color:SUCCESS});
  
  var mc1=frame(metricsRow,"Metric O'rtacha javob",270,100,{color:WHITE,radius:12,layout:"VERTICAL",spacing:6,pad:20,stroke:G200,shadow:true});
  txt(mc1,"O'rtacha javob",{size:13,color:G500});
  txt(mc1,"1.2m",{style:"Bold",size:28,color:G900});
  txt(mc1,"-8%",{size:12,color:DANGER});
  
  var mc2=frame(metricsRow,"Metric CSAT",270,100,{color:WHITE,radius:12,layout:"VERTICAL",spacing:6,pad:20,stroke:G200,shadow:true});
  txt(mc2,"CSAT",{size:13,color:G500});
  txt(mc2,"4.6/5",{style:"Bold",size:28,color:G900});
  txt(mc2,"+0.3",{size:12,color:SUCCESS});
  
  var mc3=frame(metricsRow,"Metric Hal qilingan",270,100,{color:WHITE,radius:12,layout:"VERTICAL",spacing:6,pad:20,stroke:G200,shadow:true});
  txt(mc3,"Hal qilingan",{size:13,color:G500});
  txt(mc3,"89%",{style:"Bold",size:28,color:G900});
  txt(mc3,"+5%",{size:12,color:SUCCESS});
  
  

// Spacer
var contentSpacer=frame(content,"Spacer",1180,16);contentSpacer.fills=[];


  // Card: Overview ma'lumotlari
  var card0=frame(content,"Card Overview ma'lumotlari",1132,200,{x:24,color:WHITE,radius:12,layout:"VERTICAL",stroke:G200,shadow:true});
  card0.primaryAxisSizingMode="AUTO";
  var cardH0=frame(card0,"Card Header",1132,48,{color:WHITE,layout:"HORIZONTAL",padX:20,padY:14,alignX:"CENTER"});
  cardH0.primaryAxisAlignItems="SPACE_BETWEEN";cardH0.layoutSizingHorizontal="FILL";
  txt(cardH0,"Overview ma'lumotlari",{style:"Semi Bold",size:15,color:G900});
  var cardB0=frame(card0,"Card Body",1132,150,{padX:20,padY:16});
  cardB0.layoutSizingHorizontal="FILL";cardB0.primaryAxisSizingMode="AUTO";cardB0.layoutMode="VERTICAL";cardB0.itemSpacing=8;
  
  txt(cardB0,"Bu sahifada Overview bo'limining asosiy kontenti joylashadi.",{size:14,color:G600,w:600,wrap:true});
  txt(cardB0,"HTML sahifa: html/analytics/01-overview.html",{size:12,color:G400,w:600});

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

// ANALYTICS / Response Times
var screen=figma.createFrame();
screen.name="02-response-times - Response Times";
screen.resize(1440,900);
screen.fills=[{type:'SOLID',color:BG}];
screen.x=1560;screen.y=8400;


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
  var nav7=frame(sidebar,"Nav Analytics",240,36,{x:10,y:360,color:PRIMARY ,radius:8});
  
  txt(nav7,"Analytics",{style:"Medium",size:13,color:WHITE,x:36,y:9});
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
  txt(headerLeft,"Response Times",{style:"Semi Bold",size:20,color:G900});
  txt(headerLeft,"Javob vaqtlari tahlili",{size:13,color:G500});
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
  
  var sTab0=frame(subnav,"Tab Overview",88,36,{color:PRIMARY_LIGHT,radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  
  txt(sTab0,"Overview",{style:"Medium",size:13,color:PRIMARY});
  var sTab1=frame(subnav,"Tab Response Times",136,36,{color:{r:0,g:0,b:0},radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  sTab1.fills=[];
  txt(sTab1,"Response Times",{style:"Medium",size:13,color:G600});
  var sTab2=frame(subnav,"Tab Operators",96,36,{color:{r:0,g:0,b:0},radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  sTab2.fills=[];
  txt(sTab2,"Operators",{style:"Medium",size:13,color:G600});
  var sTab3=frame(subnav,"Tab SLA",48,36,{color:{r:0,g:0,b:0},radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  sTab3.fills=[];
  txt(sTab3,"SLA",{style:"Medium",size:13,color:G600});
  var sTab4=frame(subnav,"Tab Channels",88,36,{color:{r:0,g:0,b:0},radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  sTab4.fills=[];
  txt(sTab4,"Channels",{style:"Medium",size:13,color:G600});
  var sTab5=frame(subnav,"Tab Segments",88,36,{color:{r:0,g:0,b:0},radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  sTab5.fills=[];
  txt(sTab5,"Segments",{style:"Medium",size:13,color:G600});
  var sTab6=frame(subnav,"Tab Tags",56,36,{color:{r:0,g:0,b:0},radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  sTab6.fills=[];
  txt(sTab6,"Tags",{style:"Medium",size:13,color:G600});
  var sTab7=frame(subnav,"Tab Custom Reports",136,36,{color:{r:0,g:0,b:0},radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  sTab7.fills=[];
  txt(sTab7,"Custom Reports",{style:"Medium",size:13,color:G600});
  var sTab8=frame(subnav,"Tab Export",72,36,{color:{r:0,g:0,b:0},radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  sTab8.fills=[];
  txt(sTab8,"Export",{style:"Medium",size:13,color:G600});
  var sTab9=frame(subnav,"Tab My Stats",88,36,{color:{r:0,g:0,b:0},radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  sTab9.fills=[];
  txt(sTab9,"My Stats",{style:"Medium",size:13,color:G600});
  



// Spacer
var contentSpacer=frame(content,"Spacer",1180,16);contentSpacer.fills=[];


  // Card: Response Times ma'lumotlari
  var card0=frame(content,"Card Response Times ma'lumotlari",1132,200,{x:24,color:WHITE,radius:12,layout:"VERTICAL",stroke:G200,shadow:true});
  card0.primaryAxisSizingMode="AUTO";
  var cardH0=frame(card0,"Card Header",1132,48,{color:WHITE,layout:"HORIZONTAL",padX:20,padY:14,alignX:"CENTER"});
  cardH0.primaryAxisAlignItems="SPACE_BETWEEN";cardH0.layoutSizingHorizontal="FILL";
  txt(cardH0,"Response Times ma'lumotlari",{style:"Semi Bold",size:15,color:G900});
  var cardB0=frame(card0,"Card Body",1132,150,{padX:20,padY:16});
  cardB0.layoutSizingHorizontal="FILL";cardB0.primaryAxisSizingMode="AUTO";cardB0.layoutMode="VERTICAL";cardB0.itemSpacing=8;
  
  txt(cardB0,"Bu sahifada Response Times bo'limining asosiy kontenti joylashadi.",{size:14,color:G600,w:600,wrap:true});
  txt(cardB0,"HTML sahifa: html/analytics/02-response-times.html",{size:12,color:G400,w:600});

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

// ANALYTICS / Operators
var screen=figma.createFrame();
screen.name="03-operators - Operators";
screen.resize(1440,900);
screen.fills=[{type:'SOLID',color:BG}];
screen.x=3120;screen.y=8400;


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
  var nav7=frame(sidebar,"Nav Analytics",240,36,{x:10,y:360,color:PRIMARY ,radius:8});
  
  txt(nav7,"Analytics",{style:"Medium",size:13,color:WHITE,x:36,y:9});
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
  txt(headerLeft,"Operators",{style:"Semi Bold",size:20,color:G900});
  txt(headerLeft,"Operatorlar statistikasi",{size:13,color:G500});
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
  
  var sTab0=frame(subnav,"Tab Overview",88,36,{color:PRIMARY_LIGHT,radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  
  txt(sTab0,"Overview",{style:"Medium",size:13,color:PRIMARY});
  var sTab1=frame(subnav,"Tab Response Times",136,36,{color:{r:0,g:0,b:0},radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  sTab1.fills=[];
  txt(sTab1,"Response Times",{style:"Medium",size:13,color:G600});
  var sTab2=frame(subnav,"Tab Operators",96,36,{color:{r:0,g:0,b:0},radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  sTab2.fills=[];
  txt(sTab2,"Operators",{style:"Medium",size:13,color:G600});
  var sTab3=frame(subnav,"Tab SLA",48,36,{color:{r:0,g:0,b:0},radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  sTab3.fills=[];
  txt(sTab3,"SLA",{style:"Medium",size:13,color:G600});
  var sTab4=frame(subnav,"Tab Channels",88,36,{color:{r:0,g:0,b:0},radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  sTab4.fills=[];
  txt(sTab4,"Channels",{style:"Medium",size:13,color:G600});
  var sTab5=frame(subnav,"Tab Segments",88,36,{color:{r:0,g:0,b:0},radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  sTab5.fills=[];
  txt(sTab5,"Segments",{style:"Medium",size:13,color:G600});
  var sTab6=frame(subnav,"Tab Tags",56,36,{color:{r:0,g:0,b:0},radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  sTab6.fills=[];
  txt(sTab6,"Tags",{style:"Medium",size:13,color:G600});
  var sTab7=frame(subnav,"Tab Custom Reports",136,36,{color:{r:0,g:0,b:0},radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  sTab7.fills=[];
  txt(sTab7,"Custom Reports",{style:"Medium",size:13,color:G600});
  var sTab8=frame(subnav,"Tab Export",72,36,{color:{r:0,g:0,b:0},radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  sTab8.fills=[];
  txt(sTab8,"Export",{style:"Medium",size:13,color:G600});
  var sTab9=frame(subnav,"Tab My Stats",88,36,{color:{r:0,g:0,b:0},radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  sTab9.fills=[];
  txt(sTab9,"My Stats",{style:"Medium",size:13,color:G600});
  



// Spacer
var contentSpacer=frame(content,"Spacer",1180,16);contentSpacer.fills=[];


  // Card: Operators ma'lumotlari
  var card0=frame(content,"Card Operators ma'lumotlari",1132,200,{x:24,color:WHITE,radius:12,layout:"VERTICAL",stroke:G200,shadow:true});
  card0.primaryAxisSizingMode="AUTO";
  var cardH0=frame(card0,"Card Header",1132,48,{color:WHITE,layout:"HORIZONTAL",padX:20,padY:14,alignX:"CENTER"});
  cardH0.primaryAxisAlignItems="SPACE_BETWEEN";cardH0.layoutSizingHorizontal="FILL";
  txt(cardH0,"Operators ma'lumotlari",{style:"Semi Bold",size:15,color:G900});
  var cardB0=frame(card0,"Card Body",1132,150,{padX:20,padY:16});
  cardB0.layoutSizingHorizontal="FILL";cardB0.primaryAxisSizingMode="AUTO";cardB0.layoutMode="VERTICAL";cardB0.itemSpacing=8;
  
  txt(cardB0,"Bu sahifada Operators bo'limining asosiy kontenti joylashadi.",{size:14,color:G600,w:600,wrap:true});
  txt(cardB0,"HTML sahifa: html/analytics/03-operators.html",{size:12,color:G400,w:600});

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

// ANALYTICS / Operator Detail
var screen=figma.createFrame();
screen.name="04-operator-detail - Operator Detail";
screen.resize(1440,900);
screen.fills=[{type:'SOLID',color:BG}];
screen.x=4680;screen.y=8400;


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
  var nav7=frame(sidebar,"Nav Analytics",240,36,{x:10,y:360,color:PRIMARY ,radius:8});
  
  txt(nav7,"Analytics",{style:"Medium",size:13,color:WHITE,x:36,y:9});
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
  txt(headerLeft,"Operator Detail",{style:"Semi Bold",size:20,color:G900});
  txt(headerLeft,"Agent batafsil hisoboti",{size:13,color:G500});
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
  
  var sTab0=frame(subnav,"Tab Overview",88,36,{color:PRIMARY_LIGHT,radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  
  txt(sTab0,"Overview",{style:"Medium",size:13,color:PRIMARY});
  var sTab1=frame(subnav,"Tab Response Times",136,36,{color:{r:0,g:0,b:0},radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  sTab1.fills=[];
  txt(sTab1,"Response Times",{style:"Medium",size:13,color:G600});
  var sTab2=frame(subnav,"Tab Operators",96,36,{color:{r:0,g:0,b:0},radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  sTab2.fills=[];
  txt(sTab2,"Operators",{style:"Medium",size:13,color:G600});
  var sTab3=frame(subnav,"Tab SLA",48,36,{color:{r:0,g:0,b:0},radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  sTab3.fills=[];
  txt(sTab3,"SLA",{style:"Medium",size:13,color:G600});
  var sTab4=frame(subnav,"Tab Channels",88,36,{color:{r:0,g:0,b:0},radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  sTab4.fills=[];
  txt(sTab4,"Channels",{style:"Medium",size:13,color:G600});
  var sTab5=frame(subnav,"Tab Segments",88,36,{color:{r:0,g:0,b:0},radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  sTab5.fills=[];
  txt(sTab5,"Segments",{style:"Medium",size:13,color:G600});
  var sTab6=frame(subnav,"Tab Tags",56,36,{color:{r:0,g:0,b:0},radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  sTab6.fills=[];
  txt(sTab6,"Tags",{style:"Medium",size:13,color:G600});
  var sTab7=frame(subnav,"Tab Custom Reports",136,36,{color:{r:0,g:0,b:0},radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  sTab7.fills=[];
  txt(sTab7,"Custom Reports",{style:"Medium",size:13,color:G600});
  var sTab8=frame(subnav,"Tab Export",72,36,{color:{r:0,g:0,b:0},radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  sTab8.fills=[];
  txt(sTab8,"Export",{style:"Medium",size:13,color:G600});
  var sTab9=frame(subnav,"Tab My Stats",88,36,{color:{r:0,g:0,b:0},radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  sTab9.fills=[];
  txt(sTab9,"My Stats",{style:"Medium",size:13,color:G600});
  



// Spacer
var contentSpacer=frame(content,"Spacer",1180,16);contentSpacer.fills=[];


  // Card: Operator Detail ma'lumotlari
  var card0=frame(content,"Card Operator Detail ma'lumotlari",1132,200,{x:24,color:WHITE,radius:12,layout:"VERTICAL",stroke:G200,shadow:true});
  card0.primaryAxisSizingMode="AUTO";
  var cardH0=frame(card0,"Card Header",1132,48,{color:WHITE,layout:"HORIZONTAL",padX:20,padY:14,alignX:"CENTER"});
  cardH0.primaryAxisAlignItems="SPACE_BETWEEN";cardH0.layoutSizingHorizontal="FILL";
  txt(cardH0,"Operator Detail ma'lumotlari",{style:"Semi Bold",size:15,color:G900});
  var cardB0=frame(card0,"Card Body",1132,150,{padX:20,padY:16});
  cardB0.layoutSizingHorizontal="FILL";cardB0.primaryAxisSizingMode="AUTO";cardB0.layoutMode="VERTICAL";cardB0.itemSpacing=8;
  
  txt(cardB0,"Bu sahifada Operator Detail bo'limining asosiy kontenti joylashadi.",{size:14,color:G600,w:600,wrap:true});
  txt(cardB0,"HTML sahifa: html/analytics/04-operator-detail.html",{size:12,color:G400,w:600});

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

// ANALYTICS / SLA
var screen=figma.createFrame();
screen.name="05-sla - SLA";
screen.resize(1440,900);
screen.fills=[{type:'SOLID',color:BG}];
screen.x=6240;screen.y=8400;


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
  var nav7=frame(sidebar,"Nav Analytics",240,36,{x:10,y:360,color:PRIMARY ,radius:8});
  
  txt(nav7,"Analytics",{style:"Medium",size:13,color:WHITE,x:36,y:9});
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
  txt(headerLeft,"SLA",{style:"Semi Bold",size:20,color:G900});
  txt(headerLeft,"SLA monitoring",{size:13,color:G500});
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
  
  var sTab0=frame(subnav,"Tab Overview",88,36,{color:PRIMARY_LIGHT,radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  
  txt(sTab0,"Overview",{style:"Medium",size:13,color:PRIMARY});
  var sTab1=frame(subnav,"Tab Response Times",136,36,{color:{r:0,g:0,b:0},radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  sTab1.fills=[];
  txt(sTab1,"Response Times",{style:"Medium",size:13,color:G600});
  var sTab2=frame(subnav,"Tab Operators",96,36,{color:{r:0,g:0,b:0},radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  sTab2.fills=[];
  txt(sTab2,"Operators",{style:"Medium",size:13,color:G600});
  var sTab3=frame(subnav,"Tab SLA",48,36,{color:{r:0,g:0,b:0},radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  sTab3.fills=[];
  txt(sTab3,"SLA",{style:"Medium",size:13,color:G600});
  var sTab4=frame(subnav,"Tab Channels",88,36,{color:{r:0,g:0,b:0},radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  sTab4.fills=[];
  txt(sTab4,"Channels",{style:"Medium",size:13,color:G600});
  var sTab5=frame(subnav,"Tab Segments",88,36,{color:{r:0,g:0,b:0},radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  sTab5.fills=[];
  txt(sTab5,"Segments",{style:"Medium",size:13,color:G600});
  var sTab6=frame(subnav,"Tab Tags",56,36,{color:{r:0,g:0,b:0},radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  sTab6.fills=[];
  txt(sTab6,"Tags",{style:"Medium",size:13,color:G600});
  var sTab7=frame(subnav,"Tab Custom Reports",136,36,{color:{r:0,g:0,b:0},radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  sTab7.fills=[];
  txt(sTab7,"Custom Reports",{style:"Medium",size:13,color:G600});
  var sTab8=frame(subnav,"Tab Export",72,36,{color:{r:0,g:0,b:0},radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  sTab8.fills=[];
  txt(sTab8,"Export",{style:"Medium",size:13,color:G600});
  var sTab9=frame(subnav,"Tab My Stats",88,36,{color:{r:0,g:0,b:0},radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  sTab9.fills=[];
  txt(sTab9,"My Stats",{style:"Medium",size:13,color:G600});
  



// Spacer
var contentSpacer=frame(content,"Spacer",1180,16);contentSpacer.fills=[];


  // Card: SLA ma'lumotlari
  var card0=frame(content,"Card SLA ma'lumotlari",1132,200,{x:24,color:WHITE,radius:12,layout:"VERTICAL",stroke:G200,shadow:true});
  card0.primaryAxisSizingMode="AUTO";
  var cardH0=frame(card0,"Card Header",1132,48,{color:WHITE,layout:"HORIZONTAL",padX:20,padY:14,alignX:"CENTER"});
  cardH0.primaryAxisAlignItems="SPACE_BETWEEN";cardH0.layoutSizingHorizontal="FILL";
  txt(cardH0,"SLA ma'lumotlari",{style:"Semi Bold",size:15,color:G900});
  var cardB0=frame(card0,"Card Body",1132,150,{padX:20,padY:16});
  cardB0.layoutSizingHorizontal="FILL";cardB0.primaryAxisSizingMode="AUTO";cardB0.layoutMode="VERTICAL";cardB0.itemSpacing=8;
  
  txt(cardB0,"Bu sahifada SLA bo'limining asosiy kontenti joylashadi.",{size:14,color:G600,w:600,wrap:true});
  txt(cardB0,"HTML sahifa: html/analytics/05-sla.html",{size:12,color:G400,w:600});

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

// ANALYTICS / Channels
var screen=figma.createFrame();
screen.name="06-channels - Channels";
screen.resize(1440,900);
screen.fills=[{type:'SOLID',color:BG}];
screen.x=7800;screen.y=8400;


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
  var nav7=frame(sidebar,"Nav Analytics",240,36,{x:10,y:360,color:PRIMARY ,radius:8});
  
  txt(nav7,"Analytics",{style:"Medium",size:13,color:WHITE,x:36,y:9});
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
  txt(headerLeft,"Channels",{style:"Semi Bold",size:20,color:G900});
  txt(headerLeft,"Kanal bo'yicha tahlil",{size:13,color:G500});
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
  
  var sTab0=frame(subnav,"Tab Overview",88,36,{color:PRIMARY_LIGHT,radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  
  txt(sTab0,"Overview",{style:"Medium",size:13,color:PRIMARY});
  var sTab1=frame(subnav,"Tab Response Times",136,36,{color:{r:0,g:0,b:0},radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  sTab1.fills=[];
  txt(sTab1,"Response Times",{style:"Medium",size:13,color:G600});
  var sTab2=frame(subnav,"Tab Operators",96,36,{color:{r:0,g:0,b:0},radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  sTab2.fills=[];
  txt(sTab2,"Operators",{style:"Medium",size:13,color:G600});
  var sTab3=frame(subnav,"Tab SLA",48,36,{color:{r:0,g:0,b:0},radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  sTab3.fills=[];
  txt(sTab3,"SLA",{style:"Medium",size:13,color:G600});
  var sTab4=frame(subnav,"Tab Channels",88,36,{color:{r:0,g:0,b:0},radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  sTab4.fills=[];
  txt(sTab4,"Channels",{style:"Medium",size:13,color:G600});
  var sTab5=frame(subnav,"Tab Segments",88,36,{color:{r:0,g:0,b:0},radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  sTab5.fills=[];
  txt(sTab5,"Segments",{style:"Medium",size:13,color:G600});
  var sTab6=frame(subnav,"Tab Tags",56,36,{color:{r:0,g:0,b:0},radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  sTab6.fills=[];
  txt(sTab6,"Tags",{style:"Medium",size:13,color:G600});
  var sTab7=frame(subnav,"Tab Custom Reports",136,36,{color:{r:0,g:0,b:0},radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  sTab7.fills=[];
  txt(sTab7,"Custom Reports",{style:"Medium",size:13,color:G600});
  var sTab8=frame(subnav,"Tab Export",72,36,{color:{r:0,g:0,b:0},radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  sTab8.fills=[];
  txt(sTab8,"Export",{style:"Medium",size:13,color:G600});
  var sTab9=frame(subnav,"Tab My Stats",88,36,{color:{r:0,g:0,b:0},radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  sTab9.fills=[];
  txt(sTab9,"My Stats",{style:"Medium",size:13,color:G600});
  



// Spacer
var contentSpacer=frame(content,"Spacer",1180,16);contentSpacer.fills=[];


  // Card: Channels ma'lumotlari
  var card0=frame(content,"Card Channels ma'lumotlari",1132,200,{x:24,color:WHITE,radius:12,layout:"VERTICAL",stroke:G200,shadow:true});
  card0.primaryAxisSizingMode="AUTO";
  var cardH0=frame(card0,"Card Header",1132,48,{color:WHITE,layout:"HORIZONTAL",padX:20,padY:14,alignX:"CENTER"});
  cardH0.primaryAxisAlignItems="SPACE_BETWEEN";cardH0.layoutSizingHorizontal="FILL";
  txt(cardH0,"Channels ma'lumotlari",{style:"Semi Bold",size:15,color:G900});
  var cardB0=frame(card0,"Card Body",1132,150,{padX:20,padY:16});
  cardB0.layoutSizingHorizontal="FILL";cardB0.primaryAxisSizingMode="AUTO";cardB0.layoutMode="VERTICAL";cardB0.itemSpacing=8;
  
  txt(cardB0,"Bu sahifada Channels bo'limining asosiy kontenti joylashadi.",{size:14,color:G600,w:600,wrap:true});
  txt(cardB0,"HTML sahifa: html/analytics/06-channels.html",{size:12,color:G400,w:600});

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

// ANALYTICS / Segments
var screen=figma.createFrame();
screen.name="07-segments - Segments";
screen.resize(1440,900);
screen.fills=[{type:'SOLID',color:BG}];
screen.x=9360;screen.y=8400;


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
  var nav7=frame(sidebar,"Nav Analytics",240,36,{x:10,y:360,color:PRIMARY ,radius:8});
  
  txt(nav7,"Analytics",{style:"Medium",size:13,color:WHITE,x:36,y:9});
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
  txt(headerLeft,"Segments",{style:"Semi Bold",size:20,color:G900});
  txt(headerLeft,"Segmentlar tahlili",{size:13,color:G500});
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
  
  var sTab0=frame(subnav,"Tab Overview",88,36,{color:PRIMARY_LIGHT,radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  
  txt(sTab0,"Overview",{style:"Medium",size:13,color:PRIMARY});
  var sTab1=frame(subnav,"Tab Response Times",136,36,{color:{r:0,g:0,b:0},radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  sTab1.fills=[];
  txt(sTab1,"Response Times",{style:"Medium",size:13,color:G600});
  var sTab2=frame(subnav,"Tab Operators",96,36,{color:{r:0,g:0,b:0},radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  sTab2.fills=[];
  txt(sTab2,"Operators",{style:"Medium",size:13,color:G600});
  var sTab3=frame(subnav,"Tab SLA",48,36,{color:{r:0,g:0,b:0},radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  sTab3.fills=[];
  txt(sTab3,"SLA",{style:"Medium",size:13,color:G600});
  var sTab4=frame(subnav,"Tab Channels",88,36,{color:{r:0,g:0,b:0},radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  sTab4.fills=[];
  txt(sTab4,"Channels",{style:"Medium",size:13,color:G600});
  var sTab5=frame(subnav,"Tab Segments",88,36,{color:{r:0,g:0,b:0},radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  sTab5.fills=[];
  txt(sTab5,"Segments",{style:"Medium",size:13,color:G600});
  var sTab6=frame(subnav,"Tab Tags",56,36,{color:{r:0,g:0,b:0},radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  sTab6.fills=[];
  txt(sTab6,"Tags",{style:"Medium",size:13,color:G600});
  var sTab7=frame(subnav,"Tab Custom Reports",136,36,{color:{r:0,g:0,b:0},radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  sTab7.fills=[];
  txt(sTab7,"Custom Reports",{style:"Medium",size:13,color:G600});
  var sTab8=frame(subnav,"Tab Export",72,36,{color:{r:0,g:0,b:0},radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  sTab8.fills=[];
  txt(sTab8,"Export",{style:"Medium",size:13,color:G600});
  var sTab9=frame(subnav,"Tab My Stats",88,36,{color:{r:0,g:0,b:0},radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  sTab9.fills=[];
  txt(sTab9,"My Stats",{style:"Medium",size:13,color:G600});
  



// Spacer
var contentSpacer=frame(content,"Spacer",1180,16);contentSpacer.fills=[];


  // Card: Segments ma'lumotlari
  var card0=frame(content,"Card Segments ma'lumotlari",1132,200,{x:24,color:WHITE,radius:12,layout:"VERTICAL",stroke:G200,shadow:true});
  card0.primaryAxisSizingMode="AUTO";
  var cardH0=frame(card0,"Card Header",1132,48,{color:WHITE,layout:"HORIZONTAL",padX:20,padY:14,alignX:"CENTER"});
  cardH0.primaryAxisAlignItems="SPACE_BETWEEN";cardH0.layoutSizingHorizontal="FILL";
  txt(cardH0,"Segments ma'lumotlari",{style:"Semi Bold",size:15,color:G900});
  var cardB0=frame(card0,"Card Body",1132,150,{padX:20,padY:16});
  cardB0.layoutSizingHorizontal="FILL";cardB0.primaryAxisSizingMode="AUTO";cardB0.layoutMode="VERTICAL";cardB0.itemSpacing=8;
  
  txt(cardB0,"Bu sahifada Segments bo'limining asosiy kontenti joylashadi.",{size:14,color:G600,w:600,wrap:true});
  txt(cardB0,"HTML sahifa: html/analytics/07-segments.html",{size:12,color:G400,w:600});

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

// ANALYTICS / Tags
var screen=figma.createFrame();
screen.name="08-tags - Tags";
screen.resize(1440,900);
screen.fills=[{type:'SOLID',color:BG}];
screen.x=10920;screen.y=8400;


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
  var nav7=frame(sidebar,"Nav Analytics",240,36,{x:10,y:360,color:PRIMARY ,radius:8});
  
  txt(nav7,"Analytics",{style:"Medium",size:13,color:WHITE,x:36,y:9});
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
  txt(headerLeft,"Tags",{style:"Semi Bold",size:20,color:G900});
  txt(headerLeft,"Teglar statistikasi",{size:13,color:G500});
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
  
  var sTab0=frame(subnav,"Tab Overview",88,36,{color:PRIMARY_LIGHT,radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  
  txt(sTab0,"Overview",{style:"Medium",size:13,color:PRIMARY});
  var sTab1=frame(subnav,"Tab Response Times",136,36,{color:{r:0,g:0,b:0},radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  sTab1.fills=[];
  txt(sTab1,"Response Times",{style:"Medium",size:13,color:G600});
  var sTab2=frame(subnav,"Tab Operators",96,36,{color:{r:0,g:0,b:0},radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  sTab2.fills=[];
  txt(sTab2,"Operators",{style:"Medium",size:13,color:G600});
  var sTab3=frame(subnav,"Tab SLA",48,36,{color:{r:0,g:0,b:0},radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  sTab3.fills=[];
  txt(sTab3,"SLA",{style:"Medium",size:13,color:G600});
  var sTab4=frame(subnav,"Tab Channels",88,36,{color:{r:0,g:0,b:0},radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  sTab4.fills=[];
  txt(sTab4,"Channels",{style:"Medium",size:13,color:G600});
  var sTab5=frame(subnav,"Tab Segments",88,36,{color:{r:0,g:0,b:0},radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  sTab5.fills=[];
  txt(sTab5,"Segments",{style:"Medium",size:13,color:G600});
  var sTab6=frame(subnav,"Tab Tags",56,36,{color:{r:0,g:0,b:0},radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  sTab6.fills=[];
  txt(sTab6,"Tags",{style:"Medium",size:13,color:G600});
  var sTab7=frame(subnav,"Tab Custom Reports",136,36,{color:{r:0,g:0,b:0},radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  sTab7.fills=[];
  txt(sTab7,"Custom Reports",{style:"Medium",size:13,color:G600});
  var sTab8=frame(subnav,"Tab Export",72,36,{color:{r:0,g:0,b:0},radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  sTab8.fills=[];
  txt(sTab8,"Export",{style:"Medium",size:13,color:G600});
  var sTab9=frame(subnav,"Tab My Stats",88,36,{color:{r:0,g:0,b:0},radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  sTab9.fills=[];
  txt(sTab9,"My Stats",{style:"Medium",size:13,color:G600});
  



// Spacer
var contentSpacer=frame(content,"Spacer",1180,16);contentSpacer.fills=[];


  // Card: Tags ma'lumotlari
  var card0=frame(content,"Card Tags ma'lumotlari",1132,200,{x:24,color:WHITE,radius:12,layout:"VERTICAL",stroke:G200,shadow:true});
  card0.primaryAxisSizingMode="AUTO";
  var cardH0=frame(card0,"Card Header",1132,48,{color:WHITE,layout:"HORIZONTAL",padX:20,padY:14,alignX:"CENTER"});
  cardH0.primaryAxisAlignItems="SPACE_BETWEEN";cardH0.layoutSizingHorizontal="FILL";
  txt(cardH0,"Tags ma'lumotlari",{style:"Semi Bold",size:15,color:G900});
  var cardB0=frame(card0,"Card Body",1132,150,{padX:20,padY:16});
  cardB0.layoutSizingHorizontal="FILL";cardB0.primaryAxisSizingMode="AUTO";cardB0.layoutMode="VERTICAL";cardB0.itemSpacing=8;
  
  txt(cardB0,"Bu sahifada Tags bo'limining asosiy kontenti joylashadi.",{size:14,color:G600,w:600,wrap:true});
  txt(cardB0,"HTML sahifa: html/analytics/08-tags.html",{size:12,color:G400,w:600});

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

// ANALYTICS / Custom Reports
var screen=figma.createFrame();
screen.name="09-custom-reports - Custom Reports";
screen.resize(1440,900);
screen.fills=[{type:'SOLID',color:BG}];
screen.x=12480;screen.y=8400;


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
  var nav7=frame(sidebar,"Nav Analytics",240,36,{x:10,y:360,color:PRIMARY ,radius:8});
  
  txt(nav7,"Analytics",{style:"Medium",size:13,color:WHITE,x:36,y:9});
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
  txt(headerLeft,"Custom Reports",{style:"Semi Bold",size:20,color:G900});
  txt(headerLeft,"Maxsus hisobotlar",{size:13,color:G500});
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
  
  var sTab0=frame(subnav,"Tab Overview",88,36,{color:PRIMARY_LIGHT,radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  
  txt(sTab0,"Overview",{style:"Medium",size:13,color:PRIMARY});
  var sTab1=frame(subnav,"Tab Response Times",136,36,{color:{r:0,g:0,b:0},radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  sTab1.fills=[];
  txt(sTab1,"Response Times",{style:"Medium",size:13,color:G600});
  var sTab2=frame(subnav,"Tab Operators",96,36,{color:{r:0,g:0,b:0},radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  sTab2.fills=[];
  txt(sTab2,"Operators",{style:"Medium",size:13,color:G600});
  var sTab3=frame(subnav,"Tab SLA",48,36,{color:{r:0,g:0,b:0},radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  sTab3.fills=[];
  txt(sTab3,"SLA",{style:"Medium",size:13,color:G600});
  var sTab4=frame(subnav,"Tab Channels",88,36,{color:{r:0,g:0,b:0},radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  sTab4.fills=[];
  txt(sTab4,"Channels",{style:"Medium",size:13,color:G600});
  var sTab5=frame(subnav,"Tab Segments",88,36,{color:{r:0,g:0,b:0},radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  sTab5.fills=[];
  txt(sTab5,"Segments",{style:"Medium",size:13,color:G600});
  var sTab6=frame(subnav,"Tab Tags",56,36,{color:{r:0,g:0,b:0},radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  sTab6.fills=[];
  txt(sTab6,"Tags",{style:"Medium",size:13,color:G600});
  var sTab7=frame(subnav,"Tab Custom Reports",136,36,{color:{r:0,g:0,b:0},radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  sTab7.fills=[];
  txt(sTab7,"Custom Reports",{style:"Medium",size:13,color:G600});
  var sTab8=frame(subnav,"Tab Export",72,36,{color:{r:0,g:0,b:0},radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  sTab8.fills=[];
  txt(sTab8,"Export",{style:"Medium",size:13,color:G600});
  var sTab9=frame(subnav,"Tab My Stats",88,36,{color:{r:0,g:0,b:0},radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  sTab9.fills=[];
  txt(sTab9,"My Stats",{style:"Medium",size:13,color:G600});
  



// Spacer
var contentSpacer=frame(content,"Spacer",1180,16);contentSpacer.fills=[];


  // Card: Custom Reports ma'lumotlari
  var card0=frame(content,"Card Custom Reports ma'lumotlari",1132,200,{x:24,color:WHITE,radius:12,layout:"VERTICAL",stroke:G200,shadow:true});
  card0.primaryAxisSizingMode="AUTO";
  var cardH0=frame(card0,"Card Header",1132,48,{color:WHITE,layout:"HORIZONTAL",padX:20,padY:14,alignX:"CENTER"});
  cardH0.primaryAxisAlignItems="SPACE_BETWEEN";cardH0.layoutSizingHorizontal="FILL";
  txt(cardH0,"Custom Reports ma'lumotlari",{style:"Semi Bold",size:15,color:G900});
  var cardB0=frame(card0,"Card Body",1132,150,{padX:20,padY:16});
  cardB0.layoutSizingHorizontal="FILL";cardB0.primaryAxisSizingMode="AUTO";cardB0.layoutMode="VERTICAL";cardB0.itemSpacing=8;
  
  txt(cardB0,"Bu sahifada Custom Reports bo'limining asosiy kontenti joylashadi.",{size:14,color:G600,w:600,wrap:true});
  txt(cardB0,"HTML sahifa: html/analytics/09-custom-reports.html",{size:12,color:G400,w:600});

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

// ANALYTICS / Export
var screen=figma.createFrame();
screen.name="10-export - Export";
screen.resize(1440,900);
screen.fills=[{type:'SOLID',color:BG}];
screen.x=14040;screen.y=8400;


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
  var nav7=frame(sidebar,"Nav Analytics",240,36,{x:10,y:360,color:PRIMARY ,radius:8});
  
  txt(nav7,"Analytics",{style:"Medium",size:13,color:WHITE,x:36,y:9});
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
  txt(headerLeft,"Export",{style:"Semi Bold",size:20,color:G900});
  txt(headerLeft,"Ma'lumotlarni eksport qilish",{size:13,color:G500});
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
  
  var sTab0=frame(subnav,"Tab Overview",88,36,{color:PRIMARY_LIGHT,radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  
  txt(sTab0,"Overview",{style:"Medium",size:13,color:PRIMARY});
  var sTab1=frame(subnav,"Tab Response Times",136,36,{color:{r:0,g:0,b:0},radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  sTab1.fills=[];
  txt(sTab1,"Response Times",{style:"Medium",size:13,color:G600});
  var sTab2=frame(subnav,"Tab Operators",96,36,{color:{r:0,g:0,b:0},radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  sTab2.fills=[];
  txt(sTab2,"Operators",{style:"Medium",size:13,color:G600});
  var sTab3=frame(subnav,"Tab SLA",48,36,{color:{r:0,g:0,b:0},radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  sTab3.fills=[];
  txt(sTab3,"SLA",{style:"Medium",size:13,color:G600});
  var sTab4=frame(subnav,"Tab Channels",88,36,{color:{r:0,g:0,b:0},radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  sTab4.fills=[];
  txt(sTab4,"Channels",{style:"Medium",size:13,color:G600});
  var sTab5=frame(subnav,"Tab Segments",88,36,{color:{r:0,g:0,b:0},radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  sTab5.fills=[];
  txt(sTab5,"Segments",{style:"Medium",size:13,color:G600});
  var sTab6=frame(subnav,"Tab Tags",56,36,{color:{r:0,g:0,b:0},radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  sTab6.fills=[];
  txt(sTab6,"Tags",{style:"Medium",size:13,color:G600});
  var sTab7=frame(subnav,"Tab Custom Reports",136,36,{color:{r:0,g:0,b:0},radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  sTab7.fills=[];
  txt(sTab7,"Custom Reports",{style:"Medium",size:13,color:G600});
  var sTab8=frame(subnav,"Tab Export",72,36,{color:{r:0,g:0,b:0},radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  sTab8.fills=[];
  txt(sTab8,"Export",{style:"Medium",size:13,color:G600});
  var sTab9=frame(subnav,"Tab My Stats",88,36,{color:{r:0,g:0,b:0},radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  sTab9.fills=[];
  txt(sTab9,"My Stats",{style:"Medium",size:13,color:G600});
  



// Spacer
var contentSpacer=frame(content,"Spacer",1180,16);contentSpacer.fills=[];


  // Card: Export ma'lumotlari
  var card0=frame(content,"Card Export ma'lumotlari",1132,200,{x:24,color:WHITE,radius:12,layout:"VERTICAL",stroke:G200,shadow:true});
  card0.primaryAxisSizingMode="AUTO";
  var cardH0=frame(card0,"Card Header",1132,48,{color:WHITE,layout:"HORIZONTAL",padX:20,padY:14,alignX:"CENTER"});
  cardH0.primaryAxisAlignItems="SPACE_BETWEEN";cardH0.layoutSizingHorizontal="FILL";
  txt(cardH0,"Export ma'lumotlari",{style:"Semi Bold",size:15,color:G900});
  var cardB0=frame(card0,"Card Body",1132,150,{padX:20,padY:16});
  cardB0.layoutSizingHorizontal="FILL";cardB0.primaryAxisSizingMode="AUTO";cardB0.layoutMode="VERTICAL";cardB0.itemSpacing=8;
  
  txt(cardB0,"Bu sahifada Export bo'limining asosiy kontenti joylashadi.",{size:14,color:G600,w:600,wrap:true});
  txt(cardB0,"HTML sahifa: html/analytics/10-export.html",{size:12,color:G400,w:600});

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

// ANALYTICS / My Stats
var screen=figma.createFrame();
screen.name="11-my-stats - My Stats";
screen.resize(1440,900);
screen.fills=[{type:'SOLID',color:BG}];
screen.x=15600;screen.y=8400;


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
  var nav7=frame(sidebar,"Nav Analytics",240,36,{x:10,y:360,color:PRIMARY ,radius:8});
  
  txt(nav7,"Analytics",{style:"Medium",size:13,color:WHITE,x:36,y:9});
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
  txt(headerLeft,"My Stats",{style:"Semi Bold",size:20,color:G900});
  txt(headerLeft,"Shaxsiy statistikam",{size:13,color:G500});
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
  
  var sTab0=frame(subnav,"Tab Overview",88,36,{color:PRIMARY_LIGHT,radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  
  txt(sTab0,"Overview",{style:"Medium",size:13,color:PRIMARY});
  var sTab1=frame(subnav,"Tab Response Times",136,36,{color:{r:0,g:0,b:0},radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  sTab1.fills=[];
  txt(sTab1,"Response Times",{style:"Medium",size:13,color:G600});
  var sTab2=frame(subnav,"Tab Operators",96,36,{color:{r:0,g:0,b:0},radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  sTab2.fills=[];
  txt(sTab2,"Operators",{style:"Medium",size:13,color:G600});
  var sTab3=frame(subnav,"Tab SLA",48,36,{color:{r:0,g:0,b:0},radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  sTab3.fills=[];
  txt(sTab3,"SLA",{style:"Medium",size:13,color:G600});
  var sTab4=frame(subnav,"Tab Channels",88,36,{color:{r:0,g:0,b:0},radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  sTab4.fills=[];
  txt(sTab4,"Channels",{style:"Medium",size:13,color:G600});
  var sTab5=frame(subnav,"Tab Segments",88,36,{color:{r:0,g:0,b:0},radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  sTab5.fills=[];
  txt(sTab5,"Segments",{style:"Medium",size:13,color:G600});
  var sTab6=frame(subnav,"Tab Tags",56,36,{color:{r:0,g:0,b:0},radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  sTab6.fills=[];
  txt(sTab6,"Tags",{style:"Medium",size:13,color:G600});
  var sTab7=frame(subnav,"Tab Custom Reports",136,36,{color:{r:0,g:0,b:0},radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  sTab7.fills=[];
  txt(sTab7,"Custom Reports",{style:"Medium",size:13,color:G600});
  var sTab8=frame(subnav,"Tab Export",72,36,{color:{r:0,g:0,b:0},radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  sTab8.fills=[];
  txt(sTab8,"Export",{style:"Medium",size:13,color:G600});
  var sTab9=frame(subnav,"Tab My Stats",88,36,{color:{r:0,g:0,b:0},radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  sTab9.fills=[];
  txt(sTab9,"My Stats",{style:"Medium",size:13,color:G600});
  



// Spacer
var contentSpacer=frame(content,"Spacer",1180,16);contentSpacer.fills=[];


  // Card: My Stats ma'lumotlari
  var card0=frame(content,"Card My Stats ma'lumotlari",1132,200,{x:24,color:WHITE,radius:12,layout:"VERTICAL",stroke:G200,shadow:true});
  card0.primaryAxisSizingMode="AUTO";
  var cardH0=frame(card0,"Card Header",1132,48,{color:WHITE,layout:"HORIZONTAL",padX:20,padY:14,alignX:"CENTER"});
  cardH0.primaryAxisAlignItems="SPACE_BETWEEN";cardH0.layoutSizingHorizontal="FILL";
  txt(cardH0,"My Stats ma'lumotlari",{style:"Semi Bold",size:15,color:G900});
  var cardB0=frame(card0,"Card Body",1132,150,{padX:20,padY:16});
  cardB0.layoutSizingHorizontal="FILL";cardB0.primaryAxisSizingMode="AUTO";cardB0.layoutMode="VERTICAL";cardB0.itemSpacing=8;
  
  txt(cardB0,"Bu sahifada My Stats bo'limining asosiy kontenti joylashadi.",{size:14,color:G600,w:600,wrap:true});
  txt(cardB0,"HTML sahifa: html/analytics/11-my-stats.html",{size:12,color:G400,w:600});

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

return {success:true, section:"ANALYTICS", screens:11};
