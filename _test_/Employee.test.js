const { test, expect } = require('@jest/globals');
const Employee = require('../lib/Employee.js');

test('creates an Employee object', () => {
    const employee = new Employee();
    expect(typeof(employee)).toBe("object");
   
});
