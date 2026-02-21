import Base from "../Base";
import ENGINE_TYPES from "../TYPES";
/**
 * Class representing a Invariant in the design.
 */
class Invariant extends Base{
    /**
     * Initialize the Invariant.
     * @param {String} name 
     */
    constructor(args) {
        super();
        this.type = ENGINE_TYPES.INVARIANT;
        if (typeof args === "object" && args !== null) {
            if (Object.hasOwn(args, 'uid')) {
                this.loadInvariantFromJSON(args);
            } else {
                this.name = args.name;
                this.rule = args.rule;
            }
        }
    }

    /**
     * Loads the participant from a JSON object.
     * @param {Object} invariantJSON
     */
    loadInvariantFromJSON (invariantJSON) {
        for (const [key, value] of Object.entries(invariantJSON)) {
            this[key] = invariantJSON[key];
        };
    }

    /**
     * Evaluate the invariant.
     */
    evaluate() {
        console.log("Evaluating the invariant");
    }
}

export default Invariant;