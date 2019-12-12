
import React from 'react';
import { TextInput, Text, View, StyleSheet } from 'react-native';
import Fonts from '../constants/Fonts';

const RFTextInput = ({
  // placeholder,
  input: { onBlur, onChange, onFocus, value },
  meta: { error, touched, valid },
  disabled,
  label
}) => ( 
  <View>
    <Text style={styles.text}>{label}</Text>
    <TextInput
      scrollEnabled={false}
      multiline={true}
      label={label}
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
          borderColor: !valid && touched ? 'red' : 'white'
        },
      ]}
      // placeholder={placeholder}
    />
    {!valid && touched && <Text style={styles.rootError}>{error}</Text>}
  </View>
);

const styles = StyleSheet.create({
  rootInput: {
    // borderWidth: 1,
    borderWidth: 1,
    borderRadius: 15,
    height: 40,
    paddingTop: 10,
    padding: 10,
    fontSize: Fonts.xlarge,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  rootError: {
    color: 'red',
  },
  text: {
    fontSize: Fonts.xlarge,
  }
})

export default RFTextInput;