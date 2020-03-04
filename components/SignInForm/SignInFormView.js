import React from "react";
import { Button, Text, View, TouchableOpacity } from "react-native";
import { Field } from "redux-form";
import RFTextInput from "../../common/RFTextInput";
import styles from "./styles";
import ForgetButton from './ForgetButton';
import SignInGoogle from '../../components/SignInGoogle';
import SignInFacebook from '../../components/SignInFacebook';

const UserFormView = ({
  handleSubmit,
  submitFailed,
  submitSucceeded,
  submitting,
  valid
}) => (
  <View>
    <View style={styles.inputsContainer}>
      <Field
        component={RFTextInput}
        name="email"
        disabled={submitting}
        // placeholder="email"
        label="Your Email"
      />
      <Field
        component={RFTextInput}
        name="password"
        disabled={submitting}
        // placeholder="password"
        label="Your Password"
      />
      {!submitting && submitFailed && (
        <Text style={styles.rootFailed}>Error</Text>
      )}
      {!submitting && submitSucceeded && (
        <Text style={styles.rootSucceeded}>Success</Text>
      )}
    </View>
    <View style={styles.outer}>
      <ForgetButton />
    </View>
    <View style={styles.buttonsContainer}>
      <SignInFacebook />
      <SignInGoogle />
      <TouchableOpacity
        disabled={!valid || submitting}
        onPress={handleSubmit}
        style={styles.formButton}
      >
        <Text style={styles.formButtonText}>Log In</Text>
      </TouchableOpacity>
    </View>
  </View>
);

export default UserFormView;
