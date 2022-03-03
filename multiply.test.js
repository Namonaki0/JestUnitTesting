const multiply = require("./index.js");

test("multiply 2 and 4 to equal 8", () => {
  expect(multiply(2, 4)).toBe(8);
});
