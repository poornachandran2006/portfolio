import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { contactLimiter } from './middleware/rateLimiter.js';
import contactRouter from './routes/contact.js';

dotenv.config();

const app = express();

app.use(cors({
  origin: process.env.FRONTEND_URL,
  methods: ['GET', 'POST'],
}));

app.use(express.json());

app.get('/api/health', (_, res) => res.json({ status: 'ok' }));
app.use('/api/contact', contactLimiter, contactRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend running on http://localhost:${PORT}`));