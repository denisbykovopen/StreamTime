import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Layout from "../constants/Layout";
import Colors from "../constants/Colors";
import { compose } from "recompose";
import { withFirebase } from "../Firebase/context";
import { connect } from "react-redux";
import SearchForm from "../components/SearchForm";
import { getProjects } from "../actions";
import { withNavigation } from "react-navigation";
import Fonts from "../constants/Fonts";
import { TouchableOpacity } from "react-native-gesture-handler";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import ProductsSearch from "../components/ProductsSearch";

class ProductsScreen extends React.Component {

  // onTrack = () => {
  //   this.props.navigation.navigate('ProductTrack')
  // }

  onModal = () => {};

  render() {
    const { projects } = this.props;
    return (
      <ScrollView
        contentContainerStyle={{
          flex: 1
        }}
        showsVerticalScrollIndicator={false}
      >
        <KeyboardAwareScrollView
          showsVerticalScrollIndicator={false}
          ref="scrollView"
          keyboardShouldPersistTaps={"always"}
          contentContainerStyle={{
            flexGrow: 1
          }}
        >
          <View style={styles.container}>
            <Text style={styles.headerText}>Products</Text>
            <View style={styles.containerInner}>
              {/* <SearchForm /> */}
              <ProductsSearch />
              <View style={styles.containerMain}>
                {projects &&
                  Object.keys(projects).map((item, i) => {
                    return (
                      <View key={i} style={styles.productsContainer}>
                        <TouchableOpacity
                          onPress={() =>
                            this.props.navigation.navigate("ProductTrack", {
                              itemId: item,
                              itemObject: projects[item]
                            })
                          }
                        >
                          <Text style={styles.text}> {item} </Text>
                        </TouchableOpacity>
                        <View style={styles.productsColumnContainer}>
                          <Text style={styles.text}>
                            {" "}
                            Q: {projects[item].productQuantity}{" "}
                          </Text>
                          <TouchableOpacity>
                            <Text style={styles.textBlue}> Material </Text>
                          </TouchableOpacity>
                        </View>
                      </View>
                    );
                  })}
              </View>
            </View>
          </View>
        </KeyboardAwareScrollView>
      </ScrollView>
    );
  }
  componentDidMount() {
    const userId = this.props.firebase.auth.currentUser.uid;
    this.props.firebase.userProjects(userId).on("value", snapshot => {
      if (this.props.projects === null) {
        this.props.getProjects(snapshot.val());
      }
    });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.bgColor,
    padding: Layout.window.width * 0.075,
    
  },
  productsContainer: {
    borderWidth: 1,
    borderColor: Colors.w,
    borderRadius: 20,
    padding: Layout.window.width * 0.05,
    backgroundColor: Colors.w,
    marginTop: Layout.window.height * 0.025,
    marginBottom: Layout.window.height * 0.025,

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    
  },
  text: {
    fontSize: Fonts.xlarge
  },
  textBlue: {
    fontSize: Fonts.xlarge,
    color: Colors.buttonColor,
    marginTop: Layout.window.height * 0.01
  },
  headerText: {
    alignSelf: "center",
    fontSize: Fonts.xxlarge,
    marginTop: Layout.window.height * 0.05,
    marginBottom: Layout.window.height * 0.05
  },
  containerInner: {
    marginBottom: Layout.window.height * 0.15
  }
});

mapStateToProps = state => ({
  projects: state.projects.projects
});

export default compose(
  withFirebase,
  withNavigation,
  connect(mapStateToProps, { getProjects })
)(ProductsScreen);
