import React from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Button,
  TouchableOpacity,
  ScrollView
} from "react-native";
import SignInForm from "../components/SignInForm";
// import SignInGoogle from "../components/SignInGoogle";
// import SignInFacebook from "../components/SignInFacebook";

import Colors from "../constants/Colors";
import Fonts from "../constants/Fonts";

import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Layout from "../constants/Layout";

export default class SignInScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    header: null
  });
  onSignIn = () => this.props.navigation.navigate("SignUp");
  render() {
    return (
      <ScrollView 
        contentContainerStyle={{ flex: 1, height: '100%' }}
        // bounces={false}
        // centerContent={true}
        showsVerticalScrollIndicator={false}
      >
        <KeyboardAwareScrollView
          ref="scrollView"
          keyboardShouldPersistTaps={"always"}
          contentContainerStyle={{
            flexGrow: 1 // this will fix scrollview scroll issue by passing parent view width and height to it
          }}
        >
          <View style={styles.container}>
            <StatusBar barStyle="dark-content" />
            <Text style={styles.headerText}>Welcome to</Text>
            <Text style={styles.headerTextBold}>Sweetland Solutions!</Text>
            <SignInForm />
            <View style={styles.inner}>
              <Text style={styles.text}>First time here? </Text>
              <TouchableOpacity
                onPress={this.onSignIn}
                style={styles.underLineContainer}
              >
                <Text style={styles.text}>Sign Up</Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAwareScrollView>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.bgColor,
    padding: Layout.window.width * 0.075,
    // height: Layout.window.height
  },
  inner: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    margin: 10
  },
  underLineContainer: {
    // textDecorationLine: 'underline',
    borderBottomWidth: 1,
    borderBottomColor: "black",
    paddingBottom: 1
  },
  headerText: {
    alignSelf: "center",
    fontSize: Fonts.xxlarge,
    marginTop: Layout.window.width * 0.25,
    color: Colors.headerTextColor,
  },
  headerTextBold: {
    alignSelf: "center",
    fontWeight: "bold",
    fontSize: Fonts.xxlarge,
    margin: Layout.window.width * 0.05,
    marginBottom: Layout.window.width * 0.25,
    color: Colors.headerTextColor,
  },
  text: {
    fontSize: Fonts.xlarge
  }
});
