import Base from "../Base";
import ENGINE_TYPES from "../TYPES";
import Participant from "./Participant";
/**
 * Class representing a Behavior in the design.
 */
class Behavior extends Base {

    /**
     * Initialize the Behavior.
     * @param {String} name
     * @param args
     */
    constructor (args) {

        super();
        this.type = ENGINE_TYPES.BEHAVIOR;
        this.participants = [];
        this.invalidWorldState = false;
        if (typeof args === "object" && args !== null) {

            if (Object.hasOwn(args, "uid")) {

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

    /**
     * Set the participant value.
     * @param {String} participantName
     * @param {*} value
     */
    setParticipantValue (participantName, value) {

        for (let i = 0; i < this.participants.length; i++) {

            const participant = this.participants[i];
            if (participant.name === participantName) {

                participant.value = value;
                const violation = participant.enforceInvariants();
                if (violation) {

                    this.invalidWorldState = true;

                }

            }

        }

    }

}

export default Behavior;
