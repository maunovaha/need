var NeedError = require("./errors/NeedError");

// Q:
// Do we need separate error classes or can we make one single error to behave as a
// different error class to be catched?

var Need = {
  /**
   *
   */
  int: function(value) {
    if(this.isInt(value)) {
      return value;
    }
    throw new Error("Value needs to be an integer !");
  },

  /**
   *
   */
  intBetween: function(value, min, max) {
    if(this.isIntGroup([value, min, max]) && this.isIntGt(value, min) && this.isIntLt(value, max)) {
      return value;
    }
    throw new Error("Value needs to be an integer between " + min + " - " + max + " !");
  },

  /**
   *
   */
  isIntGt: function(value, min) {
    return this.isIntGroup([value, min]) && value > min;
  },

  /**
   *
   */
  isIntLt: function(value, max) {
    return this.isIntGroup([value, max]) && value < max;
  },

  /**
   *
   */
  isInt: function(value) {
    return typeof value === "number";
  },

  /**
   *
   */
  isIntGroup: function(values) {
    for(var i = 0; i < this.array(values).length; i++) {
      this.isInt(values[i]);
    }
    return true;
  },

  /**
   *
   */
  array: function(value) {
    if (this.isArray(value)) {
      return value;
    }
    throw new Error("Value needs to be an array !");
  },

  /**
   *
   */
  isArray: function(value) {
    return true;
  }
};

module.exports = Need;