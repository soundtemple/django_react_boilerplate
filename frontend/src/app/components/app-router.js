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
          <Switch>
            <Route
              path="/"
              render={(props) => <HomePage {...props} />}
              exact
            />
            <Route
              path="/news"
              render={(props) => <ArticleListView {...props} />}
            />
            <Route
              path="/music"
              render={(props) => <MusicCollection {...props} />}
            />
            <Route
              path="/software"
              render={(props) => <SoftwareCollection {...props} />}
            />
            <Route
              path="/cart"
              render={(props) => <ShoppingCart {...props} />}
            />
            <Route
              path="/account"
              render={(props) => <UserAccount {...props} />}
            />
            <Route
              path="/notifications"
              render={(props) => <Notifications {...props} />}
            />
            <Route
              path="/contact"
              render={(props) => <ContactForm {...props} />}
            />
            <Route component={RoutNoteFound} />
          </Switch>
        </Grid>
      </Grid>
    </main>
  );
};

export default AppRouter;
