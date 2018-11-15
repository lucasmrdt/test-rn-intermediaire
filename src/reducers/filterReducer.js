// @flow

import {
  FILTER,
  CHANGE_FILTER_FIELD,
} from '../actions/filterActions';

import { type ActionType } from '../types/reduxType';
import { type GlobalStatus } from '../types/statusType';
import {
  type UserType,
} from '../types/dataType';

export type StateType = {
  filter: string,
  field: 'username'
    | 'uuid'
    | 'key'
    | 'job'
    | 'email'
    | 'phone'
    | 'compagny',
};

const initialState: StateType = {
  filter: '',
  field: 'username',
};

export default function reducer(
  state: StateType = initialState,
  action: ActionType,
): StateType {
  switch (action.type) {

    case FILTER:
      return {
        ...state,
        filter: action.payload,
      };

    case CHANGE_FILTER_FIELD:
      return {
        ...state,
        field: action.payload,
      };

    default:
      return state;

  }
}
