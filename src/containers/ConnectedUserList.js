// @flow

import { connect } from 'react-redux';
import UserList from '../components/UserList';
import { fetchUsers, refreshUsers } from '../actions/usersActions';

import { type ReduxProps } from '../components/UserList';
import { type StateType } from '../types/reduxType';

const mapStateToProps = (state: StateType): ReduxProps => ({
  users: state.usersReducer.users,
  status: state.usersReducer.status,
  filter: state.filterReducer.filter,
  filterField: state.filterReducer.field,
});

const mapDispatchToProps: ReduxProps = {
  fetchUsers,
  refreshUsers,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserList);
