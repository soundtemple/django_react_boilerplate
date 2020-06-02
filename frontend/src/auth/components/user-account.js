import React from "react";
import AppContext from "../../app/components/app-context";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import SignIn from "./signin";
import Register from "./register";
import UserProfile from "./user-profile";

const UserAccount = (props) => {
  const { onFlash } = props;
  const loggedIn = localStorage["token"];
  const { fixedHeightPaper } = React.useContext(AppContext);
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Paper className={fixedHeightPaper}>
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
        </Paper>
      </Grid>
    </Grid>
  );
};

export default UserAccount;
