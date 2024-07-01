// Function to calculate risk rating
const calculateRiskRating = require("../Routes/API2/calculateRiskRating");

// Jest tests
describe("calculateRiskRating", () => {
  // Positive Test Cases
  test("string containing all keywords exactly once", () => {
    expect(
      calculateRiskRating("collide crash scratch bump smash smash smash")
    ).toBe(5);
  });
  test("string containing one keyword multiple times", () => {
    expect(calculateRiskRating("crash crash crash")).toBe(3);
  });
  test("string containing multiple keywords multiple times", () => {
    expect(calculateRiskRating("collide bump collide smash bump")).toBe(5);
  });
  test("string containing a keyword with mixed case", () => {
    expect(calculateRiskRating("CrAsh")).toBe(1);
  });
  test("string that does not contain any keywords", () => {
    expect(calculateRiskRating("hello world")).toBe(0);
  });
  test("string containing a keyword as part of another word", () => {
    expect(calculateRiskRating("precrash postcrash")).toBe(2);
  });
  test("string containing a keyword with punctuation marks around it", () => {
    expect(calculateRiskRating("crash, bump.")).toBe(2);
  });
  test("an empty string", () => {
    expect(calculateRiskRating("")).toBe(0);
  });
  test("string containing only spaces", () => {
    expect(calculateRiskRating("     ")).toBe(0);
  });
  test("string containing a keyword at the very beginning/end", () => {
    expect(calculateRiskRating("crash")).toBe(1);
  });

  // Negative Test Cases
  test("input is null", () => {
    expect(() => calculateRiskRating(null)).toThrow("Input must be a string");
  });
  test("input is undefined", () => {
    expect(() => calculateRiskRating(undefined)).toThrow(
      "Input must be a string"
    );
  });
  test("input is a number", () => {
    expect(() => calculateRiskRating(123)).toThrow("Input must be a string");
  });
  test("input is an object", () => {
    expect(() => calculateRiskRating({})).toThrow("Input must be a string");
  });
  test("input is an array", () => {
    expect(() => calculateRiskRating([])).toThrow("Input must be a string");
  });
  test("input is a boolean true", () => {
    expect(() => calculateRiskRating(true)).toThrow("Input must be a string");
  });
  test("input is a boolean false", () => {
    expect(() => calculateRiskRating(false)).toThrow("Input must be a string");
  });
  test("input is a function", () => {
    expect(() => calculateRiskRating(() => { })).toThrow(
      "Input must be a string"
    );
  });
  test("input is a symbol", () => {
    expect(() => calculateRiskRating(Symbol("test"))).toThrow(
      "Input must be a string"
    );
  });
  test("input is a BigInt", () => {
    expect(() => calculateRiskRating(BigInt(123))).toThrow(
      "Input must be a string"
    );
  });
});
