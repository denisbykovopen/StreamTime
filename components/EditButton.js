import React from "react";
import { TouchableOpacity, Text, View, StyleSheet } from "react-native";
import Layout from "../constants/Layout";
import EditIcon from "../common/EditIcon";
import EditButtonIcon from "../common/EditButtonIcon";
import DeleteButtonIcon from "../common/DeleteButtonIcon";
import Colors from "../constants/Colors";
<<<<<<< HEAD
import { withNavigation } from "react-navigation";
import { withFirebase } from "../Firebase/context";
=======
import { withNavigation } from 'react-navigation';
import { withFirebase } from '../Firebase/context';
>>>>>>> ef6708b5b32b815daa85f564a5152695991bcfb6

class EditButton extends React.Component {
  state = {
    isOpen: false
  };
  toggleEdit = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

<<<<<<< HEAD
  delete = () => {
    const item = this.props.current;
    console.log("----- EditButton delete: props.current:", this.props.current);
    const userId = this.props.firebase.auth.currentUser.uid;
    this.props.firebase.userProject(userId, item).remove();
  };

  // componentDidMount() {
  //   this.toggleEdit();
  // }

  // componentWillUnmount() {
  //   this.setState({
  //     isOpen: false
  //   })
=======
  // delete = ({item}) => {
  //   const userId = this.props.firebase.auth.currentUser.uid;
  //   this.props.firebase.userProject(userId, item).remove();
>>>>>>> ef6708b5b32b815daa85f564a5152695991bcfb6
  // }

  render() {
    return (
      <View key={this.props.i} style={styles.container}>
<<<<<<< HEAD
        {this.state.isOpen ? (
          <View style={styles.editContainer}>
            <TouchableOpacity
              style={styles.editContainerInner}
              // onPress={this.props.edit}
              onPress={() =>
                this.props.navigation.navigate("Details", {
                  itemId: this.props.current
                })
              }
=======
        {this.state.isOpen && (
          <View style={styles.editContainer}>
            <TouchableOpacity 
              style={styles.editContainerInner}
              // onPress={this.props.edit}
              onPress={()=> this.props.navigation.navigate('Details', {
                itemId: this.props.current
              })}
>>>>>>> ef6708b5b32b815daa85f564a5152695991bcfb6
            >
              <EditButtonIcon />
              <Text style={styles.editText}>Edit</Text>
            </TouchableOpacity>
<<<<<<< HEAD
            <TouchableOpacity
              style={styles.editContainerInner}
              onPress={this.delete}
=======
            <TouchableOpacity 
              style={styles.editContainerInner}
              onPress={this.props.delete}
>>>>>>> ef6708b5b32b815daa85f564a5152695991bcfb6
            >
              <DeleteButtonIcon />
              <Text style={styles.editText}>Delete</Text>
            </TouchableOpacity>
          </View>
<<<<<<< HEAD
        ) : null}
=======
        )}
>>>>>>> ef6708b5b32b815daa85f564a5152695991bcfb6

        <TouchableOpacity style={styles.editButton} onPress={this.toggleEdit}>
          <EditIcon />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
<<<<<<< HEAD
  // container: {

  // },
=======
>>>>>>> ef6708b5b32b815daa85f564a5152695991bcfb6
  editContainerInner: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    height: "50%",
    width: "100%",
    backgroundColor: Colors.bgColor,
    // padding: Layout.window.width * 0.05,
    borderRadius: 20,
    borderWidth: 5,
<<<<<<< HEAD
    borderColor: Colors.w
=======
    borderColor: Colors.w,
>>>>>>> ef6708b5b32b815daa85f564a5152695991bcfb6
  },
  editContainer: {
    backgroundColor: "gray",
    position: "absolute",
    width: Layout.window.width * 0.375,
    height: Layout.window.height * 0.19,
    right: -(Layout.window.width * 0.05),
    bottom: 0,
    top: -(Layout.window.width * 0.08),
    // left: 0,
    zIndex: 2,
    borderRadius: 20,
    // padding: Layout.window.width * 0.05,
<<<<<<< HEAD
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.w
  },
  editText: {
    fontWeight: "300"
=======
    overflow: 'hidden',
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.w,
  },
  editText: {
      fontWeight: '300'
>>>>>>> ef6708b5b32b815daa85f564a5152695991bcfb6
  }
});

export default withNavigation(withFirebase(EditButton));
