import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView
} from "react-native";
import { withNavigation } from "react-navigation";
import Layout from "../constants/Layout";
import Colors from "../constants/Colors";
import AddCompIcon from "../common/AddCompIcon";
import Fonts from "../constants/Fonts";
import AddToolForm from "../components/AddToolForm/index";

import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Ionicons } from "@expo/vector-icons";

class ToolsScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    header: null
  });
  state = {
    index: 1
  };
  toggle = () => {
    this.setState({
      index: this.state.index + 1
    });
  };
  render() {
    const tools = [];

    for (let i = 0; i < this.state.index; i += 1) {
      tools.push(<AddToolForm key={i} index={i} form={`tool${i}`} />);
    }

    return (
      <ScrollView
        contentContainerStyle={{
          flex: 1
        }}
        showsVerticalScrollIndicator={false}
      >
        <KeyboardAwareScrollView
          showsVerticalScrollIndicator={false}
          ref="scrollView"
          keyboardShouldPersistTaps={"always"}
          contentContainerStyle={{
            flexGrow: 1
          }}
        >
          <View style={styles.container}>
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
              <Text style={styles.headerText}>New Tool</Text>
            </View>
            <Text style={styles.thinText}>Please enter the name and the price of the new tool you’d like to create</Text>
            <View style={styles.addToolContainer}>
              <Text style={styles.addToolText}>Add a new tool</Text>
              {tools}
              <TouchableOpacity
                onPress={this.toggle}
                style={styles.addToolOpenButton}
              >
                <AddCompIcon />
                <Text style={styles.addToolOpenText}>One more tool</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Add")}
              style={styles.nextButton}
            >
              <Text style={styles.nextText}>Back to component</Text>
            </TouchableOpacity>
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
  addToolContainer: {
    marginBottom: Layout.window.height * 0.125
  },
  addToolText: {
    fontSize: Fonts.xlarge,
    marginTop: Layout.window.width * 0.05,
    marginBottom: Layout.window.width * 0.05
  },
  addToolOpenButton: {
    flexDirection: "row",
    alignItems: "center",
    height: Layout.window.height * 0.15,
    overflow: "hidden"
  },
  addToolOpenText: {
    fontSize: Fonts.xlarge,
    margin: Layout.window.width * 0.05
  },
  headerText: {
    fontSize: Fonts.xxlarge,
    marginTop: Layout.window.height * 0.05,
    marginBottom: Layout.window.height * 0.05,
    marginRight: Layout.window.height * 0.1675
  },
  containerHeader: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  button: {
    alignSelf: "center"
  },
  thinText: {
    fontSize: Fonts.xlarge,
    fontWeight: '300',
  },
  nextButton: {
    backgroundColor: Colors.buttonColor,
    borderRadius: Math.round(Layout.window.width + Layout.window.height) / 2,
    padding: Layout.window.width * 0.025,
    height: Layout.window.width * 0.15,
    // width: Layout.window.width * 0.5,
    marginBottom: Layout.window.width * 0.05,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: Layout.window.height * 0.15
  },
  nextText: {
    alignSelf: "center",
    color: Colors.buttonTextColor,
    fontSize: Fonts.xlarge,
    fontWeight: "bold"
  }
});

export default withNavigation(ToolsScreen);
