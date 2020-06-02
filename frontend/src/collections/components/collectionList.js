import React from "react";
import AppContext from "../../app/components/app-context";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

const CollectionListView = (props) => {
  const { fixedHeightPaper } = React.useContext(AppContext);
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Paper className={fixedHeightPaper}>
          <h2>"COLLECTION NAME"</h2>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default CollectionListView;
