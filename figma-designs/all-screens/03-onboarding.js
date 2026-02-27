
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
// SECTION: ONBOARDING (6 screens)
// ═══════════════════════════════════════════

// Section label
var sLabel=figma.createFrame();
sLabel.name="— ONBOARDING —";
sLabel.resize(9240, 60);
sLabel.fills=[{type:'SOLID',color:{r:0,g:0,b:0}}];
sLabel.cornerRadius=8;
sLabel.x=0;sLabel.y=2320;
sLabel.layoutMode="HORIZONTAL";sLabel.primaryAxisAlignItems="CENTER";sLabel.counterAxisAlignItems="CENTER";
var slTxt=figma.createText();
slTxt.fontName={family:"Inter",style:"Bold"};
slTxt.characters="ONBOARDING (6)";
slTxt.fontSize=20;
slTxt.fills=[{type:'SOLID',color:{r:1,g:1,b:1}}];
sLabel.appendChild(slTxt);
figma.currentPage.appendChild(sLabel);

// ONBOARDING / Welcome
var screen=figma.createFrame();
screen.name="01-welcome - Welcome";
screen.resize(1440,900);
screen.fills=[{type:'SOLID',color:WHITE}];
screen.x=0;screen.y=2400;

// Left panel (illustration)
var leftP=frame(screen,"Left Panel",560,900,{x:0,y:0,color:PRIMARY});
txt(leftP,"QULAY CHAT",{style:"Bold",size:28,color:WHITE,x:60,y:80});
txt(leftP,"Qulay Chat-ga xush kelibsiz",{style:"Regular",size:16,color:{r:200/255,g:200/255,b:255/255},x:60,y:120});

// Steps indicator
var steps=frame(leftP,"Steps",440,40,{x:60,y:800,layout:"HORIZONTAL",spacing:12});
steps.fills=[];

var dot0=figma.createEllipse();dot0.resize(10,10);dot0.fills=[{type:'SOLID',color:WHITE}];dot0.opacity=1;steps.appendChild(dot0);
var dot1=figma.createEllipse();dot1.resize(10,10);dot1.fills=[{type:'SOLID',color:{r:1,g:1,b:1}}];dot1.opacity=0.4;steps.appendChild(dot1);
var dot2=figma.createEllipse();dot2.resize(10,10);dot2.fills=[{type:'SOLID',color:{r:1,g:1,b:1}}];dot2.opacity=0.4;steps.appendChild(dot2);
var dot3=figma.createEllipse();dot3.resize(10,10);dot3.fills=[{type:'SOLID',color:{r:1,g:1,b:1}}];dot3.opacity=0.4;steps.appendChild(dot3);
var dot4=figma.createEllipse();dot4.resize(10,10);dot4.fills=[{type:'SOLID',color:{r:1,g:1,b:1}}];dot4.opacity=0.4;steps.appendChild(dot4);
var dot5=figma.createEllipse();dot5.resize(10,10);dot5.fills=[{type:'SOLID',color:{r:1,g:1,b:1}}];dot5.opacity=0.4;steps.appendChild(dot5);

// Right panel
var rightP=frame(screen,"Right Panel",880,900,{x:560,y:0,color:WHITE,layout:"VERTICAL",alignX:"CENTER",alignY:"CENTER"});

var oCard=frame(rightP,"Card",560,100,{layout:"VERTICAL",spacing:20,pad:40,alignX:"CENTER"});
oCard.primaryAxisSizingMode="AUTO";oCard.counterAxisSizingMode="FIXED";oCard.resize(560,100);

txt(oCard,"Welcome",{style:"Semi Bold",size:28,color:G900,align:"CENTER"});
txt(oCard,"Qulay Chat-ga xush kelibsiz",{size:14,color:G500,align:"CENTER"});

var sp=frame(oCard,"Sp",480,8);sp.fills=[];oCard.appendChild(sp);sp.layoutSizingHorizontal="FILL";







