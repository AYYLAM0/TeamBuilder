const Employee = require('./employee');

class Manager extends Employee {
    constructor(name, id, email, phone) {
        super(name, id, email);
        this.phone = phone;
    }
    getPhone() {
        return this.phone;
    }
    getJob() {
        return "Manager";
    }
}

module.exports = Manager;