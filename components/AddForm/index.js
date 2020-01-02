import React, { Component } from "react";
import AddFormView from "./AddFormRF";
import { View } from "react-native";
import styles from "./styles";
import { withFirebase } from '../../Firebase/context';
import { withNavigation } from 'react-navigation';
import { connect } from "react-redux";
import { compose } from "redux";

class AddForm extends Component {
  handleSubmit = ({ productName, productQuantity }) => {

    const {componentData} = this.props.component;
    const userId = this.props.firebase.auth.currentUser.uid;

    this.props.firebase.userProject(userId, productName).set({
      productName,
      productQuantity
    })

    componentData.map(item => {
      this.props.firebase.userProductComponent(
        userId, 
        productName, 
        item).set({
          componentName: item
      })
    })

    this.props.navigation.navigate('Current');
  };

  render() {
    return (
      <View contentContainerStyle={styles.formContainer}>
        <AddFormView onSubmit={this.handleSubmit} />
      </View>
    );
  }
}

const mapStateToProps = ({component}) => ({component});

export default compose(
  withFirebase,
  withNavigation,
  connect(mapStateToProps, null)
)(AddForm);