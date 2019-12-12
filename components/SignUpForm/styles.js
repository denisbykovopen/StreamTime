import { StyleSheet } from "react-native";
import Colors from '../.././constants/Colors';
import Fonts from "../../constants/Fonts";

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
    fontSize: Fonts.xlarge
  },
  rootError: {
    color: "red"
  },
  inputsContainer: {
    padding: 0
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
    fontSize: Fonts.xlarge,
  }
});

export default styles;
