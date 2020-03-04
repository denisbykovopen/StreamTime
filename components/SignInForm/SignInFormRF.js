import { reduxForm } from "redux-form";
import SignInFormView from "./SignInFormView";
import { connect } from "react-redux";

const FORM = "signIn";

const validate = ({ email, password }) => {
  const errors = {};
  if (password === undefined) {
    errors.password = "Mandatory field";
    // }
  } else if (password !== null && password.trim() === "") {
    errors.password = "Cannot be empty";
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
  })(SignInFormView)
);
