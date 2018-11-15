// @flow
import { createStackNavigator } from 'react-navigation';
import { HomeScreen, DetailScreen } from './../screens';

const RootNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Home',
    }),
  },
  Detail: {
    screen: DetailScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Detail',
    }),
  },
  /* Add more screen here */
});

export default RootNavigator;
