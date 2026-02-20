import Base from "../Base";
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
        this.type = "BehavioralControlGraphNode";
    }

}

export default GraphNode;