import React from "react";
import { Route, Switch } from "react-router-dom";
import Notifications from "../../general/components/notifications";
import UserAccount from "../../auth/components/user-account";
import HomePage from "../../general/components/home";
import ArticleListView from "../../blog/components/articleList";
import PortfolioListView from "../../collections/components/collectionList";
import ShoppingCart from "../../store/components/cart";
import ContactForm from "../../general/components/contact";
import ProductListView from "../../store/components/productList";

const AppRouter = (props) => {
  return (
    <main>
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/news" component={ArticleListView} />
        <Route path="/music" component={PortfolioListView} />
        <Route path="/software" component={PortfolioListView} />
        <Route path="/shop" component={ProductListView} />
        <Route path="/cart" component={ShoppingCart} />
        <Route path="/account" component={UserAccount} />
        <Route path="/notifications" component={Notifications} />
        <Route path="/contact" component={ContactForm} />
        <Route component={Error} />
      </Switch>
    </main>
  );
};

export default AppRouter;
