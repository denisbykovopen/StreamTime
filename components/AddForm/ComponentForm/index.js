import React, { Component } from "react";
import ComponentFormView from "./ComponentFormRF";
import { View } from "react-native";
import styles from "./styles";
import { connect } from "react-redux";
<<<<<<< HEAD
import { saveComponentData, reset } from '../../../actions';

class ComponentForm extends Component {

  componentDidMount() {
   const {componentData} = this.props;
   const proc = componentData.map(item => {
     return Object.keys(item).map(element => item[element])
    })
   console.log("---componentData", proc, "---from", componentData)
  }

  handleSubmit = ({ componentName }) => {
    const {processes} = this.props;
    this.props.saveComponentData({[`${componentName}`]:{ processes }});
    this.props.reset();
    // console.log(this.props.component.componentData);
=======
import { saveComponentData } from "../../../actions";

class ComponentForm extends Component {

  componentDidUpdate () {
    this.props.input.onChange(this.props.value);
  }

  handleSubmit = ({ componentName }) => {
    this.props.saveComponentData(componentName);
    // console.log(this.props.component.componentData);
    console.log(componentName);
>>>>>>> ef6708b5b32b815daa85f564a5152695991bcfb6
  };

  render() {
    return (
      <View contentContainerStyle={styles.formContainer}>
<<<<<<< HEAD
        <ComponentFormView
          onSubmit={this.handleSubmit}
          key={this.props.key}
          form={this.props.form}
=======
        <ComponentFormView 
          onSubmit={this.handleSubmit} 
          key={this.props.key} 
          form={this.props.form} 
>>>>>>> ef6708b5b32b815daa85f564a5152695991bcfb6
        />
      </View>
    );
  }
}

// export default withNavigation(withFirebase(ComponentForm));

<<<<<<< HEAD
const mapStateToProps = (state) => ({
  processes: state.processes.processes,
  componentData: state.component.componentData,
});

export default connect(
  mapStateToProps,
  // null,
  { saveComponentData, reset }
)(ComponentForm);
=======
// const mapStateToProps = ({component}) => ({component});

export default connect(
  // mapStateToProps, 
  null,
  { saveComponentData }
  )(ComponentForm);
>>>>>>> ef6708b5b32b815daa85f564a5152695991bcfb6
