// backend/server.js
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import symptomRouter from './routes/symptomRoutes.js';

dotenv.config();
console.log('Loaded OPENAI_API_KEY starts with:', process.env.OPENAI_API_KEY?.slice(0,4));
const app = express();

// ── Middleware ──────────────────────────────────
app.use(cors());
app.use(express.json());

// ── Routes ──────────────────────────────────────
app.use('/api/symptoms', symptomRouter);

// ── Start ───────────────────────────────────────
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
