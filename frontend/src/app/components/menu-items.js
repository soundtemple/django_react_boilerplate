import React from "react";
import { Link } from "react-router-dom";
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
import AppContext from "../../app/components/app-context";

export const MenuItems = (props) => {
  const { handleMenuChange } = React.useContext(AppContext);
  return (
    <div>
      <ListItem>
        <Link to="/news">
          <ListItemIcon>
            <DashboardIcon />
            <ListItemText primary="Soundtemple" />
          </ListItemIcon>
        </Link>
      </ListItem>
      <ListItem>
        <Link to="/news">
          <ListItemIcon>
            <BallotIcon />
          </ListItemIcon>
          <ListItemText primary="News" />
        </Link>
      </ListItem>
      <ListItem>
        <Link to="/music">
          <ListItemIcon>
            <BarChartIcon />
            <ListItemText primary="Music" />
          </ListItemIcon>
        </Link>
      </ListItem>
      <ListItem>
        <Link to="/software">
          <ListItemIcon>
            <LayersIcon />
          </ListItemIcon>
          <ListItemText primary="Software" />
        </Link>
      </ListItem>
      <ListItem>
        <Link to="/account">
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="Account" />
        </Link>
      </ListItem>
      <ListItem>
        <Link to="/cart">
          <ListItemIcon>
            <ShoppingCartIcon />
          </ListItemIcon>
          <ListItemText primary="Cart" />
        </Link>
      </ListItem>
      <ListItem>
        <Link to="/contact">
          <ListItemIcon>
            <ContactMailIcon />
          </ListItemIcon>
          <ListItemText primary="Contact" />
        </Link>
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
