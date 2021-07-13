const Engineer = require('../lib/engineer');

describe("Engineer", () => {
    it("should return the Git username", () => {
        const Git = "Git"
        const engineer = new Engineer("beau", 1, "beau@cool.com", Git)

        expect(engineer.Git).toEqual(Git)
    })

    describe("getGit", () => {
        it("should return the Git username", () => {
            const Git = "Git"
            const newGit = new Engineer("beau", 1, "beau@cool.com", Git)

            expect(newGit.getGit()).toEqual(Git)
        })
    })

    describe("getJob", () => {
        it("should return the Job", () => {
            const Job = "Engineer"
            const newJob = new Engineer(Job)

            expect(newJob.getJob()).toEqual(Job)
        })
    })
})