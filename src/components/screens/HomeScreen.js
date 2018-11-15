// @flow
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import UserList from '../../containers/ConnectedUserList';
import Search from '../../containers/ConnectedSearch';

class HomeScreen extends React.PureComponent {

  static navigationOptions = {
    headerTitle: <Search />,
  };

  render() {
    return (
      <View style={styles.wrapper}>
        <UserList />
      </View>
    );
  }

}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen;
