import React from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import { withNavigation } from "react-navigation";
import Fonts from "../../constants/Fonts";
import Layout from "../../constants/Layout";

const ForgetButton = ({ navigation }) => (
  <View style={styles.buttonContainer}>
    <TouchableOpacity
      onPress={() => navigation.navigate("Forget")}
      style={styles.underLineContainer}
    >
      <Text style={styles.text}>Forgot Password?</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  buttonContainer: {
    marginBottom: Layout.window.width * 0.15,
    marginRight: Layout.window.width * 0.05,
    marginTop: Layout.window.width * 0.025,
    alignSelf: 'flex-start'
  },
  underLineContainer: {
    borderBottomWidth: 1,
    borderBottomColor: "black",
    paddingBottom: 1
  },
  text: {
    fontSize: Fonts.xlarge,
  }
});

export default withNavigation(ForgetButton);
