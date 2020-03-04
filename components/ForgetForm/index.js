import React, { Component } from "react";
import ForgetFormView from "./ForgetFormRF";
import { View } from "react-native";
import styles from "./styles";
import { withFirebase } from '../../Firebase/context';
import { withNavigation } from 'react-navigation';

class ForgetForm extends Component {
  handleSubmit = ({ email }) => {
    this.props.firebase
      .doPasswordReset(String(email))
      .then(() => {
        this.props.navigation.navigate("SignIn");
        console.log("--pass forget");
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <View contentContainerStyle={styles.formContainer}>
        <ForgetFormView onSubmit={this.handleSubmit} />
      </View>
    );
  }
}

export default withNavigation(withFirebase(ForgetForm));
