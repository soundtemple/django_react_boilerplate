import React from "react";
import { ListItemLink } from "../theme/list-item-link";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DashboardIcon from "@material-ui/icons/Dashboard";
import { theme } from "../../app/theme/theme-utils";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PersonIcon from "@material-ui/icons/Person";
import BallotIcon from "@material-ui/icons/Ballot";
import AlbumIcon from "@material-ui/icons/Album";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import AppsIcon from "@material-ui/icons/Apps";
import PaletteIcon from "@material-ui/icons/Palette";

export const MenuItemsMain = (props) => {
  return (
    <List aria-label="main">
      <ListItemLink to="/" primary="Soundtemple" icon={<DashboardIcon />} />
      <ListItemLink to="/news" primary="News" icon={<BallotIcon />} />
      <ListItemLink to="/music" primary="Music" icon={<AlbumIcon />} />
      <ListItemLink to="/software" primary="Software" icon={<AppsIcon />} />
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
  const altTheme = theme.palette.type === "light" ? "dark" : "light";
  const themeChange = () => {
    window.localStorage["stThemeStyle"] = altTheme;
    window.location.reload();
  };
  return (
    <List aria-label="secondary">
      <ListItem button onClick={() => themeChange()}>
        <ListItemIcon>
          <PaletteIcon />
        </ListItemIcon>
        <ListItemText
          primary={`${
            altTheme.charAt(0).toUpperCase() + altTheme.slice(1)
          } mode`}
        />
      </ListItem>
    </List>
  );
};
