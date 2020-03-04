import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { Field } from "redux-form";
import SearchInput from "./SearchInput";
import styles from "./styles";


const SearchFormView = ({
  handleSubmit,
  submitFailed,
  submitSucceeded,
  submitting,
  valid,
  handleChange,
  onSubmit
}) => (
  <View>
    <View style={styles.inputsContainer}>  
      <Field
        component={SearchInput}
        name="name"
        disabled={submitting}
        placeholder={"Search"}
        onChange={handleChange}
        // onSubmit={handleSubmit}
      />

      {!submitting && submitFailed && (
        <Text style={styles.rootFailed}>Error</Text>
      )}
      {!submitting && submitSucceeded && (
        <Text style={styles.rootSucceeded}>Success</Text>
      )}
    </View>
  </View>
);

export default SearchFormView;
