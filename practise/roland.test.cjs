const test = require("node:test");
const assert = require("node:assert/strict");
const { isValidMinutes } = require("./roland.cjs")

test('Accept random integer between 1 and 180', () => {
    assert.equal(isValidMinutes(46), true)
})

test('Accept integer 180', () => {
    assert.equal(isValidMinutes(180), true)
})

test('Reject empty/undefined value', () => {
    assert.equal(isValidMinutes(), false)
})

test('Reject string value', () => {
    assert.equal(isValidMinutes("8"), false)
})

test('Reject value bigger than 180', () => {
    assert.equal(isValidMinutes(181), false)
})

test('Reject value smaller than 1', () => {
    assert.equal(isValidMinutes(0), false)
})
