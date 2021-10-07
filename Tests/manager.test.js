const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

test("Set office number via constructor", () => {
  const testValue = 99;
  const em = new Manager("Bob", 1, "test@testing.com", testValue);
  expect(em.officeNumber).toBe(testValue);
});

test("getRole() returns Manager", () => {
  const testValue = "Manager";
  const em = new Manager("Bob", 1, "test@testing.com", 99);
  expect(em.getRole()).toBe(testValue);
});

test("Get office number via getOffice()", () => {
  const testValue = 99;
  const em = new Manager("Bob", 1, "test@testing.com", testValue);
  expect(em.getOfficeNumber()).toBe(testValue);
});