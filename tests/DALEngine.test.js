import { describe, it, expect } from 'vitest';
import { DALEngine } from '../src/DALEngine.js';
import ENGINE_TYPES from '../src/TYPES.js';
import InvalidTransitionError from '../src/Errors/InvalidTransitionError.js';
import UnknownBehaviorError from '../src/Errors/UnknownBehaviorError.js';

describe('DALEngine', () => {
    it('sets the name correctly', () => {
        const dalInstance = new DALEngine("Library Manager");
        expect(dalInstance.name).toBe("Library Manager");
    });
    
    it('adds node to graph', () => {
        const d = new DALEngine("Library Manager");
        const behavior1 = d.createBehavior("AcceptBookFromUser");
        const behavior2 = d.createBehavior("AddBookToBasket");
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
        const behavior1 = d.createBehavior("AcceptBookFromUser");
        const behavior2 = d.createBehavior("AddBookToBasket");
        const node = d.graph.addNode(behavior1, [behavior2])

        const foundNode = d.graph.findNode("AcceptBookFromUser");
        expect(foundNode).toStrictEqual(node);
    });
    
    it('find node and check if observed behavior is valid transition', () => {
        const d = new DALEngine("Library Manager");
        const behavior1 = d.createBehavior("AcceptBookFromUser");
        const behavior2 = d.createBehavior("AddBookToBasket");
        const behavior3 = d.createBehavior("AnotherBehavior");
        d.graph.addNode(behavior1, [behavior2, behavior3])
        d.graph.addNode(behavior2, [])
        d.graph.addNode(behavior3, [])

        // Misspell behavior name to trigger unknown behavior error
        expect(() => {
            d.graph.setCurrentBehavior("AcceptBookromUser");
        }).toThrow(UnknownBehaviorError);
        
        d.graph.setCurrentBehavior("AcceptBookFromUser");
        expect(d.graph.currentNode.behavior).toBe(behavior1);

        d.graph.goToBehavior("AddBookToBasket")
        expect(d.graph.currentNode.behavior).toBe(behavior2);
        
        // Reset current behavior so transition is valid
        d.graph.setCurrentBehavior("AcceptBookFromUser");
        d.graph.goToBehavior("AnotherBehavior")
        expect(d.graph.currentNode.behavior).toBe(behavior3);

        // Raises error because current behavior is "AnotherBehavior"
        // and it does not transition to itself.
        expect(() => {
            d.graph.goToBehavior("AnotherBehavior")
        }).toThrow(InvalidTransitionError);

        // Reset the current behavior and then go to a behavior
        // which is misspelled and expect an invalid transition error
        expect(() => {
            d.graph.setCurrentBehavior("AcceptBookFromUser");
            d.graph.goToBehavior("AddBookToasket")
        }).toThrow(InvalidTransitionError);
    });

});