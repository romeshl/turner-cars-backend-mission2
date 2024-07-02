// Import the calculatePremium function from its module path
const calculatePremium = require("../Routes/API3/calculatePremium");

// Describe block defines a test suite for the calculatePremium function
describe("calculatePremium", () => {
  // Positive Test Cases
  // Each test case within this block is designed to validate correct premium calculations under various conditions

  // Test for correct premium calculation with standard inputs
  test("calculates correct premium for valid inputs", () => {
    // Expect function to return specific yearly and monthly premiums for given inputs
    expect(calculatePremium(6614, 5)).toEqual({
      yearly_Premium: "330.70",
      monthly_Premium: "27.56",
    });
  });

  // Test for correct handling of minimum valid car value
  test("calculates correct premium for minimum valid car value", () => {
    // Car value of 1 should still calculate to a valid premium
    expect(calculatePremium(1, 5)).toEqual({
      yearly_Premium: "0.05",
      monthly_Premium: "0.00",
    });
  });

  // Test for correct premium calculation with minimum valid driver rating
  test("calculates correct premium for minimum valid driver rating", () => {
    // Validates that the function correctly handles the lowest valid driver rating
    expect(calculatePremium(1000, 1)).toEqual({
      yearly_Premium: "10.00",
      monthly_Premium: "0.83",
    });
  });

  // Test for correct premium calculation with maximum valid driver rating
  test("calculates correct premium for maximum valid driver rating", () => {
    // Ensures the function scales correctly with the highest driver rating
    expect(calculatePremium(1000, 5)).toEqual({
      yearly_Premium: "50.00",
      monthly_Premium: "4.17",
    });
  });

  // Test for correct premium calculation with a large car value
  test("calculates correct premium with large car value", () => {
    // Checks if the function can handle large numbers accurately
    expect(calculatePremium(100000, 5)).toEqual({
      yearly_Premium: "5000.00",
      monthly_Premium: "416.67",
    });
  });

  // Test for correct premium calculation when car value has decimals
  test("calculates correct premium for car value with decimal", () => {
    // Verifies the function's ability to handle decimal values correctly
    expect(calculatePremium(1000.5, 3)).toEqual({
      yearly_Premium: "30.02",
      monthly_Premium: "2.50",
    });
  });

  // Test for edge case handling of minimum driver rating
  test("calculates correct premium for driver rating with minimum edge case", () => {
    // Edge case testing for the lowest possible valid driver rating
    expect(calculatePremium(2000, 1)).toEqual({
      yearly_Premium: "20.00",
      monthly_Premium: "1.67",
    });
  });

  // Test for edge case handling of maximum driver rating
  test("calculates correct premium for driver rating with maximum edge case", () => {
    // Edge case testing for the highest possible valid driver rating
    expect(calculatePremium(3000, 5)).toEqual({
      yearly_Premium: "150.00",
      monthly_Premium: "12.50",
    });
  });

  // Test for correct rounding of monthly premium
  test("calculates correct premium for rounded monthly premium", () => {
    // Validates that monthly premiums are rounded correctly
    expect(calculatePremium(1234, 4)).toEqual({
      yearly_Premium: "49.36",
      monthly_Premium: "4.11",
    });
  });

  // Test for correct rounding of yearly premium
  test("calculates correct premium for rounded yearly premium", () => {
    // Validates that yearly premiums are rounded correctly
    expect(calculatePremium(4321, 2)).toEqual({
      yearly_Premium: "86.42",
      monthly_Premium: "7.20",
    });
  });

  // Negative Test Cases
  // Each test case within this block is designed to validate the function's error handling for invalid inputs

  // Test for error handling with negative car value
  test("throws error for negative car value", () => {
    // Expect function to throw an error for negative car values
    expect(() => calculatePremium(-100, 3)).toThrow("Invalid input values");
  });

  // Test for error handling with zero car value
  test("throws error for zero car value", () => {
    // Expect function to throw an error for a car value of zero
    expect(() => calculatePremium(0, 3)).toThrow("Invalid input values");
  });

  // Test for error handling with negative driver rating
  test("throws error for negative driver rating", () => {
    // Expect function to throw an error for negative driver ratings
    expect(() => calculatePremium(1000, -1)).toThrow("Invalid input values");
  });

  // Test for error handling with driver rating below valid range
  test("throws error for driver rating below range", () => {
    // Expect function to throw an error for driver ratings below the valid range
    expect(() => calculatePremium(1000, 0)).toThrow("Invalid input values");
  });

  // Test for error handling with driver rating above valid range
  test("throws error for driver rating above range", () => {
    // Expect function to throw an error for driver ratings above the valid range
    expect(() => calculatePremium(1000, 6)).toThrow("Invalid input values");
  });

  // Test for error handling with non-numeric car value
  test("throws error for non-numeric car value", () => {
    // Expect function to throw an error for non-numeric car values
    expect(() => calculatePremium("1000", 3)).toThrow("Invalid input values");
  });

  // Test for error handling with non-numeric driver rating
  test("throws error for non-numeric driver rating", () => {
    // Expect function to throw an error for non-numeric driver ratings
    expect(() => calculatePremium(1000, "3")).toThrow("Invalid input values");
  });

  // Test for error handling with null inputs
  test("throws error for null inputs", () => {
    // Expect function to throw an error for null inputs
    expect(() => calculatePremium(null, null)).toThrow("Invalid input values");
  });

  // Test for error handling with undefined inputs
  test("throws error for undefined inputs", () => {
    // Expect function to throw an error for undefined inputs
    expect(() => calculatePremium(undefined, undefined)).toThrow(
      "Invalid input values"
    );
  });

  // Test for error handling with object inputs
  test("throws error for object inputs", () => {
    // Expect function to throw an error for object inputs
    expect(() => calculatePremium({}, {})).toThrow("Invalid input values");
  });
});