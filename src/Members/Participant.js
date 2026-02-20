import Base from "../Base";
import ENGINE_TYPES from "../TYPES";
/**
 * Class representing a participant in the design.
 */
class Participant extends Base{
    /**
     * Initialize the semantic participant.
     * @param {String} name 
     */
    constructor(name) {
        super();
        this.name = name;
        this.type = ENGINE_TYPES.PARTICIPANT;
    }
}

export default Participant;