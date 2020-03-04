import React, { Component } from "react";
import ComponentFormView from "./ComponentFormRF";
import { View } from "react-native";
import styles from "./styles";
import { connect } from "react-redux";
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

const mapStateToProps = (state) => ({
  processes: state.processes.processes,
  componentData: state.component.componentData,
});

export default connect(
  mapStateToProps,
  // null,
  { saveComponentData, reset }
)(ComponentForm);
