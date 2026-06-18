Step 2 — Replace README.md
Open D:\Documents\Projects\Portfolio\portfolio\README.md and replace everything with:
markdown# Poornachandran — Portfolio

Full Stack AI Engineer portfolio built with React + Node.js/Express.

## Project Structure
portfolio/

├── frontend/        # React + Vite + Tailwind CSS

│   ├── src/

│   │   ├── components/

│   │   │   ├── layout/    # Navbar, Footer

│   │   │   ├── sections/  # Hero, About, Skills, Projects...

│   │   │   └── ui/        # Reusable components

│   │   └── data/

│   │       └── portfolioData.js

│   └── package.json

└── backend/         # Node.js + Express

├── routes/

│   └── contact.js     # Contact form API

├── middleware/

│   └── rateLimiter.js

├── server.js

└── package.json

## Getting Started

```bash
# Install dependencies
cd frontend && npm install
cd ../backend && npm install

# Run frontend (Terminal 1)
cd frontend && npm run dev      # http://localhost:5173

# Run backend (Terminal 2)
cd backend && npm run dev       # http://localhost:5000
```

## Tech Stack

| Layer | Tech |
|-------|------|
| Frontend | React 18, Vite, Tailwind CSS, Framer Motion |
| Backend | Node.js, Express, Nodemailer |
| Security | CORS, dotenv, express-rate-limit |

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/health` | Health check |
| POST | `/api/contact` | Send contact form email |

## Environment Variables

**backend/.env**
PORT=5000

FRONTEND_URL=http://localhost:5173

EMAIL_USER=your_gmail@gmail.com

EMAIL_PASS=your_gmail_app_password

**frontend/.env**
VITE_API_URL=http://localhost:5000