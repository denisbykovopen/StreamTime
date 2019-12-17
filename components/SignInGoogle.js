import React, {Component} from "react";
import { Button, View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { withFirebase } from "../Firebase/context";
import Fonts from "../constants/Fonts";
import g from ".././assets/images/g2x.png";
import Layout from "../constants/Layout";
import Colors from "../constants/Colors";

const ERROR_CODE_ACCOUNT_EXISTS =
  "auth/account-exists-with-different-credential";

const ERROR_MSG_ACCOUNT_EXISTS = `
  An account with an E-Mail address to
  this social account already exists. Try to login from
  this account instead and associate your social accounts on
  your personal account page.
`;

class SignInGoogle extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  onSubmitGoogle = () => {
    this.props.firebase
      .doSignInWithGoogle()
      .then(socialAuthUser => {
        // user in base too
        return this.props.firebase.user(socialAuthUser.user.uid).set({
          username: socialAuthUser.user.displayName,
          email: socialAuthUser.user.email,
          roles: {}
        });
      })
      .then(() => {
        this.setState({ error: null });
        this.props.navigation.navigate("Main")
      })
      .catch(error => {
        if (error.code === ERROR_CODE_ACCOUNT_EXISTS) {
          error.message = ERROR_MSG_ACCOUNT_EXISTS;
        }
        this.setState({ error });
      });
  };

  render() {
    const { error } = this.state;

    return (
      <View style={styles.buttonContainer}>
      <TouchableOpacity 
        onPress={this.onSubmitFacebook} 
        style={styles.button}
      >
        <Image
          source={g}
          style={styles.buttonImage} 
        />
      </TouchableOpacity>

      {error && <Text>{error.message}</Text>}
    </View>
    );
  }
}

const styles = StyleSheet.create({
  button:{
    width: Layout.window.width * 0.15,
    height: Layout.window.width * 0.15,
    borderRadius: Math.round(Layout.window.width + Layout.window.height) / 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.gButtonColor,
  },
  buttonImage: {
    resizeMode: 'center'
  }
})

export default withFirebase(SignInGoogle);