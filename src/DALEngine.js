import Participant from "./Participant";

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
    }

    /**
     * Adds a participant type.
     */
    addParticipant(name) {
        this.participants.push(new Participant(name));
    }

    sayHello() {
        console.log(`Hello my name is ${this.name}!!`);
    }
}
