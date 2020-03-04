import React, { Component } from "react";
import {
  Button,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image
} from "react-native";
import { withFirebase } from "../Firebase/context";
import Fonts from "../constants/Fonts";
import g from ".././assets/images/g2x.png";
import Layout from "../constants/Layout";
import Colors from "../constants/Colors";
import * as Google from "expo-google-app-auth";

const ERROR_CODE_ACCOUNT_EXISTS =
  "auth/account-exists-with-different-credential";

const ERROR_MSG_ACCOUNT_EXISTS = `
  An account with an E-Mail address to
  this social account already exists. Try to login from
  this account instead and associate your social accounts on
  your personal account page.
`;

import firebase from 'firebase';

import { withNavigation } from 'react-navigation';
import GIcon from "../common/GIcon";

class SignInGoogle extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  signInGoogle = async function() {
    try {
      const result = await Google.logInAsync({
        // expoClientId: "ag2TwXFORsinmt-Jcvi_2ApZ",
        androidClientId:
          "222796968896-g3s9ctvjsk5itdt9kqi29epuehe07uc6.apps.googleusercontent.com",
        iosClientId:
          "222796968896-la4s1iu6it5es0h2qrriirlmtj9q5m5l.apps.googleusercontent.com",
        scopes: ["profile", "email"]
      });
      console.log("--g/fire permission", result);

      if (result.type === "success") {

        const { idToken, accessToken } = result;
    
        const credential = firebase.auth.GoogleAuthProvider.credential(idToken, accessToken);
  
        console.log("--g/fire credential", credential);

        this.props.firebase.auth
          .signInWithCredential(credential)
          .then(socialAuthUser => {
            // user in base too
            console.log("--g/fire auth", socialAuthUser);
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
          });

      } else if (result.type === "cancel") {
        console.log("g cansel");
      }
    } catch (error) {
      console.log("err:", error);
    }
  };
  
  // isUserEqual = (googleUser, firebaseUser) => {
  //   if (firebaseUser) {
  //     var providerData = firebaseUser.providerData;
  //     for (var i = 0; i < providerData.length; i++) {
  //       if (
  //         providerData[i].providerId ===
  //           firebase.auth.GoogleAuthProvider.PROVIDER_ID &&
  //         providerData[i].uid === googleUser.getBasicProfile().getId()
  //       ) {
  //         // We don't need to reauth the Firebase connection.
  //         return true;
  //       }
  //     }
  //   }
  //   return false;
  // };

  // onSignIn = googleUser => {
  //   console.log('Google Auth Response', googleUser);
  //   // We need to register an Observer on Firebase Auth to make sure auth is initialized.
  //   var unsubscribe = firebase.auth().onAuthStateChanged(
  //     function(firebaseUser) {
  //       unsubscribe();
  //       // Check if we are already signed-in Firebase with the correct user.
  //       if (!this.isUserEqual(googleUser, firebaseUser)) {
  //         // Build Firebase credential with the Google ID token.
  //         var credential = firebase.auth.GoogleAuthProvider.credential(
  //           googleUser.idToken,
  //           googleUser.accessToken
  //         );
  //         // Sign in with credential from the Google user.
  //         firebase
  //           .auth()
  //           .signInWithCredential(credential)
  //           .then(function(result) {
  //             console.log('user signed in ');
  //             if (result.additionalUserInfo.isNewUser) {
  //               firebase
  //                 .database()
  //                 .ref('/users/' + result.user.uid)
  //                 .set({
  //                   gmail: result.user.email,
  //                   profile_picture: result.additionalUserInfo.profile.picture,
  //                   first_name: result.additionalUserInfo.profile.given_name,
  //                   last_name: result.additionalUserInfo.profile.family_name,
  //                   created_at: Date.now()
  //                 })
  //                 .then(function(snapshot) {
  //                   console.log('Snapshot', snapshot);
  //                 });
  //             } else {
  //               firebase
  //                 .database()
  //                 .ref('/users/' + result.user.uid)
  //                 .update({
  //                   last_logged_in: Date.now()
  //                 });
  //             }
  //           })
  //           .catch(function(error) {
  //             // Handle Errors here.
  //             var errorCode = error.code;
  //             var errorMessage = error.message;
  //             // The email of the user's account used.
  //             var email = error.email;
  //             // The firebase.auth.AuthCredential type that was used.
  //             var credential = error.credential;
  //             // ...
  //           });
  //       } else {
  //         console.log('User already signed-in Firebase.');
  //       }
  //     }.bind(this)
  //   );
  // };

  // signInWithGoogleAsync = async () => {
  //   try {
  //     const result = await Google.logInAsync({
  //       // androidClientId: YOUR_CLIENT_ID_HERE,
  //       // behavior: 'web',
  //       iosClientId: '222796968896-la4s1iu6it5es0h2qrriirlmtj9q5m5l.apps.googleusercontent.com', //enter ios client id
  //       scopes: ['profile', 'email']
  //     });

  //     if (result.type === 'success') {
  //       this.onSignIn(result);
  //       return result.accessToken;
  //     } else {
  //       return { cancelled: true };
  //     }
  //   } catch (e) {
  //     return { error: true };
  //   }
  // };

  render() {
    const { error } = this.state;

    return (
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => this.signInGoogle()} style={styles.button}>
          <Image source={g} style={styles.buttonImage} />
          {/* <GIcon /> */}
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
    backgroundColor: Colors.gButtonColor
  },
  buttonImage: {
    resizeMode: "center"
  }
});

export default withNavigation(withFirebase(SignInGoogle));





