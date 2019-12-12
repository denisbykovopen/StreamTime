import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default class PasswordChangeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>/PasswordChangeScreen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});