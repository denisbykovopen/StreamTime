import { createAppContainer, createSwitchNavigator, createStackNavigator } from "react-navigation";
import AuthLoadingScreen from "../screens/AuthLoadingScreen";
import SignInScreen from "../screens/SignInScreen";
import SignUpScreen from "../screens/SignUpScreen";
import MainTabNavigator from './MainTabNavigator';
import PasswordChangeScreen from '../screens/PasswordChangeScreen';
import PasswordForgetScreen from '../screens/PasswordForgetScreen';

const AuthStack = createStackNavigator({
  SignIn: {
    screen: SignInScreen
  },
  SignUp: {
    screen: SignUpScreen
  }
});

const PassStack = createStackNavigator({
  Forget: {
    screen: PasswordForgetScreen,
    navigationOptions: () => ({
      headerBackTitle: "back"
    })
  },
  Change: {
    screen: PasswordChangeScreen,
    // navigationOptions: () => ({
    //   headerBackTitle: "back"
    // })
  }
});

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      Auth: AuthStack,
      Main: MainTabNavigator,
      Pass: PassStack,
    },
    {
      initialRouteName: "AuthLoading"
    }
  )
);
