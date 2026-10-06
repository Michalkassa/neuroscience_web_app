# 🧠 Neuroscience Helper

A web app for neuroscience students to track assignments, browse a module reading list and leave anonymous lecture feedback.

**Live:** [neuroscience-web-app.vercel.app](https://neuroscience-web-app.vercel.app)

![Home](docs/screenshots/home.png)

## Features

- 📝 **Anonymous feedback**: rate lectures from 1 to 5 stars and leave comments, with a profanity filter
- 📅 **Assignments**: grouped by module, with weight, topics, assessment style, feedback date, a due-date countdown and overdue status
- 📚 **Reading list**: books and resources grouped by module, with links
- 🔐 **Admin dashboard**: create, edit and delete assignments; add and delete books; review and delete feedback
- 🛡️ **Security**: login only for emails on an allowlist, no public sign-up, bcrypt-hashed passwords, JWT sessions
- 🎨 **Notebook theme**: lined-paper design with hand-drawn lab equipment illustrations

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
- **Other:** Google reCAPTCHA v3, `bad-words`
- **Hosting:** Vercel

## Routes

| Route | Access | Description |
|---|---|---|
| `/` | Public | Home |
| `/feedback` | Public | Anonymous feedback form |
| `/assignments` | Public | Assignments by module |
| `/reading-list` | Public | Reading list by module |
| `/login` | Public | Admin sign-in |
| `/dashboard/feedback` | Admin | View and delete feedback |
| `/dashboard/assignments` | Admin | Create, edit and delete assignments |
| `/dashboard/readinglist` | Admin | Add and delete books |

## Database Schema

**User**

| Field | Type | Notes |
|---|---|---|
| id | String | PK, cuid |
| name | String? | |
| email | String | unique |
| password | String | bcrypt hash |
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
| moduleName | String | e.g. `BIOC0001` |
| dueDate | DateTime | |
| isSummative | Boolean | default `false` |
| weight | Int? | % of module grade |
| topics | String? | |
| assessmentStyle | String? | |
| expectedFeedback | String? | |

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
npm run seed   # creates the admin account
npm run dev
```

Create a `.env` file:

```env
DATABASE_URL=postgresql://user:password@localhost:5432/db
AUTH_SECRET=...
ALLOWED_EMAILS=admin@example.com
ADMIN_EMAIL=admin@example.com
ADMIN_PASSWORD=...
ADMIN_NAME=Admin
RECAPTCHA_SITE_KEY=...
RECAPTCHA_SECRET_KEY=...
```

## License

MIT
