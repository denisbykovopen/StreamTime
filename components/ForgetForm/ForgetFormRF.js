import { reduxForm } from "redux-form";
import ForgetFormView from "./ForgetFormView";
import { connect } from "react-redux";

const FORM = "forget";

const validate = ({ email }) => {
  const errors = {};
  if (email === undefined) {
    errors.email = "Mandatory field";
    // }
  } else if (email !== null && email.trim() === "") {
    errors.email = "Cannot be empty";
  }
  if (email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
    errors.email = "example@mail.com";
  }
  return errors;
};

export default connect(
  null,
  null
)(
  reduxForm({
    form: FORM,
    validate,
    enableReinitialize: true,
    destroyOnUnmount: false
  })(ForgetFormView)
);
