# javascript_tutorials
1. run `yarn`
2. `yarn test` runs all tests
3. `yarn test <path_to_.test.js> runs a single test




1. yarn add  babel-jest --dev

2.
```json
{
  "scripts": {
    "test": "jest"
  },
  "jest": {
    "transform": {
      "^.+\\.jsx?$": "babel-jest"
    }
  }
}
```
3. yarn add babel-preset-env --dev
4. touch .babelrc