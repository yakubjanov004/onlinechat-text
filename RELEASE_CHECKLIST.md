# QULAY CHAT — Release QA Checklist

Sana: 2026-03-02
Scope: Phase 1–4 yakuniy tekshiruv

## 1) Role & Navigation

- [ ] O'ng yuqoridan **Admin/Agent** role almashtirish ishlaydi
- [ ] Role almashganda **sidebar real-time** yangilanadi (reloadsiz)
- [ ] `data-roles` bilan admin-only bloklar agentda ko'rinmaydi
- [ ] Inbox subnav 01–07 ichida o'zaro o'tish ishlaydi
- [ ] Automation subnav 01–07 ichida o'zaro o'tish ishlaydi
- [ ] Analytics subnavda 12/13 sahifalarga kirish bor
- [ ] Chat widget subnavda 06/07/08 ga kirish bor

## 2) Core UX

- [ ] Empty state chiqishi (inbox/contacts/search/tickets)
- [ ] Skeleton loading ko'rinadi va kontentga o'tadi
- [ ] `?` shortcut modal ochadi
- [ ] `Esc` modalni yopadi
- [ ] `Ctrl+K` global search fokuslaydi
- [ ] Breadcrumblar chuqur sahifalarda to'g'ri (chat-open/contact-profile/article-editor)

## 3) Content Pages (Phase 3)

- [ ] KB: 02,05,06,07,08,09 sahifalar to'liq o'qiladigan struktura
- [ ] Landing: 03,04,05,06,07,08 sahifalar boyitilgan
- [ ] Help: 02-video-tutorials sahifa to'liq grid/bo'limlar bilan

## 4) Technical Smoke

- [x] Broken link tekshiruv (tanlangan asosiy sahifalar): **0 ta**
- [x] Role runtime: faqat `admin/agent`
- [x] Shortcut modal runtime’da mavjud

## 5) Pre-Deploy

- [ ] Hard refresh (Ctrl+F5) bilan brauzer cache tozalab qayta tekshirish
- [ ] Desktop + mobil viewportlarda vizual pass
- [ ] Yakuniy changelog tayyorlash
- [ ] Release tag (masalan: `v2.0.0-rc1`) qo'yish
- [ ] Deploy + post-deploy smoke test

---

## Tavsiya etilgan test route (5 daqiqa)

1. `04-dashboard/01-dashboard.html`
2. `05-inbox/02-chat-open.html`
3. `12-contacts/02-contact-profile.html`
4. `15-knowledge-base/02-article-editor.html`
5. `19-global-search/02-search-results.html`
6. `21-help-support/04-my-tickets.html`
