import React, { Component } from "react";
import AddFormView from "./AddFormRF";
import { View } from "react-native";
import styles from "./styles";
import { withFirebase } from "../../Firebase/context";
import { withNavigation } from "react-navigation";
import { connect } from "react-redux";
import { compose } from "redux";

class AddForm extends Component {
  handleSubmit = ({ productName, productQuantity }) => {
    const { componentData } = this.props.component;
    const userId = this.props.firebase.auth.currentUser.uid;

      this.props.firebase.userProject(userId, productName).set({
      productName,
      productQuantity
    })

    componentData.forEach(item => {
      for (let key in item) {
        let componentName = Object.keys(item).toString();
        let processes = item[key].processes;
        console.log("---------------------------", componentName, processes);
        this.props.firebase
          .userProductComponent(userId, productName, componentName)
          .set({
            componentName,
            processes
          });
      }
    });

    console.log(
      "---test project: user:",
      userId,
      "product:",
      productName,
      productQuantity,
      "component:", 
    );

    // componentData.map(item => Object.keys(item).forEach(element => {
    //   // const object = item[element];
    //   // const json = JSON.parse(JSON.stringify(object))
    //   // return json;
    //   return element
    // }))

  

    // componentData.forEach(item => {
    //   Object.keys(item).forEach(element => {
    //     let processes = item[element].processes;
    //     let json = JSON.parse(JSON.stringify(processes));
    //     this.props.firebase.userProductComponent(
    //       userId,
    //       productName,
    //       item).set({
    //         componentName: item,
    //         processes: json,
    //     })
    //   })

    // })

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

const mapStateToProps = ({ component }) => ({ component });

export default compose(
  withFirebase,
  withNavigation,
  connect(mapStateToProps, null)
)(AddForm);
