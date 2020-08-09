const Engineer = require('../lib/Engineer');

test('set GitHub username with constructor argument', () => {
  const testGithub = 'GitHub';
  const employee = new Engineer('Jack', 3, 'Jack@email.com', testGithub);
  expect(employee.github).toBe(testGithub);
});

test('getRole() returns "Engineer"', () => {
  const testRole = 'Engineer';
  const employee = new Engineer('Jack', 3, 'Jack@email.com', 'GitHub');
  expect(employee.getRole()).toBe(testRole);
});

test('gets GitHub username from getGithub()', () => {
  const testGithub = 'GitHub';
  const employee = new Engineer('Jack', 3, 'Jack@email.com', testGithub);
  expect(employee.getGithub()).toBe(testGithub);
});