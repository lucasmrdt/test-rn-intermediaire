// @flow

import { takeLatest, select, put, call } from 'redux-saga/effects';
import {
  FETCH_USERS,
  REFRESH_USERS,
  successFetchUsers,
  failFetchUsers,
} from '../actions/usersActions';
import fetchUsersApi from '../api';

import { type StateType } from '../types/reduxType';

function* fetchUsersWatcher() {
  try {
    const users = yield call(fetchUsersApi);
    yield put(successFetchUsers(users));
  } catch(e) {
    yield put(failFetchUsers());
  }
}

const usersSaga = [
  takeLatest(FETCH_USERS, fetchUsersWatcher),
  takeLatest(REFRESH_USERS, fetchUsersWatcher),
];

export default usersSaga;
