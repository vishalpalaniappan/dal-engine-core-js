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
     * Add a participant to the behavior.
     */
    addParticpant (name) {
        const participant = new Participant(name);
        this.participants.push(participant);
        return participant;
    }
}

export default Behavior;