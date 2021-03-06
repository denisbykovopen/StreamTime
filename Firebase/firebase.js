import app from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

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
  doSignInWithCredential = credential =>
    this.auth.signInWithCredential(credential);

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignInWithGoogle = () => this.auth.signInWithPopup(this.googleProvider);

  doSignInWithFacebook = () => this.auth.signInWithPopup(this.facebookProvider);

  doSignInWithTwitter = () => this.auth.signInWithPopup(this.twitterProvider);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doSendEmailVerification = () =>
    this.auth.currentUser.sendEmailVerification({
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
        this.user(authUser.uid)
          .once("value")
          .then(snapshot => {
            const dbUser = snapshot.val();
            console.log(
              " ##### fire: onAuthUserListener: user.snapshot:", 
              // snapshot.val()
              );
            // default empty roles
            // if (!dbUser.roles) {
            //   dbUser.roles = {};
            // }
            authUser = {
              uid: authUser.uid,
              email: authUser.email,
              emailVerified: authUser.emailVerified,
              providerData: authUser.providerData,
              ...dbUser
            };

            this.user(authUser.uid).update(authUser);

            // this.userBucket(authUser.uid).child(authUser.uid).putString(String(authUser.uid));

            next(authUser);
          });
      } else {
        fallback();
      }
    });
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

  userBucket = uid => this.bucket.ref(`users/${uid}`);

  userImages = uid => this.bucket.ref(`users/${uid}/images`);

  userImage = (uid, projectName) =>
    this.bucket
      .ref(`users/${uid}`)
      .child("images")
      .child(`${projectName}`);
}

export default Firebase;
