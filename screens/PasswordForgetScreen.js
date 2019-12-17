import React from "react";
import { View, Text, StyleSheet, StatusBar, } from "react-native";
import ForgetForm from "../components/ForgetForm"; 
import Colors from "../constants/Colors";
import Fonts from "../constants/Fonts";
import Layout from '../constants/Layout';

export default class PasswordForgetScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    header: null
  });
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <Text style={styles.headerText}>A letter with a link will be sending to your email.</Text>
        <ForgetForm />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.bgColor,
    padding: Layout.window.width * 0.075,
  },
  headerText: {
    fontSize: Fonts.xxlarge,
    marginTop: Layout.window.height * 0.05,
    marginBottom: Layout.window.height * 0.05,
    alignSelf: 'center',
    textAlign: 'center'
  },
});