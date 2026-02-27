#!/usr/bin/env node
/**
 * QULAY CHAT — Master Figma Screen Generator
 * Barcha 88 ta HTML sahifani Figma Plugin API kodiga aylantiradi
 * 
 * Foydalanish:
 *   node generate-all.js           → Barcha seksiyalarni generatsiya qiladi
 *   node generate-all.js 02-auth   → Faqat auth seksiyasini generatsiya qiladi
 * 
 * Natija: figma-designs/all-screens/ papkasiga .js fayllar yoziladi
 * Keyin: node figma-ws-bridge.js --file figma-designs/all-screens/01-MASTER.js
 */

const fs = require('fs');
const path = require('path');

// ═══════════════════════════════════════════
// DESIGN SYSTEM
// ═══════════════════════════════════════════
const DS = {
  screenW: 1440,
  screenH: 900,
  sidebarW: 260,
  headerH: 56,
  subnavH: 44,
  gap: 120,
  // Colors
  primary: '{r:79/255,g:70/255,b:229/255}',
  primaryHover: '{r:67/255,g:56/255,b:202/255}',
  primaryLight: '{r:238/255,g:242/255,b:255/255}',
  white: '{r:1,g:1,b:1}',
  bg: '{r:249/255,g:250/255,b:251/255}',
  gray50: '{r:249/255,g:250/255,b:251/255}',
  gray100: '{r:243/255,g:244/255,b:246/255}',
  gray200: '{r:229/255,g:231/255,b:235/255}',
  gray300: '{r:209/255,g:213/255,b:219/255}',
  gray400: '{r:156/255,g:163/255,b:175/255}',
  gray500: '{r:107/255,g:114/255,b:128/255}',
  gray600: '{r:75/255,g:85/255,b:99/255}',
  gray700: '{r:55/255,g:65/255,b:81/255}',
  gray800: '{r:31/255,g:41/255,b:55/255}',
  gray900: '{r:17/255,g:24/255,b:39/255}',
  success: '{r:16/255,g:185/255,b:129/255}',
  successLight: '{r:236/255,g:253/255,b:245/255}',
  danger: '{r:239/255,g:68/255,b:68/255}',
  dangerLight: '{r:254/255,g:242/255,b:242/255}',
  warning: '{r:245/255,g:158/255,b:11/255}',
  warningLight: '{r:255/255,g:251/255,b:235/255}',
  info: '{r:59/255,g:130/255,b:246/255}',
  infoLight: '{r:239/255,g:246/255,b:255/255}',
  sidebarBg: '{r:17/255,g:24/255,b:39/255}',
  sidebarText: '{r:209/255,g:213/255,b:219/255}',
  sidebarActive: '{r:79/255,g:70/255,b:229/255}',
};

