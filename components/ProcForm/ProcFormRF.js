import { reduxForm } from "redux-form";
import ProcFormView from "./ProcFormView";
import { connect } from "react-redux";

export default connect(
  null,
  null
)(
  reduxForm({
    // form: FORM,
    // validate,
    enableReinitialize: true
    // destroyOnUnmount: false
  })(ProcFormView)
);
