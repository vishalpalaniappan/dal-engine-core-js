import Base from "../Base";
import ENGINE_TYPES from "../TYPES";
import Invariant from "./Invariant";
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

    /**
     * Adds an invariant to a participant
     */
    addInvariant(name) {
        const invariant = new Invariant(name);
        this.invariants.push(invariant);
        return invariant;
    }
}

export default Participant;