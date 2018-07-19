const assert = require("assert");
const fs = require("fs");

eval(fs.readFileSync("dist/semver.js", "utf-8"));

assert.equal(semverCompare("0.1.0", "0.1.0"), 0);
assert.equal(semverCompare("0.1.1", "0.1.0"), 1);
assert.equal(semverCompare("0.1.0", "1.1.0"), -1);
assert.throws(() => semverCompare("not a semver", "0.1.0"));
