# redux-utils

An undo redo package for redux

[![Build Status](https://travis-ci.org/intactile/redux-utils.svg?branch=master)](https://travis-ci.org/intactile/redux-utils)
[![Maintainability](https://api.codeclimate.com/v1/badges/720449d047afa55671a9/maintainability)](https://codeclimate.com/github/intactile/redux-utils/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/720449d047afa55671a9/test_coverage)](https://codeclimate.com/github/intactile/redux-utils/test_coverage)

## Installation

```bash
npm install @intactile/redux-utils
```

or

```bash
yarn add @intactile/redux-utils
```

## Usage

### createModuleReducer

Create a reduce which delegates to [case reducers](https://redux.js.org/recipes/structuring-reducers/refactoring-reducers-example#extracting-case-reducers):

```javascript
import { createModuleReducer } from "@intactile/redux-utils";

const initialState = 10;
const reducer = createModuleReducer(
  {
    ADD: (state, action) => state + action.payload,
    MULTIPLY: (state, action) => state * action.payload
  },
  1
);
```

### createActionCreator

```javascript
import { createActionCreator } from "@intactile/redux-utils";

const add = createActionCreator('ADD');
add(10): // => { type: ADD, payload: 10 }
```
