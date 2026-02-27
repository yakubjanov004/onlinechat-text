
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
// SECTION: SYSTEM (5 screens)
// ═══════════════════════════════════════════

// Section label
var sLabel=figma.createFrame();
sLabel.name="— SYSTEM —";
sLabel.resize(7680, 60);
sLabel.fills=[{type:'SOLID',color:{r:0,g:0,b:0}}];
sLabel.cornerRadius=8;
sLabel.x=0;sLabel.y=22120;
sLabel.layoutMode="HORIZONTAL";sLabel.primaryAxisAlignItems="CENTER";sLabel.counterAxisAlignItems="CENTER";
var slTxt=figma.createText();
slTxt.fontName={family:"Inter",style:"Bold"};
slTxt.characters="SYSTEM (5)";
slTxt.fontSize=20;
slTxt.fills=[{type:'SOLID',color:{r:1,g:1,b:1}}];
sLabel.appendChild(slTxt);
figma.currentPage.appendChild(sLabel);

// SYSTEM / 404 Not Found
var screen=figma.createFrame();
screen.name="01-error-404 - 404 Not Found";
screen.resize(1440,900);
screen.fills=[{type:'SOLID',color:WHITE}];
screen.layoutMode="VERTICAL";screen.primaryAxisAlignItems="CENTER";screen.counterAxisAlignItems="CENTER";
screen.x=0;screen.y=22200;

var errCard=frame(screen,"Error Card",500,360,{layout:"VERTICAL",alignX:"CENTER",spacing:20,pad:40});
errCard.primaryAxisSizingMode="AUTO";errCard.counterAxisSizingMode="FIXED";errCard.resize(500,10);

var errIcon=frame(errCard,"Icon",100,100,{color:WARNING_L,radius:50,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
txt(errIcon,"404",{style:"Bold",size:28,color:WARNING});

txt(errCard,"404 Not Found",{style:"Bold",size:28,color:G900,align:"CENTER"});
txt(errCard,"Sahifa topilmadi",{size:16,color:G500,align:"CENTER"});

var errBtn=frame(errCard,"Btn",200,44,{color:PRIMARY,radius:8,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
txt(errBtn,"Bosh sahifaga",{style:"Semi Bold",size:14,color:WHITE});

figma.currentPage.appendChild(screen);

// SYSTEM / 500 Server Error
var screen=figma.createFrame();
screen.name="02-error-500 - 500 Server Error";
screen.resize(1440,900);
screen.fills=[{type:'SOLID',color:WHITE}];
screen.layoutMode="VERTICAL";screen.primaryAxisAlignItems="CENTER";screen.counterAxisAlignItems="CENTER";
screen.x=1560;screen.y=22200;

var errCard=frame(screen,"Error Card",500,360,{layout:"VERTICAL",alignX:"CENTER",spacing:20,pad:40});
errCard.primaryAxisSizingMode="AUTO";errCard.counterAxisSizingMode="FIXED";errCard.resize(500,10);

var errIcon=frame(errCard,"Icon",100,100,{color:DANGER_L,radius:50,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
txt(errIcon,"500",{style:"Bold",size:28,color:DANGER});

txt(errCard,"500 Server Error",{style:"Bold",size:28,color:G900,align:"CENTER"});
txt(errCard,"Server xatosi",{size:16,color:G500,align:"CENTER"});

var errBtn=frame(errCard,"Btn",200,44,{color:PRIMARY,radius:8,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
txt(errBtn,"Bosh sahifaga",{style:"Semi Bold",size:14,color:WHITE});

figma.currentPage.appendChild(screen);

// SYSTEM / 403 Forbidden
var screen=figma.createFrame();
screen.name="03-error-403 - 403 Forbidden";
screen.resize(1440,900);
screen.fills=[{type:'SOLID',color:WHITE}];
screen.layoutMode="VERTICAL";screen.primaryAxisAlignItems="CENTER";screen.counterAxisAlignItems="CENTER";
screen.x=3120;screen.y=22200;

var errCard=frame(screen,"Error Card",500,360,{layout:"VERTICAL",alignX:"CENTER",spacing:20,pad:40});
errCard.primaryAxisSizingMode="AUTO";errCard.counterAxisSizingMode="FIXED";errCard.resize(500,10);

var errIcon=frame(errCard,"Icon",100,100,{color:DANGER_L,radius:50,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
txt(errIcon,"403",{style:"Bold",size:28,color:DANGER});

txt(errCard,"403 Forbidden",{style:"Bold",size:28,color:G900,align:"CENTER"});
txt(errCard,"Ruxsat yo'q",{size:16,color:G500,align:"CENTER"});

var errBtn=frame(errCard,"Btn",200,44,{color:PRIMARY,radius:8,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
txt(errBtn,"Bosh sahifaga",{style:"Semi Bold",size:14,color:WHITE});

figma.currentPage.appendChild(screen);

// SYSTEM / Maintenance
var screen=figma.createFrame();
screen.name="04-maintenance - Maintenance";
screen.resize(1440,900);
screen.fills=[{type:'SOLID',color:WHITE}];
screen.layoutMode="VERTICAL";screen.primaryAxisAlignItems="CENTER";screen.counterAxisAlignItems="CENTER";
screen.x=4680;screen.y=22200;

var errCard=frame(screen,"Error Card",500,360,{layout:"VERTICAL",alignX:"CENTER",spacing:20,pad:40});
errCard.primaryAxisSizingMode="AUTO";errCard.counterAxisSizingMode="FIXED";errCard.resize(500,10);

var errIcon=frame(errCard,"Icon",100,100,{color:INFO_L,radius:50,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
txt(errIcon,"🔧",{style:"Bold",size:28,color:INFO});

txt(errCard,"Maintenance",{style:"Bold",size:28,color:G900,align:"CENTER"});
txt(errCard,"Texnik ishlar",{size:16,color:G500,align:"CENTER"});

var errBtn=frame(errCard,"Btn",200,44,{color:PRIMARY,radius:8,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
txt(errBtn,"Bosh sahifaga",{style:"Semi Bold",size:14,color:WHITE});

figma.currentPage.appendChild(screen);

// SYSTEM / Offline
var screen=figma.createFrame();
screen.name="05-offline - Offline";
screen.resize(1440,900);
screen.fills=[{type:'SOLID',color:WHITE}];
screen.layoutMode="VERTICAL";screen.primaryAxisAlignItems="CENTER";screen.counterAxisAlignItems="CENTER";
screen.x=6240;screen.y=22200;

var errCard=frame(screen,"Error Card",500,360,{layout:"VERTICAL",alignX:"CENTER",spacing:20,pad:40});
errCard.primaryAxisSizingMode="AUTO";errCard.counterAxisSizingMode="FIXED";errCard.resize(500,10);

var errIcon=frame(errCard,"Icon",100,100,{color:INFO_L,radius:50,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
txt(errIcon,"📡",{style:"Bold",size:28,color:INFO});

txt(errCard,"Offline",{style:"Bold",size:28,color:G900,align:"CENTER"});
txt(errCard,"Internet yo'q",{size:16,color:G500,align:"CENTER"});

var errBtn=frame(errCard,"Btn",200,44,{color:PRIMARY,radius:8,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
txt(errBtn,"Bosh sahifaga",{style:"Semi Bold",size:14,color:WHITE});

figma.currentPage.appendChild(screen);

return {success:true, section:"SYSTEM", screens:5};
