import Participant from "./Members/Participant";
import Behavior from "./Members/Behavior";
import Invariant from "./Members/Invariant";
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
    constructor(args) {
        this.graph = new BehavioralControlGraph();
        for (const [key, value] of Object.entries(args)) {
            this[key] = value;
        }
    }

    /**
     * Exports the behavioral control graph to JSON text.
     */
    serialize () {
        return JSON.stringify(this.graph);
    }

    /**
     * Import the behavioral control graph from JSON text.
     */
    deserialize(jsonText) {
        this.graph = new BehavioralControlGraph();
        this.graph.loadGraphFromJSON(JSON.parse(jsonText));
    }

    /**
     * Creates a participant.
     */
    createParticipant(name) {
        return new Participant(name);
    }

    /**
     * Creates a behavior.
     */
    createBehavior(name) {
        return new Behavior(name);
    }

    /**
     * Creates an invariant.
     */
    createInvariant(name) {
        return new Invariant(name);
    }
}
