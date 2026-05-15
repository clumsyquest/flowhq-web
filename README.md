# Stillworks Test App

A real Next.js app designed to validate all Stillworks detection capabilities.

## Routes & Expected Detection

| Route | Type | Visibility | Expected Status |
|---|---|---|---|
| `/` | STATIC | PUBLIC | PASS |
| `/about` | STATIC | PUBLIC | PASS |
| `/pricing` | STATIC | PUBLIC | PASS |
| `/contact` | FORM_FLOW | PUBLIC | PASS |
| `/login` | FORM_FLOW | PUBLIC (known_auth_page) | PASS |
| `/register` | FORM_FLOW | PUBLIC (known_auth_page) | PASS |
| `/dashboard` | ACTION_FLOW | PROTECTED (parent_layout) | AUTH_REQUIRED or AUTH_SUCCESS |
| `/dashboard/projects` | STATIC | PROTECTED (parent_layout) | AUTH_REQUIRED or AUTH_SUCCESS |
| `/settings` | FORM_FLOW | PROTECTED (useSession pattern) | AUTH_REQUIRED or AUTH_SUCCESS |
| `/billing` | STATIC | PROTECTED (redirect to login) | AUTH_REQUIRED or AUTH_SUCCESS |

## Test Credentials

```
Email    : test@demo.com
Password : password123
Login URL: /login
```

## Protection Mechanisms Used

Each protected route uses a different detection pattern to test Stillworks:

- `/dashboard/*` — **parent layout** (`dashboard/layout.tsx` checks auth)
- `/settings` — **useSession hook** (next-auth pattern detected in page file)
- `/billing` — **redirect to /login** (router.push('/login') pattern)

## Setup

```bash
npm install
npm run dev
```

App runs on http://localhost:3000

## Deploy to Vercel

```bash
vercel --prod
```

Then configure in Stillworks:
- base_url: your Vercel URL
- test_email: test@demo.com
- test_password: password123
- login_url: /login
