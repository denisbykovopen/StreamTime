import { StyleSheet } from "react-native";
import Colors from '../.././constants/Colors';

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
    borderBottomWidth: 1,
    height: 40,
    padding: 10,
    fontSize: 16
  },
  rootError: {
    color: "red"
  },
  inputsContainer: {
    padding: 20
  },
  formButton: {
    backgroundColor: Colors.buttonColor,
    borderRadius: 25,
    padding: 10,
    width: "100%",
    
  },
  formButtonText: {
    alignSelf: 'center',
    color: Colors.buttonTextColor,
    fontSize: 18,
  }
});

export default styles;
