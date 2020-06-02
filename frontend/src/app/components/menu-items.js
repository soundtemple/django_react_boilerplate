import React from "react";
import { Link } from "react-router-dom";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
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
      <ListItem>
        <Link to="/">
          <DashboardIcon />
        </Link>
      </ListItem>
      <ListItem>
        <Link to="/news">
          <BallotIcon />
        </Link>
      </ListItem>
      <ListItem>
        <Link to="/music">
          <ListItemIcon>
            <BarChartIcon />
          </ListItemIcon>
        </Link>
      </ListItem>
      <ListItem>
        <Link to="/software">
          <ListItemIcon>
            <LayersIcon />
          </ListItemIcon>
        </Link>
      </ListItem>
      <ListItem>
        <Link to="/account">
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
        </Link>
      </ListItem>
      <ListItem>
        <Link to="/cart">
          <ListItemIcon>
            <ShoppingCartIcon />
          </ListItemIcon>
        </Link>
      </ListItem>
      <ListItem>
        <Link to="/contact">
          <ListItemIcon>
            <ContactMailIcon />
          </ListItemIcon>
        </Link>
      </ListItem>
    </div>
  );
};
