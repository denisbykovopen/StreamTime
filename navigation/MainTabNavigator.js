import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import AddProjectScreen from '../screens/AddProjectScreen';
import AddButton from '../common/AddButton';
import Colors from '../constants/Colors';
import Layout from '../constants/Layout';

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
  tabBarOptions: { 
    showLabel: false,
    activeTintColor: Colors.buttonColor,
    inactiveTintColor: Colors.black,
    style: {
      // borderTopLeftRadius: 380.5, 
      // borderTopRightRadius:21,
      // backgroundColor:"#000000",
      position:'absolute',
      bottom: 0,
      display: 'flex',
      // padding:10,
      // width: DEVICE_WIDTH,
      height: Layout.window.height * 0.125,
      zIndex: 8 ,
      backgroundColor: Colors.w,
      borderTopLeftRadius: Math.round(Layout.window.width + Layout.window.height) / 2,
      borderTopRightRadius: Math.round(Layout.window.width + Layout.window.height) / 2,
      // borderRadius: Math.round(Layout.window.width + Layout.window.height) / 2,
      borderTopColor: Colors.w,
      width: Layout.window.width,
    },
    tabStyle: {
      borderTopLeftRadius: Math.round(Layout.window.width + Layout.window.height) / 2,
      borderTopRightRadius: Math.round(Layout.window.width + Layout.window.height) / 2,
    }
   }
});

tabNavigator.path = '';

export default tabNavigator;
