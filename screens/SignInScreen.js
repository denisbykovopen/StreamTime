import React from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Button,
  TouchableOpacity
} from "react-native";
import SignInForm from "../components/SignInForm";
import SignInGoogle from "../components/SignInGoogle";
import SignInFacebook from "../components/SignInFacebook";

import Colors from "../constants/Colors";

export default class SignInScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    header: null
  });
  onSignIn = () => this.props.navigation.navigate("SignUp");
  render() {
    return (
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
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
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
    fontSize: 24,
    marginTop: 50
  },
  headerTextBold: {
    alignSelf: "center",
    fontWeight: "bold",
    fontSize: 24,
    margin: 10
  },
  text: {
    fontSize: 18
  }
});
