# 🌐 OpenGPT – AI Text to Text and Image Generation

## 🚀 Overview
**OpenGPT** is an innovative web application that combines the power of AI-driven text generation and image creation into a single, unified platform.  
Built using the **Gemini API**, OpenGPT allows users to chat with an intelligent AI, generate high-quality images from text prompts, and interact in real-time — all through a responsive and modern web interface.  

This project aims to simplify workflows for developers, content creators, and designers by providing an all-in-one AI assistant capable of handling both creative and technical tasks efficiently.

---

## 🧩 Problem Statement
In today’s AI ecosystem, users often rely on multiple platforms for different tasks — one for text generation, another for image creation, and others for coding help or content generation.  
**OpenGPT** solves this fragmentation by providing a **single intelligent workspace** that combines chat-based AI text generation and image synthesis with seamless user experience and real-time communication.

---

## 🧠 Methodology
- **Text Generation:** Powered by the **Gemini API**, enabling advanced conversational AI with contextual understanding.  
- **Image Generation:** Uses **ImageKit API** to transform text prompts into AI-generated images.  
- **Real-Time Messaging:** Implements WebSocket-based communication for smooth and interactive chat sessions.  
- **User Authentication:** Secure authentication using **JWT tokens** for personalized access and data protection.  
- **Payment Integration:** **Stripe API** enables subscription-based access to premium AI features.  

---

## ⚙️ Tech Stack
**Frontend:** React.js  
**Backend:** Node.js, Express  
**Database:** MongoDB  
**APIs Used:** Gemini API, ImageKit API, Stripe API  
**Authentication:** JWT (JSON Web Token)  
**Deployment:** Vercel / Render / Netlify (based on hosting preference)

---

## ✨ Key Features
- 🤖 **AI Chatbot Interaction:** Real-time conversation with AI for text generation, Q&A, and creative writing.  
- 🖼️ **AI Image Generation:** Create images instantly from text prompts.  
- 🔐 **Secure Authentication:** JWT-based login system for user privacy.  
- 💬 **Real-time Messaging:** Seamless live chat powered by sockets.  
- 💳 **Payment Integration:** Subscription and premium feature access using Stripe.  
- 🧠 **Syntax Highlighting:** Color-coded code rendering for developers.  
- 📱 **Responsive UI:** Fully optimized for mobile, tablet, and desktop.  

---

## 🌍 Impact
OpenGPT empowers professionals and students alike by providing a unified, intelligent assistant that enhances creativity, boosts productivity, and eliminates the need for multiple AI tools.  
By combining **Gemini’s multimodal capabilities** with a modern tech stack, OpenGPT makes AI more **accessible, versatile, and practical** for real-world use cases.

---

## 📦 Installation & Setup

```bash
# Clone the repository
git clone https://github.com/yourusername/OpenGPT.git

# Navigate into the project folder
cd OpenGPT

# Install dependencies
npm install

# Add your environment variables in a .env file
# Example:
# GEMINI_API_KEY=your_gemini_api_key
# IMAGEKIT_API_KEY=your_imagekit_api_key
# STRIPE_SECRET_KEY=your_stripe_secret_key
# JWT_SECRET=your_jwt_secret

# Run the app
npm start
