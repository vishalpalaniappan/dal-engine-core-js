/**
 * Class representing a participant in the
 * semantic world.
 */
class Participant {
    /**
     * Initialize the semantic participant.
     * @param {String} name 
     */
    constructor(name) {
        this.name = name;
        console.log(`Created participant with name ${name}`)
    }
}

export default Participant;