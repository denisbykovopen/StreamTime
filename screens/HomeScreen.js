import React from "react";
import { View, Text, StyleSheet, StatusBar, ScrollView } from "react-native";
import Layout from "../constants/Layout";
import Colors from "../constants/Colors";
<<<<<<< HEAD
import { Svg, G, Path } from "react-native-svg";
import SearchForm from "../components/SearchForm";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Fonts from "../constants/Fonts";
import { compose } from "recompose";
import { withFirebase } from "../Firebase/context";
import { connect } from "react-redux";
import { getProjects } from "../actions";
import ProcessButton from "../common/ProcessButton";
import HomeSearch from "../components/HomeSearch";

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      suggested: [],
      projects: props.projects
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.projects !== nextProps.projects) {
      console.log("----- HomeScreen derived nextProps.projects:", nextProps.projects);
      return {
        projects: nextProps.projects,
        suggested: []
      };
    }
    return {projects: nextProps.projects};
  }

  render() {
    const { suggested } = this.state;
    const { projects } = this.state;

    if (projects) {
      console.log("----- HomeScreen render state.suggested:", suggested);
      for (let key of projects && Object.keys(projects)) {
        if (projects[key].hasOwnProperty("components")) {
          Object.keys(projects[key].components).map(element => {
            return Object.keys(projects[key].components[element].processes).map(
              atom => {
                if (
                  !projects[key].components[element].processes[atom]
                    .completed &&
                  suggested.indexOf(
                    projects[key].components[element].processes
                  ) < 0
                ) {
                  // this.setState(prevState => ({
                  //   suggested: [
                  //     ...prevState.suggested,
                  //     projects[key].components[element].processes
                  //   ]
                  // }));

                  suggested.push(projects[key].components[element].processes);
                }
              }
            );
          });
        }
      }
    }

    return (
      <ScrollView
        contentContainerStyle={{ flex: 1, height: "100%" }}
        showsVerticalScrollIndicator={false}
      >
        <KeyboardAwareScrollView
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps={"always"}
          contentContainerStyle={{
            flexGrow: 1
          }}
        >
          <View style={styles.container}>
            <StatusBar barStyle="dark-content" />

            <HomeSearch suggested={suggested} />

            <Text style={styles.text}>Latest proccesses</Text>

            {suggested &&
              suggested.map(atom => {
                return Object.keys(atom).map((mol, i) => {
                  console.log(
                    "----- HomeScreen render suggested.map.map(mol):",
                    mol,
                    "----- HomeScreen render suggested.map(atom[mol].processName/processTime):",
                    atom[mol].processName,
                    atom[mol].processTime
                  );
                  return (
                    <ProcessButton
                      key={i}
                      processName={atom[mol].processName}
                      processTime={atom[mol].processTime}
                    />
                  );
                });
              })}

            <View style={styles.clockContainer}>
              <Svg width="50px" height="50px" viewBox="0 0 50 50">
                <G
                  id="Page-1"
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                >
                  <G
                    id="3.-Home-Screen"
                    transform="translate(-45.000000, -409.000000)"
                    fill="#FFFFFF"
                  >
                    <G
                      id="Group-2-Copy-2"
                      transform="translate(30.000000, 394.000000)"
                    >
                      <G
                        id="clock-(1)"
                        transform="translate(15.000000, 15.000000)"
                      >
                        <Path
                          d="M25,8 C25.55,8 26,7.64 26,7.2 L26,6.8 C26,6.36 25.55,6 25,6 C24.45,6 24,6.36 24,6.8 L24,7.2 C24,7.64 24.45,8 25,8 Z"
                          id="Path"
                        ></Path>
                        <Path
                          d="M25,42 C24.45,42 24,42.36 24,42.8 L24,43.2 C24,43.64 24.45,44 25,44 C25.55,44 26,43.64 26,43.2 L26,42.8 C26,42.36 25.55,42 25,42 Z"
                          id="Path"
                        ></Path>
                        <Path
                          d="M7.2,24 L6.8,24 C6.36,24 6,24.45 6,25 C6,25.55 6.36,26 6.8,26 L7.2,26 C7.64,26 8,25.55 8,25 C8,24.45 7.64,24 7.2,24 Z"
                          id="Path"
                        ></Path>
                        <Path
                          d="M43.2,24 L42.8,24 C42.36,24 42,24.45 42,25 C42,25.55 42.36,26 42.8,26 L43.2,26 C43.64,26 44,25.55 44,25 C44,24.45 43.64,24 43.2,24 Z"
                          id="Path"
                        ></Path>
                        <Path
                          d="M12.4468085,11.2553191 C12.106383,10.9148936 11.5957447,10.9148936 11.2553191,11.2553191 C10.9148936,11.5957447 10.9148936,12.106383 11.2553191,12.4468085 L11.5531915,12.7446809 C11.7234043,12.9148936 11.9361702,13 12.1489362,13 C12.3617021,13 12.5744681,12.9148936 12.7446809,12.7446809 C13.0851064,12.4042553 13.0851064,11.893617 12.7446809,11.5531915 L12.4468085,11.2553191 Z"
                          id="Path"
                        ></Path>
                        <Path
                          d="M11.5531915,37.2553191 L11.2553191,37.5531915 C10.9148936,37.893617 10.9148936,38.4042553 11.2553191,38.7446809 C11.4255319,38.9148936 11.6382979,39 11.8510638,39 C12.0638298,39 12.2765957,38.9148936 12.4468085,38.7446809 L12.7446809,38.4468085 C13.0851064,38.106383 13.0851064,37.5957447 12.7446809,37.2553191 C12.4042553,36.9148936 11.893617,36.9148936 11.5531915,37.2553191 Z"
                          id="Path"
                        ></Path>
                        <Path
                          d="M37.5531915,11.2553191 L37.2553191,11.5531915 C36.9148936,11.893617 36.9148936,12.4042553 37.2553191,12.7446809 C37.4255319,12.9148936 37.6382979,13 37.8510638,13 C38.0638298,13 38.2765957,12.9148936 38.4468085,12.7446809 L38.7446809,12.4468085 C39.0851064,12.106383 39.0851064,11.5957447 38.7446809,11.2553191 C38.4042553,10.9148936 37.893617,10.9148936 37.5531915,11.2553191 Z"
                          id="Path"
                        ></Path>
                        <Path
                          d="M26.1621622,24.7973274 L26.1621622,15.0690423 C26.1621622,14.481069 25.6756757,14 25.0810811,14 C24.4864865,14 24,14.481069 24,15.0690423 L24,25.2249443 C24,25.4922049 24.1081081,25.7594655 24.3243243,25.9732739 L36.1621622,37.6792873 C36.3783784,37.8930958 36.6486486,38 36.9189189,38 C37.1891892,38 37.4594595,37.8930958 37.6756757,37.6792873 C38.1081081,37.2516704 38.1081081,36.610245 37.6756757,36.1826281 L26.1621622,24.7973274 Z"
                          id="Path"
                        ></Path>
                        <Path
                          d="M25,0 C11.1956522,0 0,11.1956522 0,25 C0,38.8043478 11.1956522,50 25,50 C38.8043478,50 50,38.8043478 50,25 C50,11.1956522 38.8043478,0 25,0 Z M25,47.826087 C12.3913043,47.826087 2.17391304,37.6086957 2.17391304,25 C2.17391304,12.3913043 12.3913043,2.17391304 25,2.17391304 C37.6086957,2.17391304 47.826087,12.3913043 47.826087,25 C47.826087,37.6086957 37.6086957,47.826087 25,47.826087 Z"
                          id="Shape"
                          fill-rule="nonzero"
                        ></Path>
                      </G>
                    </G>
                  </G>
                </G>
              </Svg>
              <Text style={styles.clockTextBold}>
                {" "}
                {""} {0} hours{" "}
              </Text>
              <Text style={styles.clockText}>worked this week</Text>
            </View>
          </View>
        </KeyboardAwareScrollView>
=======
import {
  Svg,
  G,
  Path,
  Rect,
  Circle,
  Defs,
  ClipPath,
  Mask,
  Image
} from "react-native-svg";
import SearchForm from "../components/SearchForm";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Fonts from "../constants/Fonts";

export default class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    header: null
  });
  render() {
    return (
      <ScrollView 
      contentContainerStyle={{ flex: 1, height: '100%' }}
      // bounces={false}
      // centerContent={true}
      showsVerticalScrollIndicator={false}
    >
      <KeyboardAwareScrollView
        ref="scrollView"
        keyboardShouldPersistTaps={"always"}
        contentContainerStyle={{
          flexGrow: 1
        }}
      >
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <SearchForm />
        <Text style={styles.text}>Latest proccesses</Text>
        <View style={styles.clockContainer}>
          <Svg width="50px" height="50px" viewBox="0 0 50 50">
            <G
              id="Page-1"
              stroke="none"
              stroke-width="1"
              fill="none"
              fill-rule="evenodd"
            >
              <G
                id="3.-Home-Screen"
                transform="translate(-45.000000, -409.000000)"
                fill="#FFFFFF"
              >
                <G
                  id="Group-2-Copy-2"
                  transform="translate(30.000000, 394.000000)"
                >
                  <G id="clock-(1)" transform="translate(15.000000, 15.000000)">
                    <Path
                      d="M25,8 C25.55,8 26,7.64 26,7.2 L26,6.8 C26,6.36 25.55,6 25,6 C24.45,6 24,6.36 24,6.8 L24,7.2 C24,7.64 24.45,8 25,8 Z"
                      id="Path"
                    ></Path>
                    <Path
                      d="M25,42 C24.45,42 24,42.36 24,42.8 L24,43.2 C24,43.64 24.45,44 25,44 C25.55,44 26,43.64 26,43.2 L26,42.8 C26,42.36 25.55,42 25,42 Z"
                      id="Path"
                    ></Path>
                    <Path
                      d="M7.2,24 L6.8,24 C6.36,24 6,24.45 6,25 C6,25.55 6.36,26 6.8,26 L7.2,26 C7.64,26 8,25.55 8,25 C8,24.45 7.64,24 7.2,24 Z"
                      id="Path"
                    ></Path>
                    <Path
                      d="M43.2,24 L42.8,24 C42.36,24 42,24.45 42,25 C42,25.55 42.36,26 42.8,26 L43.2,26 C43.64,26 44,25.55 44,25 C44,24.45 43.64,24 43.2,24 Z"
                      id="Path"
                    ></Path>
                    <Path
                      d="M12.4468085,11.2553191 C12.106383,10.9148936 11.5957447,10.9148936 11.2553191,11.2553191 C10.9148936,11.5957447 10.9148936,12.106383 11.2553191,12.4468085 L11.5531915,12.7446809 C11.7234043,12.9148936 11.9361702,13 12.1489362,13 C12.3617021,13 12.5744681,12.9148936 12.7446809,12.7446809 C13.0851064,12.4042553 13.0851064,11.893617 12.7446809,11.5531915 L12.4468085,11.2553191 Z"
                      id="Path"
                    ></Path>
                    <Path
                      d="M11.5531915,37.2553191 L11.2553191,37.5531915 C10.9148936,37.893617 10.9148936,38.4042553 11.2553191,38.7446809 C11.4255319,38.9148936 11.6382979,39 11.8510638,39 C12.0638298,39 12.2765957,38.9148936 12.4468085,38.7446809 L12.7446809,38.4468085 C13.0851064,38.106383 13.0851064,37.5957447 12.7446809,37.2553191 C12.4042553,36.9148936 11.893617,36.9148936 11.5531915,37.2553191 Z"
                      id="Path"
                    ></Path>
                    <Path
                      d="M37.5531915,11.2553191 L37.2553191,11.5531915 C36.9148936,11.893617 36.9148936,12.4042553 37.2553191,12.7446809 C37.4255319,12.9148936 37.6382979,13 37.8510638,13 C38.0638298,13 38.2765957,12.9148936 38.4468085,12.7446809 L38.7446809,12.4468085 C39.0851064,12.106383 39.0851064,11.5957447 38.7446809,11.2553191 C38.4042553,10.9148936 37.893617,10.9148936 37.5531915,11.2553191 Z"
                      id="Path"
                    ></Path>
                    <Path
                      d="M26.1621622,24.7973274 L26.1621622,15.0690423 C26.1621622,14.481069 25.6756757,14 25.0810811,14 C24.4864865,14 24,14.481069 24,15.0690423 L24,25.2249443 C24,25.4922049 24.1081081,25.7594655 24.3243243,25.9732739 L36.1621622,37.6792873 C36.3783784,37.8930958 36.6486486,38 36.9189189,38 C37.1891892,38 37.4594595,37.8930958 37.6756757,37.6792873 C38.1081081,37.2516704 38.1081081,36.610245 37.6756757,36.1826281 L26.1621622,24.7973274 Z"
                      id="Path"
                    ></Path>
                    <Path
                      d="M25,0 C11.1956522,0 0,11.1956522 0,25 C0,38.8043478 11.1956522,50 25,50 C38.8043478,50 50,38.8043478 50,25 C50,11.1956522 38.8043478,0 25,0 Z M25,47.826087 C12.3913043,47.826087 2.17391304,37.6086957 2.17391304,25 C2.17391304,12.3913043 12.3913043,2.17391304 25,2.17391304 C37.6086957,2.17391304 47.826087,12.3913043 47.826087,25 C47.826087,37.6086957 37.6086957,47.826087 25,47.826087 Z"
                      id="Shape"
                      fill-rule="nonzero"
                    ></Path>
                  </G>
                </G>
              </G>
            </G>
          </Svg>
          <Text style={styles.clockTextBold}> {''} {0} hours </Text>
          <Text style={styles.clockText}>worked this week</Text>
        </View>
        {/* <Text>/HomeScreen</Text> */}
      </View>
      </KeyboardAwareScrollView>
>>>>>>> ef6708b5b32b815daa85f564a5152695991bcfb6
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.bgColor,
    padding: Layout.window.width * 0.075
  },
  clockContainer: {
    backgroundColor: Colors.buttonColor,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 15,
    padding: Layout.window.height * 0.025,
<<<<<<< HEAD
    marginTop: Layout.window.height * 0.05,
    marginBottom: Layout.window.height * 0.15
  },
  clockText: {
    color: Colors.buttonTextColor,
    fontSize: Fonts.xlarge
=======
    marginTop: Layout.window.height * 0.05
  },
  clockText: {
    color: Colors.buttonTextColor,
    fontSize: Fonts.xlarge,
>>>>>>> ef6708b5b32b815daa85f564a5152695991bcfb6
  },
  clockTextBold: {
    color: Colors.buttonTextColor,
    fontSize: Fonts.xlarge,
    fontWeight: "bold"
  },
  text: {
    fontSize: Fonts.xlarge
  }
});
<<<<<<< HEAD

mapStateToProps = state => ({
  authUser: state.sessionState.authUser,
  projects: state.projects.projects
});

export default compose(
  withFirebase,
  connect(mapStateToProps, { getProjects })
)(HomeScreen);
=======
>>>>>>> ef6708b5b32b815daa85f564a5152695991bcfb6
