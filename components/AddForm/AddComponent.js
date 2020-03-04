<<<<<<< HEAD
import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import AddCompIcon from "../../common/AddCompIcon";
import styles from "./styles";
import { connect } from "react-redux";
import ComponentForm from "./ComponentForm/index";

class AddComponent extends React.Component {
  state = {
    // visible: false,
    // child: [],
    index: 1
  };
  toggle = () => {
    // this.setState ({
    //     visible: !this.state.visible
    // })
    // this.state.child.push(
    //     <ComponentForm key={this.state.index}/>
    // )
    // this.setState({
    //     index: this.state.index + 1,
    //     child: this.state.child
    // })
    this.setState({
      index: this.state.index + 1
    });
  };
  render() {
    // let addChild = (child) => {
    //     return(
    //         <View>
    //             {child}
    //         </View>
    //     );
    // }

    const children = [];

    for (var i = 0; i < this.state.index; i += 1) {
      children.push(<ComponentForm key={i} index={i} form={`component${i}`} />);
    }

    return (
      <View style={styles.componentContainer}>
        <Text style={styles.componentText}>Components</Text>
        {/* {this.props.component.componentData.map(data =>(
=======
import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import AddCompIcon from '../../common/AddCompIcon';
import styles from './styles';
import { connect } from 'react-redux';
import ComponentForm from './ComponentForm/index';

class AddComponent extends React.Component {
    state = {
        // visible: false,
        // child: [],
        index: 1
    }
    toggle = () => {
        // this.setState ({
        //     visible: !this.state.visible
        // })
        // this.state.child.push(
        //     <ComponentForm key={this.state.index}/>
        // )
        // this.setState({
        //     index: this.state.index + 1,
        //     child: this.state.child
        // })
        this.setState({
            index: this.state.index + 1
          });
    }
    render () {

        // let addChild = (child) => {
        //     return(
        //         <View>
        //             {child}
        //         </View>
        //     );
        // } 

        const children = [];

        for (var i = 0; i < this.state.index; i += 1) {
          children.push(<ComponentForm key={i} index={i} form={`component${i}`} />);
        };

        return(
            <View style={styles.componentContainer}>
                <Text style={styles.componentText}>Components</Text>
                {/* {this.props.component.componentData.map(data =>(
>>>>>>> ef6708b5b32b815daa85f564a5152695991bcfb6
                    <View>
                        <View>
                            <Text> { data.componentName } </Text>
                        </View>
                        <View>
                            <Text> { data.processName } </Text>
                        </View>
                    </View>
                ))} */}
<<<<<<< HEAD
        {/* {this.state.visible && <ComponentForm />} */}
        {/* {addChild(this.state.child)} */}
        {children}
        <View style={styles.line}></View>
        <TouchableOpacity onPress={this.toggle} style={styles.openButton}>
          <AddCompIcon />
          <Text style={styles.openText}>One more component</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = ({ component }) => ({ component });

export default connect(mapStateToProps, null)(AddComponent);
=======
                {/* {this.state.visible && <ComponentForm />} */}
                {/* {addChild(this.state.child)} */}
                {children}
                <View style={styles.line}></View>
                <TouchableOpacity 
                    onPress={this.toggle}
                    style={styles.openButton}
                >
                    <AddCompIcon />
                    <Text style={styles.openText}>One more component</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const mapStateToProps = ({ component }) => ({ component });
export default connect(
    mapStateToProps, null
    )(AddComponent);
>>>>>>> ef6708b5b32b815daa85f564a5152695991bcfb6
