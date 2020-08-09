const Employee = require('../lib/Employee');

test('instantiates new Employee object', () => {
  const employee = new Employee();
  expect(typeof(employee)).toBe('object');
});

test('sets employee name with constructor argument', () => {
  const name = 'Jane';
  const employee = new Employee(name);
  expect(employee.name).toBe(name);
});

test('sets employee ID with constructor argument', () => {
  const testId = 100;
  const employee = new Employee('Jane', testId);
  expect(employee.id).toBe(testId);
});

test('sets employee email with constructor argument', () => {
  const testEmail = 'jane@email.com';
  const employee = new Employee('Jane', 1, testEmail);
  expect(employee.email).toBe(testEmail);
});

test('gets name from getName()', () => {
  const testName = 'Jane';
  const employee = new Employee(testName);
  expect(employee.getName()).toBe(testName);
});

test('gets employee ID from getId()', () => {
  const testId = 100;
  const employee = new Employee('Jane', testId);
  expect(employee.getId()).toBe(testId);
});

test('gets employee email from getEmail()', () => {
  const testEmail = 'Jane@email.com';
  const employee = new Employee('Jane', 1, testEmail);
  expect(employee.getEmail()).toBe(testEmail);
});

test('getRole() returns "Employee"', () => {
  const testRole = 'Employee';
  const employee = new Employee('Jane', 1, 'Jane@email.com');
  expect(employee.getRole()).toBe(testRole);
});