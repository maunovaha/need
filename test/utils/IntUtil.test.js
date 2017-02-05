var IntUtil            = require("../../src/utils/IntUtil")
  , StrictTypeIntError = require("../../src/errors/StrictTypeIntError");

describe("IntUtil", function() {
  describe("#int()", function() {
    it("returns `value` when `value` is int", function() {
      (IntUtil.int(32)).should.be.exactly(32);
      (IntUtil.int(-135)).should.be.exactly(-135);
      (IntUtil.int(88.0)).should.be.exactly(88.0);
    });
    it("throws StrictTypeIntError when `value` is not int", function() {
      (function() { IntUtil.int(1); }).should.throw(StrictTypeIntError);
      // (IntUtil.int(-12.1)).should.be.false();
      // (IntUtil.int(true)).should.be.false();
      // (IntUtil.int(undefined)).should.be.false();
      // (IntUtil.int(null)).should.be.false();
      // (IntUtil.int(NaN)).should.be.false();
    });
  });
});