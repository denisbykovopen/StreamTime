import { reduxForm } from "redux-form";
import ChangeFormView from "./ChangeFormView";
import { connect } from "react-redux";

const FORM = "change";

const validate = ({ passwordOne, passwordTwo }) => {
  const errors = {};
  if (passwordOne === undefined) {
    errors.passwordOne = "Mandatory field";
    // }
  } else if (passwordOne !== null && passwordOne.trim() === "") {
    errors.passwordOne = "Cannot be empty";
  }
  if (passwordTwo === undefined) {
    errors.passwordTwo = "Mandatory field";
    // }
  } else if (passwordTwo !== null && passwordTwo.trim() === "") {
    errors.passwordTwo = "Cannot be empty";
  }
  if (String(passwordTwo) != String(passwordOne)) {
      errors.passwordTwo = "Not equal"
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
  })(ChangeFormView)
);
