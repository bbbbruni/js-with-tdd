/**
* - describe() separate block to test methods of a function (Init our tests and we can have many describes we want);
* - context() separates our test in cases based on a method;
* - it() is what will run on a test
*/

// TODO: Create an README

describe('Main', function() {
  describe('Method A', function() {
    context('Case 1', function() {
      it('Shoud happen this lorem ipsum', function() {
        // Need something to happen
        // Receive data and make it valid
        // Wait a return true or false to pass or not the test
      });
    });

    // I can have multiple cases for a method and multiple tests for a case
    // always looking on current context
    context('Case 2', function() {
      it('should return that when lorem ispsum', function() {
        // Need something to happen
        // Receive data and make it valid
        // Wait a return true or false to pass or not the test
      });

      it('should return that when lorem ispsum', function() {
        // Need something to happen
        // Receive data and make it valid
        // Wait a return true or false to pass or not the test
      });
    });

    // Focus only on context block of a test with .only
    context.only('Case 3', function() {
      it('should return that when lorem ispsum', function() {
      });
    });

    // Skip context block of a test with .skip on .it()
    context('Case 4', function() {
      it.skip('should return that when lorem ispsum', function() {
      });
    });
  });

  // I can have multiple describe() to allocate a test block
  // and use it for a new method
  describe('Method B', function() {
    //...
  });
});
