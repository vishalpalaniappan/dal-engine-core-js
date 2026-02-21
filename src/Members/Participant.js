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
        this.invariants = [];
    }

    /**
     * Adds an invariant to the participant.
     * @param {Invariant} invariant 
     * @returns 
     */
    addInvariant(invariant) {
        this.invariants.push(invariant);
        return invariant;
    }
}

export default Participant;