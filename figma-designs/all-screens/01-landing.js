
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
// SECTION: LANDING (1 screens)
// ═══════════════════════════════════════════

// Section label
var sLabel=figma.createFrame();
sLabel.name="— LANDING —";
sLabel.resize(1440, 60);
sLabel.fills=[{type:'SOLID',color:{r:0,g:0,b:0}}];
sLabel.cornerRadius=8;
sLabel.x=0;sLabel.y=-80;
sLabel.layoutMode="HORIZONTAL";sLabel.primaryAxisAlignItems="CENTER";sLabel.counterAxisAlignItems="CENTER";
var slTxt=figma.createText();
slTxt.fontName={family:"Inter",style:"Bold"};
slTxt.characters="LANDING (1)";
slTxt.fontSize=20;
slTxt.fills=[{type:'SOLID',color:{r:1,g:1,b:1}}];
sLabel.appendChild(slTxt);
figma.currentPage.appendChild(sLabel);

// LANDING PAGE
var screen=figma.createFrame();
screen.name="01-landing - Landing Page";
screen.resize(1440,3200);
screen.fills=[{type:'SOLID',color:WHITE}];
screen.x=0;screen.y=0;

// ═══ HEADER ═══
var navBar=frame(screen,"Header",1440,72,{x:0,y:0,color:WHITE,layout:"HORIZONTAL",padX:80,alignX:"CENTER"});
navBar.primaryAxisAlignItems="SPACE_BETWEEN";
navBar.effects=[{type:'DROP_SHADOW',color:{r:0,g:0,b:0,a:0.05},offset:{x:0,y:2},radius:8,visible:true,blendMode:'NORMAL'}];
var navLogo=frame(navBar,"Logo",180,40,{color:PRIMARY,radius:8,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
txt(navLogo,"QULAY CHAT",{style:"Bold",size:14,color:WHITE});
var navLinks=frame(navBar,"Links",400,40,{layout:"HORIZONTAL",spacing:32,alignX:"CENTER"});
navLinks.primaryAxisSizingMode="AUTO";navLinks.counterAxisSizingMode="AUTO";
txt(navLinks,"Imkoniyatlar",{style:"Medium",size:14,color:G700});
txt(navLinks,"Integratsiya",{style:"Medium",size:14,color:G700});
txt(navLinks,"Tariflar",{style:"Medium",size:14,color:G700});
txt(navLinks,"Blog",{style:"Medium",size:14,color:G700});
var navCTA=frame(navBar,"CTA",140,40,{color:PRIMARY,radius:8,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
txt(navCTA,"Bepul boshlash",{style:"Semi Bold",size:14,color:WHITE});

// ═══ HERO ═══
var hero=frame(screen,"Hero",1440,600,{x:0,y:72,color:G50,layout:"VERTICAL",alignX:"CENTER",alignY:"CENTER",spacing:24});
txt(hero,"Mijozlar bilan aloqani",{style:"Bold",size:48,color:G900,align:"CENTER"});
txt(hero,"yangi darajaga olib chiqing",{style:"Bold",size:48,color:PRIMARY,align:"CENTER"});
txt(hero,"Bir joyda barcha kanallar — Web, Telegram, WhatsApp. Real-time chat, avtomatik javoblar va chuqur tahlillar.",{size:18,color:G600,align:"CENTER",w:700,wrap:true});
var heroBtnRow=frame(hero,"Hero Buttons",400,52,{layout:"HORIZONTAL",spacing:16,alignX:"CENTER"});
heroBtnRow.primaryAxisSizingMode="AUTO";heroBtnRow.counterAxisSizingMode="AUTO";
var heroBtn1=frame(heroBtnRow,"CTA Primary",180,52,{color:PRIMARY,radius:10,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
txt(heroBtn1,"14 kun bepul sinab ko'ring",{style:"Semi Bold",size:15,color:WHITE});
var heroBtn2=frame(heroBtnRow,"CTA Secondary",140,52,{color:WHITE,radius:10,stroke:G300,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
txt(heroBtn2,"Demo ko'rish",{style:"Medium",size:15,color:G700});

// Demo image placeholder
var demoImg=frame(hero,"Demo Image",900,400,{color:G200,radius:12});
txt(demoImg,"[ Dashboard Screenshot ]",{size:16,color:G500,x:340,y:190});

// ═══ TRUST BAR ═══
var trust=frame(screen,"Trust Bar",1440,100,{x:0,y:1100,color:WHITE,layout:"VERTICAL",alignX:"CENTER",alignY:"CENTER",spacing:16});
txt(trust,"500+ kompaniya bilan ishlaydi",{size:14,color:G400,align:"CENTER"});
var trustLogos=frame(trust,"Logos",800,40,{layout:"HORIZONTAL",spacing:40,alignX:"CENTER"});
trustLogos.primaryAxisSizingMode="AUTO";trustLogos.counterAxisSizingMode="AUTO";

var tLogo0=frame(trustLogos,"Logo",120,36,{color:G100,radius:8,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
txt(tLogo0,"Artel",{style:"Medium",size:13,color:G500});

var tLogo1=frame(trustLogos,"Logo",120,36,{color:G100,radius:8,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
txt(tLogo1,"Korzinka",{style:"Medium",size:13,color:G500});

var tLogo2=frame(trustLogos,"Logo",120,36,{color:G100,radius:8,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
txt(tLogo2,"UzCard",{style:"Medium",size:13,color:G500});

var tLogo3=frame(trustLogos,"Logo",120,36,{color:G100,radius:8,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
txt(tLogo3,"Beeline",{style:"Medium",size:13,color:G500});

var tLogo4=frame(trustLogos,"Logo",120,36,{color:G100,radius:8,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
txt(tLogo4,"Ucell",{style:"Medium",size:13,color:G500});


// ═══ FEATURES ═══
var features=frame(screen,"Features",1440,500,{x:0,y:1220,color:WHITE,layout:"VERTICAL",alignX:"CENTER",padY:60,spacing:40});
txt(features,"Asosiy imkoniyatlar",{style:"Bold",size:36,color:G900,align:"CENTER"});
txt(features,"Biznesni o'stirish uchun zarur barcha vositalar",{size:16,color:G500,align:"CENTER"});
var featGrid=frame(features,"Grid",1100,300,{layout:"HORIZONTAL",spacing:24,alignX:"CENTER"});
featGrid.primaryAxisSizingMode="AUTO";featGrid.counterAxisSizingMode="AUTO";

var feat0=frame(featGrid,"Feature",340,240,{color:WHITE,radius:16,stroke:G200,layout:"VERTICAL",pad:24,spacing:16,shadow:true});
feat0.primaryAxisSizingMode="AUTO";
var fIcon0=frame(feat0,"Icon",56,56,{color:PRIMARY_LIGHT,radius:14,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
txt(fIcon0,"💬",{size:24});
txt(feat0,"Real-time Chat",{style:"Semi Bold",size:20,color:G900});
txt(feat0,"Mijozlar bilan bir zumda aloqa",{size:14,color:G500,w:292,wrap:true});

var feat1=frame(featGrid,"Feature",340,240,{color:WHITE,radius:16,stroke:G200,layout:"VERTICAL",pad:24,spacing:16,shadow:true});
feat1.primaryAxisSizingMode="AUTO";
var fIcon1=frame(feat1,"Icon",56,56,{color:PRIMARY_LIGHT,radius:14,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
txt(fIcon1,"🤖",{size:24});
txt(feat1,"Avtomatlashtirish",{style:"Semi Bold",size:20,color:G900});
txt(feat1,"Avtomatik javoblar va routinglar",{size:14,color:G500,w:292,wrap:true});

var feat2=frame(featGrid,"Feature",340,240,{color:WHITE,radius:16,stroke:G200,layout:"VERTICAL",pad:24,spacing:16,shadow:true});
feat2.primaryAxisSizingMode="AUTO";
var fIcon2=frame(feat2,"Icon",56,56,{color:PRIMARY_LIGHT,radius:14,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
txt(fIcon2,"📊",{size:24});
txt(feat2,"Chuqur tahlillar",{style:"Semi Bold",size:20,color:G900});
txt(feat2,"SLA, CSAT va jamoa samaradorligi",{size:14,color:G500,w:292,wrap:true});


// ═══ PRICING ═══
var pricing=frame(screen,"Pricing",1440,600,{x:0,y:1800,color:G50,layout:"VERTICAL",alignX:"CENTER",padY:60,spacing:40});
txt(pricing,"Tariflar",{style:"Bold",size:36,color:G900,align:"CENTER"});
var pricingGrid=frame(pricing,"Grid",1100,420,{layout:"HORIZONTAL",spacing:24,alignX:"CENTER"});
pricingGrid.primaryAxisSizingMode="AUTO";pricingGrid.counterAxisSizingMode="AUTO";

var plan0=frame(pricingGrid,"Plan Free",340,400,{color:WHITE,radius:16,stroke:G200,layout:"VERTICAL",pad:28,spacing:16,shadow:true});
plan0.primaryAxisSizingMode="AUTO";


txt(plan0,"Free",{style:"Bold",size:22,color:G900});
txt(plan0,"$0/oy",{style:"Bold",size:36,color:G900});
txt(plan0,"Kichik jamoalar uchun",{size:14,color:G500});
rect(plan0,284,1,G200,{});
txt(plan0,"✓ 2 agent",{size:14,color:G700});
txt(plan0,"✓ Web chat",{size:14,color:G700});
txt(plan0,"✓ Email support",{size:14,color:G700});
var planBtn0=frame(plan0,"Btn",284,44,{color:WHITE,radius:8,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER",stroke:G300});
planBtn0.layoutSizingHorizontal="FILL";
txt(planBtn0,"Boshlash",{style:"Semi Bold",size:14,color:G700});

var plan1=frame(pricingGrid,"Plan Pro",340,400,{color:WHITE,radius:16,stroke:PRIMARY,layout:"VERTICAL",pad:28,spacing:16,shadow:true});
plan1.primaryAxisSizingMode="AUTO";
plan1.strokeWeight=2;

var popBadge=frame(plan1,"Badge",100,24,{color:PRIMARY,radius:12,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
txt(popBadge,"Mashhur",{style:"Medium",size:11,color:WHITE});

txt(plan1,"Pro",{style:"Bold",size:22,color:G900});
txt(plan1,"$49/oy",{style:"Bold",size:36,color:PRIMARY});
txt(plan1,"Osayotgan biznes uchun",{size:14,color:G500});
rect(plan1,284,1,G200,{});
txt(plan1,"✓ 10 agent",{size:14,color:G700});
txt(plan1,"✓ Barcha kanallar",{size:14,color:G700});
txt(plan1,"✓ Avtomatlashtirish",{size:14,color:G700});
txt(plan1,"✓ Analytics",{size:14,color:G700});
var planBtn1=frame(plan1,"Btn",284,44,{color:PRIMARY,radius:8,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
planBtn1.layoutSizingHorizontal="FILL";
txt(planBtn1,"Boshlash",{style:"Semi Bold",size:14,color:WHITE});

var plan2=frame(pricingGrid,"Plan Enterprise",340,400,{color:WHITE,radius:16,stroke:G200,layout:"VERTICAL",pad:28,spacing:16,shadow:true});
plan2.primaryAxisSizingMode="AUTO";


txt(plan2,"Enterprise",{style:"Bold",size:22,color:G900});
txt(plan2,"$149/oy",{style:"Bold",size:36,color:G900});
txt(plan2,"Katta kompaniyalar uchun",{size:14,color:G500});
rect(plan2,284,1,G200,{});
txt(plan2,"✓ Cheksiz agent",{size:14,color:G700});
txt(plan2,"✓ API kirish",{size:14,color:G700});
txt(plan2,"✓ SLA",{size:14,color:G700});
txt(plan2,"✓ Dedicated support",{size:14,color:G700});
var planBtn2=frame(plan2,"Btn",284,44,{color:WHITE,radius:8,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER",stroke:G300});
planBtn2.layoutSizingHorizontal="FILL";
txt(planBtn2,"Boshlash",{style:"Semi Bold",size:14,color:G700});


// ═══ FOOTER ═══
var footer=frame(screen,"Footer",1440,200,{x:0,y:2800,color:G900,layout:"VERTICAL",alignX:"CENTER",padY:40,spacing:16});
txt(footer,"QULAY CHAT",{style:"Bold",size:20,color:WHITE,align:"CENTER"});
txt(footer,"Mijozlar bilan aloqani boshqarish platformasi",{size:14,color:G400,align:"CENTER"});
var footLinks=frame(footer,"Links",500,20,{layout:"HORIZONTAL",spacing:24,alignX:"CENTER"});
footLinks.primaryAxisSizingMode="AUTO";footLinks.counterAxisSizingMode="AUTO";
txt(footLinks,"Yordam",{size:13,color:G400});
txt(footLinks,"Maxfiylik",{size:13,color:G400});
txt(footLinks,"Shartlar",{size:13,color:G400});
txt(footLinks,"Aloqa",{size:13,color:G400});
txt(footer,"© 2026 Qulay Chat. Barcha huquqlar himoyalangan.",{size:12,color:G500,align:"CENTER"});

figma.currentPage.appendChild(screen);

return {success:true, section:"LANDING", screens:1};
