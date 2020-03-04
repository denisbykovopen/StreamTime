import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { Field } from "redux-form";
import RFTextInput from "../../common/RFTextInput";
import styles from "./styles";

const AddToolFormView = ({
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
        name="toolName"
        disabled={submitting}
        label="Tool Name"
        onSubmit={handleSubmit}
      />
      <Field
        component={RFTextInput}
        name="toolPrice"
        disabled={submitting}
        label="Tool Price"
        onSubmit={handleSubmit}
      />
      {!submitting && submitFailed && (
        <Text style={styles.rootFailed}>Error</Text>
      )}
      {!submitting && submitSucceeded && (
        <Text style={styles.rootSucceeded}>Success</Text>
      )}
    </View>

    <View style={styles.buttonsContainer}>
      <TouchableOpacity
        disabled={!valid || submitting}
        onPress={handleSubmit}
        style={styles.formButton}
      >
        <Text style={styles.formButtonText}>Create tool</Text>
      </TouchableOpacity>
    </View>
  </View>
);

export default AddToolFormView;
