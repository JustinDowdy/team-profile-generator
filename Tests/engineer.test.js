const Engineer = require("../lib/Engineer");

test("Set GitHub account via constructor", () => {
  const testValue = "GitHubUser";
  const em = new Engineer("Bob", 1, "test@testing.com", testValue);
  expect(em.github).toBe(testValue);
});

test("getRole() should return Engineer", () => {
  const testValue = "Engineer";
  const em = new Engineer("Bob", 1, "test@testing.com", "GitHubUser");
  expect(em.getRole()).toBe(testValue);
});

test("Get GitHub username via getGithub()", () => {
  const testValue = "GitHubUser";
  const em = new Engineer("Bob", 1, "test@testing.com", testValue);
  expect(em.getGithub()).toBe(testValue);
});
