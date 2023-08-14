const hello = require("../index");


describe('testing index file', () => {
  test('empty string should result in zero', () => {
    expect(hello('')).toBe(0);
  });
});

