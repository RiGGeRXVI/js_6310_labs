import { readStats } from '../utils/fileHandler.js';
import { validateStats } from '../utils/validator.js';

export async function gameStatsCommand(ctx) {
  try {
    const data = readStats();
    if (!validateStats(data)) {
      ctx.reply('Ошибка: поврежден файл статистики.');
      return;
    }

    const topPlayers = data.players
        .map(p => `${p.name}: ${p.wins} побед`)
        .join('\n');

    const history = data.history
        .map(h => `${h.date}: победитель ${h.winner}`)
        .join('\n');

    const message = `Таблица рекордов:\n${topPlayers}\n\nПоследние игры:\n${history}`;
    await ctx.reply(message);
  } catch {
    ctx.reply('Не удалось загрузить статистику.');
  }
}