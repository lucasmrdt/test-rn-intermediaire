// @flow
import { combineReducers } from 'redux';
import usersReducer from './usersReducer';
import filterReducer from './filterReducer';

import { type StateType as UserStateType } from './usersReducer';
import { type StateType as FilterStateType } from './filterReducer';

export type AppState = {
  usersReducer: UserStateType,
  filterReducer: FilterStateType,
};

const state: AppState = combineReducers({
  usersReducer,
  filterReducer,
});

export default state;
