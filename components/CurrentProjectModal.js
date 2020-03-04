import React from "react";
import { TouchableOpacity, Text, View, StyleSheet, Modal } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Layout from "../constants/Layout";
import FinishedProcessButton from "./FinishedProcessButton";
import ProcessButton from "../common/ProcessButton";
import CloseIcon from "../common/CloseIcon";
import Fonts from "../constants/Fonts";

// function msToTime(s) {
//   var ms = s % 1000;
//   s = (s - ms) / 1000;
//   var secs = s % 60;
//   s = (s - secs) / 60;
//   var mins = s % 60;
//   var hrs = (s - mins) / 60;

//   return hrs + ":" + mins;
// }

export default function CurrentProjectModal(props) {
  const { visible, onClose, finished, suggested } = props;
  // console.log(
  //   "----------------project modal props:",
  //   finished,
  //   suggested,
  //   "----------------projects modal sort:",
  //   //   (suggested).map(item => Object.keys(item).map(atom => item[atom]))
  //   suggested.map(item => Object.keys(item).map(atom => item[atom].processName))
  // );
  return (
    <Modal animationType="fade" transparent={true} visible={visible}>
      <TouchableOpacity
        onPress={onClose}
        style={styles.modalBack}
        activeOpacity={1}
      >
        <View style={styles.modalInner}>
          <View style={styles.modalLine}></View>
          <View style={styles.modalHeader}>
            <TouchableOpacity onPress={onClose}>
              {/* <Ionicons name="ios-close" size={44} color="black" /> */}
              <CloseIcon />
            </TouchableOpacity>
          </View>

          <View style={styles.modalContent}>
            <View style={styles.modalMain}>
              <View>
                <Text style={styles.modalText}>
                  Recently finished processes:{" "}
                </Text>
                {finished
                  ? finished.map(item =>
                      Object.keys(item).map((atom, i) => {
                        // console.log(
                        //   "--------- current modal finished:",
                        //   item[atom].processName,
                        //   item[atom].processTime
                        // );
                        return (
                          <FinishedProcessButton
                            key={i}
                            processName={item[atom].processName}
                            processTime={item[atom].processTime}
                          />
                        );
                      })
                    )
                  : <Text>"No results"</Text>}
              </View>
              <View>
                <Text style={styles.modalText}>Next suggested processes:</Text>
                {suggested &&
                  suggested.map(item =>
                    Object.keys(item).map((atom, i) => {
                      // console.log(
                      //   "-------------current modal suggested:",
                      //   item[atom].processName,
                      //   item[atom].processTime
                      // );
                      return (
                        <ProcessButton
                          key={i}
                          processName={item[atom].processName}
                          processTime={item[atom].processTime}
                        />
                      );
                    })
                  )}
              </View>

              {/* {selectedProject != "" &&
                projects[selectedProject].hasOwnProperty("components") &&
                Object.keys(projects[selectedProject].components).map(
                  (atom, index) => {
                    console.log(
                      "--------current components map:",
                      atom,
                      projects[selectedProject].components[atom].processes
                    );
                    return Object.keys(
                      projects[selectedProject].components[atom].processes
                    ).map((element, n) => {
                      console.log(
                        "---------current processes map:",
                        element,
                        projects[selectedProject].components[atom].processes[
                          element
                        ].completed
                      );

                      return (
                        <View key={n}>
                          {projects[selectedProject].components[atom].processes[
                            element
                          ].completed && (

                            <View>
                              <Text>Recently finished processes are: </Text>

                              <View style={styles.containerInner}>
                                <View style={styles.containerHeader}>
                                  <Text style={styles.headerText}>
                                    {element}
                                  </Text>
                                </View>
                                <View style={styles.containerMain}>
                                  <Progress completeProcs={100} />
                                </View>
                                <View style={styles.containerFooter}>
                                  <Text>
                                    {" "}
                                    {msToTime(
                                      projects[selectedProject].components[atom]
                                        .processes[element].processTime
                                    )}{" "}
                                    spent{" "}
                                  </Text>
                                </View>
                              </View>

                            </View>
                          )}
                          {!projects[selectedProject].components[atom]
                            .processes[element].completed && (
                            <View>
                              <Text>The next suggested processes are:</Text>
                              <ProcessButton
                                processName={
                                  projects[selectedProject].components[atom]
                                    .processes[element].processName
                                }
                                processTime={
                                  projects[selectedProject].components[atom]
                                    .processes[element].processTime
                                }
                              />
                            </View>
                          )}
                        </View>
                      );
                    });
                  }
                )} */}
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </Modal>
  );
}

const styles = StyleSheet.create({
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
    flexDirection: "row-reverse",
    paddingLeft: Layout.window.width * 0.025
  },
  modalText: {
    fontSize: Fonts.xxlarge,
    margin: Layout.window.width * 0.01
  }
});
