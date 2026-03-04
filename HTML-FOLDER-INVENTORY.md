# QULAY CHAT — HTML Folder Inventory (28 Folders)

Generated: 2026-03-04

---

## Summary Stats

| Metric | Count |
|--------|-------|
| Total folders | 28 |
| Total HTML files | 218 |
| Total broken links found | 12 (all in 03-onboarding) |
| Files using shell (data-active-nav) | ~185 |
| Files without shell (standalone) | ~33 (01-landing, 02-auth, 03-onboarding 01-06, 11-chat-widget, 18-system) |

---

## Folder 01: 01-landing (8 HTML + 1 CSS)

| File | Lines | CSS/JS includes |
|------|-------|-----------------|
| 01-landing.html | 349 | landing-v2.css |
| 02-pricing.html | 7 | landing-v2.css |
| 03-features.html | 8 | landing-v2.css |
| 04-integrations.html | 7 | landing-v2.css |
| 05-about.html | 7 | landing-v2.css |
| 06-blog-list.html | 6 | landing-v2.css |
| 07-blog-post.html | 6 | landing-v2.css |
| 08-comparison.html | 7 | landing-v2.css |

- **Shell (data-active-nav):** NO — standalone landing pages, no dashboard shell
- **Breadcrumbs:** NO
- **Subnav-tabs:** NO — uses its own `nav.nav-links` for inter-page navigation
- **Cross-folder links:** YES → 02-auth (login/register), 04-dashboard (demo), 15-knowledge-base, 17-developer, 18-system, 21-help-support
- **Broken links:** None
- **Note:** 01-landing.html is fully built (349 lines). Files 02-08 are stub/skeleton pages (6-8 lines) with just nav + section placeholder.

---

## Folder 02: 02-auth (5 HTML)

| File | Lines | CSS/JS includes |
|------|-------|-----------------|
| 01-login.html | 41 | design-system.css, runtime.js |
| 02-register.html | 46 | design-system.css, runtime.js |
| 03-email-verify.html | 39 | design-system.css, runtime.js |
| 04-forgot-password.html | 32 | design-system.css, runtime.js |
| 05-welcome-first-login.html | 36 | design-system.css, runtime.js |

- **Shell (data-active-nav):** NO — uses `body.auth-page`, standalone auth layout
- **Breadcrumbs:** NO
- **Subnav-tabs:** NO
- **Cross-folder links:** 01-login → 03-onboarding/01-welcome; 05-welcome → 03-onboarding/01-welcome + 04-dashboard/01-dashboard
- **Broken links:** None

---

## Folder 03: 03-onboarding (9 HTML) ⚠️ PRIORITY

| File | Lines | CSS/JS includes |
|------|-------|-----------------|
| 01-welcome.html | 45 | design-system.css, runtime.js |
| 02-onboarding-setup.html | 57 | design-system.css, runtime.js |
| 03-workspace.html | 63 | design-system.css, runtime.js |
| 04-widget-customize.html | 72 | design-system.css, runtime.js |
| 05-widget-install.html | 64 | design-system.css, runtime.js |
| 06-widget-verify.html | 51 | design-system.css, runtime.js |
| 07-progress-checklist.html | 39 | design-system.css, **shell.js**, runtime.js |
| 08-interactive-tutorial.html | 39 | design-system.css, **shell.js**, runtime.js |
| 09-first-chat-demo.html | 39 | design-system.css, **shell.js**, runtime.js |

- **Shell (data-active-nav):**
  - Files 01-06: NO — use standalone `body.onboarding-page` with custom `onboarding-shell`
  - Files 07-09: YES — `data-active-nav="onboarding"`, `dashboard-shell-page`
- **Breadcrumbs:**
  - Files 01-06: NO
  - Files 07-09: YES → Dashboard > Onboarding > [page]
- **Subnav-tabs:**
  - Files 01-06: NO — use step-wizard (Orqaga/Keyingi buttons) navigation
  - Files 07-09: YES — 9-tab subnav with all 9 page labels
- **Cross-folder links:** All files → 04-dashboard/01-dashboard (Skip btn); 01-welcome → 02-auth/05-welcome-first-login (Orqaga btn)
- **nav-key:** `onboarding` (files 07-09 only)