// ═══════════════════════════════════════════
// SECTIONS DEFINITION - All 88 screens
// ═══════════════════════════════════════════
const SECTIONS = [
  {
    id: '01-landing', label: 'LANDING', y: 0,
    screens: [
      { file: '01-landing', title: 'Landing Page', subtitle: 'Marketing sahifasi — Hero, Trust, Features, CTA', type: 'landing' }
    ]
  },
  {
    id: '02-auth', label: 'AUTH', y: 1200,
    screens: [
      { file: '01-login', title: 'Login', subtitle: 'Kirish sahifasi', type: 'auth' },
      { file: '02-register', title: "Ro'yxatdan o'tish", subtitle: 'Yangi hisob yaratish', type: 'auth', fields: ['Ism', 'Email', 'Parol', 'Parolni takrorlang'] },
      { file: '03-email-verify', title: 'Email tasdiqlash', subtitle: 'Emailni tekshiring', type: 'auth-simple' },
      { file: '04-forgot-password', title: 'Parolni unutdim', subtitle: 'Parolni tiklash', type: 'auth', fields: ['Email'] },
      { file: '05-welcome-first-login', title: 'Xush kelibsiz!', subtitle: 'Birinchi kirish', type: 'auth-simple' },
    ]
  },
  {
    id: '03-onboarding', label: 'ONBOARDING', y: 2400,
    screens: [
      { file: '01-welcome', title: 'Welcome', subtitle: "Qulay Chat-ga xush kelibsiz", type: 'onboarding' },
      { file: '02-onboarding-setup', title: 'Setup', subtitle: "Workspace nomi va sozlamalar", type: 'onboarding', fields: ['Kompaniya nomi', 'Soha', 'Jamoa hajmi'] },
      { file: '03-workspace', title: 'Workspace', subtitle: 'Workspace preview', type: 'onboarding' },
      { file: '04-widget-customize', title: 'Widget Customize', subtitle: 'Chat widget ranglarini sozlash', type: 'onboarding' },
      { file: '05-widget-install', title: 'Widget Install', subtitle: "Kodni saytga o'rnatish", type: 'onboarding' },
      { file: '06-widget-verify', title: 'Widget Verify', subtitle: "O'rnatilganini tekshirish", type: 'onboarding' },
    ]
  },
  {
    id: '04-dashboard', label: 'DASHBOARD', y: 3600,
    screens: [
      { file: '01-dashboard', title: 'Dashboard tanlash', subtitle: 'Rolga mos dashboard', type: 'dashboard', nav: 'dashboard' },
      { file: '01-dashboard-admin', title: 'Admin Dashboard', subtitle: 'KPI, SLA nazorati', type: 'dashboard', nav: 'dashboard',
        metrics: [{l:'Faol chatlar',v:'47',t:'+12%'},{l:'Javob vaqti',v:'1.2m',t:'-8%'},{l:'CSAT bali',v:'4.6',t:'+3%'},{l:'SLA rioya',v:'94%',t:'+2%'}] },
      { file: '02-dashboard-agent', title: 'Agent Dashboard', subtitle: 'Mening navbatim', type: 'dashboard', nav: 'dashboard',
        metrics: [{l:'Mening chatlarim',v:'8',t:'3 yangi'},{l:"O'rtacha javob",v:'45s',t:'-12%'},{l:'Bugun yopilgan',v:'23',t:'+5'},{l:'Reyting',v:'4.8',t:'⭐'}] },
    ]
  },
  {
    id: '05-inbox', label: 'INBOX', y: 4800,
    screens: [
      { file: '01-inbox-chat', title: 'Inbox', subtitle: '3 ustunli operator interfeysi', type: 'inbox', nav: 'inbox' },
      { file: '02-chat-open', title: 'Chat Ochiq', subtitle: 'Faol chat oynasi', type: 'inbox', nav: 'inbox' },
      { file: '03-info-sidebar', title: 'Info Panel', subtitle: "Mijoz ma'lumotlari sidepanel", type: 'inbox', nav: 'inbox' },
    ]
  },
  {
    id: '06-automation', label: 'AUTOMATION', y: 6000,
    screens: [
      { file: '01-working-hours', title: 'Working Hours', subtitle: 'Ish vaqti jadvali', type: 'dashboard', nav: 'automation',
        subnav: ['Working Hours', 'Auto Reply', 'Triggers', 'Greetings'] },
      { file: '02-auto-reply', title: 'Auto Reply', subtitle: 'Avtomatik javoblar', type: 'dashboard', nav: 'automation',
        subnav: ['Working Hours', 'Auto Reply', 'Triggers', 'Greetings'] },
      { file: '03-triggers', title: 'Triggers', subtitle: "Trigger qoidalar ro'yxati", type: 'dashboard', nav: 'automation',
        subnav: ['Working Hours', 'Auto Reply', 'Triggers', 'Greetings'] },
      { file: '04-greetings', title: 'Greetings', subtitle: 'Salomlashuv xabarlari', type: 'dashboard', nav: 'automation',
        subnav: ['Working Hours', 'Auto Reply', 'Triggers', 'Greetings'] },
    ]
  },
  {
    id: '07-team', label: 'TEAM', y: 7200,
    screens: [
      { file: '01-agents', title: 'Agents', subtitle: "Agentlar ro'yxati va boshqarish", type: 'dashboard', nav: 'team',
        subnav: ['Agents', 'Agent Profile', 'Roles', 'Invitations'] },
      { file: '02-agent-profile', title: 'Agent Profile', subtitle: 'Agent profili va statistika', type: 'dashboard', nav: 'team',
        subnav: ['Agents', 'Agent Profile', 'Roles', 'Invitations'] },
      { file: '03-roles', title: 'Roles', subtitle: 'Rollar va ruxsatlar', type: 'dashboard', nav: 'team',
        subnav: ['Agents', 'Agent Profile', 'Roles', 'Invitations'] },
      { file: '04-invitations', title: 'Invitations', subtitle: 'Taklifnomalar', type: 'dashboard', nav: 'team',
        subnav: ['Agents', 'Agent Profile', 'Roles', 'Invitations'] },
    ]
  },
  {
    id: '08-analytics', label: 'ANALYTICS', y: 8400,
    screens: [
      { file: '01-overview', title: 'Overview', subtitle: 'Umumiy ko\'rsatkichlar', type: 'dashboard', nav: 'analytics',
        subnav: ['Overview','Response Times','Operators','SLA','Channels','Segments','Tags','Custom Reports','Export','My Stats'],
        metrics: [{l:'Jami chatlar',v:'1,247',t:'+18%'},{l:"O'rtacha javob",v:'1.2m',t:'-8%'},{l:'CSAT',v:'4.6/5',t:'+0.3'},{l:'Hal qilingan',v:'89%',t:'+5%'}] },
      { file: '02-response-times', title: 'Response Times', subtitle: 'Javob vaqtlari tahlili', type: 'dashboard', nav: 'analytics',
        subnav: ['Overview','Response Times','Operators','SLA','Channels','Segments','Tags','Custom Reports','Export','My Stats'] },
      { file: '03-operators', title: 'Operators', subtitle: 'Operatorlar statistikasi', type: 'dashboard', nav: 'analytics',
        subnav: ['Overview','Response Times','Operators','SLA','Channels','Segments','Tags','Custom Reports','Export','My Stats'] },
      { file: '04-operator-detail', title: 'Operator Detail', subtitle: 'Agent batafsil hisoboti', type: 'dashboard', nav: 'analytics',
        subnav: ['Overview','Response Times','Operators','SLA','Channels','Segments','Tags','Custom Reports','Export','My Stats'] },
      { file: '05-sla', title: 'SLA', subtitle: 'SLA monitoring', type: 'dashboard', nav: 'analytics',
        subnav: ['Overview','Response Times','Operators','SLA','Channels','Segments','Tags','Custom Reports','Export','My Stats'] },
      { file: '06-channels', title: 'Channels', subtitle: 'Kanal bo\'yicha tahlil', type: 'dashboard', nav: 'analytics',
        subnav: ['Overview','Response Times','Operators','SLA','Channels','Segments','Tags','Custom Reports','Export','My Stats'] },
      { file: '07-segments', title: 'Segments', subtitle: 'Segmentlar tahlili', type: 'dashboard', nav: 'analytics',
        subnav: ['Overview','Response Times','Operators','SLA','Channels','Segments','Tags','Custom Reports','Export','My Stats'] },
      { file: '08-tags', title: 'Tags', subtitle: 'Teglar statistikasi', type: 'dashboard', nav: 'analytics',
        subnav: ['Overview','Response Times','Operators','SLA','Channels','Segments','Tags','Custom Reports','Export','My Stats'] },
      { file: '09-custom-reports', title: 'Custom Reports', subtitle: 'Maxsus hisobotlar', type: 'dashboard', nav: 'analytics',
        subnav: ['Overview','Response Times','Operators','SLA','Channels','Segments','Tags','Custom Reports','Export','My Stats'] },
      { file: '10-export', title: 'Export', subtitle: 'Ma\'lumotlarni eksport qilish', type: 'dashboard', nav: 'analytics',
        subnav: ['Overview','Response Times','Operators','SLA','Channels','Segments','Tags','Custom Reports','Export','My Stats'] },
      { file: '11-my-stats', title: 'My Stats', subtitle: 'Shaxsiy statistikam', type: 'dashboard', nav: 'analytics',
        subnav: ['Overview','Response Times','Operators','SLA','Channels','Segments','Tags','Custom Reports','Export','My Stats'] },
    ]
  },
  {
    id: '09-settings', label: 'SETTINGS', y: 10800,
    screens: [
      { file: '01-workspace', title: 'Workspace', subtitle: 'Workspace sozlamalari', type: 'dashboard', nav: 'settings',
        subnav: ['Workspace','Widget','Security','Notifications','Profile','Privacy Export','Privacy Delete','Privacy Settings'] },
      { file: '02-widget-settings', title: 'Widget Settings', subtitle: 'Chat widget sozlamalari', type: 'dashboard', nav: 'settings',
        subnav: ['Workspace','Widget','Security','Notifications','Profile','Privacy Export','Privacy Delete','Privacy Settings'] },
      { file: '03-security', title: 'Security', subtitle: 'Xavfsizlik sozlamalari', type: 'dashboard', nav: 'settings',
        subnav: ['Workspace','Widget','Security','Notifications','Profile','Privacy Export','Privacy Delete','Privacy Settings'] },
      { file: '04-notifications', title: 'Notifications', subtitle: 'Bildirishnomalar', type: 'dashboard', nav: 'settings',
        subnav: ['Workspace','Widget','Security','Notifications','Profile','Privacy Export','Privacy Delete','Privacy Settings'] },
      { file: '05-profile', title: 'Profile', subtitle: 'Profil sozlamalari', type: 'dashboard', nav: 'settings',
        subnav: ['Workspace','Widget','Security','Notifications','Profile','Privacy Export','Privacy Delete','Privacy Settings'] },
      { file: '06-privacy-export', title: 'Privacy Export', subtitle: "Ma'lumotlarni eksport", type: 'dashboard', nav: 'settings',
        subnav: ['Workspace','Widget','Security','Notifications','Profile','Privacy Export','Privacy Delete','Privacy Settings'] },
      { file: '07-privacy-delete', title: 'Privacy Delete', subtitle: "Ma'lumotlarni o'chirish", type: 'dashboard', nav: 'settings',
        subnav: ['Workspace','Widget','Security','Notifications','Profile','Privacy Export','Privacy Delete','Privacy Settings'] },
      { file: '08-privacy-settings', title: 'Privacy Settings', subtitle: 'Maxfiylik sozlamalari', type: 'dashboard', nav: 'settings',
        subnav: ['Workspace','Widget','Security','Notifications','Profile','Privacy Export','Privacy Delete','Privacy Settings'] },
    ]
  },
  {
    id: '10-billing', label: 'BILLING', y: 12000,
    screens: [
      { file: '01-plan', title: 'Plan', subtitle: 'Tarif rejasi', type: 'dashboard', nav: 'billing',
        subnav: ['Plan','Payment','Invoices','Usage'] },
      { file: '02-payment', title: 'Payment', subtitle: "To'lov usullari", type: 'dashboard', nav: 'billing',
        subnav: ['Plan','Payment','Invoices','Usage'] },
      { file: '03-invoices', title: 'Invoices', subtitle: 'Hisob-fakturalar', type: 'dashboard', nav: 'billing',
        subnav: ['Plan','Payment','Invoices','Usage'] },
      { file: '04-usage', title: 'Usage', subtitle: 'Foydalanish statistikasi', type: 'dashboard', nav: 'billing',
        subnav: ['Plan','Payment','Invoices','Usage'] },
    ]
  },
  {
    id: '11-chat-widget', label: 'CHAT WIDGET', y: 13200,
    screens: [
      { file: '01-widget-launcher', title: 'Widget Launcher', subtitle: 'Launcher tugmasi', type: 'widget' },
      { file: '02-widget-chat', title: 'Widget Chat', subtitle: 'Chat oynasi', type: 'widget' },
      { file: '03-widget-offline', title: 'Widget Offline', subtitle: 'Offline xabar formasi', type: 'widget' },
      { file: '04-widget-csat', title: 'Widget CSAT', subtitle: 'Feedback so\'rovi', type: 'widget' },
      { file: '05-widget-states', title: 'Widget States', subtitle: 'Barcha holatlar', type: 'widget' },
    ]
  },
  {
    id: '12-contacts', label: 'CONTACTS', y: 14400,
    screens: [
      { file: '01-contacts-list', title: 'Contacts', subtitle: "Kontaktlar ro'yxati", type: 'dashboard', nav: 'contacts',
        subnav: ['Contacts','Contact Profile','Organizations','Org Detail','Segments','Import/Export'] },
      { file: '02-contact-profile', title: 'Contact Profile', subtitle: "Kontakt profili", type: 'dashboard', nav: 'contacts',
        subnav: ['Contacts','Contact Profile','Organizations','Org Detail','Segments','Import/Export'] },
      { file: '03-organizations', title: 'Organizations', subtitle: 'Tashkilotlar', type: 'dashboard', nav: 'contacts',
        subnav: ['Contacts','Contact Profile','Organizations','Org Detail','Segments','Import/Export'] },
      { file: '04-org-detail', title: 'Org Detail', subtitle: "Tashkilot batafsil", type: 'dashboard', nav: 'contacts',
        subnav: ['Contacts','Contact Profile','Organizations','Org Detail','Segments','Import/Export'] },
      { file: '05-segments', title: 'Segments', subtitle: 'Segmentlar', type: 'dashboard', nav: 'contacts',
        subnav: ['Contacts','Contact Profile','Organizations','Org Detail','Segments','Import/Export'] },
      { file: '06-import-export', title: 'Import/Export', subtitle: 'Ma\'lumotlar almashinuvi', type: 'dashboard', nav: 'contacts',
        subnav: ['Contacts','Contact Profile','Organizations','Org Detail','Segments','Import/Export'] },
    ]
  },
  {
    id: '13-visitors', label: 'VISITORS', y: 15600,
    screens: [
      { file: '01-visitors-list', title: 'Online Visitors', subtitle: 'Sayt ziyoratchilari', type: 'dashboard', nav: 'visitors',
        subnav: ['Visitors List','Visitor Profile','Visitors Map'] },
      { file: '02-visitor-profile', title: 'Visitor Profile', subtitle: 'Ziyoratchi profili', type: 'dashboard', nav: 'visitors',
        subnav: ['Visitors List','Visitor Profile','Visitors Map'] },
      { file: '03-visitors-map', title: 'Visitors Map', subtitle: 'Xarita ko\'rinishi', type: 'dashboard', nav: 'visitors',
        subnav: ['Visitors List','Visitor Profile','Visitors Map'] },
    ]
  },
  {
    id: '14-team-chat', label: 'TEAM CHAT', y: 16800,
    screens: [
      { file: '01-team-chat', title: 'Team Chat', subtitle: 'Ichki xabarlar', type: 'inbox', nav: 'team-chat' },
      { file: '02-room-settings', title: 'Room Settings', subtitle: 'Xona sozlamalari', type: 'dashboard', nav: 'team-chat',
        subnav: ['Team Chat','Room Settings','Notifications'] },
      { file: '03-notifications', title: 'Notifications', subtitle: 'Chat bildirishnomalari', type: 'dashboard', nav: 'team-chat',
        subnav: ['Team Chat','Room Settings','Notifications'] },
    ]
  },
  {
    id: '15-knowledge-base', label: 'KNOWLEDGE BASE', y: 18000,
    screens: [
      { file: '01-kb-dashboard', title: 'KB Dashboard', subtitle: 'Bilim bazasi boshqaruvi', type: 'dashboard', nav: 'kb',
        subnav: ['Dashboard','Article Editor','Categories','KB Settings','KB Analytics'] },
      { file: '02-article-editor', title: 'Article Editor', subtitle: 'Maqola tahrirlash', type: 'dashboard', nav: 'kb',
        subnav: ['Dashboard','Article Editor','Categories','KB Settings','KB Analytics'] },
      { file: '03-categories', title: 'Categories', subtitle: 'Kategoriyalar', type: 'dashboard', nav: 'kb',
        subnav: ['Dashboard','Article Editor','Categories','KB Settings','KB Analytics'] },
      { file: '04-kb-settings', title: 'KB Settings', subtitle: 'Bilim bazasi sozlamalari', type: 'dashboard', nav: 'kb',
        subnav: ['Dashboard','Article Editor','Categories','KB Settings','KB Analytics'] },
      { file: '05-kb-analytics', title: 'KB Analytics', subtitle: 'Maqolalar statistikasi', type: 'dashboard', nav: 'kb',
        subnav: ['Dashboard','Article Editor','Categories','KB Settings','KB Analytics'] },
      { file: '06-public-home', title: 'Public Home', subtitle: 'Ommaviy bosh sahifa', type: 'public-kb' },
      { file: '07-public-search', title: 'Public Search', subtitle: 'Ommaviy qidiruv', type: 'public-kb' },
      { file: '08-public-category', title: 'Public Category', subtitle: 'Ommaviy kategoriya', type: 'public-kb' },
      { file: '09-public-article', title: 'Public Article', subtitle: 'Ommaviy maqola', type: 'public-kb' },
    ]
  },
  {
    id: '16-addons', label: 'ADDONS', y: 19800,
    screens: [
      { file: '01-addons-catalog', title: 'Addons Catalog', subtitle: 'Marketplace katalogi', type: 'dashboard', nav: 'addons',
        subnav: ['Catalog','Active Addons','Addon Detail','Addon Settings'] },
      { file: '02-active-addons', title: 'Active Addons', subtitle: 'Faol qo\'shimchalar', type: 'dashboard', nav: 'addons',
        subnav: ['Catalog','Active Addons','Addon Detail','Addon Settings'] },
      { file: '03-addon-detail', title: 'Addon Detail', subtitle: "Qo'shimcha batafsil", type: 'dashboard', nav: 'addons',
        subnav: ['Catalog','Active Addons','Addon Detail','Addon Settings'] },
      { file: '04-addon-settings', title: 'Addon Settings', subtitle: "Qo'shimcha sozlamalari", type: 'dashboard', nav: 'addons',
        subnav: ['Catalog','Active Addons','Addon Detail','Addon Settings'] },
    ]
  },
  {
    id: '17-developer', label: 'DEVELOPER', y: 21000,
    screens: [
      { file: '01-api-keys', title: 'API Keys', subtitle: 'API kalitlari', type: 'dashboard', nav: 'developer',
        subnav: ['API Keys','Webhooks','Logs'] },
      { file: '02-webhooks', title: 'Webhooks', subtitle: 'Webhook sozlamalari', type: 'dashboard', nav: 'developer',
        subnav: ['API Keys','Webhooks','Logs'] },
      { file: '03-logs', title: 'Logs', subtitle: 'API loglar', type: 'dashboard', nav: 'developer',
        subnav: ['API Keys','Webhooks','Logs'] },
    ]
  },
  {
    id: '18-system', label: 'SYSTEM', y: 22200,
    screens: [
      { file: '01-error-404', title: '404 Not Found', subtitle: 'Sahifa topilmadi', type: 'system-error', errorCode: '404' },
      { file: '02-error-500', title: '500 Server Error', subtitle: 'Server xatosi', type: 'system-error', errorCode: '500' },
      { file: '03-error-403', title: '403 Forbidden', subtitle: 'Ruxsat yo\'q', type: 'system-error', errorCode: '403' },
      { file: '04-maintenance', title: 'Maintenance', subtitle: 'Texnik ishlar', type: 'system-error', errorCode: '🔧' },
      { file: '05-offline', title: 'Offline', subtitle: 'Internet yo\'q', type: 'system-error', errorCode: '📡' },
    ]
  }
];

