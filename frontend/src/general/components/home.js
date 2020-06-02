import React from "react";
import AppContext from "../../app/components/app-context";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

const HomePage = (props) => {
  const { user, fixedHeightPaper } = React.useContext(AppContext);
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Paper className={fixedHeightPaper}>
          <h2>Latest from Soundtemple</h2>
          <p>Hey {user.username},</p>
          <p>Some stuff in the news</p>
          <p>Some new music</p>
          <p>Some new software</p>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default HomePage;
