import React from "react";

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView
} from "react-native";

import SignUpForm from "../components/SignUpForm";

import { Header } from "react-navigation";

import Constants from "expo-constants";

import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import Colors from ".././constants/Colors";
import Fonts from "../constants/Fonts";
import Layout from "../constants/Layout";

export default class SignUpScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    header: null
  });
  onSignUp = () => this.props.navigation.navigate("SignIn");
  render() {
    return (
      // <KeyboardAvoidingView
      //   style={{
      //     flex: 1
      //     // alignItems: 'center',
      //     // height: "100%"
      //   }}
      //   enabled
      //   behavior="position"
      //   keyboardVerticalOffset={
      //     -(Header.HEIGHT + Constants.statusBarHeight * 2)
      //   }
      // >
      <ScrollView
        style={{ flex: 1 }}
        // centerContent={true}
        showsVerticalScrollIndicator={false}
      >
        <KeyboardAwareScrollView
          ref="scrollView"
          // keyboardShouldPersistTaps={"always"}
          contentContainerStyle={{
            flexGrow: 1
          }}
        >
          <View style={styles.container}>
            <Text style={styles.headerText}>Sign Up</Text>
            <SignUpForm />
            <View style={styles.inner}>
              <Text style={styles.text}>Already have an account? </Text>
              <TouchableOpacity
                onPress={this.onSignUp}
                style={styles.underLineContainer}
              >
                <Text style={styles.text}>Log In</Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAwareScrollView>
      </ScrollView>
      // </KeyboardAvoidingView>
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
  headerText: {
    alignSelf: "center",
    fontSize: Fonts.xxlarge,
    marginTop: Layout.window.height * 0.05,
    marginBottom: Layout.window.height * 0.05,
  },
  underLineContainer: {
    fontSize: Fonts.xlarge,
    borderBottomWidth: 1,
    borderBottomColor: "black",
    paddingBottom: 1
  },
  inner: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    margin: Layout.window.width * 0.025,
    marginBottom: Layout.window.width * 0.2
  },
  text: {
    fontSize: Fonts.xlarge
  }
});
