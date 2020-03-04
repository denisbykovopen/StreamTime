import React from "react";
import AddToolFormView from "./AddToolFormRF";
import { View } from "react-native";
import styles from "./styles";
import { connect } from "react-redux";
import { withNavigation } from "react-navigation";
import { compose } from "recompose";
import { withFirebase } from "../../Firebase/context";

class ProcForm extends React.Component {
  handleSubmit = ({ toolName, toolPrice }) => {
    this.props.firebase
      .globalTools()
      .child(`${toolName}`)
      .set({
        toolName,
        toolPrice
      });
    
  };

  render() {
    return (
      <View contentContainerStyle={styles.formContainer}>
        <AddToolFormView
          onSubmit={this.handleSubmit}
          key={this.props.i}
          form={this.props.form}
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    processes: state.processes
  };
};

export default compose(
  withFirebase,
  withNavigation,
  connect(mapStateToProps, null)
)(ProcForm);
