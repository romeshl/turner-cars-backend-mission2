const request = require("supertest");
const serverAddress = "http://localhost:3000"

describe("API2 - Positive Test Cases.", () => {
  const positiveTestCases = [
    {
      case: "1 - Input containing all the keywords exactly once.",
      input: { claim_history: "collide crash scratch bump smash accident" },
      output: { risk_rating: 5 },
    },
    {
      case: "2 - Input containing the text 'No accidents'.",
      input: { claim_history: "no accidents" },
      output: { risk_rating: 1 },
    },
    {
      case: "3 - Input containing one keyword multiple times.",
      input: { claim_history: "crash crash crash" },
      output: { risk_rating: 3 },
    },
    {
      case: "4 - Input containing multiple keywords multiple times.",
      input: { claim_history: "collide bump collide smash bump" },
      output: { risk_rating: 5 },
    },
    {
      case: "5 - Input containing a keyword with mixed case.",
      input: { claim_history: "had one cRaSh" },
      output: { risk_rating: 1 },
    },
    {
      case: "6 - Input containing a keyword as part of another word.",
      input: { claim_history: "Precrash it was in good condition. Postcrash had some painting done." },
      output: { risk_rating: 2 },
    },
    {
      case: "7 - Input containing a keyword with punctuation marks around it.",
      input: { claim_history: "crash, bump. 'smash'" },
      output: { risk_rating: 3 },
    },
    {
      case: "8 - Input containing a keyword at the very beginning/end.",
      input: { claim_history: "crash then few more scratches and a bump" },
      output: { risk_rating: 3 },
    },
  ];
  positiveTestCases.forEach((testCase) => {
    test(testCase.case, async () => {
      const response = await request(serverAddress)
        .post("/API2")
        .set("Accept", "application/json")
        .send(testCase.input);
      expect(response.status).toBe(200);
      expect(response.body).toEqual(testCase.output);
    });
  });

});


describe("API2 - Negative Cases", () => {
  const negativeTestCases = [
    {
      case: "1 - Input is an empty string.",
      input: { claim_history: "" },
      output: { error: "there is an error" },
    },
    {
      case: "2 - Input containing only spaces.",
      input: { claim_history: "       " },
      output: { error: "there is an error" },
    },
    {
      case: "3 - Input that does not contain any keywords.",
      input: { claim_history: "hello world" },
      output: { error: "there is an error" },
    },
    {
      case: "4 - Input is null.",
      input: { claim_history: null },
      output: { error: "there is an error" },
    },
    {
      case: "5 - Input is undefined.",
      input: { claim_history: undefined },
      output: { error: "there is an error" },
    },
    {
      case: "6 - Input is a number.",
      input: { claim_history: 123 },
      output: { error: "there is an error" },
    },
    {
      case: "7 - Input is an object.",
      input: { claim_history: {} },
      output: { error: "there is an error" },
    },
    {
      case: "8 - Input is an array.",
      input: { claim_history: [] },
      output: { error: "there is an error" },
    },
    {
      case: "9 - Input is a boolean true.",
      input: { claim_history: true },
      output: { error: "there is an error" },
    },
    {
      case: "10 - Input is a boolean false.",
      input: { claim_history: false },
      output: { error: "there is an error" },
    },
    {
      case: "11 - Input is a function.",
      input: { claim_history: () => { } },
      output: { error: "there is an error" },
    },
    {
      case: "12 - Input is a symbol.",
      input: { claim_history: Symbol("test") },
      output: { error: "there is an error" },
    },
    {
      case: "13 - Input is a BigInt.",
      input: { claim_history: BigInt(123).toString() },
      output: { error: "there is an error" },
    },
    {
      case: "14 - Input is an empty JSON object.",
      input: {},
      output: { error: "there is an error" },
    },
    {
      case: "15 - Input is an empty array.",
      input: [],
      output: { error: "there is an error" },
    },
    {
      case: "16 - Input is empty.",
      input: "",
      output: { error: "there is an error" },
    },
    {
      case: "17 - Input is text.",
      input: "This is text",
      output: { error: "there is an error" },
    },
  ];

  negativeTestCases.forEach((testCase) => {
    test(testCase.case, async () => {
      const response = await request(serverAddress)
        .post("/API2")
        .set("Accept", "application/json")
        .send(testCase.input);
      expect(response.status).toBe(400);
      expect(response.body).toEqual(testCase.output);
    });
  });
});

