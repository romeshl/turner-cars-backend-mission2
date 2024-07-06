//const Test = require("supertest/lib/test");
const calculateCarValue = require("../Routes/RiskRatingCalculator/calculateRiskRating"); // Adjust the path accordingly

describe("Testing calculateCarValue function with positive test cases.", () => {
    // Positive Test Cases
    const positiveTestCases = [
        {
            testCase: "1 - Input contains all the keywords exactly once.",
            inputData: { claim_history: "collide crash scratch bump smash accident" },
            expectedOutput: 5,
        },
        {
            testCase: "2 - Input contains the text 'No accidents'.",
            inputData: { claim_history: "no accidents" },
            expectedOutput: 1,
        },
        {
            testCase: "3 - Input contains one keyword multiple times.",
            inputData: { claim_history: "crash crash crash" },
            expectedOutput: 3,
        },
        {
            testCase: "4 - Input contains multiple keywords multiple times.",
            inputData: { claim_history: "collide bump collide smash bump" },
            expectedOutput: 5,
        },
        {
            testCase: "5 - Input contains a keyword with mixed case.",
            inputData: { claim_history: "had one cRaSh" },
            expectedOutput: 1,
        },
        {
            testCase: "6 - Input contains a keyword as part of another word.",
            inputData: {
                claim_history:
                    "Precrash it was in good condition. Postcrash had some painting done.",
            },
            expectedOutput: 2,
        },
        {
            testCase: "7 - Input contains a keyword with punctuation marks around it.",
            inputData: { claim_history: "crash, bump. 'smash'" },
            expectedOutput: 3,
        },
        {
            testCase: "8 - Input contains a keyword at the very beginning/end.",
            inputData: { claim_history: "crash then few more scratches and a bump" },
            expectedOutput: 3,
        },
    ];
    positiveTestCases.forEach((TestCase) => {
        it(`should calculate car value for ${TestCase.testCase}`, () => {
            expect(calculateCarValue(TestCase.inputData.claim_history)).toEqual(TestCase.expectedOutput);
        });
    });

});



describe("Testing calculateCarValue function with negative test cases.", () => {
    // Negative Test Cases
    const negativeTestCases = [
        {
            testCase: "1 - Input is an empty string.",
            inputData: { claim_history: "" },
            expectedOutput: { error: "Invalid input" },
        },
        {
            testCase: "2 - Input contains only spaces.",
            inputData: { claim_history: "       " },
            expectedOutput: { error: "Invalid input" },
        },
        {
            testCase: "3 - Input does not contain any keywords.",
            inputData: { claim_history: "hello world" },
            expectedOutput: { error: "Invalid input" },
        },
        {
            testCase: "4 - Input is null.",
            inputData: { claim_history: null },
            expectedOutput: { error: "Invalid input" },
        },
        {
            testCase: "5 - Input is undefined.",
            inputData: { claim_history: undefined },
            expectedOutput: { error: "Invalid input" },
        },
        {
            testCase: "6 - Input is a number.",
            inputData: { claim_history: 123 },
            expectedOutput: { error: "Invalid input" },
        },
        {
            testCase: "7 - Input is an object.",
            inputData: { claim_history: {} },
            expectedOutput: { error: "Invalid input" },
        },
        {
            testCase: "8 - Input is an array.",
            inputData: { claim_history: [] },
            expectedOutput: { error: "Invalid input" },
        },
        {
            testCase: "9 - Input is a boolean true.",
            inputData: { claim_history: true },
            expectedOutput: { error: "Invalid input" },
        },
        {
            testCase: "10 - Input is a boolean false.",
            inputData: { claim_history: false },
            expectedOutput: { error: "Invalid input" },
        },
        {
            testCase: "11 - Input is a function.",
            inputData: { claim_history: () => { } },
            expectedOutput: { error: "Invalid input" },
        },
        {
            testCase: "12 - Input is a symbol.",
            inputData: { claim_history: Symbol("test") },
            expectedOutput: { error: "Invalid input" },
        },
        {
            testCase: "13 - Input is a BigInt.",
            inputData: { claim_history: BigInt(123).toString() },
            expectedOutput: { error: "Invalid input" },
        },
        {
            testCase: "14 - Input is an empty JSON object.",
            inputData: {},
            expectedOutput: { error: "Invalid input" },
        },
        {
            testCase: "15 - Input is an empty array.",
            inputData: [],
            expectedOutput: { error: "Invalid input" },
        },
        {
            testCase: "16 - Input is empty.",
            inputData: "",
            expectedOutput: { error: "Invalid input" },
        },
        {
            testCase: "17 - Input is text.",
            inputData: "This is text",
            expectedOutput: { error: "Invalid input" },
        },
    ];

    negativeTestCases.forEach((TestCase) => {
        it(`should throw error for ${TestCase.testCase}`, () => {
            expect(() =>
                calculateCarValue(TestCase.inputData.claim_history)).toThrow(TestCase.expectedOutput.error);
        });
    });
});
