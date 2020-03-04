import React, { Component } from "react";
import EditFormView from "./EditFormRF";
import { View } from "react-native";
import styles from "./styles";
import { withFirebase } from "../../Firebase/context";
import { withNavigation } from "react-navigation";
import { connect } from "react-redux";
import { compose } from "redux";

class EditForm extends Component {
  componentDidMount() {
    console.log(
      "-----editform",
      this.props.itemId,
      this.props.projects.projects[this.props.itemId].productName
    );
  }

  handleSubmit = ({ productName, productQuantity }) => {
    const { componentData } = this.props.component;
    const userId = this.props.firebase.auth.currentUser.uid;

    this.props.firebase.userProject(userId, productName).update({
      productName,
      productQuantity
    });

    // componentData.map(item => {
    //   this.props.firebase.userProductComponent(
    //     userId,
    //     productName,
    //     item).update({
    //       componentName: item
    //   })
    // })

    this.props.navigation.navigate("Current");
  };

  render() {
    const { itemId } = this.props;
    return (
      <View contentContainerStyle={styles.formContainer}>
        <EditFormView onSubmit={this.handleSubmit} item={itemId} />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  component: state.component,
  projects: state.projects
});

export default compose(
  withFirebase,
  withNavigation,
  connect(mapStateToProps, null)
)(EditForm);
