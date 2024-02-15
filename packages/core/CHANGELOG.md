# Changelog

### Dependencies

* The following workspace dependencies were updated
  * devDependencies
    * fsx-types bumped from ^0.0.2 to ^0.0.3

## [0.12.0](https://github.com/humanwhocodes/humanfs/compare/core-v0.11.0...core-v0.12.0) (2024-02-15)


### ⚠ BREAKING CHANGES

* Rewrite MemoryHfsImpl to support lastModified() ([#87](https://github.com/humanwhocodes/humanfs/issues/87))

### Features

* Add lastModified() method ([#84](https://github.com/humanwhocodes/humanfs/issues/84)) ([9cbcd03](https://github.com/humanwhocodes/humanfs/commit/9cbcd03c86e4c1bed5985e10da6ab452e8c2b44c))
* Rewrite MemoryHfsImpl to support lastModified() ([#87](https://github.com/humanwhocodes/humanfs/issues/87)) ([84e9812](https://github.com/humanwhocodes/humanfs/commit/84e98129e48acb3f2ea067b0ea745d591e8d8b91))


### Dependencies

* The following workspace dependencies were updated
  * devDependencies
    * @humanfs/types bumped from ^0.9.0 to ^0.10.0

## [0.11.0](https://github.com/humanwhocodes/humanfs/compare/core-v0.10.0...core-v0.11.0) (2024-02-14)


### Features

* Add append() method ([#82](https://github.com/humanwhocodes/humanfs/issues/82)) ([ab7b978](https://github.com/humanwhocodes/humanfs/commit/ab7b978ff3be84dc3fd2fd4d6fa1131dfdec8134))
* Add move() and moveAll() methods ([#80](https://github.com/humanwhocodes/humanfs/issues/80)) ([85f100b](https://github.com/humanwhocodes/humanfs/commit/85f100b721c99b920b307779548c2a043e7e18b5))


### Dependencies

* The following workspace dependencies were updated
  * devDependencies
    * @humanfs/types bumped from ^0.8.0 to ^0.9.0

## [0.10.0](https://github.com/humanwhocodes/humanfs/compare/core-v0.9.0...core-v0.10.0) (2024-02-09)


### Features

* Add copyAll() method ([#77](https://github.com/humanwhocodes/humanfs/issues/77)) ([3c0852a](https://github.com/humanwhocodes/humanfs/commit/3c0852af99cb835b3941f58fdc2206e7b1179e21))


### Dependencies

* The following workspace dependencies were updated
  * devDependencies
    * @humanfs/types bumped from ^0.7.0 to ^0.8.0

## [0.9.0](https://github.com/humanwhocodes/humanfs/compare/core-v0.8.0...core-v0.9.0) (2024-02-08)


### Features

* Add copy() method ([#69](https://github.com/humanwhocodes/humanfs/issues/69)) ([f252bac](https://github.com/humanwhocodes/humanfs/commit/f252bac6692a5b5c973ee3c696f5190caa5f12c7))


### Dependencies

* The following workspace dependencies were updated
  * devDependencies
    * @humanfs/types bumped from ^0.6.0 to ^0.7.0

## [0.8.0](https://github.com/humanwhocodes/humanfs/compare/core-v0.7.0...core-v0.8.0) (2024-02-07)


### Features

* Allow URL file and directory paths ([#62](https://github.com/humanwhocodes/humanfs/issues/62)) ([a767e37](https://github.com/humanwhocodes/humanfs/commit/a767e372287b1556c4c9e8bdb26c23ff81866f99))


### Dependencies

* The following workspace dependencies were updated
  * devDependencies
    * @humanfs/types bumped from ^0.5.1 to ^0.6.0

## [0.7.0](https://github.com/humanwhocodes/humanfs/compare/core-v0.6.0...core-v0.7.0) (2024-01-31)


### Features

* New Path class and refactors ([#58](https://github.com/humanwhocodes/humanfs/issues/58)) ([4ec3242](https://github.com/humanwhocodes/humanfs/commit/4ec3242024a52360a2314a1ffb286882ea1c18c1))


### Bug Fixes

* log entry format ([096aa00](https://github.com/humanwhocodes/humanfs/commit/096aa00c6315e201f7ceaaf829098ebd7b6fae3d))
* Order of exports and engines in package.json ([66204c2](https://github.com/humanwhocodes/humanfs/commit/66204c24bc2dd02380aa2fb3c5769ca2cf5238a7)), closes [#61](https://github.com/humanwhocodes/humanfs/issues/61)


### Dependencies

* The following workspace dependencies were updated
  * devDependencies
    * @humanfs/types bumped from ^0.5.0 to ^0.5.1

## [0.6.0](https://github.com/humanwhocodes/humanfs/compare/core-v0.5.0...core-v0.6.0) (2024-01-30)


### ⚠ BREAKING CHANGES

* Rename fsx -> humanfs ([#56](https://github.com/humanwhocodes/humanfs/issues/56))

### Features

* Rename fsx -&gt; humanfs ([#56](https://github.com/humanwhocodes/humanfs/issues/56)) ([f5dc533](https://github.com/humanwhocodes/humanfs/commit/f5dc533c8a46d45afd7aad602af39a6074f8a07b))


### Dependencies

* The following workspace dependencies were updated
  * devDependencies
    * @humanfs/types bumped from ^0.4.0 to ^0.5.0

## [0.5.0](https://github.com/humanwhocodes/fsx/compare/fsx-core-v0.4.0...fsx-core-v0.5.0) (2024-01-27)


### Features

* New size() method ([#51](https://github.com/humanwhocodes/fsx/issues/51)) ([ffd12e6](https://github.com/humanwhocodes/fsx/commit/ffd12e6b0db318320dd5a9dbb8eb248106d60afa))


### Bug Fixes

* Error class name misspelling ([30efc2a](https://github.com/humanwhocodes/fsx/commit/30efc2ade7778dac9fa734c36a4e84bb1f4c2db6))


### Dependencies

* The following workspace dependencies were updated
  * devDependencies
    * fsx-types bumped from ^0.3.0 to ^0.4.0

## [0.4.0](https://github.com/humanwhocodes/fsx/compare/fsx-core-v0.3.0...fsx-core-v0.4.0) (2024-01-23)


### ⚠ BREAKING CHANGES

* Safer delete(); new deleteAll() method ([#37](https://github.com/humanwhocodes/fsx/issues/37))

### Features

* Safer delete(); new deleteAll() method ([#37](https://github.com/humanwhocodes/fsx/issues/37)) ([2e85142](https://github.com/humanwhocodes/fsx/commit/2e85142e34bdc3cc18e18aa0b051cc9007fca4b8))
* write() to accept ArrayBuffer views as file contents ([1fd5517](https://github.com/humanwhocodes/fsx/commit/1fd55174a528ef3dcbabc154347006bec799f3f9))


### Bug Fixes

* Ensure type definitions are bundled with npm package ([342e6ca](https://github.com/humanwhocodes/fsx/commit/342e6ca3066cebc0f131f9e6737574103cc3adcc)), closes [#31](https://github.com/humanwhocodes/fsx/issues/31)


### Dependencies

* The following workspace dependencies were updated
  * devDependencies
    * fsx-types bumped from ^0.2.0 to ^0.3.0

## [0.3.0](https://github.com/humanwhocodes/fsx/compare/fsx-core-v0.2.0...fsx-core-v0.3.0) (2024-01-19)


### Features

* Add list() method ([#25](https://github.com/humanwhocodes/fsx/issues/25)) ([dad841b](https://github.com/humanwhocodes/fsx/commit/dad841b7c9f5312996ff23db9be36774af985157))


### Dependencies

* The following workspace dependencies were updated
  * devDependencies
    * fsx-types bumped from ^0.1.0 to ^0.2.0

## [0.2.0](https://github.com/humanwhocodes/fsx/compare/fsx-core-v0.1.1...fsx-core-v0.2.0) (2024-01-18)


### Features

* Add bytes() method, deprecate arrayBuffer() ([718c9c8](https://github.com/humanwhocodes/fsx/commit/718c9c84a0a1dcaef3cc032c882b1308e9cb3273))


### Dependencies

* The following workspace dependencies were updated
  * devDependencies
    * fsx-types bumped from ^0.0.3 to ^0.1.0

## [0.1.0](https://github.com/humanwhocodes/fsx/compare/fsx-core-v0.0.1...fsx-core-v0.1.0) (2024-01-06)

### Features

-   **core:** Add missing impl methods ([89d64de](https://github.com/humanwhocodes/fsx/commit/89d64de9caea64d2867c03875c6d67a22dff2b87))
-   **core:** Ensure write() validates file contents parameter. ([89cda51](https://github.com/humanwhocodes/fsx/commit/89cda51a973bb963ad92bcb37ce761e51aea9165))
-   **core:** Make logging more generic ([7b2c3b7](https://github.com/humanwhocodes/fsx/commit/7b2c3b72ea73fced857cb3e32f286058874625ec))
-   **deno:** Remove write() parameter validation. ([89cda51](https://github.com/humanwhocodes/fsx/commit/89cda51a973bb963ad92bcb37ce761e51aea9165))
-   Fsx class handles parameter validation ([1072b55](https://github.com/humanwhocodes/fsx/commit/1072b55e506390cccc7142f53bdd8c74d8dc0f60))
-   **memory:** Remove unnecessary parameter check. ([1072b55](https://github.com/humanwhocodes/fsx/commit/1072b55e506390cccc7142f53bdd8c74d8dc0f60))
-   **memory:** Remove write() paramater validation. ([89cda51](https://github.com/humanwhocodes/fsx/commit/89cda51a973bb963ad92bcb37ce761e51aea9165))
-   Move parameter validation for write() to Fsx ([89cda51](https://github.com/humanwhocodes/fsx/commit/89cda51a973bb963ad92bcb37ce761e51aea9165))
-   **node:** Remove unnecessary parameter check. ([1072b55](https://github.com/humanwhocodes/fsx/commit/1072b55e506390cccc7142f53bdd8c74d8dc0f60))
-   **node:** Remove write() parameter validation. ([89cda51](https://github.com/humanwhocodes/fsx/commit/89cda51a973bb963ad92bcb37ce761e51aea9165))
-   **test:** Remove test for checking filePath is not a number. ([1072b55](https://github.com/humanwhocodes/fsx/commit/1072b55e506390cccc7142f53bdd8c74d8dc0f60))

### Bug Fixes

-   **docs:** Correct package names in READMEs ([6c552ac](https://github.com/humanwhocodes/fsx/commit/6c552ac74542a245cdc2675101858da022336a1a))

### Dependencies

-   The following workspace dependencies were updated
    -   devDependencies
        -   fsx-types bumped from ^0.0.0 to ^0.0.2
