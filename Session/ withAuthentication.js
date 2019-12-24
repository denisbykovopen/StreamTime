import React from "react";
import { connect, dispatch } from "react-redux";
import { compose } from "recompose";

import { withFirebase } from "../Firebase";
import * as SecureStore from "expo-secure-store";
import { withNavigation } from 'react-navigation';

const withAuthentication = Component => {
  class WithAuthentication extends React.Component {
    constructor(props) {
      super(props);
    }

    componentDidMount() {
      // SecureStore.deleteItemAsync("authUser")
      // .then(() => {
      //   this.props.onSetAuthUser(null);
      //   console.log("--remove authUser from secure");
      // })
      // .catch(err => {
      //   console.log(error(err.message || "ERROR"));
      // });

      SecureStore.getItemAsync("authUser")
      .then(authUser => {
        console.log("--secure auth", typeof authUser, authUser);
        this.props.onSetAuthUser(authUser);
        this.props.navigation.navigate(
          authUser != null ? "Main" : "Auth"
        )
      })
      .catch(err => {
        console.log(error(err.message || "ERROR"));
      });
      
      this.listener = this.props.firebase.onAuthUserListener(
        authUser => {
          this.props.onSetAuthUser(authUser.uid);
          console.log("--fire auth", typeof authUser.uid, authUser.uid);
          SecureStore.setItemAsync("authUser", authUser.uid)
            .then(authUid => {
              console.log("--auth from secure");
            })
            .catch(err => {
              console.log(error(err.message || "ERROR"));
            });
        },
        () => {
          SecureStore.deleteItemAsync("authUser")
            .then(() => {
              this.props.onSetAuthUser(null);
              console.log("--remove authUser from secure");
            })
            .catch(err => {
              console.log(error(err.message || "ERROR"));
            });
        }
      );
      
    }

    componentWillUnmount() {
      this.listener;
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
    withNavigation,
    connect(null, mapDispatchToProps)
  )(WithAuthentication);
};

export default withAuthentication;
