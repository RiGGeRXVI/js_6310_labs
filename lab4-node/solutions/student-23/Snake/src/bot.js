import { Telegraf } from 'telegraf';
import dotenv from 'dotenv';
import { rulesCommand } from './commands/rules.js';
import { gameStatsCommand } from './commands/gameStats.js';
import { getUserState, resetUserState } from './fsm/userState.js';
import { startApiServer } from './api/server.js';

dotenv.config();

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.command('rules', async ctx => {
  await rulesCommand(ctx);
  resetUserState(ctx.from.id);
});

bot.command('game_stats', async ctx => {
  await gameStatsCommand(ctx);
  resetUserState(ctx.from.id);
});

bot.on('text', ctx => {
  const state = getUserState(ctx.from.id);
  console.log('Пользовательское состояние:', state);
  ctx.reply('Используйте /rules или /game_stats.');
});

startApiServer();
bot.launch().then(() => console.log('Бот запущен ✅'));
