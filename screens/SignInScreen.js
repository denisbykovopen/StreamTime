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
import SignInGoogle from "../components/SignInGoogle";
import SignInFacebook from "../components/SignInFacebook";

import Colors from "../constants/Colors";
import Fonts from "../constants/Fonts";

import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default class SignInScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    header: null
  });
  onSignIn = () => this.props.navigation.navigate("SignUp");
  render() {
    return (
      <ScrollView 
        style={{ flex: 1 }}
        // bounces={false}
        centerContent={true}
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
            <Text style={styles.headerTextBold}>Wheatsheaf Furniture!</Text>
            <SignInForm />
            <SignInGoogle />
            <SignInFacebook />
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
    padding: 20
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
    marginTop: 50,
    
  },
  headerTextBold: {
    alignSelf: "center",
    fontWeight: "bold",
    fontSize: Fonts.xxlarge,
    margin: 10,
    marginBottom: 75
  },
  text: {
    fontSize: Fonts.xlarge
  }
});
