const test = require("node:test");
const assert = require("node:assert/strict");
const { isValidTitle } = require("./martin.cjs");

test("accepts a normal title", () => {
  assert.equal(isValidTitle("Learn Next.js"), true);
});

test("rejects an empty string", () => {
  assert.equal(isValidTitle(""), false);
});

test("accepts a title that is exactly 80 characters long", () => {
  assert.equal(isValidTitle("a".repeat(80)), true);
});
