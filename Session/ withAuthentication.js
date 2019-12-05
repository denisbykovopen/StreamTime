import React from "react";
import { connect, dispatch } from "react-redux";
import { compose } from "recompose";

import { withFirebase } from "../Firebase";
import * as SecureStore from "expo-secure-store";

const withAuthentication = Component => {
  class WithAuthentication extends React.Component {
    constructor(props) {
      super(props);
      
      SecureStore.getItemAsync("authUser")
        .then(authUser => {
          this.props.onSetAuthUser(JSON.parse(authUser));
        })
        .catch(err => {
          console.log(error(err.message || "ERROR"));
        });
    }

    componentDidMount() {
      this.listener = this.props.firebase.onAuthUserListener(
        authUser => {
          this.props.onSetAuthUser(authUser);
          SecureStore.setItemAsync("authUser", JSON.stringify(authUser))
            .then(token => {
              console.log("--auth0", typeof token, token);
            })
            .catch(err => {
              console.log(error(err.message || "ERROR"));
            });
        },
        () => {
          SecureStore.deleteItemAsync("authUser")
            .then(() => {
              this.props.onSetAuthUser(null);
              console.log("--remove authUser from store");
            })
            .catch(err => {
              console.log(error(err.message || "ERROR"));
            });
        }
      );
    }

    componentWillUnmount() {
      this.listener();
    }

    render() {
      return <Component {...this.props} />;
    }
  }

  const mapDispatchToProps = dispatch => ({
    onSetAuthUser: authUser => dispatch({ type: "AUTH_USER_SET", authUser })
  });

  return compose(
    withFirebase,
    connect(null, mapDispatchToProps)
  )(WithAuthentication);
};

export default withAuthentication;
