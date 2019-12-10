import React from "react";
import { Button, Text, View, TouchableOpacity } from "react-native";
import { Field } from "redux-form";
import RFTextInput from "../../common/RFTextInput";
import styles from "./styles";

const SignUpFormView = ({
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
        name="name"
        disabled={submitting}
        placeholder="Name"
      />
      <Field
        component={RFTextInput}
        name="location"
        disabled={submitting}
        placeholder="Location"
      />
      <Field
        component={RFTextInput}
        name="occupation"
        disabled={submitting}
        placeholder="Occupation"
      />
      <Field
        component={RFTextInput}
        name="yearsOfExpirience"
        disabled={submitting}
        placeholder="Years of experience"
      />
      <Field
        component={RFTextInput}
        name="email"
        disabled={submitting}
        placeholder="email"
        label="Email"
      />
      <Field
        component={RFTextInput}
        name="password"
        disabled={submitting}
        placeholder="password"
      />

      {!submitting && submitFailed && (
        <Text style={styles.rootFailed}>Error</Text>
      )}
      {!submitting && submitSucceeded && (
        <Text style={styles.rootSucceeded}>Success</Text>
      )}
    </View>

    <TouchableOpacity
      disabled={!valid || submitting}
      onPress={handleSubmit}
      style={styles.formButton}
    >
      <Text style={styles.formButtonText}>Sign Up</Text>
    </TouchableOpacity>

    {/* <Button
      disabled={!valid || submitting}
      onPress={handleSubmit}
      title="Submit"
    /> */}
  </View>
);

export default SignUpFormView;
