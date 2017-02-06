import _ from 'lodash';

let singleton = Symbol();
let singletonEnforcer = Symbol();

class Application {
    constructor(enforcer) {

        if (enforcer !== singletonEnforcer) {
            throw "Cannot construct singleton"
        }

        this.jobs = [];
    }

    addJob(job) {
        const jobItem = _.find(this.jobs, {id: job.id});
        if (!jobItem) {
            this.jobs.push(job);
        }
    }

    removeJob(job) {
        const jobItem = _.remove(this.jobs, {
            id: job.id
        });
    }

    getJobs() {
        return _.map(this.jobs, _.clone);
    }

    getProjectsByJobs() {

    }

    static get instance() {
        if (!this[singleton]) {
            this[singleton] = new Application(singletonEnforcer);
        }
        return this[singleton];
    }
}

const app = Application.instance;

export default app;