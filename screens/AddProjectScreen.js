import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Layout from "../constants/Layout";

export default class AddProjectScreen extends React.Component {
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
    backgroundColor: "#fff",
    padding: Layout.window.width * 0.075,
  }
});
