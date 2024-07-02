const request = require("supertest");
const serverAddress = "http://localhost:3000"

describe("API3 - Positive Test Cases", () => {
  // Positive Test Cases
  const positiveTestCases = [
    {
      case: "1 - Input is a valid car_value and risk_rating.",
      input: { car_value: 6614, risk_rating: 5 },
      output: { monthly_premium: 27.56, yearly_premium: 330.7 },
    },
    {
      case: "2 - Input is the valid minimum car_value.",
      input: { car_value: 1, risk_rating: 5 },
      output: { monthly_premium: 0.0, yearly_premium: 0.05 },
    },
    {
      case: "3 - Input is the valid minimum risk_rating.",
      input: { car_value: 1000, risk_rating: 1 },
      output: { monthly_premium: 0.83, yearly_premium: 10.0 },
    },
    {
      case: "4 - Input is the maximum valid risk_rating.",
      input: { car_value: 1000, risk_rating: 5 },
      output: { monthly_premium: 4.17, yearly_premium: 50.0 },
    },
    {
      case: "5 - Input is a large car_value.",
      input: { car_value: 100000, risk_rating: 5 },
      output: { monthly_premium: 416.67, yearly_premium: 5000.0 },
    },
    {
      case: "6 - Input is car_value with decimal numbers.",
      input: { car_value: 1000.5, risk_rating: 3 },
      output: { monthly_premium: 2.5, yearly_premium: 30.02 },
    },
    {
      case: "7 - Calculates correct monthly_premium.",
      input: { car_value: 1234, risk_rating: 4 },
      output: { monthly_premium: 4.11, yearly_premium: 49.36 },
    },
    {
      case: "8 - Calculates correct yearly_premium.",
      input: { car_value: 4321, risk_rating: 2 },
      output: { monthly_premium: 7.2, yearly_premium: 86.42 },
    },
  ];

  positiveTestCases.forEach((testCase) => {
    test(testCase.case, async () => {
      const response = await request(serverAddress)
        .post("/API3")
        .set("Accept", "application/json")
        .send(testCase.input);
      expect(response.status).toBe(200);
      expect(response.body).toEqual(testCase.output);
    });
  });
});

describe("API3 - Negative Cases", () => {
  const negativeTestCases = [
    {
      case: "1 - Input is a negative car_value.",
      input: { car_value: -100, risk_rating: 3 },
      output: { error: "there is an error" },
    },
    {
      case: "2 - car_value is zero.",
      input: { car_value: 0, risk_rating: 3 },
      output: { error: "there is an error" },
    },
    {
      case: "3 - Input is a negative risk_rating.",
      input: { car_value: 1000, risk_rating: -1 },
      output: { error: "there is an error" },
    },
    {
      case: "4 - risk_rating below range.",
      input: { car_value: 1000, risk_rating: 0 },
      output: { error: "there is an error" },
    },
    {
      case: "5 - risk_rating above range.",
      input: { car_value: 1000, risk_rating: 6 },
      output: { error: "there is an error" },
    },
    {
      case: "6 - Input is a non-numeric car_value.",
      input: { car_value: "1000", risk_rating: 3 },
      output: { error: "there is an error" },
    },
    {
      case: "7 - Input is a non-numeric risk_rating.",
      input: { car_value: 1000, risk_rating: "3" },
      output: { error: "there is an error" },
    },
    {
      case: "8 - Both inputs are null.",
      input: { car_value: null, risk_rating: null },
      output: { error: "there is an error" },
    },
    {
      case: "9 - Both inputs are undefined.",
      input: { car_value: undefined, risk_rating: undefined },
      output: { error: "there is an error" },
    },
    {
      case: "10 - Both inputs are objects.",
      input: { car_value: {}, risk_rating: {} },
      output: { error: "there is an error" },
    },
    {
      case: "11 - Input is an empty JSON object.",
      input: {},
      output: { error: "there is an error" },
    },
    {
      case: "12 - Input is an empty array.",
      input: [],
      output: { error: "there is an error" },
    },
    {
      case: "13 - Input is text.",
      input: "This is text",
      output: { error: "there is an error" },
    },
  ];

  negativeTestCases.forEach((testCase) => {
    test(testCase.case, async () => {
      const response = await request(serverAddress)
        .post("/API3")
        .set("Accept", "application/json")
        .send(testCase.input);
      expect(response.status).toBe(400);
      expect(response.body).toEqual(testCase.output);
    });
  });
});

