import React, { useState } from "react";
import AppContext from "../../app/components/app-context";
import axios from "../../utils/axios-wrapper";
import { Formik, Form, Field } from "formik";
import * as yup from "yup"; // for everything
import TextField from "../../utils/TextField";
import Button from "@material-ui/core/Button";

// Login form with Formik and Yup
const SignInSchema = yup.object().shape({
  email: yup.string().email("Not a valid email").required("Email is required"),
  password: yup
    .string()
    .required("C'mon password is required")
    .min(3, "Must be > 3 characters")
    .max(12, "Must be <= 12 characters"),
});

const SignIn = (props) => {
  const { onFlash } = props;
  const [loggedIn, setLoggedIn] = useState(localStorage["token"]);
  const { updateUser } = React.useContext(AppContext);

  function handleForgotPassword() {
    // route to forgot password form
    console.log("Routing to forgot password form");
  }

  return (
    <>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={SignInSchema}
        validateOnBlur={true}
        validateOnChange={true}
        onSubmit={(values, actions) => {
          const url = "http://localhost:9000/auth/token/login/";
          axios
            .post(url, values)
            .then((resp) => {
              localStorage.setItem("token", resp.data.auth_token);
              console.log(`LOGGED IN: resp ${resp.data}`);
              updateUser(resp.data);
              setLoggedIn(resp.data.auth_token);
              // window.location.reload(); or redirect somewhere???
            })
            .catch((error) => {
              if (error.response && error.response.status === 400) {
                let message = "There was an error processing your request";
                if (error.response.data.non_field_errors) {
                  message = error.response.data.non_field_errors;
                }
                onFlash({
                  severity: "error",
                  message: message,
                });
                actions.setErrors({ email: message });
                setLoggedIn(false);
              } else {
                onFlash({
                  severity: "error",
                  message: "There was a problem processing your request",
                });
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
              {!loggedIn && (
                <>
                  <h3>Sign in</h3>
                  <Field name="email" label="Email" component={TextField} />
                  <Field
                    name="password"
                    label="Password"
                    type="password"
                    component={TextField}
                    autoComplete="off"
                  />
                  <Button disabled={!isValid} type="submit">
                    Sign in
                  </Button>
                </>
              )}
              {/* <Debug /> */}
            </Form>
          )
        }
      </Formik>
      <Button onClick={() => handleForgotPassword()}>Forgot password</Button>
    </>
  );
};

export default SignIn;
