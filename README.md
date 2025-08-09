# 🎨 Pixxel-AI Image Editor

**Pixxel-AI** is a **full-stack AI-powered image editor** built with  
**Next.js**, **Fabric.js**, **Tailwind CSS**, **ImageKit**, **Shadcn UI**, **Clerk**, and **Convex**.



---

## ✨ Features

- 🎯 **Real-time Image Editing** – Interactive canvas editing with **Fabric.js**
- 🖌 **Advanced Tools** – Brush, shapes, text, overlays, filters, drag-and-drop
- 🔒 **Secure Uploads** – Upload to **ImageKit** via protected Convex API routes
- 👤 **Authentication** – Seamless login/signup with **Clerk**
- ⚡ **Real-time Sync** – **Convex** for backend sync, storage, and metadata
- 💎 **Modern UI** – Responsive, accessible design with **Shadcn UI** + **Tailwind CSS**
- 🚀 **Production-Ready Stack** – Scalable with **Next.js**

---

## 🛠 How It Works

1️⃣ **Authentication** – User sessions are handled with **Clerk**, ensuring secure login/signup.  
2️⃣ **Canvas Editing** – Fabric.js tools built as React hooks & components enable rich image manipulation.  
3️⃣ **Secure Uploads** – Images are stored in **ImageKit** through secure Convex endpoints (no API keys in the frontend).  
4️⃣ **State Management** – **Convex** handles data sync, metadata storage, and user associations.  
5️⃣ **UI/UX** – Clean, modern components with **Shadcn UI** and **Tailwind CSS**.

---

## 📂 Folder Structure
pixxel-ai-image-editor/
├── app/ # Next.js app pages
├── components/ # Shadcn + custom UI components
├── context/ # Global canvas state
├── convex/ # Convex backend functions
├── hooks/ # Reusable hooks
├── lib/ # Utility functions & integrations
├── public/ # Static assets
├── README.md
└── config files # .gitignore, env, etc.

npm install
# or
yarn install



