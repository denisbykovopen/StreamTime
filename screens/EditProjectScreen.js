import React from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  ScrollView,
<<<<<<< HEAD
  TouchableOpacity,
  Image
  // Constants
=======
  TouchableOpacity
>>>>>>> ef6708b5b32b815daa85f564a5152695991bcfb6
} from "react-native";
import Layout from "../constants/Layout";
import Colors from "../constants/Colors";
import EditButtonIcon from "../common/EditButtonIcon";
import Fonts from "../constants/Fonts";

import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";

<<<<<<< HEAD
import { compose } from "recompose";
import { connect } from "react-redux";

import { withFirebase } from "../Firebase/context";

import Constants from "expo-constants";

import { getImage } from "../actions";

import { withNavigation } from "react-navigation";

import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import EditForm from "../components/EditForm";
=======
import { compose } from 'recompose';
import { connect } from 'react-redux';

import { withFirebase } from '../Firebase/context';
>>>>>>> ef6708b5b32b815daa85f564a5152695991bcfb6

class EditProjectScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    header: null
  });
<<<<<<< HEAD

=======
 
>>>>>>> ef6708b5b32b815daa85f564a5152695991bcfb6
  getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== "granted") {
        alert("Give permission please");
      }
    }
  };

<<<<<<< HEAD
  uriToBlob = uri => {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onload = function() {
        // return the blob
        resolve(xhr.response);
      };

      xhr.onerror = function() {
        // something went wrong
        reject(new Error("uriToBlob failed"));
      };
      // this helps us get a blob
      xhr.responseType = "blob";
      xhr.open("GET", uri, true);

      xhr.send(null);
    });
  };

  componentDidMount() {
    const projectName = this.props.navigation.getParam("itemId");
    console.log("------node found", projectName);
  }

  uploadToFirebase = blob => {
    return new Promise((resolve, reject) => {
      const userId = this.props.firebase.auth.currentUser.uid;
      const projectName = this.props.navigation.getParam("itemId");

      this.props.firebase
        .userImage(userId, projectName)
        .put(blob, {
          contentType: "image/jpeg"
        })
        .then(snapshot => {
          blob.close(); // let's free up the blob
          resolve(snapshot);
          console.log("----blobsnap", snapshot);
        })
        .catch(error => {
          reject(error);
        });
    });
  };

  pickImage = async () => {
    this.getPermissionAsync();

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images
      // allowsEditing: true,
      // aspect: [4, 3],
      // quality: 1.0,
      //   base64: true
    });
    if (!result.cancelled) {
      let uri = result.uri;
      console.log("------image result", result);
      this.props.getImage(uri);

      return this.uriToBlob(uri)
        .then(blob => {
          return this.uploadToFirebase(blob);
        })
        .then(snapshot => {
          console.log("----------File uploaded", snapshot);
        })
        .catch(error => {
          throw error;
        });
    }
  };

  render() {
    const item = this.props.navigation.getParam("itemId");
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
            <Text style={styles.headerText}>Edit</Text>
            <TouchableOpacity
              style={styles.imageContainer}
              onPress={this.pickImage}
            >
              <Image
                source={{
                  uri: this.props.image ? this.props.image.url : "none"
                }}
                style={styles.image}
              />
            </TouchableOpacity>
            <EditForm itemId={item} />
          </View>
        </KeyboardAwareScrollView>
      </ScrollView>
=======
  pickImage = async () => {

    this.getPermissionAsync();

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      // allowsEditing: true,
      // aspect: [4, 3],
      quality: 1.0,
    //   base64: true
    });
    if (!result.cancelled) {
      let uri = result.uri;
      this.props.firebase.userImage(userId, projectName).put(uri)
    };
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>Edit</Text>
      </View>
>>>>>>> ef6708b5b32b815daa85f564a5152695991bcfb6
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
    alignSelf: "center",
    fontSize: Fonts.xxlarge,
    marginTop: Layout.window.height * 0.05,
    marginBottom: Layout.window.height * 0.05
<<<<<<< HEAD
  },
  imageContainer: {
    backgroundColor: Colors.w,
    marginBottom: Layout.window.height * 0.05
  },
  image: {
    resizeMode: "cover",
    width: "100%",
    height: Layout.window.height * 0.35
  }
});

const mapStateToProps = state => ({
  projects: state.projects,
  image: state.image
});

export default compose(
  withFirebase,
  withNavigation,
  connect(mapStateToProps, { getImage }, null, { pure: false })
)(EditProjectScreen);
=======
  }
});

const mapStateToProps = ({ projects }) => ({ projects });

export default compose(
    withFirebase,
    connect(mapStateToProps, null, null, { pure: false })
  )(EditProjectScreen);
>>>>>>> ef6708b5b32b815daa85f564a5152695991bcfb6
