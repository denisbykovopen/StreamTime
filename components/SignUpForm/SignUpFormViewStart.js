import React from "react";
import { Button, Text, View, TouchableOpacity } from "react-native";
import { Field } from "redux-form";
import RFTextInput from "../../common/RFTextInput";
import styles from "./styles";

const SignUpFormViewStart = ({
  handleSubmit,
  submitFailed,
  submitSucceeded,
  submitting,
  valid,
  onPress
}) => (
  <View>
    <View style={styles.inputsContainer}>
      <Field
        component={RFTextInput}
        name="name"
        disabled={submitting}
        label="Your Name"
      />
      <Field
        component={RFTextInput}
        name="location"
        disabled={submitting}
        label="Location"
      />
      <Field
        component={RFTextInput}
        name="occupation"
        disabled={submitting}
        label="Occupation"
      />
      <Field
        component={RFTextInput}
        name="yearsOfExpirience"
        disabled={submitting}
        label="Years of experience"
      />

      {/* <Field
        component={RFTextInput}
        name="email"
        disabled={submitting}
        placeholder="email"
        label="Your Email"
      />
      <Field
        component={RFTextInput}
        name="password"
        disabled={submitting}
        label="Your Password"
      /> */}

      {!submitting && submitFailed && (
        <Text style={styles.rootFailed}>Error</Text>
      )}
      {!submitting && submitSucceeded && (
        <Text style={styles.rootSucceeded}>Success</Text>
      )}
    </View>

    <TouchableOpacity
      disabled={!valid || submitting}
      onPress={onPress}
      style={styles.formButton}
    >
      <Text style={styles.formButtonText}>Next</Text>
    </TouchableOpacity>

    {/* <Button
      disabled={!valid || submitting}
      onPress={handleSubmit}
      title="Submit"
    /> */}

  </View>
);

export default SignUpFormViewStart;
