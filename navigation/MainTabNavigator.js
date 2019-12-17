import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import AddProjectScreen from '../screens/AddProjectScreen';
import AddButton from '../common/AddButton';

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  }
);

HomeStack.navigationOptions = {
  tabBarLabel: null,
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

HomeStack.path = '';

const AddStack = createStackNavigator({
  Add: AddProjectScreen,
});

AddStack.navigationOptions = {
  tabBarLabel: null,
  tabBarIcon: <AddButton />
  // tabBarIcon: ({ focused }) => (
  //   <TabBarIcon
  //     focused={focused}
  //     name={
  //       Platform.OS === 'ios'
  //         ? `ios-add-circle${focused ? '' : '-outline'}`
  //         : 'md-add-circle'
  //     }
  //   />
  // ),
};


const tabNavigator = createBottomTabNavigator({
  HomeStack,
  AddStack
},{
  tabBarOptions: { showLabel: false }
});

tabNavigator.path = '';

export default tabNavigator;
