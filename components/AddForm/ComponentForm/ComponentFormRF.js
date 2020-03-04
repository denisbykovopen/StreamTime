import { reduxForm } from "redux-form";
import ComponentFormView from "./ComponentFormView";
import { connect } from "react-redux";

// const FORM = `component${this.props.key}`;

// const validate = ({ email, password }) => {
//   const errors = {};
//   if (password === undefined) {
//     errors.password = "Mandatory field";
//     // }
//   } else if (password !== null && password.trim() === "") {
//     errors.password = "Cannot be empty";
//   }
//   if (email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
//     errors.email = "example@mail.com";
//   }
//   return errors;
// };

<<<<<<< HEAD
// export default connect(
//   null,
//   null
// )(
//   reduxForm({
//     // form: FORM,
//     // validate,
//     enableReinitialize: true
//     // destroyOnUnmount: false
//   })(ComponentFormView)
// );

export default reduxForm({
  // form: FORM,
  // validate,
  enableReinitialize: true
  // destroyOnUnmount: false
})(ComponentFormView);
=======
export default connect(
  null,
  null
)(
  reduxForm({
    // form: FORM,
    // validate,
    enableReinitialize: true,
    // destroyOnUnmount: false
  })(ComponentFormView)
);
>>>>>>> ef6708b5b32b815daa85f564a5152695991bcfb6
