// Import the calculateRiskRating function from its module path
const calculateRiskRating = require("../Routes/API2/calculateRiskRating");

// Describe block defines a test suite for the calculateRiskRating function
describe("calculateRiskRating", () => {
  // Positive Test Cases
  // Each test case within this block is designed to validate correct risk ratings under various conditions

  // Test for correct risk rating when all keywords appear exactly once
  test("string containing all keywords exactly once", () => {
    // Expect function to return a risk rating of 5 for a string with multiple unique keywords
    expect(
      calculateRiskRating("collide crash scratch bump smash smash smash")
    ).toBe(5);
  });

  test("string containing 'no accidents'", () => {
    expect(calculateRiskRating("no accidents")).toBe(1);
  });

  // Test for correct risk rating when one keyword appears multiple times
  test("string containing one keyword multiple times", () => {
    // Expect function to return a risk rating of 3 for a string with repeated occurrences of a single keyword
    expect(calculateRiskRating("crash crash crash")).toBe(3);
  });

  // Test for correct risk rating when multiple keywords appear multiple times
  test("string containing multiple keywords multiple times", () => {
    // Expect function to return a risk rating of 5 for a string with repeated occurrences of multiple keywords
    expect(calculateRiskRating("collide bump collide smash bump")).toBe(5);
  });

  // Test for correct risk rating when a keyword appears with mixed case
  test("string containing a keyword with mixed case", () => {
    // Expect function to correctly identify and rate a keyword regardless of case
    expect(calculateRiskRating("CrAsh")).toBe(1);
  });

  // Test for correct risk rating when a keyword is part of another word
  test("string containing a keyword as part of another word", () => {
    // Expect function to correctly identify and rate keywords even when they are part of other words
    expect(calculateRiskRating("precrash postcrash")).toBe(2);
  });

  // Test for correct risk rating when keywords are surrounded by punctuation
  test("string containing a keyword with punctuation marks around it", () => {
    // Expect function to correctly identify and rate keywords adjacent to punctuation
    expect(calculateRiskRating("crash, bump.")).toBe(2);
  });

  // Test for correct risk rating for a string with a keyword at the start/end
  test("string containing a keyword at the very beginning/end", () => {
    // Expect function to correctly identify and rate a single keyword
    expect(calculateRiskRating("crash")).toBe(1);
  });


  
  // Negative Test Cases
  // Each test case within this block is designed to validate the function's error handling for invalid inputs

  // Test for correct risk rating for an empty string
  test("an empty string", () => {
    // Expect function to return a risk rating of 0 for an empty string
    expect(() => calculateRiskRating("")).toThrow("Invalid input");
  });

  // Test for correct risk rating for a string containing only spaces
  test("string containing only spaces", () => {
    // Expect function to return a risk rating of 0 for a string of only whitespace
    expect(() => calculateRiskRating("     ")).toThrow("Invalid input");
  });

  // Test for correct risk rating for a string without any keywords
  test("string that does not contain any keywords", () => {
    // Expect function to return a risk rating of 0 for a string without keywords
    expect(() => calculateRiskRating("hello world")).toThrow("Invalid input");
  });

  // Test for error handling with null input
  test("input is null", () => {
    // Expect function to throw an error for null input
    expect(() => calculateRiskRating(null)).toThrow("Invalid input");
  });

  // Test for error handling with undefined input
  test("input is undefined", () => {
    // Expect function to throw an error for undefined input
    expect(() => calculateRiskRating(undefined)).toThrow("Invalid input");
  });

  // Test for error handling with numeric input
  test("input is a number", () => {
    // Expect function to throw an error for numeric input
    expect(() => calculateRiskRating(123)).toThrow("Invalid input");
  });

  // Test for error handling with object input
  test("input is an object", () => {
    // Expect function to throw an error for object input
    expect(() => calculateRiskRating({})).toThrow("Invalid input");
  });

  // Test for error handling with array input
  test("input is an array", () => {
    // Expect function to throw an error for array input
    expect(() => calculateRiskRating([])).toThrow("Invalid input");
  });

  // Test for error handling with boolean true input
  test("input is a boolean true", () => {
    // Expect function to throw an error for boolean true input
    expect(() => calculateRiskRating(true)).toThrow("Invalid input");
  });

  // Test for error handling with boolean false input
  test("input is a boolean false", () => {
    // Expect function to throw an error for boolean false input
    expect(() => calculateRiskRating(false)).toThrow("Invalid input");
  });

  // Test for error handling with function input
  test("input is a function", () => {
    // Expect function to throw an error for function input
    expect(() => calculateRiskRating(() => {})).toThrow("Invalid input");
  });

  // Test for error handling with symbol input
  test("input is a symbol", () => {
    // Expect function to throw an error for symbol input
    expect(() => calculateRiskRating(Symbol("test"))).toThrow("Invalid input");
  });

  // Test for error handling with BigInt input
  test("input is a BigInt", () => {
    // Expect function to throw an error for BigInt input
    expect(() => calculateRiskRating(BigInt(123))).toThrow("Invalid input");
  });
});