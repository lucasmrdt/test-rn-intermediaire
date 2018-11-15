// @flow

import React from 'react';
import { View } from 'react-native';
import { Avatar, ListItem } from 'react-native-elements';

import { UserType } from '../../types/dataType';

type Props = UserType & {
  onPress: Function,
};

class UserListItem extends React.PureComponent<Props> {

  onPress = () => {
    const { uuid, onPress } = this.props;
    onPress(uuid);
  }

  render() {
    const { avatar, username, job } = this.props;

    return (
      <ListItem
        roundAvatar
        onPress={this.onPress}
        avatar={{uri: avatar}}
        title={username}
        subtitle={job}
      />
    );
  }

}

export default UserListItem;
