import Participant from "./Participant";
import Behavior from "./Behavior";
import Invariant from "./Invariant";
import Primitive from "./Primitive";

/**
 * An object representing an engine written in Design
 * abstraction language. It exposes functions 
 * configure the engine through the DAL specification.
 * 
 * The execution of an program instrumented with the
 * same design be used to step through the design
 * while the engine automatically debugs the execution.
 */
export class DALEngine {
    constructor(name) {
        this.name = name;
        this.participants = [];
        this.behaviors = [];
        this.primitives = [];
        this.invariants = [];
    }

    /**
     * Adds a participant type.
     */
    addParticipant(name) {
        this.participants.push(new Participant(name));
    }

    /**
     * Adds a behavior.
     */
    addBehavior(name) {
        this.behaviors.push(new Behavior(name));
    }

    /**
     * Adds a invariant.
     */
    addInvariant(name) {
        this.invariants.push(new Invariant(name));
    }

    /**
     * Adds a invariant.
     */
    addInvariant(name) {
        this.invariants.push(new Invariant(name));
    }

    /**
     * Adds a primitive.
     */
    addPrimitive(name) {
        this.primitives.push(new Primitive(name));
    }
}
