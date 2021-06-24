const { test, expect } = require('@jest/globals');
const Intern = require('../lib/Intern.js');

test('creates an Intern object', () => {
    const intern = new Intern();
    expect(typeof(intern)).toBe("object");
   
});
