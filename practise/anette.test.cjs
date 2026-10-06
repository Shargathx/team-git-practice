const test = require('node:test');
const assert = require('node:assert/strict');

const { countCompleted } = require('./anette.cjs');

test('counts items that are completed', () => {
  const items = [
    { completed: true },
    { completed: false },
    { completed: true }
  ];

  assert.equal(countCompleted(items), 2);
});

test('returns 0 when no items are completed', () => {
  const items = [
    { completed: false },
    { completed: false }
  ];

  assert.equal(countCompleted(items), 0);
});

test('returns 0 for an empty array', () => {
  assert.equal(countCompleted([]), 0);
});