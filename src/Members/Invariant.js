import Base from "../Base";
import ENGINE_TYPES from "../TYPES";
/**
 * Class representing a Invariant in the design.
 */
class Invariant extends Base {
    /**
     * Initialize the Invariant.
     * @param {String} name
     * @param args
     */
    constructor (args) {
        super();
        this.type = ENGINE_TYPES.INVARIANT;
        this.invariantViolated = false
        if (typeof args === "object" && args !== null) {
            if (Object.hasOwn(args, "uid")) {
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
            this[key] = value;
        };
        // Reset these because they are set by the execution
        this.invariantViolated = null;
        this.value = null;
    }

    /**
     * Evaluate the invariant.
     * @param {*} value
     * @returns {Boolean}
     */
    evaluate (value) {
        this.invariantViolated = false;
        if (this.rule.type === "minLength") {
            this.enforceMinLength(value);
        }
        return this.invariantViolated;
    }

    /**
     * Enforce the string min length invariant
     * @param value
     */
    enforceMinLength (value) {
        if ("keys" in this.rule) {
            for (let i = 0; i < this.rule["keys"].length; i++) {
                console.log(this.rule["keys"][i], value)
                value = value[this.rule["keys"][i]];
            }
        };
        if (value === null || typeof value !== "string" || value.length < this.rule.value) {
            this.invariantViolated = true;
        }
    }
}

export default Invariant;
