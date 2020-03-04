import { reduxForm } from "redux-form";
import AddToolFormView from "./AddToolFormView";
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
  })(AddToolFormView)
);
