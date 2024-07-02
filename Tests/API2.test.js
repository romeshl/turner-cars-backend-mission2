const request = require("supertest");
const serverAddress = "http://localhost:3000"

describe("POST /API2", () => {
    // Positive Test Cases
it("string containing all keywords exactly once", async () => {
  const response = await request(serverAddress)
    .post("/API2")
    .set("Accept", "application/json")
    .send({
      claim_history: "collide crash scratch bump smash smash smash",
    });
  expect(response.status).toBe(200);
  expect(response.body).toEqual({ risk_rating: 5 });
});

it("string containing 'no accidents'", async () => {
  const response = await request(serverAddress)
    .post("/API2")
    .set("Accept", "application/json")
    .send({
      claim_history: "no accidents",
    });
  expect(response.status).toBe(200);
  expect(response.body).toEqual({ risk_rating: 1 });
});

it("string containing one keyword multiple times", async () => {
  const response = await request(serverAddress)
    .post("/API2")
    .set("Accept", "application/json")
    .send({
      claim_history: "crash crash crash",
    });
  expect(response.status).toBe(200);
  expect(response.body).toEqual({ risk_rating: 3 });
});

it("string containing multiple keywords multiple times", async () => {
  const response = await request(serverAddress)
    .post("/API2")
    .set("Accept", "application/json")
    .send({
      claim_history: "collide bump collide smash bump",
    });
  expect(response.status).toBe(200);
  expect(response.body).toEqual({ risk_rating: 5 });
});

it("string containing a keyword with mixed case", async () => {
  const response = await request(serverAddress)
    .post("/API2")
    .set("Accept", "application/json")
    .send({
      claim_history: "CrAsh",
    });
  expect(response.status).toBe(200);
  expect(response.body).toEqual({ risk_rating: 1 });
});

it("string containing a keyword as part of another word", async () => {
  const response = await request(serverAddress)
    .post("/API2")
    .set("Accept", "application/json")
    .send({
      claim_history: "precrash postcrash",
    });
  expect(response.status).toBe(200);
  expect(response.body).toEqual({ risk_rating: 2 });
});

it("string containing a keyword with punctuation marks around it", async () => {
  const response = await request(serverAddress)
    .post("/API2")
    .set("Accept", "application/json")
    .send({
      claim_history: "crash, bump.",
    });
  expect(response.status).toBe(200);
  expect(response.body).toEqual({ risk_rating: 2 });
});

it("string containing a keyword at the very beginning/end", async () => {
  const response = await request(serverAddress)
    .post("/API2")
    .set("Accept", "application/json")
    .send({
      claim_history: "crash",
    });
  expect(response.status).toBe(200);
  expect(response.body).toEqual({ risk_rating: 1 });
});
    

    // Negative Test cases
it("an empty string", async () => {
  const response = await request(serverAddress)
    .post("/API2")
    .set("Accept", "application/json")
      .send({
          claim_history: ""});
  expect(response.status).toBe(400);
  expect(response.body).toEqual({ error: "there is an error" });
});

it("string containing only spaces", async () => {
  const response = await request(serverAddress)
    .post("/API2")
    .set("Accept", "application/json")
    .send({
      claim_history: "     ",
    });
  expect(response.status).toBe(400);
  expect(response.body).toEqual({ error: "there is an error" });
});

it("string that does not contain any keywords", async () => {
  const response = await request(serverAddress)
    .post("/API2")
    .set("Accept", "application/json")
    .send({
      claim_history: "hello world",
    });
  expect(response.status).toBe(400);
  expect(response.body).toEqual({ error: "there is an error" });
});

it("input is null", async () => {
  const response = await request(serverAddress)
    .post("/API2")
    .set("Accept", "application/json")
    .send({
      claim_history: null,
    });
  expect(response.status).toBe(400);
  expect(response.body).toEqual({ error: "there is an error" });
});

it("input is undefined", async () => {
  const response = await request(serverAddress)
    .post("/API2")
    .set("Accept", "application/json")
    .send({
      claim_history: undefined,
    });
  expect(response.status).toBe(400);
  expect(response.body).toEqual({ error: "there is an error" });
});

it("input is a number", async () => {
  const response = await request(serverAddress)
    .post("/API2")
    .set("Accept", "application/json")
    .send({
      claim_history: 123,
    });
  expect(response.status).toBe(400);
  expect(response.body).toEqual({ error: "there is an error" });
});

it("input is an object", async () => {
  const response = await request(serverAddress)
    .post("/API2")
    .set("Accept", "application/json")
    .send({
      claim_history: {},
    });
  expect(response.status).toBe(400);
  expect(response.body).toEqual({ error: "there is an error" });
});

it("input is an array", async () => {
  const response = await request(serverAddress)
    .post("/API2")
    .set("Accept", "application/json")
    .send({
      claim_history: [],
    });
  expect(response.status).toBe(400);
  expect(response.body).toEqual({ error: "there is an error" });
});

it("input is a boolean true", async () => {
  const response = await request(serverAddress)
    .post("/API2")
    .set("Accept", "application/json")
    .send({
      claim_history: true,
    });
  expect(response.status).toBe(400);
  expect(response.body).toEqual({ error: "there is an error" });
});

it("input is a boolean false", async () => {
  const response = await request(serverAddress)
    .post("/API2")
    .set("Accept", "application/json")
    .send({
      claim_history: false,
    });
  expect(response.status).toBe(400);
  expect(response.body).toEqual({ error: "there is an error" });
});

it("input is a function", async () => {
  const response = await request(serverAddress)
    .post("/API2")
    .set("Accept", "application/json")
    .send({
      claim_history: () => {},
    });
  expect(response.status).toBe(400);
  expect(response.body).toEqual({ error: "there is an error" });
});

it("input is a symbol", async () => {
  const response = await request(serverAddress)
    .post("/API2")
    .set("Accept", "application/json")
    .send({
      claim_history: Symbol("test"),
    });
  expect(response.status).toBe(400);
  expect(response.body).toEqual({ error: "there is an error" });
});

it("input is a BigInt", async () => {
  const response = await request(serverAddress)
    .post("/API2")
    .set("Accept", "application/json")
    .send({
      claim_history: BigInt(123).toString(),
    });
  expect(response.status).toBe(400);
  expect(response.body).toEqual({ error: "there is an error" });
});
});

