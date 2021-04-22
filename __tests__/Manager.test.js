const { TestScheduler } = require('jest')
const Manager = require('../lib/Manager')

test('creates an manager object', () => {
    const manager = new Manager('Cheryl', '123', 'cfogerty43@gmail.com', '210');

    expect(manager.name).toBe('Cheryl');
    expect(manager.id).toBe('123');
    expect(manager.email).toBe('cfogerty43@gmail.com');
    expect(manager.officeNumber).toBe('210');
});

test("returns manager's name", () => {
    const manager = new Manager('Cheryl', '123', 'cfogerty43@gmail.com', '210');

    expect(manager.getName()).toEqual(expect.stringContaining('Cheryl'));
});

test("returns manager's id", () => {
    const manager = new Manager('Cheryl', '123', 'cfogerty43@gmail.com', '210');

    expect(manager.getId()).toEqual(expect.stringContaining('123'));
});

test("returns manager's email", () => {
    const manager = new Manager('Cheryl', '123', 'cfogerty43@gmail.com', '210');

    expect(manager.getEmail()).toEqual(expect.stringContaining('cfogerty43@gmail.com'));
});

test("returns manager's office number", () => {
    const manager = new Manager('Cheryl', '123', 'cfogerty43@gmail.com', '210');

    expect(manager.getOfficeNumber()).toEqual(expect.stringContaining('210'));
});