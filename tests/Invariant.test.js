import { describe, it, expect } from 'vitest';
import { DALEngine } from '../src/DALEngine.js';

describe('invariantTests', () => {
    it("test invariants", async  () => {
        let d = new DALEngine({name:"Library Manager"});
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
        book.setValue({
            "uid": 1,
            "value": {
                "name": "Harry Potter"
            }
        });

        book.enforceInvariants();
    });
})