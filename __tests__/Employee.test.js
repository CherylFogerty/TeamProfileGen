const Employee = require("../lib/Employee");

[({
employee(getEmployeeName);,
employee(getID);,
employee(getEmail);,
employee(getRole);
})]



test("gets employee's properties as an object", () => {
    const name = 'cher'
    const Employee = new Employee(name);
})
test("gets employee's properties as an object", () => {
    const ID = '15793'
    const Employee = new Employee(ID);
})
test("gets employee's properties as an object", () => {
    const name = 'cher@gmail.com'
    const Employee = new Employee(email);
})
test("gets employee's properties as an object", () => {
    const name = 'role'
    const Employee = new Employee(employee);

    expect(employee.get.getEmployeeName()).toHaveProperty('cher');
    expect(employee.get.getEmail()).toHaveProperty('email');
    expect(employee.get.getRole()).toHaveProperty('employee');
})

module.exports = Employee; 