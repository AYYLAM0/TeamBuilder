const Employee = require("../lib/employee");

describe("Employee", () => {
    it("should return the name", () => {
        const name = "Joe"
        const employee = new Employee(name)

        expect(employee.name).toEqual(name)
    })

    it("should return the id", () => {
        const id = 1
        const employee = new Employee("Beau", id)

        expect(employee.id).toEqual(id)
    })

    it("should return the email", () => {
        const email = "beau@cool.com"
        const employee = new Employee("Beau", 1, email)

        expect(employee.email).toEqual(email)
    })

    describe("getName", () => {
        it("should return the name", () => {
            const name = "name"
            const newName = new Employee(name)

            expect(newName.getName()).toEqual(name)
        })
    })

    describe("getId", () => {
        it("should return the id", () => {
        const id = 1
        const newId = new Employee("name", id)

        expect(newId.getId()).toEqual(id)
        })
    })

    describe("getEmail", () => {
        it("should return the email", () => {
            const email = "email"
            const newEmail = new Employee("name", 1, email)

            expect(newEmail.getEmail()).toEqual(email)
        })
    })

    describe("getJob", () => {
        it("should return the Job", () => {
            const Job = "Employee"
            const newJob = new Employee()

            expect(newJob.getJob()).toEqual(Job)
        })
    })
})
