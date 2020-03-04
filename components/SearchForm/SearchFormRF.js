import { reduxForm } from "redux-form";
import SearchFormView from "./SearchFormView";
import { connect } from "react-redux";

<<<<<<< HEAD
// const FORM = "search";

const validate = ({ name }) => {
  const errors = {};
  if (name !== null && name !== undefined && name.trim() === "") {
    errors.name = "Cannot be empty";
  }

=======
const FORM = "search";

const validate = ({ name }) => {
  const errors = {};
   if (name !== null && name !== undefined && name.trim() === "") {
    errors.name = "Cannot be empty";
  }
 
>>>>>>> ef6708b5b32b815daa85f564a5152695991bcfb6
  return errors;
};

export default connect(
  null,
  null
)(
  reduxForm({
<<<<<<< HEAD
    // form: FORM,
    // onChange: (values, dispatch, props, previousValues) => {
    //   props.submit();
    // },
    validate
    // enableReinitialize: true,
    // destroyOnUnmount: false
=======
    form: FORM,
    // onChange: (values, dispatch, props, previousValues) => {
    //   props.submit();
    // },
    validate,
    enableReinitialize: true,
    destroyOnUnmount: false
>>>>>>> ef6708b5b32b815daa85f564a5152695991bcfb6
  })(SearchFormView)
);
