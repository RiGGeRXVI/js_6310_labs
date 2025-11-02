import fs from 'fs';
import path from 'path';

const statsPath = path.resolve('src/data/stats.json');

export function readStats() {
  if (!fs.existsSync(statsPath)) {
    throw new Error('Файл статистики не найден.');
  }
  const json = fs.readFileSync(statsPath, 'utf8');
  return JSON.parse(json);
}
