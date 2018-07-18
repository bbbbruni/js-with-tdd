// Hooks are used to handle, for example, mocks or database dependencies
// so we don't need to do a "call" every it() test execution, we can control with hooks =D
// TODO: Create an README

describe('Hooks example', function() {
  var arr;

  // Run only once, before the block
  before(function() {
  });

  // Run all the time, before EACH block
  beforeEach(function() {
    // arr will be used on each test block,
    // making each test independent
    arr = [1, 2, 3];
  });

  // Run only once, after the block
  after(function() {
    // I could use this hook to clean our array if it's necessary
  });

  // Run all the time, AFTER each block
  afterEach(function() {
  });

  it('should return 3 when use pop in the array', function() {
    console.log(arr.pop());
  });

  it('should return size 2 when use pop in the array', function() {
    arr.pop();
    console.log(arr.length);
  });

});

// EXECUTION TIME

// before
// beforeEach
// test 1
//     ✓ Test 1
// afterEach
// beforeEach
// test 2
//     ✓ Test 2
// afterEach
// after