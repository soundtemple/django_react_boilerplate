import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

const ContactForm = (props) => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Paper>
          <h2>Contact Soundtemple</h2>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default ContactForm;
