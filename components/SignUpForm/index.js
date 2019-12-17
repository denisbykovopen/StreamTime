import React, { Component } from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import { withFirebase } from "../../Firebase/context";
import { withNavigation } from 'react-navigation';
import SignUpFormViewStart from './SignUpFormRFStart';
import SignUpFormViewEnd from "./SignUpFormRFEnd";

const ERROR_CODE_ACCOUNT_EXISTS = 'auth/email-already-in-use';

const ERROR_MSG_ACCOUNT_EXISTS = `
  An account with this E-Mail address already exists.
  Try to login with this account instead. If you think the
  account is already used from one of the social logins, try
  to sign in with one of them. Afterward, associate your accounts
  on your personal account page.
`;

class SignUpForm extends Component {
  state = {
    error: null,
    move: false
  };

  onMove = () => {
    this.setState(
      prevState => ({
        move: !prevState.move
      }),
      () => console.log(this.state.move)
    );
  };

  handleSubmitSignUp = ({
    name,
    location,
    occupation,
    yearsOfExpirience,
    email,
    password
  }) => {
    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, password)
      .then(authUser => {
        console.log("--auto", authUser.user.uid);
        // this.props.firebase.doSendEmailVerification();
        this.props.firebase.user(authUser.user.uid).set({
          name,
          location,
          occupation,
          yearsOfExpirience
        });
      })
      .then(() => {
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
        {!this.state.move && (
          <View style={styles.formInnerContainer}>
            <View style={styles.stepContainer}>
              <View style={styles.stepInnerContainer}>
                <Text style={styles.stepText}>Step 1/2</Text>
                <View style={styles.stepLine}></View>
              </View>
              <View style={styles.stepLineNext}></View>
            </View>
            <SignUpFormViewStart onPress={this.onMove} />
          </View>
        )}
        {this.state.move && (
          <View style={styles.formInnerContainer}>
            <View style={styles.stepContainer}>
              <View style={styles.stepLine}></View>
              <View style={styles.stepInnerContainer}>
                <Text style={styles.stepText}>Step 2/2</Text>
                <View style={styles.stepLine}></View>
              </View>
            </View>
            <SignUpFormViewEnd onSubmit={this.handleSubmitSignUp} />
          </View>
        )}
      </View>
    );
  }
}

export default withNavigation(withFirebase(SignUpForm));
