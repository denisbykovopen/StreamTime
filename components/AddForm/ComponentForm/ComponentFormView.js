import React from "react";
import { Button, Text, View, TouchableOpacity } from "react-native";
import { Field } from "redux-form";
import RFTextInput from "../../../common/RFTextInput";
import styles from "./styles";
import { Ionicons } from '@expo/vector-icons';
import Colors from '../../../constants/Colors';

const ComponentFormView = ({
  handleSubmit,
  submitFailed,
  submitSucceeded,
  submitting,
  valid,
  key,
  // handleChange,
  form
}) => (
  <View>
    <View style={styles.inputsContainer}>
      <Field
        component={RFTextInput}
        name="componentName"
        disabled={submitting}
        // placeholder="email"
        label="Component Name"
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
    <View>
        <TouchableOpacity
          style = {styles.toProcButton}
          // onPress = {this.props.navigation.navigate('Proc')}
          >
            <Text>Select processes</Text>
            <Ionicons 
              name = "ios-arrow-forward" 
              color = {Colors.black} 
            />
          </TouchableOpacity>
    </View>
    <View style={styles.buttonsContainer}>
      <TouchableOpacity
        disabled={!valid || submitting}
        onPress={handleSubmit}
        style={styles.formButton}
      >
        <Text style={styles.formButtonText}>Add Component</Text>
      </TouchableOpacity>
    </View>
  </View>
);

export default ComponentFormView;
