import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity
} from "react-native";
// import Constants from "expo-constants";
// import { Ionicons } from "@expo/vector-icons";
// import Layout from "../constants/Layout";
import Fonts from "../../constants/Fonts";
import CheckIcon from "../../common/CheckIcon";
import Colors from "../../constants/Colors";
import Layout from "../../constants/Layout";
import { withFirebase } from "../../Firebase/context";

import { compose } from "recompose";
import { connect } from "react-redux";
import { getProcesses } from "../../actions";

// const Data = [
//   {
//     id: 1,
//     first_name: "Sile"
//   },
//   {
//     id: 2,
//     first_name: "Clementia"
//   },
//   {
//     id: 3,
//     first_name: "Brita"
//   },
//   {
//     id: 4,
//     first_name: "Duke"
//   },
//   {
//     id: 5,
//     first_name: "Hedvig"
//   },
//   {
//     id: 6,
//     first_name: "Paulie"
//   },
//   {
//     id: 7,
//     first_name: "Munmro"
//   },
//   {
//     id: 8,
//     first_name: "Dyanna"
//   },
//   {
//     id: 9,
//     first_name: "Shanta"
//   },
//   {
//     id: 10,
//     first_name: "Bambi"
//   }
// ];

// const testItems = [
//   "First",
//   "Second",
//   "Third",
//   "fourth",
//   "fifth",
//   "sixth",
//   "seventh",
//   "eight",
//   "nineth"
// ];

class MultipleSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // selectedItem: null,
      renderData: [],
      // renderData: testItems,
      selectArray: []
      // selected: New Map()
    };
  }
  // componentDidMount() {
  //   console.log(
  //     "---renderData",
  //     this.state.renderData,
  //     "---renderProps",
  //     this.props.processes
  //   );
  // }
  onPressHandler = item => {
    // let renderData=[...this.state.renderData];

    const { renderData } = this.state;

    // console.log(this.state.renderData, renderData);

    // for (let data of renderData) {
    //   if (data.id == id) {
    //     data.selected = data.selected == null ? true : !data.selected;
    //     break;
    //   }
    // }

    // for (let data of renderData) {
    //   if(data = item) {
    //     data.selected = data.selected == null ? true : !data.selected;
    //     break;
    //   }
    // }

    this.setState({ renderData }, () =>
      console.log(
        "----- MultipleSelect handler state.renderData:", 
        this.state.renderData , 
        "----- MultipleSelect handler props.processes:",
        this.props.processes
        )
    );

    // if (!this.state.selectArray.includes(item)) {
    //   this.state.selectArray.push(item.first_name);
    // }

    // if (this.state.selectArray.indexOf(item.first_name) < 0) {
    //   this.state.selectArray.push(item.first_name);
    // } else {
    //   this.state.selectArray.splice(this.state.selectArray.indexOf(item), 1);
    // }

    // console.log("---stateCheck", this.state.selectArray);

    this.props.firebase
        .globalProcesses()
        .orderByKey()
        .equalTo(item)
        .on("value", snapshot => {
          console.log("----- MultipleSelect handler equalTo");
          this.props.getProcesses(snapshot.val());
        });

    if (this.state.selectArray.indexOf(item) < 0) {
      this.state.selectArray.push(item);
      
    } else {
      this.state.selectArray.splice(this.state.selectArray.indexOf(item), 1);
    }

    // !this.state.selectArray.includes(item)
    //   ? this.state.selectArray.push(item)
    //   : this.state.selectArray.splice(this.state.selectArray.indexOf(item), 1);

    console.log(
      "----- MultipleSelect handler state.selectArray:", 
      this.state.selectArray, 
      this.state.selectArray.includes(item));
  };

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          columnWrapperStyle={styles.containerInner}
          //horizontal={true}
          // data={this.state.renderData}
          data={this.props.processes}
          // data={testItems}
          // keyExtractor={item => item.id.toString()}
          keyExtractor={item => item}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={
                // () => this.onPressHandler(item, item.id)
                () => this.onPressHandler(item)
              }
            >
              <View
                // style={
                //   // item.selected == true
                //   this.state.selectArray.indexOf(item) >= 0
                //     ? {
                //         padding: 10,
                //         borderRadius: 5,
                //         backgroundColor: "white"
                //       }
                //     : {
                //         padding: 10,
                //         borderRadius: 5,
                //         backgroundColor: "white"
                //       }
                // }
                style={styles.containerInnerRow}
              >
                {/* <Text>{item.first_name}</Text> */}

                <Text style={styles.text}> {item} </Text>
                {this.state.selectArray.indexOf(item) >= 0 && <CheckIcon />}
                {/* {this.state.selectArray.indexOf(item) >= 0 && (
                   console.log("---check icon", this.state.selectArray, this.state.selectArray.indexOf(item))
                )} */}

                {/* {!this.state.selectArray.includes(it
￼
em) && <CheckIcon style={styles.icon} /> && console.log("---icon")} */}

                {/* <Text>
                {this.state.selectArray.indexOf(item)>=0 ? <CheckIcon style = {styles.icon} /> : ''}
                </Text> */}
                {/* {this.state.selectArray.indexOf(item) > -1 ? <CheckIcon style = {styles.icon} /> : null} */}
                
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: Colors.w,
    borderRadius: 20,
    padding: Layout.window.height * 0.01,
    backgroundColor: Colors.w,
    maxHeight: Layout.window.height * 0.25
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
  icon: {
    flex: 1
  },
  text: {
    fontSize: Fonts.xlarge,
    flex: 1
  }
});

// export default withFirebase(MultipleSelect);

export default compose(
  withFirebase,
  connect(null, { getProcesses })
)(MultipleSelect);
