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
     * @param {Array} gotoBehaviors 
     * @returns 
     */
    addNode (behavior, gotoBehaviors) {
        const node = new GraphNode(behavior, gotoBehaviors);
        this.nodes.push(node);
        return node;
    }
}

export default BehavioralControlGraph;