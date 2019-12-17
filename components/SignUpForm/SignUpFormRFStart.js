import { reduxForm } from "redux-form";
import { connect } from "react-redux";
import SignUpFormViewStart from './SignUpFormViewStart';

const FORM = "signUp";

const validate = ({ 
  name, 
  location, 
  occupation, 
  yearsOfExpirience, 
  // email, 
  // password 
}) => {
  const errors = {};
  if (name === undefined) {
    errors.name = "Mandatory field";
    // }
  } else if (name !== null && name.trim() === "") {
    errors.name = "Cannot be empty";
  }
  if (location === undefined) {
    errors.location = "Mandatory field";
    // }
  } else if (location !== null && location.trim() === "") {
    errors.location = "Cannot be empty";
  }
  if (occupation === undefined) {
    errors.occupation = "Mandatory field";
    // }
  } else if (occupation !== null && occupation.trim() === "") {
    errors.occupation = "Cannot be empty";
  }
  if (yearsOfExpirience === undefined) {
    errors.yearsOfExpirience = "Mandatory field";
    // }
  } else if (yearsOfExpirience !== null && yearsOfExpirience.trim() === "") {
    errors.yearsOfExpirience = "Cannot be empty";
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
    // forceUnregisterOnUnmount: true,
  })(SignUpFormViewStart)
);
