// @flow
import { createStackNavigator } from 'react-navigation';
import { Text } from 'react-native'
import { Screen1, Screen2 } from './../screens/Screens.sample';

const RootNavigator = createStackNavigator({
  Home: {
    screen: Screen1,
    navigationOptions: ({ navigation }) => ({
      title: 'Screen 1',
    }),
  },
  Infos: { screen: Screen2 },
});

export default RootNavigator;
