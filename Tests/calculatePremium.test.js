const calculatePremium = require("../Routes/API3/calculatePremium");

describe("calculatePremium", () => {
  // Positive Test Cases
  test("calculates correct premium for valid inputs", () => {
    expect(calculatePremium(6614, 5)).toEqual({
      yearlyPremium: "330.70",
      monthlyPremium: "27.56",
    });
  });
  test("calculates correct premium for minimum valid car value", () => {
    expect(calculatePremium(1, 5)).toEqual({
      yearlyPremium: "0.05",
      monthlyPremium: "0.00",
    });
  });
  test("calculates correct premium for minimum valid driver rating", () => {
    expect(calculatePremium(1000, 1)).toEqual({
      yearlyPremium: "10.00",
      monthlyPremium: "0.83",
    });
  });
  test("calculates correct premium for maximum valid driver rating", () => {
    expect(calculatePremium(1000, 5)).toEqual({
      yearlyPremium: "50.00",
      monthlyPremium: "4.17",
    });
  });
  test("calculates correct premium with large car value", () => {
    expect(calculatePremium(100000, 5)).toEqual({
      yearlyPremium: "5000.00",
      monthlyPremium: "416.67",
    });
  });
  test("calculates correct premium for car value with decimal", () => {
    expect(calculatePremium(1000.5, 3)).toEqual({
      yearlyPremium: "30.02",
      monthlyPremium: "2.50",
    });
  });
  test("calculates correct premium for driver rating with minimum edge case", () => {
    expect(calculatePremium(2000, 1)).toEqual({
      yearlyPremium: "20.00",
      monthlyPremium: "1.67",
    });
  });
  test("calculates correct premium for driver rating with maximum edge case", () => {
    expect(calculatePremium(3000, 5)).toEqual({
      yearlyPremium: "150.00",
      monthlyPremium: "12.50",
    });
  });
  test("calculates correct premium for rounded monthly premium", () => {
    expect(calculatePremium(1234, 4)).toEqual({
      yearlyPremium: "49.36",
      monthlyPremium: "4.11",
    });
  });
  test("calculates correct premium for rounded yearly premium", () => {
    expect(calculatePremium(4321, 2)).toEqual({
      yearlyPremium: "86.42",
      monthlyPremium: "7.20",
    });
  });

  // Negative Test Cases
  test("throws error for negative car value", () => {
    expect(() => calculatePremium(-100, 3)).toThrow("Invalid input values");
  });
  test("throws error for zero car value", () => {
    expect(() => calculatePremium(0, 3)).toThrow("Invalid input values");
  });
  test("throws error for negative driver rating", () => {
    expect(() => calculatePremium(1000, -1)).toThrow("Invalid input values");
  });
  test("throws error for driver rating below range", () => {
    expect(() => calculatePremium(1000, 0)).toThrow("Invalid input values");
  });
  test("throws error for driver rating above range", () => {
    expect(() => calculatePremium(1000, 6)).toThrow("Invalid input values");
  });
  test("throws error for non-numeric car value", () => {
    expect(() => calculatePremium("1000", 3)).toThrow("Invalid input values");
  });
  test("throws error for non-numeric driver rating", () => {
    expect(() => calculatePremium(1000, "3")).toThrow("Invalid input values");
  });
  test("throws error for null inputs", () => {
    expect(() => calculatePremium(null, null)).toThrow("Invalid input values");
  });
  test("throws error for undefined inputs", () => {
    expect(() => calculatePremium(undefined, undefined)).toThrow(
      "Invalid input values"
    );
  });
  test("throws error for object inputs", () => {
    expect(() => calculatePremium({}, {})).toThrow("Invalid input values");
  });
});
