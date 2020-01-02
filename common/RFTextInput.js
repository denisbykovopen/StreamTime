
import React from 'react';
import { TextInput, Text, View, StyleSheet } from 'react-native';
import Fonts from '../constants/Fonts';
import Layout from '../constants/Layout';
// ...restInput
const RFTextInput = ({
  placeholder,
  input: { onBlur, onChange, onFocus, value, ...restInput },
  meta: { error, touched, valid },
  disabled,
  label,
  autoFocus
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
          borderColor: !valid && touched ? 'red' : 'white',
          // flex: 1
        },
      ]}
      placeholder={placeholder}
      autoFocus={autoFocus}
      {...restInput}
    />
    {!valid && touched && <Text style={styles.rootError}>{error}</Text>}
  </View>
);

const styles = StyleSheet.create({
  rootInput: {
    // borderWidth: 1,
    borderWidth: 1,
    borderRadius: 15,
    height: Layout.window.height * 0.085,
    // width: '100%',
    // flex: 1,
    paddingTop: Layout.window.height * 0.025,
    padding: Layout.window.height * 0.025,
    fontSize: Fonts.xlarge,
    marginTop: Layout.window.width * 0.025,
    marginBottom: Layout.window.width * 0.05,
    backgroundColor: 'white',
    alignItems: 'center',

    fontSize: Fonts.large,
    fontWeight: '300'
  },
  rootError: {
    color: 'red',
    marginBottom: 5,
    marginTop: -5,
  },
  text: {
    fontSize: Fonts.large,
  }
})

export default RFTextInput;