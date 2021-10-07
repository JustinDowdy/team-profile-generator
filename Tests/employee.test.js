const Employee = require("../lib/Employee");

test("Created new Employee", () => {
  const em = new Employee();
  expect(typeof(em)).toBe("object");
});

test("Employee name is set via constructor", () => {
  const name = "Justin";
  const em = new Employee(name);
  expect(em.name).toBe(name);
});

test("Set id via constructor", () => {
  const testValue = 99;
  const em = new Employee("Bob", testValue);
  expect(em.id).toBe(testValue);
});

test("Set email via constructor", () => {
  const testValue = "test@testing.com";
  const em = new Employee("Bob", 1, testValue);
  expect(em.email).toBe(testValue);
});

test("Get name via getName()", () => {
  const testValue = "Justin";
  const em = new Employee(testValue);
  expect(em.getName()).toBe(testValue);
});

test("Get id via getId()", () => {
  const testValue = 99;
  const em = new Employee("Bob", testValue);
  expect(em.getId()).toBe(testValue);
});

test("Get email via getEmail()", () => {
  const testValue = "test@testing.com";
  const em = new Employee("Bob", 1, testValue);
  expect(em.getEmail()).toBe(testValue);
});

test("getRole() returns Employee", () => {
  const testValue = "Employee";
  const em = new Employee("Justin", 1, "test@testing.com");
  expect(em.getRole()).toBe(testValue);
});