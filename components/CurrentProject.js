import React from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  ScrollView,
  Alert,
<<<<<<< HEAD
  TouchableOpacity,
  Modal,
  TouchableWithoutFeedback,
  TouchableHighlight
=======
  TouchableOpacity
>>>>>>> ef6708b5b32b815daa85f564a5152695991bcfb6
} from "react-native";
import Layout from "../constants/Layout";
import Colors from "../constants/Colors";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Fonts from "../constants/Fonts";
import { withFirebase } from "../Firebase";
import { connect } from "react-redux";
import { compose } from "recompose";
import { getProjects } from "../actions";
import EditIcon from "../common/EditIcon";
import Progress from "../common/Progress";
import EditButton from "../components/EditButton";
<<<<<<< HEAD
import { Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import ProcessButton from "../common/ProcessButton";
import CurrentProjectButton from '../components/CurrentProjectButton';

function msToTime(s) {
  var ms = s % 1000;
  s = (s - ms) / 1000;
  var secs = s % 60;
  s = (s - secs) / 60;
  var mins = s % 60;
  var hrs = (s - mins) / 60;

  return hrs + ":" + mins;
}


class CurrentProject extends React.Component {
  // static getDerivedStateFromProps (props, state) {
  //   console.log("----------------progress derived:", props, state)
  //   return {
  //     progress: props.completeProcs
  //   }
  // } 

  // state = {
  //   projectModal: false,
  //   selectedProject: ""
  // };

  componentDidMount() {
    // if (this.props.projects === null) {
      const userId = this.props.firebase.auth.currentUser.uid;
      this.props.firebase.userProjects(userId).on("value", snapshot => {

        // console.log("--current projecs snap", snapshot.val());

        // for (let [key, value] of Object.entries(snapshot.val())) {
        //     console.log(`${key}: ${Object.entries(value)}`);
        // }
        // this.props.getProjects(null);

        this.props.getProjects(snapshot.val());
      });
    // }
  }

  // openProjectModal = () => {
  //   this.setState({
  //     projectModal: true
  //   });
  // };

  // closeProjectModal = () => {
  //   this.setState({
  //     projectModal: false
  //   });
  // };

// openSelected = item => {
  //   // const {projects} = this.props;
  //   this.setState(
  //     {
  //       selectedProject: item
  //     },
  //     () => console.log("-----------current selected:", item, typeof item)
  //   );
  //   this.openProjectModal();
  // };

  render() {  
  const { projects } = this.props.projects;
    // const { selectedProject } = this.state;
    return (
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.container}>
          {projects &&
            Object.keys(projects).map((item, i) => {
              
              // console.log(
              //   "----------current projects properties:",
              //   item,
              //   projects[item],
              //   projects[item].hasOwnProperty("components")
              // );

              // if(projects[item].hasOwnProperty('components')){
              //   return Object.keys(projects[item].components).map(atom => {
              //     if(projects[item].components[atom].hasOwnProperty('processes')){
              //       return Object.keys(projects[item].components[atom].processes).map(element => {
              //         return console.log("------------current procs:" ,element)
              //       })
              //     }
              //   })
              // }

              return (
                
                  <CurrentProjectButton current={item} key={i} />

               // <TouchableOpacity
                //   key={i}
                //   style={styles.containerInner}
                //   onPress={() => this.openSelected(item)}
                // >
                //   <View style={styles.containerHeader}>
                //     <Text style={styles.headerText}>
                //       {item}{' '}
                //     </Text>
                //     <EditButton key={i} style={styles.edit} current={item} />
                //   </View>
                //   <View style={styles.containerMain}>
                //     <Progress completeProcs={100} />
                //   </View>
                //   <View style={styles.containerFooter}>
                //     <Text>{0} proceses completed </Text>
                //     <Text>{0} spend </Text>
                //   </View> */}

                  // <Modal
                  //   animationType="fade"
                  //   transparent={true}
                  //   visible={this.state.projectModal}
                  //   onRequestClose={() => {
                  //     console.log("-----modal:");
                  //   }}
                  // >
                  //   <TouchableOpacity
                  //     onPress={() => {
                  //       this.closeProjectModal();
                  //     }}
                  //     style={styles.modalBack}
                  //     activeOpacity={1}
                  //   >
                  //     <View style={styles.modalInner}>
                  //       <View style={styles.modalLine}></View>

                  //       <View style={styles.modalContent}>
                  //         <View style={styles.modalHeader}>
                  //           <TouchableOpacity
                  //             onPress={() => {
                  //               this.closeProjectModal();
                  //             }}
                  //           >
                  //             <Ionicons
                  //               name="ios-close"
                  //               size={44}
                  //               color="black"
                  //             />
                  //           </TouchableOpacity>
                  //         </View>
                  //         <View style={styles.modalMain}>
                          
                  //           {selectedProject != "" &&
                  //             projects[selectedProject].hasOwnProperty(
                  //               "components"
                  //             ) &&
                  //             Object.keys(
                  //               projects[selectedProject].components
                  //             ).map((atom, index) => {
                  //               console.log(
                  //                 "--------current components map:",
                  //                 atom,
                  //                 projects[selectedProject].components[atom]
                  //                   .processes
                  //               );
                  //               return Object.keys(
                  //                 projects[selectedProject].components[atom]
                  //                   .processes
                  //               ).map((element, n) => {
                  //                 console.log(
                  //                   "---------current processes map:",
                  //                   element,
                  //                   projects[selectedProject].components[atom]
                  //                     .processes[element].completed
                  //                 );

                  //                 return (
                  //                   <View key={n}>
                  //                     {projects[selectedProject].components[
                  //                       atom
                  //                     ].processes[element].completed && (
                  //                       <View>
                  //                         <Text>Recently finished processes are: </Text>
                  //                         <View style={styles.containerInner}>
                  //                         <View style={styles.containerHeader}>
                  //                           <Text style={styles.headerText}>
                  //                             {element}
                                          
                  //                           </Text>
                  //                         </View>
                  //                         <View style={styles.containerMain}>
                  //                           <Progress completeProcs={100} />
                  //                         </View>
                  //                         <View style={styles.containerFooter}>
                  //                           <Text> { msToTime(projects[selectedProject]
                  //                               .components[atom].processes[
                  //                               element
                  //                             ].processTime)  } spent </Text>
                                           
                  //                         </View>
                  //                       </View>
                  //                       </View>
                                        
                  //                     )}
                  //                     {!projects[selectedProject].components[
                  //                       atom
                  //                     ].processes[element].completed && (
                  //                       <View>
                  //                         <Text>
                  //                           The next suggested processes are:
                  //                         </Text>
                  //                         <ProcessButton
                  //                           processName={
                  //                             projects[selectedProject]
                  //                               .components[atom].processes[
                  //                               element
                  //                             ].processName
                  //                           }
                  //                           processTime={
                  //                             projects[selectedProject]
                  //                               .components[atom].processes[
                  //                               element
                  //                             ].processTime
                  //                           }
                  //                         />
                  //                       </View>
                  //                     )}
                  //                   </View>
                  //                 );
                  //               });

                               
                  //             })}
                            
                  //         </View>
                  //       </View>
                  //     </View>
                  //   </TouchableOpacity>
                  // </Modal>
                 // </TouchableOpacity> 
               
              );

            }, this)}
        </View>
      </ScrollView>
=======

class CurrentProject extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     edit: false,
  //     // elements: []
  //     clicked: null
  //   };
  //   // this.toggleEdit = this.toggleEdit.bind(this);
  // }

  componentDidMount() {
    const userId = this.props.firebase.auth.currentUser.uid;
    this.props.firebase
      .userProjects(userId)
      .once("value")
      .then(snapshot => {
        console.log("--current projecs snap", snapshot.val());
        // for (let [key, value] of Object.entries(snapshot.val())) {
        //     console.log(`${key}: ${Object.entries(value)}`);
        // }
        this.props.getProjects(snapshot.val());
      });
  }

  // toggleEdit = () => {
  //   // const self = this;
  //   this.setState({
  //     edit: true
  //   })
  // }

  // toggleEdit = clickedId => {
  //   // this.setState({
  //   //   edit: !this.state.edit
  //   // });
  //   // this.setState({elements:[...this.state.elements, <EditButton key={i} />]});
  //   this.setState({ edit: !this.state.edit, clicked: clickedId });
  //   console.log(clickedId);
  // };

  render() {
    const { projects } = this.props.projects;

    return (
      <View style={styles.container}>
        {projects &&
          Object.keys(projects).map((item, i) => {
            return (
              <View key={i} style={styles.containerInner}>
                {/* {console.log("----------------i", i)} */}

                {/* {this.state.edit && (
                  <View style={styles.editContainer}>
                    <TouchableOpacity>
                      <Text>Edit</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <Text>Delete</Text>
                    </TouchableOpacity>
                  </View>
                )} */}
                {/* {this.state.edit && <EditButton key={i} />} */}
                {/* {this.state.elements} */}

                {/* {this.state.edit && this.state.clicked == {i} ? (
                  <EditButton key={i} />
                ) : null} */}

                <View style={styles.containerHeader}>
                  <Text style={styles.headerText}>
                    {/* {projects[item].productName} */}
                    {item}
                  </Text>
                  <EditButton key={i} style={styles.edit} current={item} />
                </View>

                <View style={styles.containerMain}>
                  <Progress />
                </View>

                <View style={styles.containerFooter}>
                  <Text>{0} proceses completed </Text>
                  <Text>{0} spend </Text>
                </View>
              </View>
            );
          }, this)}
      </View>
>>>>>>> ef6708b5b32b815daa85f564a5152695991bcfb6
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // height: Layout.window.height * 0.25,
    // borderRadius: 15,
<<<<<<< HEAD
    justifyContent: "center",
    marginBottom: Layout.window.height * 0.125

=======
    justifyContent: "center"
>>>>>>> ef6708b5b32b815daa85f564a5152695991bcfb6
    // alignItems: "center",
    // backgroundColor: Colors.w,
    // padding: Layout.window.width * 0.075
    // position: "relative",
    // zIndex: 1
  },
  containerInner: {
    borderWidth: 1,
    borderColor: Colors.w,
    borderRadius: 20,
    padding: Layout.window.width * 0.05,

    backgroundColor: Colors.w,
    marginTop: Layout.window.height * 0.025,
    marginBottom: Layout.window.height * 0.025
    // position: 'relative',
    // zIndex: 1,
    // height: Layout.window.height * 0.25,
  },
  containerHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    // padding: Layout.window.width * 0.05,
    position: "relative",
    zIndex: 1
  },
  headerText: {
    alignSelf: "center",
    fontSize: Fonts.xxlarge,
    fontWeight: "normal"
  },
  containerDetails: {
    fontSize: Fonts.large
  },
  containerMain: {
    flexDirection: "column"
    // padding: Layout.window.width * 0.05,
    // position: "relative"
  },
  containerFooter: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
    // position: "relative"
<<<<<<< HEAD
  },
=======
  }
>>>>>>> ef6708b5b32b815daa85f564a5152695991bcfb6
  // edit: {
  //   position: 'relative',
  // }
  // editContainer: {
  //   backgroundColor: "gray",
  //   position: "absolute",
  //   width: "50%",
  //   // height: '50%',
  //   right: 0,
  //   bottom: 0,
  //   top: 0,
  //   // left: 0,
  //   zIndex: 1,
  //   borderRadius: 20,
  //   padding: Layout.window.width * 0.05
  // }
<<<<<<< HEAD
  modalBack: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    height: Layout.window.height
  },
  modalInner: {
    backgroundColor: "whitesmoke",
    minHeight: Layout.window.height / 2,
    position: "absolute",
    zIndex: 100,
    width: Layout.window.width,
    bottom: 0,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15
  },
  modalLine: {
    borderTopColor: "black",
    marginTop: Layout.window.height * 0.02,
    borderTopWidth: 3,
    width: Layout.window.width * 0.1,
    backgroundColor: "gray",
    alignSelf: "center"
  },
  modalContent: {
    paddingHorizontal: Layout.window.width * 0.075
  },
  modalHeader: {
    flexDirection: "row-reverse"
  }
