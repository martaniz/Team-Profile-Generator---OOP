const { test, expect } = require('@jest/globals');
const Engineer = require('../lib/Engineer.js');

test('creates an Engineer object', () => {
    const engineer = new Engineer();
    expect(typeof(engineer)).toBe("object");
   
});
