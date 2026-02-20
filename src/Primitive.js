import Base from "./Base";
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
        this.type = "Primitive";
    }
}

export default Primitive;