=======
>>>>>>> ef6708b5b32b815daa85f564a5152695991bcfb6
});

const mapStateToProps = ({ projects }) => ({ projects });

<<<<<<< HEAD
export default compose(
  // withNavigation,
  withFirebase,
  connect(mapStateToProps, { getProjects }, null, { pure: false })
)(CurrentProject);
=======
// export default withFirebase(CurrentProject);
export default compose(
  withFirebase,
  connect(mapStateToProps, { getProjects }, null, { pure: false })
)(CurrentProject);

{
  /* <Text>
                {Object.keys(projects[item].components).reduce((sum, inner) => {
                  sum = sum + inner.processTime;
                  console.log("-------", projects[item].components[inner].processTime)
                  return (
                    <View key={i}>
                      <Text>{inner}</Text>
                      <Text>{sum} </Text>
                    </View>
                  );
                })}
              </Text> */
}

{
  /* {Object.keys(projects[item].components).map((inner, i) => {
                console.log("------", projects[item].components[inner])
                let sum = 0;
                sum += projects[item].components[inner].processTime
                let cluster = projects[item].components[inner];
                return  (
                  // <View key={i} style={styles.containerInner}>
                    <Text>{ sum }</Text>
                    
                  // </View>
                ); */
}

{
  /* {" "}
{Object.keys(projects[item].components).map((key, i) => (
  <Text key={i}>
    <Text>
      {" "}
      {projects[item].components[key].componentName}{" "}
    </Text>
    <Text>
      {" "}
      {projects[item].components[key].processName}{" "}
    </Text>
    <Text>
      {" "}
      {typeof projects[item].components[key].processTime}{" "}
    </Text>
  </Text>
))}{" "} */
}

{
  /* {
                projects && Object.entries(projects).map(([key, val]) => 
                    <Text key={key}>{key}: {val}</Text>
                )
            } */
}
>>>>>>> ef6708b5b32b815daa85f564a5152695991bcfb6
