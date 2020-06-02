import React from "react";
import clsx from "clsx";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "./toolbar";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import { MenuItemsMain, MenuItemsSecondary } from "./menu-items";
import IconButton from "@material-ui/core/IconButton";

const Navigation = (props) => {
  const { useStyles } = props;
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <AppBar
        position="absolute"
        className={clsx(classes.appBar, open && classes.appBarShift)}
      >
        <Toolbar
          useState={useStyles}
          classes={classes}
          onDrawerOpen={handleDrawerOpen}
          drawState={open}
        ></Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <Paper elevation={0}>
          <MenuItemsMain />
          <Divider />
          <MenuItemsSecondary />
        </Paper>
        <Divider />
      </Drawer>
    </>
  );
};

export default Navigation;
