import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { Field } from "redux-form";
import RFTextInput from "../../common/RFTextInput";
import styles from "./styles";

const ForgetFormView = ({
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
        autoFocus={true}
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
      <Text style={styles.formButtonText}>Next</Text>
    </TouchableOpacity>
  </View>
);

export default ForgetFormView;
