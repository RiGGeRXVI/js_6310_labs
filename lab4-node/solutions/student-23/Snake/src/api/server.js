import express from 'express';
import { readStats } from '../utils/fileHandler.js';

const app = express();
const PORT = process.env.API_PORT || 3000;

app.get('/api/game_stats', (req, res) => {
  try {
    const stats = readStats();
    res.json(stats);
  } catch {
    res.status(500).json({ error: 'Не удалось загрузить статистику.' });
  }
});

export function startApiServer() {
  app.listen(PORT, () => {
    console.log(`API сервер запущен на порту ${PORT}`);
  });
}
