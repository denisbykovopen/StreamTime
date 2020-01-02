import React from "react";
import { Button, Text, View, TouchableOpacity } from "react-native";
import { Field } from "redux-form";
import RFTextInput from "../../common/RFTextInput";
import styles from "./styles";
import AddComponent from "./AddComponent";

const AddFormView = ({
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
        name="productName"
        disabled={submitting}
        // placeholder="email"
        label="Product Name"
      />
      <View style={styles.line} ></View>
      <Field
        component={RFTextInput}
        name="productQuantity"
        disabled={submitting}
        // placeholder="password"
        label="Quantity"
      />
      {!submitting && submitFailed && (
        <Text style={styles.rootFailed}>Error</Text>
      )}
      {!submitting && submitSucceeded && (
        <Text style={styles.rootSucceeded}>Success</Text>
      )}
    </View>

    <AddComponent />

    <View style={styles.buttonsContainer}>
      <TouchableOpacity
        disabled={!valid || submitting}
        onPress={handleSubmit}
        style={styles.formButton}
      >
        <Text style={styles.formButtonText}>Create project</Text>
      </TouchableOpacity>
    </View>
  </View>
);

export default AddFormView;
