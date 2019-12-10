import React, {Component} from "react";
import { Button, View, Text } from "react-native";
import { withFirebase } from "../Firebase/context";

const ERROR_CODE_ACCOUNT_EXISTS =
  "auth/account-exists-with-different-credential";

const ERROR_MSG_ACCOUNT_EXISTS = `
  An account with an E-Mail address to
  this social account already exists. Try to login from
  this account instead and associate your social accounts on
  your personal account page.
`;

class SignInFacebook extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  onSubmitFacebook = () => {
    this.props.firebase
      .doSignInWithFacebook()
      .then(socialAuthUser => {
        // user in base too
        return this.props.firebase.user(socialAuthUser.user.uid).set({
          username: socialAuthUser.user.displayName,
          email: socialAuthUser.user.email,
          roles: {}
        });
      })
      .then(() => {
        this.setState({ error: null });
        this.props.navigation.navigate("Main")
      })
      .catch(error => {
        if (error.code === ERROR_CODE_ACCOUNT_EXISTS) {
          error.message = ERROR_MSG_ACCOUNT_EXISTS;
        }
        this.setState({ error });
      });
  };

  render() {
    const { error } = this.state;

    return (
      <View style={{margin: 10}}>
        <Button 
            title="Sign In with Facebook"
            onPress={this.onSubmitFacebook}
        />

        {error && <Text>{error.message}</Text>}
      </View>
    );
  }
}

export default withFirebase(SignInFacebook);