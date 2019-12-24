import { reduxForm } from "redux-form";
import SearchFormView from "./SearchFormView";
import { connect } from "react-redux";

const FORM = "search";

const validate = ({ name }) => {
  const errors = {};
   if (name !== null && name !== undefined && name.trim() === "") {
    errors.name = "Cannot be empty";
  }
 
  return errors;
};

export default connect(
  null,
  null
)(
  reduxForm({
    form: FORM,
    // onChange: (values, dispatch, props, previousValues) => {
    //   props.submit();
    // },
    validate,
    enableReinitialize: true,
    destroyOnUnmount: false
  })(SearchFormView)
);
