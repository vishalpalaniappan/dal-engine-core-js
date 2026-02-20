import Base from "../Base";
import ENGINE_TYPES from "../TYPES";
/**
 * Class representing a Primitives in the design.
 */
class Primitive extends Base{
    /**
     * Initialize the Primitive.
     * @param {String} name 
     */
    constructor(name) {
        super();
        this.name = name;
        this.type = ENGINE_TYPES.PRIMITIVE;
    }
}

export default Primitive;