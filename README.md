Pixxel-AI Image Editor 
A full-stack, AI-powered image editor built with Next.js, Fabric.js, Tailwind CSS, ImageKit, Shadcn UI, Clerk, and Convex.

Features
Real-time image editing with Fabric.js

Drag-and-drop and canvas tools (brush, shapes, text overlays, filters)

Secure image uploads via ImageKit, configured through API

User authentication powered by Clerk

Backend logic with Convex for state sync and durable image handling

Beautiful UI components using Shadcn UI and clean styling with Tailwind CSS

Modern, scalable stack using Next.js


How It Works
User Authentication
Handle login/signup using Clerk. Each user session is tracked securely.

Canvas & Editing Tools
Users can edit images on the canvas using Fabric.js integrations built as React components and hooks.

Image Uploads
Edits are uploaded securely to ImageKit via protected endpoints or Convex mutations—no private keys leaked to the frontend.

State Sync
Convex manages backend sync (image storage, metadata, user associations) without heavy config.

UI Flow
UI components (modals, buttons, toolbars) are styled with Shadcn UI and responsive design with Tailwind CSS.

Folder Structure

Edit
├── app/               # Next.js pages
├── components/        # UI components (shadcn + custom)
├── context/           # React context (e.g., for Canvas state)
├── convex/            # Convex backend functions
├── hooks/             # Reusable React hooks
├── lib/               # Utility functions and integrations
├── public/            # Static assets
├── README.md          # Project overview
└── .gitignore, config files, etc.


Installation
bash
Copy
Edit
git clone https://github.com/piyush-eon/ai-image-editor.git
cd ai-image-editor
npm install
# or
yarn install
Running Locally
bash
Copy
Edit
npm run dev