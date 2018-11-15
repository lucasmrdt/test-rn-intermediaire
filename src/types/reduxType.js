// @flow

import { type UserActionType } from '../actions/usersActions';
import { type AppState } from '../reducers';

export type ActionType = {
  type: UserActionType,
  payload: ?Object,
};

export type StateType = AppState;
