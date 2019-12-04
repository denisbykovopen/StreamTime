import React from "react";
import {
  ActivityIndicator,
  StatusBar,
  StyleSheet,
  View
} from "react-native";
import { withAuthentication } from '../Session/index';

class AuthLoadingScreen extends React.Component {
  static navigationOptions = {
    header: null
  };
  constructor() {
    super();
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
// export default AuthLoadingScreen;
export default withAuthentication(AuthLoadingScreen);
