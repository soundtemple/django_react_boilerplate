import React from "react";
import axios from "../../utils/axios-wrapper";
import { Formik, Form, Field } from "formik";
import * as yup from "yup"; // for everything
import { Debug } from "../../utils/Debug";
import TextField from "../../utils/TextField";
import Button from "@material-ui/core/Button";

// Login form with Formik and Yup
const SignUpSchema = yup.object().shape({
  username: yup
    .string()
    // .email("Not a valid email")
    .required("Username is required"),
  password: yup
    .string()
    .required("C'mon password is required")
    .min(3, "Must be > 3 characters")
    .max(8, "Must be <= 8 characters")
});

function handleLogout() {
  const url = "http://localhost:9000/auth/token/logout/";
  axios
    .post(url)
    .then(resp => {
      console.log("LOGGED OUT");
    })
    .catch(error => {
      console.log(`ERRORS: ${error}`);
    });
}

function handleShowUser() {
  const url = "http://localhost:9000/auth/users/me/";
  axios
    .get(url)
    .then(resp => {
      console.log(resp.data);
      console.log(`USER: ${resp}`);
    })
    .catch(error => {
      console.log(`ERRORS: ${error}`);
    });
}

const SignIn = props => {
  return (
    <>
      <Formik
        initialValues={{
          username: "timwalter",
          password: "123"
        }}
        validationSchema={SignUpSchema}
        validateOnBlur={true}
        validateOnChange={true}
        onSubmit={(values, actions) => {
          const url = "http://localhost:9000/auth/token/login/";
          axios
            .post(url, values)
            .then(resp => {
              axios.defaults.headers.common[
                "Authorization"
              ] = `Token ${resp.data.auth_token}`;
              console.log(`LOGGED IN: token ${resp.data.auth_token}`);
            })
            .catch(error => {
              if (error.response && error.response.status === 400) {
                actions.setErrors(error.response.data.errors);
              }
              actions.setSubmitting(false);
            });
        }}
      >
        {// these goodies are passed in a Formik component:
        //  - values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting
        // we can add to an input field manually like onChange={handleBlur}
        // in a Formik Field they are passed already in the formik object  like my input component
        // TextField component extracts the repititive aspects of the formik Field Component
        ({ isValid, errors, touched }) => (
          <Form>
            <Field name="username" label="Username" component={TextField} />
            <Field name="password" label="Password" component={TextField} />
            <Button disabled={!isValid} type="submit">
              Sign in
            </Button>
            {/* <Debug /> */}
          </Form>
        )}
      </Formik>
      <Button onClick={() => handleLogout()}>Logout</Button>
      <Button onClick={() => handleShowUser()}>Show User</Button>
    </>
  );
};

export default SignIn;
