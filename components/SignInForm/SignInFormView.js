import React from "react";
import { Button, Text, View } from "react-native";
import { Field } from "redux-form";
import RFTextInput from "../../common/RFTextInput";
import styles from "./styles";

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

    <Button
      disabled={!valid || submitting}
      onPress={handleSubmit}
      title="Submit"
      style={styles.formButton}
    />
  </View>
);

export default UserFormView;
