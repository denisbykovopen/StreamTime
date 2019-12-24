import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import Layout from "../constants/Layout";
import Colors from "../constants/Colors";

export default class AddProjectScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    header: null
  });
  render() {
    return (
      <View style={styles.container}>
          <StatusBar barStyle="dark-content" />
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
