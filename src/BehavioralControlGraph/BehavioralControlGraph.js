import Base from "../Base";
import GraphNode from "./GraphNode";
import ENGINE_TYPES from "../TYPES";
import Behavior from "../Members/Behavior";
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
     * Finds the node in the graph given the behavior.
     * @param {String} behaviorName 
     */
    findNode (behaviorName) {
        for (let i = 0; i < this.nodes.length; i++) {
            const node = this.nodes[i];
            const behavior = node.behavior;
            if (behavior.name === behaviorName) {
                return node;
            }
        }
        return null;
    }

    /**
     * Given a behavior and next observed behavior, check
     * if this is a valid transition to make.
     * @param {String} prevBehaviorName 
     * @param {String} currBehaviorName 
     */
    isSelectableBehavior (prevBehaviorName, currBehaviorName) {
        const foundNode = this.findNode(prevBehaviorName);
        if (!foundNode) {
            console.error("Previous behavior could not be found");
            // TODO: This is a larger error, think of stratergy for
            // how to present this.
            return false;
        }
        if (foundNode.isValidGoToBehavior(currBehaviorName)) {
            return true;
        }
        return false;
    }
}

export default BehavioralControlGraph;