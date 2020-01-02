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
import EditButtonIcon from "../common/EditButtonIcon";
import Fonts from "../constants/Fonts";

import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";

import { compose } from 'recompose';
import { connect } from 'react-redux';

import { withFirebase } from '../Firebase/context';

class EditProjectScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    header: null
  });
 
  getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== "granted") {
        alert("Give permission please");
      }
    }
  };

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
  }
});

const mapStateToProps = ({ projects }) => ({ projects });

export default compose(
    withFirebase,
    connect(mapStateToProps, null, null, { pure: false })
  )(EditProjectScreen);