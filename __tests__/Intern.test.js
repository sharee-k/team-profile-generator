const Intern = require('../lib/Intern');

test('sets school with constructor argument', () => {
  const testSchool = 'University';
  const employee = new Intern('Jill', 4, 'Jill@email.com', testSchool);
  expect(employee.school).toBe(testSchool);
});

test('getRole() returns "Intern"', () => {
  const testRole = 'Intern';
  const employee = new Intern('Jill', 4, 'Jill@email.com', 'University');
  expect(employee.getRole()).toBe(testRole);
});

test('gets school from getSchool()', () => {
  const testSchool = 'University';
  const employee = new Intern('Jill', 4, 'Jill@email.com', testSchool);
  expect(employee.getSchool()).toBe(testSchool);
});