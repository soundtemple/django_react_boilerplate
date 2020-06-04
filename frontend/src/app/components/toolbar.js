import React from "react";
import clsx from "clsx";
import NotificationsIcon from "@material-ui/icons/Notifications";
import PersonIcon from "@material-ui/icons/Person";
import Badge from "@material-ui/core/Badge";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import { Link } from "react-router-dom";

const ToolBar = (props) => {
  const { classes, onDrawerOpen, drawState } = props;
  // const { updateUser } = React.useContext(AppContext);
  return (
    <Toolbar className={classes.toolbar}>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="open drawer"
        onClick={onDrawerOpen}
        className={clsx(
          classes.menuButton,
          drawState && classes.menuButtonHidden
        )}
      >
        <MenuIcon color="primary" />
      </IconButton>
      <Typography
        component="h1"
        variant="h6"
        color="primary"
        noWrap
        className={classes.title}
      >
        SOUNDTEMPLE
      </Typography>
      <Link to="/notifications">
        <IconButton color="primary">
          <Badge badgeContent={4} color="secondary">
            <NotificationsIcon color="primary" />
          </Badge>
        </IconButton>
      </Link>
      <IconButton color="primary">
        <Link to="/account">
          <PersonIcon color="primary" />
        </Link>
      </IconButton>
    </Toolbar>
  );
};

export default ToolBar;
