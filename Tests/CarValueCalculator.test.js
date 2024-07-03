const request = require("supertest");
const serverAddress = "http://localhost:3000"

describe("CarValueCalculator - Positive Test Cases", () => {
    // Positive Test Cases
    const positiveTestCases = [
        {
            case: "1 - Input car model and year within the range.",
            input: { model: "Mustang", year: 2020 },
            output: { car_value: 11520 },
        },
        {
            case: "2 - Input car model is in mixed case.",
            input: { model: "CoRoLlA", year: 2015 },
            output: { car_value: 9615 },
        },
        {
            case: "3 - Input year is at the lower bound of the range.",
            input: { model: "Accord", year: 1950 },
            output: { car_value: 6350 },
        },
        {
            case: "4 - Input car model contain numbers and special characters.",
            input: { model: "Model-3", year: 2014 },
            output: { car_value: 6914 },
        },
        {
            case: "5 - Input car model name only contains numbers.",
            input: { model: "911", year: 2018 },
            output: { car_value: 2018 },
        },
        {
            case: "6 - Input year is at the upper bound of the range.",
            input: { model: "Altima", year: 2024 },
            output: { car_value: 7624 },
        },
        {
            case: "7 - Input car model have spaces in between the letters.",
            input: { model: "I m  p a l a", year: 2012 },
            output: { car_value: 7212 },
        },
        {
            case: "8 - Input car model with one letter and a number.",
            input: { model: "A4", year: 2009 },
            output: { car_value: 2109 },
        },
        {
            case: "9 - Input car model with letters and special character.",
            input: { model: "CR-V", year: 2017 },
            output: { car_value: 6317 },
        },
        {
            case: "10 - Input car model with text and numbers.",
            input: { model: "911 Turbo", year: 1990 },
            output: { car_value: 9590 },
        },
    ];
    positiveTestCases.forEach((testCase) => {
        test(testCase.case, async () => {
            const response = await request(serverAddress)
              .post("/CarValueCalculator")
              .set("Accept", "application/json")
              .send(testCase.input);
            expect(response.status).toBe(200);
            expect(response.body).toEqual(testCase.output);
        });
    });
});


describe("CarValueCalculator - Negative Test Cases", () => {
    const negativeTestCases = [
      {
        case: "1 - Input empty car model name.",
        input: { model: "", year: 2015 },
        output: { error: "there is an error" },
      },
      {
        case: "2 - Input year before 1950.",
        input: { model: "Camry", year: 1949 },
        output: { error: "there is an error" },
      },
      {
        case: "3 - Input car model contains numbers.",
        input: { model: 123, year: 2018 },
        output: { error: "there is an error" },
      },
      {
        case: "4 - Input car model name contains empty spaces.",
        input: { model: "     ", year: 2008 },
        output: { error: "there is an error" },
      },
      {
        case: "5 - Input year in the future.",
        input: { model: "Corolla", year: 2025 },
        output: { error: "there is an error" },
      },
      {
        case: "6 - Input year contains a string.",
        input: { model: "Civic", year: "2014" },
        output: { error: "there is an error" },
      },
      {
        case: "7 - Input car model name is None.",
        input: { model: null, year: 2018 },
        output: { error: "there is an error" },
      },
      {
        case: "8 - Input year is an empty string.",
        input: { model: "Fusion", year: "" },
        output: { error: "there is an error" },
      },
      {
        case: "9 - Input is an empty JSON object.",
        input: {},
        output: { error: "there is an error" },
      },
      {
        case: "10 - Input year unrealistically in the future.",
        input: { model: "Impala", year: 3000 },
        output: { error: "there is an error" },
      },
      {
        case: "11 - Input is an empty array.",
        input: [],
        output: { error: "there is an error" },
      },
      {
        case: "12 - Input is a text.",
        input: "This is a text",
        output: { error: "there is an error" },
      },
    ];

    negativeTestCases.forEach((testCase) => {
        test(testCase.case, async () => {
            const response = await request(serverAddress)
                .post("/CarValueCalculator")
                .set("Accept", "application/json")
                .send(testCase.input);
            expect(response.status).toBe(400);
            expect(response.body).toEqual(testCase.output);
        });
    });
});