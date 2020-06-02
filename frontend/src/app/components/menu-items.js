import React from "react";
import { ListItemLink } from "../theme/list-item-link";
import List from "@material-ui/core/List";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PeopleIcon from "@material-ui/icons/People";
import BallotIcon from "@material-ui/icons/Ballot";
import BarChartIcon from "@material-ui/icons/BarChart";
import LayersIcon from "@material-ui/icons/Layers";
import ContactMailIcon from "@material-ui/icons/ContactMail";

export const MenuItemsMain = (props) => {
  return (
    <List aria-label="main">
      <ListItemLink to="/" primary="Soundtemple" icon={<DashboardIcon />} />
      <ListItemLink to="/news" primary="News" icon={<BallotIcon />} />
      <ListItemLink to="/music" primary="Music" icon={<BarChartIcon />} />
      <ListItemLink to="/software" primary="Software" icon={<LayersIcon />} />
      <ListItemLink to="/account" primary="Account" icon={<PeopleIcon />} />
      <ListItemLink to="/cart" primary="Cart" icon={<ShoppingCartIcon />} />
      <ListItemLink
        to="/contact"
        primary="Contact"
        icon={<ContactMailIcon />}
      />
    </List>
  );
};

export const MenuItemsSecondary = (props) => {
  return (
    <List aria-label="secondary">
      <ListItemLink to="/" primary="Trash" />
      <ListItemLink to="/" primary="Spam" />
    </List>
  );
};
