import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { withFirebase } from "../Firebase/context";
import CurrentProjectModal from "./CurrentProjectModal";
import Layout from "../constants/Layout";
import Colors from "../constants/Colors";
import Fonts from "../constants/Fonts";
import EditButton from "./EditButton";
import Progress from "../common/Progress";

function msToTime(s) {
  var ms = s % 1000;
  s = (s - ms) / 1000;
  var secs = s % 60;
  s = (s - secs) / 60;
  var mins = s % 60;
  var hrs = (s - mins) / 60;

  return hrs + ":" + mins;
}
// const finishedTest = [];
// const suggestedTest = [];
// const procsArray = [];

class CurrentProjectButton extends React.Component {
  state = {
    projectModal: false,
    finished: [],
    suggested: [],
    progress: 0,
    finishedSum: null,
    timeSum: 0
  };

  componentDidMount() {
    const { finished, suggested } = this.state;
    const { current } = this.props;
    const userId = this.props.firebase.auth.currentUser.uid;

    this.props.firebase.userProject(userId, current).once("value", snapshot => {
      console.log("----- currentProjectButton didMount: snap:", snapshot.val());
      const currentKeys = snapshot.val();

      for (let key in currentKeys) {

        if (key == "components") {
          
          Object.keys(currentKeys[key]).map(item => {
       
            Object.keys(currentKeys[key][item].processes).map(atom => {

              if (
                currentKeys[key][item].processes[atom].completed &&
                this.state.finished.indexOf(currentKeys[key][item].processes) <
                  0
              ) {
                 this.setState(prevState => ({
                  finished: [
                    ...prevState.finished,
                    currentKeys[key][item].processes
                  ]
                }));

                // finishedTest.push(currentKeys[key][item].processes);

                // let completed = [];
                // completed.push(currentKeys[key][item].processes)

              } else if (
                !currentKeys[key][item].processes[atom].completed &&
                this.state.suggested.indexOf(currentKeys[key][item].processes) <
                  0
              ) {
                 this.setState(prevState => ({
                  suggested: [
                    ...prevState.suggested,
                    currentKeys[key][item].processes
                  ]
                }));

                // suggestedTest.push(currentKeys[key][item].processes);

                // let unCompleted = [];
                // unCompleted.push(currentKeys[key][item].processes);
              }
            });
          });

          for (let key of this.state.finished) {
            const finishedSum = Object.keys(key).length;
          
            this.setState({
              finishedSum
            });

            let sum = 0;

            for (let i of Object.keys(key)) {
               
               
                sum += Number(key[i].processTime);
                this.setState({
                    timeSum: sum
                },
                    () => console.log(
                        "----- currentProjectButton finished time state:", 
                        this.state.timeSum,
                        "----- currentProjectButton finished time loop:",
                        key[i].processTime
                    )
                )
            }
          }

          for (let key of this.state.suggested) {
            let suggestedSum = Object.keys(key).length;

            console.log(
                "----- currentProjectButton progress values:",
                suggestedSum, 
                this.state.finishedSum
            );

            const progress = 100 / (suggestedSum + this.state.finishedSum) * this.state.finishedSum;

            this.setState({
                progress
            },
                () => console.log("----- currentProjectButton progress:", this.state.progress)
            );
          }

          console.log(
            "----- currentProjectButton didMount:state.finished:",
            this.state.finished,
            "----- currentProjectButton didMount:state.suggested:",
            this.state.suggested,
            "----- currentProjectButton didMount:state.progress:",
            this.state.progress
          );
        }
      }
    });
  }
  openProjectModal = () => {
    this.setState({
      projectModal: true
    });
  };

  closeProjectModal = () => {
    this.setState({
      projectModal: false
    });
  };

  render() {
    const { current } = this.props;
    const { finished, suggested, finishedSum, progress, timeSum, projectModal } = this.state;
    console.log(
      "----- currentProjectButton render:state.finished:",
      finished,
      "----- currentProjectButton render:state.suggested:",
      suggested,
      "----- currentProjectButton render:state.progress:",
      progress
    );
    return (
      <React.Fragment>
        <React.Fragment>
          <TouchableOpacity
            style={styles.containerInner}
            onPress={() => this.openProjectModal()}
          >
            <View style={styles.containerHeader}>
              <Text style={styles.headerText}>{current} </Text>
              <EditButton current={current} />
            </View>
            <View style={styles.containerMain}>
              <Progress completeProcs={progress} />
            </View>

            <View style={styles.containerFooter}>
              <Text>
                {finishedSum > 0 ? finishedSum : 0} proceses completed{" "}
              </Text>
              <Text>{msToTime(timeSum)} spend </Text>
              {/* <Text>{timeSum} spend </Text> */}
            </View>
          </TouchableOpacity>
          <CurrentProjectModal
            onClose={this.closeProjectModal}
            visible={projectModal}
            finished={finished}
            suggested={suggested}
          />
        </React.Fragment>
      </React.Fragment>
    );
  }
}

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
  }
});

export default withFirebase(CurrentProjectButton);
