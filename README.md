# Homework Helper for Busy Parents

A web-based AI chatbot app designed to help busy parents support their children with homework. Ask questions via text, image, or voice, and get simple, friendly explanations or step-by-step walkthroughs.

## Features
- Text, image, and voice question input
- AI-powered answers with educational tips
- User authentication (email/password, Google)
- Pay-per-use and subscription billing (Stripe/Flutterwave)
- Admin dashboard for pricing, subscriptions, and metrics
- Minimal, mobile-first UI
- Swahili and English support

## Tech Stack
- **Backend:** Python (FastAPI), OpenCV, NLP, Stripe/Flutterwave
- **Frontend:** React.js (mobile-first), i18n
- **Auth/DB:** Firebase or Supabase

## Setup

### Backend
1. `cd backend`
2. `python -m venv venv && source venv/bin/activate`
3. `pip install -r requirements.txt`
4. `uvicorn app.main:app --reload`

### Frontend
1. `cd frontend`
2. `npm install`
3. `npm run dev`

### Environment Variables
- Configure API keys for Stripe/Flutterwave, Firebase/Supabase, and OpenAI (or other AI provider).

## Usage
- Visit the homepage, sign up or log in.
- Ask homework questions via text, image, or voice.
- View answers, tips, and your question history.
- Manage billing and subscriptions in your dashboard.

## License
MIT 