const { TestScheduler } = require('jest')
const Intern = require('../lib/Intern')

test('creates an intern object', () => {
    const intern = new Intern('Cheryl', '123', 'cfogerty43@gmail.com', 'Vanderbilt');

    expect(intern.name).toBe('Cheryl');
    expect(intern.id).toBe('123');
    expect(intern.email).toBe('cfogerty43@gmail.com');
    expect(intern.school).toBe('Vanderbilt');
});

test("returns intern's name", () => {
    const intern = new Intern('Cheryl', '123', 'cfogerty43@gmail.com', 'Vanderbilt');
    
    expect(intern.getName()).toEqual(expect.stringContaining('Cheryl'));
});

test("returns intern's id", () => {
    const intern = new Intern('Cheryl', '123', 'cfogerty43@gmail.com', 'Vanderbilt');

    expect(intern.getId()).toEqual(expect.stringContaining('123'));
});

test("returns intern's email", () => {
    const intern = new Intern('Cheryl', '123', 'cfogerty43@gmail.com', 'Vanderbilt');
    
    expect(intern.getEmail()).toEqual(expect.stringContaining('cfogerty43@gmail.com'));
});

test("returns intern's role", () => {
    const intern = new Intern('Cheryl', '123', 'cfogerty43@gmail.com', 'Vanderbilt');
    
    expect(intern.getRole()).toEqual(expect.stringContaining('Intern'));
});

test("returns intern's school", () => {
    const intern = new Intern('Cheryl', '123', 'cfogerty43@gmail.com', 'Vanderbilt');
    
    expect(intern.getSchool()).toEqual(expect.stringContaining('Vanderbilt'));
});