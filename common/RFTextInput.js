
import React from 'react';
import { TextInput, Text, View, StyleSheet } from 'react-native';

const RFTextInput = ({
  placeholder,
  input: { onBlur, onChange, onFocus, value },
  meta: { error, touched, valid },
  disabled,
}) => ( 
  <View>
    <TextInput
      scrollEnabled={false}
      multiline={true}

      onBlur={onBlur}
      onChangeText={onChange}
      onFocus={onFocus}
      editable={!disabled}
      selectTextOnFocus={!disabled}
      value={value}
      style={[
        styles.rootInput,
        {
          color: disabled ? 'gray' : 'black',
          borderColor: !valid && touched ? 'red' : 'gray'
        },
      ]}
      placeholder={placeholder}
    />
    {!valid && touched && <Text style={styles.rootError}>{error}</Text>}
  </View>
);

const styles = StyleSheet.create({
  rootInput: {
    // borderWidth: 1,
    borderBottomWidth: 1,
    height: 40,
    padding: 10,
    fontSize: 16,
    marginTop: 10,
    marginBottom: 10,
  },
  rootError: {
    color: 'red',
  },
})

export default RFTextInput;