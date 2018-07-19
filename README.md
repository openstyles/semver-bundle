semver-bundle
=============

This repository bundles `semver` to a single `semverCompare(a, b)` function. You can find the bundle at `dist/semver.js`. This package is used by [openstyles/stylus](https://github.com/openstyles/stylus)

Usage:
```js
semverCompare("0.1.0", "0.1.0"); // 0
semverCompare("0.1.1", "0.1.0"); // 1
semverCompare("0.0.1", "0.1.0"); // -1
```

Changelog
---------

* 0.1.0 (Jul 19, 2018)

  - Initial release with `semver@5.5.0`.