// Buttons
var btnRow=frame(oCard,"Buttons",480,44,{layout:"HORIZONTAL",spacing:12});
btnRow.primaryAxisSizingMode="AUTO";btnRow.counterAxisSizingMode="AUTO";
var backBtn=frame(btnRow,"Back",100,44,{color:WHITE,radius:8,stroke:G300,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
txt(backBtn,"Ortga",{style:"Medium",size:14,color:G700});
var nextBtn=frame(btnRow,"Next",160,44,{color:PRIMARY,radius:8,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
txt(nextBtn,"Keyingi",{style:"Semi Bold",size:14,color:WHITE});

figma.currentPage.appendChild(screen);

// ONBOARDING / Setup
var screen=figma.createFrame();
screen.name="02-onboarding-setup - Setup";
screen.resize(1440,900);
screen.fills=[{type:'SOLID',color:WHITE}];
screen.x=1560;screen.y=2400;

// Left panel (illustration)
var leftP=frame(screen,"Left Panel",560,900,{x:0,y:0,color:PRIMARY});
txt(leftP,"QULAY CHAT",{style:"Bold",size:28,color:WHITE,x:60,y:80});
txt(leftP,"Workspace nomi va sozlamalar",{style:"Regular",size:16,color:{r:200/255,g:200/255,b:255/255},x:60,y:120});

// Steps indicator
var steps=frame(leftP,"Steps",440,40,{x:60,y:800,layout:"HORIZONTAL",spacing:12});
steps.fills=[];

var dot0=figma.createEllipse();dot0.resize(10,10);dot0.fills=[{type:'SOLID',color:WHITE}];dot0.opacity=1;steps.appendChild(dot0);
var dot1=figma.createEllipse();dot1.resize(10,10);dot1.fills=[{type:'SOLID',color:{r:1,g:1,b:1}}];dot1.opacity=0.4;steps.appendChild(dot1);
var dot2=figma.createEllipse();dot2.resize(10,10);dot2.fills=[{type:'SOLID',color:{r:1,g:1,b:1}}];dot2.opacity=0.4;steps.appendChild(dot2);
var dot3=figma.createEllipse();dot3.resize(10,10);dot3.fills=[{type:'SOLID',color:{r:1,g:1,b:1}}];dot3.opacity=0.4;steps.appendChild(dot3);
var dot4=figma.createEllipse();dot4.resize(10,10);dot4.fills=[{type:'SOLID',color:{r:1,g:1,b:1}}];dot4.opacity=0.4;steps.appendChild(dot4);
var dot5=figma.createEllipse();dot5.resize(10,10);dot5.fills=[{type:'SOLID',color:{r:1,g:1,b:1}}];dot5.opacity=0.4;steps.appendChild(dot5);

// Right panel
var rightP=frame(screen,"Right Panel",880,900,{x:560,y:0,color:WHITE,layout:"VERTICAL",alignX:"CENTER",alignY:"CENTER"});

var oCard=frame(rightP,"Card",560,100,{layout:"VERTICAL",spacing:20,pad:40,alignX:"CENTER"});
oCard.primaryAxisSizingMode="AUTO";oCard.counterAxisSizingMode="FIXED";oCard.resize(560,100);

txt(oCard,"Setup",{style:"Semi Bold",size:28,color:G900,align:"CENTER"});
txt(oCard,"Workspace nomi va sozlamalar",{size:14,color:G500,align:"CENTER"});

var sp=frame(oCard,"Sp",480,8);sp.fills=[];oCard.appendChild(sp);sp.layoutSizingHorizontal="FILL";


  var oFld0=frame(oCard,"Field Kompaniya nomi",480,70,{layout:"VERTICAL",spacing:6});
  oFld0.primaryAxisSizingMode="AUTO";
  txt(oFld0,"Kompaniya nomi",{style:"Medium",size:14,color:G700});
  var oInp0=frame(oFld0,"Input",480,44,{color:WHITE,radius:8,stroke:G300,layout:"HORIZONTAL",alignX:"CENTER",padX:16});
  txt(oInp0,"Kompaniya nomi kiriting...",{size:14,color:G400});
  oInp0.layoutSizingHorizontal="FILL";
  oCard.appendChild(oFld0);oFld0.layoutSizingHorizontal="FILL";
  
  var oFld1=frame(oCard,"Field Soha",480,70,{layout:"VERTICAL",spacing:6});
  oFld1.primaryAxisSizingMode="AUTO";
  txt(oFld1,"Soha",{style:"Medium",size:14,color:G700});
  var oInp1=frame(oFld1,"Input",480,44,{color:WHITE,radius:8,stroke:G300,layout:"HORIZONTAL",alignX:"CENTER",padX:16});
  txt(oInp1,"Soha kiriting...",{size:14,color:G400});
  oInp1.layoutSizingHorizontal="FILL";
  oCard.appendChild(oFld1);oFld1.layoutSizingHorizontal="FILL";
  
  var oFld2=frame(oCard,"Field Jamoa hajmi",480,70,{layout:"VERTICAL",spacing:6});
  oFld2.primaryAxisSizingMode="AUTO";
  txt(oFld2,"Jamoa hajmi",{style:"Medium",size:14,color:G700});
  var oInp2=frame(oFld2,"Input",480,44,{color:WHITE,radius:8,stroke:G300,layout:"HORIZONTAL",alignX:"CENTER",padX:16});
  txt(oInp2,"Jamoa hajmi kiriting...",{size:14,color:G400});
  oInp2.layoutSizingHorizontal="FILL";
  oCard.appendChild(oFld2);oFld2.layoutSizingHorizontal="FILL";
  





// Buttons
var btnRow=frame(oCard,"Buttons",480,44,{layout:"HORIZONTAL",spacing:12});
btnRow.primaryAxisSizingMode="AUTO";btnRow.counterAxisSizingMode="AUTO";
var backBtn=frame(btnRow,"Back",100,44,{color:WHITE,radius:8,stroke:G300,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
txt(backBtn,"Ortga",{style:"Medium",size:14,color:G700});
var nextBtn=frame(btnRow,"Next",160,44,{color:PRIMARY,radius:8,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
txt(nextBtn,"Keyingi",{style:"Semi Bold",size:14,color:WHITE});

figma.currentPage.appendChild(screen);

// ONBOARDING / Workspace
var screen=figma.createFrame();
screen.name="03-workspace - Workspace";
screen.resize(1440,900);
screen.fills=[{type:'SOLID',color:WHITE}];
screen.x=3120;screen.y=2400;

// Left panel (illustration)
var leftP=frame(screen,"Left Panel",560,900,{x:0,y:0,color:PRIMARY});
txt(leftP,"QULAY CHAT",{style:"Bold",size:28,color:WHITE,x:60,y:80});
txt(leftP,"Workspace preview",{style:"Regular",size:16,color:{r:200/255,g:200/255,b:255/255},x:60,y:120});

// Steps indicator
var steps=frame(leftP,"Steps",440,40,{x:60,y:800,layout:"HORIZONTAL",spacing:12});
steps.fills=[];

var dot0=figma.createEllipse();dot0.resize(10,10);dot0.fills=[{type:'SOLID',color:WHITE}];dot0.opacity=1;steps.appendChild(dot0);
var dot1=figma.createEllipse();dot1.resize(10,10);dot1.fills=[{type:'SOLID',color:{r:1,g:1,b:1}}];dot1.opacity=0.4;steps.appendChild(dot1);
var dot2=figma.createEllipse();dot2.resize(10,10);dot2.fills=[{type:'SOLID',color:{r:1,g:1,b:1}}];dot2.opacity=0.4;steps.appendChild(dot2);
var dot3=figma.createEllipse();dot3.resize(10,10);dot3.fills=[{type:'SOLID',color:{r:1,g:1,b:1}}];dot3.opacity=0.4;steps.appendChild(dot3);
var dot4=figma.createEllipse();dot4.resize(10,10);dot4.fills=[{type:'SOLID',color:{r:1,g:1,b:1}}];dot4.opacity=0.4;steps.appendChild(dot4);
var dot5=figma.createEllipse();dot5.resize(10,10);dot5.fills=[{type:'SOLID',color:{r:1,g:1,b:1}}];dot5.opacity=0.4;steps.appendChild(dot5);

// Right panel
var rightP=frame(screen,"Right Panel",880,900,{x:560,y:0,color:WHITE,layout:"VERTICAL",alignX:"CENTER",alignY:"CENTER"});

var oCard=frame(rightP,"Card",560,100,{layout:"VERTICAL",spacing:20,pad:40,alignX:"CENTER"});
oCard.primaryAxisSizingMode="AUTO";oCard.counterAxisSizingMode="FIXED";oCard.resize(560,100);

txt(oCard,"Workspace",{style:"Semi Bold",size:28,color:G900,align:"CENTER"});
txt(oCard,"Workspace preview",{size:14,color:G500,align:"CENTER"});

var sp=frame(oCard,"Sp",480,8);sp.fills=[];oCard.appendChild(sp);sp.layoutSizingHorizontal="FILL";







// Buttons
var btnRow=frame(oCard,"Buttons",480,44,{layout:"HORIZONTAL",spacing:12});
btnRow.primaryAxisSizingMode="AUTO";btnRow.counterAxisSizingMode="AUTO";
var backBtn=frame(btnRow,"Back",100,44,{color:WHITE,radius:8,stroke:G300,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
txt(backBtn,"Ortga",{style:"Medium",size:14,color:G700});
var nextBtn=frame(btnRow,"Next",160,44,{color:PRIMARY,radius:8,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
txt(nextBtn,"Keyingi",{style:"Semi Bold",size:14,color:WHITE});

figma.currentPage.appendChild(screen);

// ONBOARDING / Widget Customize
var screen=figma.createFrame();
screen.name="04-widget-customize - Widget Customize";
screen.resize(1440,900);
screen.fills=[{type:'SOLID',color:WHITE}];
screen.x=4680;screen.y=2400;

// Left panel (illustration)
var leftP=frame(screen,"Left Panel",560,900,{x:0,y:0,color:PRIMARY});
txt(leftP,"QULAY CHAT",{style:"Bold",size:28,color:WHITE,x:60,y:80});
txt(leftP,"Chat widget ranglarini sozlash",{style:"Regular",size:16,color:{r:200/255,g:200/255,b:255/255},x:60,y:120});

// Steps indicator
var steps=frame(leftP,"Steps",440,40,{x:60,y:800,layout:"HORIZONTAL",spacing:12});
steps.fills=[];

var dot0=figma.createEllipse();dot0.resize(10,10);dot0.fills=[{type:'SOLID',color:WHITE}];dot0.opacity=1;steps.appendChild(dot0);
var dot1=figma.createEllipse();dot1.resize(10,10);dot1.fills=[{type:'SOLID',color:{r:1,g:1,b:1}}];dot1.opacity=0.4;steps.appendChild(dot1);
var dot2=figma.createEllipse();dot2.resize(10,10);dot2.fills=[{type:'SOLID',color:{r:1,g:1,b:1}}];dot2.opacity=0.4;steps.appendChild(dot2);
var dot3=figma.createEllipse();dot3.resize(10,10);dot3.fills=[{type:'SOLID',color:{r:1,g:1,b:1}}];dot3.opacity=0.4;steps.appendChild(dot3);
var dot4=figma.createEllipse();dot4.resize(10,10);dot4.fills=[{type:'SOLID',color:{r:1,g:1,b:1}}];dot4.opacity=0.4;steps.appendChild(dot4);
var dot5=figma.createEllipse();dot5.resize(10,10);dot5.fills=[{type:'SOLID',color:{r:1,g:1,b:1}}];dot5.opacity=0.4;steps.appendChild(dot5);

// Right panel
var rightP=frame(screen,"Right Panel",880,900,{x:560,y:0,color:WHITE,layout:"VERTICAL",alignX:"CENTER",alignY:"CENTER"});

var oCard=frame(rightP,"Card",560,100,{layout:"VERTICAL",spacing:20,pad:40,alignX:"CENTER"});
oCard.primaryAxisSizingMode="AUTO";oCard.counterAxisSizingMode="FIXED";oCard.resize(560,100);

txt(oCard,"Widget Customize",{style:"Semi Bold",size:28,color:G900,align:"CENTER"});
txt(oCard,"Chat widget ranglarini sozlash",{size:14,color:G500,align:"CENTER"});

var sp=frame(oCard,"Sp",480,8);sp.fills=[];oCard.appendChild(sp);sp.layoutSizingHorizontal="FILL";




// Color picker preview
var colorPrev=frame(oCard,"Color Preview",480,120,{color:G50,radius:12,layout:"VERTICAL",pad:20,spacing:12,stroke:G200});
colorPrev.layoutSizingHorizontal="FILL";colorPrev.primaryAxisSizingMode="AUTO";
txt(colorPrev,"Rang tanlang",{style:"Medium",size:14,color:G700});
var colorRow=frame(colorPrev,"Colors",440,40,{layout:"HORIZONTAL",spacing:12});
colorRow.primaryAxisSizingMode="AUTO";colorRow.counterAxisSizingMode="AUTO";
var c1=figma.createEllipse();c1.resize(36,36);c1.fills=[{type:'SOLID',color:PRIMARY}];c1.strokes=[{type:'SOLID',color:G300}];c1.strokeWeight=3;colorRow.appendChild(c1);
var c2=figma.createEllipse();c2.resize(36,36);c2.fills=[{type:'SOLID',color:{r:16/255,g:185/255,b:129/255}}];colorRow.appendChild(c2);
var c3=figma.createEllipse();c3.resize(36,36);c3.fills=[{type:'SOLID',color:{r:59/255,g:130/255,b:246/255}}];colorRow.appendChild(c3);
var c4=figma.createEllipse();c4.resize(36,36);c4.fills=[{type:'SOLID',color:{r:239/255,g:68/255,b:68/255}}];colorRow.appendChild(c4);




// Buttons
var btnRow=frame(oCard,"Buttons",480,44,{layout:"HORIZONTAL",spacing:12});
btnRow.primaryAxisSizingMode="AUTO";btnRow.counterAxisSizingMode="AUTO";
var backBtn=frame(btnRow,"Back",100,44,{color:WHITE,radius:8,stroke:G300,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
txt(backBtn,"Ortga",{style:"Medium",size:14,color:G700});
var nextBtn=frame(btnRow,"Next",160,44,{color:PRIMARY,radius:8,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
txt(nextBtn,"Keyingi",{style:"Semi Bold",size:14,color:WHITE});

figma.currentPage.appendChild(screen);

// ONBOARDING / Widget Install
var screen=figma.createFrame();
screen.name="05-widget-install - Widget Install";
screen.resize(1440,900);
screen.fills=[{type:'SOLID',color:WHITE}];
screen.x=6240;screen.y=2400;

// Left panel (illustration)
var leftP=frame(screen,"Left Panel",560,900,{x:0,y:0,color:PRIMARY});
txt(leftP,"QULAY CHAT",{style:"Bold",size:28,color:WHITE,x:60,y:80});
txt(leftP,"Kodni saytga o'rnatish",{style:"Regular",size:16,color:{r:200/255,g:200/255,b:255/255},x:60,y:120});

// Steps indicator
var steps=frame(leftP,"Steps",440,40,{x:60,y:800,layout:"HORIZONTAL",spacing:12});
steps.fills=[];

var dot0=figma.createEllipse();dot0.resize(10,10);dot0.fills=[{type:'SOLID',color:WHITE}];dot0.opacity=1;steps.appendChild(dot0);
var dot1=figma.createEllipse();dot1.resize(10,10);dot1.fills=[{type:'SOLID',color:{r:1,g:1,b:1}}];dot1.opacity=0.4;steps.appendChild(dot1);
var dot2=figma.createEllipse();dot2.resize(10,10);dot2.fills=[{type:'SOLID',color:{r:1,g:1,b:1}}];dot2.opacity=0.4;steps.appendChild(dot2);
var dot3=figma.createEllipse();dot3.resize(10,10);dot3.fills=[{type:'SOLID',color:{r:1,g:1,b:1}}];dot3.opacity=0.4;steps.appendChild(dot3);
var dot4=figma.createEllipse();dot4.resize(10,10);dot4.fills=[{type:'SOLID',color:{r:1,g:1,b:1}}];dot4.opacity=0.4;steps.appendChild(dot4);
var dot5=figma.createEllipse();dot5.resize(10,10);dot5.fills=[{type:'SOLID',color:{r:1,g:1,b:1}}];dot5.opacity=0.4;steps.appendChild(dot5);

// Right panel
var rightP=frame(screen,"Right Panel",880,900,{x:560,y:0,color:WHITE,layout:"VERTICAL",alignX:"CENTER",alignY:"CENTER"});

var oCard=frame(rightP,"Card",560,100,{layout:"VERTICAL",spacing:20,pad:40,alignX:"CENTER"});
oCard.primaryAxisSizingMode="AUTO";oCard.counterAxisSizingMode="FIXED";oCard.resize(560,100);

txt(oCard,"Widget Install",{style:"Semi Bold",size:28,color:G900,align:"CENTER"});
txt(oCard,"Kodni saytga o'rnatish",{size:14,color:G500,align:"CENTER"});

var sp=frame(oCard,"Sp",480,8);sp.fills=[];oCard.appendChild(sp);sp.layoutSizingHorizontal="FILL";






// Code block
var codeBlock=frame(oCard,"Code Block",480,120,{color:G900,radius:8,pad:16});
codeBlock.layoutSizingHorizontal="FILL";
txt(codeBlock,"<script src=\"https://widget.qulaychat.uz/v1.js\"></script>",{size:12,color:{r:0.6,g:1,b:0.6},x:0,y:0,w:448,wrap:true});
txt(codeBlock,"<!-- Sayt </body> dan oldin qo'ying -->",{size:11,color:G500,x:0,y:50});


// Buttons
var btnRow=frame(oCard,"Buttons",480,44,{layout:"HORIZONTAL",spacing:12});
btnRow.primaryAxisSizingMode="AUTO";btnRow.counterAxisSizingMode="AUTO";
var backBtn=frame(btnRow,"Back",100,44,{color:WHITE,radius:8,stroke:G300,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
txt(backBtn,"Ortga",{style:"Medium",size:14,color:G700});
var nextBtn=frame(btnRow,"Next",160,44,{color:PRIMARY,radius:8,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
txt(nextBtn,"Keyingi",{style:"Semi Bold",size:14,color:WHITE});

figma.currentPage.appendChild(screen);

// ONBOARDING / Widget Verify
var screen=figma.createFrame();
screen.name="06-widget-verify - Widget Verify";
screen.resize(1440,900);
screen.fills=[{type:'SOLID',color:WHITE}];
screen.x=7800;screen.y=2400;

// Left panel (illustration)
var leftP=frame(screen,"Left Panel",560,900,{x:0,y:0,color:PRIMARY});
txt(leftP,"QULAY CHAT",{style:"Bold",size:28,color:WHITE,x:60,y:80});
txt(leftP,"O'rnatilganini tekshirish",{style:"Regular",size:16,color:{r:200/255,g:200/255,b:255/255},x:60,y:120});

// Steps indicator
var steps=frame(leftP,"Steps",440,40,{x:60,y:800,layout:"HORIZONTAL",spacing:12});
steps.fills=[];

var dot0=figma.createEllipse();dot0.resize(10,10);dot0.fills=[{type:'SOLID',color:WHITE}];dot0.opacity=1;steps.appendChild(dot0);
var dot1=figma.createEllipse();dot1.resize(10,10);dot1.fills=[{type:'SOLID',color:{r:1,g:1,b:1}}];dot1.opacity=0.4;steps.appendChild(dot1);
var dot2=figma.createEllipse();dot2.resize(10,10);dot2.fills=[{type:'SOLID',color:{r:1,g:1,b:1}}];dot2.opacity=0.4;steps.appendChild(dot2);
var dot3=figma.createEllipse();dot3.resize(10,10);dot3.fills=[{type:'SOLID',color:{r:1,g:1,b:1}}];dot3.opacity=0.4;steps.appendChild(dot3);
var dot4=figma.createEllipse();dot4.resize(10,10);dot4.fills=[{type:'SOLID',color:{r:1,g:1,b:1}}];dot4.opacity=0.4;steps.appendChild(dot4);
var dot5=figma.createEllipse();dot5.resize(10,10);dot5.fills=[{type:'SOLID',color:{r:1,g:1,b:1}}];dot5.opacity=0.4;steps.appendChild(dot5);

// Right panel
var rightP=frame(screen,"Right Panel",880,900,{x:560,y:0,color:WHITE,layout:"VERTICAL",alignX:"CENTER",alignY:"CENTER"});

var oCard=frame(rightP,"Card",560,100,{layout:"VERTICAL",spacing:20,pad:40,alignX:"CENTER"});
oCard.primaryAxisSizingMode="AUTO";oCard.counterAxisSizingMode="FIXED";oCard.resize(560,100);

txt(oCard,"Widget Verify",{style:"Semi Bold",size:28,color:G900,align:"CENTER"});
txt(oCard,"O'rnatilganini tekshirish",{size:14,color:G500,align:"CENTER"});

var sp=frame(oCard,"Sp",480,8);sp.fills=[];oCard.appendChild(sp);sp.layoutSizingHorizontal="FILL";







// Buttons
var btnRow=frame(oCard,"Buttons",480,44,{layout:"HORIZONTAL",spacing:12});
btnRow.primaryAxisSizingMode="AUTO";btnRow.counterAxisSizingMode="AUTO";
var backBtn=frame(btnRow,"Back",100,44,{color:WHITE,radius:8,stroke:G300,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
txt(backBtn,"Ortga",{style:"Medium",size:14,color:G700});
var nextBtn=frame(btnRow,"Next",160,44,{color:PRIMARY,radius:8,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
txt(nextBtn,"Keyingi",{style:"Semi Bold",size:14,color:WHITE});

figma.currentPage.appendChild(screen);

return {success:true, section:"ONBOARDING", screens:6};
