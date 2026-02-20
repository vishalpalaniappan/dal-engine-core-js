import Participant from "./Members/Participant";
import Behavior from "./Members/Behavior";
import Invariant from "./Members/Invariant";
import Primitive from "./Members/Primitive";
import BehavioralControlGraph from "./BehavioralControlGraph/BehavioralControlGraph";

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
        this.graph = new BehavioralControlGraph();
        this.participants = [];
        this.behaviors = [];
        this.primitives = [];
        this.invariants = [];
    }

    /**
     * Adds a participant type.
     */
    addParticipant(name) {
        const participant = new Participant(name);
        this.participants.push(participant);
        return participant;
    }

    /**
     * Adds a behavior.
     */
    addBehavior(name) {
        const behavior = new Behavior(name);
        this.behaviors.push(behavior);
        return behavior;
    }

    /**
     * Adds a invariant.
     */
    addInvariant(name) {
        const invariant = new Invariant(name);
        this.invariants.push(invariant);
        return invariant;
    }

    /**
     * Adds a primitive.
     */
    addPrimitive(name) {
        const primitive = new Primitive(name);
        this.primitives.push(primitive);
        return primitive;
    }
}
