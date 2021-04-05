var assert = require('assert');
describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.strictEqual([1, 2, 3].indexOf(4), -1);
    });
  });
  describe('#sort()', function() {
    it('should return true when the values are in order', function() {
      assert.deepStrictEqual([5,3,6,1].sort(), [1,3,5,6]);
    });
  });
  describe('#reverse()', function() {
    it('should return the reverse of the array', function() {
      assert.deepStrictEqual([1,2,3,4,5].reverse(), [5,4,3,2,1]);
    });
  });
});
