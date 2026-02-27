
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
// SECTION: AUTH (5 screens)
// ═══════════════════════════════════════════

// Section label
var sLabel=figma.createFrame();
sLabel.name="— AUTH —";
sLabel.resize(7680, 60);
sLabel.fills=[{type:'SOLID',color:{r:0,g:0,b:0}}];
sLabel.cornerRadius=8;
sLabel.x=0;sLabel.y=1120;
sLabel.layoutMode="HORIZONTAL";sLabel.primaryAxisAlignItems="CENTER";sLabel.counterAxisAlignItems="CENTER";
var slTxt=figma.createText();
slTxt.fontName={family:"Inter",style:"Bold"};
slTxt.characters="AUTH (5)";
slTxt.fontSize=20;
slTxt.fills=[{type:'SOLID',color:{r:1,g:1,b:1}}];
sLabel.appendChild(slTxt);
figma.currentPage.appendChild(sLabel);

// AUTH / Login
var screen=figma.createFrame();
screen.name="01-login - Login";
screen.resize(1440,900);
screen.fills=[{type:'SOLID',color:BG}];
screen.layoutMode="VERTICAL";screen.primaryAxisAlignItems="CENTER";screen.counterAxisAlignItems="CENTER";
screen.x=0;screen.y=1200;

var card=frame(screen,"Card",480,100,{color:WHITE,radius:12,layout:"VERTICAL",alignX:"CENTER",pad:40,spacing:0,stroke:G200,shadow:true});
card.primaryAxisSizingMode="AUTO";card.counterAxisSizingMode="FIXED";card.resize(480,100);

