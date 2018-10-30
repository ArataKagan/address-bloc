const MenuController = require("../controllers/MenuController");

describe( "MenuController", () => {
    describe("getContactCount()", () => {
        it("should return 0 when no contacts are in the book", () => {
            const menu = new MenuController(); 
            expect(menu.getContactCount()).toBe(0)
        });
        it("should return 1 when there is exactly one contact in the book", () => {
            const menu = new MenuController();
            menu.contacts.push("Bob");
            expect(menu.getContactCount()).toBe(1)
        });
    });
});

