import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PeopleIcon from "@material-ui/icons/People";
import BallotIcon from "@material-ui/icons/Ballot";
import BarChartIcon from "@material-ui/icons/BarChart";
import LayersIcon from "@material-ui/icons/Layers";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import AssignmentIcon from "@material-ui/icons/Assignment";

export const MenuItems = (props) => {
  return (
    <div>
      <ListItem button onClick={() => props.onMenuChange("home")}>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Soundtemple" />
      </ListItem>
      <ListItem button onClick={() => props.onMenuChange("news")}>
        <ListItemIcon>
          <BallotIcon />
        </ListItemIcon>
        <ListItemText primary="News" />
      </ListItem>
      <ListItem button onClick={() => props.onMenuChange("portfolio")}>
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
        <ListItemText primary="Music" />
      </ListItem>
      <ListItem button onClick={() => props.onMenuChange("store")}>
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText primary="Software" />
      </ListItem>
      <ListItem button onClick={() => props.onMenuChange("account")}>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Account" />
      </ListItem>
      <ListItem button onClick={() => props.onMenuChange("cart")}>
        <ListItemIcon>
          <ShoppingCartIcon />
        </ListItemIcon>
        <ListItemText primary="Cart" />
      </ListItem>
      <ListItem button onClick={() => props.onMenuChange("contact")}>
        <ListItemIcon>
          <ContactMailIcon />
        </ListItemIcon>
        <ListItemText primary="Contact" />
      </ListItem>
    </div>
  );
};

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Saved reports</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItem>
  </div>
);
