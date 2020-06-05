import React from "react";
import { Route, Switch } from "react-router-dom";
import Notifications from "../../general/components/notifications";
import UserAccount from "../../auth/components/user-account";
import HomePage from "../../general/components/home";
import ArticleListView from "../../blog/components/articleList";
import MusicCollection from "../../collections/components/musicCollection";
import SoftwareCollection from "../../collections/components/softwareCollection";
import ShoppingCart from "../../store/components/cart";
import ContactForm from "../../general/components/contact";
import RoutNoteFound from "../../general/components/route-not-found";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import AppContext from "../../app/components/app-context";
import clsx from "clsx";

const AppRouter = (props) => {
  const { classes } = React.useContext(AppContext);
  return (
    <main>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={clsx(classes.paper, classes.fixedHeight)}>
            <Switch>
              <Route path="/" component={HomePage} exact />
              <Route path="/news" component={ArticleListView} />
              <Route path="/music" component={MusicCollection} />
              <Route path="/software" component={SoftwareCollection} />
              <Route path="/cart" component={ShoppingCart} />
              <Route path="/account" component={UserAccount} />
              <Route path="/notifications" component={Notifications} />
              <Route path="/contact" component={ContactForm} />
              <Route component={RoutNoteFound} />
            </Switch>
          </Paper>
        </Grid>
      </Grid>
    </main>
  );
};

export default AppRouter;
