let myAdd = require("../simpleCalculator");
let add = myAdd.add;
let multiply = myAdd.multiply;

describe("add", () => {
  it("should return sum of 2 numbers", () => {
    expect(add(1, 2)).toBe(3);
  });
  it("should return sum of 2 numbers", () => {
    expect(add(-1, -1)).toBe(-2);
  });
  it("should return sum of multiple numbers ", () => {
    expect(add(1, 2, 3, 4)).toBe(10);
  });
});

describe("multiply", () => {
  it("should return result of multiplied numbers", () => {
    expect(multiply(1, 3)).toBe(3);
  });
  it("should return the result of multiplied multiple numbers", () => {
    expect(multiply(1, 2, 3, 4, 5)).toBe(120);
  });
  it("should return result of multiplied numbers", () => {
    expect(multiply(-1, 3)).toBe(-3);
  });
});
