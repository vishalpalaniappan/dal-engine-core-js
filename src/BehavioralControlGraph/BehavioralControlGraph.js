import Base from "../Base";
import GraphNode from "./GraphNode";
import ENGINE_TYPES from "../TYPES";
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
     */
    addNode () {
        const node = new GraphNode();
        this.nodes.push(node);
    }
}

export default BehavioralControlGraph;