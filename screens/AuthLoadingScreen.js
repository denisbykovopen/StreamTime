import React from "react";
import { ActivityIndicator, StatusBar, StyleSheet, View } from "react-native";
import { withAuthentication } from "../Session/index";
import { connect } from "react-redux";
import { compose } from "redux";
import { withNavigation } from "react-navigation";
import * as SecureStore from "expo-secure-store";

class AuthLoadingScreen extends React.Component {
  static navigationOptions = {
    header: null
  };
  constructor(props) {
    super(props);

    SecureStore.getItemAsync("authUser")
      .then(authUser => {
        console.log("--secure auth", typeof authUser, authUser);
        this.props.onSetAuthUser(authUser);
        this.props.navigation.navigate(
          this.props.authUser != null ? "Main" : "Auth"
        );
      })
      .catch(err => {
        console.log(error(err.message || "ERROR"));
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator />

        <StatusBar barStyle="default" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

const mapStateToProps = state => ({
  authUser: state.sessionState.authUser
});

const mapDispatchToProps = dispatch => ({
  onSetAuthUser: authUser => dispatch({ type: "AUTH_USER_SET", authUser })
});

export default compose(
  withNavigation,
  // withAuthentication,
  connect(mapStateToProps, mapDispatchToProps, null, { pure: false })
)(AuthLoadingScreen);
