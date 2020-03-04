import React from "react";
import { connect, dispatch } from "react-redux";
import { compose } from "recompose";

import { withFirebase } from "../Firebase";
import * as SecureStore from "expo-secure-store";
import { withNavigation } from 'react-navigation';
<<<<<<< HEAD
import { getProjects, getUserData } from '../actions';
=======
>>>>>>> ef6708b5b32b815daa85f564a5152695991bcfb6

const withAuthentication = Component => {
  class WithAuthentication extends React.Component {
    constructor(props) {
      super(props);
    }

    componentDidMount() {
<<<<<<< HEAD

      SecureStore.getItemAsync("authUser")
      .then(authUser => {
        console.log(
          " ***** withAuth: secureStore.get:", 
          authUser
        );
        this.props.onSetAuthUser(authUser);
        
=======
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
>>>>>>> ef6708b5b32b815daa85f564a5152695991bcfb6
        this.props.navigation.navigate(
          authUser != null ? "Main" : "Auth"
        )
      })
      .catch(err => {
        console.log(error(err.message || "ERROR"));
      });
      
      this.listener = this.props.firebase.onAuthUserListener(
        authUser => {
<<<<<<< HEAD
          
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
=======
          this.props.onSetAuthUser(authUser.uid);
          console.log("--fire auth", typeof authUser.uid, authUser.uid);
          SecureStore.setItemAsync("authUser", authUser.uid)
            .then(authUid => {
              console.log("--auth from secure");
>>>>>>> ef6708b5b32b815daa85f564a5152695991bcfb6
            })
            .catch(err => {
              console.log(error(err.message || "ERROR"));
            });
        },
<<<<<<< HEAD

=======
>>>>>>> ef6708b5b32b815daa85f564a5152695991bcfb6
        () => {
          SecureStore.deleteItemAsync("authUser")
            .then(() => {
              this.props.onSetAuthUser(null);
<<<<<<< HEAD
              console.log(" ***** withAuth: secureStore.del");
=======
              console.log("--remove authUser from secure");
>>>>>>> ef6708b5b32b815daa85f564a5152695991bcfb6
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
<<<<<<< HEAD
    onSetAuthUser: authUser => dispatch({ type: "AUTH_USER_SET", authUser }),
    getProjects: (authUser)=> dispatch(getProjects(authUser.projects)),
    getUserData: (displayName, photoURL) => dispatch(getUserData(displayName, photoURL))
=======
    onSetAuthUser: authUser => dispatch({ type: "AUTH_USER_SET", authUser })
>>>>>>> ef6708b5b32b815daa85f564a5152695991bcfb6
  });

  return compose(
    withFirebase,
    withNavigation,
    connect(null, mapDispatchToProps)
  )(WithAuthentication);
};

export default withAuthentication;
