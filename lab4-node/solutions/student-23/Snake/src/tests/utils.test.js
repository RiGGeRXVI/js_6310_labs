import { describe, it, expect } from 'vitest';
import { validateStats } from '../utils/validator.js';

describe('validateStats', () => {
  it('должен возвращать true для корректных данных', () => {
    const data = {
      players: [{ name: 'Alice', wins: 2 }],
      history: []
    };
    expect(validateStats(data)).toBe(true);
  });

  it('должен возвращать false для неправильных данных', () => {
    expect(validateStats(null)).toBe(false);
    expect(validateStats({ players: 'abc' })).toBe(false);
  });
});
