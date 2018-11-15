// @flow

import { type UserType } from '../types/dataType';
import { type ActionType } from '../types/reduxType';

export type UserActionType = 'FETCH_USERS'
  | 'SUCCESS_FETCH_USERS'
  | 'FAIL_FETCH_USERS';

export const FETCH_USERS = 'FETCH_USERS';
export const fetchUsers = (): ActionType => ({
  type: FETCH_USERS,
});

export const REFRESH_USERS = 'REFRESH_USERS';
export const refreshUsers = (): ActionType => ({
  type: REFRESH_USERS,
});

export const SUCCESS_FETCH_USERS = 'SUCCESS_FETCH_USERS';
export const successFetchUsers = (users: Array<UsersType>): ActionType => ({
  type: SUCCESS_FETCH_USERS,
  payload: users,
});

export const FAIL_FETCH_USERS = 'FAIL_FETCH_USERS';
export const failFetchUsers = (): ActionType => ({
  type: FAIL_FETCH_USERS,
  payload: users,
});
