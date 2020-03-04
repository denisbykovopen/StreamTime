import React from "react";
import { Button, Text, View, TouchableOpacity } from "react-native";
import { Field } from "redux-form";
import RFTextInput from "../../common/RFTextInput";
import styles from "./styles";

const ChangeFormView = ({
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
        name="passwordOne"
        disabled={submitting}
        label="New Password"
      />
      <Field
        component={RFTextInput}
        name="passwordTwo"
        disabled={submitting}
        label="Confirm Password"
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
      <Text style={styles.formButtonText}>Submit</Text>
    </TouchableOpacity>
  </View>
);

export default ChangeFormView;
