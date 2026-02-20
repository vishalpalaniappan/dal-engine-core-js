import Base from "../Base";
import GraphNode from "./GraphNode";
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
        this.type = "BeahvioralControlGraph";
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