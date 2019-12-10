import React, { Component } from "react";
import SignUpFormView from "./SignUpFormRF";
import { View } from "react-native";
import styles from "./styles";
import { withFirebase } from "../../Firebase/context";
import { withNavigation } from 'react-navigation';

const ERROR_CODE_ACCOUNT_EXISTS = 'auth/email-already-in-use';

const ERROR_MSG_ACCOUNT_EXISTS = `
  An account with this E-Mail address already exists.
  Try to login with this account instead. If you think the
  account is already used from one of the social logins, try
  to sign in with one of them. Afterward, associate your accounts
  on your personal account page.
`;

class SignUpForm extends Component {
  state = { error: null };
  handleSubmitSignUp = ({ name, location, occupation, yearsOfExpirience, email, password }) => {
    this.props.firebase
      .doCreateUserWithEmailAndPassword(email,password)
      .then(authUser => {
        console.log("--auto", authUser.user.uid);
        this.props.firebase.user(authUser.user.uid).set({
          name,
          location,
          occupation,
          yearsOfExpirience,
          // email,
          // email: authUser.email,
          // emailVerified: authUser.emailVerified,
          // providerData: authUser.providerData
        });
        // this.props.navigation.navigate("Main");
      })
    //   .then(() => {
    //     return this.props.firebase.doSendEmailVerification();
    //   })
      .then((authUser) => {
        this.props.navigation.navigate("Main");
      })
      .catch(error => {
        if (error.code === ERROR_CODE_ACCOUNT_EXISTS) {
          error.message = ERROR_MSG_ACCOUNT_EXISTS;
        }

        this.setState({ error });
      });
  };

  render() {
    return (
      <View contentContainerStyle={styles.formContainer}>
        <SignUpFormView onSubmit={this.handleSubmitSignUp} />
      </View>
    );
  }
}

export default withNavigation(withFirebase(SignUpForm));
