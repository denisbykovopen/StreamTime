import React, {Component} from "react";
import { Button, View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { withFirebase } from "../Firebase/context";
import Fonts from "../constants/Fonts";
import fb from '.././assets/images/fb2x.png';
import Colors from "../constants/Colors";
import Layout from "../constants/Layout";

// import * as Expo from 'expo';
// import { Facebook, Constants } from 'expo';
import * as Facebook from 'expo-facebook';

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

  // onSubmitFacebook = () => {
    // this.props.firebase
    //   .doSignInWithFacebook()
    //   .then(socialAuthUser => {
    //     // user in base too
    //     return this.props.firebase.user(socialAuthUser.user.uid).set({
    //       username: socialAuthUser.user.displayName,
    //       email: socialAuthUser.user.email,
    //       roles: {}
    //     });
    //   })
    //   .then(() => {
    //     this.setState({ error: null });
    //     this.props.navigation.navigate("Main")
    //   })
    //   .catch(error => {
    //     if (error.code === ERROR_CODE_ACCOUNT_EXISTS) {
    //       error.message = ERROR_MSG_ACCOUNT_EXISTS;
    //     }
    //     this.setState({ error });
    //   });
  
  // };

  // async loginWithFacebook() {
  //   const { type, token } = await Facebook.logInWithReadPermissionsAsync('1061081394254204', { permissions: ['public_profile'] })

  //   if (type == 'success') {

  //     const credential = this.props.firebase.auth.FacebookAuthProvider.credential(token)

  //     this.props.firebase.auth().signInAndRetrieveDataWithCredential(credential).catch((error) => {
  //       console.log(error)
  //     })
  //   }
  // }

  // signInWithFacebook = async () => {
  //   const appId = '1061081394254204';
  //   const permissions = ['public_profile', 'email'];  // Permissions required, consult Facebook docs
    
  //   const {
  //     type,
  //     token,
  //   } = await Facebook.logInWithReadPermissionsAsync(
  //     appId,
  //     {permissions}, {behavior: 'system'},
  //   );
  
  //   switch (type) {
  //     case 'success': {
  //       await firebase.auth().setPersistence(this.props.firebase.auth.Auth.Persistence.LOCAL);  // Set persistent auth state
  //       const credential = this.props.firebase.auth.FacebookAuthProvider.credential(token);
  //       const facebookProfileData = await this.props.firebase.auth().signInAndRetrieveDataWithCredential(credential);  // Sign in with Facebook credential
  //       console.log(facebookProfileData);
  //       // Do something with Facebook profile data
  //       // OR you have subscribed to auth state change, authStateChange handler will process the profile data
        
  //       return Promise.resolve({type: 'success'});
  //     }
  //     case 'cancel': {
  //       return Promise.reject({type: 'cancel'});
  //     }
  //   }
  // }

  logIn = async () => {
    try {
      await Facebook.initializeAsync('1061081394254204');
      const {
        type,
        token,
        // expires,
        // permissions,
        // declinedPermissions,
      } = await Facebook.logInWithReadPermissionsAsync('1061081394254204',{
        permissions: ['public_profile', 'email'], behavior: 'web'
      });

      if (type === 'success') {
        // Get the user's name using Facebook's Graph API
        const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
        Alert.alert('Logged in!', `Hi ${(await response.json()).name}!`);
      } else if (type === 'cancel') {
        // type === 'cancel'
        Alert.alert('cansel')
      }
    } catch ({ message }) {
      alert(`Facebook Login Error: ${message}`);
    }
  }

  // loginWithFacebook = async () => {
  //   const { type, token } = await Facebook.logInWithReadPermissionsAsync(
  //     "1061081394254204",
  //     {
  //       permissions: ["public_profile"]
  //     }
  //   );

  //   if (type === "success") {
  //     console.log("success \n", token);
  //     // if yes, then take credentials from fb_auth_provider and pass to firebase
  //     const credentials = this.props.firebase.auth.FacebookAuthProvider.credential(token);
  //     try {
  //       this.props.firebase.auth
  //         .signInWithCredential(credentials)
  //         .catch(err => {
  //           console.log("error occured \n", err);
  //         });
  //     } catch {
  //       console.log("Can't login with facebook");
  //     }
  //   }
  // }

  // login = async () => {
  //   const { type, token } = await Facebook.logInWithReadPermissionsAsync('1061081394254204', {
  //     permissions: ['public_profile'],
  //   });
  //   if (type === 'success') {
  //     const response = await fetch(
  //      `https://graph.facebook.com/me?access_token=${token}`);
  //     Alert.alert(
  //      'Logged in!',
  //      `Hi ${(await response.json()).name}!`,
  //     );
  //   }
  //  }

  render() {
    const { error } = this.state;

    return (
      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          onPress={this.logIn} 
          style={styles.button}
        >
          <Image
            source={fb}
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
    backgroundColor: Colors.fbButtonColor,
  },
  buttonImage: {
    resizeMode: 'center'
  }
})

export default withFirebase(SignInFacebook);