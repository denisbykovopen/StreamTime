import React from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Image
} from "react-native";
import Layout from "../constants/Layout";
import Colors from "../constants/Colors";
import EditButtonIcon from "../common/EditButtonIcon";
import Fonts from "../constants/Fonts";
import { withFirebase } from "../Firebase/context";

import { compose } from "recompose";
import { connect } from "react-redux";
import { getImage } from "../actions";
import { withNavigation } from "react-navigation";
import DropDown from "../components/DropDown";

class ProjectDetailsScreen extends React.Component {
  // static navigationOptions = ({ navigation }) => ({
  //     header: null
  // });

  // NavigationOptions in the nav stack
  // inharitance in nav from page to page

  async componentDidMount() {
    const userId = this.props.firebase.auth.currentUser.uid;
    const projectName = this.props.navigation.getParam("itemId");
    console.log(userId, projectName);
    await this.props.firebase
      .userImage(userId, projectName)
      .getDownloadURL()
      .then(url => {
        let imgUrl = JSON.stringify(url);
        this.props.getImage(url);
        console.log("--------bucket check", url);
      })
      .catch(error => {
        this.props.getImage("none");
        console.log("--------image error", error);
      });
  }

  delete = () => {
    const item = this.props.navigation.getParam("itemId");
    const userId = this.props.firebase.auth.currentUser.uid;
    this.props.firebase.userProject(userId, item).remove();
    this.props.navigation.navigate("Current");
  };

  render() {
    const item = this.props.navigation.getParam("itemId");
    const { projects } = this.props.projects;
    console.log("----object", projects[item].productName, typeof item);

    return (
      <ScrollView
        contentContainerStyle={{
          // flex: 1,
          flexGrow: 1
        }}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.container}>
          <View style={styles.containerHeader}>
            <Text style={styles.headerText}>Project Details</Text>
            <TouchableOpacity
              // onPress={() =>
              //   this.props.navigation.navigate("Edit", {
              //     itemId: item
              //   })
              // }
              style={styles.button}
            >
              <EditButtonIcon />
            </TouchableOpacity>
          </View>

          <View style={styles.containerMain}>
            <View style={styles.imageContainer}>
              <Image
                source={{
                  uri: this.props.image ? this.props.image.url : "none"
                }}
                style={styles.image}
              />
            </View>
            <View style={styles.containerMainInner}>
              <Text style={styles.thinText}>Product Name: </Text>
              <Text style={styles.text}>{projects[item].productName}</Text>
            </View>
            <View style={styles.containerMainInner}>
              <Text style={styles.thinText}>Quantity: </Text>
              <Text style={styles.text}>{projects[item].productQuantity}</Text>
            </View>
          </View>

          <View style={styles.line}></View>

          <View style={styles.componentsContainer}>
            <Text style={styles.text}>Components: </Text>
            <View style={styles.componentsContainerInner}>
              {projects[item].components &&
                Object.keys(projects[item].components).map((element, i) => {
                  const processesNames = Object.keys(projects[item].components[element].processes);
                  
                  console.log(
                    "---processesNames:", 
                    processesNames,
                    ":::",
                    projects[item].components[element].processes
                  );

                  return (
                    <DropDown
                      componentName={element}
                      key={i}
                      processName={processesNames}
                    />
                  )
                }
                )}
            </View>
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={this.delete} style={styles.deleteButton}>
              <Text style={styles.buttonText}>Delete Project</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // flexGrow: 1,
    backgroundColor: Colors.bgColor,
    padding: Layout.window.width * 0.075
    // minHeight: '100%',
    // marginBottom: Layout.window.width * 13,
  },
  containerHeader: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  headerText: {
    // alignSelf: 'center',
    fontSize: Fonts.xxlarge,
    marginTop: Layout.window.height * 0.05,
    marginBottom: Layout.window.height * 0.05,
    marginLeft: Layout.window.height * 0.125
  },
  thinText: {
    fontSize: Fonts.xlarge,
    fontWeight: "300"
  },
  text: {
    fontSize: Fonts.xlarge
  },
  button: {
    alignSelf: "center"
  },
  imageContainer: {
    backgroundColor: Colors.w
  },
  image: {
    resizeMode: "cover",
    width: "100%",
    height: Layout.window.height * 0.35
  },
  containerMainInner: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: Layout.window.width * 0.025,
    marginBottom: Layout.window.width * 0.025
  },
  componentsContainer: {
    marginBottom: Layout.window.width * 0.05,
    marginTop: Layout.window.width * 0.025
  },
  componentsContainerInner: {
    marginTop: Layout.window.width * 0.025
  },
  deleteButton: {
    backgroundColor: Colors.buttonColor,
    borderRadius: Math.round(Layout.window.width + Layout.window.height) / 2,
    padding: Layout.window.width * 0.025,
    height: Layout.window.width * 0.15,
    // width: Layout.window.width * 0.5,
    marginBottom: Layout.window.width * 0.05,
    alignItems: "center",
    justifyContent: "center"
    // marginBottom: Layout.window.height * 13,
  },
  buttonText: {
    alignSelf: "center",
    color: Colors.buttonTextColor,
    fontSize: Fonts.xlarge,
    fontWeight: "bold"
  },
  buttonContainer: {
    marginBottom: Layout.window.height * 0.125
  }
});

const mapStateToProps = state => ({
  projects: state.projects,
  image: state.image
});

export default compose(
  withFirebase,
  withNavigation,
  connect(mapStateToProps, { getImage })
)(ProjectDetailsScreen);
