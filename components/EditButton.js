import React from "react";
import { TouchableOpacity, Text, View, StyleSheet } from "react-native";
import Layout from "../constants/Layout";
import EditIcon from "../common/EditIcon";
import EditButtonIcon from "../common/EditButtonIcon";
import DeleteButtonIcon from "../common/DeleteButtonIcon";
import Colors from "../constants/Colors";
import { withNavigation } from 'react-navigation';
import { withFirebase } from '../Firebase/context';

class EditButton extends React.Component {
  state = {
    isOpen: false
  };
  toggleEdit = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  // delete = ({item}) => {
  //   const userId = this.props.firebase.auth.currentUser.uid;
  //   this.props.firebase.userProject(userId, item).remove();
  // }

  render() {
    return (
      <View key={this.props.i} style={styles.container}>
        {this.state.isOpen && (
          <View style={styles.editContainer}>
            <TouchableOpacity 
              style={styles.editContainerInner}
              // onPress={this.props.edit}
              onPress={()=> this.props.navigation.navigate('Details', {
                itemId: this.props.current
              })}
            >
              <EditButtonIcon />
              <Text style={styles.editText}>Edit</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.editContainerInner}
              onPress={this.props.delete}
            >
              <DeleteButtonIcon />
              <Text style={styles.editText}>Delete</Text>
            </TouchableOpacity>
          </View>
        )}

        <TouchableOpacity style={styles.editButton} onPress={this.toggleEdit}>
          <EditIcon />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
    borderColor: Colors.w,
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
    overflow: 'hidden',
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.w,
  },
  editText: {
      fontWeight: '300'
  }
});

export default withNavigation(withFirebase(EditButton));
