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
}

export default Base;