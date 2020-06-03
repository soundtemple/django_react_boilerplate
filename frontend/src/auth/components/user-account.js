import React from "react";
import SignIn from "./signin";
import Register from "./register";
import UserProfile from "./user-profile";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

const UserAccount = (props) => {
  const { onFlash } = props;
  const loggedIn = localStorage["token"];
  return (
    <>
      <h2>User account</h2>
      {!loggedIn && (
        <>
          <Grid item xs={12} md={6} lg={4}>
            <Paper className="">
              <SignIn onFlash={onFlash} />
            </Paper>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Paper className="">
              <Register onFlash={onFlash} />
            </Paper>
          </Grid>
        </>
      )}
      {loggedIn && (
        <Grid item xs={12} md={6} lg={4}>
          <Paper className="">
            <UserProfile onFlash={onFlash} />
          </Paper>
        </Grid>
      )}
    </>
  );
};

export default UserAccount;
