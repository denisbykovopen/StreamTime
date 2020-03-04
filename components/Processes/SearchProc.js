import React from "react";
import { TouchableOpacity, Text, View, StyleSheet } from "react-native";
import MultipleSelect from "./MultipleSelect";
import SearchForm from "../SearchForm";
import styles from "./styles";
import { withFirebase } from "../../Firebase/context";

import { compose } from "recompose";
import { connect } from "react-redux";
import SearchFormView from "../SearchForm/SearchFormRF";
// import SearchFormView from '../SearchForm/SearchFormView';

class SearchProc extends React.Component {
  state = {
    global: null,
    filtered: []
  };
  componentDidMount() {
    // const userId = this.props.firebase.auth.currentUser.uid;
    this.props.firebase.globalProcesses().on("value", snapshot => {
      // console.log("---globalProc control", snapshot.val());
      // this.setState({global:snapshot.val()},
      // ()=>  console.log("---state test", Object.keys(this.state.global).map(item => item)))
      const fireArray = Object.keys(snapshot.val()).map(item => item);
      this.setState({ global: fireArray }
      );
      this.setState({ filtered: fireArray });
      //   this.props.getGlobalProcesses(snapshot.val());
    });
  }
  handleProcChange = ({ name }) => {
    const searchField = name;
    // const filtered = [];
    const { filtered } = this.state;
    // const searchArray = Object.keys(this.state.global).map(item => item);
    const searchArray = this.state.global;
    // console.log("---searchProc check", searchField, searchArray, filtered);

    // const searchArray = this.props.globalProcesses.processes.map

    // console.log("---searchProc check", searchField, searchArray)

    for (let i = 0; i < searchArray.length; i++) {
      if (searchArray[i].toLowerCase().includes(searchField.toLowerCase())) {
        // filtered.push(searchArray[i])
        // this.setState({filtered: [...filtered, ...searchArray[i]]})
        // this.setState(prevState => ({
        //   filtered: [].push(searchArray[i])
        // }));
        // filtered[searchArray[i]]
        let items = [];
        items.push(searchArray[i]);
        this.setState({ filtered: items });
        // console.log("---search result", items);
      }
    }
    // console.log("---filter proc", filtered);
  };
  render() {
    const { filtered, global } = this.state;
    // const searchArray = this.state.global != null && Object.keys(this.state.global).map(item => item);
    return (
      <View style={styles.searchProcContainer}>
        <SearchFormView 
          onChange={this.handleProcChange} 
          form={"processesSearch"}
        />

        <MultipleSelect
          // fireProcesses={}
          // formProcesses={this.formProcesses}
          processes={filtered}
        />
      </View>
    );
  }
}

export default withFirebase(SearchProc);
// export default compose(withFirebase, connect(null, null))(SearchProc);
