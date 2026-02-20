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
    constructor(behavior, goToBehaviors) {
        super();
        this.type = ENGINE_TYPES.GRAPH_NODE;
        this.behavior = behavior;
        this.goToBehaviors = goToBehaviors;
    }

    /**
     * Checks if the provided behavior name is a valid
     * behavior that the control flow selects as a 
     * result of the this nodes state transformation. i.e.
     * is this behavior in the goToBehavior list.
     * @param {String} behaviorName 
     */
    isValidGoToBehavior (behaviorName) {
        for (let i = 0; i < this.goToBehaviors.length; i++) {
            const behavior = this.goToBehaviors[i];
            if (behavior.name === behaviorName){
                return true;
            }
        }
        return false;
    }

}

export default GraphNode;