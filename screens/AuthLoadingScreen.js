import React from "react";
import { ActivityIndicator, StatusBar, StyleSheet, View } from "react-native";
import { withAuthentication } from "../Session/index";
import { connect } from "react-redux";
import { compose } from "redux";

class AuthLoadingScreen extends React.Component {
  static navigationOptions = {
    header: null
  };
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.onLogin();
  }
  onLogin = () => {
    this.props.navigation.navigate(
      this.props.authUser !== null ? "Main" : "Auth"
    );
  };
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

export default compose(
  // withFirebase,
  withAuthentication,
  connect(mapStateToProps, null, null, { pure: false })
)(AuthLoadingScreen);
