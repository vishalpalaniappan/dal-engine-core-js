import { describe, it, expect } from 'vitest';
import { DALEngine } from '../src/DALEngine.js';
import { writeFile, readFile, unlink } from 'fs/promises'
import { resolve } from 'path'

describe('invariantTests', () => {
    it("test invariants", async  () => {
        let d = new DALEngine({name:"Library Manager"});

        // Create book participant and add invariant
        const book = d.createParticipant({name:"book"});
        const invariant = d.createInvariant(
            {
                "name": "MinLengthConstraint",
                "rule": {
                    "type":"minLength",
                    "keys": ["value","name"],
                    "value": 1
                }
            }
        );
        book.addInvariant(invariant);

        // Set the value and enforce invariants
        book.setValue({
            "uid": 1,
            "value": {
                "name": ""
            }
        });
        book.enforceInvariants();
        expect(book.violatedInvariant).toBe(true);
        expect(book.invariantViolationCount).toBe(1);

        // Set another value and enforce invariant
        book.setValue({
            "uid": 1,
            "value": {
                "name": "Harry Potter"
            }
        });
        book.enforceInvariants();
        expect(book.violatedInvariant).toBe(false);
        expect(book.invariantViolationCount).toBe(0);
    });
})