### ⚠️ BROKEN LINKS (12 total)
Files 07, 08, 09 have subnav-tabs pointing to **non-existent files**:
| Subnav label | Link target | Should be |
|---|---|---|
| Branding | `./02-branding.html` | `./02-onboarding-setup.html` |
| Team Invite | `./03-team-invite.html` | `./03-workspace.html` |
| Channel Connect | `./04-channel-connect.html` | `./04-widget-customize.html` |
| WhatsApp Setup | `./05-whatsapp-setup.html` | `./05-widget-install.html` |

---

## Folder 04: 04-dashboard (6 HTML + 1 MD)

| File | Lines | CSS/JS includes |
|------|-------|-----------------|
| 01-dashboard.html | 168 | design-system.css, shell.js, runtime.js |
| 01-dashboard-admin.html | 529 | design-system.css, shell.js, runtime.js |
| 02-dashboard-agent.html | 565 | design-system.css, shell.js, runtime.js |
| 03-dashboard-customizable.html | 86 | design-system.css, shell.js, runtime.js, dashboard-customizable.js |
| 04-agent-quick-actions.html | 99 | design-system.css, shell.js, runtime.js |
| 05-manager-dashboard.html | 100 | design-system.css, shell.js, runtime.js |

- **Shell:** YES — `data-active-nav="dashboard"`, `data-shell-role="admin"` on main pages
- **Breadcrumbs:** NO
- **Subnav-tabs:** YES — 6 tabs (router, admin, agent, customizable, quick-actions, manager)
- **Cross-folder links:** Heavy — inbox, analytics, automation, team, settings, contacts, team-chat
- **Broken links:** None
- **Note:** 01-dashboard.html is a router page (JS redirect based on role)

---

## Folder 05: 05-inbox (10 HTML)

| File | Lines | CSS/JS includes |
|------|-------|-----------------|
| 01-inbox-chat.html | 610 | design-system.css, shell.js, runtime.js, inbox-realism.js |
| 02-chat-open.html | 953 | design-system.css, shell.js, runtime.js, inbox-realism.js |
| 03-info-sidebar.html | 989 | design-system.css, shell.js, runtime.js |
| 04-canned-responses.html | 301 | design-system.css, shell.js, runtime.js, canned-responses.js |
| 05-chat-transfer.html | 126 | design-system.css, shell.js, runtime.js, inbox-operations.js |
| 06-chat-merge.html | 93 | design-system.css, shell.js, runtime.js |
| 07-bulk-actions.html | 125 | design-system.css, shell.js, runtime.js |
| 08-omnichannel-view.html | 88 | design-system.css, shell.js, runtime.js |
| 09-channel-filter.html | 91 | design-system.css, shell.js, runtime.js |
| 10-internal-notes.html | 94 | design-system.css, shell.js, runtime.js |

- **Shell:** YES — `data-active-nav="inbox"`, `data-shell-role="admin"`
- **Breadcrumbs:** NO (inline header approach)
- **Subnav-tabs:** YES — 10 tabs for all inbox pages
- **Cross-folder links:** 02-chat-open → 04-dashboard
- **nav-key:** `inbox`
- **Broken links:** None

---

## Folder 06: 06-automation (18 HTML)

| File | Lines | CSS/JS includes |
|------|-------|-----------------|
| 01-working-hours.html | 320 | design-system.css, shell.js, runtime.js |
| 02-auto-reply.html | 373 | design-system.css, shell.js, runtime.js, automation-auto-reply.js |
| 03-triggers.html | 291 | design-system.css, shell.js, runtime.js, automation-triggers.js |
| 04-greetings.html | 339 | design-system.css, shell.js, runtime.js, automation-greetings.js |
| 05-chatbot-builder.html | 126 | design-system.css, shell.js, runtime.js |
| 06-chatbot-templates.html | 82 | design-system.css, shell.js, runtime.js |
| 07-routing-rules.html | 112 | design-system.css, shell.js, runtime.js |
| 08-18 (11 files) | 73 each | design-system.css, shell.js, runtime.js |

- **Shell:** YES — `data-active-nav="automation"`
- **Breadcrumbs:** Files 08-18 have breadcrumbs (Dashboard > Automation > [page])
- **Subnav-tabs:** YES — 18 tabs for all automation pages
- **Cross-folder links:** agent-only card → 04-dashboard/02-dashboard-agent; files 08-18 breadcrumbs → 04-dashboard/01-dashboard
- **nav-key:** `automation`
- **Broken links:** None
- **Note:** Files 08-18 are template-generated stubs (73 lines each) with generic placeholder content

---

## Folder 07: 07-team (4 HTML) ⚠️ PRIORITY

