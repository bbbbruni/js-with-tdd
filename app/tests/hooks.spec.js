// Hooks are used to handle, for example, mocks or database dependencies
// so we don't need to do a "call" every it() test execution, we can control with hooks =D
// TODO: Create an README

describe('Hooks example', function() {

  // Run only once, before the block
  before(function() {
    console.log('before');
  });

  // Run all the time, before EACH block
  beforeEach(function() {
    console.log('beforeEach');
  });

  // Run only once, after the block
  after(function() {
    console.log('after');
  });

  // Run all the time, AFTER each block
  afterEach(function() {
    console.log('afterEach');
  });

  it('Test 1', function() {
    console.log('test 1');
  });

  it('Test 2', function() {
    console.log('test 2');
  });

})