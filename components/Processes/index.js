import React from "react";
import { TouchableOpacity, Text, View, StyleSheet } from "react-native";
// import MultipleSelect from "../MultipleSelect";
import styles from "./styles";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../constants/Colors";
import SearchProc from "./SearchProc";
import AddProc from "./AddProc";

class Processes extends React.Component {
  state = {
    isOpen: false
  };
  toggleFlatList = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    return (
      <View>
        <Text style={styles.text}>Processes</Text>
        <TouchableOpacity
          style={styles.openProcButton}
          onPress={this.toggleFlatList}
        >
          <Text style={styles.thinText}>Select all possible processes</Text>
          <Ionicons
            name={this.state.isOpen ? "ios-arrow-up" : "ios-arrow-down"}
            color={Colors.black}
          />
        </TouchableOpacity>
        {this.state.isOpen && <SearchProc />}
        {/* <View style={styles.line}></View> */}

        <View>
          <AddProc />
        </View>
      </View>
    );
  }
}

export default Processes;
