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
    constructor(args) {
        super();
        this.type = ENGINE_TYPES.INVARIANT;
        this.invariants = [];
        if (typeof args === "object" && args !== null) {
            if (Object.hasOwn(args, 'uid')) {
                this.loadParticipantFromJSON(args);
            } else {
                this.name = args.name;
            }
        }
    }

    /**
     * Loads the participant from a JSON object.
     * @param {Object} participantJSON
     */
    loadParticipantFromJSON (participantJSON) {
        for (const [key, value] of Object.entries(participantJSON)) {
            if (key === "invariants") {
                value.forEach(node => this.invariants.push(new Invariant(node)));
            } else {
                this[key] = participantJSON[key];
            }
        };
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

    /**
     * Sets the value of the participant.
     * @param {*} value 
     */
    setValue(value) {
        this.value = value;
    }

    /**
     * Enforces the particiants invariants.
     */
    enforceInvariants() {
        this.violatedInvariant = false
        this.invariantViolationCount = 0;
        for (let i = 0; i < this.invariants.length; i++) {
            const invariant = this.invariants[i];
            const violatedInvariant = invariant.evaluate(this.value);
            if (violatedInvariant) {
                this.violatedInvariant = true;
                this.invariantViolationCount++;
            }
        }
    }
}

export default Participant;