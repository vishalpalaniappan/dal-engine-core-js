import Base from "../Base";
import ENGINE_TYPES from "../TYPES";
/**
 * Class representing a behavioral control graph node.
 */
class GraphNode extends Base{
    /**
     * Initialize the node.
     * @param {String} name 
     */
    constructor(name) {
        super();
        this.type = ENGINE_TYPES.GRAPH_NODE;
    }

}

export default GraphNode;