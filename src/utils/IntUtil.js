var StrictTypeIntError   = require("../errors/StrictTypeIntError")
  , StrictTypeIntEqError = require("../errors/StrictTypeIntEqError");

var IntUtil = {
  int: function(value) {
    return value;
  },

  isInt: function(value) {
    return true;
  },

  intEq: function(first, second) {
    return [first, second];
  },

  isIntEq: function(first, second) {
    return true;
  }
};

module.exports = IntUtil;