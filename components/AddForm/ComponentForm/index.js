import React, { Component } from "react";
import ComponentFormView from "./ComponentFormRF";
import { View } from "react-native";
import styles from "./styles";
import { connect } from "react-redux";
import { saveComponentData } from "../../../actions";

class ComponentForm extends Component {

  componentDidUpdate () {
    this.props.input.onChange(this.props.value);
  }

  handleSubmit = ({ componentName }) => {
    this.props.saveComponentData(componentName);
    // console.log(this.props.component.componentData);
    console.log(componentName);
  };

  render() {
    return (
      <View contentContainerStyle={styles.formContainer}>
        <ComponentFormView 
          onSubmit={this.handleSubmit} 
          key={this.props.key} 
          form={this.props.form} 
        />
      </View>
    );
  }
}

// export default withNavigation(withFirebase(ComponentForm));

// const mapStateToProps = ({component}) => ({component});

export default connect(
  // mapStateToProps, 
  null,
  { saveComponentData }
  )(ComponentForm);