// ═══════════════════════════════════════════
// SIDEBAR NAV ITEMS
// ═══════════════════════════════════════════
const SIDEBAR_ITEMS = [
  { id: 'dashboard', label: 'Dashboard', icon: '📊' },
  { id: 'inbox', label: 'Inbox', icon: '💬' },
  { id: 'contacts', label: 'Contacts', icon: '👤' },
  { id: 'visitors', label: 'Visitors', icon: '👁' },
  { id: 'automation', label: 'Automation', icon: '⚡' },
  { id: 'team', label: 'Team', icon: '👥' },
  { id: 'team-chat', label: 'Team Chat', icon: '🗨' },
  { id: 'analytics', label: 'Analytics', icon: '📈' },
  { id: 'kb', label: 'Knowledge Base', icon: '📚' },
  { id: 'addons', label: 'Addons', icon: '🧩' },
  { id: 'developer', label: 'Developer', icon: '🔧' },
  { id: 'settings', label: 'Settings', icon: '⚙' },
  { id: 'billing', label: 'Billing', icon: '💳' },
];

// ═══════════════════════════════════════════
// HELPER CODE (prepended to each .js file)
// ═══════════════════════════════════════════
function getHelperCode() {
  return `
// ═══ QULAY CHAT Design System ═══
var PRIMARY = ${DS.primary};
var PRIMARY_HOVER = ${DS.primaryHover};
var PRIMARY_LIGHT = ${DS.primaryLight};
var WHITE = ${DS.white};
var BG = ${DS.bg};
var G50 = ${DS.gray50};
var G100 = ${DS.gray100};
var G200 = ${DS.gray200};
var G300 = ${DS.gray300};
var G400 = ${DS.gray400};
var G500 = ${DS.gray500};
var G600 = ${DS.gray600};
var G700 = ${DS.gray700};
var G800 = ${DS.gray800};
var G900 = ${DS.gray900};
var SUCCESS = ${DS.success};
var SUCCESS_L = ${DS.successLight};
var DANGER = ${DS.danger};
var DANGER_L = ${DS.dangerLight};
var WARNING = ${DS.warning};
var WARNING_L = ${DS.warningLight};
var INFO = ${DS.info};
var INFO_L = ${DS.infoLight};
var SIDEBAR_BG = ${DS.sidebarBg};
var SIDEBAR_TEXT = ${DS.sidebarText};

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
`;
}