| File | Lines | CSS/JS includes |
|------|-------|-----------------|
| 01-agents.html | 150 | design-system.css, shell.js, runtime.js, **team-management.js** |
| 02-agent-profile.html | 108 | design-system.css, shell.js, runtime.js, **team-management.js** |
| 03-roles.html | 71 | design-system.css, shell.js, runtime.js, **team-management.js** |
| 04-invitations.html | 85 | design-system.css, shell.js, runtime.js, **team-management.js** |

- **Shell:** YES — `data-active-nav="team"`
- **Breadcrumbs:** NO
- **Subnav-tabs:** YES — 4 tabs (Agents, Agent Profile, Roles, Invitations)
- **Cross-folder links:** agent-block → 04-dashboard/02-dashboard-agent
- **nav-key:** `team`
- **Broken links:** None
- **Note:** All 4 files have `data-roles="agent"` admin-only warning card

---

## Folder 08: 08-analytics (17 HTML)

| File | Lines | CSS/JS includes |
|------|-------|-----------------|
| 01-overview.html | 225 | design-system.css, shell.js, runtime.js, analytics-interactions.js |
| 02-response-times.html | 202 | same |
| 03-operators.html | 186 | same |
| 04-operator-detail.html | 186 | same |
| 05-sla.html | 162 | same |
| 06-channels.html | 141 | same |
| 07-segments.html | 139 | same |
| 08-tags.html | 212 | same |
| 09-custom-reports.html | 251 | same |
| 10-export.html | 160 | same |
| 11-my-stats.html | 152 | same (agent-accessible) |
| 12-realtime-monitor.html | 104 | same |
| 13-scheduled-reports.html | 113 | same |
| 14-agent-goals.html | 28 | design-system.css, shell.js, runtime.js (stub) |
| 15-csat-trends.html | 28 | same (stub) |
| 16-nps-survey.html | 28 | same (stub) |
| 17-feedback-wall.html | 28 | same (stub) |

- **Shell:** YES — `data-active-nav="analytics"`
- **Breadcrumbs:** Files 14-17 have breadcrumbs
- **Subnav-tabs:** YES — 17 tabs
- **Cross-folder links:** agent-block → 04-dashboard/02-dashboard-agent; stubs → 04-dashboard/01-dashboard
- **nav-key:** `analytics`
- **Broken links:** None
- **Note:** Files 01-13 are fully built. Files 14-17 are minimal stubs (28 lines)

---

## Folder 09: 09-settings (18 HTML) ⚠️ PRIORITY

| File | Lines | CSS/JS includes |
|------|-------|-----------------|
| 01-workspace.html | 24 | design-system.css (redirect page, no shell.js) |
| 01-workspace-general.html | 39 | design-system.css, shell.js, runtime.js, **settings-interactions.js** |
| 01b-workspace-branding.html | 45 | design-system.css, shell.js, runtime.js, **settings-interactions.js** |
| 02-widget-settings.html | 44 | design-system.css, shell.js, runtime.js, **settings-interactions.js** |
| 03-security.html | 52 | design-system.css, shell.js, runtime.js, **settings-interactions.js** |
| 04-notifications.html | 59 | design-system.css, shell.js, runtime.js, **settings-interactions.js** |
| 05-profile.html | 44 | design-system.css, shell.js, runtime.js, **settings-interactions.js** |
| 06-privacy-export.html | 49 | design-system.css, shell.js, runtime.js, **settings-interactions.js** |
| 07-privacy-delete.html | 46 | design-system.css, shell.js, runtime.js, **settings-interactions.js** |
| 08-privacy-settings.html | 44 | design-system.css, shell.js, runtime.js, **settings-interactions.js** |
| 09-custom-fields.html | 40 | design-system.css, shell.js, runtime.js |
| 10-tags-manager.html | 40 | same |
| 11-canned-manager.html | 40 | same |
| 12-ip-restriction.html | 40 | same |
| 13-activity-log.html | 40 | same |
| 14-file-storage.html | 40 | same |
| 15-account-management.html | 40 | same |
| 16-workspace-switcher.html | 40 | same |
| 17-agent-availability.html | 40 | same |
| 18-agent-canned-personal.html | 40 | same |

- **Shell:** YES — `data-active-nav="settings"` (except 01-workspace.html which is a redirect)
- **Breadcrumbs:**
  - Files 01-08: NO
  - Files 09-18: YES → Dashboard > Settings > [page]
