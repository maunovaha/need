var NeedError = function(name, message) {
  // TODO: Call inherit error..
  this.name = name;
  this.message = message;
  // TODO: Check browsers...
  this.stack = (new Error(message)).stack;
};

module.exports = NeedError;
