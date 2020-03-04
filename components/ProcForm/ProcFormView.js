import React from "react";
import { Text, Button, View, TouchableOpacity } from "react-native";
import { Field } from "redux-form";
import RFTextInput from "../../common/RFTextInput";
import styles from "./styles";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../constants/Colors";

const ProcFormView = ({
  handleSubmit,
  submitFailed,
  submitSucceeded,
  submitting,
  valid
  // form
}) => (
  <View>
    <View style={styles.inputsContainer}>
      <Field
        component={RFTextInput}
        name="processName"
        disabled={submitting}
        // placeholder="email"
        label="Process Name"
        // onChange={handleChange}
        onSubmit={handleSubmit}
      />
      <Field
        component={RFTextInput}
        name="processTime"
        disabled={submitting}
        // placeholder="email"
        label="Process Time In Milliseconds"
        // onChange={handleChange}
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
        <Text style={styles.formButtonText}>Add Process</Text>
      </TouchableOpacity>
    </View>
  </View>
);

export default ProcFormView;
