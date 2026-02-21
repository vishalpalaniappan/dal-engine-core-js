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
    constructor(args) {
        super();
        this.type = ENGINE_TYPES.BEHAVIOR;
        this.participants = [];
        if (typeof args === "object" && args !== null) {
            if (Object.hasOwn(args, 'uid')) {
                this.loadBehaviorFromJSON(args);
            } else {
                this.name = args.name;
            }
        }
    }

    /**
     * Loads the behavior from a JSON object.
     * @param {Object} behaviorJSON
     */
    loadBehaviorFromJSON (behaviorJSON) {
        for (const [key, value] of Object.entries(behaviorJSON)) {
            if (key === "participants") {
                value.forEach(node => this.participants.push(new Participant(node)));
            } else {
                this[key] = behaviorJSON[key];
            }
        };
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