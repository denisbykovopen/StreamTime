import { reduxForm } from "redux-form";
import EditFormView from "./EditFormView";
import { connect } from "react-redux";

const FORM = "update";

const mapStateToProps = (state, ownProps) => {
  const { item } = ownProps;
  return {
    projects: state.projects.projects,
    initialValues: {
      productName:
        state.projects.projects && state.projects.projects[item].productName,
      productQuantity:
        state.projects.projects && state.projects.projects[item].productQuantity
    }
  };
};

export default connect(
  mapStateToProps,
  // null,
  null
)(
  reduxForm({
    form: FORM,
    // initialValues,
    // validate,
    enableReinitialize: true,
    destroyOnUnmount: false
  })(EditFormView)
);
