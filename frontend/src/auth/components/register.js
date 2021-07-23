import React from "react";
import axios from "../../utils/axios-wrapper";
import { Formik, Form, Field } from "formik";
import * as yup from "yup"; // for everything
import TextField from "../../utils/TextField";
import Button from "@material-ui/core/Button";
import { Debug } from "../../forms/components/debug";

// Login form with Formik and Yup
const RegisterSchema = yup.object().shape({
  username: yup.string().required("Username is required"),
  email: yup.string().email("Not a valid email").required("Email is required"),
  password: yup
    .string()
    .required("C'mon password is required")
    .min(3, "Must be > 3 characters")
    .max(12, "Must be <= 12 characters"),
  re_password: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

const Register = (props) => {
  return (
    <>
      <Formik
        initialValues={{
          username: "",
          email: "",
          password: "",
          re_password: "",
        }}
        validationSchema={RegisterSchema}
        validateOnBlur={true}
        validateOnChange={true}
        onSubmit={(values, actions) => {
          const url = "http://localhost:9000/auth/users/";
          axios
            .post(url, values)
            .then((resp) => {
              console.log(`REGISTERED:${resp}`);
            })
            .catch((error) => {
              if (error.response && error.response.status === 400) {
                actions.setErrors(error.response.data);
              }
              actions.setSubmitting(false);
            });
        }}
      >
        {
          // these goodies are passed in a Formik component:
          //  - values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting
          // we can add to an input field manually like onChange={handleBlur}
          // in a Formik Field they are passed already in the formik object  like my input component
          // TextField component extracts the repititive aspects of the formik Field Component
          ({ isValid, errors, touched }) => (
            <Form>
              <h3>Register</h3>
              <Field name="username" label="Username" component={TextField} />
              <Field name="email" label="Email" component={TextField} />
              <Field
                name="password"
                label="Password"
                type="password"
                component={TextField}
                autoComplete="off"
              />
              <Field
                name="re_password"
                label="Confirm password"
                type="password"
                component={TextField}
                autoComplete="off"
              />
              <Button disabled={!isValid} type="submit" label="Register">
                Register
              </Button>
              <Debug />
            </Form>
          )
        }
      </Formik>
    </>
  );
};

export default Register;
