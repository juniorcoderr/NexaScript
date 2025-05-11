# 🧑‍💻 SaaS Code Editor - Full Stack VSCode-Inspired Online IDE

> A full-featured, **production-ready SaaS code editor** built with **Next.js 15**, **Convex**, **Monaco Editor**, and **Clerk**, designed to offer a **VSCode-like experience** in the browser. This project enables users to write, execute, and manage code snippets in real-time, across multiple programming languages, with support for authentication, payments, and more.

---

## 🖼️ Project Overview

This SaaS platform functions like an online version of VSCode. It allows users to:

* Write and run code in various languages
* Share and manage code snippets
* Star and comment on others' snippets
* Upgrade to a **Pro Plan** for extra features via integrated payment processing

This is ideal for developers building **developer tools**, **code sharing platforms**, or exploring **SaaS monetization** with modern full-stack frameworks.

---

## 🌟 Live Features & Functionality

### 🧾 Authentication (via Clerk)

* Sign in with **Email**, **Google**, or **GitHub**
* JWT-secured sessions
* Clerk provides ready-made UIs for login/signup

---

### ✍️ Snippet Management

* **Create, Edit, Delete** snippets with rich code editing
* Each snippet includes:

  * Title & language
  * Code content (Monaco Editor)
  * Output window for results
  * Markdown-based **Comments**
  * **Stars** to favorite snippets

---

### 🖥️ Code Execution (via Piston API)

* Supports **10+ programming languages**:

  * JavaScript, Python, C++, Java, Go, Ruby, Rust, PHP, and more
* **Free Plan**: JavaScript only
* **Pro Plan**: Full language support
* Displays live console output with syntax highlighting

---

### 🧠 Real-time Backend (via Convex)

* Convex powers:

  * Authenticated user data
  * Snippets DB
  * Starred snippets
  * Comments DB
* All data interactions are **real-time**, **type-safe**, and **fully reactive**

---

### 💳 SaaS Payments (via Lemon Squeezy)

* **Stripe-based payment gateway** using Lemon Squeezy
* One-time lifetime access plan
* Secure checkout with receipt and license key validation

---

### 🎨 Developer Experience

* **VSCode-like UI** using Monaco Editor
* Auto-syntax highlighting, IntelliSense, themes
* **Framer Motion** for subtle transitions
* Responsive design, dark/light themes
* Smooth modals, toasts, and loaders

---

## 🧰 Tech Stack

| Category      | Tech Used                                     |
| ------------- | --------------------------------------------- |
| **Frontend**  | Next.js 15 (App Router), React 18, TypeScript |
| **Backend**   | Convex (Database + API Functions)             |
| **Auth**      | Clerk                                         |
| **Editor**    | Monaco Editor (used in VSCode)                |
| **Payments**  | Lemon Squeezy                                 |
| **Execution** | Piston API                                    |
| **UI/UX**     | Tailwind CSS, Framer Motion, Shadcn/ui        |

---

## 🗂️ Folder Structure (Simplified)

```bash
.
├── app/                  # App directory for routing (Next.js 15)
│   ├── editor/           # Monaco-based editor logic
│   └── auth/             # Clerk authentication routes
├── components/           # Reusable components (UI, layout, headers)
├── convex/               # Backend logic: DB schema, mutations, queries
├── lib/                  # Utilities and helpers (e.g., for auth, plans)
├── hooks/                # Custom React hooks (useUser, useSnippet, etc.)
├── public/               # Static files
├── styles/               # Global and component-based styles
└── types/                # TypeScript interfaces and types
```

---

## 🧪 Getting Started Locally

### 1. Clone the Repo

```bash
git clone https://github.com/juniorcoderr/NexaScript.git
cd NexaScript
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env.local` file with the following keys:

```env
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CONVEX_DEPLOYMENT_URL=
NEXT_PUBLIC_CONVEX_URL=
VITE_CLERK_FRONTEND_API_URL=
LEMONSQUEEZY_CHECKOUT_URL=
```

### 4. Start Development Server

```bash
npm run dev
```

---

## 🛡️ Role-Based Access

| Role     | Permissions                     |
| -------- | ------------------------------- |
| Guest    | View public snippets only       |
| Auth     | Create/edit/delete own snippets |
| Pro User | Run code in any language        |
| Owner    | Manage comments & moderation    |

---

## 🔮 Planned Features

* 🧑‍🤝‍🧑 Realtime collaborative editing (pair programming)
* 🎨 Theme switcher and font customization
* 🧩 Plugin system for user extensions
* 📤 Export snippets to Gist or downloadable files
* 📈 Usage stats dashboard (admin only)

---

## ❤️ Acknowledgements

* [Piston API](https://github.com/engineer-man/piston)
* [Clerk.dev](https://clerk.dev/)
* [Convex.dev](https://convex.dev/)
* [Lemon Squeezy](https://www.lemonsqueezy.com/)
* [Monaco Editor](https://microsoft.github.io/monaco-editor/)

---

## 📣 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.
