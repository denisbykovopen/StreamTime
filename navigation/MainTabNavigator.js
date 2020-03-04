import React from "react";
import { Platform } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";
import TabBarIcon from "../components/TabBarIcon";
import HomeScreen from "../screens/HomeScreen";
import AddProjectScreen from "../screens/AddProjectScreen";
import AddButton from "../common/AddButton";
import Colors from "../constants/Colors";
import Layout from "../constants/Layout";
import { SettingsIcon } from "../common/SettingsIcon";
import HomeIcon from "../common/HomeIcon";
import CurrentScreen from "../screens/CurrentScreen";
import RocketIcon from "../common/RocketIcon";
// import BoxScreen from "../screens/BoxScreen";
import BoxIcon from "../common/BoxIcon";
import SettingsScreen from "../screens/SettingsScreen";
import AddIcon from "../common/AddIcon";

import ProjectDetailsScreen from "../screens/ProjectDetailsScreen";
import EditProjectScreen from "../screens/EditProjectScreen";
import ProcessScreen from "../screens/ProcessScreen";
import ToolsScreen from "../screens/ToolsScreen";
import AddToolsScreen from "../screens/AddToolsScreen";

import ProductsScreen from '../screens/ProductsScreen';
import ProductTrackScreen from '../screens/ProductTrackScreen';

const HomeStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: () => ({
      header: null
    })
  }
});
HomeStack.navigationOptions = {
  tabBarLabel: null,
  tabBarIcon: ({ focused }) => <HomeIcon focused={focused} />
};
HomeStack.path = "";

const CurrentStack = createStackNavigator({
  Current: CurrentScreen,
  Details: {
    screen: ProjectDetailsScreen,
    navigationOptions: () => ({
      header: null
    })
  },
  Edit: {
    screen: EditProjectScreen,
    navigationOptions: () => ({
      header: null
    })
  }
});
CurrentStack.navigationOptions = {
  tabBarLabel: null,
  tabBarIcon: ({ focused }) => <RocketIcon focused={focused} />
};
CurrentStack.path = "";

const AddStack = createStackNavigator({
  Add: AddProjectScreen,
  Proc: ProcessScreen,
  Tools: {
    screen: ToolsScreen,
    navigationOptions: () => ({
      header: null
    })
  },
  AddTool: AddToolsScreen,
});
AddStack.navigationOptions = {
  tabBarLabel: null,
  tabBarIcon: ({ focused }) => <AddIcon focused={focused} />
};
AddStack.path = "";

const ProductsStack = createStackNavigator({
  Products: {
    screen: ProductsScreen,
    navigationOptions: () => ({
      header: null
    })
  },
  ProductTrack: {
    screen: ProductTrackScreen,
    navigationOptions: () => ({
      header: null
    })
  }
});
ProductsStack.navigationOptions = {
  tabBarLabel: null,
  tabBarIcon: ({ focused }) => <BoxIcon focused={focused} />
};
ProductsStack.path = "";

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen
});
SettingsStack.navigationOptions = {
  tabBarLabel: null,
  tabBarIcon: ({ focused }) => <SettingsIcon focused={focused} />
};
SettingsStack.path = "";

const tabNavigator = createBottomTabNavigator(
  {
    HomeStack,
    CurrentStack,
    AddStack,
    ProductsStack,
    SettingsStack
  },
  {
    tabBarOptions: {
      showLabel: false,
      activeTintColor: Colors.buttonColor,
      inactiveTintColor: Colors.black,
      style: {
        position: "absolute",
        bottom: 0,
        // display: 'flex',
        // alignItems: 'center',
        // justifyContent: 'center',
        width: Layout.window.width,
        height: Layout.window.height * 0.125,
        zIndex: 1,
        backgroundColor: Colors.w,
        borderTopLeftRadius:
          Math.round(Layout.window.width + Layout.window.height) / 2,
        borderTopRightRadius:
          Math.round(Layout.window.width + Layout.window.height) / 2,
        borderTopColor: Colors.w
      }
      // tabStyle: {
      //   borderTopLeftRadius: Math.round(Layout.window.width + Layout.window.height) / 2,
      //   borderTopRightRadius: Math.round(Layout.window.width + Layout.window.height) / 2,
      // }
    }
  }
);

tabNavigator.path = "";

export default tabNavigator;
