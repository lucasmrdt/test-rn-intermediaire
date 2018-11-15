// @flow

import { type UserType } from '../types/dataType';
import { type ActionType } from '../types/reduxType';

export type UserActionType = 'FILTER';

export const FILTER = 'FILTER';
export const filter = (filter: string): ActionType => ({
  type: FILTER,
  payload: filter,
});

export const CHANGE_FILTER_FIELD = 'CHANGE_FILTER_FIELD';
export const changeFilterField = (filterField: string): ActionType => ({
  type: CHANGE_FILTER_FIELD,
  payload: filterField,
});
