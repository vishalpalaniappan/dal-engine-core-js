import Base from "../Base";
import ENGINE_TYPES from "../TYPES";
import Participant from "./Participant";
/**
 * Class representing a Behavior in the design.
 */
class Behavior extends Base{
    /**
     * Initialize the Behavior.
     * @param {String} name 
     */
    constructor(name) {
        super();
        this.name = name;
        this.type = ENGINE_TYPES.BEHAVIOR;
        this.participants = [];
    }

    /**
     * Adds a participant to the behavior.
     * @param {Participant} participant 
     * @returns 
     */
    addParticpant (participant) {
        this.participants.push(participant);
        return participant;
    }
}

export default Behavior;