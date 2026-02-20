import Base from "../Base";
import ENGINE_TYPES from "../TYPES";
/**
 * Class representing a Invariant in the design.
 */
class Invariant extends Base{
    /**
     * Initialize the Invariant.
     * @param {String} name 
     */
    constructor(name) {
        super();
        this.name = name;
        this.type = ENGINE_TYPES.INVARIANT;
    }
}

export default Invariant;