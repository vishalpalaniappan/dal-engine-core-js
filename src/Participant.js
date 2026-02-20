import Base from "./Base";
/**
 * Class representing a participant in the
 * semantic world.
 */
class Participant extends Base{
    /**
     * Initialize the semantic participant.
     * @param {String} name 
     */
    constructor(name) {
        super();
        this.name = name;
        this.type = "Participant";
    }
}

export default Participant;