- **Subnav-tabs:** YES — ~20 tabs (all files listed). Some early files also include `01-workspace.html` (redirect) in subnav.
  - Files 01-08 include `settings-tabs` (secondary Workspace/Widget/Security/Notifications/Profile/Privacy grouping)
  - Files 09-18 omit `01-workspace.html` from subnav
- **Cross-folder links:** Files 09-18 breadcrumbs → 04-dashboard/01-dashboard
- **nav-key:** `settings`
- **Broken links:** None
- **Note:** 01-workspace.html is a JS redirect (role-based: admin→01-workspace-general, agent→05-profile). Files 01-08 are content-rich (39-59 lines). Files 09-18 are template-generated stubs (40 lines each, identical structure).

---

## Folder 10: 10-billing (12 HTML) ⚠️ PRIORITY

| File | Lines | CSS/JS includes |
|------|-------|-----------------|
| 01-plan.html | 99 | design-system.css, shell.js, runtime.js, **billing-interactions.js** |
| 02-payment.html | 84 | design-system.css, shell.js, runtime.js, **billing-interactions.js** |
| 03-invoices.html | 83 | design-system.css, shell.js, runtime.js, **billing-interactions.js** |
| 04-usage.html | 54 | design-system.css, shell.js, runtime.js, **billing-interactions.js** |
| 05-upgrade-downgrade.html | 40 | design-system.css, shell.js, runtime.js |
| 06-billing-alerts.html | 40 | same |
| 07-coupon-promo.html | 40 | same |
| 08-trial-management.html | 40 | same |
| 09-payment-history.html | 40 | same |
| 10-billing-contacts.html | 40 | same |
| 11-tax-settings.html | 40 | same |
| 12-seat-management.html | 40 | same |

- **Shell:** YES — `data-active-nav="billing"`
- **Breadcrumbs:**
  - Files 01-04: NO
  - Files 05-12: YES → Dashboard > Billing > [page]
- **Subnav-tabs:** YES — 12 tabs (Plan, Payment Methods, Invoices, Usage, Upgrade Downgrade, etc.)
- **Cross-folder links:** agent-block → 04-dashboard/02-dashboard-agent; stubs → 04-dashboard/01-dashboard
- **nav-key:** `billing`
- **Broken links:** None
- **Note:** Files 01-04 are content-rich (54-99 lines). Files 05-12 are template-generated stubs (40 lines each).

---

## Folder 11: 11-chat-widget (8 HTML)

| File | Lines | CSS/JS includes |
|------|-------|-----------------|
| 01-widget-launcher.html | 200 | design-system.css, runtime.js, **widget-interactions.js** |
| 02-widget-chat.html | 139 | same |
| 03-widget-offline.html | 134 | same |
| 04-widget-csat.html | 149 | same |
| 05-widget-states.html | 270 | same + widget-extensions.js |
| 06-widget-prechat.html | 150 | same |
| 07-widget-knowledge.html | 137 | same |
| 08-widget-mobile.html | 129 | same |

- **Shell (data-active-nav):** NO — uses `body.widget-page` with custom `widget-shell` layout
- **Breadcrumbs:** NO
- **Subnav-tabs:** YES — 8 tabs inside custom `widget-topbar`
- **Cross-folder links:** Brand logo → ../index.html
- **nav-key:** N/A (standalone widget preview)
- **Broken links:** None
- **Note:** No shell.js loaded — standalone widget preview environment

---

## Folder 12: 12-contacts (6 HTML) ⚠️ PRIORITY

| File | Lines | CSS/JS includes |
|------|-------|-----------------|
| 01-contacts-list.html | 72 | design-system.css, shell.js, runtime.js, **contacts-interactions.js** |
| 02-contact-profile.html | 31 | design-system.css, shell.js, runtime.js, **contacts-interactions.js** |
| 03-organizations.html | 55 | design-system.css, shell.js, runtime.js, **contacts-interactions.js** |
| 04-org-detail.html | 67 | design-system.css, shell.js, runtime.js, **contacts-interactions.js** |
| 05-segments.html | 77 | design-system.css, shell.js, runtime.js, **contacts-interactions.js** |
| 06-import-export.html | 82 | design-system.css, shell.js, runtime.js, **contacts-interactions.js** |

