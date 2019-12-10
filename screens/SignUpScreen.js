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
      <ScrollView style={{ flex: 1 }}>
        <KeyboardAwareScrollView
          ref="scrollView"
          keyboardShouldPersistTaps={"always"}
          contentContainerStyle={{
            flexGrow: 1 // this will fix scrollview scroll issue by passing parent view width and height to it
          }}
        >
          <View style={styles.container}>
            <Text style={styles.headerText}>Sign Up</Text>
            <SignUpForm />
            <View style={styles.inner}>
              <Text style={styles.text}>Already have an acc? </Text>
              <TouchableOpacity
                onPress={this.onSignUp}
                style={styles.underLineContainer}
              >
                <Text style={styles.text}>Sign In</Text>
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
    backgroundColor: "#fff",
    padding: 20
  },
  headerText: {
    alignSelf: "center",
    fontSize: 24,
    marginTop: 5,
    marginBottom: 15
  },
  underLineContainer: {
    // textDecorationLine: 'underline',
    borderBottomWidth: 1,
    borderBottomColor: "black",
    paddingBottom: 1
  },
  inner: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    margin: 10
  },
  text: {
    fontSize: 18
  }
});
