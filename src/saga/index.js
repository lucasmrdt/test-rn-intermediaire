// @flow

import { all } from 'redux-saga/effects';
import usersSaga from './usersSaga';

function* saga(): Generator<*, *, *> {
  yield all([
    ...usersSaga,
  ]);
}

export default saga;
