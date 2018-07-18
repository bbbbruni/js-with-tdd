// TODO: Create an README

let expect = require('chai').expect;

describe('Chai methods', function() {
  var arr;
  var obj;

  beforeEach(function() {
    arr = [1, 2, 3];

    obj = {
      a: 1,
      b: 'bruno',
      c: 'curitiba'
    }
  });

  /**
   * Tests
   */

  it('should be an array', function() {
    expect(arr).to.be.an('array');
  });

  it('should return 3 when use pop in the array', function() {
    arr.pop()
    expect(arr).to.not.include(3);
  });

  it('should return size 2 when use pop in the array', function() {
    arr.pop();
    expect(arr).to.have.lengthOf(2);
  });

  it('should return size 4 when add new value in the array', function() {
    arr.push(4);
    expect(arr).to.have.lengthOf(4);
  });

  it('should return all keys from object', function() {
    expect(obj).to.have.all.keys('a', 'b', 'c');
  });

  it('should return any keys that is not in the object', function() {
    expect(obj).to.not.have.any.keys('e', 'f', 'g');
  });
});