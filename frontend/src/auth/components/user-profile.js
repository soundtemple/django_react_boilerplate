import React from "react";
import axios from "../../utils/axios-wrapper";
import { Formik, Form } from "formik";
import Button from "@material-ui/core/Button";
import AppContext from "../../app/components/app-context";

const UserProfile = (props) => {
  const { onFlash } = props;
  const { user, updateUser } = React.useContext(AppContext);
  function handleLogout() {
    const url = "http://localhost:9000/auth/token/logout/";
    axios
      .post(url)
      .then((resp) => {
        localStorage.removeItem("token");
        updateUser();
        console.log("LOGGED OUT");
      })
      .catch((error) => {
        console.log(`ERRORS: ${error}`);
      });
  }

  function handleShowUser() {
    const url = "http://localhost:9000/auth/users/me/";
    axios
      .get(url)
      .then((resp) => {
        console.log(resp.data);
        console.log(`USER: ${resp.data.username}`);
        console.log(`USER: ${resp.data.email}`);
      })
      .catch((error) => {
        console.log(`ERRORS: ${error}`);
      });
  }
  return (
    <>
      <Formik
        initialValues={{
          uid: "",
          token: "",
        }}
        onSubmit={(values, actions) => {
          const url = "http://localhost:9000/auth/users/activation/";
          axios
            .post(url, values)
            .then((resp) => {
              console.log(`ACTIVATED:${resp}`);
              onFlash({
                severity: "success",
                message: "Activation complete! Login with your user details.",
              });
            })
            .catch((error) => {
              onFlash({
                severity: "error",
                message: "There was an error processing your request",
              });
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
              <h3>User profile</h3>
              <p>Username: {user.username}</p>
              <p>Email: {user.email}</p>
              <p>Token: {localStorage.token}</p>
              <h3>Activate</h3>
              <Button onClick={() => handleLogout()}>Logout</Button>
              <Button onClick={() => handleShowUser()}>Show User</Button>
              <Button disabled={!isValid} type="submit" label="Activate">
                Activate
              </Button>
              {/* <Debug /> */}
            </Form>
          )
        }
      </Formik>
    </>
  );
};

export default UserProfile;
