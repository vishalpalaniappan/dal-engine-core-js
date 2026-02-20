import Base from "../Base";
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
        this.type = "Invariant";
    }
}

export default Invariant;