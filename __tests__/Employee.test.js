const { TestScheduler } = require('jest')
const Employee = require('../lib/Employee')

test('creates an employee object', () => {
    const employee = new Employee('Cheryl', '123', 'cfogerty43@gmail.com');

    expect(employee.name).toBe('Cheryl');
    expect(employee.id).toBe('123');
    expect(employee.email).toBe('cfogerty43@gmail.com');
});

test("returns employee's name", () => {
    const employee = new Employee('Cheryl', '123', 'cfogerty43@gmail.com');
    
    expect(employee.getName()).toEqual(expect.stringContaining('Cheryl'));
});

test("returns employee's id", () => {
    const employee = new Employee('Cheryl', '123', 'cfogerty43@gmail.com');

    expect(employee.getId()).toEqual(expect.stringContaining('123'));
});

test("returns employee's email", () => {
    const employee = new Employee('Cheryl', '123', 'cfogerty43@gmail.com');
    
    expect(employee.getEmail()).toEqual(expect.stringContaining('cfogerty43@gmail.com'));
});

test("returns employee's role", () => {
    const employee = new Employee('Cheryl', '123', 'cfogerty43@gmail.com');
    
    expect(employee.getRole()).toEqual(expect.stringContaining('Employee'));
});