import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import ChangeForm from "../components/ChangeForm";
import Colors from "../constants/Colors";
import Fonts from "../constants/Fonts";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default class PasswordChangeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    header: null
  });
  render() {
    return (
      <KeyboardAwareScrollView
        ref="scrollView"
        keyboardShouldPersistTaps={"always"}
        contentContainerStyle={{
          flexGrow: 1 // this will fix scrollview scroll issue by passing parent view width and height to it
        }}
      >
        <View style={styles.container}>
          <StatusBar barStyle="dark-content" />
          <Text style={styles.headerText}>Enter new password, please.</Text>
          <ChangeForm />
        </View>
      </KeyboardAwareScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.bgColor,
    padding: 20
  },
  headerText: {
    alignSelf: "center",
    fontSize: Fonts.xxlarge,
    marginTop: 50,
    marginBottom: 75
  }
});
