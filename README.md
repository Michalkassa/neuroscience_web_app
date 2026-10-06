# 🧠 Neuroscience Helper

A web app for neuroscience students to track assignments, browse a module reading list and leave anonymous lecture feedback.

**Live:** [neuroscience-web-app.vercel.app](https://neuroscience-web-app.vercel.app)

![Home](docs/screenshots/home.png)

## Features

- 📝 **Anonymous feedback**: rate lectures from 1 to 5 stars and leave comments, with a profanity filter
- 📅 **Assignments**: grouped by module, with due dates and overdue status
- 📚 **Reading list**: books and resources grouped by module, with links
- 🔐 **Admin dashboard**: sign in to add or delete assignments and books, and to search or delete feedback
- 🛡️ **Security**: bcrypt-hashed passwords, JWT sessions and reCAPTCHA v3

## Screenshots

| Feedback | Assignments |
|---|---|
| ![Feedback](docs/screenshots/feedback.png) | ![Assignments](docs/screenshots/assignments.png) |

| Reading List | Admin Login |
|---|---|
| ![Reading List](docs/screenshots/reading-list.png) | ![Login](docs/screenshots/login.png) |

## Tech Stack

- **Framework:** Next.js 15 (App Router, Server Actions, Turbopack)
- **UI:** React 19, Tailwind CSS 4
- **Language:** TypeScript
- **Database:** PostgreSQL + Prisma ORM 7 (`@prisma/adapter-pg`)
- **Auth:** NextAuth.js v5 (Credentials) + bcrypt
- **Other:** Google reCAPTCHA v3, `bad-words`, `use-debounce`
- **Hosting:** Vercel

## Routes

| Route | Access | Description |
|---|---|---|
| `/` | Public | Home |
| `/feedback` | Public | Anonymous feedback form |
| `/assignments` | Public | Assignments by module |
| `/reading-list` | Public | Reading list by module |
| `/login` | Public | Admin sign-in |
| `/dashboard/feedback` | Admin | View, search and delete feedback |
| `/dashboard/assignments` | Admin | Add or delete assignments |
| `/dashboard/readinglist` | Admin | Add or delete books |

## Database Schema

**User**

| Field | Type | Notes |
|---|---|---|
| id | String | PK, cuid |
| name | String? | |
| email | String | unique |
| password | String | bcrypt hash |
| admin | Boolean | default `false` |
| emailVerified | DateTime? | |
| image | String? | |
| createdAt / updatedAt | DateTime | |

**Session**

| Field | Type | Notes |
|---|---|---|
| sessionToken | String | unique |
| userId | String | FK → User (cascade delete) |
| expires | DateTime | |
| createdAt / updatedAt | DateTime | |

**FeedbackFormSubmissions**

| Field | Type | Notes |
|---|---|---|
| id | String | PK, cuid |
| lecture | String | |
| rating | Int | 1–5 |
| feedback | String | default `""` |

**Assignments**

| Field | Type | Notes |
|---|---|---|
| id | String | PK, cuid |
| title | String | |
| moduleName | String | |
| dueDate | DateTime | |

**Books**

| Field | Type | Notes |
|---|---|---|
| id | String | PK, cuid |
| title | String | |
| author | String | |
| moduleName | String | |
| url | String? | |
| icon | String? | |

## Getting Started

```bash
npm install
npx prisma migrate dev
npm run dev
```

Create a `.env` file:

```env
DATABASE_URL=postgresql://user:password@localhost:5432/db
AUTH_SECRET=...
NEXTAUTH_URL=http://localhost:3000
RECAPTCHA_SITE_KEY=...
RECAPTCHA_SECRET_KEY=...
```

## License

MIT
