import { describe, it, expect } from 'vitest';
import { DALEngine } from '../src/DALEngine.js';
import ENGINE_TYPES from '../src/TYPES.js';

describe('DALEngine', () => {
    it('sets the name correctly', () => {
        const dalInstance = new DALEngine("Library Manager");
        expect(dalInstance.name).toBe("Library Manager");
    });

    
    it('participant is added correctly', () => {
        const d = new DALEngine("Library Manager");
        const participant = d.addParticipant("librarian");
        expect(participant).toHaveProperty("name");
        expect(participant.name).toBe("librarian");
    });

    
    it('invariant is added correctly', () => {
        const d = new DALEngine("Library Manager");
        const invariant = d.addInvariant("minLength");
        expect(invariant).toHaveProperty("name");
        expect(invariant.name).toBe("minLength");
    });
    
    it('adds node to graph', () => {
        const d = new DALEngine("Library Manager");
        const behavior1 = d.addBehavior("AcceptBookFromUser");
        const behavior2 = d.addBehavior("AddBookToBasket");
        const goToBehaviors = [behavior2];

        const node = d.graph.addNode(behavior1, goToBehaviors)

        const nodeType = node.type;
        expect(nodeType).toBe(ENGINE_TYPES.GRAPH_NODE);
        expect(node.behavior).toStrictEqual(behavior1);
        expect(node.goToBehaviors).toStrictEqual([behavior2]);

        const foundNode = d.graph.findNode("AcceptBookFromUser");
        expect(foundNode).toStrictEqual(node);
    });
    
    it('find node that was added using behavior name', () => {
        const d = new DALEngine("Library Manager");
        const behavior1 = d.addBehavior("AcceptBookFromUser");
        const behavior2 = d.addBehavior("AddBookToBasket");
        const node = d.graph.addNode(behavior1, [behavior2])

        const foundNode = d.graph.findNode("AcceptBookFromUser");
        expect(foundNode).toStrictEqual(node);
    });

});