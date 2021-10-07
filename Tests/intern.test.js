const Intern = require("../lib/Intern");

test("Set school via constructor", () => {
  const testValue = "UT";
  const em = new Intern("Foo", 1, "test@testing.com", testValue);
  expect(em.school).toBe(testValue);
});

test("getRole() should return Intern", () => {
  const testValue = "Intern";
  const em = new Intern("Bob", 1, "test@testing.com", "UT");
  expect(em.getRole()).toBe(testValue);
});

test("Get school via getSchool()", () => {
  const testValue = "UT";
  const em = new Intern("Bob", 1, "test@testing.com", testValue);
  expect(em.getSchool()).toBe(testValue);
});
