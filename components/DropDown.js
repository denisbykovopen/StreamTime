import React from "react";
import { TouchableOpacity, Text, View, StyleSheet } from "react-native";
import Layout from "../constants/Layout";
import Colors from "../constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import Fonts from "../constants/Fonts";

export default class DropDown extends React.Component {
  state = {
    dropDown: false
  };
  dropDown = () => {
    this.setState({
      dropDown: !this.state.dropDown
    });
<<<<<<< HEAD
    console.log("---processName:", this.props.processName)
=======
>>>>>>> ef6708b5b32b815daa85f564a5152695991bcfb6
  };
  render() {
    return (
      <View key={this.props.i} style={styles.dropDownContainer}>
        <Text style={styles.lilText}> {this.props.componentName} </Text>

        <TouchableOpacity style={styles.dropDownButton} onPress={this.dropDown}>
          <Text style={styles.thinLilText}>Processes</Text>
          <Ionicons
            name={this.state.dropDown ? "ios-arrow-up" : "ios-arrow-down"}
            color={Colors.black}
          />
        </TouchableOpacity>

        {this.state.dropDown && (
            <View style={styles.dropDown}>
                <View style={styles.dropDownInner}>
                    <Text style={styles.dropDownText}> {this.props.processName} </Text>
                </View>
            </View>
        )}

      </View>
    );
  }
}

const styles = StyleSheet.create({
    dropDown: {
        backgroundColor: Colors.w,
        borderWidth: 1,
        borderRadius: 15,
        borderColor: Colors.w,
        marginTop: Layout.window.width * 0.025,
        marginBottom: Layout.window.width * 0.05,
        // marginBottom: Layout.window.width * 13,
    },
    dropDownButton: {
        borderWidth: 1,
        borderRadius: 15,
        height: Layout.window.height * 0.085,
        // width: '100%',
        borderColor: Colors.w,
        paddingTop: Layout.window.height * 0.025,
        padding: Layout.window.height * 0.025,
        fontSize: Fonts.xlarge,
        marginTop: Layout.window.width * 0.025,
        marginBottom: Layout.window.width * 0.05,
        backgroundColor: 'white',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    dropDownInner: {
        minHeight: Layout.window.height * 0.085,
        // alignSelf: 'center',
        paddingTop: Layout.window.height * 0.025,
        padding: Layout.window.height * 0.025,
        // marginBottom: Layout.window.width * 0.05,
    },
    dropDownText: {
        fontSize: Fonts.xlarge,
    },
    lilText: {
        fontSize: Fonts.xlarge,
    },
    thinLilText: {
        fontSize: Fonts.xlarge,
        fontWeight: '300'
    },
    // dropDownContainer: {
    //     height: '100%'
    // }
})