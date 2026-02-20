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
}

export default BehavioralControlGraph;