- **Shell:** YES — `data-active-nav="contacts"`, `data-shell-role="admin"`
- **Breadcrumbs:** YES (02-contact-profile has breadcrumbs: Dashboard > Kontaktlar > Kontakt profili)
- **Subnav-tabs:** YES — 6 tabs (Kontaktlar, Kontakt Profili, Tashkilotlar, Tashkilot Profili, CRM Segmentlar, Import & Export)
- **Cross-folder links:** 02-contact-profile → 04-dashboard/01-dashboard (breadcrumb)
- **nav-key:** `contacts`
- **Broken links:** None
- **Note:** Has skeleton loading UI (`data-skeleton-container`). All files fully built with real content.

---

## Folder 13: 13-visitors (3 HTML) ⚠️ PRIORITY

| File | Lines | CSS/JS includes |
|------|-------|-----------------|
| 01-visitors-list.html | 145 | design-system.css, shell.js, runtime.js, **visitors-interactions.js** |
| 02-visitor-profile.html | 105 | same |
| 03-visitors-map.html | 115 | same |

- **Shell:** YES — `data-active-nav="visitors"`
- **Breadcrumbs:** NO
- **Subnav-tabs:** YES — 3 tabs (Online Visitors, Visitor Profile, Visitors Map)
- **Cross-folder links:** None (only ../assets)
- **nav-key:** `visitors`
- **Broken links:** None
- **Note:** All 3 files are fully built with real content. Includes role-based alert banners (agent vs admin).

---

## Folder 14: 14-team-chat (3 HTML) ⚠️ PRIORITY

| File | Lines | CSS/JS includes |
|------|-------|-----------------|
| 01-team-chat.html | 169 | design-system.css, shell.js, runtime.js, **team-chat-interactions.js** + inline `<style>` |
| 02-room-settings.html | 85 | same |
| 03-notifications.html | 80 | same |

- **Shell:** YES — `data-active-nav="team-chat"`
- **Breadcrumbs:** NO
- **Subnav-tabs:** YES — 3 tabs (Team Chat, Room Settings, Team Chat Notifications)
- **Cross-folder links:** None (only ../assets)
- **nav-key:** `team-chat`
- **Broken links:** None
- **Note:** Custom glassmorphism CSS styles inline. All files fully built.

---

## Folder 15: 15-knowledge-base (18 HTML)

| File | Lines | CSS/JS includes |
|------|-------|-----------------|
| 01-kb-dashboard.html | 57 | design-system.css, shell.js, runtime.js, **kb-interactions.js** + inline style |
| 02-article-editor.html | 41 | same |
| 03-categories.html | 55 | same |
| 04-kb-settings.html | 63 | same |
| 05-kb-analytics.html | 70 | same |
| 06-public-home.html | 104 | design-system.css (standalone public KB) |
| 07-public-search.html | 60 | same |
| 08-public-category.html | 53 | same |
| 09-public-article.html | 52 | same |
| 10-18 (9 files) | 40 each | design-system.css, shell.js, runtime.js (stubs) |

- **Shell:** YES — `data-active-nav="knowledge-base"` (06-09 public pages have different layout)
- **Breadcrumbs:** Files 10-18 have breadcrumbs
- **Subnav-tabs:** YES — 18 tabs with custom `kb-subnav` styling
- **Cross-folder links:** 06-public-home → 21-help-support (video tutorials, submit ticket); 02-article-editor → 04-dashboard; stubs → 04-dashboard
- **nav-key:** `knowledge-base`
- **Broken links:** None

---

## Folder 16: 16-addons (7 HTML) ⚠️ PRIORITY

| File | Lines | CSS/JS includes |
|------|-------|-----------------|
| 01-addons-catalog.html | 277 | design-system.css, shell.js, runtime.js, **addons-interactions.js** |
| 02-active-addons.html | 123 | same |
| 03-addon-detail.html | 164 | same |
| 04-addon-settings.html | 114 | same |
| 05-developer-sdk.html | 40 | design-system.css, shell.js, runtime.js |
| 06-submit-app.html | 37 | same |
| 07-app-reviews.html | 39 | same |

- **Shell:** YES — `data-active-nav="addons"`
- **Breadcrumbs:**
  - Files 01-04: NO
  - Files 05-07: YES → Dashboard > Addons > [page]
- **Subnav-tabs:** YES — 7 tabs (Catalog, Active, Detail, Settings, Developer SDK, Submit App, App Reviews)
- **Cross-folder links:** agent-block → 04-dashboard/02-dashboard-agent; stubs → 04-dashboard/01-dashboard
- **nav-key:** `addons`
- **Broken links:** None
- **Note:** Files 01-04 are fully built (114-277 lines). Files 05-07 are template-generated stubs.

---

## Folder 17: 17-developer (5 HTML)

