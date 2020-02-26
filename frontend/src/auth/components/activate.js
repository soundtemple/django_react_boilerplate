import React from "react";
import axios from "../../utils/axios-wrapper";
import { Formik, Form } from "formik";
import Button from "@material-ui/core/Button";

const Activate = props => {
  const { onFlash } = props;
  return (
    <>
      <Formik
        initialValues={{
          uid: "",
          token: ""
        }}
        onSubmit={(values, actions) => {
          const url = "http://localhost:9000/auth/users/activation/";
          axios
            .post(url, values)
            .then(resp => {
              console.log(`ACTIVATED:${resp}`);
              onFlash({
                severity: "success",
                message: "Activation complete! Login with your user details."
              });
            })
            .catch(error => {
              onFlash({
                severity: "error",
                message: "There was an error processing your request"
              });
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
            <h3>Activate</h3>
            <Button disabled={!isValid} type="submit" label="Activate">
              Activate
            </Button>
            {/* <Debug /> */}
          </Form>
        )}
      </Formik>
    </>
  );
};

export default Activate;
