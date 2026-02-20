import { describe, it, expect } from 'vitest';
import { DAL } from '../src/DAL.js';

describe('DAL', () => {
  it('sets the name correctly', () => {
    const dalInstance = new DAL("name");
    expect(dalInstance.name).toBe("name");
  });
});