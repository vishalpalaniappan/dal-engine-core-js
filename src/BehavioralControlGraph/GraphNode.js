import Base from "../Base";
import ENGINE_TYPES from "../TYPES";
import Behavior from "../Members/Behavior";
/**
 * Class representing a behavioral control graph node.
 */
class GraphNode extends Base{
    /**
     * Initialize the node.
     * @param {String} name 
     */
    constructor(args) {
        super();
        this.type = ENGINE_TYPES.GRAPH_NODE;
        this.goToBehaviors = [];
        if (typeof args === "object" && args !== null) {
            if (Object.hasOwn(args, 'uid')) {
                this.loadNodeFromJSON(args);
            } else {
                for (const [key, value] of Object.entries(args)) {
                    this[key] = value;
                }
            }
        }
    }
    
    /**
     * Loads the nodes from a JSON object.
     * @param {Object} nodesJSON
     */
    loadNodeFromJSON (nodesJSON) {
        for (const [key, value] of Object.entries(nodesJSON)) {
            if (key === "behavior") {
                this.behavior = new Behavior(value);
            } else if (key === "goToBehaviors") {
                value.forEach(node => this.goToBehaviors.push(new Behavior(node)));
            } else {
                this[key] = nodesJSON[key];
            }
        };
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