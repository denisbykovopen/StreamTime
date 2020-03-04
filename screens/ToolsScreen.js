import React from "react";
import { View, Text, StyleSheet, StatusBar, ScrollView, TouchableOpacity,  } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Layout from "../constants/Layout";
import Colors from "../constants/Colors";
import Fonts from "../constants/Fonts";
import { Ionicons } from '@expo/vector-icons';
import { withNavigation } from "react-navigation";
import { withFirebase } from "../Firebase/context";
import MultipleSelectTools from "../components/MultipleSelectTools";

import { connect } from 'react-redux';
import { compose } from 'recompose';


class ToolsScreen extends React.Component {
  state = {
    globalTools: []
  }
  // static navigationOptions = ({ navigation }) => ({
  //   header: null
  // });
  componentDidMount() {
    this.props.firebase.globalTools().on('value', snapshot => {
      console.log("---tools loading", snapshot.val());
      const fireToolsArray = snapshot.val() && Object.keys(snapshot.val()).map(item => item);
      this.setState({ globalTools: fireToolsArray }, () =>
        console.log("---tools state test", fireToolsArray, this.state.globalTools)
      );
      // this.setState({ filteredTools: fireToolsArray });
    })
    const procArray = Object.keys(this.props.processes);
    console.log("---proc to tools", procArray)
  }
  render() {
    const {processes} = this.props;
    return (
      <ScrollView
        contentContainerStyle={{
          flex: 1
        }}
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
              <Text style={styles.headerText}>Tools</Text>
            </View>

            <View style={styles.containerMain}>
              <Text style={styles.thinText}>
                Please select all required tools for the processes
              </Text>
              {Object.keys(processes).map((item, i) => (
                <MultipleSelectTools
                  key={i}
                  tools={this.state.globalTools}
                  proc={item}
                  style={styles.select}
                />
              ))}
              {/* <MultipleSelectTools
                tools = {this.state.globalTools}
              /> */}
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
    // position: 'relative',
    // zIndex: 2
    
  },
  headerText: {
    fontSize: Fonts.xxlarge,
    marginTop: Layout.window.height * 0.05,
    marginBottom: Layout.window.height * 0.05,
    marginRight: Layout.window.height * 0.2
    // flexGrow: 1
  },
  containerHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    // alignItems: 'center'
    // justifyContent: 'center'
  },
  button: {
    alignSelf: 'center',
    // marginRight: 0
    // flexGrow: 2
  },
  thinText: {
    fontSize: Fonts.xlarge,
    fontWeight: '300',
    marginBottom: Layout.window.height * 0.05,
  },
  text: {
    fontSize: Fonts.xlarge,
    // flexGrow: 1
    // position: 'relative',
  },
  select: {
    // alignSelf: 'flex-end'
    // marginLeft: 500
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

// export default withFirebase(withNavigation(ToolsScreen));

mapStateToProps = (state) => {
  return {
    processes: state.processes.processes
  }
}

export default compose (
  withFirebase,
  withNavigation,
  connect(
    mapStateToProps,
    null
  )
)(ToolsScreen);