| File | Lines | CSS/JS includes |
|------|-------|-----------------|
| 01-api-keys.html | 202 | design-system.css, shell.js, runtime.js, **developer-interactions.js** |
| 02-webhooks.html | 178 | same |
| 03-logs.html | 160 | same |
| 04-api-usage.html | 38 | design-system.css, shell.js, runtime.js (stub) |
| 05-sandbox.html | 56 | design-system.css, shell.js, runtime.js, developer-interactions.js |

- **Shell:** YES — `data-active-nav="developer"`
- **Breadcrumbs:** Files 04-05 have breadcrumbs
- **Subnav-tabs:** YES — 5 tabs (Developer API, Webhooks, Webhook Logs, API Usage, Sandbox)
- **Cross-folder links:** agent-block → 04-dashboard/02-dashboard-agent; stubs → 04-dashboard/01-dashboard
- **nav-key:** `developer`
- **Broken links:** None

---

## Folder 18: 18-system (5 HTML)

| File | Lines | CSS/JS includes |
|------|-------|-----------------|
| 01-error-404.html | 37 | design-system.css, **system-pages.css**, system-interactions.js |
| 02-error-500.html | 41 | same |
| 03-error-403.html | 41 | same |
| 04-maintenance.html | 33 | same |
| 05-offline.html | 45 | same |

- **Shell (data-active-nav):** NO — uses `body.system-page`, standalone error layout
- **Breadcrumbs:** NO
- **Subnav-tabs:** NO
- **Cross-folder links:** All → ../index.html (home return link)
- **nav-key:** N/A (standalone system/error pages)
- **Broken links:** None

---

## Folder 19: 19-global-search (2 HTML) ⚠️ PRIORITY

| File | Lines | CSS/JS includes |
|------|-------|-----------------|
| 01-search-modal.html | 198 | design-system.css, shell.js, runtime.js, **global-search.js** |
| 02-search-results.html | 38 | same |

- **Shell:** YES — `data-active-nav="dashboard"` (uses dashboard as parent context)
- **Breadcrumbs:** NO
- **Subnav-tabs:** YES — 2 tabs (Search Modal, Search Results)
- **Cross-folder links:** 02-search-results → 05-inbox/02-chat-open, 09-settings/01-workspace, 12-contacts/01-contacts-list, 15-knowledge-base/09-public-article
- **nav-key:** `dashboard`
- **Broken links:** None
- **Note:** 02-search-results has skeleton loading UI

---

## Folder 20: 20-notifications (3 HTML) ⚠️ PRIORITY

| File | Lines | CSS/JS includes |
|------|-------|-----------------|
| 01-notification-dropdown.html | 273 | design-system.css, shell.js, runtime.js, **notification-interactions.js** |
| 02-notification-all.html | 274 | same |
| 03-notification-preferences.html | 163 | design-system.css, shell.js, runtime.js |

- **Shell:** YES — `data-active-nav="notifications"`
- **Breadcrumbs:** NO
- **Subnav-tabs:** YES — 3 tabs (Dropdown, Barchasi, Sozlamalar)
- **Cross-folder links:** None (only ../assets)
- **nav-key:** `notifications`
- **Broken links:** None
- **Note:** All 3 files are fully built with rich content (163-274 lines)

---

## Folder 21: 21-help-support (5 HTML) ⚠️ PRIORITY

| File | Lines | CSS/JS includes |
|------|-------|-----------------|
| 01-help-center.html | 100 | design-system.css, shell.js, runtime.js, **help-support.js** |
| 02-video-tutorials.html | 38 | design-system.css, shell.js, runtime.js (no lucide, no help-support.js) |
| 03-submit-ticket.html | 80 | design-system.css, shell.js, runtime.js, **help-support.js** |
| 04-my-tickets.html | 33 | design-system.css, shell.js, runtime.js, **help-support.js** |
| 05-contextual-help.html | 91 | design-system.css, shell.js, runtime.js, **help-support.js** |

- **Shell:** YES
  - 01-help-center: `data-active-nav="help-support"`
  - 02-05: `data-active-nav="dashboard"` ⚠️ (inconsistent nav-key)
- **Breadcrumbs:** NO
- **Subnav-tabs:** YES — 5 tabs (Help Center, Video Tutorials, Submit Ticket, My Tickets, Contextual Help)
- **Cross-folder links:** None (only ../assets)
- **nav-key:** `help-support` (file 01) / `dashboard` (files 02-05) — INCONSISTENCY
- **Broken links:** None
- **Note:** 02-video-tutorials.html is a minimal stub (38 lines, no lucide, no help-support.js). 04-my-tickets has skeleton loading UI.

