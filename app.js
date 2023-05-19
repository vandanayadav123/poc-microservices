require("dotenv").config({ silent: true });
require("babel-register")({
  presets: ["es2016-node4", "es2017"],
});

const path = require("path");
require(path.resolve("./server"));
