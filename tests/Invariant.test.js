import { describe, it, expect } from 'vitest';
import { DALEngine } from '../src/DALEngine.js';
import { writeFile, readFile, unlink } from 'fs/promises'
import { resolve } from 'path'

describe('invariantTests', () => {
    it("test invariant directly through participants", async  () => {
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
        expect(book.invariantViolated).toBe(true);
        expect(book.invariantViolationCount).toBe(1);

        // Set another value and enforce invariant
        book.setValue({
            "uid": 1,
            "value": {
                "name": "Harry Potter"
            }
        });
        book.enforceInvariants();
        expect(book.invariantViolated).toBe(false);
        expect(book.invariantViolationCount).toBe(0);
    });


    it("test invariant violaton of behavior", async  () => {
        let d = new DALEngine({name:"Library Manager"});

        // Create book participant and add invariant to it
        const book = d.createParticipant({name:"book"});
        book.addInvariant(d.createInvariant(
            {
                "name": "MinLengthConstraint",
                "rule": {
                    "type":"minLength",
                    "keys": ["value","name"],
                    "value": 1
                }
            }
        ));

        // Create behavior and participant
        const behavior1 = d.createBehavior({name:"AcceptBookFromUser"});
        behavior1.addParticpant(book);
        d.graph.addNode(behavior1, []);

        // Add value that respects invariant and expect valid world state
        behavior1.setParticipantValue("book", {
            "uid": 1,
            "value": {
                "name": "Harry Potter and Chamber of Secrets"
            }
        })
        expect(behavior1.invalidWorldState).toBe(false);

        
        // Add value that violates invariant and expect invalid world state
        behavior1.setParticipantValue("book", {
            "uid": 1,
            "value": {
                "name": ""
            }
        })
        expect(behavior1.invalidWorldState).toBe(true);

        // Write to file for inspection
        const filePath = resolve(__dirname, './temp/temp.json')
        await writeFile(filePath, d.serialize())
    });
})