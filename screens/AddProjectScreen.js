import React from "react";
import { View, Text, StyleSheet, StatusBar, ScrollView } from "react-native";
import Layout from "../constants/Layout";
import Colors from "../constants/Colors";
import AddForm from "../components/AddForm/index";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Fonts from "../constants/Fonts";

export default class AddProjectScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    header: null
  });
  render() {
    return (
      <ScrollView
        contentContainerStyle={{ 
          flex: 1, 
          // height: "100%" 
        }}
        // bounces={false}
        // centerContent={true}
        showsVerticalScrollIndicator={false}
      >
        <KeyboardAwareScrollView
          ref="scrollView"
          keyboardShouldPersistTaps={"always"}
          contentContainerStyle={{
            flexGrow: 1
          }}
        >
          <View style={styles.container}>
            <StatusBar barStyle="dark-content" />
            <Text style={styles.headerText}>Add New Project</Text>
            <AddForm />
          </View>
        </KeyboardAwareScrollView>
      </ScrollView>
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
    alignSelf: "center",
    fontSize: Fonts.xxlarge,
    marginTop: Layout.window.height * 0.05,
    marginBottom: Layout.window.height * 0.05,
  },
});
