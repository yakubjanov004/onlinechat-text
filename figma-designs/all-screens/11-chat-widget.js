
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
// SECTION: CHAT WIDGET (5 screens)
// ═══════════════════════════════════════════

// Section label
var sLabel=figma.createFrame();
sLabel.name="— CHAT WIDGET —";
sLabel.resize(7680, 60);
sLabel.fills=[{type:'SOLID',color:{r:0,g:0,b:0}}];
sLabel.cornerRadius=8;
sLabel.x=0;sLabel.y=13120;
sLabel.layoutMode="HORIZONTAL";sLabel.primaryAxisAlignItems="CENTER";sLabel.counterAxisAlignItems="CENTER";
var slTxt=figma.createText();
slTxt.fontName={family:"Inter",style:"Bold"};
slTxt.characters="CHAT WIDGET (5)";
slTxt.fontSize=20;
slTxt.fills=[{type:'SOLID',color:{r:1,g:1,b:1}}];
sLabel.appendChild(slTxt);
figma.currentPage.appendChild(sLabel);

// CHAT WIDGET / Widget Launcher
var screen=figma.createFrame();
screen.name="01-widget-launcher - Widget Launcher";
screen.resize(390,700);
screen.fills=[{type:'SOLID',color:G100}];
screen.x=0;screen.y=13200;


// Phone frame
var phone=frame(screen,"Phone BG",390,700,{x:0,y:0,color:WHITE});
txt(phone,"Website sahifasi",{size:14,color:G400,x:140,y:20});
rect(phone,390,1,G200,{y:50});

// Sample website content
txt(phone,"Company Name",{style:"Bold",size:20,color:G900,x:20,y:70});
txt(phone,"Bizning xizmatlar haqida ko'proq bilish uchun...",{size:14,color:G600,x:20,y:100,w:350,wrap:true});

// Launcher button
var launcher=figma.createEllipse();launcher.resize(60,60);launcher.fills=[{type:'SOLID',color:PRIMARY}];
launcher.x=310;launcher.y=620;
launcher.effects=[{type:'DROP_SHADOW',color:{r:79/255,g:70/255,b:229/255,a:0.3},offset:{x:0,y:4},radius:16,visible:true,blendMode:'NORMAL'}];
screen.appendChild(launcher);
txt(screen,"💬",{size:24,x:328,y:636});


figma.currentPage.appendChild(screen);

// CHAT WIDGET / Widget Chat
var screen=figma.createFrame();
screen.name="02-widget-chat - Widget Chat";
screen.resize(390,700);
screen.fills=[{type:'SOLID',color:G100}];
screen.x=430;screen.y=13200;


// Widget window
var widget=frame(screen,"Widget",370,640,{x:10,y:10,color:WHITE,radius:16,shadow:true});

// Widget header
var wHeader=frame(widget,"Header",370,70,{x:0,y:0,color:PRIMARY,radius:0});
wHeader.topLeftRadius=16;wHeader.topRightRadius=16;
txt(wHeader,"QULAY CHAT",{style:"Bold",size:14,color:WHITE,x:20,y:14});
txt(wHeader,"Online | Javob vaqti: ~2 daqiqa",{size:12,color:{r:200/255,g:200/255,b:255/255},x:20,y:36});
txt(wHeader,"✕",{style:"Bold",size:18,color:WHITE,x:340,y:14});

// Messages
txt(widget,"Salom! Qanday yordam bera olaman?",{size:13,color:G900,x:20,y:90});
var wMsg=frame(widget,"Agent Msg",280,50,{x:20,y:110,color:G100,radius:12,pad:12});
wMsg.primaryAxisSizingMode="AUTO";wMsg.counterAxisSizingMode="FIXED";wMsg.resize(280,10);
txt(wMsg,"Tariflar haqida savolingiz bo'lsa yozing!",{size:13,color:G700,w:256,wrap:true});

