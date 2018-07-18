describe.skip('Main', function() {
  describe('Method A', function() {
    context('Case 1', function() {
      it('Shoud happen this lorem ipsum', function() {
      });
    });

    context('Case 2', function() {
      it.skip('should return that when lorem ispsum', function() {
      });

      it('should return that when lorem ispsum', function() {
      });
    });
  });

  describe('Method B', function() {
    it('should return that when lorem ispsum', function() {
    });
  });
});