// Logo
var logo=frame(card,"Logo",140,40,{color:PRIMARY,radius:8,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
txt(logo,"QULAY CHAT",{style:"Bold",size:13,color:WHITE});

var sp0=frame(card,"Sp",400,24);sp0.fills=[];card.appendChild(sp0);sp0.layoutSizingHorizontal="FILL";

txt(card,"Login",{style:"Semi Bold",size:24,color:G900,align:"CENTER"});
txt(card,"Kirish sahifasi",{size:14,color:G500,align:"CENTER"});

var sp1=frame(card,"Sp",400,20);sp1.fills=[];card.appendChild(sp1);sp1.layoutSizingHorizontal="FILL";


// Google button
var gBtn=frame(card,"Google Btn",400,44,{color:WHITE,radius:8,stroke:G300,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
txt(gBtn,"Google bilan kirish",{style:"Medium",size:14,color:G700});
card.appendChild(gBtn);gBtn.layoutSizingHorizontal="FILL";

// Divider
var divF=frame(card,"Divider",400,40,{layout:"HORIZONTAL",alignX:"CENTER",spacing:12,padY:8});
divF.primaryAxisSizingMode="FIXED";divF.counterAxisSizingMode="AUTO";
var dL1=figma.createRectangle();dL1.resize(100,1);dL1.fills=[{type:'SOLID',color:G200}];divF.appendChild(dL1);dL1.layoutGrow=1;
txt(divF,"yoki",{size:14,color:G500});
var dL2=figma.createRectangle();dL2.resize(100,1);dL2.fills=[{type:'SOLID',color:G200}];divF.appendChild(dL2);dL2.layoutGrow=1;
card.appendChild(divF);divF.layoutSizingHorizontal="FILL";



  // Field: Email
  var fld0=frame(card,"Field Email",400,70,{layout:"VERTICAL",spacing:6});
  fld0.primaryAxisSizingMode="AUTO";
  txt(fld0,"Email",{style:"Medium",size:14,color:G700});
  var inp0=frame(fld0,"Input",400,44,{color:WHITE,radius:8,stroke:G300,layout:"HORIZONTAL",alignX:"CENTER",padX:16});
  txt(inp0,"Email kiriting",{size:14,color:G400});
  inp0.layoutSizingHorizontal="FILL";
  card.appendChild(fld0);fld0.layoutSizingHorizontal="FILL";
  
  // Field: Parol
  var fld1=frame(card,"Field Parol",400,70,{layout:"VERTICAL",spacing:6});
  fld1.primaryAxisSizingMode="AUTO";
  txt(fld1,"Parol",{style:"Medium",size:14,color:G700});
  var inp1=frame(fld1,"Input",400,44,{color:WHITE,radius:8,stroke:G300,layout:"HORIZONTAL",alignX:"CENTER",padX:16});
  txt(inp1,"Parol kiriting",{size:14,color:G400});
  inp1.layoutSizingHorizontal="FILL";
  card.appendChild(fld1);fld1.layoutSizingHorizontal="FILL";
  

// Primary Button
var pBtn=frame(card,"Btn Primary",400,44,{color:PRIMARY,radius:8,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
txt(pBtn,"Login",{style:"Semi Bold",size:14,color:WHITE});
card.appendChild(pBtn);pBtn.layoutSizingHorizontal="FILL";

// Footer
var foot=frame(card,"Footer",400,20,{layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER",spacing:4,padY:16});
foot.counterAxisSizingMode="AUTO";
txt(foot,"Akkauntingiz bormi?",{size:14,color:G500});
txt(foot,"Kirish",{style:"Medium",size:14,color:PRIMARY});
card.appendChild(foot);foot.layoutSizingHorizontal="FILL";

figma.currentPage.appendChild(screen);

// AUTH / Ro'yxatdan o'tish
var screen=figma.createFrame();
screen.name="02-register - Ro'yxatdan o'tish";
screen.resize(1440,900);
screen.fills=[{type:'SOLID',color:BG}];
screen.layoutMode="VERTICAL";screen.primaryAxisAlignItems="CENTER";screen.counterAxisAlignItems="CENTER";
screen.x=1560;screen.y=1200;

var card=frame(screen,"Card",480,100,{color:WHITE,radius:12,layout:"VERTICAL",alignX:"CENTER",pad:40,spacing:0,stroke:G200,shadow:true});
card.primaryAxisSizingMode="AUTO";card.counterAxisSizingMode="FIXED";card.resize(480,100);

// Logo
var logo=frame(card,"Logo",140,40,{color:PRIMARY,radius:8,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
txt(logo,"QULAY CHAT",{style:"Bold",size:13,color:WHITE});

var sp0=frame(card,"Sp",400,24);sp0.fills=[];card.appendChild(sp0);sp0.layoutSizingHorizontal="FILL";

txt(card,"Ro'yxatdan o'tish",{style:"Semi Bold",size:24,color:G900,align:"CENTER"});
txt(card,"Yangi hisob yaratish",{size:14,color:G500,align:"CENTER"});

var sp1=frame(card,"Sp",400,20);sp1.fills=[];card.appendChild(sp1);sp1.layoutSizingHorizontal="FILL";


// Google button
var gBtn=frame(card,"Google Btn",400,44,{color:WHITE,radius:8,stroke:G300,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
txt(gBtn,"Google bilan kirish",{style:"Medium",size:14,color:G700});
card.appendChild(gBtn);gBtn.layoutSizingHorizontal="FILL";

// Divider
var divF=frame(card,"Divider",400,40,{layout:"HORIZONTAL",alignX:"CENTER",spacing:12,padY:8});
divF.primaryAxisSizingMode="FIXED";divF.counterAxisSizingMode="AUTO";
var dL1=figma.createRectangle();dL1.resize(100,1);dL1.fills=[{type:'SOLID',color:G200}];divF.appendChild(dL1);dL1.layoutGrow=1;
txt(divF,"yoki",{size:14,color:G500});
var dL2=figma.createRectangle();dL2.resize(100,1);dL2.fills=[{type:'SOLID',color:G200}];divF.appendChild(dL2);dL2.layoutGrow=1;
card.appendChild(divF);divF.layoutSizingHorizontal="FILL";



  // Field: Ism
  var fld0=frame(card,"Field Ism",400,70,{layout:"VERTICAL",spacing:6});
  fld0.primaryAxisSizingMode="AUTO";
  txt(fld0,"Ism",{style:"Medium",size:14,color:G700});
  var inp0=frame(fld0,"Input",400,44,{color:WHITE,radius:8,stroke:G300,layout:"HORIZONTAL",alignX:"CENTER",padX:16});
  txt(inp0,"Ism kiriting",{size:14,color:G400});
  inp0.layoutSizingHorizontal="FILL";
  card.appendChild(fld0);fld0.layoutSizingHorizontal="FILL";
  
  // Field: Email
  var fld1=frame(card,"Field Email",400,70,{layout:"VERTICAL",spacing:6});
  fld1.primaryAxisSizingMode="AUTO";
  txt(fld1,"Email",{style:"Medium",size:14,color:G700});
  var inp1=frame(fld1,"Input",400,44,{color:WHITE,radius:8,stroke:G300,layout:"HORIZONTAL",alignX:"CENTER",padX:16});
  txt(inp1,"Email kiriting",{size:14,color:G400});
  inp1.layoutSizingHorizontal="FILL";
  card.appendChild(fld1);fld1.layoutSizingHorizontal="FILL";
  
  // Field: Parol
  var fld2=frame(card,"Field Parol",400,70,{layout:"VERTICAL",spacing:6});
  fld2.primaryAxisSizingMode="AUTO";
  txt(fld2,"Parol",{style:"Medium",size:14,color:G700});
  var inp2=frame(fld2,"Input",400,44,{color:WHITE,radius:8,stroke:G300,layout:"HORIZONTAL",alignX:"CENTER",padX:16});
  txt(inp2,"Parol kiriting",{size:14,color:G400});
  inp2.layoutSizingHorizontal="FILL";
  card.appendChild(fld2);fld2.layoutSizingHorizontal="FILL";
  
  // Field: Parolni takrorlang
  var fld3=frame(card,"Field Parolni takrorlang",400,70,{layout:"VERTICAL",spacing:6});
  fld3.primaryAxisSizingMode="AUTO";
  txt(fld3,"Parolni takrorlang",{style:"Medium",size:14,color:G700});
  var inp3=frame(fld3,"Input",400,44,{color:WHITE,radius:8,stroke:G300,layout:"HORIZONTAL",alignX:"CENTER",padX:16});
  txt(inp3,"Parolni takrorlang kiriting",{size:14,color:G400});
  inp3.layoutSizingHorizontal="FILL";
  card.appendChild(fld3);fld3.layoutSizingHorizontal="FILL";
  

// Primary Button
var pBtn=frame(card,"Btn Primary",400,44,{color:PRIMARY,radius:8,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
txt(pBtn,"Ro'yxatdan o'tish",{style:"Semi Bold",size:14,color:WHITE});
card.appendChild(pBtn);pBtn.layoutSizingHorizontal="FILL";

// Footer
var foot=frame(card,"Footer",400,20,{layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER",spacing:4,padY:16});
foot.counterAxisSizingMode="AUTO";
txt(foot,"Akkauntingiz bormi?",{size:14,color:G500});
txt(foot,"Kirish",{style:"Medium",size:14,color:PRIMARY});
card.appendChild(foot);foot.layoutSizingHorizontal="FILL";

figma.currentPage.appendChild(screen);

// AUTH / Email tasdiqlash
var screen=figma.createFrame();
screen.name="03-email-verify - Email tasdiqlash";
screen.resize(1440,900);
screen.fills=[{type:'SOLID',color:BG}];
screen.layoutMode="VERTICAL";screen.primaryAxisAlignItems="CENTER";screen.counterAxisAlignItems="CENTER";
screen.x=3120;screen.y=1200;

var card=frame(screen,"Card",480,100,{color:WHITE,radius:12,layout:"VERTICAL",alignX:"CENTER",pad:40,spacing:0,stroke:G200,shadow:true});
card.primaryAxisSizingMode="AUTO";card.counterAxisSizingMode="FIXED";card.resize(480,100);

// Logo
var logo=frame(card,"Logo",140,40,{color:PRIMARY,radius:8,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
txt(logo,"QULAY CHAT",{style:"Bold",size:13,color:WHITE});

var sp0=frame(card,"Sp",400,24);sp0.fills=[];card.appendChild(sp0);sp0.layoutSizingHorizontal="FILL";

txt(card,"Email tasdiqlash",{style:"Semi Bold",size:24,color:G900,align:"CENTER"});
txt(card,"Emailni tekshiring",{size:14,color:G500,align:"CENTER"});

var sp1=frame(card,"Sp",400,20);sp1.fills=[];card.appendChild(sp1);sp1.layoutSizingHorizontal="FILL";




// Icon / Illustration
var iconFrame=frame(card,"Icon",80,80,{color:PRIMARY_LIGHT,radius:40,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
txt(iconFrame,"✉",{size:32,color:PRIMARY});

var sp2=frame(card,"Sp",400,16);sp2.fills=[];card.appendChild(sp2);sp2.layoutSizingHorizontal="FILL";
txt(card,"Emailni tekshiring",{size:14,color:G500,align:"CENTER",w:400,wrap:true});


// Primary Button
var pBtn=frame(card,"Btn Primary",400,44,{color:PRIMARY,radius:8,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
txt(pBtn,"Davom etish",{style:"Semi Bold",size:14,color:WHITE});
card.appendChild(pBtn);pBtn.layoutSizingHorizontal="FILL";

// Footer
var foot=frame(card,"Footer",400,20,{layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER",spacing:4,padY:16});
foot.counterAxisSizingMode="AUTO";
txt(foot,"",{size:14,color:G500});
txt(foot,"",{style:"Medium",size:14,color:PRIMARY});
card.appendChild(foot);foot.layoutSizingHorizontal="FILL";

figma.currentPage.appendChild(screen);

// AUTH / Parolni unutdim
var screen=figma.createFrame();
screen.name="04-forgot-password - Parolni unutdim";
screen.resize(1440,900);
screen.fills=[{type:'SOLID',color:BG}];
screen.layoutMode="VERTICAL";screen.primaryAxisAlignItems="CENTER";screen.counterAxisAlignItems="CENTER";
screen.x=4680;screen.y=1200;

var card=frame(screen,"Card",480,100,{color:WHITE,radius:12,layout:"VERTICAL",alignX:"CENTER",pad:40,spacing:0,stroke:G200,shadow:true});
card.primaryAxisSizingMode="AUTO";card.counterAxisSizingMode="FIXED";card.resize(480,100);

// Logo
var logo=frame(card,"Logo",140,40,{color:PRIMARY,radius:8,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
txt(logo,"QULAY CHAT",{style:"Bold",size:13,color:WHITE});

var sp0=frame(card,"Sp",400,24);sp0.fills=[];card.appendChild(sp0);sp0.layoutSizingHorizontal="FILL";

txt(card,"Parolni unutdim",{style:"Semi Bold",size:24,color:G900,align:"CENTER"});
txt(card,"Parolni tiklash",{size:14,color:G500,align:"CENTER"});

var sp1=frame(card,"Sp",400,20);sp1.fills=[];card.appendChild(sp1);sp1.layoutSizingHorizontal="FILL";


// Google button
var gBtn=frame(card,"Google Btn",400,44,{color:WHITE,radius:8,stroke:G300,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
txt(gBtn,"Google bilan kirish",{style:"Medium",size:14,color:G700});
card.appendChild(gBtn);gBtn.layoutSizingHorizontal="FILL";

// Divider
var divF=frame(card,"Divider",400,40,{layout:"HORIZONTAL",alignX:"CENTER",spacing:12,padY:8});
divF.primaryAxisSizingMode="FIXED";divF.counterAxisSizingMode="AUTO";
var dL1=figma.createRectangle();dL1.resize(100,1);dL1.fills=[{type:'SOLID',color:G200}];divF.appendChild(dL1);dL1.layoutGrow=1;
txt(divF,"yoki",{size:14,color:G500});
var dL2=figma.createRectangle();dL2.resize(100,1);dL2.fills=[{type:'SOLID',color:G200}];divF.appendChild(dL2);dL2.layoutGrow=1;
card.appendChild(divF);divF.layoutSizingHorizontal="FILL";



  // Field: Email
  var fld0=frame(card,"Field Email",400,70,{layout:"VERTICAL",spacing:6});
  fld0.primaryAxisSizingMode="AUTO";
  txt(fld0,"Email",{style:"Medium",size:14,color:G700});
  var inp0=frame(fld0,"Input",400,44,{color:WHITE,radius:8,stroke:G300,layout:"HORIZONTAL",alignX:"CENTER",padX:16});
  txt(inp0,"Email kiriting",{size:14,color:G400});
  inp0.layoutSizingHorizontal="FILL";
  card.appendChild(fld0);fld0.layoutSizingHorizontal="FILL";
  

// Primary Button
var pBtn=frame(card,"Btn Primary",400,44,{color:PRIMARY,radius:8,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
txt(pBtn,"Parolni unutdim",{style:"Semi Bold",size:14,color:WHITE});
card.appendChild(pBtn);pBtn.layoutSizingHorizontal="FILL";

// Footer
var foot=frame(card,"Footer",400,20,{layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER",spacing:4,padY:16});
foot.counterAxisSizingMode="AUTO";
txt(foot,"Akkauntingiz bormi?",{size:14,color:G500});
txt(foot,"Kirish",{style:"Medium",size:14,color:PRIMARY});
card.appendChild(foot);foot.layoutSizingHorizontal="FILL";

figma.currentPage.appendChild(screen);

// AUTH / Xush kelibsiz!
var screen=figma.createFrame();
screen.name="05-welcome-first-login - Xush kelibsiz!";
screen.resize(1440,900);
screen.fills=[{type:'SOLID',color:BG}];
screen.layoutMode="VERTICAL";screen.primaryAxisAlignItems="CENTER";screen.counterAxisAlignItems="CENTER";
screen.x=6240;screen.y=1200;

var card=frame(screen,"Card",480,100,{color:WHITE,radius:12,layout:"VERTICAL",alignX:"CENTER",pad:40,spacing:0,stroke:G200,shadow:true});
card.primaryAxisSizingMode="AUTO";card.counterAxisSizingMode="FIXED";card.resize(480,100);

// Logo
var logo=frame(card,"Logo",140,40,{color:PRIMARY,radius:8,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
txt(logo,"QULAY CHAT",{style:"Bold",size:13,color:WHITE});

var sp0=frame(card,"Sp",400,24);sp0.fills=[];card.appendChild(sp0);sp0.layoutSizingHorizontal="FILL";

txt(card,"Xush kelibsiz!",{style:"Semi Bold",size:24,color:G900,align:"CENTER"});
txt(card,"Birinchi kirish",{size:14,color:G500,align:"CENTER"});

var sp1=frame(card,"Sp",400,20);sp1.fills=[];card.appendChild(sp1);sp1.layoutSizingHorizontal="FILL";




// Icon / Illustration
var iconFrame=frame(card,"Icon",80,80,{color:PRIMARY_LIGHT,radius:40,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
txt(iconFrame,"✉",{size:32,color:PRIMARY});

var sp2=frame(card,"Sp",400,16);sp2.fills=[];card.appendChild(sp2);sp2.layoutSizingHorizontal="FILL";
txt(card,"Birinchi kirish",{size:14,color:G500,align:"CENTER",w:400,wrap:true});


// Primary Button
var pBtn=frame(card,"Btn Primary",400,44,{color:PRIMARY,radius:8,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
txt(pBtn,"Davom etish",{style:"Semi Bold",size:14,color:WHITE});
card.appendChild(pBtn);pBtn.layoutSizingHorizontal="FILL";

// Footer
var foot=frame(card,"Footer",400,20,{layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER",spacing:4,padY:16});
foot.counterAxisSizingMode="AUTO";
txt(foot,"",{size:14,color:G500});
txt(foot,"",{style:"Medium",size:14,color:PRIMARY});
card.appendChild(foot);foot.layoutSizingHorizontal="FILL";

figma.currentPage.appendChild(screen);

return {success:true, section:"AUTH", screens:5};
