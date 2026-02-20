/**
 * Base class for all objects in design.
 */
class Base {
    /**
     * Initialize the base class.
     * @param {String} name 
     */
    constructor() {
        this.uid = crypto.randomUUID();
    }

    getType() {
        return this.type;
    }
}

export default Base;