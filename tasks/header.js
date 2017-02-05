"use strict";

var pkg      = require("../package.json")
  , fs       = require("fs")
  , path     = require("path")
  , template = require("underscore.template")
  , args     = process.argv.slice(2);

if (args.length) {
  throw new Error("You are doing it wrong, use `node tasks/header.js` by reading stdin!");
}

function header(data) {
  var headerFile = fs.readFileSync(path.join(__dirname, "resources", "header.txt"), "utf8")
    , headerText = template(headerFile, { date: new Date().toISOString(), pkg: pkg });

  return headerText + data;
}

var stdin = process.openStdin()
  , data  = "";

stdin.setEncoding("utf8");

stdin.on("data", function(chunk) {
  data += chunk;
});

stdin.on("end", function() {
  process.stdout.write(header(data));
});