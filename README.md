# 🤖 ChatterBot – Your Intelligent Chat Companion

ChatterBot is a sleek, production-ready chatbot web app built with **Next.js**, **TypeScript**, **Tailwind CSS**, and **Shadcn UI**. Powered by **Gemini LLM APIs**, it’s designed to simulate intelligent conversation with real-time streaming, voice input, JWT auth, and more.  

🚀 Built for the **ZeroCode Frontend Engineer Assignment**, ChatterBot focuses on **clean architecture**, **developer experience**, and **delightful UX**.

---

## ✨ Features

- 🔐 **JWT Authentication**  
  Secure login/register flows using cookies and middleware protection. No DB—lightweight `users.json` storage with hashed credentials.

- 💬 **Real-time Chat Interface**  
  Smooth streaming responses, ChatGPT-style typing animation, and persistent chat history.

- 🎙️ **Voice Input**  
  Built-in speech recognition lets users send messages by speaking.

- 📁 **Export Chat to .txt**  
  Export entire conversations with a single click from the navbar.

- 🌗 **Light/Dark Theme Toggle**  
  Seamlessly switch between themes using Shadcn’s UI conventions.

- ⚙️ **TypeScript + ESLint + Prettier**  
  Type-safe, linted, formatted—developer happiness baked in.

- 🧠 **Gemini API Integration**  
  Smart, conversational assistant with streamable AI responses.

---

## 📸 Demo

![chatterbot-light](https://drive.google.com/file/d/1a__a2zv1BlCbkiWOouyDPxkhfcEwjW7J/view?usp=sharing)  
![chatterbot-dark](https://drive.google.com/file/d/1U9-LnQO4miG-DqGer5dAM55kChhYlPOp/view?usp=sharing)

> 🎥 [Click here to watch the live demo](https://chatterbot-assignment.vercel.app/)

---

## 🔧 Tech Stack

| Tech        | Role                               |
|-------------|------------------------------------|
| Next.js     | App framework (App Router)         |
| TypeScript  | Type safety                        |
| Tailwind CSS| Styling                            |
| Shadcn UI   | Component system                   |
| JWT         | Auth (client-side + middleware)    |
| Gemini API  | Chat completions (LLM backend)     |
| Vercel      | Deployment                         |

---

## 📁 Project Structure

```
zerocode-fe-assignment/  
├── app/ # App Router pages  
│ ├── chat/ # Main chat UI  
│ ├── login/ # Login page  
│ ├── register/ # Register page  
│ ├── api/ # API routes  
│ │ ├── auth/ # JWT login/register  
│ │ └── chat/ # LLM streaming  
├── components/ # UI components (ChatInput, ChatMessage, Navbar)  
├── hooks/ # Custom hooks (useChat)  
├── context/ # User context  
├── lib/ # JWT utils, user store, LLM proxy  
├── middleware.ts # Auth protection  
├── styles/ # Tailwind + Shadcn styles

```

---

## 🛠️ Setup Instructions

1. **Clone the repo**
   ```bash
   git clone https://github.com/<your-handle>/zerocode-fe-assignment.git
   cd zerocode-fe-assignment
   ```
2. **Install dependencies**
    ```bash

    pnpm install
    ```
3. **Add .env.local**
    ```bash
    JWT_SECRET=your_super_secret_jwt_key
    GEMINI_API_KEY=your_groq_or_gemini_api_key
    ```
4. **Run locally**
    ```bash
    pnpm dev
    ```
5. **Build for production**
    ```bash
    pnpm build && pnpm start
    ```
---
## 🧪 Test Credentials
You can use the following test credentials to log in:

```
Username: user123
Password: baloon123
```
Or register a new user!

---
## 🌍 Live URL

### 👉 https://chatterbot-assignment.vercel.app/

---

## 📢 Praise-worthy Highlights
- No database? No problem. Clever use of a JSON file keeps it lightweight.
- Voice input, stream-based UI, and theme toggles for a rich UX.
- Follows strict best practices with modular file structure and ESLint/Prettier rules.
- Protected routes via middleware—can’t cheat with URL.
- Deployed and testable in seconds!

---

## 🧑‍💻 Author
### Sayantan Paul
Frontend Engineer | React + TypeScript Enthusiast
[GitHub](https://github.com/sayantan-paul-007) • [LinkedIn](https://www.linkedin.com/in/sayantan-paul-6010701a7/)

---

## 🏁 Final Thoughts
ChatterBot isn’t just an assignment—it’s a polished, production-grade app that checks every box from auth to UX.
Built with love, logic, and the power of Next.js.



