# Changelog

## [0.8.0](https://github.com/humanwhocodes/humanfs/compare/web-v0.7.0...web-v0.8.0) (2024-02-15)


### ⚠ BREAKING CHANGES

* Rewrite MemoryHfsImpl to support lastModified() ([#87](https://github.com/humanwhocodes/humanfs/issues/87))

### Features

* Add lastModified() method ([#84](https://github.com/humanwhocodes/humanfs/issues/84)) ([9cbcd03](https://github.com/humanwhocodes/humanfs/commit/9cbcd03c86e4c1bed5985e10da6ab452e8c2b44c))
* Rewrite MemoryHfsImpl to support lastModified() ([#87](https://github.com/humanwhocodes/humanfs/issues/87)) ([84e9812](https://github.com/humanwhocodes/humanfs/commit/84e98129e48acb3f2ea067b0ea745d591e8d8b91))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @humanfs/core bumped from ^0.11.0 to ^0.12.0
  * devDependencies
    * @humanfs/test bumped from ^0.10.0 to ^0.11.0
    * @humanfs/types bumped from ^0.9.0 to ^0.10.0

## [0.7.0](https://github.com/humanwhocodes/humanfs/compare/web-v0.6.0...web-v0.7.0) (2024-02-14)


### Features

* Add append() method ([#82](https://github.com/humanwhocodes/humanfs/issues/82)) ([ab7b978](https://github.com/humanwhocodes/humanfs/commit/ab7b978ff3be84dc3fd2fd4d6fa1131dfdec8134))
* Add move() and moveAll() methods ([#80](https://github.com/humanwhocodes/humanfs/issues/80)) ([85f100b](https://github.com/humanwhocodes/humanfs/commit/85f100b721c99b920b307779548c2a043e7e18b5))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @humanfs/core bumped from ^0.10.0 to ^0.11.0
  * devDependencies
    * @humanfs/test bumped from ^0.9.0 to ^0.10.0
    * @humanfs/types bumped from ^0.8.0 to ^0.9.0

## [0.6.0](https://github.com/humanwhocodes/humanfs/compare/web-v0.5.0...web-v0.6.0) (2024-02-09)


### Features

* Add copyAll() method ([#77](https://github.com/humanwhocodes/humanfs/issues/77)) ([3c0852a](https://github.com/humanwhocodes/humanfs/commit/3c0852af99cb835b3941f58fdc2206e7b1179e21))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @humanfs/core bumped from ^0.9.0 to ^0.10.0
  * devDependencies
    * @humanfs/test bumped from ^0.8.0 to ^0.9.0
    * @humanfs/types bumped from ^0.7.0 to ^0.8.0

## [0.5.0](https://github.com/humanwhocodes/humanfs/compare/web-v0.4.0...web-v0.5.0) (2024-02-08)


### Features

* Add copy() method ([#69](https://github.com/humanwhocodes/humanfs/issues/69)) ([f252bac](https://github.com/humanwhocodes/humanfs/commit/f252bac6692a5b5c973ee3c696f5190caa5f12c7))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @humanfs/core bumped from ^0.8.0 to ^0.9.0
  * devDependencies
    * @humanfs/test bumped from ^0.7.0 to ^0.8.0
    * @humanfs/types bumped from ^0.6.0 to ^0.7.0

## [0.4.0](https://github.com/humanwhocodes/humanfs/compare/web-v0.3.0...web-v0.4.0) (2024-02-07)


### Features

* Allow URL file and directory paths ([#62](https://github.com/humanwhocodes/humanfs/issues/62)) ([a767e37](https://github.com/humanwhocodes/humanfs/commit/a767e372287b1556c4c9e8bdb26c23ff81866f99))


### Bug Fixes

* Ensure list(".") works ([#68](https://github.com/humanwhocodes/humanfs/issues/68)) ([6245ea4](https://github.com/humanwhocodes/humanfs/commit/6245ea469cdc0a9aea29f980d277ac65aedc5085))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @humanfs/core bumped from ^0.7.0 to ^0.8.0
  * devDependencies
    * @humanfs/test bumped from ^0.6.1 to ^0.7.0
    * @humanfs/types bumped from ^0.5.1 to ^0.6.0

## [0.3.0](https://github.com/humanwhocodes/humanfs/compare/web-v0.2.0...web-v0.3.0) (2024-01-31)


### Features

* New Path class and refactors ([#58](https://github.com/humanwhocodes/humanfs/issues/58)) ([4ec3242](https://github.com/humanwhocodes/humanfs/commit/4ec3242024a52360a2314a1ffb286882ea1c18c1))


### Bug Fixes

* Order of exports and engines in package.json ([66204c2](https://github.com/humanwhocodes/humanfs/commit/66204c24bc2dd02380aa2fb3c5769ca2cf5238a7)), closes [#61](https://github.com/humanwhocodes/humanfs/issues/61)


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @humanfs/core bumped from ^0.6.0 to ^0.7.0
  * devDependencies
    * @humanfs/test bumped from ^0.6.0 to ^0.6.1
    * @humanfs/types bumped from ^0.5.0 to ^0.5.1

## [0.2.0](https://github.com/humanwhocodes/humanfs/compare/web-v0.1.0...web-v0.2.0) (2024-01-30)


### ⚠ BREAKING CHANGES

* Rename fsx -> humanfs ([#56](https://github.com/humanwhocodes/humanfs/issues/56))

### Features

* Rename fsx -&gt; humanfs ([#56](https://github.com/humanwhocodes/humanfs/issues/56)) ([f5dc533](https://github.com/humanwhocodes/humanfs/commit/f5dc533c8a46d45afd7aad602af39a6074f8a07b))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @humanfs/core bumped from ^0.5.0 to ^0.6.0
  * devDependencies
    * @humanfs/test bumped from ^0.5.0 to ^0.6.0
    * @humanfs/types bumped from ^0.4.0 to ^0.5.0

## [0.1.0](https://github.com/humanwhocodes/fsx/compare/fsx-web-v0.0.1...fsx-web-v0.1.0) (2024-01-27)


### Features

* Fsx implementation for browsers ([#49](https://github.com/humanwhocodes/fsx/issues/49)) ([0e99c40](https://github.com/humanwhocodes/fsx/commit/0e99c4019b0d315fa857c7aef585bddb9d44f1a2))
* New size() method ([#51](https://github.com/humanwhocodes/fsx/issues/51)) ([ffd12e6](https://github.com/humanwhocodes/fsx/commit/ffd12e6b0db318320dd5a9dbb8eb248106d60afa))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * fsx-core bumped from ^0.4.0 to ^0.5.0
  * devDependencies
    * fsx-test bumped from ^0.4.0 to ^0.5.0
    * fsx-types bumped from ^0.3.0 to ^0.4.0
