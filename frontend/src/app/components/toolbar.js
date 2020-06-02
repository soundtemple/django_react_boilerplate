import React from "react";
import clsx from "clsx";
import NotificationsIcon from "@material-ui/icons/Notifications";
import PersonIcon from "@material-ui/icons/Person";
import Badge from "@material-ui/core/Badge";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";

const ToolBar = (props) => {
  const { classes, onDrawerOpen, drawState } = props;
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
        <MenuIcon />
      </IconButton>
      <Typography
        component="h1"
        variant="h6"
        color="inherit"
        noWrap
        className={classes.title}
      >
        Soundtemple
      </Typography>
      <IconButton color="inherit">
        <Badge badgeContent={4} color="secondary">
          <NotificationsIcon />
        </Badge>
      </IconButton>
      <IconButton color="inherit">
        <Badge color="secondary">
          <PersonIcon />
        </Badge>
      </IconButton>
    </Toolbar>
  );
};

export default ToolBar;
