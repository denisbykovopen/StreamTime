import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  rootFailed: {
    color: "red",
    textAlign: "center"
  },
  rootSucceeded: {
    color: "green",
    textAlign: "center"
  },
  rootInput: {
    // borderWidth: 1,
    borderBottomWidth: 1,
    height: 40,
    padding: 10,
    fontSize: 16
  },
  rootError: {
    color: "red"
  },
  // formContainer: {
  //   marginBottom: 20,
  // },
  inputsContainer: {
    // marginBottom: 10,
    padding: 20
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  // formButton: {
  //   paddingTop: 30
  // },
  segmentedContainer: {
    padding: 10
  },
  aboutInput: {
    borderBottomWidth: 1,
    height: 80,
    padding: 10,
    fontSize: 16
  }
});

export default styles;
