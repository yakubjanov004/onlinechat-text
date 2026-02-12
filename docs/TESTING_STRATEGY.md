# CHATFLOW — TESTING STRATEGY

**Yaratilgan:** 2026-02-12  
**Maqsad:** Frontend va Backend test strategiyasi  
**Coverage Target:** 80%+ kodning critical paths uchun

---

## MUNDARIJA

1. [Testing Pyramid](#1-testing-pyramid)
2. [Frontend Testing](#2-frontend-testing)
3. [Backend Testing](#3-backend-testing)
4. [E2E Testing](#4-e2e-testing)
5. [Performance Testing](#5-performance-testing)
6. [Security Testing](#6-security-testing)
7. [Accessibility Testing](#7-accessibility-testing)
8. [CI/CD Integration](#8-cicd-integration)

---

## 1. TESTING PYRAMID

```
              ╱╲
             ╱  ╲  E2E Tests (5% - 10 tests)
            ╱────╲  Critical user flows
           ╱      ╲
          ╱        ╲ Integration Tests (15% - 50 tests)
         ╱──────────╲ API, Database, Services
        ╱            ╲
       ╱              ╲ Unit Tests (80% - 200+ tests)
      ╱────────────────╲ Functions, Components, Utilities
```

**Philosophy:**
- **Many fast unit tests** (70-80%) - Test individual functions/components
- **Some integration tests** (15-20%) - Test modules together
- **Few slow E2E tests** (5-10%) - Test critical user journeys

---

## 2. FRONTEND TESTING

### 2.1. Tech Stack

| Tool | Version | Purpose |
|------|---------|---------|
| Vitest | 1.3+ | Test runner (faster than Jest) |
| Testing Library | 14+ | React component testing |
| MSW | 2.0+ | Mock Service Worker (API mocking) |
| Playwright | 1.40+ | E2E testing |
| jest-axe | 8.0+ | Accessibility testing |

### 2.2. Unit Tests (Components)

**Test File Structure:**
```
src/
├── components/
│   ├── Button/
│   │   ├── Button.tsx
│   │   ├── Button.test.tsx   ← Unit test
│   │   └── Button.stories.tsx ← Storybook (optional)
```

**Example: Button Component Test**

```typescript
// src/components/Button/Button.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Button } from './Button';

describe('Button', () => {
  it('renders with text', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('calls onClick when clicked', () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click</Button>);
    
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('is disabled when loading', () => {
    render(<Button loading>Click</Button>);
    expect(screen.getByRole('button')).toBeDisabled();
  });

  it('shows spinner when loading', () => {
    render(<Button loading>Click</Button>);
    expect(screen.getByTestId('spinner')).toBeInTheDocument();
  });

  it('applies variant styles', () => {
    const { container } = render(<Button variant="primary">Click</Button>);
    expect(container.firstChild).toHaveClass('btn-primary');
  });
});
```

**Critical Components to Test:**
1. ✅ **Button** (variants, loading, disabled, icon)
2. ✅ **Input** (value change, validation, error state)
3. ✅ **Modal** (open/close, focus trap, escape key)
4. ✅ **Dropdown** (open/close, select item, keyboard nav)
5. ✅ **Form** (submit, validation, error messages)
6. ✅ **Table** (sorting, pagination, row selection)
7. ✅ **Toast** (show, auto-dismiss, close button)
8. ✅ **Checkbox** (checked/unchecked, indeterminate)
9. ✅ **Toggle** (on/off, disabled)
10. ✅ **Avatar** (image, fallback initials)

### 2.3. Integration Tests (Pages/Features)

**Example: Login Page Integration Test**

```typescript
// src/pages/Login/Login.test.tsx
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, beforeEach } from 'vitest';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { Login } from './Login';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

const server = setupServer(
  rest.post('/api/auth/login', (req, res, ctx) => {
    const { email, password } = req.body;
    
    if (email === 'test@test.com' && password === 'Password123') {
      return res(
        ctx.json({
          user: { id: '1', name: 'Test User', email },
          accessToken: 'token123',
        })
      );
    }
    
    return res(ctx.status(401), ctx.json({ message: 'Invalid credentials' }));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('Login Page', () => {
  const queryClient = new QueryClient();
  
  it('logs in successfully with valid credentials', async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <Login />
      </QueryClientProvider>
    );

    // Enter credentials
    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: 'test@test.com' },
    });
    fireEvent.change(screen.getByLabelText(/password/i), {
      target: { value: 'Password123' },
    });

    // Submit form
    fireEvent.click(screen.getByRole('button', { name: /kirish/i }));

    // Wait for success
    await waitFor(() => {
      expect(screen.getByText(/Welcome/i)).toBeInTheDocument();
    });
  });

  it('shows error with invalid credentials', async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <Login />
      </QueryClientProvider>
    );

    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: 'wrong@test.com' },
    });
    fireEvent.change(screen.getByLabelText(/password/i), {
      target: { value: 'wrong' },
    });

    fireEvent.click(screen.getByRole('button', { name: /kirish/i }));

    await waitFor(() => {
      expect(screen.getByText(/Invalid credentials/i)).toBeInTheDocument();
    });
  });

  it('validates email format', async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <Login />
      </QueryClientProvider>
    );

    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: 'not-an-email' },
    });
    fireEvent.blur(screen.getByLabelText(/email/i));

    await waitFor(() => {
      expect(screen.getByText(/Invalid email/i)).toBeInTheDocument();
    });
  });
});
```

**Critical Features to Test:**
1. ✅ Login/Logout flow
2. ✅ Chat assignment and messaging
3. ✅ Contact creation and editing
4. ✅ Settings update and save
5. ✅ Filter and search functionality
6. ✅ Pagination
7. ✅ Notification display

### 2.4. Zustand Store Tests

```typescript
// src/stores/__tests__/useAuthStore.test.ts
import { renderHook, act } from '@testing-library/react';
import { useAuthStore } from '../useAuthStore';

describe('useAuthStore', () => {
  beforeEach(() => {
    // Reset store before each test
    useAuthStore.getState().logout();
  });

  it('sets user and authenticates', () => {
    const { result } = renderHook(() => useAuthStore());

    act(() => {
      result.current.setUser({
        id: '123',
        name: 'Test User',
        email: 'test@test.com',
        role: 'admin',
      });
    });

    expect(result.current.user?.name).toBe('Test User');
    expect(result.current.isAuthenticated).toBe(true);
  });

  it('checks permissions correctly', () => {
    const { result } = renderHook(() => useAuthStore());

    act(() => {
      result.current.setUser({
        id: '123',
        name: 'Operator',
        email: 'op@test.com',
        role: 'operator',
      });
    });

    expect(result.current.hasPermission('chats.own')).toBe(true);
    expect(result.current.hasPermission('team.delete')).toBe(false);
  });

  it('logs out and clears state', () => {
    const { result } = renderHook(() => useAuthStore());

    act(() => {
      result.current.setUser({
        id: '123',
        name: 'User',
        email: 'user@test.com',
        role: 'operator',
      });
      result.current.setTokens('access-token', 'refresh-token');
    });

    expect(result.current.isAuthenticated).toBe(true);

    act(() => {
      result.current.logout();
    });

    expect(result.current.user).toBeNull();
    expect(result.current.isAuthenticated).toBe(false);
    expect(result.current.accessToken).toBeNull();
  });
});
```

---

## 3. BACKEND TESTING

### 3.1. Tech Stack

| Tool | Version | Purpose |
|------|---------|---------|
| Jest | 29+ | Test runner |
| Supertest | 6+ | HTTP assertions |
| testcontainers | 10+ | PostgreSQL test database |
| faker-js | 8+ | Test data generation |

### 3.2. Unit Tests (Services/Utils)

**Example: Email Validator**

```typescript
// src/utils/__tests__/validators.test.ts
import { validateEmail, validatePassword } from '../validators';

describe('validateEmail', () => {
  it('accepts valid emails', () => {
    expect(validateEmail('user@example.com')).toBe(true);
    expect(validateEmail('test.user+tag@domain.co.uk')).toBe(true);
  });

  it('rejects invalid emails', () => {
    expect(validateEmail('not-an-email')).toBe(false);
    expect(validateEmail('@example.com')).toBe(false);
    expect(validateEmail('user@')).toBe(false);
  });
});

describe('validatePassword', () => {
  it('accepts strong passwords', () => {
    expect(validatePassword('StrongPass123!')).toBe(true);
  });

  it('rejects weak passwords', () => {
    expect(validatePassword('weak')).toBe(false); // Too short
    expect(validatePassword('alllowercase')).toBe(false); // No uppercase
    expect(validatePassword('ALLUPPERCASE')).toBe(false); // No lowercase
    expect(validatePassword('NoNumbers!')).toBe(false); // No digits
  });
});
```

### 3.3. Integration Tests (API Endpoints)

**Example: Chats API Test**

```typescript
// src/api/__tests__/chats.test.ts
import request from 'supertest';
import { app } from '../../app';
import { db } from '../../database';

describe('Chats API', () => {
  let authToken: string;
  let workspaceId: string;

  beforeAll(async () => {
    // Setup test database
    await db.migrate.latest();
    
    // Create test user and get auth token
    const response = await request(app)
      .post('/api/auth/register')
      .send({
        name: 'Test User',
        email: 'test@test.com',
        password: 'Password123',
      });
    
    authToken = response.body.accessToken;
    workspaceId = response.body.workspace.id;
  });

  afterAll(async () => {
    await db.migrate.rollback();
    await db.destroy();
  });

  describe('GET /api/chats', () => {
    it('returns list of chats', async () => {
      const response = await request(app)
        .get('/api/chats')
        .set('Authorization', `Bearer ${authToken}`)
        .expect(200);

      expect(response.body).toHaveProperty('data');
      expect(Array.isArray(response.body.data)).toBe(true);
    });

    it('filters by status', async () => {
      const response = await request(app)
        .get('/api/chats?status=active')
        .set('Authorization', `Bearer ${authToken}`)
        .expect(200);

      expect(response.body.data).toEqual(
        expect.arrayContaining([
          expect.objectContaining({ status: 'active' }),
        ])
      );
    });

    it('returns 401 without auth', async () => {
      await request(app)
        .get('/api/chats')
        .expect(401);
    });
  });

  describe('POST /api/chats/:id/messages', () => {
    let chatId: string;

    beforeEach(async () => {
      // Create a test chat
      const chat = await db('conversations').insert({
        workspace_id: workspaceId,
        visitor_name: 'Test Visitor',
        status: 'active',
      }).returning('*');
      
      chatId = chat[0].id;
    });

    it('sends message successfully', async () => {
      const response = await request(app)
        .post(`/api/chats/${chatId}/messages`)
        .set('Authorization', `Bearer ${authToken}`)
        .send({
          text: 'Hello, how can I help?',
        })
        .expect(201);

      expect(response.body).toHaveProperty('id');
      expect(response.body.text).toBe('Hello, how can I help?');
    });

    it('validates required fields', async () => {
      await request(app)
        .post(`/api/chats/${chatId}/messages`)
        .set('Authorization', `Bearer ${authToken}`)
        .send({})
        .expect(400);
    });

    it('returns 404 for non-existent chat', async () => {
      await request(app)
        .post('/api/chats/non-existent-id/messages')
        .set('Authorization', `Bearer ${authToken}`)
        .send({ text: 'Hello' })
        .expect(404);
    });
  });
});
```

### 3.4. Database Tests

```typescript
// src/database/__tests__/migrations.test.ts
import { db } from '../index';

describe('Database Migrations', () => {
  it('runs all migrations successfully', async () => {
    await expect(db.migrate.latest()).resolves.not.toThrow();
  });

  it('creates all required tables', async () => {
    const tables = await db.raw(
      "SELECT tablename FROM pg_tables WHERE schemaname = 'public'"
    );

    const tableNames = tables.rows.map((row) => row.tablename);

    expect(tableNames).toContain('users');
    expect(tableNames).toContain('workspaces');
    expect(tableNames).toContain('conversations');
    expect(tableNames).toContain('messages');
    expect(tableNames).toContain('contacts');
  });
});
```

---

## 4. E2E TESTING

### 4.1. Playwright Setup

```typescript
// playwright.config.ts
import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    baseURL: 'http://localhost:3000',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  },
  projects: [
    {
      name: 'chromium',
      use: { browserName: 'chromium' },
    },
  ],
  webServer: {
    command: 'npm run dev',
    url: 'http://localhost:3000',
    reuseExistingServer: !process.env.CI,
  },
});
```

### 4.2. E2E Test Examples

**Example 1: Complete Signup Flow**

```typescript
// e2e/auth/signup.spec.ts
import { test, expect } from '@playwright/test';

test.describe('Signup Flow', () => {
  test('user can sign up and complete onboarding', async ({ page }) => {
    // 1. Navigate to signup
    await page.goto('/signup');
    
    // 2. Fill signup form
    await page.fill('input[name="name"]', 'Test User');
    await page.fill('input[name="email"]', 'test@example.com');
    await page.fill('input[name="password"]', 'Password123');
    
    // 3. Submit
    await page.click('button[type="submit"]');
    
    // 4. Should show success message
    await expect(page.locator('text=Check your email')).toBeVisible();
    
    // 5. Mock email verification (in real test, check test email service)
    // For now, simulate clicking verification link
    await page.goto('/verify-email?token=test-token-123');
    
    // 6. Should redirect to onboarding
    await expect(page).toHaveURL('/onboarding');
    
    // 7. Complete onboarding steps
    // Step 1: Welcome
    await page.click('button:has-text("Boshlash")');
    
    // Step 2: Workspace setup
    await page.fill('input[name="workspaceName"]', 'Test Workspace');
    await page.click('button:has-text("Davom etish")');
    
    // Step 3: Widget customization
    await page.click('[data-testid="color-picker-blue"]');
    await page.click('button:has-text("Davom etish")');
    
    // Step 4: Installation (skip for test)
    await page.click('button:has-text("O\'tkazib yuborish")');
    
    // 8. Should redirect to dashboard
    await expect(page).toHaveURL('/dashboard');
    await expect(page.locator('h1:has-text("Dashboard")')).toBeVisible();
  });

  test('shows validation errors for invalid input', async ({ page }) => {
    await page.goto('/signup');
    
    // Try to submit without filling
    await page.click('button[type="submit"]');
    
    // Should show validation errors
    await expect(page.locator('text=Name is required')).toBeVisible();
    await expect(page.locator('text=Email is required')).toBeVisible();
    await expect(page.locator('text=Password is required')).toBeVisible();
  });
});
```

**Example 2: Chat Assignment Flow**

```typescript
// e2e/inbox/chat-assignment.spec.ts
import { test, expect } from '@playwright/test';

test.describe('Chat Assignment', () => {
  test.beforeEach(async ({ page }) => {
    // Login as admin
    await page.goto('/login');
    await page.fill('input[name="email"]', 'admin@test.com');
    await page.fill('input[name="password"]', 'Admin123');
    await page.click('button[type="submit"]');
    await expect(page).toHaveURL('/dashboard');
  });

  test('admin can assign chat to operator', async ({ page }) => {
    // 1. Go to inbox
    await page.click('a[href="/inbox"]');
    
    // 2. Click first unassigned chat
    await page.click('[data-testid="chat-item"]:has-text("Unassigned")');
    
    // 3. Click assign button
    await page.click('button:has-text("Assign")');
    
    // 4. Select operator from dropdown
    await page.click('[data-testid="agent-dropdown"]');
    await page.click('text=Jahongir (Operator)');
    
    // 5. Confirm assignment
    await page.click('button:has-text("Assign")');
    
    // 6. Should show success toast
    await expect(page.locator('text=Chat assigned successfully')).toBeVisible();
    
    // 7. Chat status should update
    await expect(page.locator('text=Assigned to Jahongir')).toBeVisible();
  });
});
```

**Critical E2E Flows (10 tests):**
1. ✅ Signup + Onboarding + Dashboard
2. ✅ Login + Logout
3. ✅ Chat: Assign + Message + Resolve
4. ✅ Contact: Create + Edit + Delete
5. ✅ Team: Invite + Accept + Suspend
6. ✅ Settings: Update + Save
7. ✅ Billing: Upgrade + Payment + Invoice
8. ✅ Automation: Create rule + Trigger + Execute
9. ✅ Search: Global search + Navigate
10. ✅ Notification: Receive + Click + Navigate

---

## 5. PERFORMANCE TESTING

### 5.1. Lighthouse CI

```yaml
# .lighthouserc.json
{
  "ci": {
    "collect": {
      "url": ["http://localhost:3000/dashboard"],
      "numberOfRuns": 3
    },
    "assert": {
      "preset": "lighthouse:recommended",
      "assertions": {
        "categories:performance": ["error", { "minScore": 0.9 }],
        "categories:accessibility": ["error", { "minScore": 0.95 }],
        "categories:best-practices": ["error", { "minScore": 0.9 }],
        "first-contentful-paint": ["error", { "maxNumericValue": 2000 }],
        "largest-contentful-paint": ["error", { "maxNumericValue": 3000 }],
        "cumulative-layout-shift": ["error", { "maxNumericValue": 0.1 }]
      }
    }
  }
}
```

### 5.2. Load Testing (Artillery)

```yaml
# artillery-load-test.yml
config:
  target: "https://api.chatflow.uz"
  phases:
    - duration: 60
      arrivalRate: 10
      name: "Warm up"
    - duration: 120
      arrivalRate: 50
      name: "Sustained load"
    - duration: 60
      arrivalRate: 100
      name: "Peak load"
  variables:
    auth_token: "test-token-123"

scenarios:
  - name: "List chats"
    flow:
      - get:
          url: "/api/chats"
          headers:
            Authorization: "Bearer {{ auth_token }}"
          expect:
            - statusCode: 200
            - contentType: json

  - name: "Send message"
    flow:
      - post:
          url: "/api/chats/{{ $randomString() }}/messages"
          headers:
            Authorization: "Bearer {{ auth_token }}"
          json:
            text: "Test message {{ $randomString() }}"
          expect:
            - statusCode: 201
```

---

## 6. SECURITY TESTING

### 6.1. OWASP ZAP Scan

```bash
# Run automated security scan
docker run -t owasp/zap2docker-stable zap-baseline.py \
  -t https://chatflow.uz \
  -r zap-report.html
```

### 6.2. SQL Injection Tests

```typescript
// Security test example
describe('SQL Injection Prevention', () => {
  it('prevents SQL injection in search', async () => {
    const maliciousInput = "'; DROP TABLE users; --";
    
    const response = await request(app)
      .get('/api/contacts')
      .query({ search: maliciousInput })
      .set('Authorization', `Bearer ${authToken}`)
      .expect(200);

    // Should return safely, not execute SQL
    expect(response.body).toHaveProperty('data');
    
    // Verify table still exists
    const users = await db('users').select('*');
    expect(users).toBeDefined();
  });
});
```

---

## 7. ACCESSIBILITY TESTING

### 7.1. jest-axe Tests

```typescript
// src/components/Modal/__tests__/Modal.a11y.test.tsx
import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import { Modal } from '../Modal';

expect.extend(toHaveNoViolations);

describe('Modal Accessibility', () => {
  it('has no accessibility violations', async () => {
    const { container } = render(
      <Modal isOpen={true} onClose={() => {}}>
        <h2>Modal Title</h2>
        <p>Modal content</p>
      </Modal>
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
```

### 7.2. Keyboard Navigation Tests

```typescript
test('modal can be navigated with keyboard', async ({ page }) => {
  await page.goto('/dashboard');
  
  // Open modal with keyboard (assuming Ctrl+K)
  await page.keyboard.press('Control+K');
  
  // Modal should be visible
  await expect(page.locator('[role="dialog"]')).toBeVisible();
  
  // Tab should cycle through focusable elements
  await page.keyboard.press('Tab');
  const firstButton = page.locator('button').first();
  await expect(firstButton).toBeFocused();
  
  // Escape should close modal
  await page.keyboard.press('Escape');
  await expect(page.locator('[role="dialog"]')).not.toBeVisible();
});
```

---

## 8. CI/CD INTEGRATION

### 8.1. GitHub Actions Workflow

```yaml
# .github/workflows/test.yml
name: Tests

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main, develop]

jobs:
  unit-tests:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Run unit tests
        run: npm run test:unit -- --coverage
      
      - name: Upload coverage
        uses: codecov/codecov-action@v3
        with:
          files: ./coverage/coverage-final.json

  integration-tests:
    runs-on: ubuntu-latest
    services:
      postgres:
        image: postgres:15
        env:
          POSTGRES_PASSWORD: postgres
        options: >-
          --health-cmd pg_isready
          --health-interval 10s
          --health-timeout 5s
          --health-retries 5
      redis:
        image: redis:7
        options: >-
          --health-cmd "redis-cli ping"
          --health-interval 10s
          --health-timeout 5s
          --health-retries 5
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Run migrations
        run: npm run db:migrate
        env:
          DATABASE_URL: postgresql://postgres:postgres@localhost:5432/test
      
      - name: Run integration tests
        run: npm run test:integration

  e2e-tests:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Install Playwright browsers
        run: npx playwright install --with-deps
      
      - name: Build app
        run: npm run build
      
      - name: Run E2E tests
        run: npm run test:e2e
      
      - name: Upload Playwright report
        if: always()
        uses: actions/upload-artifact@v3
        with:
          name: playwright-report
          path: playwright-report/

  lighthouse:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build app
        run: npm run build
      
      - name: Run Lighthouse CI
        run: npx @lhci/cli@0.12.x autorun
```

### 8.2. Pre-commit Hooks (Husky)

```json
// package.json
{
  "scripts": {
    "test": "vitest",
    "test:unit": "vitest run --coverage",
    "test:integration": "vitest run --config vitest.integration.config.ts",
    "test:e2e": "playwright test",
    "test:a11y": "vitest run --config vitest.a11y.config.ts",
    "lint": "eslint . --ext .ts,.tsx",
    "type-check": "tsc --noEmit"
  },
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged",
      "pre-push": "npm run test:unit && npm run type-check"
    }
  },
  "lint-staged": {
    "*.{ts,tsx}": [
      "eslint --fix",
      "vitest related --run"
    ]
  }
}
```

---

## 9. COVERAGE GOALS

| Layer | Target | Priority |
|-------|--------|----------|
| Critical Paths | 90%+ | High |
| Business Logic | 80%+ | High |
| UI Components | 70%+ | Medium |
| Utils/Helpers | 90%+ | High |
| Overall | 80%+ | Medium |

**Critical Paths:**
- Authentication (login, signup, logout)
- Chat assignment and messaging
- Payment processing
- Data export (GDPR)
- API key generation

---

## 10. TEST CHECKLIST (Pre-release)

- [ ] All unit tests pass (200+ tests)
- [ ] All integration tests pass (50+ tests)
- [ ] All E2E tests pass (10 critical flows)
- [ ] Code coverage ≥ 80%
- [ ] No accessibility violations (axe)
- [ ] Lighthouse scores: Performance ≥ 90, Accessibility ≥ 95
- [ ] Load test passes (100 concurrent users)
- [ ] Security scan passes (no high/critical vulnerabilities)
- [ ] Manual smoke test on staging
- [ ] Cross-browser testing (Chrome, Firefox, Safari, Edge)
- [ ] Mobile responsive testing (iOS Safari, Chrome Android)

---

**STATUS:** ✅ Testing strategy to'liq yakunlandi  
**Qo'shildi:** 2026-02-12  
**Jami:** ~1200 qator testing specs + code examples + CI/CD setup
