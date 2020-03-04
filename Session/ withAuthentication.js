import React from "react";
import { connect, dispatch } from "react-redux";
import { compose } from "recompose";

import { withFirebase } from "../Firebase";
import * as SecureStore from "expo-secure-store";
import { withNavigation } from 'react-navigation';
import { getProjects, getUserData } from '../actions';

const withAuthentication = Component => {
  class WithAuthentication extends React.Component {
    constructor(props) {
      super(props);
    }

    componentDidMount() {

      SecureStore.getItemAsync("authUser")
      .then(authUser => {
        console.log(
          " ***** withAuth: secureStore.get:", 
          authUser
        );
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
          
          this.props.getProjects(authUser);
          this.props.onSetAuthUser(authUser.uid);

          console.log(
            " ***** withAuth: this.listener response(from fire):", 
            authUser.uid,
            // authUser.providerData
          );

          if (authUser.providerData) {
            authUser.providerData.map(item => {

              // console.log(
              //   "-----fire auth providerData.map:" ,
              //   item.displayName,
              //   item.photoURL
              // );

              return this.props.getUserData( 
                item.displayName,
                item.photoURL
                );
            })
          }
          
          
    
          SecureStore.setItemAsync("authUser", authUser.uid)
            .then(authUid => {
              console.log(" ***** withAuth: secureStore.set");
            })
            .catch(err => {
              console.log(error(err.message || "ERROR"));
            });
        },

        () => {
          SecureStore.deleteItemAsync("authUser")
            .then(() => {
              this.props.onSetAuthUser(null);
              console.log(" ***** withAuth: secureStore.del");
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
    onSetAuthUser: authUser => dispatch({ type: "AUTH_USER_SET", authUser }),
    getProjects: (authUser)=> dispatch(getProjects(authUser.projects)),
    getUserData: (displayName, photoURL) => dispatch(getUserData(displayName, photoURL))
  });

  return compose(
    withFirebase,
    withNavigation,
    connect(null, mapDispatchToProps)
  )(WithAuthentication);
};

export default withAuthentication;
