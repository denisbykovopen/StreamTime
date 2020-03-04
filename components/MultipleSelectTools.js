import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity
} from "react-native";

import Fonts from "../constants/Fonts";
import CheckIcon from "../common/CheckIcon";
import Colors from "../constants/Colors";
import Layout from "../constants/Layout";
import { withFirebase } from "../Firebase/context";
import { compose } from "recompose";
import { connect } from "react-redux";
import AddCompIcon from "../common/AddCompIcon";
import { Ionicons } from "@expo/vector-icons";
import { withNavigation } from "react-navigation";

class MultipleSelectTools extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectTools: [],
      toggleTool: false
    };
  }

  toolHandler = item => {
    const {processes} = this.props;
    const {proc} = this.props;

    if (this.state.selectTools.indexOf(item) < 0) {
      // this.state.selectTools.push(item);
      // this.setState({
      //   selectTools: [...this.state.selectTools, item]
      // })

      this.setState(
        prevState => ({
          selectTools: [item, ...prevState.selectTools]
        }),
        () => console.log("---tools state push", this.state.selectTools)
      );

      this.props.firebase
        .globalTools()
        .orderByKey()
        .equalTo(item)
        .on("value", snapshot => {
          console.log("---equality tool", snapshot.val(), proc);
          //   this.props.getTools(snapshot.val());
         processes[proc].tools = { ...processes[proc].tools, ...snapshot.val() };
         console.log("---add tools to proc", processes);
        });
    } else {
      // this.state.selectTools.splice(this.state.selectTools.indexOf(item), 1);
      this.setState(
        ({ selectTools }) => {
          const splice = [...selectTools];
          splice.splice(item, 1);
          return { selectTools: splice };
         },
        () => console.log("---tools state splice", this.state.selectTools)
      );
      delete processes[proc].tools[item]; 
      console.log("---delete", processes)
    }
    // console.log(
    //   "---tools multiple state check",
    //   this.state.selectTools,
    //   this.state.selectTools.includes(item)
    // );
  };

  toggleTool = () => {
    this.setState({
      toggleTool: !this.state.toggleTool
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style = {styles.headerContainer}>
        <Text style={styles.textProc}> {this.props.proc} </Text>
        <TouchableOpacity
          style={styles.openFlatListButton}
          onPress={this.toggleTool}
        >
          <Text style={styles.thinText}>Select the tool</Text>
          <Ionicons
            name={this.state.toggleTool ? "ios-arrow-up" : "ios-arrow-down"}
            color={Colors.black}
          />
        </TouchableOpacity>
        </View>
         

        {this.state.toggleTool && (
          <View style={styles.mainContainer}>
            <FlatList
              columnWrapperStyle={styles.containerInner}
              data={this.props.tools}
              keyExtractor={item => item}
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => this.toolHandler(item)}>
                  <View style={styles.containerInnerRow}>
                    <Text style={styles.text}> {item} </Text>
                    {this.state.selectTools.indexOf(item) >= 0 && <CheckIcon />}
                  </View>
                </TouchableOpacity>
              )}
            />
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("AddTool", {
                itemId: this.props.proc
              })}
              style={styles.addToolButton}
            >
              <AddCompIcon />
              <Text style={styles.addToolText}>Add a new tool</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // position: 'relative',
    // padding: Layout.window.width * 0.075,
  },
  containerInnerRow: {
    height: Layout.window.height * 0.085,
    // paddingTop: Layout.window.height * 0.025,
    padding: Layout.window.height * 0.025,
    // fontSize: Fonts.large,
    // marginTop: Layout.window.width * 0.025,
    // marginBottom: Layout.window.width * 0.05,
    backgroundColor: "white",
    alignItems: "center",
    // fontSize: Fonts.large,
    flexDirection: "row",
    // justifyContent: "space-evenly"
    // justifyContent:'center'
    flex: 1
    // padding: Layout.window.width * 0.075,
    // borderWidth: 1,
    // borderColor: Colors.w,
    // borderRadius: 20,
  },
  // icon: {
  //   flex: 1
  // },
  text: {
    fontSize: Fonts.xlarge,
    // flex: 1
  },
  thinText: {
    fontSize: Fonts.xlarge,
    fontWeight: '300'
  },
  mainContainer: {
    marginBottom: Layout.window.height * 0.1
  },
  addToolButton: {
    flexDirection: 'row',
    alignItems: 'center',
    // height: Layout.window.height * 0.15,
  },
  addToolText: {
    fontSize: Fonts.xlarge,
    marginLeft: Layout.window.width * 0.05
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // alignSelf: 'flex-end',
    marginBottom: Layout.window.width * 0.05,
    // position: 'relative',
    // zIndex: 1
    // justifyContent: 'space-between',
    // width: '100%'
    // position: 'relative',
    // zIndex: 2
    // maxWidth: Layout.window.width
    // flex: 1
  },
  openFlatListButton: {
    borderWidth: 1,
    borderColor: Colors.w,
    borderRadius: 20,
    padding: Layout.window.height * 0.015,
    backgroundColor: Colors.w,
    flexDirection: 'row',
    alignItems: 'center',
    // position: 'relative',
    // flexGrow: 1,
    height: Layout.window.height * 0.085,
    // marginLeft: 50
    //  alignSelf: 'flex-end',
    justifyContent: 'space-evenly',
    width: Layout.window.width / 2 - Layout.window.width * 0.075
  },
  textProc: {
    // flexGrow: 1,
    fontSize: Fonts.xlarge,
    width: Layout.window.width / 2 - Layout.window.width * 0.075,
    // alignSelf: 'baseline'
  },
  mainContainer: {
    borderWidth: 1,
    borderColor: Colors.w,
    borderRadius: 20,
    padding: Layout.window.height * 0.01,
    backgroundColor: Colors.w,
    maxHeight: Layout.window.height * 0.35,
    // width: Layout.window.width * 0.85,
    marginBottom: Layout.window.width * 0.05,
    // position: 'absolute',
    // zIndex: 3,
    // top: Layout.window.height * 0.075,
    // right: 0,
    // overflow: 'hidden'
    // left: 0,
    // bottom: 0
  },

});

mapStateToProps = (state) => {
  return {
    processes: state.processes.processes
  }
}

// export default withFirebase(MultipleSelect);

export default compose(
  withFirebase,
  withNavigation,
  connect(mapStateToProps, null)
)(MultipleSelectTools);
