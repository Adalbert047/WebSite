function add(a, b) {
    return a + b;
  }




  QUnit.test('add()', assert => {
    assert.equal(square(2), 4);
    assert.equal(square(3), 9);
  });