---

## Folder 22: 22-email-templates (4 HTML) ⚠️ PRIORITY

| File | Lines | CSS/JS includes |
|------|-------|-----------------|
| 01-templates-list.html | 151 | design-system.css, shell.js, runtime.js, **email-templates.js** |
| 02-template-editor.html | 109 | same |
| 03-template-preview.html | 86 | same |
| 04-template-settings.html | 99 | same |

- **Shell:** YES — `data-active-nav="settings"`
- **Breadcrumbs:** NO
- **Subnav-tabs:** YES — 4 tabs (Templates List, Template Editor, Preview & Test, SMTP Settings)
- **Cross-folder links:** agent-block → 04-dashboard/02-dashboard-agent
- **nav-key:** `settings`
- **Broken links:** None
- **Note:** All 4 files fully built with rich content

---

## Folder 23: 23-multi-language (3 HTML) ⚠️ PRIORITY

| File | Lines | CSS/JS includes |
|------|-------|-----------------|
| 01-language-settings.html | 108 | design-system.css, shell.js, runtime.js, **multi-language.js** |
| 02-translation-manager.html | 101 | same |
| 03-widget-language.html | 106 | same |

- **Shell:** YES — `data-active-nav="settings"`
- **Breadcrumbs:** NO
- **Subnav-tabs:** YES — 3 tabs (Language Settings, Translation Manager, Widget Language)
- **Cross-folder links:** None (only ../assets)
- **nav-key:** `settings`
- **Broken links:** None
- **Note:** All 3 files fully built

---

## Folder 24: 24-gdpr-compliance (4 HTML) ⚠️ PRIORITY

| File | Lines | CSS/JS includes |
|------|-------|-----------------|
| 01-data-overview.html | 98 | design-system.css, shell.js, runtime.js, **gdpr-compliance.js** |
| 02-consent-management.html | 107 | same |
| 03-data-retention.html | 112 | same |
| 04-audit-log.html | 107 | same |

- **Shell:** YES — `data-active-nav="settings"`
- **Breadcrumbs:** NO
- **Subnav-tabs:** YES — 4 tabs (Data Overview, Consent Management, Data Retention, Audit Log)
- **Cross-folder links:** agent-block → 04-dashboard/02-dashboard-agent
- **nav-key:** `settings`
- **Broken links:** None
- **Note:** All 4 files fully built, admin-only

---

## Folder 25: 25-dark-mode (1 HTML) ⚠️ PRIORITY

| File | Lines | CSS/JS includes |
|------|-------|-----------------|
| 01-dark-mode-demo.html | 88 | design-system.css, **dark-mode.css**, shell.js, runtime.js, **dark-mode.js** |

- **Shell:** YES — `data-active-nav="dashboard"`
- **Breadcrumbs:** NO
- **Subnav-tabs:** NO (single page)
- **Cross-folder links:** None (only ../assets)
- **nav-key:** `dashboard`
- **Broken links:** None

---

## Folder 26: 26-integrations (20 HTML)

| File | Lines | CSS/JS includes |
|------|-------|-----------------|
| 01-channels-overview.html | 200 | design-system.css, shell.js, runtime.js |
| 02-telegram-setup.html | 208 | same |
| 03-telegram-settings.html | 225 | same |
| 04-telegram-test.html | 234 | same |
| 05-whatsapp-setup.html | 131 | same |
| 06-whatsapp-templates.html | 145 | same |
| 07-whatsapp-settings.html | 149 | same |
| 08-instagram-setup.html | 137 | same |
| 09-facebook-setup.html | 137 | same |
| 10-20 (11 files) | 30 each | design-system.css, shell.js, runtime.js (stubs) |

- **Shell:** YES — `data-active-nav="integrations"`
- **Breadcrumbs:** Files 10-20 have breadcrumbs (Dashboard > Integrations > [page])
- **Subnav-tabs:** YES — 20 tabs (all channels)
- **Cross-folder links:** agent-block → 04-dashboard/02-dashboard-agent; all → 04-dashboard/01-dashboard (breadcrumbs)
- **nav-key:** `integrations`
- **Broken links:** None
- **Note:** Files 01-09 are fully built (131-234 lines). Files 10-20 are 30-line template stubs.

---

## Folder 27: 27-payments (8 HTML)

