import React, { Component } from "react";
import SearchFormView from "./SearchFormRF";
import { View } from "react-native";
import styles from "./styles";
import { withFirebase } from "../../Firebase/context";
import { withNavigation } from "react-navigation";
import CurrentProjectButton from "../CurrentProjectButton";
// import { withPropsOnChange } from 'recompose';

class SearchForm extends Component {
  state = {
    searchProject: null
  }
  handleChange = ({ name }) => {
    // const userId = this.props.firebase.auth.currentUser.uid;

    // name.length > 2 &&
    //   this.props.firebase
    //     .userProjects(userId)
    //     // .orderByChild('productName')
    //     .orderByKey()
    //     // .equalTo(String(name))
    //     // .orderByValue()
    //     .startAt(name)
    //     .endAt(`${name}/uf8ff`)
    //     .on("value", snapshot => {
    //       console.log("--search", snapshot.val());
    //       // this.props.getProjects(snapshot.val());
          
    //     });

    // console.log("--name", name, name.length);

    this.setState(() => ({
      searchProject: name
    }))
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
          form={"projectsSearch"}
        />
        {this.state.searchProject && <CurrentProjectButton current = {this.state.searchProject} />}
      </View>
    );
  }
}

export default withNavigation(withFirebase(SearchForm));