// ═══════════════════════════════════════════
// SCREEN GENERATORS
// ═══════════════════════════════════════════

function genSidebar(activeNav) {
  let items = SIDEBAR_ITEMS.map((item, i) => {
    const isActive = item.id === activeNav;
    const yPos = 80 + i * 40;
    return `
  // Nav: ${item.label}
  var nav${i}=frame(sidebar,"Nav ${item.label}",240,36,{x:10,y:${yPos},color:${isActive ? 'PRIMARY' : '{r:0,g:0,b:0}'} ,radius:8${isActive?'':',color:{r:17/255,g:24/255,b:39/255}'}});
  ${isActive ? '' : `nav${i}.fills=[];`}
  txt(nav${i},"${item.label}",{style:"Medium",size:13,color:${isActive?'WHITE':'SIDEBAR_TEXT'},x:36,y:9});`;
  }).join('');

  return `
  // ═══ SIDEBAR ═══
  var sidebar=frame(screen,"Sidebar",260,900,{x:0,y:0,color:SIDEBAR_BG});
  
  // Logo
  var sLogo=frame(sidebar,"Logo",220,40,{x:20,y:20,color:PRIMARY,radius:8,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  txt(sLogo,"QULAY CHAT",{style:"Bold",size:13,color:WHITE});
  ${items}
  `;
}

function genHeader(title, subtitle, buttons) {
  const btns = (buttons || ['Saqlash']).map((b, i) => {
    const isPrimary = i === 0;
    return `
  var hBtn${i}=frame(headerActions,"Btn ${b}",${b.length*9+32},36,{color:${isPrimary?'PRIMARY':'WHITE'},radius:8,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"${isPrimary?'':",stroke:G300"}});
  txt(hBtn${i},"${b}",{style:"Medium",size:13,color:${isPrimary?'WHITE':'G700'}});`;
  }).join('');

  return `
  // ═══ HEADER ═══
  var header=frame(content,"Header",1180,56,{color:WHITE,layout:"HORIZONTAL",alignX:"CENTER",padX:24});
  header.primaryAxisAlignItems="SPACE_BETWEEN";header.counterAxisAlignItems="CENTER";
  var headerLeft=frame(header,"Header Left",400,40,{layout:"VERTICAL",spacing:2});
  headerLeft.primaryAxisSizingMode="AUTO";headerLeft.counterAxisSizingMode="AUTO";
  txt(headerLeft,"${title}",{style:"Semi Bold",size:20,color:G900});
  txt(headerLeft,"${subtitle}",{size:13,color:G500});
  var headerActions=frame(header,"Actions",300,36,{layout:"HORIZONTAL",spacing:8});
  headerActions.primaryAxisSizingMode="AUTO";headerActions.counterAxisSizingMode="AUTO";
  headerActions.primaryAxisAlignItems="MAX";
  ${btns}
  `;
}

function genSubnav(tabs, activeIdx) {
  const tabItems = tabs.map((tab, i) => {
    const isActive = i === (activeIdx || 0);
    return `
  var sTab${i}=frame(subnav,"Tab ${tab}",${tab.length*8+24},36,{color:${isActive?'PRIMARY_LIGHT':'{r:0,g:0,b:0}'},radius:6,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
  ${isActive?'':`sTab${i}.fills=[];`}
  txt(sTab${i},"${tab}",{style:"Medium",size:13,color:${isActive?'PRIMARY':'G600'}});`;
  }).join('');

  return `
  // Subnav
  var subnavWrap=frame(content,"Subnav Wrap",1180,44,{color:WHITE,padX:24,padY:4});
  subnavWrap.strokes=[{type:'SOLID',color:G200}];subnavWrap.strokeWeight=1;
  subnavWrap.strokeAlign="INSIDE";subnavWrap.strokesIncludedInLayout=false;
  var subnav=frame(subnavWrap,"Subnav",1132,36,{layout:"HORIZONTAL",spacing:4});
  subnav.primaryAxisSizingMode="AUTO";subnav.counterAxisSizingMode="AUTO";
  ${tabItems}
  `;
}

function genMetricsRow(metrics) {
  if (!metrics || !metrics.length) return '';
  const cards = metrics.map((m, i) => `
  var mc${i}=frame(metricsRow,"Metric ${m.l}",270,100,{color:WHITE,radius:12,layout:"VERTICAL",spacing:6,pad:20,stroke:G200,shadow:true});
  txt(mc${i},"${m.l}",{size:13,color:G500});
  txt(mc${i},"${m.v}",{style:"Bold",size:28,color:G900});
  txt(mc${i},"${m.t}",{size:12,color:${m.t.startsWith('+')?'SUCCESS':m.t.startsWith('-')?'DANGER':'G500'}});
  `).join('');

  return `
  // Metrics
  var metricsRow=frame(content,"Metrics",1180,120,{layout:"HORIZONTAL",spacing:16,padX:24,padY:10});
  metricsRow.primaryAxisSizingMode="FIXED";
  ${cards}
  `;
}

function genCard(title, bodyContent, idx) {
  return `
  // Card: ${title}
  var card${idx}=frame(content,"Card ${title}",1132,200,{x:24,color:WHITE,radius:12,layout:"VERTICAL",stroke:G200,shadow:true});
  card${idx}.primaryAxisSizingMode="AUTO";
  var cardH${idx}=frame(card${idx},"Card Header",1132,48,{color:WHITE,layout:"HORIZONTAL",padX:20,padY:14,alignX:"CENTER"});
  cardH${idx}.primaryAxisAlignItems="SPACE_BETWEEN";cardH${idx}.layoutSizingHorizontal="FILL";
  txt(cardH${idx},"${title}",{style:"Semi Bold",size:15,color:G900});
  var cardB${idx}=frame(card${idx},"Card Body",1132,150,{padX:20,padY:16});
  cardB${idx}.layoutSizingHorizontal="FILL";cardB${idx}.primaryAxisSizingMode="AUTO";cardB${idx}.layoutMode="VERTICAL";cardB${idx}.itemSpacing=8;
  ${bodyContent}
  rect(card${idx},1132,1,G200,{});
  `;
}

