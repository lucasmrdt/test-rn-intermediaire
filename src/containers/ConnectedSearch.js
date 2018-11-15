// @flow

import { connect } from 'react-redux';
import Search from '../components/Search';
import { filter, changeFilterField } from '../actions/filterActions';

import { type ReduxProps } from '../components/Search';
import { type StateType } from '../types/reduxType';

const mapStateToProps = (state: StateType): ReduxProps => ({
  value: state.filterReducer.filter,
});

const mapDispatchToProps: ReduxProps = {
  onChangeText: filter,
  onChangeFilterField: changeFilterField,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Search);
