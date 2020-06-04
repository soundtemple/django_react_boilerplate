import React from "react";
import { ListItemLink } from "../theme/list-item-link";
import List from "@material-ui/core/List";
import DashboardIcon from "@material-ui/icons/Dashboard";
import { theme } from "../../app/theme/theme-utils";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PersonIcon from "@material-ui/icons/Person";
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
      <ListItemLink to="/account" primary="Account" icon={<PersonIcon />} />
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
  const themeChange = () => {
    theme.palette.type === "light"
      ? (window.localStorage["stThemeStyle"] = "dark")
      : (window.localStorage["stThemeStyle"] = "light");
    window.location.reload();
  };
  return (
    <List aria-label="secondary">
      <button onClick={() => themeChange()}>theme</button>
    </List>
  );
};
