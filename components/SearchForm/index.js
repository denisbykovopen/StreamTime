import React, { Component } from "react";
import SearchFormView from "./SearchFormRF";
import { View } from "react-native";
import styles from "./styles";
import { withFirebase } from '../../Firebase/context';
import { withNavigation } from 'react-navigation';
// import { withPropsOnChange } from 'recompose';

class SearchForm extends Component {

  componentDidUpdate () {
    this.props.input.onChange(this.props.value);
  }

  handleChange = ({ name }) => {
    // this.props.firebase
    //   .doPasswordReset(String(email))
    //   .then(() => {
    //     this.props.navigation.navigate("SignIn");
    //     console.log("--pass forget");
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
    // const newText = event.name;
    
    // if (newText && newText.length > 1) {
    //   console.log("--event",event.name);
    //   // this.handleSubmit();
    // }
    console.log("--name", name);
  };

  // handleChange = (event) => {
  //   const newText = event.name;
    
  //   if (newText && newText.length > 1) {
  //     console.log("--event",event.name);
  //     // this.handleSubmit();
  //   }
  // }

  render() {
    return (
      <View contentContainerStyle={styles.formContainer}>
        <SearchFormView 
            // onSubmit={this.handleSubmit} 
            onChange={this.handleChange}
        />
      </View>
    );
  }
}

export default withNavigation(withFirebase(SearchForm));
