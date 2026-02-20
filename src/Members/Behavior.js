import Base from "../Base";
import ENGINE_TYPES from "../TYPES";
/**
 * Class representing a Behavior in the
 * semantic world.
 */
class Behavior extends Base{
    /**
     * Initialize the Behavior.
     * @param {String} name 
     */
    constructor(name) {
        this.name = name;
        this.type = ENGINE_TYPES.BEHAVIOR;
    }
}

export default Behavior;