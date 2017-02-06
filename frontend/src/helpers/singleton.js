let singleton = Symbol();
let singletonEnforcer = Symbol();

class Singleton {

    /**
     * @param enforcer
     */
    constructor(enforcer) {
        if (enforcer !== singletonEnforcer) {
            throw "Cannot construct singleton"
        }
    }

    /**
     * @returns Singleton
     */
    static get instance() {
        if (!this[singleton]) {
            this[singleton] = new Singleton(singletonEnforcer);
        }
        return this[singleton];
    }

}

export default Singleton;