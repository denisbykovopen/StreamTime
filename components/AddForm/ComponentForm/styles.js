import { StyleSheet } from "react-native";
import Colors from "../../.././constants/Colors";
import Fonts from "../../../constants/Fonts";
import Layout from "../../../constants/Layout";

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
    // padding: 20
  },
  formButton: {
    backgroundColor: Colors.buttonColor,
    borderRadius: Math.round(Layout.window.width + Layout.window.height) / 2,
    padding: Layout.window.width * 0.025,
    height: Layout.window.width * 0.15,
    // width: Layout.window.width * 0.5,
    marginBottom: Layout.window.width * 0.05,
    alignItems: 'center',
    justifyContent: 'center'
  },
  formButtonText: {
    alignSelf: "center",
    color: Colors.buttonTextColor,
    fontSize: Fonts.xlarge,
    fontWeight: 'bold'
  },
  toProcButton: {
    borderWidth: 1,
    borderRadius: 15,
    height: Layout.window.height * 0.085,
    // width: '100%',
    borderColor: Colors.w,
    paddingTop: Layout.window.height * 0.025,
    padding: Layout.window.height * 0.025,
    fontSize: Fonts.xlarge,
    marginTop: Layout.window.width * 0.025,
    marginBottom: Layout.window.width * 0.05,
    backgroundColor: 'white',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});

export default styles;
