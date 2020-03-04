import React from "react";
import ProcFormView from "./ProcFormRF";
import { View } from "react-native";
import styles from "./styles";
import { connect } from "react-redux";
import { formValueSelector } from "redux-form";
import { withNavigation } from "react-navigation";
import { compose } from "recompose";
import { getProcesses } from "../../actions";
import { withFirebase } from "../../Firebase/context";

// let procArray = [];

// const element = procArray.filter(obj => {
//   return obj
// })
// const object = procArray.filter(obj=>obj)

class ProcForm extends React.Component {
  // componentDidUpdate () {
  //   this.props.input.onChange(this.props.value);
  // }

  componentDidMount() {
    // const {name} = this.props;
    // const procObject = {[`${name}`]: [] };
    // // procArray.push(procObject);
    // console.log('---procObject', procObject );
    // this.props.getProcesses(procObject);
    // console.log(
    //   "---redux processes",
    //   this.props.processes.processes[`${name}`],
    //   // Object.keys(this.props.processes.processes.reduce(object => object))
    // );
    // const element = procArray.map(item => item[`${name}`]);
    // console.log('---array-object', element);
  }

  handleSubmit = ({ processName, processTime }) => {
    // const { name } = this.props;

    // const procObject = {[`${name}`]: [] };

    // const procObject = { name: [] };

    // procObject[`${name}`].push({processName, processTime});

    // procArray.push( procObject );

    // const i = procObject[`${name}`];

    // const i = procObject.name;

    // i.push({ processName, processTime });

    // procArray.push(procObject);

    // const item = procArray[`${name}`]

    // const element = procArray.map(item=>`item.${name}`);

    // const element = procArray.find(x=>x`${name}`)

    // element.push({processName, processTime})

    // console.log("--try", element, object);

    // const element = this.props.processes.processes[`${name}`];
    // element.push({processName, processTime});

    // this.props.getProcesses({processName, processTime});

    this.props.getProcesses({
      [`${processName}`]: { processName, processTime, completed: false }
    });


    console.log("---nav", this.props.navigation.getParam("itemId"));

    console.log("---selector", this.props.name);

    if(processTime === undefined) {
      this.props.firebase.globalProcesses().child(`${processName}`).set({
        processName,
        // processTime,
        completed: false
      })
    } else {
      this.props.firebase.globalProcesses().child(`${processName}`).set({
        processName,
        processTime,
        completed: false
      })
    }
   

    //test sandbox 
    
    // this.props.firebase.globalTools().child(`${processName}`).set({
    //   toolName:processName,
    //   toolPrice:processTime
    // })

  };

  render() {
    return (
      <View contentContainerStyle={styles.formContainer}>
        <ProcFormView
          onSubmit={this.handleSubmit}
          key={this.props.i}
          form={this.props.form}
        />
      </View>
    );
  }
}

// export default withNavigation(ProcForm) ;

// export default connect(
//   null,
//   null
//   )(ProcForm);

// const formName =  'component0';
//  // Name of form you want
// const myFormValueSelector = formValueSelector(formName);

const mapStateToProps = (state, ownProps) => {
  console.log("-----own", ownProps.navigation.getParam("itemId"));

  const formName = ownProps.navigation.getParam("itemId");
  const myFormValueSelector = formValueSelector(formName);

  return {
    name: myFormValueSelector(state, "componentName"),
    processes: state.processes
  };
};

export default compose(
  withFirebase,
  withNavigation,
  connect(mapStateToProps, { getProcesses })
)(ProcForm);
