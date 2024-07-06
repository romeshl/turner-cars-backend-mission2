//const Test = require("supertest/lib/test");
const calculateCarValue = require("../Routes/PremiumCalculator/calculatePremium"); // Adjust the path accordingly

describe("Testing calculateCarValue function with positive test cases.", () => {
    // Positive Test Cases
    const positiveTestCases = [
        {
            testCase: "1 - Input is a valid car_value and risk_rating.",
            inputData: { car_value: 6614, risk_rating: 5 },
            expectedOutput: { monthly_premium: 27.56, yearly_premium: 330.7 },
        },
        {
            testCase: "2 - Input is the valid minimum car_value.",
            inputData: { car_value: 1, risk_rating: 5 },
            expectedOutput: { monthly_premium: 0.0, yearly_premium: 0.05 },
        },
        {
            testCase: "3 - Input is the valid minimum risk_rating.",
            inputData: { car_value: 1000, risk_rating: 1 },
            expectedOutput: { monthly_premium: 0.83, yearly_premium: 10.0 },
        },
        {
            testCase: "4 - Input is the maximum valid risk_rating.",
            inputData: { car_value: 1000, risk_rating: 5 },
            expectedOutput: { monthly_premium: 4.17, yearly_premium: 50.0 },
        },
        {
            testCase: "5 - Input is a large car_value.",
            inputData: { car_value: 100000, risk_rating: 5 },
            expectedOutput: { monthly_premium: 416.67, yearly_premium: 5000.0 },
        },
        {
            testCase: "6 - Input is car_value with decimal numbers.",
            inputData: { car_value: 1000.5, risk_rating: 3 },
            expectedOutput: { monthly_premium: 2.5, yearly_premium: 30.02 },
        },
        {
            testCase: "7 - Calculates correct monthly_premium.",
            inputData: { car_value: 1234, risk_rating: 4 },
            expectedOutput: { monthly_premium: 4.11, yearly_premium: 49.36 },
        },
        {
            testCase: "8 - Calculates correct yearly_premium.",
            inputData: { car_value: 4321, risk_rating: 2 },
            expectedOutput: { monthly_premium: 7.2, yearly_premium: 86.42 },
        },
    ];

    positiveTestCases.forEach((TestCase) => {
        it(`should calculate car value for ${TestCase.testCase}`, () => {
            expect(
                calculateCarValue(TestCase.inputData.car_value, TestCase.inputData.risk_rating)
            ).toEqual(TestCase.expectedOutput);
        });
    });
});

describe("Testing calculateCarValue function with negative test cases.", () => {
    // Negative Test Cases
    const negativeTestCases = [
        {
            testCase: "1 - Input is a negative car_value.",
            inputData: { car_value: -100, risk_rating: 3 },
            expectedOutput: { error: "Invalid input" },
        },
        {
            testCase: "2 - car_value is zero.",
            inputData: { car_value: 0, risk_rating: 3 },
            expectedOutput: { error: "Invalid input" },
        },
        {
            testCase: "3 - Input is a negative risk_rating.",
            inputData: { car_value: 1000, risk_rating: -1 },
            expectedOutput: { error: "Invalid input" },
        },
        {
            testCase: "4 - risk_rating below range.",
            inputData: { car_value: 1000, risk_rating: 0 },
            expectedOutput: { error: "Invalid input" },
        },
        {
            testCase: "5 - risk_rating above range.",
            inputData: { car_value: 1000, risk_rating: 6 },
            expectedOutput: { error: "Invalid input" },
        },
        {
            testCase: "6 - Input is a non-numeric car_value.",
            inputData: { car_value: "1000", risk_rating: 3 },
            expectedOutput: { error: "Invalid input" },
        },
        {
            testCase: "7 - Input is a non-numeric risk_rating.",
            inputData: { car_value: 1000, risk_rating: "3" },
            expectedOutput: { error: "Invalid input" },
        },
        {
            testCase: "8 - Both inputs are null.",
            inputData: { car_value: null, risk_rating: null },
            expectedOutput: { error: "Invalid input" },
        },
        {
            testCase: "9 - Both inputs are undefined.",
            inputData: { car_value: undefined, risk_rating: undefined },
            expectedOutput: { error: "Invalid input" },
        },
        {
            testCase: "10 - Both inputs are objects.",
            inputData: { car_value: {}, risk_rating: {} },
            expectedOutput: { error: "Invalid input" },
        },
        {
            testCase: "11 - Input is an empty JSON object.",
            inputData: {},
            expectedOutput: { error: "Invalid input" },
        },
        {
            testCase: "12 - Input is an empty array.",
            inputData: [],
            expectedOutput: { error: "Invalid input" },
        },
        {
            testCase: "13 - Input is text.",
            inputData: "This is text",
            expectedOutput: { error: "Invalid input" },
        },
    ];

    negativeTestCases.forEach((TestCase) => {
        it(`should throw error for ${TestCase.testCase}`, () => {
            expect(() =>
                calculateCarValue(TestCase.inputData.car_value, TestCase.inputData.risk_rating)
            ).toThrow(TestCase.expectedOutput.error);
        });
    });
});
