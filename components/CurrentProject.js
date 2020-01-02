import React from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  ScrollView,
  Alert,
  TouchableOpacity
} from "react-native";
import Layout from "../constants/Layout";
import Colors from "../constants/Colors";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Fonts from "../constants/Fonts";
import { withFirebase } from "../Firebase";
import { connect } from "react-redux";
import { compose } from "recompose";
import { getProjects } from "../actions";
import EditIcon from "../common/EditIcon";
import Progress from "../common/Progress";
import EditButton from "../components/EditButton";

class CurrentProject extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     edit: false,
  //     // elements: []
  //     clicked: null
  //   };
  //   // this.toggleEdit = this.toggleEdit.bind(this);
  // }

  componentDidMount() {
    const userId = this.props.firebase.auth.currentUser.uid;
    this.props.firebase
      .userProjects(userId)
      .once("value")
      .then(snapshot => {
        console.log("--current projecs snap", snapshot.val());
        // for (let [key, value] of Object.entries(snapshot.val())) {
        //     console.log(`${key}: ${Object.entries(value)}`);
        // }
        this.props.getProjects(snapshot.val());
      });
  }

  // toggleEdit = () => {
  //   // const self = this;
  //   this.setState({
  //     edit: true
  //   })
  // }

  // toggleEdit = clickedId => {
  //   // this.setState({
  //   //   edit: !this.state.edit
  //   // });
  //   // this.setState({elements:[...this.state.elements, <EditButton key={i} />]});
  //   this.setState({ edit: !this.state.edit, clicked: clickedId });
  //   console.log(clickedId);
  // };

  render() {
    const { projects } = this.props.projects;

    return (
      <View style={styles.container}>
        {projects &&
          Object.keys(projects).map((item, i) => {
            return (
              <View key={i} style={styles.containerInner}>
                {/* {console.log("----------------i", i)} */}

                {/* {this.state.edit && (
                  <View style={styles.editContainer}>
                    <TouchableOpacity>
                      <Text>Edit</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <Text>Delete</Text>
                    </TouchableOpacity>
                  </View>
                )} */}
                {/* {this.state.edit && <EditButton key={i} />} */}
                {/* {this.state.elements} */}

                {/* {this.state.edit && this.state.clicked == {i} ? (
                  <EditButton key={i} />
                ) : null} */}

                <View style={styles.containerHeader}>
                  <Text style={styles.headerText}>
                    {/* {projects[item].productName} */}
                    {item}
                  </Text>
                  <EditButton key={i} style={styles.edit} current={item} />
                </View>

                <View style={styles.containerMain}>
                  <Progress />
                </View>

                <View style={styles.containerFooter}>
                  <Text>{0} proceses completed </Text>
                  <Text>{0} spend </Text>
                </View>
              </View>
            );
          }, this)}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // height: Layout.window.height * 0.25,
    // borderRadius: 15,
    justifyContent: "center"
    // alignItems: "center",
    // backgroundColor: Colors.w,
    // padding: Layout.window.width * 0.075
    // position: "relative",
    // zIndex: 1
  },
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
  // edit: {
  //   position: 'relative',
  // }
  // editContainer: {
  //   backgroundColor: "gray",
  //   position: "absolute",
  //   width: "50%",
  //   // height: '50%',
  //   right: 0,
  //   bottom: 0,
  //   top: 0,
  //   // left: 0,
  //   zIndex: 1,
  //   borderRadius: 20,
  //   padding: Layout.window.width * 0.05
  // }
});

const mapStateToProps = ({ projects }) => ({ projects });

// export default withFirebase(CurrentProject);
export default compose(
  withFirebase,
  connect(mapStateToProps, { getProjects }, null, { pure: false })
)(CurrentProject);

{
  /* <Text>
                {Object.keys(projects[item].components).reduce((sum, inner) => {
                  sum = sum + inner.processTime;
                  console.log("-------", projects[item].components[inner].processTime)
                  return (
                    <View key={i}>
                      <Text>{inner}</Text>
                      <Text>{sum} </Text>
                    </View>
                  );
                })}
              </Text> */
}

{
  /* {Object.keys(projects[item].components).map((inner, i) => {
                console.log("------", projects[item].components[inner])
                let sum = 0;
                sum += projects[item].components[inner].processTime
                let cluster = projects[item].components[inner];
                return  (
                  // <View key={i} style={styles.containerInner}>
                    <Text>{ sum }</Text>
                    
                  // </View>
                ); */
}

{
  /* {" "}
{Object.keys(projects[item].components).map((key, i) => (
  <Text key={i}>
    <Text>
      {" "}
      {projects[item].components[key].componentName}{" "}
    </Text>
    <Text>
      {" "}
      {projects[item].components[key].processName}{" "}
    </Text>
    <Text>
      {" "}
      {typeof projects[item].components[key].processTime}{" "}
    </Text>
  </Text>
))}{" "} */
}

{
  /* {
                projects && Object.entries(projects).map(([key, val]) => 
                    <Text key={key}>{key}: {val}</Text>
                )
            } */
}
