export function validateStats(data) {
  if (!data || typeof data !== 'object') return false;
  if (!Array.isArray(data.players) || !Array.isArray(data.history)) return false;
  return data.players.every(p => 'name' in p && 'wins' in p);
}
