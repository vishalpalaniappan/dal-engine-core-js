import Base from "../Base";
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
        this.type = "Behavior";
    }
}

export default Behavior;