| File | Lines | CSS/JS includes |
|------|-------|-----------------|
| 01-payment-overview.html | 149 | design-system.css, shell.js, runtime.js + inline `<style>` |
| 02-payme-setup.html | 142 | same |
| 03-click-setup.html | 139 | same |
| 04-uzum-setup.html | 137 | same |
| 05-stripe-setup.html | 140 | same |
| 06-bank-transfer.html | 140 | same |
| 07-payment-test.html | 133 | same |
| 08-payment-logs.html | 141 | same |

- **Shell:** YES — `data-active-nav="billing"` ⚠️ (uses billing nav-key, not a separate payments key)
- **Breadcrumbs:** YES → Dashboard > Billing > [page]
- **Subnav-tabs:** YES — 8 tabs (Payment Overview, Payme, Click, Uzum, Stripe, Bank Transfer, Payment Test, Logs)
- **Cross-folder links:** breadcrumbs → 04-dashboard/01-dashboard
- **nav-key:** `billing` (shared with 10-billing folder)
- **Broken links:** None
- **Note:** All 8 files fully built with rich content and custom CSS. Uses single-quote HTML attributes.

---

## Folder 28: 28-mobile-agent (5 HTML)

| File | Lines | CSS/JS includes |
|------|-------|-----------------|
| 01-mobile-inbox.html | 128 | design-system.css, shell.js, runtime.js + inline `<style>` |
| 02-mobile-chat.html | 108 | same |
| 03-mobile-notifications.html | 123 | same |
| 04-mobile-status.html | 110 | same |
| 05-mobile-settings.html | 107 | same |

- **Shell:** YES — `data-active-nav="mobile-agent"`
- **Breadcrumbs:** YES → Dashboard > Mobile Agent > [page]
- **Subnav-tabs:** YES — 5 tabs (Mobile Inbox, Chat, Notifications, Status, Settings)
- **Cross-folder links:** breadcrumbs → 04-dashboard/01-dashboard
- **nav-key:** `mobile-agent`
- **Broken links:** None
- **Note:** All 5 files fully built with custom CSS. Uses single-quote HTML attributes.

---

## Root: index.html

| File | Lines | CSS/JS includes |
|------|-------|-----------------|
| index.html | 502 | design-system.css + inline styles |

- **Shell:** NO — standalone hub/entry page
- **Purpose:** Master navigation hub linking to all 28 folders
- **Note:** No shell.js loaded. Uses lucide icons.

---

## Cross-cutting Issues Summary

### 1. Broken Links (12 total — all in 03-onboarding)
Files `07-progress-checklist.html`, `08-interactive-tutorial.html`, `09-first-chat-demo.html` have subnav tabs pointing to 4 non-existent filenames each:
- `./02-branding.html` → should be `./02-onboarding-setup.html`
- `./03-team-invite.html` → should be `./03-workspace.html`
- `./04-channel-connect.html` → should be `./04-widget-customize.html`
- `./05-whatsapp-setup.html` → should be `./05-widget-install.html`

### 2. Inconsistent nav-key in 21-help-support
- `01-help-center.html` uses `data-active-nav="help-support"`
- Files 02-05 use `data-active-nav="dashboard"` (should probably be `help-support`)

### 3. nav-key Collision: 27-payments uses `billing`
- Both `10-billing` and `27-payments` use `data-active-nav="billing"` — same sidebar item highlights for different sections.

### 4. Template Stub Pattern
Many folders have partially built files that follow an identical 40-line template pattern (grid cols-3 stats → split-grid → activity table → sticky-save-bar). These are found in:
- 06-automation (files 08-18, 73 lines)
- 08-analytics (files 14-17, 28 lines) 
- 09-settings (files 09-18, 40 lines)
- 10-billing (files 05-12, 40 lines)
- 15-knowledge-base (files 10-18, 40 lines)
- 16-addons (files 05-07, 37-40 lines)
- 17-developer (file 04, 38 lines)
- 26-integrations (files 10-20, 30 lines)

### 5. Dual Architecture in 03-onboarding
Files 01-06 use standalone onboarding wizard, while 07-09 use the full dashboard shell. The subnav in 07-09 is misaligned with actual file names (see broken links above).

### 6. Files Missing lucide CDN
`21-help-support/02-video-tutorials.html` does not load lucide CDN (no `<script src="https://unpkg.com/lucide@latest">`).

### 7. Landing Stubs
01-landing files 02-08 are minimal stubs (6-8 lines) with just basic nav and section placeholder — not yet built out.
