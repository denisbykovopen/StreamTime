import React from "react";
import { Button, Text, View, TouchableOpacity } from "react-native";
import { Field } from "redux-form";
import RFTextInput from "../../../common/RFTextInput";
import styles from "./styles";
<<<<<<< HEAD
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../../constants/Colors";
import { withNavigation } from "react-navigation";
=======
import { Ionicons } from '@expo/vector-icons';
import Colors from '../../../constants/Colors';
>>>>>>> ef6708b5b32b815daa85f564a5152695991bcfb6

const ComponentFormView = ({
  handleSubmit,
  submitFailed,
  submitSucceeded,
  submitting,
  valid,
<<<<<<< HEAD
  navigation,
=======
  key,
  // handleChange,
>>>>>>> ef6708b5b32b815daa85f564a5152695991bcfb6
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
<<<<<<< HEAD

    <View>
      <TouchableOpacity
        style={styles.toProcButton}
        onPress={() =>
          navigation.navigate("Proc", {
            itemId: form,
            key: form
          })
        }
      >
        <Text>Select processes</Text>
        <Ionicons name="ios-arrow-forward" color={Colors.black} />
      </TouchableOpacity>
    </View>

=======
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
>>>>>>> ef6708b5b32b815daa85f564a5152695991bcfb6
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

<<<<<<< HEAD
export default withNavigation(ComponentFormView);
=======
export default ComponentFormView;
>>>>>>> ef6708b5b32b815daa85f564a5152695991bcfb6
