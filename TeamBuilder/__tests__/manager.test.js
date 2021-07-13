const Manager = require('../lib/manager');

describe("Manager", () => {
    it("should return the office phone", () => {
        const phone = 1
        const manager = new Manager("beau", 1, "beau@cool.com", phone)

        expect(manager.phone).toEqual(phone)
    })
    describe("getPhone", () => {
        it("should return the phone", () => {
            const phone = 1
            const newphone = new Manager("beau", 1, "beau@cool.com", phone)

            expect(newphone.getPhone()).toEqual(phone)
        })
    })

    describe("getJob", () => {
        it("should return the Job", () => {
            const Job = "Manager"
            const newJob = new Manager(Job)

            expect(newJob.getJob()).toEqual(Job)
        })
    })
})
