import React from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import { withNavigation } from "react-navigation";
import Fonts from "../../constants/Fonts";

const ForgetButton = ({ navigation }) => (
  <View style={styles.buttonContainer}>
    <TouchableOpacity
      onPress={() => navigation.navigate("Pass")}
      style={styles.underLineContainer}
    >
      <Text style={styles.text}>Forgot Password?</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  buttonContainer: {
    margin: 10,
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
