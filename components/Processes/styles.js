import { StyleSheet } from "react-native";
import Colors from "../.././constants/Colors";
import Fonts from "../../constants/Fonts";
import Layout from "../../constants/Layout";

const styles = StyleSheet.create({
  openProcButton: {
    borderWidth: 1,
    borderRadius: 15,
    height: Layout.window.height * 0.085,
    // width: '100%',
    borderColor: Colors.w,
    paddingTop: Layout.window.height * 0.025,
    padding: Layout.window.height * 0.025,
    fontSize: Fonts.xlarge,
    // marginTop: Layout.window.width * 0.025,
    marginBottom: Layout.window.width * 0.05,
    backgroundColor: "white",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  text: {
    fontSize: Fonts.xlarge,
    marginBottom: Layout.window.width * 0.025
  },
  thinText: {
    fontSize: Fonts.xlarge,
    fontWeight: "300"
  },
  line: {
    borderTopWidth: 1,
    borderColor: Colors.w,
    marginBottom: Layout.window.width * 0.025
  },
  searchProcContainer: {
    backgroundColor: Colors.w,
    borderWidth: 1,
    borderColor: Colors.w,
    borderRadius: 20
  },
  addProcContainer: {
    borderTopWidth: 1,
    borderColor: Colors.w,
    marginBottom: Layout.window.height * 0.125
  },
  addProcText: {
    fontSize: Fonts.xlarge,
    marginTop: Layout.window.width * 0.05,
    marginBottom: Layout.window.width * 0.05
  },
  addProcOpenButton: {
    flexDirection: "row",
    alignItems: "center",
    height: Layout.window.height * 0.15,
    overflow: "hidden"
  },
  addProcOpenText: {
    fontSize: Fonts.xlarge,
    margin: Layout.window.width * 0.05
    // marginBottom: Layout.window.height * 10,
  },
  nextButton: {
    backgroundColor: Colors.buttonColor,
    borderRadius: Math.round(Layout.window.width + Layout.window.height) / 2,
    padding: Layout.window.width * 0.025,
    height: Layout.window.width * 0.15,
    // width: Layout.window.width * 0.5,
    marginBottom: Layout.window.width * 0.05,
    alignItems: "center",
    justifyContent: "center"
  },
  nextText: {
    alignSelf: "center",
    color: Colors.buttonTextColor,
    fontSize: Fonts.xlarge,
    fontWeight: "bold"
  }
});

export default styles;
