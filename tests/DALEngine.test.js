import { describe, it, expect } from 'vitest';
import { DALEngine } from '../src/DALEngine.js';

describe('DALEngine', () => {
  it('sets the name correctly', () => {
    const dalInstance = new DALEngine("Library Manager");
    expect(dalInstance.name).toBe("Library Manager");
  });

  
  it('participant is added correctly', () => {
    const d = new DALEngine("Library Manager");
    d.addParticipant("librarian");
    const lastParticipant = d.participants[d.participants.length -1];
    expect(lastParticipant).toHaveProperty("name");
    expect(lastParticipant.name).toBe("librarian");
  });

  
  it('invariant is added correctly', () => {
    const d = new DALEngine("Library Manager");
    d.addInvariant("minLength");
    const lastInvariant = d.invariants[d.invariants.length -1];
    expect(lastInvariant).toHaveProperty("name");
    expect(lastInvariant.name).toBe("minLength");
  });
});