// Input
var wInput=frame(widget,"Input",330,44,{x:20,y:570,color:WHITE,radius:22,stroke:G300,layout:"HORIZONTAL",padX:16,alignX:"CENTER"});
txt(wInput,"Xabar yozing...",{size:13,color:G400});
var sendBtn=figma.createEllipse();sendBtn.resize(32,32);sendBtn.fills=[{type:'SOLID',color:PRIMARY}];sendBtn.x=324;sendBtn.y=576;
widget.appendChild(sendBtn);


figma.currentPage.appendChild(screen);

// CHAT WIDGET / Widget Offline
var screen=figma.createFrame();
screen.name="03-widget-offline - Widget Offline";
screen.resize(390,700);
screen.fills=[{type:'SOLID',color:G100}];
screen.x=860;screen.y=13200;


var widget=frame(screen,"Widget",370,640,{x:10,y:10,color:WHITE,radius:16,shadow:true});
var wHeader=frame(widget,"Header",370,70,{x:0,y:0,color:G700,radius:0});
wHeader.topLeftRadius=16;wHeader.topRightRadius=16;
txt(wHeader,"QULAY CHAT",{style:"Bold",size:14,color:WHITE,x:20,y:14});
txt(wHeader,"Hozir offline | Xabar qoldiring",{size:12,color:G300,x:20,y:36});

txt(widget,"Hozir operatorlar bandmi. Xabar qoldiring, tez orada javob beramiz.",{size:14,color:G700,x:20,y:90,w:330,wrap:true});

