import React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Button,
  Alert,
  Text,
} from 'react-native';

import ProgressBarAnimated from 'react-native-progress-bar-animated';
import  Colors  from '../constants/Colors';
import Layout from '../constants/Layout';
<<<<<<< HEAD

export default class Progress extends React.PureComponent {
  
  static getDerivedStateFromProps (props, state) {
      // console.log("----------------progress derived:", props, state)
      return {
        progress: props.completeProcs
      }
  } 

  state = {
    progress: this.props.completeProcs
    // progress: 0,
    // progressWithOnComplete: 100,
    // progressCustomized: 100,
=======
export default class App extends React.Component {

  state = {
    progress: 50,
    progressWithOnComplete: 100,
    progressCustomized: 100,
>>>>>>> ef6708b5b32b815daa85f564a5152695991bcfb6
  }
  
    increase = (key, value) => {
        this.setState({
          [key]: this.state[key] + value,
        });
      }
   
<<<<<<< HEAD
  // componentDidMount () {
  //   this.props.completeProcs > 0 && this.increase( 'progress', this.props.completeProcs )
  //   console.log("------------progress props:", this.props.completeProcs)
  // }
=======
  componentDidMount () {
    this.increase( 'progress', 50)
  }
>>>>>>> ef6708b5b32b815daa85f564a5152695991bcfb6
  render() {
    const barWidth = Layout.window.width * 0.75 ;
    const progressCustomStyles = {
      backgroundColor:Colors.barStart, 
      borderRadius: 15,
      borderColor: Colors.w,
    //   margin: Layout.window.height * 0.025
    };

    return (
      <View style={styles.container}>
        <View>
          {/* <Text style={styles.label}>Bar with backgroundColorOnComplete prop</Text> */}
          <ProgressBarAnimated
          {...progressCustomStyles}
            width={barWidth}
            value={this.state.progress}
            backgroundColorOnComplete={Colors.barEnd}
            // backgroundColorOnComplete="#6CC644"
            height={Layout.window.width * 0.02}
            backgroundAnimationDuration={3500}
            backgroundColor={Colors.barStart}
            underlyingColor={Colors.w}
          />
          {/* <View style={styles.buttonContainer}>
            <View style={styles.buttonInner}>
              <Button
                title="Increase 20%"
                onPress={this.increase.bind(this, 'progress', 10)}
              />
            </View>
          </View> */}
        </View>

        {/* <View style={styles.separator} />

        <View>
          <Text style={styles.label}>Bar with onComplete event</Text>
          <ProgressBarAnimated
            width={barWidth}
            value={this.state.progressWithOnComplete}
            onComplete={() => {
              Alert.alert('Hey!', 'onComplete event fired!');
            }}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.buttonInner}>
              <Button
                title="Increase 50%"
                onPress={this.increase.bind(this, 'progressWithOnComplete', 50)}
              />
            </View>
          </View>
        </View>
        <View style={styles.separator} /> */}
{/* 
        <View>
          <Text style={styles.label}>Custom style with max value in 30%</Text>
          <ProgressBarAnimated
            {...progressCustomStyles}
            width={barWidth}
            maxValue={30}
            value={this.state.progressCustomized}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.buttonInner}>
              <Button
                title="Increase 10%"
                onPress={this.increase.bind(this, 'progressCustomized', 10)}
              />
            </View>
          </View>
        </View> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
//     bar: {
//         height: 1,
//         width: 1,
//     },
  container: {
    marginTop: Layout.window.height * 0.025,
    marginBottom: Layout.window.height * 0.025,
  },
//   buttonContainer: {
//     marginTop: 15,
//   },
//   separator: {
//     marginVertical: 30,
//     borderWidth: 0.5,
//     borderColor: Colors.w,
//   },
//   label: {
//     color: '#999',
//     fontSize: 14,
//     fontWeight: '500',
//     marginBottom: 10,
//   },
});