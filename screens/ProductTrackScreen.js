import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import Layout from "../constants/Layout";
import Colors from "../constants/Colors";
import { withNavigation } from 'react-navigation'
import Fonts from "../constants/Fonts";
import { connect } from 'react-redux';
import { compose } from 'recompose';

function msToTime(s) {
  var ms = s % 1000;
  s = (s - ms) / 1000;
  var secs = s % 60;
  s = (s - secs) / 60;
  var mins = s % 60;
  var hrs = (s - mins) / 60;

  return hrs;
}

class ProductTrackScreen extends React.Component {
    
  render() {
    const itemObject = this.props.navigation.getParam('itemObject');
    const item = this.props.navigation.getParam('itemId');
    const { projects } = this.props.projects;
   
    return (
      <ScrollView
        contentContainerStyle={{
          // flexGrow: 1,
          // flex: 1
        }}
        showsVerticalScrollIndicator={false}
      >
      <View style={styles.container}>
      <View style={styles.containerInner}>
        <Text style={styles.headerCenterText}>Product Track</Text>
        <View style={styles.headerContainer}>
          <View style={styles.headerContainerRow}>
            <Text style={styles.headerThinText}>Product Name:</Text>
            <Text style={styles.headerThinBlueText}> {item} </Text>
          </View>
          <View style={styles.headerContainerRow}>
            <Text style={styles.headerThinText}>Quantity:</Text>
            <Text style={styles.headerThinText}>
              {" "}
              {projects[item].productQuantity}{" "}
            </Text>
          </View>
        </View>

        {itemObject &&
          Object.keys(itemObject).map(atom => {
            console.log("---track atom:", atom, ":::", itemObject[atom]);

            if (atom == "components") {
              return Object.keys(itemObject[atom]).map(element => {
                return Object.keys(itemObject[atom][element].processes).map(
                  (molecule, i) => {
                    console.log(
                      "---track molecule:",
                      molecule, i,
                      ":::",
                      itemObject[atom][element].processes[molecule].processName,
                      itemObject[atom][element].processes[molecule].processTime,
                      itemObject[atom][element].processes[molecule].completed,
                      "---track img:",
                      typeof this.props.userData.photoURL
                    );
                    return (
                      <View style={styles.card} key={i}>
                        <View style={styles.cardHeader}>
                          <Text style={styles.blueText}>Process: </Text>
                          <Text style={styles.text}> {molecule} </Text>
                        </View>
                        <View style={styles.cardMain}>
                          <View style={styles.cardMainLeft}>
                            <Image
                            source={{
                            uri: this.props.userData && this.props.userData.photoURL
                            }}
                            style={styles.image}
                            />
                            <Text style={styles.text}> {this.props.userData && this.props.userData.displayName} </Text>
                          </View>
                          <View style={styles.cardMainRight}>
                            <Text style={styles.greenText}> {msToTime(itemObject[atom][element].processes[molecule].processTime)} hours </Text>
                          </View>
                        </View>
                      </View>
                    );
                  }
                );
              });
            }
          })}
        </View>
      </View>
      </ScrollView>
    );
  }
  // componentDidMount() {
  //   console.log("---track props check", this.props.navigation.getParam('itemObject'));
  //   const itemObject = this.props.navigation.getParam('itemObject');
  //   const itemId = this.props.navigation.getParam('itemId');
  // }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.bgColor,
    padding: Layout.window.width * 0.075,
  
  },
  containerInner: {
    marginBottom: Layout.window.height * 0.125
  },
  text: {
    fontSize: Fonts.xlarge
  },
  blueText: {
    fontSize: Fonts.xlarge,
    color: Colors.buttonColor,
  },
  greenText: {
    fontSize: Fonts.xlarge,
    color: Colors.stepLineColor,
  },
  headerCenterText: {
    alignSelf: "center",
    fontSize: Fonts.xxlarge,
    marginTop: Layout.window.height * 0.05,
    marginBottom: Layout.window.height * 0.05
  },
  headerText: {
    fontSize: Fonts.xxlarge,
  },
  headerThinText: {
    fontSize: Fonts.xxlarge,
    fontWeight: '300'
  },
  headerThinBlueText: {
    fontSize: Fonts.xxlarge,
    fontWeight: '300',
    color: Colors.buttonColor,
  },
  headerContainerRow: {
    flexDirection: 'row',
    marginTop: Layout.window.height * 0.025,
    marginBottom: Layout.window.height * 0.025
  },
  image: {
    resizeMode: "cover",
    width: Layout.window.height * 0.1,
    height: Layout.window.height * 0.1,
    borderRadius: Layout.window.height * 0.15 / 2,
    marginRight: Layout.window.height * 0.015
  },
  card: {
    borderRadius: 20,
    backgroundColor: Colors.w,
    marginTop: Layout.window.height * 0.025,
    marginBottom: Layout.window.height * 0.025,
    padding: Layout.window.width * 0.035,
    // justifyContent: 'space-between'
  },
  cardHeader: {
    flexDirection: 'row',
    marginBottom: Layout.window.height * 0.025
  },
  cardMainLeft: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  cardMain: {
    flexDirection: 'row'
  },
  cardMainRight: {
    // alignItems: 'center',
    // backgroundColor: 'whitesmoke',
    justifyContent: 'center'
  }
});

// export default withNavigation(ProductTrackScreen);

mapStateToProps = (state) => ({
  projects: state.projects,
  userData: state.userData
})

export default compose(
  withNavigation,
  connect(
    mapStateToProps,
    null
  )
)(ProductTrackScreen);