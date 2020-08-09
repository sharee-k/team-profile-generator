const Manager = require('../lib/Manager');
const Employee = require('../lib/Employee');

test('sets phone number with constructor argument', () => {
  const testOfficeNumber = 100;
  const employee = new Manager('John', 2, 'John@email.com', testOfficeNumber);
  expect(employee.officeNumber).toBe(testOfficeNumber);
});

test('getRole() returns "Manager"', () => {
  const testRole = 'Manager';
  const employee = new Manager('John', 2, 'John@email.com', 100);
  expect(employee.getRole()).toBe(testRole);
});

test('gets phone number from getOfficeNumber()', () => {
  const testOfficeNumber = 100;
  const employee = new Manager('John', 2, 'John@email.com', testOfficeNumber);
  expect(employee.getOfficeNumber()).toBe(testOfficeNumber);
});