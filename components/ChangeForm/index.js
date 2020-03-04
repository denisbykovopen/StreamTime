import React, { Component } from "react";
import ChangeFormView from "./ChangeFormRF";
import { View } from "react-native";
import styles from "./styles";
import { withFirebase } from '../../Firebase/context';
import { withNavigation } from 'react-navigation';

class ChangeForm extends Component {
  handleSubmit = ({ passwordTwo }) => {
    this.props.firebase
      .doPasswordUpdate(passwordTwo)
      .then(() => {
        this.props.navigation.navigate("Main");
        console.log("--pass change");
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <View contentContainerStyle={styles.formContainer}>
        <ChangeFormView onSubmit={this.handleSubmit} />
      </View>
    );
  }
}

export default withNavigation(withFirebase(ChangeForm));
