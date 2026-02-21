import Base from "../Base";
import GraphNode from "./GraphNode";
import ENGINE_TYPES from "../TYPES";
import Behavior from "../Members/Behavior";
import InvalidTransitionError from "../Errors/InvalidTransitionError";
import UnknownBehaviorError from "../Errors/UnknownBehaviorError";

/**
 * Class representing the behavioral control graph.
 */
class BehavioralControlGraph extends Base{
    /**
     * Initialize the behavioral control graph.
     * @param {String} name 
     */
    constructor(name) {
        super();
        this.type = ENGINE_TYPES.BEHAVIORAL_CONTROL_GRAPH;
        this.nodes = [];
        this.currentNode = null;
    }
    
    /**
     * Adds a node to the graph.
     * @param {Behavior} behavior 
     * @param {Array} goToBehaviors 
     * @returns 
     */
    addNode (behavior, goToBehaviors) {
        const node = new GraphNode(behavior, goToBehaviors);
        this.nodes.push(node);
        return node;
    }


    /**
     * Finds the given node given the behavior name.
     * @param {String} behaviorName 
     * @throws {UnknownBehaviorError}
     * @returns 
     */
    findNode (behaviorName) {
        for (let i = 0; i < this.nodes.length; i++) {
            const behavior = this.nodes[i].behavior;
            if (behavior.name === behaviorName) {
                return this.nodes[i];
            }
        }
        throw new UnknownBehaviorError(behaviorName);
    }

    /**
     * Sets the active node given the behavior name.
     * The execution provides the next observed
     * behavior and the active node indicates if
     * if it is a valid transition.
     * 
     * 
     * @param {String} behaviorName 
     */
    setCurrentBehavior (behaviorName) {
        const node = this.findNode(behaviorName);
        /**
         * TODO: Ensure it is atomic because the execution
         * will only set a behavior when its the first one.
         * It will walk using goToBehavior after that.
         */
        this.currentNode = node;
    }

    /**
     * Check if the observed behavior is a valid transition
     * given the current node.
     * @param {String} nextBehaviorName 
     * @throws {InvalidTransitionError} Raised when the provided behavior is not a valid transition.
     */
    goToBehavior (nextBehaviorName) {
        if (this.currentNode.isValidGoToBehavior(nextBehaviorName)) {
            this.currentNode = this.findNode(nextBehaviorName);
        } else {
            throw new InvalidTransitionError(this.currentNode.behavior.name, nextBehaviorName);
        }
    }
}

export default BehavioralControlGraph;