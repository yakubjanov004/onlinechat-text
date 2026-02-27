
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
// SECTION: SETTINGS (8 screens)
// ═══════════════════════════════════════════

// Section label
var sLabel=figma.createFrame();
sLabel.name="— SETTINGS —";
sLabel.resize(12360, 60);
sLabel.fills=[{type:'SOLID',color:{r:0,g:0,b:0}}];
sLabel.cornerRadius=8;
sLabel.x=0;sLabel.y=10720;
sLabel.layoutMode="HORIZONTAL";sLabel.primaryAxisAlignItems="CENTER";sLabel.counterAxisAlignItems="CENTER";
var slTxt=figma.createText();
slTxt.fontName={family:"Inter",style:"Bold"};
slTxt.characters="SETTINGS (8)";
slTxt.fontSize=20;
slTxt.fills=[{type:'SOLID',color:{r:1,g:1,b:1}}];
sLabel.appendChild(slTxt);
figma.currentPage.appendChild(sLabel);

// SETTINGS / Workspace
var screen=figma.createFrame();
screen.name="01-workspace - Workspace";
screen.resize(1440,900);
screen.fills=[{type:'SOLID',color:BG}];
screen.x=0;screen.y=10800;


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
  var nav11=frame(sidebar,"Nav Settings",240,36,{x:10,y:520,color:PRIMARY ,radius:8});
  
  txt(nav11,"Settings",{style:"Medium",size:13,color:WHITE,x:36,y:9});
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
  txt(headerLeft,"Workspace",{style:"Semi Bold",size:20,color:G900});
  txt(headerLeft,"Workspace sozlamalari",{size:13,color:G500});
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
  
  var sTab0=frame(subnav,"Tab Workspace",96,36,{color:PRIMARY_LIGHT,radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  
  txt(sTab0,"Workspace",{style:"Medium",size:13,color:PRIMARY});
  var sTab1=frame(subnav,"Tab Widget",72,36,{color:{r:0,g:0,b:0},radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  sTab1.fills=[];
  txt(sTab1,"Widget",{style:"Medium",size:13,color:G600});
  var sTab2=frame(subnav,"Tab Security",88,36,{color:{r:0,g:0,b:0},radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  sTab2.fills=[];
  txt(sTab2,"Security",{style:"Medium",size:13,color:G600});
  var sTab3=frame(subnav,"Tab Notifications",128,36,{color:{r:0,g:0,b:0},radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  sTab3.fills=[];
  txt(sTab3,"Notifications",{style:"Medium",size:13,color:G600});
  var sTab4=frame(subnav,"Tab Profile",80,36,{color:{r:0,g:0,b:0},radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  sTab4.fills=[];
  txt(sTab4,"Profile",{style:"Medium",size:13,color:G600});
  var sTab5=frame(subnav,"Tab Privacy Export",136,36,{color:{r:0,g:0,b:0},radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  sTab5.fills=[];
  txt(sTab5,"Privacy Export",{style:"Medium",size:13,color:G600});
  var sTab6=frame(subnav,"Tab Privacy Delete",136,36,{color:{r:0,g:0,b:0},radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  sTab6.fills=[];
  txt(sTab6,"Privacy Delete",{style:"Medium",size:13,color:G600});
  var sTab7=frame(subnav,"Tab Privacy Settings",152,36,{color:{r:0,g:0,b:0},radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  sTab7.fills=[];
  txt(sTab7,"Privacy Settings",{style:"Medium",size:13,color:G600});
  



// Spacer
var contentSpacer=frame(content,"Spacer",1180,16);contentSpacer.fills=[];


  // Card: Workspace ma'lumotlari
  var card0=frame(content,"Card Workspace ma'lumotlari",1132,200,{x:24,color:WHITE,radius:12,layout:"VERTICAL",stroke:G200,shadow:true});
  card0.primaryAxisSizingMode="AUTO";
  var cardH0=frame(card0,"Card Header",1132,48,{color:WHITE,layout:"HORIZONTAL",padX:20,padY:14,alignX:"CENTER"});
  cardH0.primaryAxisAlignItems="SPACE_BETWEEN";cardH0.layoutSizingHorizontal="FILL";
  txt(cardH0,"Workspace ma'lumotlari",{style:"Semi Bold",size:15,color:G900});
  var cardB0=frame(card0,"Card Body",1132,150,{padX:20,padY:16});
  cardB0.layoutSizingHorizontal="FILL";cardB0.primaryAxisSizingMode="AUTO";cardB0.layoutMode="VERTICAL";cardB0.itemSpacing=8;
  
  txt(cardB0,"Bu sahifada Workspace bo'limining asosiy kontenti joylashadi.",{size:14,color:G600,w:600,wrap:true});
  txt(cardB0,"HTML sahifa: html/settings/01-workspace.html",{size:12,color:G400,w:600});

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

// SETTINGS / Widget Settings
var screen=figma.createFrame();
screen.name="02-widget-settings - Widget Settings";
screen.resize(1440,900);
screen.fills=[{type:'SOLID',color:BG}];
screen.x=1560;screen.y=10800;


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
  var nav11=frame(sidebar,"Nav Settings",240,36,{x:10,y:520,color:PRIMARY ,radius:8});
  
  txt(nav11,"Settings",{style:"Medium",size:13,color:WHITE,x:36,y:9});
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
  txt(headerLeft,"Widget Settings",{style:"Semi Bold",size:20,color:G900});
  txt(headerLeft,"Chat widget sozlamalari",{size:13,color:G500});
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
  
  var sTab0=frame(subnav,"Tab Workspace",96,36,{color:PRIMARY_LIGHT,radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  
  txt(sTab0,"Workspace",{style:"Medium",size:13,color:PRIMARY});
  var sTab1=frame(subnav,"Tab Widget",72,36,{color:{r:0,g:0,b:0},radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  sTab1.fills=[];
  txt(sTab1,"Widget",{style:"Medium",size:13,color:G600});
  var sTab2=frame(subnav,"Tab Security",88,36,{color:{r:0,g:0,b:0},radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  sTab2.fills=[];
  txt(sTab2,"Security",{style:"Medium",size:13,color:G600});
  var sTab3=frame(subnav,"Tab Notifications",128,36,{color:{r:0,g:0,b:0},radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  sTab3.fills=[];
  txt(sTab3,"Notifications",{style:"Medium",size:13,color:G600});
  var sTab4=frame(subnav,"Tab Profile",80,36,{color:{r:0,g:0,b:0},radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  sTab4.fills=[];
  txt(sTab4,"Profile",{style:"Medium",size:13,color:G600});
  var sTab5=frame(subnav,"Tab Privacy Export",136,36,{color:{r:0,g:0,b:0},radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  sTab5.fills=[];
  txt(sTab5,"Privacy Export",{style:"Medium",size:13,color:G600});
  var sTab6=frame(subnav,"Tab Privacy Delete",136,36,{color:{r:0,g:0,b:0},radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  sTab6.fills=[];
  txt(sTab6,"Privacy Delete",{style:"Medium",size:13,color:G600});
  var sTab7=frame(subnav,"Tab Privacy Settings",152,36,{color:{r:0,g:0,b:0},radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  sTab7.fills=[];
  txt(sTab7,"Privacy Settings",{style:"Medium",size:13,color:G600});
  



// Spacer
var contentSpacer=frame(content,"Spacer",1180,16);contentSpacer.fills=[];


  // Card: Widget Settings ma'lumotlari
  var card0=frame(content,"Card Widget Settings ma'lumotlari",1132,200,{x:24,color:WHITE,radius:12,layout:"VERTICAL",stroke:G200,shadow:true});
  card0.primaryAxisSizingMode="AUTO";
  var cardH0=frame(card0,"Card Header",1132,48,{color:WHITE,layout:"HORIZONTAL",padX:20,padY:14,alignX:"CENTER"});
  cardH0.primaryAxisAlignItems="SPACE_BETWEEN";cardH0.layoutSizingHorizontal="FILL";
  txt(cardH0,"Widget Settings ma'lumotlari",{style:"Semi Bold",size:15,color:G900});
  var cardB0=frame(card0,"Card Body",1132,150,{padX:20,padY:16});
  cardB0.layoutSizingHorizontal="FILL";cardB0.primaryAxisSizingMode="AUTO";cardB0.layoutMode="VERTICAL";cardB0.itemSpacing=8;
  
  txt(cardB0,"Bu sahifada Widget Settings bo'limining asosiy kontenti joylashadi.",{size:14,color:G600,w:600,wrap:true});
  txt(cardB0,"HTML sahifa: html/settings/02-widget-settings.html",{size:12,color:G400,w:600});

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

// SETTINGS / Security
var screen=figma.createFrame();
screen.name="03-security - Security";
screen.resize(1440,900);
screen.fills=[{type:'SOLID',color:BG}];
screen.x=3120;screen.y=10800;


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
  var nav11=frame(sidebar,"Nav Settings",240,36,{x:10,y:520,color:PRIMARY ,radius:8});
  
  txt(nav11,"Settings",{style:"Medium",size:13,color:WHITE,x:36,y:9});
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
  txt(headerLeft,"Security",{style:"Semi Bold",size:20,color:G900});
  txt(headerLeft,"Xavfsizlik sozlamalari",{size:13,color:G500});
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
  
  var sTab0=frame(subnav,"Tab Workspace",96,36,{color:PRIMARY_LIGHT,radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  
  txt(sTab0,"Workspace",{style:"Medium",size:13,color:PRIMARY});
  var sTab1=frame(subnav,"Tab Widget",72,36,{color:{r:0,g:0,b:0},radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  sTab1.fills=[];
  txt(sTab1,"Widget",{style:"Medium",size:13,color:G600});
  var sTab2=frame(subnav,"Tab Security",88,36,{color:{r:0,g:0,b:0},radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  sTab2.fills=[];
  txt(sTab2,"Security",{style:"Medium",size:13,color:G600});
  var sTab3=frame(subnav,"Tab Notifications",128,36,{color:{r:0,g:0,b:0},radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  sTab3.fills=[];
  txt(sTab3,"Notifications",{style:"Medium",size:13,color:G600});
  var sTab4=frame(subnav,"Tab Profile",80,36,{color:{r:0,g:0,b:0},radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  sTab4.fills=[];
  txt(sTab4,"Profile",{style:"Medium",size:13,color:G600});
  var sTab5=frame(subnav,"Tab Privacy Export",136,36,{color:{r:0,g:0,b:0},radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  sTab5.fills=[];
  txt(sTab5,"Privacy Export",{style:"Medium",size:13,color:G600});
  var sTab6=frame(subnav,"Tab Privacy Delete",136,36,{color:{r:0,g:0,b:0},radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  sTab6.fills=[];
  txt(sTab6,"Privacy Delete",{style:"Medium",size:13,color:G600});
  var sTab7=frame(subnav,"Tab Privacy Settings",152,36,{color:{r:0,g:0,b:0},radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  sTab7.fills=[];
  txt(sTab7,"Privacy Settings",{style:"Medium",size:13,color:G600});
  



// Spacer
var contentSpacer=frame(content,"Spacer",1180,16);contentSpacer.fills=[];


  // Card: Security ma'lumotlari
  var card0=frame(content,"Card Security ma'lumotlari",1132,200,{x:24,color:WHITE,radius:12,layout:"VERTICAL",stroke:G200,shadow:true});
  card0.primaryAxisSizingMode="AUTO";
  var cardH0=frame(card0,"Card Header",1132,48,{color:WHITE,layout:"HORIZONTAL",padX:20,padY:14,alignX:"CENTER"});
  cardH0.primaryAxisAlignItems="SPACE_BETWEEN";cardH0.layoutSizingHorizontal="FILL";
  txt(cardH0,"Security ma'lumotlari",{style:"Semi Bold",size:15,color:G900});
  var cardB0=frame(card0,"Card Body",1132,150,{padX:20,padY:16});
  cardB0.layoutSizingHorizontal="FILL";cardB0.primaryAxisSizingMode="AUTO";cardB0.layoutMode="VERTICAL";cardB0.itemSpacing=8;
  
  txt(cardB0,"Bu sahifada Security bo'limining asosiy kontenti joylashadi.",{size:14,color:G600,w:600,wrap:true});
  txt(cardB0,"HTML sahifa: html/settings/03-security.html",{size:12,color:G400,w:600});

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

// SETTINGS / Notifications
var screen=figma.createFrame();
screen.name="04-notifications - Notifications";
screen.resize(1440,900);
screen.fills=[{type:'SOLID',color:BG}];
screen.x=4680;screen.y=10800;


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
  var nav11=frame(sidebar,"Nav Settings",240,36,{x:10,y:520,color:PRIMARY ,radius:8});
  
  txt(nav11,"Settings",{style:"Medium",size:13,color:WHITE,x:36,y:9});
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
  txt(headerLeft,"Bildirishnomalar",{size:13,color:G500});
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
  
  var sTab0=frame(subnav,"Tab Workspace",96,36,{color:PRIMARY_LIGHT,radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  
  txt(sTab0,"Workspace",{style:"Medium",size:13,color:PRIMARY});
  var sTab1=frame(subnav,"Tab Widget",72,36,{color:{r:0,g:0,b:0},radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  sTab1.fills=[];
  txt(sTab1,"Widget",{style:"Medium",size:13,color:G600});
  var sTab2=frame(subnav,"Tab Security",88,36,{color:{r:0,g:0,b:0},radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  sTab2.fills=[];
  txt(sTab2,"Security",{style:"Medium",size:13,color:G600});
  var sTab3=frame(subnav,"Tab Notifications",128,36,{color:{r:0,g:0,b:0},radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  sTab3.fills=[];
  txt(sTab3,"Notifications",{style:"Medium",size:13,color:G600});
  var sTab4=frame(subnav,"Tab Profile",80,36,{color:{r:0,g:0,b:0},radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  sTab4.fills=[];
  txt(sTab4,"Profile",{style:"Medium",size:13,color:G600});
  var sTab5=frame(subnav,"Tab Privacy Export",136,36,{color:{r:0,g:0,b:0},radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  sTab5.fills=[];
  txt(sTab5,"Privacy Export",{style:"Medium",size:13,color:G600});
  var sTab6=frame(subnav,"Tab Privacy Delete",136,36,{color:{r:0,g:0,b:0},radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  sTab6.fills=[];
  txt(sTab6,"Privacy Delete",{style:"Medium",size:13,color:G600});
  var sTab7=frame(subnav,"Tab Privacy Settings",152,36,{color:{r:0,g:0,b:0},radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  sTab7.fills=[];
  txt(sTab7,"Privacy Settings",{style:"Medium",size:13,color:G600});
  



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
  txt(cardB0,"HTML sahifa: html/settings/04-notifications.html",{size:12,color:G400,w:600});

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

// SETTINGS / Profile
var screen=figma.createFrame();
screen.name="05-profile - Profile";
screen.resize(1440,900);
screen.fills=[{type:'SOLID',color:BG}];
screen.x=6240;screen.y=10800;


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
  var nav11=frame(sidebar,"Nav Settings",240,36,{x:10,y:520,color:PRIMARY ,radius:8});
  
  txt(nav11,"Settings",{style:"Medium",size:13,color:WHITE,x:36,y:9});
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
  txt(headerLeft,"Profile",{style:"Semi Bold",size:20,color:G900});
  txt(headerLeft,"Profil sozlamalari",{size:13,color:G500});
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
  
  var sTab0=frame(subnav,"Tab Workspace",96,36,{color:PRIMARY_LIGHT,radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  
  txt(sTab0,"Workspace",{style:"Medium",size:13,color:PRIMARY});
  var sTab1=frame(subnav,"Tab Widget",72,36,{color:{r:0,g:0,b:0},radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  sTab1.fills=[];
  txt(sTab1,"Widget",{style:"Medium",size:13,color:G600});
  var sTab2=frame(subnav,"Tab Security",88,36,{color:{r:0,g:0,b:0},radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  sTab2.fills=[];
  txt(sTab2,"Security",{style:"Medium",size:13,color:G600});
  var sTab3=frame(subnav,"Tab Notifications",128,36,{color:{r:0,g:0,b:0},radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  sTab3.fills=[];
  txt(sTab3,"Notifications",{style:"Medium",size:13,color:G600});
  var sTab4=frame(subnav,"Tab Profile",80,36,{color:{r:0,g:0,b:0},radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  sTab4.fills=[];
  txt(sTab4,"Profile",{style:"Medium",size:13,color:G600});
  var sTab5=frame(subnav,"Tab Privacy Export",136,36,{color:{r:0,g:0,b:0},radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  sTab5.fills=[];
  txt(sTab5,"Privacy Export",{style:"Medium",size:13,color:G600});
  var sTab6=frame(subnav,"Tab Privacy Delete",136,36,{color:{r:0,g:0,b:0},radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  sTab6.fills=[];
  txt(sTab6,"Privacy Delete",{style:"Medium",size:13,color:G600});
  var sTab7=frame(subnav,"Tab Privacy Settings",152,36,{color:{r:0,g:0,b:0},radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  sTab7.fills=[];
  txt(sTab7,"Privacy Settings",{style:"Medium",size:13,color:G600});
  



// Spacer
var contentSpacer=frame(content,"Spacer",1180,16);contentSpacer.fills=[];


  // Card: Profile ma'lumotlari
  var card0=frame(content,"Card Profile ma'lumotlari",1132,200,{x:24,color:WHITE,radius:12,layout:"VERTICAL",stroke:G200,shadow:true});
  card0.primaryAxisSizingMode="AUTO";
  var cardH0=frame(card0,"Card Header",1132,48,{color:WHITE,layout:"HORIZONTAL",padX:20,padY:14,alignX:"CENTER"});
  cardH0.primaryAxisAlignItems="SPACE_BETWEEN";cardH0.layoutSizingHorizontal="FILL";
  txt(cardH0,"Profile ma'lumotlari",{style:"Semi Bold",size:15,color:G900});
  var cardB0=frame(card0,"Card Body",1132,150,{padX:20,padY:16});
  cardB0.layoutSizingHorizontal="FILL";cardB0.primaryAxisSizingMode="AUTO";cardB0.layoutMode="VERTICAL";cardB0.itemSpacing=8;
  
  txt(cardB0,"Bu sahifada Profile bo'limining asosiy kontenti joylashadi.",{size:14,color:G600,w:600,wrap:true});
  txt(cardB0,"HTML sahifa: html/settings/05-profile.html",{size:12,color:G400,w:600});

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

// SETTINGS / Privacy Export
var screen=figma.createFrame();
screen.name="06-privacy-export - Privacy Export";
screen.resize(1440,900);
screen.fills=[{type:'SOLID',color:BG}];
screen.x=7800;screen.y=10800;


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
  var nav11=frame(sidebar,"Nav Settings",240,36,{x:10,y:520,color:PRIMARY ,radius:8});
  
  txt(nav11,"Settings",{style:"Medium",size:13,color:WHITE,x:36,y:9});
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
  txt(headerLeft,"Privacy Export",{style:"Semi Bold",size:20,color:G900});
  txt(headerLeft,"Ma'lumotlarni eksport",{size:13,color:G500});
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
  
  var sTab0=frame(subnav,"Tab Workspace",96,36,{color:PRIMARY_LIGHT,radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  
  txt(sTab0,"Workspace",{style:"Medium",size:13,color:PRIMARY});
  var sTab1=frame(subnav,"Tab Widget",72,36,{color:{r:0,g:0,b:0},radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  sTab1.fills=[];
  txt(sTab1,"Widget",{style:"Medium",size:13,color:G600});
  var sTab2=frame(subnav,"Tab Security",88,36,{color:{r:0,g:0,b:0},radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  sTab2.fills=[];
  txt(sTab2,"Security",{style:"Medium",size:13,color:G600});
  var sTab3=frame(subnav,"Tab Notifications",128,36,{color:{r:0,g:0,b:0},radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  sTab3.fills=[];
  txt(sTab3,"Notifications",{style:"Medium",size:13,color:G600});
  var sTab4=frame(subnav,"Tab Profile",80,36,{color:{r:0,g:0,b:0},radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  sTab4.fills=[];
  txt(sTab4,"Profile",{style:"Medium",size:13,color:G600});
  var sTab5=frame(subnav,"Tab Privacy Export",136,36,{color:{r:0,g:0,b:0},radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  sTab5.fills=[];
  txt(sTab5,"Privacy Export",{style:"Medium",size:13,color:G600});
  var sTab6=frame(subnav,"Tab Privacy Delete",136,36,{color:{r:0,g:0,b:0},radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  sTab6.fills=[];
  txt(sTab6,"Privacy Delete",{style:"Medium",size:13,color:G600});
  var sTab7=frame(subnav,"Tab Privacy Settings",152,36,{color:{r:0,g:0,b:0},radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  sTab7.fills=[];
  txt(sTab7,"Privacy Settings",{style:"Medium",size:13,color:G600});
  



// Spacer
var contentSpacer=frame(content,"Spacer",1180,16);contentSpacer.fills=[];


  // Card: Privacy Export ma'lumotlari
  var card0=frame(content,"Card Privacy Export ma'lumotlari",1132,200,{x:24,color:WHITE,radius:12,layout:"VERTICAL",stroke:G200,shadow:true});
  card0.primaryAxisSizingMode="AUTO";
  var cardH0=frame(card0,"Card Header",1132,48,{color:WHITE,layout:"HORIZONTAL",padX:20,padY:14,alignX:"CENTER"});
  cardH0.primaryAxisAlignItems="SPACE_BETWEEN";cardH0.layoutSizingHorizontal="FILL";
  txt(cardH0,"Privacy Export ma'lumotlari",{style:"Semi Bold",size:15,color:G900});
  var cardB0=frame(card0,"Card Body",1132,150,{padX:20,padY:16});
  cardB0.layoutSizingHorizontal="FILL";cardB0.primaryAxisSizingMode="AUTO";cardB0.layoutMode="VERTICAL";cardB0.itemSpacing=8;
  
  txt(cardB0,"Bu sahifada Privacy Export bo'limining asosiy kontenti joylashadi.",{size:14,color:G600,w:600,wrap:true});
  txt(cardB0,"HTML sahifa: html/settings/06-privacy-export.html",{size:12,color:G400,w:600});

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

// SETTINGS / Privacy Delete
var screen=figma.createFrame();
screen.name="07-privacy-delete - Privacy Delete";
screen.resize(1440,900);
screen.fills=[{type:'SOLID',color:BG}];
screen.x=9360;screen.y=10800;


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
  var nav11=frame(sidebar,"Nav Settings",240,36,{x:10,y:520,color:PRIMARY ,radius:8});
  
  txt(nav11,"Settings",{style:"Medium",size:13,color:WHITE,x:36,y:9});
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
  txt(headerLeft,"Privacy Delete",{style:"Semi Bold",size:20,color:G900});
  txt(headerLeft,"Ma'lumotlarni o'chirish",{size:13,color:G500});
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
  
  var sTab0=frame(subnav,"Tab Workspace",96,36,{color:PRIMARY_LIGHT,radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  
  txt(sTab0,"Workspace",{style:"Medium",size:13,color:PRIMARY});
  var sTab1=frame(subnav,"Tab Widget",72,36,{color:{r:0,g:0,b:0},radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  sTab1.fills=[];
  txt(sTab1,"Widget",{style:"Medium",size:13,color:G600});
  var sTab2=frame(subnav,"Tab Security",88,36,{color:{r:0,g:0,b:0},radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  sTab2.fills=[];
  txt(sTab2,"Security",{style:"Medium",size:13,color:G600});
  var sTab3=frame(subnav,"Tab Notifications",128,36,{color:{r:0,g:0,b:0},radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  sTab3.fills=[];
  txt(sTab3,"Notifications",{style:"Medium",size:13,color:G600});
  var sTab4=frame(subnav,"Tab Profile",80,36,{color:{r:0,g:0,b:0},radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  sTab4.fills=[];
  txt(sTab4,"Profile",{style:"Medium",size:13,color:G600});
  var sTab5=frame(subnav,"Tab Privacy Export",136,36,{color:{r:0,g:0,b:0},radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  sTab5.fills=[];
  txt(sTab5,"Privacy Export",{style:"Medium",size:13,color:G600});
  var sTab6=frame(subnav,"Tab Privacy Delete",136,36,{color:{r:0,g:0,b:0},radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  sTab6.fills=[];
  txt(sTab6,"Privacy Delete",{style:"Medium",size:13,color:G600});
  var sTab7=frame(subnav,"Tab Privacy Settings",152,36,{color:{r:0,g:0,b:0},radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  sTab7.fills=[];
  txt(sTab7,"Privacy Settings",{style:"Medium",size:13,color:G600});
  



// Spacer
var contentSpacer=frame(content,"Spacer",1180,16);contentSpacer.fills=[];


  // Card: Privacy Delete ma'lumotlari
  var card0=frame(content,"Card Privacy Delete ma'lumotlari",1132,200,{x:24,color:WHITE,radius:12,layout:"VERTICAL",stroke:G200,shadow:true});
  card0.primaryAxisSizingMode="AUTO";
  var cardH0=frame(card0,"Card Header",1132,48,{color:WHITE,layout:"HORIZONTAL",padX:20,padY:14,alignX:"CENTER"});
  cardH0.primaryAxisAlignItems="SPACE_BETWEEN";cardH0.layoutSizingHorizontal="FILL";
  txt(cardH0,"Privacy Delete ma'lumotlari",{style:"Semi Bold",size:15,color:G900});
  var cardB0=frame(card0,"Card Body",1132,150,{padX:20,padY:16});
  cardB0.layoutSizingHorizontal="FILL";cardB0.primaryAxisSizingMode="AUTO";cardB0.layoutMode="VERTICAL";cardB0.itemSpacing=8;
  
  txt(cardB0,"Bu sahifada Privacy Delete bo'limining asosiy kontenti joylashadi.",{size:14,color:G600,w:600,wrap:true});
  txt(cardB0,"HTML sahifa: html/settings/07-privacy-delete.html",{size:12,color:G400,w:600});

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

// SETTINGS / Privacy Settings
var screen=figma.createFrame();
screen.name="08-privacy-settings - Privacy Settings";
screen.resize(1440,900);
screen.fills=[{type:'SOLID',color:BG}];
screen.x=10920;screen.y=10800;


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
  var nav11=frame(sidebar,"Nav Settings",240,36,{x:10,y:520,color:PRIMARY ,radius:8});
  
  txt(nav11,"Settings",{style:"Medium",size:13,color:WHITE,x:36,y:9});
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
  txt(headerLeft,"Privacy Settings",{style:"Semi Bold",size:20,color:G900});
  txt(headerLeft,"Maxfiylik sozlamalari",{size:13,color:G500});
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
  
  var sTab0=frame(subnav,"Tab Workspace",96,36,{color:PRIMARY_LIGHT,radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  
  txt(sTab0,"Workspace",{style:"Medium",size:13,color:PRIMARY});
  var sTab1=frame(subnav,"Tab Widget",72,36,{color:{r:0,g:0,b:0},radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  sTab1.fills=[];
  txt(sTab1,"Widget",{style:"Medium",size:13,color:G600});
  var sTab2=frame(subnav,"Tab Security",88,36,{color:{r:0,g:0,b:0},radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  sTab2.fills=[];
  txt(sTab2,"Security",{style:"Medium",size:13,color:G600});
  var sTab3=frame(subnav,"Tab Notifications",128,36,{color:{r:0,g:0,b:0},radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  sTab3.fills=[];
  txt(sTab3,"Notifications",{style:"Medium",size:13,color:G600});
  var sTab4=frame(subnav,"Tab Profile",80,36,{color:{r:0,g:0,b:0},radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  sTab4.fills=[];
  txt(sTab4,"Profile",{style:"Medium",size:13,color:G600});
  var sTab5=frame(subnav,"Tab Privacy Export",136,36,{color:{r:0,g:0,b:0},radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  sTab5.fills=[];
  txt(sTab5,"Privacy Export",{style:"Medium",size:13,color:G600});
  var sTab6=frame(subnav,"Tab Privacy Delete",136,36,{color:{r:0,g:0,b:0},radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  sTab6.fills=[];
  txt(sTab6,"Privacy Delete",{style:"Medium",size:13,color:G600});
  var sTab7=frame(subnav,"Tab Privacy Settings",152,36,{color:{r:0,g:0,b:0},radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  sTab7.fills=[];
  txt(sTab7,"Privacy Settings",{style:"Medium",size:13,color:G600});
  



// Spacer
var contentSpacer=frame(content,"Spacer",1180,16);contentSpacer.fills=[];


  // Card: Privacy Settings ma'lumotlari
  var card0=frame(content,"Card Privacy Settings ma'lumotlari",1132,200,{x:24,color:WHITE,radius:12,layout:"VERTICAL",stroke:G200,shadow:true});
  card0.primaryAxisSizingMode="AUTO";
  var cardH0=frame(card0,"Card Header",1132,48,{color:WHITE,layout:"HORIZONTAL",padX:20,padY:14,alignX:"CENTER"});
  cardH0.primaryAxisAlignItems="SPACE_BETWEEN";cardH0.layoutSizingHorizontal="FILL";
  txt(cardH0,"Privacy Settings ma'lumotlari",{style:"Semi Bold",size:15,color:G900});
  var cardB0=frame(card0,"Card Body",1132,150,{padX:20,padY:16});
  cardB0.layoutSizingHorizontal="FILL";cardB0.primaryAxisSizingMode="AUTO";cardB0.layoutMode="VERTICAL";cardB0.itemSpacing=8;
  
  txt(cardB0,"Bu sahifada Privacy Settings bo'limining asosiy kontenti joylashadi.",{size:14,color:G600,w:600,wrap:true});
  txt(cardB0,"HTML sahifa: html/settings/08-privacy-settings.html",{size:12,color:G400,w:600});

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

return {success:true, section:"SETTINGS", screens:8};
