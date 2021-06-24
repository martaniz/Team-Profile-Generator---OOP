const { test, expect } = require('@jest/globals');
const Manager = require('../lib/Manager.js');

test('creates an Manager object', () => {
    const manager = new Manager();
    expect(typeof(manager)).toBe("object");
   
});
