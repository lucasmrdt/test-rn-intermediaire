// @flow

import {
  FETCH_USERS,
  REFRESH_USERS,
  FAIL_FETCH_USERS,
  SUCCESS_FETCH_USERS,
} from '../actions/usersActions';

import { type ActionType } from '../types/reduxType';
import { type GlobalStatus } from '../types/statusType';
import {
  type UserType,
  type FilterType,
} from '../types/dataType';

export type StateType = {
  users: Array<UserType>,
  status: GlobalStatus,
};

const initialState: StateType = {
  users: [],
  status: 'default',
};

export default function reducer(
  state: StateType = initialState,
  action: ActionType,
): StateType {
  switch (action.type) {

    case FETCH_USERS:
      return {
        ...state,
        status: 'loading',
      };

    case REFRESH_USERS:
      return {
        ...state,
        users: [],
        status: 'refreshing',
        filters: {
          username: '',
        },
      };

    case SUCCESS_FETCH_USERS:
      return {
        ...state,
        users: [ ...state.users, ...action.payload ],
        status: 'success',
      };

    case FAIL_FETCH_USERS:
      return {
        ...state,
        status: 'fail',
      };

    default:
      return state;

  }
}
