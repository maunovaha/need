var Need      = require("../../src/Need")
  , NeedError = require("../../src/errors/NeedError");

describe("Need", function() {
  describe("#int()", function() {
    it("returns `value` when `value` is int", function() {
      (Need.int(32)).should.be.exactly(32);
      (Need.int(-135)).should.be.exactly(-135);
      (Need.int(88.0)).should.be.exactly(88.0);
    });
    it("throws NeedError when `value` is not int", function() {
      (function() { Need.int(1); }).should.throw(NeedError);
      // (Need.int(-12.1)).should.be.false();
      // (Need.int(true)).should.be.false();
      // (Need.int(undefined)).should.be.false();
      // (Need.int(null)).should.be.false();
      // (Need.int(NaN)).should.be.false();
    });
  });
});