<h1 align="center">dannyfranca/typescript-boilerplate</h1>
<p align="center">TypeScript starting point handsome, clean and easy with test, CI, code coverage, documentation and git hooks.</p>
<p align="center">

<a href="https://npmjs.com/package/@dannyfranca/typescript-boilerplate" target="_blank">
    <img src="https://img.shields.io/npm/dt/@dannyfranca/typescript-boilerplate.svg?style=flat-square&logo=npm" />
</a>

<a href="https://npmjs.com/package/@dannyfranca/typescript-boilerplate" target="_blank">
    <img src="https://img.shields.io/npm/v/@dannyfranca/typescript-boilerplate/latest.svg?style=flat-square&logo=npm" />
</a>

<a href="https://travis-ci.com/dannyfranca/typescript-boilerplate" target="_blank">
    <img src="https://img.shields.io/travis/dannyfranca/typescript-boilerplate?style=flat-square&logo=travis" />
</a>

<a href="https://circleci.com/gh/dannyfranca/typescript-boilerplate" target="_blank">
    <img src="https://img.shields.io/circleci/project/github/dannyfranca/typescript-boilerplate?style=flat-square&logo=circleci" />
</a>

<a href="https://codecov.io/gh/dannyfranca/typescript-boilerplate" target="_blank">
    <img src="https://img.shields.io/codecov/c/github/dannyfranca/typescript-boilerplate?style=flat-square&logo=codecov" />
</a>

<a href="https://david-dm.org/dannyfranca/typescript-boilerplate" target="_blank">
    <img src="https://david-dm.org/dannyfranca/typescript-boilerplate/status.svg?style=flat-square" />
</a>

<a href="https://www.codacy.com/manual/dannyfranca/typescript-boilerplate" target="_blank">
    <img src="https://img.shields.io/codacy/grade/addca1007fb044c3a994c7e0ec504092?style=flat-square&logo=codacy" />
</a>

</p>

## Getting Started

-   Clone repository

```bash
git clone https://github.com/dannyfranca/typescript-boilerplate.git {{project_name}}
```

-   Install dependencies

```bash
cd {{project_name}}
yarn
```

## Warnings

-   Experimental environment. Could change many times between versions, at least until v1.0 arrives.
-   If you don't want to use yarn, change yarn run for npm run in package.json commands and .lintstagedrc

## Libs

-   Compiler - <a href="https://www.typescriptlang.org" target="_blank">TypeScript</a>
-   Linting - <a href="https://typescript-eslint.io" target="_blank">TypeScript ESLint</a>
-   Code Formatter - <a href="https://prettier.io" target="_blank">Prettier</a>
-   Bundler - <a href="https://parceljs.org" target="_blank">Parcel JS</a>
-   E2E/Unit/CI Suite - <a href="https://www.cypress.io" target="_blank">Cypress</a>
-   Coverage Reports - <a href="https://istanbul.js.org" target="_blank">Istanbul</a>
-   Continuous Integration - <a href="https://circleci.com" target="_blank">CircleCI</a> / <a href="https://travis-ci.com" target="_blank">TravisCI</a>
-   Code Coverage - <a href="https://codecov.io" target="_blank">Codecov</a>
-   Git Hooks - <a href="https://github.com/typicode/husky" target="_blank">Husky</a> + <a href="https://github.com/okonet/lint-staged" target="_blank">lint-staged</a>

## Usage

Start writing in src folder. modify any project files that fits you needs.

In package.json you have commands to dev, test, compile and build.

### NPM Commands

#### Test

Commands to test you application

-   _dev_: Start developing with Parcel, Cypress and code coverage, all hot reloading
-   _test_: If you want to test and generate code coverage reports, use before publish
-   _cy:open_: Open cypress to test (server must be already running). Useful if you are already developing and just need to make some tests, without reload the whole process
-   _cy:run_: Run tests in terminal, without UI. Useful the same way cypress:open is
-   _coverage_: You don't need to run this command, it's for Circle CI perform Continuous Integration after git push

#### Bundle

Commands to help you bundling you front-end application

-   _start_: to develop only with Parcel, without tests and code coverage
-   _build_: Generate production bundles from public to dist folder
-   _doc_: Generate documentation from comments with Typedoc

#### Module

Commands to help you compile your TypeScript application to interoperable modules.

-   _compile_: Compile your TypeScript files in "src" to "lib" folder, with types, making your module interoperable with JavaScript
-   _compile:watch_: Same as compile, but keeps a process watching and recompiling the changes
-   _compile:types_: Only emits the type declaration files
-   _type-check_: Only check the types, good to run between commits to get errors when working with multiple files (If using built in git hooks with Husky, executed automatically before any commit)

## Conclusion

Have a Nice Coding! 🤓

## License

[MIT License](./LICENSE)

Copyright (c) Danny França <mailto:contato@dannyfranca.com>
