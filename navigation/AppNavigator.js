import { createAppContainer, createSwitchNavigator, createStackNavigator } from "react-navigation";
import AuthLoadingScreen from "../screens/AuthLoadingScreen";
import SignInScreen from "../screens/SignInScreen";
import SignUpScreen from "../screens/SignUpScreen";
import MainTabNavigator from './MainTabNavigator';
import PasswordChangeScreen from '../screens/PasswordChangeScreen';
import PasswordForgetScreen from '../screens/PasswordForgetScreen';
import TermsScreen from '../screens/TermsScreen';
import PrivacyScreen from '../screens/PrivacyScreen';
import ProjectDetailsScreen from '../screens/ProjectDetailsScreen';
import EditProjectScreen from '../screens/EditProjectScreen';
import ProcessScreen from '../screens/ProcessScreen';

const AuthStack = createStackNavigator({
  SignIn: {
    screen: SignInScreen,
    navigationOptions: () => ({
      headerBackTitle: "back",
    })
  },
  SignUp: {
    screen: SignUpScreen,
    navigationOptions: () => ({
      headerBackTitle: "back"
    })
  },
  Forget: {
    screen: PasswordForgetScreen,
    navigationOptions: () => ({
      headerBackTitle: "back",
      headerTitle: "X",
    })
  },
  Change: {
    screen: PasswordChangeScreen,
    navigationOptions: () => ({
      headerBackTitle: "back"
    })
  },
  Terms: {
    screen: TermsScreen,
    navigationOptions: () => ({
      headerBackTitle: "back"
    })
  },
  Privacy: {
    screen: PrivacyScreen,
    navigationOptions: () => ({
      headerBackTitle: "back"
    })
  },
  // Forget: PasswordForgetScreen,
});

// const ProjectStack = createStackNavigator({
//   Details: ProjectDetailsScreen,
//   Edit: EditProjectScreen,
// })

// const PassStack = createStackNavigator({
//   Forget: {
//     screen: PasswordForgetScreen,
//     navigationOptions: () => ({
//       headerBackTitle: "back",
//       headerTitle: "X",
//     })
//   },
//   Change: {
//     screen: PasswordChangeScreen,
//     navigationOptions: () => ({
//       headerBackTitle: "back"
//     })
//   }
// });

// const ProcessStack = createStackNavigator({
//   Proc: {
//     screen: ProcessScreen,
//     navigationOptions: () => ({
//       header: null
//     })
//   }
// })

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      Auth: AuthStack,
      Main: MainTabNavigator,
      // Proc: ProcessStack
      // Pass: PassStack,
      // Forget: PasswordForgetScreen
      // Project: ProjectStack,
    },
    {
      initialRouteName: "AuthLoading"
    }
  )
);
