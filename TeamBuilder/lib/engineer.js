const Employee = require('./employee');

class Engineer extends Employee {
    constructor(name, id, email, Git) {
        super(name, id, email);
        this.Git = Git;
    }
    getGit() {
        return this.Git;
    }
    getJob() {
        return "Engineer";
    }
}

module.exports = Engineer;