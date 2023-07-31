# Fibonacci Sequence with Memoization

[![main](https://github.com/includeDaniel/fibonacci/actions/workflows/main.yml/badge.svg)](https://github.com/includeDaniel/fibonacci/actions/workflows/main.yml)
[![npm version](https://img.shields.io/npm/v/@includedaniel/fibonacci.svg?style=flat)](https://www.npmjs.com/package/@includedaniel/fibonacci)
[![codecov](https://codecov.io/gh/includeDaniel/fibonacci/branch/main/graph/badge.svg?token=JZWXY20HCS)](https://codecov.io/gh/includeDaniel/fibonacci)

Install:

```
npm i @includedaniel/fibonacci
```

```
yarn add @includedaniel/fibonacci
```

Usage:

```js
//module
import fibonacci from '@includedaniel/fibonacci'
console.log(fibonacci(25))

//commomjs
const fibonacci = require('@includedaniel/fibonacci')
console.log(fibonacci(25))
```

Running tests:

-   Run `yarn test` to execute the tests and export the reports to `/coverage` folder

Running lint:

-  Run `yarn lint` to execute the eslint to fix and find problems in your code
-  want to know more about eslint commands? [Follow the link](https://eslint.org/docs/latest/use/command-line-interface)

Running prettier:

-  Run `yarn format` to format the code according to established standards
-  Run `yarn type-check` to check the types in your code

Running rollup:

-  Run `yarn build` to execute the rollup
-  [Link for commands line flags of rollup](https://rollupjs.org/command-line-interface/#command-line-flags)


