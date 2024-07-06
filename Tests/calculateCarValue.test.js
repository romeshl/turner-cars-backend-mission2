//const Test = require("supertest/lib/test");
const calculateCarValue = require("../Routes/CarValueCalculator/calculatorCarValue"); // Adjust the path accordingly

describe("Testing calculateCarValue function with positive test cases.", () => {
    // Positive Test Cases
    const positiveTestCases = [
        {
            testCase: "1 - Input car model and year within the range.",
            inputValues: { model: "Mustang", year: 2020 },
            expectedOutput: { car_value: 11520 },
        },
        {
            testCase: "2 - Input car model is in mixed case.",
            inputValues: { model: "CoRoLlA", year: 2015 },
            expectedOutput: { car_value: 9615 },
        },
        {
            testCase: "3 - Input year is at the lower bound of the range.",
            inputValues: { model: "Accord", year: 1950 },
            expectedOutput: { car_value: 6350 },
        },
        {
            testCase: "4 - Input car model contains numbers and special characters.",
            inputValues: { model: "Model-3", year: 2014 },
            expectedOutput: { car_value: 6914 },
        },
        {
            testCase: "5 - Input car model name only contains numbers.",
            inputValues: { model: "911", year: 2018 },
            expectedOutput: { car_value: 2018 },
        },
        {
            testCase: "6 - Input year is at the upper bound of the range.",
            inputValues: { model: "Altima", year: 2024 },
            expectedOutput: { car_value: 7624 },
        },
        {
            testCase: "7 - Input car model has spaces in between the letters.",
            inputValues: { model: "I m  p a l a", year: 2012 },
            expectedOutput: { car_value: 7212 },
        },
        {
            testCase: "8 - Input car model with one letter and a number.",
            inputValues: { model: "A4", year: 2009 },
            expectedOutput: { car_value: 2109 },
        },
        {
            testCase: "9 - Input car model with letters and special character.",
            inputValues: { model: "CR-V", year: 2017 },
            expectedOutput: { car_value: 6317 },
        },
        {
            testCase: "10 - Input car model with text and numbers.",
            inputValues: { model: "911 Turbo", year: 1990 },
            expectedOutput: { car_value: 9590 },
        },
    ];


    positiveTestCases.forEach((TestCase) => {
       it(`should calculate car value for ${TestCase.testCase}`, () => {
            expect(calculateCarValue(TestCase.inputValues.model, TestCase.inputValues.year)).toEqual(TestCase.expectedOutput);
        });
    });
});


describe("Testing calculateCarValue function with negative test cases.", () => {
  // Negative Test Cases
  const negativeTestCases = [
    {
      testCase: "1 - Input empty car model name.",
      inputValues: { model: "", year: 2015 },
      expectedOutput: { error: "Invalid input" },
    },
    {
      testCase: "2 - Input year before 1950.",
      inputValues: { model: "Camry", year: 1949 },
      expectedOutput: { error: "Invalid input" },
    },
    {
      testCase: "3 - Input car model contains numbers.",
      inputValues: { model: 123, year: 2018 },
      expectedOutput: { error: "Invalid input" },
    },
    {
      testCase: "4 - Input car model name contains empty spaces.",
      inputValues: { model: "     ", year: 2008 },
      expectedOutput: { error: "Invalid input" },
    },
    {
      testCase: "5 - Input year in the future.",
      inputValues: { model: "Corolla", year: 2025 },
      expectedOutput: { error: "Invalid input" },
    },
    {
      testCase: "6 - Input year contains a string.",
      inputValues: { model: "Civic", year: "2014" },
      expectedOutput: { error: "Invalid input" },
    },
    {
      testCase: "7 - Input car model name is None.",
      inputValues: { model: null, year: 2018 },
      expectedOutput: { error: "Invalid input" },
    },
    {
      testCase: "8 - Input year is an empty string.",
      inputValues: { model: "Fusion", year: "" },
      expectedOutput: { error: "Invalid input" },
    },
    {
      testCase: "9 - Input is an empty JSON object.",
      inputValues: {},
      expectedOutput: { error: "Invalid input" },
    },
    {
      testCase: "10 - Input year unrealistically in the future.",
      inputValues: { model: "Impala", year: 3000 },
      expectedOutput: { error: "Invalid input" },
    },
    {
      testCase: "11 - Input is an empty array.",
      inputValues: [],
      expectedOutput: { error: "Invalid input" },
    },
    {
      testCase: "12 - Input is a text.",
      inputValues: "This is a text",
      expectedOutput: { error: "Invalid input" },
    },
  ];

  negativeTestCases.forEach((TestCase) => {
    it(`should throw error for ${TestCase.testCase}`, () => {
      expect(() =>
        calculateCarValue(TestCase.inputValues.model, TestCase.inputValues.year)
      ).toThrow(TestCase.expectedOutput.error);
    });
  });
});
