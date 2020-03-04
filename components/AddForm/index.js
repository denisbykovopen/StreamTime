import React, { Component } from "react";
import AddFormView from "./AddFormRF";
import { View } from "react-native";
import styles from "./styles";
<<<<<<< HEAD
import { withFirebase } from "../../Firebase/context";
import { withNavigation } from "react-navigation";
=======
import { withFirebase } from '../../Firebase/context';
import { withNavigation } from 'react-navigation';
>>>>>>> ef6708b5b32b815daa85f564a5152695991bcfb6
import { connect } from "react-redux";
import { compose } from "redux";

class AddForm extends Component {
  handleSubmit = ({ productName, productQuantity }) => {
<<<<<<< HEAD
    const { componentData } = this.props.component;
    const userId = this.props.firebase.auth.currentUser.uid;

      this.props.firebase.userProject(userId, productName).set({
=======

    const {componentData} = this.props.component;
    const userId = this.props.firebase.auth.currentUser.uid;

    this.props.firebase.userProject(userId, productName).set({
>>>>>>> ef6708b5b32b815daa85f564a5152695991bcfb6
      productName,
      productQuantity
    })

<<<<<<< HEAD
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
=======
    componentData.map(item => {
      this.props.firebase.userProductComponent(
        userId, 
        productName, 
        item).set({
          componentName: item
      })
    })
>>>>>>> ef6708b5b32b815daa85f564a5152695991bcfb6

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

<<<<<<< HEAD
const mapStateToProps = ({ component }) => ({ component });
=======
const mapStateToProps = ({component}) => ({component});
>>>>>>> ef6708b5b32b815daa85f564a5152695991bcfb6

export default compose(
  withFirebase,
  withNavigation,
  connect(mapStateToProps, null)
<<<<<<< HEAD
)(AddForm);
=======
)(AddForm);
>>>>>>> ef6708b5b32b815daa85f564a5152695991bcfb6