// Form
var fName=frame(widget,"Input Name",330,44,{x:20,y:160,color:WHITE,radius:8,stroke:G300,padX:12,layout:"HORIZONTAL",alignX:"CENTER"});
txt(fName,"Ismingiz",{size:13,color:G400});
var fEmail=frame(widget,"Input Email",330,44,{x:20,y:216,color:WHITE,radius:8,stroke:G300,padX:12,layout:"HORIZONTAL",alignX:"CENTER"});
txt(fEmail,"Email",{size:13,color:G400});
var fMsg=frame(widget,"Input Msg",330,100,{x:20,y:272,color:WHITE,radius:8,stroke:G300,padX:12,padY:12});
txt(fMsg,"Xabaringiz...",{size:13,color:G400});
var fBtn=frame(widget,"Send",330,44,{x:20,y:384,color:PRIMARY,radius:8,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
txt(fBtn,"Yuborish",{style:"Semi Bold",size:14,color:WHITE});


figma.currentPage.appendChild(screen);

// CHAT WIDGET / Widget CSAT
var screen=figma.createFrame();
screen.name="04-widget-csat - Widget CSAT";
screen.resize(390,700);
screen.fills=[{type:'SOLID',color:G100}];
screen.x=1290;screen.y=13200;


var widget=frame(screen,"Widget",370,640,{x:10,y:10,color:WHITE,radius:16,shadow:true});
var wHeader=frame(widget,"Header",370,70,{x:0,y:0,color:PRIMARY,radius:0});
wHeader.topLeftRadius=16;wHeader.topRightRadius=16;
txt(wHeader,"QULAY CHAT",{style:"Bold",size:14,color:WHITE,x:20,y:14});
txt(wHeader,"Fikr-mulohaza",{size:12,color:{r:200/255,g:200/255,b:255/255},x:20,y:36});

txt(widget,"Chat qanday bo'ldi?",{style:"Semi Bold",size:20,color:G900,x:60,y:100,align:"CENTER"});
txt(widget,"Xizmat sifatini baholang",{size:14,color:G500,x:80,y:130,align:"CENTER"});

// Stars
var stars=frame(widget,"Stars",250,50,{x:60,y:170,layout:"HORIZONTAL",spacing:12,alignY:"CENTER"});
stars.primaryAxisSizingMode="AUTO";stars.counterAxisSizingMode="AUTO";

var star1=frame(stars,"Star",40,40,{color:WARNING,radius:20,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
txt(star1,"★",{size:20,color:WHITE});

var star2=frame(stars,"Star",40,40,{color:WARNING,radius:20,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
txt(star2,"★",{size:20,color:WHITE});

var star3=frame(stars,"Star",40,40,{color:WARNING,radius:20,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
txt(star3,"★",{size:20,color:WHITE});

var star4=frame(stars,"Star",40,40,{color:WARNING,radius:20,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
txt(star4,"★",{size:20,color:WHITE});

var star5=frame(stars,"Star",40,40,{color:G200,radius:20,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
txt(star5,"★",{size:20,color:G400});


txt(widget,"4 / 5",{style:"Bold",size:24,color:G900,x:155,y:240,align:"CENTER"});

// Comment
var csatInput=frame(widget,"Comment",330,80,{x:20,y:290,color:WHITE,radius:8,stroke:G300,padX:12,padY:12});
txt(csatInput,"Izoh qoldiring (ixtiyoriy)...",{size:13,color:G400});

var csatBtn=frame(widget,"Submit",330,44,{x:20,y:390,color:PRIMARY,radius:8,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
txt(csatBtn,"Baholashni yuborish",{style:"Semi Bold",size:14,color:WHITE});


figma.currentPage.appendChild(screen);

// CHAT WIDGET / Widget States
var screen=figma.createFrame();
screen.name="05-widget-states - Widget States";
screen.resize(390,700);
screen.fills=[{type:'SOLID',color:G100}];
screen.x=1720;screen.y=13200;


// Widget states overview
var widget=frame(screen,"Widget",370,640,{x:10,y:10,color:WHITE,radius:16,shadow:true});
var wHeader=frame(widget,"Header",370,50,{x:0,y:0,color:PRIMARY,radius:0});
wHeader.topLeftRadius=16;wHeader.topRightRadius=16;
txt(wHeader,"Widget States",{style:"Bold",size:14,color:WHITE,x:20,y:14});


var stCard0=frame(widget,"State Online",330,60,{x:20,y:65,color:G50,radius:8,stroke:G200,layout:"VERTICAL",pad:12,spacing:4});
stCard0.primaryAxisSizingMode="AUTO";
txt(stCard0,"Online",{style:"Semi Bold",size:14,color:G900});
txt(stCard0,"Online holatidagi widget ko'rinishi",{size:12,color:G500});

var stCard1=frame(widget,"State Offline",330,60,{x:20,y:135,color:WHITE,radius:8,stroke:G200,layout:"VERTICAL",pad:12,spacing:4});
stCard1.primaryAxisSizingMode="AUTO";
txt(stCard1,"Offline",{style:"Semi Bold",size:14,color:G900});
txt(stCard1,"Offline holatidagi widget ko'rinishi",{size:12,color:G500});

var stCard2=frame(widget,"State Typing",330,60,{x:20,y:205,color:G50,radius:8,stroke:G200,layout:"VERTICAL",pad:12,spacing:4});
stCard2.primaryAxisSizingMode="AUTO";
txt(stCard2,"Typing",{style:"Semi Bold",size:14,color:G900});
txt(stCard2,"Typing holatidagi widget ko'rinishi",{size:12,color:G500});

var stCard3=frame(widget,"State Pre-chat Form",330,60,{x:20,y:275,color:WHITE,radius:8,stroke:G200,layout:"VERTICAL",pad:12,spacing:4});
stCard3.primaryAxisSizingMode="AUTO";
txt(stCard3,"Pre-chat Form",{style:"Semi Bold",size:14,color:G900});
txt(stCard3,"Pre-chat Form holatidagi widget ko'rinishi",{size:12,color:G500});

var stCard4=frame(widget,"State CSAT",330,60,{x:20,y:345,color:G50,radius:8,stroke:G200,layout:"VERTICAL",pad:12,spacing:4});
stCard4.primaryAxisSizingMode="AUTO";
txt(stCard4,"CSAT",{style:"Semi Bold",size:14,color:G900});
txt(stCard4,"CSAT holatidagi widget ko'rinishi",{size:12,color:G500});



figma.currentPage.appendChild(screen);

return {success:true, section:"CHAT WIDGET", screens:5};
