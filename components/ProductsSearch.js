import React, { Component } from "react";
import SearchFormView from "../components/SearchForm/SearchFormRF";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { withNavigation } from "react-navigation";
import { withFirebase } from '../Firebase/context';
import Layout from "../constants/Layout";
import Fonts from "../constants/Fonts";
import Colors from "../constants/Colors";


class ProductsSearch extends Component {
  state = {
    searchProduct: null
  };
  handleProductsSearch = ({ name }) => {

    const userId = this.props.firebase.auth.currentUser.uid;

    name.length > 2 &&
      this.props.firebase
        .userProjects(userId)
        // .orderByChild('productName')
        .orderByKey()
        // .equalTo(String(name))
        // .orderByValue()
        .startAt(name)
        .endAt(`${name}/uf8ff`)
        .once("value", snapshot => {
          console.log(
              "----- productsSearch snap:", 
              snapshot.val(), userId
          );
          this.setState(
            () => ({
              searchProduct: snapshot.val()
            }),
            () =>
              console.log(
                "----- productsSearch setState:",
                this.state.searchProduct
              )
          );
        })
  };

  render() {
    const { searchProduct } = this.state;
    return (
      <View contentContainerStyle={styles.formContainer}>
        <SearchFormView
          onChange={this.handleProductsSearch}
          form={"productsSearch"}
        />

        {searchProduct !== null &&
          Object.keys(searchProduct).map((item, i) => {
            return (
              <View key={i} style={styles.productsContainer}>
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate("ProductTrack", {
                      itemId: item,
                      itemObject: searchProduct[item]
                    })
                  }
                >
                  <Text style={styles.text}> {item} </Text>
                </TouchableOpacity>
                <View style={styles.productsColumnContainer}>
                  <Text style={styles.text}>
                    {" "}
                    Q: {searchProduct[item].productQuantity}{" "}
                  </Text>
                  <TouchableOpacity>
                    <Text style={styles.textBlue}> Material </Text>
                  </TouchableOpacity>
                </View>
              </View>
            );
          })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.bgColor,
    padding: Layout.window.width * 0.075
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
    justifyContent: "space-between"
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

export default withNavigation(withFirebase(ProductsSearch));
