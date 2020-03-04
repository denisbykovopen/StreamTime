import React, { Component } from "react";
import {
  Button,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert
} from "react-native";
import { withFirebase } from "../Firebase/context";
import Fonts from "../constants/Fonts";
import fb from ".././assets/images/fb2x.png";
import Colors from "../constants/Colors";
import Layout from "../constants/Layout";

// import * as Expo from 'expo';
// import { Facebook, Constants } from 'expo';

import * as Facebook from "expo-facebook";

import { withNavigation } from 'react-navigation';

import firebase from 'firebase';
import FBIcon from "../common/FBIcon";

const ERROR_CODE_ACCOUNT_EXISTS =
  "auth/account-exists-with-different-credential";

const ERROR_MSG_ACCOUNT_EXISTS = `
  An account with an E-Mail address to
  this social account already exists. Try to login from
  this account instead and associate your social accounts on
  your personal account page.
`;

class SignInFacebook extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  signInFb = async () => {
    try {
      await Facebook.initializeAsync("1061081394254204");
      const {
        type,
        token
        // expires,
        // permissions,
        // declinedPermissions,
      } = await Facebook.logInWithReadPermissionsAsync("1061081394254204", {
        permissions: ["public_profile", "email"],
        // behavior: "web"
      });
      console.log("--fb permissions", type, token);

      if (type === "success") {
        const credential = firebase.auth.FacebookAuthProvider.credential(
          token
        );
        console.log("--fb/fire credential", credential);
        
        this.props.firebase.auth.signInWithCredential(credential)
        // console.log("--fb/fire auth", socialAuthUser)

          .then(socialAuthUser => {
            // user in base too
            console.log("--fb/fire auth", socialAuthUser);
            return this.props.firebase.user(socialAuthUser.user.uid).set({
              username: socialAuthUser.user.displayName,
              email: socialAuthUser.user.email
              // roles: {}
            });
          })
          .then(() => {
            this.setState({ error: null });
            this.props.navigation.navigate("Main");
          })
          .catch(error => {
            if (error.code === ERROR_CODE_ACCOUNT_EXISTS) {
              error.message = ERROR_MSG_ACCOUNT_EXISTS;
            }
            this.setState({ error });
            console.log(error);
          });

        // const response = await fetch(
        //   `https://graph.facebook.com/me?access_token=${token}`
        // );
        // Alert.alert("Logged in!", `Hi ${(await response.json()).name}!`);

      } else if (type === "cancel") {
        console.log("fb cansel");
      }
    } catch ({ message }) {
      // alert(`Facebook Login Error: ${message}`);
      console.log("err:", message);
    }
  };

  render() {
    const { error } = this.state;

    return (
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={this.signInFb} style={styles.button}>
          <Image source={fb} style={styles.buttonImage} />
          {/* <FBIcon /> */}
        </TouchableOpacity>

        {/* {error && <Text>{error.message}</Text>} */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    width: Layout.window.width * 0.15,
    height: Layout.window.width * 0.15,
    borderRadius: Math.round(Layout.window.width + Layout.window.height) / 2,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.fbButtonColor
  },
  buttonImage: {
    resizeMode: "center"
  }
});

export default withNavigation(withFirebase(SignInFacebook)) ;
