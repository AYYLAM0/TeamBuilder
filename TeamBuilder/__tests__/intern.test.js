const Intern = require('../lib/intern');

describe("Intern", () => {
    it("should return the college", () => {
        const college = "college"
        const intern = new Intern("beau", 1, "beau@cool.com", college)

        expect(intern.college).toEqual(college)
    })

    describe("getCollege", () => {
        it("should return the input value", () => {
            const college = "college"
            const newcollege = new Intern("beau", 1, "beau@cool.com", college)

            expect(newcollege.getCollege()).toEqual(college)
        })
    })

    describe("getJob", () => {
        it("should return the input value", () => {
            const Job = "Intern"
            const newJob = new Intern(Job)

            expect(newJob.getJob()).toEqual(Job)
        })
    })
})