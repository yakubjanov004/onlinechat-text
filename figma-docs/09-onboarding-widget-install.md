# CHATFLOW — Onboarding: Widget Customization + Installation

**Step:** 2/5 (Customization), 3/5 (Installation), 4/5 (Verification)  
**Ekran ID:** `SCR-ON02`, `SCR-ON03`, `SCR-ON04`  
**Fayl nomi:** `screen-onboarding-widget-customize.fig`, `screen-onboarding-widget-install.fig`, `screen-onboarding-widget-verify.fig`  
**Desktop:** 1440×900px (minimal height)

## Umumiy konsepsiya
Chat vidjeti sozlash ekrani foydalanuvchiga brendiga mos ko'rinishni tanlash imkonini beradi. Real-time preview bilan tezkor sozlash. Installation  platformaga mos code snippet bilan oson. Verification test xabar orqali ishga tushirishni tasdiqlaydi.

**Maqsad:** Vidjet real ishga tushganligini tasdiqlash va birinchi xabarni qabul qilish.

**Accessibility:** WCAG 2.1 AA, keyboard navigation, code block screen reader friendly.

---

## STEP 2/5: WIDGET CUSTOMIZATION

### Layout (Split Screen)

**Chap tomonda: Sozlamalar Paneli** — 480px kenglik, 100% balandlik, bg white, padding 32px, scrollable  
**O'ng tomonda: Live Preview Panel** — Auto kenglik (960px), 100% balandlik, bg #F9FAFB, padding 32px, sticky  
**Top Progress Bar:** 2/5 dots filled (#4F46E5), step label "Widget sozlash"  

---

### Sozlamalar Paneli (Chap tomonda)

**Header:**
- Title: "Widgetni sozlash" — 24px Semibold #111827
- Subtitle: "Brendingizga mos ranglar va matnlarni tanlang" — 14px Regular #6B7280

**Form Sections (8 ta):**

---

#### 1. Asosiy Rang (Primary Color)

**Label:** "Asosiy rang" — 14px Medium #374151  
**Description:** "Widget header va tugmalarda ishlatiladi" — 13px Regular #6B7280  

**Color Picker:**
- Type: Swatches + Custom input
- Preset colors: 8 ta (default #4F46E5, #10B981, #F59E0B, #DC2626, #8B5CF6, #EC4899, #0EA5E9, #84CC16)
- Swatch size: 40×40px, border-radius 8px, border 2px (#E5E7EB), selected border #111827 3px
- Custom input: 120px kenglik, 44px height, hex code "#4F46E5", icon Color/Palette 20px chap  
- Live preview: O'ng paneldagi widget real-time yangilanadi

---

#### 2. Widget Shakli (Shape)

**Label:** "Tugma shakli" — 14px Medium #374151  

**Radio Buttons:** 2 ta
- Kvadrat: Icon preview 56px square with 12px radius, label "Kvadrat"
- Yumaloq: Icon preview 56px circle, label "Yumaloq"
- Layout: Horizontal, gap 16px
- Selected: border 2px #4F46E5, bg #EEF2FF
- Unselected: border 1px #E5E7EB, bg white
- Each option: 120×80px, padding 12px, border-radius 8px

---

#### 3. Joylashuv (Position)

**Label:** "Widget joylashuvi" — 14px Medium #374151  

**Radio Buttons:** 4 ta (2×2 grid)
- Pastki o'ng (default): Icon showing bottom-right corner, label "Pastki o'ng"
- Pastki chap: Icon bottom-left, label "Pastki chap"
- Yuqori o'ng: Icon top-right, label "Yuqori o'ng"
- Yuqori chap: Icon top-left, label "Yuqori chap"
- Layout: 2-column grid, gap 12px
- Each option: 140×80px, padding 12px, border-radius 8px
- Icon: 48px mini mockup showing position
- Selected state: border 2px #4F46E5, bg #EEF2FF

---

#### 4. Widget Tugma Matni (Button Text)

**Label:** "Tugma ustidagi matn" — 14px Medium #374151  
**Description:** "Hover holatda ko'rinadi (ixtiyoriy)" — 13px Regular #6B7280  

**Input:**
- Width: 100%, height 44px, border-radius 8px
- Placeholder: "Yordam kerakmi?"
- Character limit: 30 chars, counter "0 / 30" — 12px Regular #9CA3AF below
- Icon: Icon/MessageCircle 20px chap tomonda (inside input)

---

#### 5. Welcome Xabar (Greeting Message)

**Label:** "Xush kelibsiz xabari" — 14px Medium #374151  
**Description:** "Chat ochilganda birinchi ko'rinadigan xabar" — 13px Regular #6B7280  

**Textarea:**
- Width: 100%, height 100px, border-radius 8px
- Placeholder: "Salom! Sizga qanday yordam bera olamiz?"
- Character limit: 200 chars, counter "0 / 200"
- Expandable: Can grow up to 200px height

---

#### 6. Agent Nomi (Agent Name)

**Label:** "Agent ismi" — 14px Medium #374151  
**Description:** "Chat headerda ko'rinadi" — 13px Regular #6B7280  

**Input:**
- Width: 100%, height 44px
- Placeholder: "Qo'llab-quvvatlash jamoasi"
- Character limit: 50 chars

---

#### 7. Agent Avatar (Agent Photo)

**Label:** "Agent rasmi (ixtiyoriy)" — 14px Medium #374151  

**Upload:**
- Current avatar: 64px circle (default bot icon if not uploaded)
- Upload button: "Rasm yuklash" — 140px, 40px, border 1px #D1D5DB, icon Icon/Upload 18px
- Accepted: JPG, PNG, max 2MB, min 200×200px
- Preview: Real-time in live preview panel

---

#### 8. Status Toggle (Online/Offline)

**Label:** "Hozirgi holat" — 14px Medium #374151  

**Toggle Switch:**
- Width: 56px, height: 32px
- States: Online (green #10B981, "Onlayn" label), Offline (gray #6B7280, "Offline" label)
- Text: 14px Medium, right of toggle
- Description: "Offline holatda xabar qoldirish formasi ko'rinadi" — 13px Regular #9CA3AF below

---

**Footer Buttons (bottom of settings panel):**
- "Orqaga" — 120px, 44px, border 1px #D1D5DB, text #6B7280
- "Davom etish" — 160px, 44px, primary #4F46E5, text white, icon Icon/ArrowRight 18px
- Gap: 12px, right-aligned

---

### Live Preview Panel (O'ng tomonda)

**Background:** #F9FAFB (simulates website), 960px kenglik, 100% height  
**Content:** Mockup website + widget

**Mockup Website:**
- Title: "Saytingiz ko'rinishi" — 16px Medium #6B7280, top center
- Illustrative website layout: Header bar 64px (gray), hero section 240px (light gray rectangles), text lines (gray bars)
- Purpose: Show widget in context

**Widget Position:** Based on selected position (default bottom-right 24px offset)

---

#### Widget Button (Closed State)

**Button:**
- Size: 56×56px (square with 12px radius if Square selected, circle if Yumaloq selected)
- Background: Selected primary color (e.g. #4F46E5)
- Icon: Icon/MessageCircle 28px, white color
- Shadow: 0 4px 12px rgba(79,70,229,0.4)
- Pulse animation: Subtle scale 1 to 1.05 every 5s

**Hover State (desktop):**
- Tooltip: Selected button text ("Yordam kerakmi?") — 280×48px card, white bg, shadow, 8px above button, fade-in 200ms
- Button scale: 1.05

---

#### Chat Window (Open State — Preview)

**Trigger:** Click widget button in preview → chat window opens  
**Size:** 360×520px  
**Position:** Above widget button, 8px gap  
**Animation:** Slide-up + fade-in 300ms  

**Header (64px):**
- Background: Selected primary color (if gradient enabled: gradient to lighter shade)
- Avatar: 40px circle, uploaded image or default bot icon, white border 2px
- Agent name: Selected agent name — 15px Semibold White
- Status: "Onlayn" / "Offline" — 12px Regular White 80% opacity, online dot 10px #10B981 if Online
- Close button: Icon/X 20px white, top-right

**Body (356px):**
- Background: #F9FAFB
- Welcome message bubble: White bubble, left-aligned, agent avatar 32px, selected greeting message text — 14px Regular #111827, timestamp "Hozir"

**Footer (100px):**
- Textarea: "Xabar yozing..." placeholder, 44px height, border-radius 8px
- Send button: 80px width, 36px height, selected primary color, "Yuborish" text white

---

**Real-time Sync:**
- Any change in settings panel → preview updates instantly (color, shape, position, text, avatar)
- Smooth transitions: 200ms for color/text changes, 300ms for position changes

---

## STEP 3/5: WIDGET INSTALLATION

### Layout

**Single Column:** 800px kenglik, centered, padding 32px  
**Top Progress Bar:** 3/5 dots filled, step label "Widget o'rnatish"  

---

### Header

**Title:** "Widgetni saytingizga o'rnating" — 28px Semibold #111827  
**Subtitle:** "Platformangizni tanlang va kod nusxalab saytga qo'shing" — 16px Regular #6B7280  

---

### Platform Tabs

**Tabs:** 8 ta platform (horizontal scrollable if needed)

1. **Website (HTML)** — default active
2. **WordPress**
3. **Shopify**
4. **React**
5. **Next.js**
6. **Wix**
7. **Squarespace**
8. **Webflow**

**Tab Style:**
- Height: 48px, padding 0 20px
- Active: bg #4F46E5, text white 14px Medium
- Inactive: bg white, border 1px #E5E7EB, text #6B7280, hover bg #F9FAFB
- Gap: 8px
- Border-radius: 8px top

---

### Tab Content

**Each tab contains:**
1. Code Snippet Block
2. Installation Instructions (step-by-step)
3. Visual Guide (optional screenshot/diagram)

---

#### TAB 1: Website (HTML) — Default

**Subtitle:** "Oddiy HTML sayt uchun" — 14px Regular #6B7280

**Instructions (numbered list):**
1. Quyidagi kodni nusxalang
2. Saytingizning `</body>` tegidan oldin joylashtiring
3. Sahifani saqlang va yangilang
4. Widget avtomatik ko'rinadi

**Code Snippet Block:**
- Size: 760px kenglik, auto height (200px typical)
- Background: #1E1E1E (dark, VS Code style)
- Border-radius: 12px
- Padding: 24px
- Font: 'Fira Code' or 'Monaco' monospace, 13px
- Syntax highlighting: HTML (tags blue, attributes orange, strings green)

**Code:**
```html
<!-- CHATFLOW Widget -->
<script>
  (function(w,d,s,o,f,js,fjs){
    w['ChatflowWidget']=o;w[o]=w[o]||function(){(w[o].q=w[o].q||[]).push(arguments)};
    js=d.createElement(s),fjs=d.getElementsByTagName(s)[0];
    js.id=o;js.src=f;js.async=1;fjs.parentNode.insertBefore(js,fjs);
  }(window,document,'script','chatflow','https://cdn.chatflow.uz/widget.js'));
  
  chatflow('init', {
    workspaceId: 'ws_abc123def456',
    position: 'bottom-right',
    primaryColor: '#4F46E5',
    language: 'uz'
  });
</script>
```

**Copy Button:**
- Position: Top-right corner of code block, absolute
- Size: 100px × 36px
- Background: rgba(255,255,255,0.1), hover rgba(255,255,255,0.2)
- Text: "Nusxalash" — 13px Medium white, Icon/Copy 16px
- States:
  - Default: "Nusxalash"
  - Clicked: "Nusxalandi ✓" — text green #10B981, icon checkmark, revert after 2s
- Tooltip: "Clipboard'ga nusxalash" on hover

---

#### TAB 2: WordPress

**Subtitle:** "WordPress plugin orqali yoki kod orqali" — 14px Regular #6B7280

**Instructions:**

**Variant 1: Plugin orqali (tavsiya etiladi)**
1. WordPress Admin paneliga kiring
2. Plugins → Add New → "CHATFLOW" qidiring
3. "Install Now" → "Activate"
4. Settings → CHATFLOW → Workspace ID'ni kiriting: `ws_abc123def456`
5. Saqlang

**Variant 2: Manual kod orqali**
1. WordPress Admin → Appearance → Theme Editor
2. `footer.php` faylini oching
3. Quyidagi kodni `<?php wp_footer(); ?>` dan oldin joylashtiring
4. "Update File"

**Code:**
```php
<!-- CHATFLOW Widget -->
<script>
  (function(w,d,s,o,f,js,fjs){
    w['ChatflowWidget']=o;w[o]=w[o]||function(){(w[o].q=w[o].q||[]).push(arguments)};
    js=d.createElement(s),fjs=d.getElementsByTagName(s)[0];
    js.id=o;js.src=f;js.async=1;fjs.parentNode.insertBefore(js,fjs);
  }(window,document,'script','chatflow','https://cdn.chatflow.uz/widget.js'));
  chatflow('init', {workspaceId: 'ws_abc123def456'});
</script>
```

**Warning Box:**
- Background: #FEF3C7, border-left 4px #F59E0B, padding 12px, border-radius 8px
- Icon: Icon/AlertTriangle 20px #F59E0B
- Text: "Diqqat: Theme yangilanganda kod o'chishi mumkin. Plugin ishlatishni tavsiya qilamiz." — 13px Regular #92400E

---

#### TAB 3: Shopify

**Subtitle:** "Shopify theme'ingizga qo'shish" — 14px Regular #6B7280

**Instructions:**
1. Shopify Admin → Online Store → Themes
2. "Actions" → "Edit code"
3. `theme.liquid` faylini oching
4. Quyidagi kodni `</body>` dan oldin joylashtiring
5. "Save"

**Code:**
```liquid
<!-- CHATFLOW Widget -->
<script>
  (function(w,d,s,o,f,js,fjs){
    w['ChatflowWidget']=o;w[o]=w[o]||function(){(w[o].q=w[o].q||[]).push(arguments)};
    js=d.createElement(s),fjs=d.getElementsByTagName(s)[0];
    js.id=o;js.src=f;js.async=1;fjs.parentNode.insertBefore(js,fjs);
  }(window,document,'script','chatflow','https://cdn.chatflow.uz/widget.js'));
  chatflow('init', {workspaceId: 'ws_abc123def456'});
</script>
```

---

#### TAB 4: React

**Subtitle:** "React loyihangizga integratsiya" — 14px Regular #6B7280

**Instructions:**
1. `public/index.html` faylini oching
2. Quyidagi kodni `</body>` dan oldin joylashtiring
3. **Yoki** React component yarating (pastda ko'rsatilgan)
4. App'ni qayta ishga tushiring

**Code (index.html):**
```html
<!-- CHATFLOW Widget -->
<script>
  (function(w,d,s,o,f,js,fjs){
    w['ChatflowWidget']=o;w[o]=w[o]||function(){(w[o].q=w[o].q||[]).push(arguments)};
    js=d.createElement(s),fjs=d.getElementsByTagName(s)[0];
    js.id=o;js.src=f;js.async=1;fjs.parentNode.insertBefore(js,fjs);
  }(window,document,'script','chatflow','https://cdn.chatflow.uz/widget.js'));
  chatflow('init', {workspaceId: 'ws_abc123def456'});
</script>
```

**Yoki React Component:**

**Code (ChatWidget.jsx):**
```jsx
import { useEffect } from 'react';

export default function ChatWidget() {
  useEffect(() => {
    (function(w,d,s,o,f,js,fjs){
      w['ChatflowWidget']=o;w[o]=w[o]||function(){(w[o].q=w[o].q||[]).push(arguments)};
      js=d.createElement(s),fjs=d.getElementsByTagName(s)[0];
      js.id=o;js.src=f;js.async=1;fjs.parentNode.insertBefore(js,fjs);
    }(window,document,'script','chatflow','https://cdn.chatflow.uz/widget.js'));
    
    window.chatflow('init', {
      workspaceId: 'ws_abc123def456',
      position: 'bottom-right',
      primaryColor: '#4F46E5'
    });
  }, []);

  return null;
}
```

**Usage:**
```jsx
// App.js
import ChatWidget from './ChatWidget';

function App() {
  return (
    <div>
      {/* Your app content */}
      <ChatWidget />
    </div>
  );
}
```

---

#### TAB 5: Next.js

**Subtitle:** "Next.js loyihangizga qo'shish" — 14px Regular #6B7280

**Instructions:**
1. `pages/_document.js` faylini yarating (agar yo'q bo'lsa)
2. Quyidagi kodni qo'shing
3. Dev serverni qayta ishga tushiring

**Code (_document.js):**
```jsx
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <Main />
        <NextScript />
        
        {/* CHATFLOW Widget */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,o,f,js,fjs){
                w['ChatflowWidget']=o;w[o]=w[o]||function(){(w[o].q=w[o].q||[]).push(arguments)};
                js=d.createElement(s),fjs=d.getElementsByTagName(s)[0];
                js.id=o;js.src=f;js.async=1;fjs.parentNode.insertBefore(js,fjs);
              }(window,document,'script','chatflow','https://cdn.chatflow.uz/widget.js'));
              chatflow('init', {workspaceId: 'ws_abc123def456'});
            `,
          }}
        />
      </body>
    </Html>
  );
}
```

---

#### TAB 6: Wix

**Subtitle:** "Wix saytingizga qo'shish" — 14px Regular #6B7280

**Instructions:**
1. Wix Editor'ni oching
2. Settings (chapda) → Tracking & Analytics
3. "+ New Tool" → "Custom Code"
4. Name: "CHATFLOW Widget"
5. Paste code below
6. "Add Code to Pages" → "All pages"
7. "Load code on: Page load"
8. "Apply"

**Code:**
```html
<!-- CHATFLOW Widget -->
<script>
  (function(w,d,s,o,f,js,fjs){
    w['ChatflowWidget']=o;w[o]=w[o]||function(){(w[o].q=w[o].q||[]).push(arguments)};
    js=d.createElement(s),fjs=d.getElementsByTagName(s)[0];
    js.id=o;js.src=f;js.async=1;fjs.parentNode.insertBefore(js,fjs);
  }(window,document,'script','chatflow','https://cdn.chatflow.uz/widget.js'));
  chatflow('init', {workspaceId: 'ws_abc123def456'});
</script>
```

---

#### TAB 7: Squarespace

**Subtitle:** "Squarespace saytingizga kod qo'shish" — 14px Regular #6B7280

**Instructions:**
1. Squarespace Admin → Settings → Advanced → Code Injection
2. "Footer" bo'limiga quyidagi kodni joylashtiring
3. "Save"

**Code:**
```html
<!-- CHATFLOW Widget -->
<script>
  (function(w,d,s,o,f,js,fjs){
    w['ChatflowWidget']=o;w[o]=w[o]||function(){(w[o].q=w[o].q||[]).push(arguments)};
    js=d.createElement(s),fjs=d.getElementsByTagName(s)[0];
    js.id=o;js.src=f;js.async=1;fjs.parentNode.insertBefore(js,fjs);
  }(window,document,'script','chatflow','https://cdn.chatflow.uz/widget.js'));
  chatflow('init', {workspaceId: 'ws_abc123def456'});
</script>
```

---

#### TAB 8: Webflow

**Subtitle:** "Webflow loyihangizga integratsiya" — 14px Regular #6B7280

**Instructions:**
1. Webflow Designer'da loyihani oching
2. Project Settings (top-left) → Custom Code
3. "Footer Code" bo'limiga quyidagi kodni joylashtiring
4. "Save Changes"
5. "Publish"

**Code:**
```html
<!-- CHATFLOW Widget -->
<script>
  (function(w,d,s,o,f,js,fjs){
    w['ChatflowWidget']=o;w[o]=w[o]||function(){(w[o].q=w[o].q||[]).push(arguments)};
    js=d.createElement(s),fjs=d.getElementsByTagName(s)[0];
    js.id=o;js.src=f;js.async=1;fjs.parentNode.insertBefore(js,fjs);
  }(window,document,'script','chatflow','https://cdn.chatflow.uz/widget.js'));
  chatflow('init', {workspaceId: 'ws_abc123def456'});
</script>
```

---

### Verification Status Box

**Joylashuv:** Tabs ostida, 100% kenglik, 120px balandlik  
**Background:** White, border 1px #E5E7EB, border-radius 12px  
**Padding:** 24px  

**3 States:**

#### State 1: Checking (Loading)
- Icon: Spinner 32px, #4F46E5, rotating animation
- Text: "Widget qidirilmoqda..." — 16px Medium #111827
- Subtext: "Saytingizda widgetni tekshiryapmiz. Bu 10-15 soniya davom etishi mumkin." — 14px Regular #6B7280

#### State 2: Found (Success)
- Icon: Icon/CheckCircle 48px, #10B981 (green)
- Text: "Widget topildi! ✓" — 18px Semibold #10B981
- Subtext: "Widget muvaffaqiyatli o'rnatildi. Endi test xabar yuborishingiz mumkin." — 14px Regular #6B7280
- Button: "Test xabar yuborish →" — 180px, 44px, primary #4F46E5, white text

#### State 3: Not Found (Error)
- Icon: Icon/AlertCircle 48px, #DC2626 (red)
- Text: "Widget topilmadi" — 18px Semibold #DC2626
- Subtext: "Widget hali sayt kodida topilmadi. Quyidagi muammolarni tekshiring:" — 14px Regular #991B1B
- Checklist: 
  - "✗ Kod to'g'ri joyga joylashtirilganmi?"
  - "✗ Cache tozalangangizmi? (Ctrl+Shift+R)"
  - "✗ Sahifa yangilanganmi?"
- Button: "Qayta tekshirish" — 160px, 44px, border 1px #DC2626, text #DC2626

---

**Footer Buttons:**
- "Orqaga" — 120px, 44px, border
- "Davom etish" (disabled if not found) — 160px, 44px, primary
- Gap: 12px

---

## STEP 4/5: VERIFICATION & TESTING

### Layout

**800px kenglik, centered, padding 32px**  
**Top Progress Bar:** 4/5 dots filled, step label "Tekshirish va test"

---

### Header

**Title:** "Widgetni test qiling" — 28px Semibold #111827  
**Subtitle:** "Birinchi test xabarni yuborib, hamma narsa ishlayotganini tekshiring" — 16px Regular #6B7280  

---

### Test Instructions Card

**Background:** White, border 1px #E5E7EB, border-radius 12px, padding 32px  

**Checklist (4 ta step):**

1. **Kod nusxalandi va joylashtirildi** ✓  
   - Icon: Icon/CheckCircle 24px #10B981  
   - Text: "Kod nusxalandi va saytga qo'shildi" — 14px Regular #111827

2. **Widget saytda ko'rinmoqda** ✓  
   - Icon: Icon/CheckCircle 24px #10B981  
   - Text: "Widget saytingizda ko'rinmoqda va ishlamoqda" — 14px Regular #111827

3. **Test xabar yuborish**  
   - Icon: Icon/Circle 24px #9CA3AF (Unchecked initially)  
   - Text: "Test xabar yuboring va inbox'da qabul qilinishini tekshiring" — 14px Regular #111827  
   - Button: "Test xabar yuborish" — 160px, 44px, primary #4F46E5  
     - Click → Opens modal/drawer with test message form

4. **Xabar qabul qilindi** (After test sent)  
   - Icon: Icon/CheckCircle 24px #10B981 (animated check-in)  
   - Text: "Test xabar muvaffaqiyatli qabul qilindi!" — 14px Regular #111827

---

### Test Message Modal

**ID:** `MODAL-ON01`  
**Trigger:** "Test xabar yuborish" button click  
**Size:** 480px kenglik, auto balandlik  
**Background:** White, border-radius 16px, shadow-lg  

**Header:**
- Title: "Test xabar yuborish" — 20px Semibold #111827
- Close button: Icon/X 24px, top-right

**Content (padding 24px):**

**Instructions:**
- Text: "Pastdagi formani to'ldiring va xabar yuboring. U darhol Inbox'da ko'rinadi." — 14px Regular #6B7280

**Form:**

1. **Ismingiz**
   - Input: 100%, 44px, placeholder "John Doe"

2. **Email**
   - Input: 100%, 44px, type email, placeholder "john@example.com"

3. **Xabar**
   - Textarea: 100%, 100px, placeholder "Bu test xabar. Hammasi ishlayaptimi?"

**Footer:**
- "Bekor qilish" — 100px, 40px, border
- "Yuborish" — 140px, 40px, primary #4F46E5
- Gap: 12px

**Success State (after submit):**
- Modal content replaces with:
  - Icon: Icon/CheckCircle 64px #10B981, center
  - Text: "Test xabar yuborildi!" — 20px Semibold #10B981
  - Subtext: "Inbox'ni tekshiring, xabar 2-3 soniyada ko'rinadi" — 14px Regular #6B7280
  - Button: "Inbox'ga o'tish →" — 160px, 44px, primary (links to SCR-I01 Inbox)
  - Auto-close after 3s (optional)

---

### Real-time Notification (When test received)

**Position:** Top-right of screen, fixed, z-index 10000  
**Size:** 360px × 100px  
**Animation:** Slide-in from right, 300ms ease-out  

**Content:**
- Background: #10B981 gradient
- Icon: Icon/MessageCircle 32px white
- Title: "Yangi xabar!" — 16px Semibold white
- Text: "John Doe: Bu test xabar. Hammasi..." — 14px Regular white, ellipsis
- Action: "Ko'rish →" — 13px Medium white, underline on hover
- Auto-hide: 5s after appearance

---

### Success Celebration (All steps complete)

**Animation:** Confetti/lottie animation (2s), center of screen  
**Card:** 400px kenglik, center, bg white, border-radius 16px, padding 32px, shadow-lg  

**Content:**
- Icon: Icon/Party 64px or animated trophy
- Title: "Barakalla! 🎉" — 28px Semibold #111827
- Text: "Widget muvaffaqiyatli o'rnatildi va birinchi xabaringizni qabul qildingiz! Endi mijozlaringiz siz bilan bog'lanishlari mumkin." — 16px Regular #6B7280
- Button: "Inbox'ga o'tish" — 160px, 48px, primary #4F46E5
- Secondary link: "Sozlamalarni ko'rish" — 14px Medium #4F46E5, center, underline

---

### Troubleshooting Accordion (Bottom of page)

**Title:** "Muammolar yuzaga keldimi?" — 20px Semibold #111827  
**Subtitle:** "Tez-tez beriladigan savollar" — 14px Regular #6B7280  

**Accordion:** 6 ta item

**Item Structure:**
- Header: 56px height, bg white, border 1px #E5E7EB, border-radius 8px (collapsed), padding 16px
- Question: 15px Medium #111827, Icon/ChevronDown 20px right side
- Expanded: bg #F9FAFB, content padding 16px, answer text 14px Regular #6B7280

**Questions:**

1. **Widget saytda ko'rinmayapti**
   - Answer: "Quyidagi tekshirishlarni bajaring:
     - Kod `</body>` dan oldin joylashtirilganmi?
     - Sahifa cache tozalanganchizmi? (Ctrl+Shift+R)
     - Browser console'da xatolik bormi? (F12 tugmasini bosing)
     - Firewall yoki ad blocker widget'ni bloklaganmi?
     Agar muammo davom etsa, [qo'llab-quvvatlash](mailto:support@chatflow.uz)ga murojaat qiling."

2. **Widget ko'rinadi, lekin xabar yuborganda xatolik**
   - Answer: "Workspace ID to'g'riligini tekshiring. Kod ichida `workspaceId: 'ws_abc123def456'` qatori sizning haqiqiy workspace ID'ngiz bilan mos kelishi kerak. Settings → Developer → Workspace ID da topishingiz mumkin."

3. **Widget rang o'zgargan, lekin saytda yangilanmadi**
   - Answer: "Sayt cache'ini tozalang va sahifani to'liq yangilang (Ctrl+Shift+R yoki Cmd+Shift+R). Agar platforma CDN ishlatsa, CDN cache'ini ham tozalashing kerak bo'lishi mumkin (15-30 daqiqa kutish)."

4. **Widget mobile'da to'g'ri ko'rinmayapti**
   - Answer: "Widget avtomatik responsive bo'ladi va mobile'da to'liq ekranga aylanadi. Agar muammo bo'lsa, viewport meta tegi mavjudligini tekshiring: `<meta name='viewport' content='width=device-width, initial-scale=1'>`"

5. **Widget boshqa pluginlar bilan konflikt qilmoqda**
   - Answer: "JavaScript xatolarini browser console'da tekshiring (F12). Agar boshqa chat widget yoki livechat plugin o'rnatilgan bo'lsa, ularni o'chiring. CHATFLOW jQuery yoki boshqa kutubxonalarga bog'liq emas."

6. **Widget Google Tag Manager orqali o'rnatish muml mumkinmi?**
   - Answer: "Ha! GTM'da yangi tag yarating (Custom HTML), kodni joylashtiring, trigger'ni 'All Pages' qilib belgilang va publish qiling. Diqqat: GTM konteyner yuklanishi kerak, shuning uchun widget biroz kech ko'rinishi mumkin."

---

**Video Tutorial (optional):**
- Card: 100% kenglik, 200px height, bg #F9FAFB, border 1px #E5E7EB, border-radius 12px, padding 24px
- Icon: Icon/Play 48px #4F46E5, center
- Title: "Video qo'llanma ko'ring" — 16px Semibold #111827
- Duration: "3 daqiqa" — 13px Regular #6B7280
- Button: "Videoni ko'rish" — 140px, 40px, border 1px #4F46E5, text #4F46E5
- Link: Opens video modal or YouTube embed

---

**Footer Buttons:**
- "Orqaga" — 120px, 44px
- "Inbox'ga o'tish" — 180px, 48px, primary #4F46E5 (completes onboarding)

---

## Empty / Loading / Error States

### Empty (No widget code)
- Not applicable (code always generated)

### Loading (Verification in progress)
- Spinner 32px, #4F46E5, center
- "Widget qidirilmoqda..." — 16px Medium #6B7280
- Pulse dot animation every 2s

### Error (Widget not found after 30s)
- Icon: Icon/AlertCircle 48px #DC2626
- "Widget topilmadi" — 18px Semibold #DC2626
- Troubleshooting checklist (see above)
- "Qayta tekshirish" button

### Success (Widget found)
- Icon: Icon/CheckCircle 48px #10B981
- "Widget topildi!" — 18px Semibold #10B981
- Confetti animation (optional)

---

## Micro-interactions

1. **Color picker swatch hover** — Scale 1.1, 150ms
2. **Color change** — Preview widget color animates 300ms ease-out
3. **Radio button select** — Border animates, bg fades in 200ms
4. **Live preview widget** — Real-time update (no delay, instant)
5. **Toggle switch** — Slide animation 200ms, status text fade 150ms
6. **Copy button click** — Icon changes to checkmark, text "Nusxalandi" green, 2s duration
7. **Code block hover** — Copy button fades in 150ms
8. **Tab switch** — Content fade-out/in 200ms
9. **Verification status change** — Icon scale-in + bounce 400ms
10. **Test message send** — Button loading spinner, modal content fade
11. **Success celebration** — Confetti animation 2s, card scale-in 300ms
12. **Accordion expand** — Content slide-down 300ms ease-out, chevron rotate 180° 200ms
13. **Notification slide-in** — From right, 300ms, auto-hide 5s with fade-out
14. **Progress dots** — Fill animation when step completes, 400ms
15. **Widget button pulse** — Scale 1 to 1.05, 800ms, infinite loop in preview

---

## Accessibility

**Keyboard Navigation:**
- Tab order: Settings inputs → Preview (focusable) → Tabs → Code block (can Tab into for copy) → Buttons
- Enter: Submit form, toggle accordion, activate button
- Escape: Close modal
- Arrow keys: Navigate between tabs, radio buttons
- Space: Toggle switch, select radio
- Shortcuts:
  - `Ctrl/Cmd + C` — Copy code (when code block focused)
  - `N` — Next step
  - `B` — Back (previous step)

**ARIA Labels:**
- `aria-label="Select primary color"`
- `aria-label="Widget shape: Square"`
- `aria-label="Copy installation code"`
- `aria-label="Test message form"`
- Code block: `role="textbox"`, `aria-readonly="true"`, `aria-label="Installation code snippet"`
- Progress bar: `role="progressbar"`, `aria-valuenow="3"`, `aria-valuemax="5"`

**Screen Reader Announcements:**
- "Color changed to blue"
- "Widget position set to bottom-right"
- "Code copied to clipboard"
- "Widget verification in progress"
- "Widget found successfully"
- "Test message sent"
- "Widget installation complete"

**Focus Management:**
- Modal opens: focus to first input
- Modal closes: return to trigger button
- Tab changes: announce new tab content
- Accordion expands: focus to content

**Color Contrast:**
- All text on white: WCAG AA compliant (4.5:1+)
- Code block: #E5E7EB text on #1E1E1E bg (12:1)
- Buttons: white on Primary #4F46E5 (4.6:1)

**Touch Targets:**
- All buttons: 44×44px minimum
- Radio options: 80px height (tappable area)
- Toggle switch: 56×32px
- Color swatches: 40×40px

---

## ASCII Wireframes

### 1. Customization Split Screen
```
┌─────────────────────────────────────────────────────────────────────────┐
│ Onboarding                                         ●──●──○──○──○ (2/5)  │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                           │
│  Widgetni sozlash                                                        │
│  Brendingizga mos ranglar va matnlarni tanlang                          │
│                                                                           │
│ ┌───────────────────────┬─────────────────────────────────────────────┐ │
│ │ SOZLAMALAR            │  LIVE PREVIEW                               │ │
│ ├───────────────────────┤                                             │ │
│ │                       │  ┌──────────────────────────────────────┐  │ │
│ │ Asosiy rang:          │  │ [Saytingiz ko'rinishi]               │  │ │
│ │ ◼️◼️◼️◼️◼️◼️◼️◼️  #4F46E5│  │                                      │  │ │
│ │                       │  │ ┌─────────┐                           │  │ │
│ │ Tugma shakli:         │  │ │ Header  │                           │  │ │
│ │ ◻ Kvadrat  ● Yumaloq  │  │ └─────────┘                           │  │ │
│ │                       │  │ ┌──────────────────┐                  │  │ │
│ │ Joylashuv:            │  │ │ Hero Section     │                  │  │ │
│ │ ◻ Top-left  ◻ Top-right│  │ │                  │                  │  │ │
│ │ ◻ Bot-left  ● Bot-right│  │ └──────────────────┘                  │  │ │
│ │                       │  │                                      │  │ │
│ │ Tugma matni:          │  │                        ┌────────┐    │  │ │
│ │ [💬 Yordam kerakmi? ] │  │                        │   💬   │    │  │ │
│ │                       │  │                        │        │    │  │ │
│ │ Xush kelibsiz xabari: │  │                        └────────┘    │  │ │
│ │ ┌───────────────────┐ │  │                        ^ Widget      │  │ │
│ │ │Salom! Sizga qanday│ │  │                                      │  │ │
│ │ │yordam bera olamiz?│ │  │  ┌──────────────────────────────┐  │  │ │
│ │ └───────────────────┘ │  │  │ [👤] Agent         [Onlayn] [×]│  │  │
│ │                       │  │  ├──────────────────────────────┤  │  │ │
│ │ Agent ismi:           │  │  │ [👤] Salom! Sizga qanday     │  │  │
│ │ [Qo'llab-quvvatlash ] │  │  │      yordam bera olamiz?     │  │  │
│ │                       │  │  │      14:30                   │  │  │
│ │ Agent rasmi:          │  │  │                              │  │  │
│ │ [👤] [Rasm yuklash]   │  │  ├──────────────────────────────┤  │  │
│ │                       │  │  │ [Xabar yozing...]            │  │  │
│ │ Holat:                │  │  │ [😊][📎]       [Yuborish]    │  │  │
│ │ ● Onlayn  ○ Offline   │  │  └──────────────────────────────┘  │  │ │
│ │                       │  │         Chat Window Preview         │  │ │
│ │                       │  └──────────────────────────────────────┘  │ │
│ │ [Orqaga] [Davom etish→]│                                           │ │
│ └───────────────────────┴─────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────────┘
```

### 2. Installation Code Snippet
```
┌─────────────────────────────────────────────────────────────────────────┐
│ Onboarding                                         ●──●──●──○──○ (3/5)  │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                           │
│  Widgetni saytingizga o'rnating                                          │
│  Platformangizni tanlang va kod nusxalab saytga qo'shing                │
│                                                                           │
│ [Website] [WordPress] [Shopify] [React] [Next.js] [Wix] [...]          │
│  ───────                                                                 │
│                                                                           │
│ Oddiy HTML sayt uchun                                                    │
│                                                                           │
│ Quyidagi kodni nusxalang:                                                │
│ ┌───────────────────────────────────────────────────────────────────┐   │
│ │ <!-- CHATFLOW Widget -->                        [📋 Nusxalash]   │   │
│ │ <script>                                                          │   │
│ │   (function(w,d,s,o,f,js,fjs){                                   │   │
│ │     w['ChatflowWidget']=o;w[o]=w[o]||function(){                 │   │
│ │       (w[o].q=w[o].q||[]).push(arguments)                         │   │
│ │     };                                                            │   │
│ │     js=d.createElement(s);                                        │   │
│ │     fjs=d.getElementsByTagName(s)[0];                             │   │
│ │     js.id=o; js.src=f; js.async=1;                                │   │
│ │     fjs.parentNode.insertBefore(js,fjs);                          │   │
│ │   }(window,document,'script','chatflow',                          │   │
│ │     'https://cdn.chatflow.uz/widget.js'));                        │   │
│ │                                                                    │   │
│ │   chatflow('init', {                                              │   │
│ │     workspaceId: 'ws_abc123def456',                               │   │
│ │     position: 'bottom-right',                                     │   │
│ │     primaryColor: '#4F46E5',                                      │   │
│ │     language: 'uz'                                                │   │
│ │   });                                                             │   │
│ │ </script>                                                         │   │
│ └───────────────────────────────────────────────────────────────────┘   │
│                                                                           │
│ Ko'rsatma:                                                               │
│ 1. Quyidagi kodni nusxalang                                              │
│ 2. Saytingizning </body> tegidan oldin joylashtiring                     │
│ 3. Sahifani saqlang va yangilang                                         │
│ 4. Widget avtomatik ko'rinadi                                            │
│                                                                           │
│ ┌───────────────────────────────────────────────────────────────────┐   │
│ │ ⏳ Widget qidirilmoqda...                                         │   │
│ │ Saytingizda widgetni tekshiryapmiz. 10-15 soniya.                │   │
│ └───────────────────────────────────────────────────────────────────┘   │
│                                                                           │
│ [Orqaga] [Davom etish →]                                                 │
└─────────────────────────────────────────────────────────────────────────┘
```

### 3. Verification Success
```
┌─────────────────────────────────────────────────────────────────────────┐
│ Onboarding                                         ●──●──●──●──○ (4/5)  │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                           │
│  Widgetni test qiling                                                    │
│  Birinchi test xabarni yuborib, hamma narsa ishlayotganini tekshiring   │
│                                                                           │
│ ┌───────────────────────────────────────────────────────────────────┐   │
│ │  ✅ Kod nusxalandi va joylashtirildi                              │   │
│ │     Kod nusxalandi va saytga qo'shildi                            │   │
│ │                                                                    │   │
│ │  ✅ Widget saytda ko'rinmoqda                                     │   │
│ │     Widget saytingizda ko'rinmoqda va ishlamoqda                  │   │
│ │                                                                    │   │
│ │  ○ Test xabar yuborish                                            │   │
│ │     Test xabar yuboring va inbox'da qabul qilinishini tekshiring  │   │
│ │     [Test xabar yuborish]                                         │   │
│ │                                                                    │   │
│ │  ○ Xabar qabul qilindi                                            │   │
│ │     (Birinchi test xabarni yuborganingizdan keyin ko'rinadi)      │   │
│ └───────────────────────────────────────────────────────────────────┘   │
│                                                                           │
│ Muammolar yuzaga keldimi?                                                │
│ Tez-tez beriladigan savollar                                             │
│                                                                           │
│ ▼ Widget saytda ko'rinmayapti                                            │
│ ▶ Widget ko'rinadi, lekin xabar yuborganda xatolik                       │
│ ▶ Widget rang o'zgargan, lekin saytda yangilanmadi                       │
│ ▶ Widget mobile'da to'g'ri ko'rinmayapti                                 │
│ ▶ Widget boshqa pluginlar bilan konflikt qilmoqda                        │
│ ▶ Widget Google Tag Manager orqali o'rnatish mumkinmi?                  │
│                                                                           │
│ [Orqaga] [Inbox'ga o'tish →]                                             │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## Figma uchun komponentlar (18 ta)

```
onboarding-step-2-customize/
├── settings-panel              # Left column 480px
├── color-picker-swatch         # 40px swatch
├── color-input-hex             # #4F46E5 input
├── shape-radio-option          # Square/Round 120×80
├── position-radio-grid         # 4 positions 2×2
├── button-text-input           # With character count
├── greeting-textarea           # Auto-expand 100-200px
├── agent-name-input            # Text input
├── avatar-upload               # 64px circle + button
├── status-toggle               # Online/Offline switch
└── live-preview-panel          # Right column with mockup

onboarding-step-3-install/
├── platform-tabs               # 8 tabs horizontal scroll
├── code-block                  # Dark bg, syntax highlight
├── copy-button                 # With states (copy/copied)
├── instructions-list           # Numbered steps
├── warning-box                 # Yellow alert for WordPress
├── verification-status-box     # 3 states (checking/found/not found)
└── troubleshooting-checklist   # Error state checklist

onboarding-step-4-verify/
├── test-checklist-card         # 4 steps with icons
├── test-message-modal          # 480px form modal
├── success-notification        # Top-right toast
├── success-celebration         # Confetti + center card
├── troubleshooting-accordion   # 6 FAQ items
└── video-tutorial-card         # Play icon + duration
```

---

## User Flow

### Complete Widget Setup Flow
```
STEP 1: Welcome Screen (not in this doc)
↓
STEP 2: Widget Customization
User landed on customization step
→ User selects primary color:  (Blue #4F46E5 → Orange #F59E0B)
→ Preview updates in real-time (widget button + chat header turn orange)
→ User selects shape: Round (from Square)
→ Preview widget button becomes circle
→ User changes position: Bottom-left (from bottom-right)
→ Preview widget moves to bottom-left corner
→ User enters button text: "Yordam kerakmi?"
→ Preview shows text on hover
→ User enters greeting: "Salom! Savol bormi?"
→ Preview chat window shows new greeting
→ User uploads agent avatar (photo.jpg)
→ Preview shows uploaded photo in header
→ User toggles Online status
→ Preview shows "Onlayn" text + green dot
→ User clicks "Davom etish →"
→ Settings saved, moves to Step 3
↓
STEP 3: Installation
User sees platform tabs
→ User selects "React" tab (has React project)
→ React-specific code and instructions appear
→ User clicks "📋 Nusxalash" button on code block
→ Button changes to "Nusxalandi ✓" (green), code copied to clipboard
→ User pastes code in project (public/index.html)
→ User saves file, restarts dev server
→ Waits 10s
→ Verification status shows: "⏳ Widget qidirilmoqda..."
→ After 15s: Status changes to "✅ Widget topildi!"
→ "Test xabar yuborish →" button appears
→ User clicks "Davom etish →"
→ Moves to Step 4
↓
STEP 4: Verification
User sees test checklist
→ First 2 items checked (✅ Kod nusxalandi, ✅ Widget ko'rinmoqda)
→ 3rd item unchecked: "○ Test xabar yuborish"
→ User clicks "Test xabar yuborish" button
→ Modal opens: Test message form
→ User fills: Name "Sardor", Email "sardor@test.uz", Message "Salom, test!"
→ User clicks "Yuborish"
→ Modal shows loading spinner (1s)
→ Success screen appears: "✅ Test xabar yuborildi!"
→ Modal auto-closes after 3s
→ Real-time notification slides in (top-right): "Yangi xabar! Sardor: Salom, test..."
→ Checklist updates: "✅ Test xabar yuborish", "✅ Xabar qabul qilindi"
→ Confetti animation plays (2s)
→ Success card appears: "Barakalla! 🎉 Widget muvaffaqiyatli o'rnatildi..."
→ User clicks "Inbox'ga o'tish"
→ Redirects to SCR-I01 (Inbox page, test message appears in list)
→ Onboarding complete!
```

---

## Technical Requirements

### API Endpoints

**Widget Customization:**
- `PUT /api/v1/workspace/widget-settings` — Save widget customization settings
  - Body: `{primaryColor, shape, position, buttonText, greeting, agentName, agentAvatar, status}`
  - Returns: `{success: true, settings: {...}}`

**Widget Installation:**
- `GET /api/v1/workspace/install-code` — Get personalized install code snippet
  - Returns: `{code: "...", workspaceId: "ws_..."}`

**Widget Verification:**
- `POST /api/v1/workspace/widget/verify` — Start verification check
  - Checks if widget script loaded on specified domain
  - Returns: `{status: "checking", jobId: "..."}`
- `GET /api/v1/workspace/widget/verify/:jobId` — Poll verification status
  - Returns: `{status: "found|not_found|checking", details: {...} }`

**Test Message:**
- `POST /api/v1/widget/test-message` — Send test message (from onboarding)
  - Body: `{name, email, message, workspaceId}`
  - Returns: `{success: true, conversationId: "..."}`

### Real-time Updates (WebSocket)

**Events:**
- `widget:verified` — Widget found on website → Update status to "found"
- `conversation:new` — Test message received → Show real-time notification, update checklist

### Widget Embed Code Generation

**Personalization:**
- Replace `workspaceId` with actual workspace ID
- Include selected customization values (position, primaryColor, language)
- Minified for production, human-readable for onboarding

**CDN:**
- Widget script hosted at `https://cdn.chatflow.uz/widget.js`
- Versioned: `widget.v2.3.js` (optional versioning)
- Gzip compressed: ~40KB → ~12KB
- Cache: 1 year (immutable)

### Verification Logic

**How widget verification works:**
1. User submits domain: `example.com`
2. Backend spawns headless browser (Puppeteer/Playwright)
3. Loads: `https://example.com`
4. Checks for: `window.ChatflowWidget` global object
5. Checks for: Widget script `<script src="https://cdn.chatflow.uz/widget.js">`
6. Checks for: Widget button element in DOM
7. Returns: `found` or `not_found` with details
8. Timeout: 30s (if not found, return not_found)

**Polling:**
- Frontend polls `/verify/:jobId` every 3s for up to 30s
- Total attempts: 10 (3s × 10 = 30s)
- If found: show success, stop polling
- If not found after 30s: show error state

### Performance

- **Code copy:** Instant, clipboard API <100ms
- **Color picker change:** Real-time, <50ms update
- **Preview sync:** Debounced 100ms (smooth typing without lag)
- **Verification:** 15-30s (headless browser check)
- **Test message:** <2s (send message + WebSocket delivery)

### Security

- **Code snippet:** No sensitive data (workspace ID is public-safe)
- **CORS:** Widget CDN allows all origins (public resource)
- **Verification:** Rate-limited to 10 attempts per hour per workspace
- **Test message:** Honeypot field (hidden input) to prevent spam bots

---

## Figma AI uchun prompt

```
Design a comprehensive widget onboarding flow with 3 main steps: Customization (Step 2/5), Installation (Step 3/5), and Verification (Step 4/5).

STEP 2: Widget Customization (Split Screen)
- Left column 480px: Settings panel with 8 sections
  - Primary color: 8 preset swatches 40×40px + custom hex input #4F46E5
  - Shape: 2 radio options (Square/Round) 120×80px with icon previews
  - Position: 4 radio options (BR/BL/TR/TL) 2×2 grid 140×80px with mini mockups
  - Button text: input "Yordam kerakmi?" with 0/30 character count
  - Greeting: textarea "Salom! Sizga qanday yordam bera olamiz?" 100px, 0/200 count
  - Agent name: input "Qo'llab-quvvatlash" 0/50 count
  - Agent avatar: 64px circle + "Rasm yuklash" button
  - Status toggle: Online/Offline switch 56×32px, green/gray states
  - Footer: Orqaga / Davom etish buttons
- Right column auto width: Live preview panel
  - Mockup website bg #F9FAFB: gray header bar 64px, hero section 240px, text lines
  - Widget button 56px: real-time updates for color/shape/position
  - Chat window preview 360×520px: header with selected color gradient, agent avatar, name, greeting message in white bubble
  - All changes sync instantly (<50ms)
- Progress bar top: 2/5 dots filled #4F46E5

STEP 3: Installation (Single Column 800px Centered)
- Platform tabs 8 tabs: Website (HTML), WordPress, Shopify, React, Next.js, Wix, Squarespace, Webflow
  - Active tab: bg #4F46E5 white text, Inactive: white border #E5E7EB
- Tab content: 
  - Instructions: numbered list 1-4 steps, 14px Regular #6B7280
  - Code block: 760px width, 200px height, dark bg #1E1E1E, syntax highlighting (HTML tags blue, attributes orange, strings green), font Fira Code 13px
  - Copy button: top-right corner, 100×36px, "Nusxalash" white text, Icon/Copy 16px, states: default/"Nusxalandi ✓" green after click
  - Platform-specific code for each tab (HTML snippet with <script>, workspace ID personalized)
  - WordPress tab: show plugin variant + manual code variant, warning box yellow #FEF3C7 "Diqqat: Theme yangilanganda..."
  - React/Next.js tabs: include JSX component examples with useEffect hook
- Verification status box: 100% width 120px, 3 states:
  - Checking: Spinner 32px rotating + "Widget qidirilmoqda..." 16px
  - Found: CheckCircle 48px green + "Widget topildi! ✓" 18px green + "Test xabar yuborish →" button primary
  - Not Found: AlertCircle 48px red + "Widget topilmadi" 18px red + checklist "✗ Kod to'g'ri joyga..." + "Qayta tekshirish" button
- Footer: Orqaga / Davom etish buttons (disabled if not found)
- Progress: 3/5 dots filled

STEP 4: Verification (Single Column 800px)
- Test checklist card: white border-radius 12px, padding 32px, 4 steps:
  1. ✅ Kod nusxalandi (CheckCircle 24px green)
  2. ✅ Widget saytda ko'rinmoqda (CheckCircle green)
  3. ○ Test xabar yuborish (Circle 24px gray) + "Test xabar yuborish" button 160×44 primary
  4. ○ Xabar qabul qilindi (becomes ✅ after test sent)
- Test message modal 480px: form with Name/Email/Message inputs, Yuborish button, success state with CheckCircle 64px green + "Test xabar yuborildi!" + "Inbox'ga o'tish →"
- Real-time notification: top-right 360×100px, green gradient, "Yangi xabar! Sardor: Salom..." white text, slide-in animation, auto-hide 5s
- Success celebration: center card 400px, confetti animation 2s, "Barakalla! 🎉" 28px, "Widget muvaffaqiyatli o'rnatildi..." 16px, "Inbox'ga o'tish" button 160×48 primary
- Troubleshooting accordion: 6 FAQ items, expand/collapse with ChevronDown rotation, bg #F9FAFB when expanded, answer text 14px
- Video tutorial card: 200px height, Play icon 48px center, "Video qo'llanma ko'ring" 16px, "3 daqiqa" duration, "Videoni ko'rish" button
- Footer: Orqaga / Inbox'ga o'tish buttons
- Progress: 4/5 dots filled

Style:
- Primary: #4F46E5 (buttons, active states, widget color)
- Success: #10B981 (checkmarks, found status, notifications)
- Warning: #FEF3C7 bg, #F59E0B border (WordPress warning)
- Error: #DC2626 (not found, error states)
- Font: Inter, 12-28px sizes
- Border-radius: 8-16px for cards/inputs/buttons
- Spacing: 8px grid, 16-32px padding
- Shadows: soft elevation-based
- Code block: #1E1E1E bg, syntax highlighted, Fira Code font
- Animations: smooth 200-300ms transitions, real-time preview sync
- Desktop: 1440px min width, split screen for Step 2, single column 800px for Steps 3-4
- Progress bar: 5 dots, filled=Primary, empty=#E5E7EB
```
