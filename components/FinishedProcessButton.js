import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import Progress from '../common/Progress';
import Colors from "../constants/Colors";
import Layout from "../constants/Layout";
import Fonts from "../constants/Fonts";

function msToTime(s) {
    var ms = s % 1000;
    s = (s - ms) / 1000;
    var secs = s % 60;
    s = (s - secs) / 60;
    var mins = s % 60;
    var hrs = (s - mins) / 60;
  
    return hrs + ":" + mins;
  }

const FinishedProcessButton = props => {
  return (
    <View style={styles.containerInner}>
      <View style={styles.containerHeader}>
        <Text style={styles.headerText}>{props.processName}</Text>
      </View>
      <View style={styles.containerMain}>
        <Progress completeProcs={100} />
      </View>
      <View style={styles.containerFooter}>
        <Text>
          {" "}
          {msToTime(
            props.processTime
          )}{" "}
          spent{" "}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    containerInner: {
        borderWidth: 1,
        borderColor: Colors.w,
        borderRadius: 20,
        padding: Layout.window.width * 0.05,
    
        backgroundColor: Colors.w,
        marginTop: Layout.window.height * 0.025,
        marginBottom: Layout.window.height * 0.025
        // position: 'relative',
        // zIndex: 1,
        // height: Layout.window.height * 0.25,
      },
      containerHeader: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        // padding: Layout.window.width * 0.05,
        position: "relative",
        zIndex: 1
      },
      headerText: {
        alignSelf: "center",
        fontSize: Fonts.xxlarge,
        fontWeight: "normal"
      },
      containerDetails: {
        fontSize: Fonts.large
      },
      containerMain: {
        flexDirection: "column"
        // padding: Layout.window.width * 0.05,
        // position: "relative"
      },
      containerFooter: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
        // position: "relative"
      },
})

export default FinishedProcessButton;