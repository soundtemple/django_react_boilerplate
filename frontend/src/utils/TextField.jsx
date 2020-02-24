import React from "react";
import PropTypes from "prop-types";
import { ErrorMessage } from "formik";
import UITextField from "@material-ui/core/TextField";

// Abstraction of formik Field
// Just need to pass in name and label
// Formik Field component takes care of all field handlers - onChange, validation etc,
// Formik ErrorMessage component takes care of validation messages

const TextField = ({
  field, // { name, value, onChange, onBlur }
  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  ...props
}) => {
  const errorsExist = touched[field.name] && errors[field.name] ? true : false;
  return (
    <div className="field">
      <UITextField
        margin="normal"
        helperText=""
        error={errorsExist}
        name={props.name}
        label={props.label}
        {...field}
        {...props}
      />
      {touched[field.name] && errors[field.name] ? (
        <div className="alert alert-danger">
          <ErrorMessage name={field.name} />
        </div>
      ) : (
        <div className="p-2"></div>
      )}
    </div>
  );
};

TextField.propTypes = {
  label: PropTypes.string.isRequired
};

export default TextField;
