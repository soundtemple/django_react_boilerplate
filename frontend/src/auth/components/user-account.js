import React from "react";
import SignIn from "./signin";
import Register from "./register";
import UserProfile from "./user-profile";
import Grid from "@material-ui/core/Grid";

const UserAccount = (props) => {
  const { onFlash } = props;
  const loggedIn = localStorage["token"];
  const accountsEnabled = false;
  return (
    <>
      <h2>.: USER ACCOUNT :.</h2>
      {!accountsEnabled &&
        <p>You dont need an account at Soundtemple</p>
      }
      {accountsEnabled &&
        <>
          {!loggedIn && (
            <>
              <Grid item xs={12} md={6} lg={4}>
                <SignIn onFlash={onFlash} />
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <Register onFlash={onFlash} />
              </Grid>
            </>
          )}
          {loggedIn && (
            <Grid item xs={12} md={6} lg={4}>
              <UserProfile onFlash={onFlash} />
            </Grid>
          )}
        </>
      }
    </>
  );
};

export default UserAccount;
