// @flow

import React from 'react';
import { FlatList, Text, View, StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import UserListItem from './UserListItem';

import {
  type UserType,
  type FilterType,
} from '../../types/dataType';
import { type GlobalStatus } from '../../types/statusType';

export type ReduxProps = {
  users: Array<UserType>,
  status: GlobalStatus,
  fetchUsers: Function,
  refreshUsers: Function,
  filter: string,
  filterField: string,
};

type Props = ReduxProps;

class UserList extends React.PureComponent<Props> {

  componentDidMount() {
    const { fetchUsers } = this.props;
    fetchUsers();
  }

  onPress = (uuid) => {
    const { navigation, users } = this.props;
    const selectedUser = users.find(user => user.uuid === uuid);
    navigation.navigate('Detail', { user: selectedUser });
  }

  get isFiltering() {
    const { filter } = this.props;
    return filter !== '';
  }

  filter = (items: Array<UserType>) => {
    const { filter, filterField } = this.props;
    const reg = RegExp(`^${filter}`, 'i');

    return items.filter(item => {
      const val = item[filterField];
      if (!val) return true;
      return `${val}`.match(reg);
    });
  }

  keyExtractor = (item: UserType) => `${item.uuid}`;

  renderLoading() {
    return (
      <Text>Loading ....</Text>
    );
  }

  renderEmpty() {
    return (
      <Text>Empty</Text>
    );
  }

  renderFooter = () => {
    const { status } = this.props;

    if (status !== 'loading') {
      return null;
    }

    return (
      <View>
        {!this.isFiltering && <Text>Loading...</Text>}
        <KeyboardSpacer />
      </View>
    );
  }

  renderItem = ({ item, index }: { item: UserType, index: number }) => (
    <UserListItem {...item} onPress={this.onPress} />
  );

  render() {
    const {
      users,
      status,
      fetchUsers,
      refreshUsers,
      filter,
    } = this.props;

    if (status === 'default' || status === 'refreshing') {
      return this.renderLoading();
    }

    return (
      <FlatList
        data={this.filter(users)}
        renderItem={this.renderItem}
        ListFooterComponent={this.renderFooter}
        ListEmptyComponent={this.renderEmpty}
        refreshing={status === 'refreshing'}
        keyExtractor={this.keyExtractor}
        style={styles.wrapper}
        onRefresh={refreshUsers}
        onEndReached={!this.isFiltering && fetchUsers}
        keyboardDismissMode='on-drag'
      />
    );
  }

}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
});

export default withNavigation(UserList);
