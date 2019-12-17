import { StyleSheet } from "react-native";
import Colors from '../.././constants/Colors';
import Fonts from "../../constants/Fonts";
import Layout from "../../constants/Layout";

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
  // inputsContainerEnd: {
  //   height: '100%'
  // },
  formButton: {
    backgroundColor: Colors.buttonColor,
    borderRadius: Math.round(Layout.window.width + Layout.window.height) / 2,
    padding: Layout.window.width * 0.025,
    height: Layout.window.width * 0.15,
    // width: Layout.window.width * 0.85,
    marginBottom: Layout.window.width * 0.075,
    marginTop: Layout.window.width * 0.075,
    alignItems: 'center',
    justifyContent: 'center'
  },
  formButtonText: {
    alignSelf: 'center',
    color: Colors.buttonTextColor,
    fontSize: Fonts.xlarge,
    fontWeight: 'bold'
  },

  stepText: {
    fontSize: Fonts.xlarge
  },
  stepLine : {
    width: Layout.window.width * 0.4,
    height: Layout.window.width * 0.02,
    borderRadius: 3,
    backgroundColor: Colors.stepLineColor,
    alignSelf: 'flex-end',
    marginTop: Layout.window.height * 0.025
  },
  stepLineNext : {
    width: Layout.window.width * 0.4,
    height: Layout.window.width * 0.02,
    opacity: 0.2,
    borderRadius: 3,
    backgroundColor: Colors.stepLineColor,
    alignSelf: 'flex-end',
    marginTop: Layout.window.height * 0.025
  },
  stepInnerContainer: {
    alignItems: 'center'
  },
  stepContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginBottom: Layout.window.height * 0.05
  },
 

});

export default styles;
