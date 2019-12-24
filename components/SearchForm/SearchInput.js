import React from "react";
import { TextInput, Text, View, StyleSheet } from "react-native";
import Layout from "../../constants/Layout";
import Fonts from "../../constants/Fonts";
import SearchIcon from "../../common/SearchIcon";
import { Ionicons } from "@expo/vector-icons";
import { Input } from "react-native-elements";

// ...restInput
const SearchInput = ({
  placeholder,
  input: { onBlur, onChange, onFocus, value, ...restInput },
  meta: { error, touched, valid },
  disabled,
  label,
  autoFocus
}) => (
  <View style={styles.inputContainer}>
    <SearchIcon />
    <TextInput
      // leftIcon={<SearchIcon />}
      scrollEnabled={false}
      multiline={true}
      label={label}
      onBlur={onBlur}
      onChangeText={onChange}
      onFocus={onFocus}
      editable={!disabled}
      selectTextOnFocus={!disabled}
      value={value}
      //   setNativeProps={true}
      style={[
        // styles.rootInput,
        styles.inputContainer,
        {
          color: disabled ? "gray" : "black",
          borderColor: !valid && touched ? "red" : "white"
        }
      ]}
      //   disabledInputStyle={{color: disabled ? 'gray' : 'black',}}
      //   containerStyle={[styles.inputContainer]}
      placeholder={placeholder}
      autoFocus={autoFocus}
      //   floatingLabelText={<SearchIcon/>}
      //   floatingLabelFixed={true}
      {...restInput}
    />
    {!valid && touched && <Text style={styles.rootError}>{error}</Text>}
  </View>
);

const styles = StyleSheet.create({
  rootInput: {
    // borderWidth: 1,
    // borderRadius: 15,
    // height: Layout.window.height * 0.085,
    // width: Layout.window.width * 0.85,
    // paddingTop: Layout.window.height * 0.025,
    // padding: Layout.window.height * 0.025,
    fontSize: Fonts.xlarge,
    // marginTop: Layout.window.width * 0.025,
    // marginBottom: Layout.window.width * 0.05,
    flex: 1
  },
  rootError: {
    color: "red",
    marginBottom: 5,
    marginTop: -5
  },
  text: {
    fontSize: Fonts.xlarge
  },
  inputContainer: {
    alignItems: "center",
    // justifyContent: 'center',
    flexDirection: "row",
    // paddingVertical: 0,
    // paddingHorizontal: 0,
    backgroundColor: "white",
    borderWidth: 1,
    borderRadius: 15,
    marginTop: Layout.window.width * 0.025,
    marginBottom: Layout.window.width * 0.05,
    // padding: Layout.window.height * 0.075,
    // fontSize: Fonts.xlarge,
    borderColor: "white"
  }
});

export default SearchInput;
