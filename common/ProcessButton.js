import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import Fonts from "../constants/Fonts";
import Layout from "../constants/Layout";
import Colors from "../constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import Timer from "../components/Timer/index";
import { compose } from "recompose";
import { withFirebase } from "../Firebase/context";
import { connect } from "react-redux";
import { getProjects } from '../actions';

class ProcessButton extends React.Component {
  state = {
    isTimerStart: false,
    resetTimer: false,
    currentTime: null,
    projects: this.props.projects
  };

  startTimer = () => {
    this.setState({
      isTimerStart: true,
      resetTimer: false
    });
  };

  stopTimer = async () => {
    const { processName, firebase, getProjects } = this.props;
    const { projects } = this.state;
    const userId = firebase.auth.currentUser.uid;

    this.setState(
      {
        isTimerStart: false,
        currentTime: this.currentTime
      },
      () =>
        console.log(
          "---- timer stop result:",
          this.state.isTimerStart,
          this.state.currentTime,
          projects
        )
    );

    for (let key of Object.keys(projects)) {
      console.log("----- timer stop 2:", key);
      if (projects[key].hasOwnProperty("components")) {
        Object.keys(projects[key].components).map(item => {
          console.log("----- timer stop 3:", item);
          if (
            projects[key].components[item].processes.hasOwnProperty(processName)
          ) {
            console.log(
              "----- timer stop 4:",
              true,
              userId,
              key,
              item,
              processName,
              projects[key].components[item].processes[`${processName}`].completed
            );
            
            firebase.userProcess(userId, key, item, processName).update({
              completed: true
            });

            return projects[key].components[item].processes[`${processName}`].completed = true;
          }
        });
      }
    }
    await getProjects(projects)
    console.log("----- timer stop 5:", projects)
  };

  getFormattedTime = time => {
    this.currentTime = time;
  };

  resetTimer = () => {
    this.setState({
      isTimerStart: false,
      resetTimer: true
    });
  };

  render() {
    return (
      <View style={styles.processContainer}>
        <TouchableOpacity
          style={styles.processInner}
          onPress={this.state.isTimerStart ? this.stopTimer : this.startTimer}
        >
          <Text style={styles.processTextThin}>{this.props.processName}</Text>

          <Timer
            start={this.state.isTimerStart}
            options={timerStyleOptions}
            getTime={this.getFormattedTime}
          />

          <View style={styles.playIcon}>
            <Ionicons
              name={!this.state.isTimerStart ? "ios-play" : "ios-pause"}
              size={Layout.window.height * 0.0375}
              color={Colors.play}
            />
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const timerStyleOptions = {
  container: {
    backgroundColor: Colors.w,
    alignItems: "center"
  },
  text: {
    fontSize: Fonts.xlarge
  }
};

const styles = StyleSheet.create({
  processInner: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    borderWidth: 1,
    borderRadius: 15,
    borderColor: Colors.w,
    height: Layout.window.height * 0.085,

    paddingTop: Layout.window.height * 0.025,
    padding: Layout.window.height * 0.025,
    fontSize: Fonts.xlarge,
    marginTop: Layout.window.width * 0.025,
    marginBottom: Layout.window.width * 0.05,
    backgroundColor: "white",
    alignItems: "center",

    shadowColor: "rgba(241, 241, 241, 0.7)",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 20,
    shadowOpacity: 1,

    elevation: 2
  },
  processTextThin: {
    fontSize: Fonts.xlarge,
    fontWeight: "300"
  },
  processText: {
    fontSize: Fonts.xlarge
  },
  playIcon: {
    shadowColor: "rgba(71, 255, 191, 0.05)",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 10,
    shadowOpacity: 1,

    elevation: 2
  }
});

mapStateToProps = state => ({
  projects: state.projects.projects
});

export default compose(
  withFirebase,
  connect(mapStateToProps, {getProjects})
)(ProcessButton);
