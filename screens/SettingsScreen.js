import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Layout from "../constants/Layout";
import Colors from "../constants/Colors";

export default class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>/AddProjectScreen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.bgColor,
    padding: Layout.window.width * 0.075,
  }
});