function genTableRow(cols, idx, cardIdx) {
  const colCode = cols.map((c, ci) => `
  txt(tRow${cardIdx}_${idx},"${c}",{size:13,color:${ci===0?'G900':'G600'},x:${ci*220+16},y:10});`).join('');
  return `
  var tRow${cardIdx}_${idx}=frame(cardB${cardIdx},"Row ${idx}",1092,36,{color:${idx%2===0?'WHITE':'G50'},radius:4});
  tRow${cardIdx}_${idx}.layoutSizingHorizontal="FILL";
  ${colCode}`;
}

// ═══════════════════════════════════════════
// FULL SCREEN GENERATORS BY TYPE
// ═══════════════════════════════════════════

function generateAuthScreen(screen, x, y, sectionLabel) {
  const fields = screen.fields || ['Email', 'Parol'];
  const fieldCode = fields.map((f, i) => `
  // Field: ${f}
  var fld${i}=frame(card,"Field ${f}",400,70,{layout:"VERTICAL",spacing:6});
  fld${i}.primaryAxisSizingMode="AUTO";
  txt(fld${i},"${f}",{style:"Medium",size:14,color:G700});
  var inp${i}=frame(fld${i},"Input",400,44,{color:WHITE,radius:8,stroke:G300,layout:"HORIZONTAL",alignX:"CENTER",padX:16});
  txt(inp${i},"${f} kiriting",{size:14,color:G400});
  inp${i}.layoutSizingHorizontal="FILL";
  card.appendChild(fld${i});fld${i}.layoutSizingHorizontal="FILL";
  `).join('');

  return `
// ${sectionLabel} / ${screen.title}
var screen=figma.createFrame();
screen.name="${screen.file} - ${screen.title}";
screen.resize(1440,900);
screen.fills=[{type:'SOLID',color:BG}];
screen.layoutMode="VERTICAL";screen.primaryAxisAlignItems="CENTER";screen.counterAxisAlignItems="CENTER";
screen.x=${x};screen.y=${y};

var card=frame(screen,"Card",480,100,{color:WHITE,radius:12,layout:"VERTICAL",alignX:"CENTER",pad:40,spacing:0,stroke:G200,shadow:true});
card.primaryAxisSizingMode="AUTO";card.counterAxisSizingMode="FIXED";card.resize(480,100);

// Logo
var logo=frame(card,"Logo",140,40,{color:PRIMARY,radius:8,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
txt(logo,"QULAY CHAT",{style:"Bold",size:13,color:WHITE});

var sp0=frame(card,"Sp",400,24);sp0.fills=[];card.appendChild(sp0);sp0.layoutSizingHorizontal="FILL";

txt(card,"${screen.title}",{style:"Semi Bold",size:24,color:G900,align:"CENTER"});
txt(card,"${screen.subtitle}",{size:14,color:G500,align:"CENTER"});

var sp1=frame(card,"Sp",400,20);sp1.fills=[];card.appendChild(sp1);sp1.layoutSizingHorizontal="FILL";

${screen.type === 'auth' ? `
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
` : ''}

${screen.type !== 'auth-simple' ? fieldCode : `
// Icon / Illustration
var iconFrame=frame(card,"Icon",80,80,{color:PRIMARY_LIGHT,radius:40,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
txt(iconFrame,"✉",{size:32,color:PRIMARY});

var sp2=frame(card,"Sp",400,16);sp2.fills=[];card.appendChild(sp2);sp2.layoutSizingHorizontal="FILL";
txt(card,"${screen.subtitle}",{size:14,color:G500,align:"CENTER",w:400,wrap:true});
`}

// Primary Button
var pBtn=frame(card,"Btn Primary",400,44,{color:PRIMARY,radius:8,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
txt(pBtn,"${screen.type==='auth-simple'?'Davom etish':screen.title}",{style:"Semi Bold",size:14,color:WHITE});
card.appendChild(pBtn);pBtn.layoutSizingHorizontal="FILL";

// Footer
var foot=frame(card,"Footer",400,20,{layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER",spacing:4,padY:16});
foot.counterAxisSizingMode="AUTO";
txt(foot,"${screen.type==='auth'?"Akkauntingiz bormi?":""}",{size:14,color:G500});
txt(foot,"${screen.type==='auth'?'Kirish':''}",{style:"Medium",size:14,color:PRIMARY});
card.appendChild(foot);foot.layoutSizingHorizontal="FILL";

figma.currentPage.appendChild(screen);
`;
}

function generateOnboardingScreen(screen, x, y, sectionLabel) {
  const fields = screen.fields || [];
  const fieldCode = fields.map((f, i) => `
  var oFld${i}=frame(oCard,"Field ${f}",480,70,{layout:"VERTICAL",spacing:6});
  oFld${i}.primaryAxisSizingMode="AUTO";
  txt(oFld${i},"${f}",{style:"Medium",size:14,color:G700});
  var oInp${i}=frame(oFld${i},"Input",480,44,{color:WHITE,radius:8,stroke:G300,layout:"HORIZONTAL",alignX:"CENTER",padX:16});
  txt(oInp${i},"${f} kiriting...",{size:14,color:G400});
  oInp${i}.layoutSizingHorizontal="FILL";
  oCard.appendChild(oFld${i});oFld${i}.layoutSizingHorizontal="FILL";
  `).join('');

  return `
// ${sectionLabel} / ${screen.title}
var screen=figma.createFrame();
screen.name="${screen.file} - ${screen.title}";
screen.resize(1440,900);
screen.fills=[{type:'SOLID',color:WHITE}];
screen.x=${x};screen.y=${y};

// Left panel (illustration)
var leftP=frame(screen,"Left Panel",560,900,{x:0,y:0,color:PRIMARY});
txt(leftP,"QULAY CHAT",{style:"Bold",size:28,color:WHITE,x:60,y:80});
txt(leftP,"${screen.subtitle}",{style:"Regular",size:16,color:{r:200/255,g:200/255,b:255/255},x:60,y:120});

// Steps indicator
var steps=frame(leftP,"Steps",440,40,{x:60,y:800,layout:"HORIZONTAL",spacing:12});
steps.fills=[];
${[1,2,3,4,5,6].map((s,i) => `
var dot${i}=figma.createEllipse();dot${i}.resize(10,10);dot${i}.fills=[{type:'SOLID',color:${i===0?'WHITE':'{r:1,g:1,b:1}'}}];dot${i}.opacity=${i===0?1:0.4};steps.appendChild(dot${i});`).join('')}

// Right panel
var rightP=frame(screen,"Right Panel",880,900,{x:560,y:0,color:WHITE,layout:"VERTICAL",alignX:"CENTER",alignY:"CENTER"});

var oCard=frame(rightP,"Card",560,100,{layout:"VERTICAL",spacing:20,pad:40,alignX:"CENTER"});
oCard.primaryAxisSizingMode="AUTO";oCard.counterAxisSizingMode="FIXED";oCard.resize(560,100);

txt(oCard,"${screen.title}",{style:"Semi Bold",size:28,color:G900,align:"CENTER"});
txt(oCard,"${screen.subtitle}",{size:14,color:G500,align:"CENTER"});

var sp=frame(oCard,"Sp",480,8);sp.fills=[];oCard.appendChild(sp);sp.layoutSizingHorizontal="FILL";

${fieldCode}

${screen.file.includes('widget-customize') ? `
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
` : ''}

${screen.file.includes('widget-install') ? `
// Code block
var codeBlock=frame(oCard,"Code Block",480,120,{color:G900,radius:8,pad:16});
codeBlock.layoutSizingHorizontal="FILL";
txt(codeBlock,"<script src=\\"https://widget.qulaychat.uz/v1.js\\"></script>",{size:12,color:{r:0.6,g:1,b:0.6},x:0,y:0,w:448,wrap:true});
txt(codeBlock,"<!-- Sayt </body> dan oldin qo'ying -->",{size:11,color:G500,x:0,y:50});
` : ''}

// Buttons
var btnRow=frame(oCard,"Buttons",480,44,{layout:"HORIZONTAL",spacing:12});
btnRow.primaryAxisSizingMode="AUTO";btnRow.counterAxisSizingMode="AUTO";
var backBtn=frame(btnRow,"Back",100,44,{color:WHITE,radius:8,stroke:G300,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
txt(backBtn,"Ortga",{style:"Medium",size:14,color:G700});
var nextBtn=frame(btnRow,"Next",160,44,{color:PRIMARY,radius:8,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
txt(nextBtn,"Keyingi",{style:"Semi Bold",size:14,color:WHITE});

figma.currentPage.appendChild(screen);
`;
}

function generateDashboardScreen(screen, x, y, sectionLabel) {
  const subnavCode = screen.subnav ? genSubnav(screen.subnav, 0) : '';
  const metricsCode = screen.metrics ? genMetricsRow(screen.metrics) : '';

  return `
// ${sectionLabel} / ${screen.title}
var screen=figma.createFrame();
screen.name="${screen.file} - ${screen.title}";
screen.resize(1440,900);
screen.fills=[{type:'SOLID',color:BG}];
screen.x=${x};screen.y=${y};

${genSidebar(screen.nav)}

// Content area
var content=frame(screen,"Content",1180,900,{x:260,y:0,color:BG,layout:"VERTICAL",spacing:0});

${genHeader(screen.title, screen.subtitle)}

${subnavCode}

${metricsCode}

// Spacer
var contentSpacer=frame(content,"Spacer",1180,16);contentSpacer.fills=[];

${genCard(screen.title + " ma'lumotlari", `
  txt(cardB0,"Bu sahifada ${screen.title} bo'limining asosiy kontenti joylashadi.",{size:14,color:G600,w:600,wrap:true});
  txt(cardB0,"HTML sahifa: html/${sectionLabel.toLowerCase().replace(/ /g,'-')}/${screen.file}.html",{size:12,color:G400,w:600});
`, 0)}

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
`;
}

function generateInboxScreen(screen, x, y, sectionLabel) {
  return `
// ${sectionLabel} / ${screen.title}
var screen=figma.createFrame();
screen.name="${screen.file} - ${screen.title}";
screen.resize(1440,900);
screen.fills=[{type:'SOLID',color:BG}];
screen.x=${x};screen.y=${y};

${genSidebar(screen.nav)}

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
${[
  {name:'Ahmad Valiyev',msg:'Salom, tariflar haqida savol bor.',time:'2m',ch:'Web',status:'online'},
  {name:'Dilnoza R.',msg:'Telegram integratsiyasi ishlamayapti.',time:'5m',ch:'Telegram',status:'away'},
  {name:'Rustam K.',msg:'Buyurtma statusini tekshira olasizmi?',time:'11m',ch:'WhatsApp',status:'offline'},
  {name:'Malika O.',msg:'Rahmat, hammasi tushunarli.',time:'32m',ch:'Email',status:'offline'},
  {name:'Olim E.',msg:'Demo sorovi yubordim.',time:'1h',ch:'Web',status:'online'},
  {name:'Shaxlo N.',msg:'Widget rangi ozgarmayapti.',time:'2h',ch:'Web',status:'away'},
  {name:'Farrux T.',msg:'API key haqida savol.',time:'3h',ch:'Web',status:'offline'},
].map((c,i) => `
var ci${i}=frame(chatList,"Chat ${c.name}",320,72,{x:0,y:${108+i*72},color:${i===0?'PRIMARY_LIGHT':'WHITE'},layout:"HORIZONTAL",padX:16,padY:12,spacing:12,alignX:"CENTER"});
ci${i}.strokes=[{type:'SOLID',color:G100}];ci${i}.strokeWeight=1;
var dot${i}=figma.createEllipse();dot${i}.resize(8,8);dot${i}.fills=[{type:'SOLID',color:${c.status==='online'?'SUCCESS':c.status==='away'?'WARNING':'G300'}}];ci${i}.appendChild(dot${i});
var ciInfo${i}=frame(ci${i},"Info",240,48,{layout:"VERTICAL",spacing:4});ciInfo${i}.primaryAxisSizingMode="AUTO";ciInfo${i}.counterAxisSizingMode="AUTO";
txt(ciInfo${i},"${c.name}",{style:"Semi Bold",size:13,color:G900});
txt(ciInfo${i},"${c.msg}",{size:12,color:G500});
var ciMeta${i}=frame(ci${i},"Meta",40,48,{layout:"VERTICAL",spacing:4,alignX:"MAX"});ciMeta${i}.primaryAxisSizingMode="AUTO";ciMeta${i}.counterAxisSizingMode="AUTO";
txt(ciMeta${i},"${c.time}",{size:11,color:G400});
var chPill${i}=frame(ciMeta${i},"Pill",40,18,{color:${c.ch==='Web'?'INFO_L':c.ch==='Telegram'?'{r:0.9,g:0.95,b:1}':'G100'},radius:4,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
chPill${i}.primaryAxisSizingMode="AUTO";chPill${i}.counterAxisSizingMode="AUTO";chPill${i}.paddingLeft=6;chPill${i}.paddingRight=6;
txt(chPill${i},"${c.ch}",{size:10,color:${c.ch==='Web'?'INFO':'G600'}});
`).join('')}

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
${[{l:'Kanal',v:'Web Chat'},{l:'Davlat',v:"O'zbekiston"},{l:'Brauzer',v:'Chrome 120'},{l:'Sahifa',v:'/pricing'},{l:'Birinchi tashrif',v:'2026-02-20'},{l:'Jami chatlar',v:'5'}].map((item,i) => `
txt(infoPanel,"${item.l}",{size:12,color:G500,x:16,y:${180+i*36}});
txt(infoPanel,"${item.v}",{style:"Medium",size:13,color:G900,x:140,y:${180+i*36}});
rect(infoPanel,288,1,G100,{x:16,y:${200+i*36}});
`).join('')}

figma.currentPage.appendChild(screen);
`;
}

function generateWidgetScreen(screen, x, y, sectionLabel) {
  return `
// ${sectionLabel} / ${screen.title}
var screen=figma.createFrame();
screen.name="${screen.file} - ${screen.title}";
screen.resize(390,700);
screen.fills=[{type:'SOLID',color:G100}];
screen.x=${x};screen.y=${y};

${screen.file === '01-widget-launcher' ? `
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
` : screen.file === '02-widget-chat' ? `
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
` : screen.file === '03-widget-offline' ? `
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
` : screen.file === '04-widget-csat' ? `
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
${[1,2,3,4,5].map(s => `
var star${s}=frame(stars,"Star",40,40,{color:${s<=4?'WARNING':'G200'},radius:20,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
txt(star${s},"★",{size:20,color:${s<=4?'WHITE':'G400'}});
`).join('')}

txt(widget,"4 / 5",{style:"Bold",size:24,color:G900,x:155,y:240,align:"CENTER"});

// Comment
var csatInput=frame(widget,"Comment",330,80,{x:20,y:290,color:WHITE,radius:8,stroke:G300,padX:12,padY:12});
txt(csatInput,"Izoh qoldiring (ixtiyoriy)...",{size:13,color:G400});

var csatBtn=frame(widget,"Submit",330,44,{x:20,y:390,color:PRIMARY,radius:8,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
txt(csatBtn,"Baholashni yuborish",{style:"Semi Bold",size:14,color:WHITE});
` : `
// Widget states overview
var widget=frame(screen,"Widget",370,640,{x:10,y:10,color:WHITE,radius:16,shadow:true});
var wHeader=frame(widget,"Header",370,50,{x:0,y:0,color:PRIMARY,radius:0});
wHeader.topLeftRadius=16;wHeader.topRightRadius=16;
txt(wHeader,"Widget States",{style:"Bold",size:14,color:WHITE,x:20,y:14});

${['Online','Offline','Typing','Pre-chat Form','CSAT'].map((st,i) => `
var stCard${i}=frame(widget,"State ${st}",330,60,{x:20,y:${65+i*70},color:${i%2===0?'G50':'WHITE'},radius:8,stroke:G200,layout:"VERTICAL",pad:12,spacing:4});
stCard${i}.primaryAxisSizingMode="AUTO";
txt(stCard${i},"${st}",{style:"Semi Bold",size:14,color:G900});
txt(stCard${i},"${st} holatidagi widget ko'rinishi",{size:12,color:G500});
`).join('')}
`}

figma.currentPage.appendChild(screen);
`;
}

function generateLandingScreen(screen, x, y, sectionLabel) {
  return `
// LANDING PAGE
var screen=figma.createFrame();
screen.name="${screen.file} - ${screen.title}";
screen.resize(1440,3200);
screen.fills=[{type:'SOLID',color:WHITE}];
screen.x=${x};screen.y=${y};

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
${['Artel','Korzinka','UzCard','Beeline','Ucell'].map((brand,i) => `
var tLogo${i}=frame(trustLogos,"Logo",120,36,{color:G100,radius:8,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
txt(tLogo${i},"${brand}",{style:"Medium",size:13,color:G500});
`).join('')}

// ═══ FEATURES ═══
var features=frame(screen,"Features",1440,500,{x:0,y:1220,color:WHITE,layout:"VERTICAL",alignX:"CENTER",padY:60,spacing:40});
txt(features,"Asosiy imkoniyatlar",{style:"Bold",size:36,color:G900,align:"CENTER"});
txt(features,"Biznesni o'stirish uchun zarur barcha vositalar",{size:16,color:G500,align:"CENTER"});
var featGrid=frame(features,"Grid",1100,300,{layout:"HORIZONTAL",spacing:24,alignX:"CENTER"});
featGrid.primaryAxisSizingMode="AUTO";featGrid.counterAxisSizingMode="AUTO";
${[
  {icon:'💬',title:'Real-time Chat',desc:'Mijozlar bilan bir zumda aloqa'},
  {icon:'🤖',title:'Avtomatlashtirish',desc:'Avtomatik javoblar va routinglar'},
  {icon:'📊',title:'Chuqur tahlillar',desc:'SLA, CSAT va jamoa samaradorligi'},
].map((f,i) => `
var feat${i}=frame(featGrid,"Feature",340,240,{color:WHITE,radius:16,stroke:G200,layout:"VERTICAL",pad:24,spacing:16,shadow:true});
feat${i}.primaryAxisSizingMode="AUTO";
var fIcon${i}=frame(feat${i},"Icon",56,56,{color:PRIMARY_LIGHT,radius:14,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
txt(fIcon${i},"${f.icon}",{size:24});
txt(feat${i},"${f.title}",{style:"Semi Bold",size:20,color:G900});
txt(feat${i},"${f.desc}",{size:14,color:G500,w:292,wrap:true});
`).join('')}

// ═══ PRICING ═══
var pricing=frame(screen,"Pricing",1440,600,{x:0,y:1800,color:G50,layout:"VERTICAL",alignX:"CENTER",padY:60,spacing:40});
txt(pricing,"Tariflar",{style:"Bold",size:36,color:G900,align:"CENTER"});
var pricingGrid=frame(pricing,"Grid",1100,420,{layout:"HORIZONTAL",spacing:24,alignX:"CENTER"});
pricingGrid.primaryAxisSizingMode="AUTO";pricingGrid.counterAxisSizingMode="AUTO";
${[
  {name:'Free',price:'$0',desc:'Kichik jamoalar uchun',features:['2 agent','Web chat','Email support']},
  {name:'Pro',price:'$49',desc:'Osayotgan biznes uchun',features:['10 agent','Barcha kanallar','Avtomatlashtirish','Analytics'],popular:true},
  {name:'Enterprise',price:'$149',desc:'Katta kompaniyalar uchun',features:['Cheksiz agent','API kirish','SLA','Dedicated support']},
].map((p,i) => `
var plan${i}=frame(pricingGrid,"Plan ${p.name}",340,400,{color:WHITE,radius:16,stroke:${p.popular?'PRIMARY':'G200'},layout:"VERTICAL",pad:28,spacing:16,shadow:true});
plan${i}.primaryAxisSizingMode="AUTO";
${p.popular?`plan${i}.strokeWeight=2;`:''}
${p.popular?`
var popBadge=frame(plan${i},"Badge",100,24,{color:PRIMARY,radius:12,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
txt(popBadge,"Mashhur",{style:"Medium",size:11,color:WHITE});
`:''}
txt(plan${i},"${p.name}",{style:"Bold",size:22,color:G900});
txt(plan${i},"${p.price}/oy",{style:"Bold",size:36,color:${p.popular?'PRIMARY':'G900'}});
txt(plan${i},"${p.desc}",{size:14,color:G500});
rect(plan${i},284,1,G200,{});
${p.features.map(f => `txt(plan${i},"✓ ${f}",{size:14,color:G700});`).join('\n')}
var planBtn${i}=frame(plan${i},"Btn",284,44,{color:${p.popular?'PRIMARY':'WHITE'},radius:8,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"${p.popular?'':",stroke:G300"}});
planBtn${i}.layoutSizingHorizontal="FILL";
txt(planBtn${i},"Boshlash",{style:"Semi Bold",size:14,color:${p.popular?'WHITE':'G700'}});
`).join('')}

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
`;
}

function generateSystemScreen(screen, x, y) {
  return `
// SYSTEM / ${screen.title}
var screen=figma.createFrame();
screen.name="${screen.file} - ${screen.title}";
screen.resize(1440,900);
screen.fills=[{type:'SOLID',color:WHITE}];
screen.layoutMode="VERTICAL";screen.primaryAxisAlignItems="CENTER";screen.counterAxisAlignItems="CENTER";
screen.x=${x};screen.y=${y};

var errCard=frame(screen,"Error Card",500,360,{layout:"VERTICAL",alignX:"CENTER",spacing:20,pad:40});
errCard.primaryAxisSizingMode="AUTO";errCard.counterAxisSizingMode="FIXED";errCard.resize(500,10);

var errIcon=frame(errCard,"Icon",100,100,{color:${screen.errorCode==='404'?'WARNING_L':screen.errorCode==='500'?'DANGER_L':screen.errorCode==='403'?'DANGER_L':'INFO_L'},radius:50,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
txt(errIcon,"${screen.errorCode}",{style:"Bold",size:${screen.errorCode.length<=3?28:24},color:${screen.errorCode==='404'?'WARNING':screen.errorCode==='500'?'DANGER':screen.errorCode==='403'?'DANGER':'INFO'}});

txt(errCard,"${screen.title}",{style:"Bold",size:28,color:G900,align:"CENTER"});
txt(errCard,"${screen.subtitle}",{size:16,color:G500,align:"CENTER"});

var errBtn=frame(errCard,"Btn",200,44,{color:PRIMARY,radius:8,layout:"HORIZONTAL",alignY:"CENTER",alignX:"CENTER"});
txt(errBtn,"Bosh sahifaga",{style:"Semi Bold",size:14,color:WHITE});

figma.currentPage.appendChild(screen);
`;
}

function generatePublicKBScreen(screen, x, y, sectionLabel) {
  return `
// ${sectionLabel} / ${screen.title}
var screen=figma.createFrame();
screen.name="${screen.file} - ${screen.title}";
screen.resize(1440,900);
screen.fills=[{type:'SOLID',color:WHITE}];
screen.x=${x};screen.y=${y};

// Top nav
var kbNav=frame(screen,"KB Nav",1440,60,{x:0,y:0,color:WHITE,layout:"HORIZONTAL",padX:80,alignX:"CENTER"});
kbNav.primaryAxisAlignItems="SPACE_BETWEEN";
kbNav.strokes=[{type:'SOLID',color:G200}];kbNav.strokeWeight=1;
txt(kbNav,"QULAY CHAT — Yordam markazi",{style:"Semi Bold",size:16,color:G900});
var kbSearch=frame(kbNav,"Search",300,36,{color:G50,radius:8,stroke:G200,layout:"HORIZONTAL",padX:12,alignX:"CENTER"});
txt(kbSearch,"Qidiring...",{size:13,color:G400});

// Hero
var kbHero=frame(screen,"Hero",1440,200,{x:0,y:60,color:PRIMARY,layout:"VERTICAL",alignX:"CENTER",alignY:"CENTER",spacing:16});
txt(kbHero,"${screen.title}",{style:"Bold",size:32,color:WHITE,align:"CENTER"});
txt(kbHero,"${screen.subtitle}",{size:16,color:{r:200/255,g:200/255,b:255/255},align:"CENTER"});

// Content area
var kbContent=frame(screen,"Content",1000,600,{x:220,y:280,layout:"VERTICAL",spacing:20});
kbContent.primaryAxisSizingMode="AUTO";

${screen.file.includes('home') ? `
// Category cards
var catGrid=frame(kbContent,"Categories",1000,300,{layout:"HORIZONTAL",spacing:20});
catGrid.primaryAxisSizingMode="AUTO";catGrid.counterAxisSizingMode="AUTO";
catGrid.layoutWrap="WRAP";
${['Boshlash','Sozlamalar','Billing','API','Widget','Jamoa'].map((cat,i) => `
var kbCat${i}=frame(catGrid,"Cat",310,120,{color:WHITE,radius:12,stroke:G200,layout:"VERTICAL",pad:20,spacing:8,shadow:true});
kbCat${i}.primaryAxisSizingMode="AUTO";
txt(kbCat${i},"${cat}",{style:"Semi Bold",size:16,color:G900});
txt(kbCat${i},"${3+i} ta maqola",{size:13,color:G500});
`).join('')}
` : screen.file.includes('article') ? `
// Article content
var article=frame(kbContent,"Article",800,500,{color:WHITE,radius:12,stroke:G200,pad:32,layout:"VERTICAL",spacing:16,shadow:true});
article.primaryAxisSizingMode="AUTO";
txt(article,"Maqola sarlavhasi",{style:"Bold",size:24,color:G900});
txt(article,"Oxirgi yangilangan: 2026-02-27",{size:12,color:G500});
rect(article,736,1,G200,{});
txt(article,"Bu yerda maqola matni joylashadi. Batafsil ko'rsatmalar, rasmlar va video qo'llanmalar...",{size:15,color:G700,w:736,wrap:true});
txt(article,"Qadam 1: Kirish",{style:"Semi Bold",size:16,color:G900});
txt(article,"Birinchi navbatda tizimga kiring va sozlamalar bo'limiga o'ting...",{size:15,color:G700,w:736,wrap:true});
` : `
// List / Search results
${[1,2,3,4,5].map(i => `
var kbItem${i}=frame(kbContent,"Item",1000,80,{color:WHITE,radius:8,stroke:G200,layout:"VERTICAL",pad:16,spacing:6,shadow:true});
kbItem${i}.primaryAxisSizingMode="AUTO";kbItem${i}.layoutSizingHorizontal="FILL";
txt(kbItem${i},"Maqola sarlavhasi ${i}",{style:"Semi Bold",size:15,color:PRIMARY});
txt(kbItem${i},"Qisqacha tavsif — maqola kontentining birinchi qismi...",{size:13,color:G600,w:960});
`).join('')}
`}

figma.currentPage.appendChild(screen);
`;
}

// ═══════════════════════════════════════════
// MASTER GENERATOR
// ═══════════════════════════════════════════

function generateSectionCode(section) {
  let code = getHelperCode();
  
  // Section label
  code += `
// ═══════════════════════════════════════════
// SECTION: ${section.label} (${section.screens.length} screens)
// ═══════════════════════════════════════════

// Section label
var sLabel=figma.createFrame();
sLabel.name="— ${section.label} —";
sLabel.resize(${section.screens.length * (DS.screenW + DS.gap) - DS.gap}, 60);
sLabel.fills=[{type:'SOLID',color:{r:0,g:0,b:0}}];
sLabel.cornerRadius=8;
sLabel.x=0;sLabel.y=${section.y - 80};
sLabel.layoutMode="HORIZONTAL";sLabel.primaryAxisAlignItems="CENTER";sLabel.counterAxisAlignItems="CENTER";
var slTxt=figma.createText();
slTxt.fontName={family:"Inter",style:"Bold"};
slTxt.characters="${section.label} (${section.screens.length})";
slTxt.fontSize=20;
slTxt.fills=[{type:'SOLID',color:{r:1,g:1,b:1}}];
sLabel.appendChild(slTxt);
figma.currentPage.appendChild(sLabel);
`;

  section.screens.forEach((screen, idx) => {
    const x = idx * (DS.screenW + DS.gap);
    const y = section.y;
    const isWidget = screen.type === 'widget';
    const actualX = isWidget ? idx * (390 + 40) : x;

    switch (screen.type) {
      case 'landing':
        code += generateLandingScreen(screen, actualX, y, section.label);
        break;
      case 'auth':
      case 'auth-simple':
        code += generateAuthScreen(screen, actualX, y, section.label);
        break;
      case 'onboarding':
        code += generateOnboardingScreen(screen, actualX, y, section.label);
        break;
      case 'dashboard':
        code += generateDashboardScreen(screen, actualX, y, section.label);
        break;
      case 'inbox':
        code += generateInboxScreen(screen, actualX, y, section.label);
        break;
      case 'widget':
        code += generateWidgetScreen(screen, actualX, y, section.label);
        break;
      case 'system-error':
        code += generateSystemScreen(screen, actualX, y);
        break;
      case 'public-kb':
        code += generatePublicKBScreen(screen, actualX, y, section.label);
        break;
    }
  });

  code += `\nreturn {success:true, section:"${section.label}", screens:${section.screens.length}};\n`;
  return code;
}

// ═══════════════════════════════════════════
// MAIN: Generate all files
// ═══════════════════════════════════════════

const targetSection = process.argv[2];
const outDir = path.join(__dirname);

let totalScreens = 0;

SECTIONS.forEach(section => {
  if (targetSection && section.id !== targetSection) return;
  
  const filename = `${section.id}.js`;
  const filepath = path.join(outDir, filename);
  const code = generateSectionCode(section);
  
  fs.writeFileSync(filepath, code, 'utf8');
  console.log(`✅ ${filename} — ${section.screens.length} screens (${(code.length/1024).toFixed(1)} KB)`);
  totalScreens += section.screens.length;
});

// Generate master runner
const masterCode = SECTIONS.map(s => `// ${s.label}: node figma-ws-bridge.js --file figma-designs/all-screens/${s.id}.js`).join('\n');
fs.writeFileSync(path.join(outDir, 'README-RUN.md'), `# QULAY CHAT — Figma Screen Runner

## Barcha ${totalScreens} ta ekranni Figmaga chiqarish

Har bir seksiyani alohida run qiling:

\`\`\`bash
${SECTIONS.map(s => `node figma-ws-bridge.js --file figma-designs/all-screens/${s.id}.js    # ${s.label} (${s.screens.length})`).join('\n')}
\`\`\`

## Muhim:
1. BIRINCHI: terminalda \`node figma-ws-bridge.js --file <path>\` 
2. IKKINCHI: Figmada plugin Run/Restart
3. Har bir seksiyani ketma-ket ishga tushiring
4. Barcha ekranlar bitta Figma faylda, tartibli joylashadi
`, 'utf8');

console.log(`\n🎉 Jami: ${totalScreens} ta ekran generatsiya qilindi`);
console.log(`📂 Papka: figma-designs/all-screens/`);
console.log(`📖 Yo'riqnoma: README-RUN.md`);
