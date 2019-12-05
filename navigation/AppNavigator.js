import { createAppContainer, createSwitchNavigator, createStackNavigator } from "react-navigation";
import AuthLoadingScreen from "../screens/AuthLoadingScreen";
import SignInScreen from "../screens/SignInScreen";
import SignUpScreen from "../screens/SignUpScreen";
import MainTabNavigator from './MainTabNavigator';

const AuthStack = createStackNavigator({
  SignIn: {
    screen: SignInScreen
  },
  SignUp: {
    screen: SignUpScreen,
    navigationOptions: () => ({
      headerBackTitle: "back"
    })
  }
});

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      Auth: AuthStack,
      Main: MainTabNavigator
    },
    {
      initialRouteName: "AuthLoading"
    }
  )
);
