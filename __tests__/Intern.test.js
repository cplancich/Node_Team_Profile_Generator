const Intern = require('../lib/Intern');

describe("Intern", () => {
    describe("Initialization", () => {
        it("should return an object with values passed in as name, id, and email", () => {
            const obj = new Intern("Colin", "32", "hotmailguy@gmail.com");

            expect(obj.name).toBe("Colin")
            expect(obj.id).toBe("32")
            expect(obj.email).toBe("hotmailguy@gmail.com")
        })
    })
    describe("getName",() => {
        it("should return the name", () => {
            const obj = new Intern("Colin", "32", "hotmailguy@gmail.com");

            expect(obj.getName()).toBe("Colin")
            
        })
    })
    describe("getId",() => {
        it("should return the ID", () => {
            const obj = new Intern("Colin", "32", "hotmailguy@gmail.com");

            expect(obj.getId()).toBe("32")
            
        })
    })
    describe("getEmail",() => {
        it("should return the Email", () => {
            const obj = new Intern("Colin", "32", "hotmailguy@gmail.com");

            expect(obj.getEmail()).toBe("hotmailguy@gmail.com")
            
        })
    })
    describe("getRole",() => {
        it("should return the role", () => {
            const obj = new Intern("Colin", "32", "hotmailguy@gmail.com");

            expect(obj.getRole()).toBe("Intern")
            
        })
    })
})