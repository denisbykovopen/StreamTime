<<<<<<< HEAD
import app from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";
=======
import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';
>>>>>>> ef6708b5b32b815daa85f564a5152695991bcfb6

// const config = {
//   apiKey: process.env.REACT_APP_API_KEY,
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   databaseURL: process.env.REACT_APP_DATABASE_URL,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
// };

var config = {
  apiKey: "AIzaSyDn29dAXVJbOegmh8kw7YIdTcoqdbqGVm8",
  authDomain: "tracking-app-01.firebaseapp.com",
  databaseURL: "https://tracking-app-01.firebaseio.com",
  projectId: "tracking-app-01",
  storageBucket: "tracking-app-01.appspot.com",
  messagingSenderId: "117786404780",
  appId: "1:117786404780:web:bf34e5ef3acdccbebbfc09"
};

<<<<<<< HEAD
=======

>>>>>>> ef6708b5b32b815daa85f564a5152695991bcfb6
class Firebase {
  constructor() {
    app.initializeApp(config);

    /* Helper */

    this.serverValue = app.database.ServerValue;
    this.emailAuthProvider = app.auth.EmailAuthProvider;

    /* Firebase APIs */

    this.auth = app.auth();
    this.db = app.database();
    this.bucket = app.storage();

    /* Social */

    this.googleProvider = new app.auth.GoogleAuthProvider();
    this.facebookProvider = new app.auth.FacebookAuthProvider();
    this.twitterProvider = new app.auth.TwitterAuthProvider();
  }

  // *** Auth API ***
<<<<<<< HEAD
  doSignInWithCredential = credential =>
    this.auth.signInWithCredential(credential);

=======
  doSignInWithCredential = (credential) =>
    this.auth.signInWithCredential(credential);


>>>>>>> ef6708b5b32b815daa85f564a5152695991bcfb6
  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

<<<<<<< HEAD
  doSignInWithGoogle = () => this.auth.signInWithPopup(this.googleProvider);

  doSignInWithFacebook = () => this.auth.signInWithPopup(this.facebookProvider);

  doSignInWithTwitter = () => this.auth.signInWithPopup(this.twitterProvider);
=======
  doSignInWithGoogle = () =>
    this.auth.signInWithPopup(this.googleProvider);

  doSignInWithFacebook = () =>
    this.auth.signInWithPopup(this.facebookProvider);

  doSignInWithTwitter = () =>
    this.auth.signInWithPopup(this.twitterProvider);
>>>>>>> ef6708b5b32b815daa85f564a5152695991bcfb6

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doSendEmailVerification = () =>
    this.auth.currentUser.sendEmailVerification({
<<<<<<< HEAD
      url: "noreply@tracking-app-01.firebaseapp.com"
    });

  doPasswordUpdate = password => this.auth.currentUser.updatePassword(password);

  // Merge //

  onAuthUserListener = (next, fallback) => {
    this.auth.onAuthStateChanged(authUser => {
      if (authUser) {
        console.log(
          " ##### fire: onAuthUserListener", 
          // authUser
          );
=======
      url: "noreply@tracking-app-01.firebaseapp.com",
    });

  doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);

  // Merge //

  onAuthUserListener = (next, fallback) =>{
    this.auth.onAuthStateChanged(authUser => {
      if (authUser) {
        console.log("--auth listener check",authUser)
>>>>>>> ef6708b5b32b815daa85f564a5152695991bcfb6
        this.user(authUser.uid)
          .once("value")
          .then(snapshot => {
            const dbUser = snapshot.val();
<<<<<<< HEAD
            console.log(
              " ##### fire: onAuthUserListener: user.snapshot:", 
              // snapshot.val()
              );
=======
            console.log("oncesnap",snapshot)
>>>>>>> ef6708b5b32b815daa85f564a5152695991bcfb6
            // default empty roles
            // if (!dbUser.roles) {
            //   dbUser.roles = {};
            // }
            authUser = {
              uid: authUser.uid,
              email: authUser.email,
              emailVerified: authUser.emailVerified,
              providerData: authUser.providerData,
<<<<<<< HEAD
              ...dbUser
=======
              ...dbUser,
>>>>>>> ef6708b5b32b815daa85f564a5152695991bcfb6
            };

            this.user(authUser.uid).update(authUser);

            // this.userBucket(authUser.uid).child(authUser.uid).putString(String(authUser.uid));

            next(authUser);
          });
      } else {
        fallback();
      }
    });
<<<<<<< HEAD
  };

  // User API

  // userUid = this.auth.currentUser.uid;

  globalProcesses = () => this.db.ref("globalProcesses");

  globalProc = processName => this.db.ref(`globalProcesses/${processName}`);

  globalTools = () => this.db.ref("globalTools");

  globalTool = toolName => this.db.ref(`globalTools/${toolName}`);

  users = () => this.db.ref("users");

  user = uid => this.db.ref(`users/${uid}`);

  userProjects = uid => this.db.ref(`users/${uid}`).child(`projects`);

  userProject = (uid, productName) =>
    this.db
      .ref(`users/${uid}`)
      .child(`projects`)
      .child(`${productName}`);

  userProductComponent = (uid, productName, componentName) =>
    this.db
      .ref(`users/${uid}`)
      .child(`projects`)
      .child(`${productName}`)
      .child("components")
      .child(`${componentName}`);

  userProcess = (uid, productName, componentName, processName) =>
    this.db.ref(
      `users/${uid}/projects/${productName}/components/${componentName}/processes/${processName}`
    );

  usersBucket = () => this.bucket.ref("users");
=======
  } 
  
  // User API 

  // userUid = this.auth.currentUser.uid;

  users = () => this.db.ref('users');

  user = uid => this.db.ref(`users/${uid}`);

  userProjects = (uid) =>  this.db.ref(`users/${uid}`).child(`projects`);

  userProject = (uid, productName) => this.db.ref(`users/${uid}`).child(`projects`).child(`${productName}`);

  userProductComponent = (uid, productName, componentName) => this.db.ref(`users/${uid}`).child(`projects`).child(`${productName}`).child('components').child(`${componentName}`);

  userProcess = (uid, productName, componentName, processName) => this.db.ref(`users/${uid}/projects/${productName}/components/${componentName}/processes/${processName}`);

  

  usersBucket = () => this.bucket.ref('users');
>>>>>>> ef6708b5b32b815daa85f564a5152695991bcfb6

  userBucket = uid => this.bucket.ref(`users/${uid}`);

  userImages = uid => this.bucket.ref(`users/${uid}/images`);

<<<<<<< HEAD
  userImage = (uid, projectName) =>
    this.bucket
      .ref(`users/${uid}`)
      .child("images")
      .child(`${projectName}`);
=======
  userImage = (uid, projectName) => this.bucket.ref(`users/${uid}`).child('images').child(`${projectName}`);

>>>>>>> ef6708b5b32b815daa85f564a5152695991bcfb6
}

export default Firebase;
