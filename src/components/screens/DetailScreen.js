// @flow

import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { Avatar, Card } from 'react-native-elements';

import { type UserType } from '../../types/dataType';

const Element = ({ text, icon }) => (
  <View style={styles.item}>
    <Entypo name={icon} size={32} />
    <Text style={styles.text}>{text}</Text>
  </View>
);

class DetailScreen extends React.PureComponent {

  render() {
    const { navigation } = this.props;
    const user: UserType = navigation.getParam('user', null);

    if (user === null) {
      return null;
    }


    return (
      <ScrollView contentContainerStyle={styles.wrapper}>
        <Avatar large source={{ uri: user.avatar }} rounded />
        <Text style={styles.item}>{user.username}</Text>
        <Card containerStyle={styles.item}>
          <Text>{user.bio}</Text>
        </Card>
        <Element text={user.phone} icon='phone' />
        <Element text={user.job} icon='aircraft' />
        <Element text={user.email} icon='mail' />
        <Element text={user.uuid} icon='classic-computer' />
      </ScrollView>
    );
  }

}

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 50,
  },
  text: {
    marginLeft: 10,
  },
});

export default DetailScreen;
