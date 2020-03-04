import React from "react";
import { View, Text, StyleSheet, StatusBar, ScrollView } from "react-native";
import Layout from "../constants/Layout";
import Colors from "../constants/Colors";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Fonts from "../constants/Fonts";
import CurrentProject from "../components/CurrentProject";
// import { withAuthentication } from '../Session';
// import { withFirebase } from "../Firebase";
import SearchForm from '../components/SearchForm';

class CurrentScreen extends React.Component {
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
        <Text style={styles.headerText}>Current Projects</Text>
        <SearchForm />
        <CurrentProject />
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

export default CurrentScreen;

// export default withFirebase(CurrentScreen);