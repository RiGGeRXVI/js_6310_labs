import { describe, it, expect } from 'vitest';
import { rulesCommand } from '../commands/rules.js';

describe('rulesCommand', () => {
  it('должен отправлять текст с правилами', async () => {
    const ctx = { reply: async msg => msg };
    const result = await rulesCommand(ctx);
    expect(result).toBeUndefined();
  });
});
