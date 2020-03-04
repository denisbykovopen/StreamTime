import React from "react";
import { TouchableOpacity, Text, StyleSheet, View, Button } from "react-native";
import { withNavigation } from "react-navigation";
import Fonts from "../../constants/Fonts";
import Layout from "../../constants/Layout";
import Colors from "../../constants/Colors";

const Agree = ({ navigation }) => (
  <View style={styles.buttonContainer}>
    <Text style={styles.text}>I agree to </Text>
    {/* <Button
      onPress={() => navigation.navigate("Forget")}
      style={styles.button}
      title="terms"
    /> */}
    <TouchableOpacity
      onPress={() => navigation.navigate("Terms")}
      style={styles.button}
    >
      <Text style={styles.button}>terms</Text>
    </TouchableOpacity>
    <Text style={styles.text}> and </Text>
    {/* <Button
      onPress={() => navigation.navigate("Forget")}
      style={styles.button}
      title="privacy policy"
    /> */}
    <TouchableOpacity
      onPress={() => navigation.navigate("Privacy")}
      style={styles.button}
    >
      <Text style={styles.button}>privacy policy</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  buttonContainer: {
    marginBottom: Layout.window.width * 0.25,
    marginTop: Layout.window.width * 0.05,
    alignSelf: "center",
    flexDirection: "row"
    // justifyContent: 'center'
  },
  button: {
    color: Colors.buttonColor,
    fontSize: Fonts.xlarge
    // alignSelf: 'baseline',
    // paddingBottom: Layout.window.height * 0.25,
  },
  text: {
    fontSize: Fonts.xlarge
    // alignSelf: 'flex-end'
  }
});

export default withNavigation(Agree);
