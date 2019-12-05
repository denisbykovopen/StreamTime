import React from "react";
import { View, Text, StyleSheet, StatusBar, Button } from "react-native";
import SignInForm from "../components/SignInForm";
import SignInGoogle from "../components/SignInGoogle";
import SignInFacebook from "../components/SignInFacebook";

export default class SignInScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    header: null
  });
  onSignUp = () => this.props.navigation.navigate("SignUp")
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <Text>/SignInScreen</Text>
        <SignInForm />
        <SignInGoogle />
        <SignInFacebook />
        <View style={styles.inner}>
          <Text>Don't have an account?</Text>
          <Button 
            title="Sign Up"
            onPress={this.onSignUp}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  inner: {
    alignItems: 'center'
  }
});
