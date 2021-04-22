const { TestScheduler } = require('jest')
const Engineer = require('../lib/Engineer')

test('creates an engineer object', () => {
    const engineer = new Engineer('Cher', '123', 'cfogerty43@gmail.com', 'Cher');

    expect(engineer.name).toBe('Cher');
    expect(engineer.id).toBe('123');
    expect(engineer.email).toBe('cfogerty43@gmail.com');
    expect(engineer.github).toBe('cherylfogerty');
});

test("returns engineer's name", () => {
    const engineer = new Engineer('Cheryl', '123', 'cfogerty43@gmail.com', 'cherylfogerty');
    
    expect(engineer.getName()).toEqual(expect.stringContaining('Cheryl'));
});

test("returns engineer's id", () => {
    const engineer = new Engineer('Cher', '123', 'cfogerty43@gmail.com', 'cherylfogerty');

    expect(engineer.getId()).toEqual(expect.stringContaining('123'));
});

test("returns engineer's email", () => {
    const engineer = new Engineer('Cher', '123', 'cfogerty43@gmail.com', 'cherylfogerty');
    
    expect(engineer.getEmail()).toEqual(expect.stringContaining('cfogerty43@gmail.com'));
});

test("returns engineer's role", () => {
    const engineer = new Engineer('Cher', '123', 'cfogerty43@gmail.com', 'cherylfogerty');
    
    expect(engineer.getRole()).toEqual(expect.stringContaining('Engineer'));
});

test("returns engineer's github", () => {
    const engineer = new Engineer('Cher', '123', 'cfogerty43@gmail.com', 'cherylfogerty');
    
    expect(engineer.getGithub()).toEqual(expect.stringContaining('cherylfogerty'));
});