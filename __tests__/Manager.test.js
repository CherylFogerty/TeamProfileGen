const Manager = require("../lib/Manager");

[({
manager(getEmployeeName);,
manager(getID);,
manager(getEmail);,
manager(getRole);
})]

test("gets manager's properties as an object", () => {
    const name = 'cher'
    const Manager = new Manager(name);
})
test("gets manager's properties as an object", () => {
    const ID = '15793'
    const Manager = new Manager(ID);
})
test("gets manager's properties as an object", () => {
    const name = 'cher@gmail.com'
    const Manager = new Manager(email);
})
test("gets manager's properties as an object", () => {
    const name = 'role'
    const Manager = new Manager(manager);

    test("gets manager's properties as an object", () => {
        const officeNumber = '10'
        const Manager = new Manager(officeNumber);
    })

    expect(manager.get.getEmployeeName()).toHaveProperty('cher');
    expect(manager.get.getID()).toHaveProperty('ID');
    expect(manager.get.getEmail()).toHaveProperty('email');
    expect(manager.get.getRole()).toHaveProperty('employee');
})

module.exports = Manager; 