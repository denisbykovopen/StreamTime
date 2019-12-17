import { reduxForm } from "redux-form";
import { connect } from "react-redux";
import SignUpFormViewEnd from './SignUpFormViewEnd';

const FORM = "signUp";

const validate = ({ 
  // name, 
  // location, 
  // occupation, 
  // yearsOfExpirience, 
  email, 
  password
 }) => {
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
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
  })(SignUpFormViewEnd)
);
