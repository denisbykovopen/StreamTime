import React, { Component } from "react";
import SignInFormView from "./SignInFormRF";
import { View } from "react-native";
import styles from "./styles";
import { withFirebase } from '../../Firebase/context';

class SignInForm extends Component {
  handleSubmit = ({ email, password }) => {
    this.props.firebase
      .doSignInWithEmailAndPassword(String(email), String(password))
      .then(() => {
        this.props.navigation.navigate("Main");
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <View contentContainerStyle={styles.formContainer}>
        <SignInFormView onSubmit={this.handleSubmit} />
      </View>
    );
  }
}

export default withFirebase(SignInForm);
