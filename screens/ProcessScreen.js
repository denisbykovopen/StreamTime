import React from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  ScrollView,
  TouchableOpacity
} from "react-native";
import Layout from "../constants/Layout";
import Colors from "../constants/Colors";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Fonts from "../constants/Fonts";
import { Ionicons } from "@expo/vector-icons";
import { withNavigation } from "react-navigation";
// import Select from "../components/Select";
// import MSelect from "../components/MSelect";
// import Multiple from '../components/Multiple';
// import Single from '../components/Single'
// import MultipleSelect from '../components/MultipleSelect';
import Processes from "../components/Processes";

class ProcessScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    header: null
  });
  render() {
    return (
      <ScrollView
        contentContainerStyle={{
          flex: 1
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

            <View style={styles.containerHeader}>
              <TouchableOpacity
                onPress={() => this.props.navigation.goBack()}
                style={styles.button}
              >
                <Ionicons
                  name="ios-arrow-back"
                  color={Colors.black}
                  size={Layout.window.height * 0.035}
                />
              </TouchableOpacity>
              <Text style={styles.headerText}>Processes</Text>
            </View>

            {/* <Text> {String(this.props.navigation.getParam("itemId"))} </Text> */}

            <View style={styles.containerMain}>
              <Text style={styles.thinText}>
                Please select all possible processes for component or add a new
                one
              </Text>
              <Processes />
            </View>
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
    padding: Layout.window.width * 0.075
  },
  headerText: {
    fontSize: Fonts.xxlarge,
    marginTop: Layout.window.height * 0.05,
    marginBottom: Layout.window.height * 0.05,
    marginRight: Layout.window.height * 0.15
    // flexGrow: 1
  },
  containerHeader: {
    flexDirection: "row",
    justifyContent: "space-between"
    // alignItems: 'center'
    // justifyContent: 'center'
  },
  button: {
    alignSelf: "center"
    // marginRight: 0
    // flexGrow: 2
  },
  thinText: {
    fontSize: Fonts.xlarge,
    fontWeight: "300",
    marginBottom: Layout.window.height * 0.05
  }
});

export default withNavigation(ProcessScreen);
