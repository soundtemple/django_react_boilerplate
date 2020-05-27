import React, { useState } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import PersonIcon from "@material-ui/icons/Person";
import { MenuItems } from "./menu-items";
import Footer from "./footer";
import ArticleListView from "../../blog/components/articleList";
import PortfolioListView from "../../portfolio/components/portfolioList";
import ProductListView from "../../store/components/productList";
import ShoppingCart from "../../store/components/cart";
import ContactForm from "../../general/components/contact";
import HomePage from "../../general/components/home";
import SignIn from "../../auth/components/signin";
import Logout from "../../auth/components/logout";
import Register from "../../auth/components/register";
import Activate from "../../auth/components/activate";
import blueGrey from "@material-ui/core/colors/blueGrey";
import Notifications from "../../general/components/notifications";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: blueGrey[700],
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: "none",
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    height: 380,
  },
  articlesHeight: {
    height: 300,
  },
}));

const Dashboard = (props) => {
  const { onFlash } = props;
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  const fixedHeightArticles = clsx(classes.paper, classes.articlesHeight);
  const [currentMenu, setCurrentMenu] = useState("home");

  const handleMenuChange = (selection) => {
    console.log("TIME FOR A MENU CHANGE", selection);
    setCurrentMenu(selection);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="absolute"
        className={clsx(classes.appBar, open && classes.appBarShift)}
      >
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(
              classes.menuButton,
              open && classes.menuButtonHidden
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
          <IconButton
            color="inherit"
            onClick={() => handleMenuChange("notifications")}
          >
            <Badge badgeContent={4} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton
            color="inherit"
            onClick={() => handleMenuChange("account")}
          >
            <Badge color="secondary">
              <PersonIcon />
            </Badge>
          </IconButton>
          <IconButton
            color="inherit"
            onClick={() => handleMenuChange("logout")}
          >
            <Badge color="secondary">
              <ExitToAppIcon />
            </Badge>
          </IconButton>
        </Toolbar>
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
        <List>
          <MenuItems onMenuChange={handleMenuChange} />
        </List>
        <Divider />
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          {currentMenu === "home" && (
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Paper className={fixedHeightArticles}>
                  <HomePage />
                </Paper>
              </Grid>
            </Grid>
          )}
          {currentMenu === "news" && (
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Paper className={fixedHeightArticles}>
                  <ArticleListView />
                </Paper>
              </Grid>
            </Grid>
          )}
          {currentMenu === "portfolio" && (
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Paper className={fixedHeightArticles}>
                  <PortfolioListView />
                </Paper>
              </Grid>
            </Grid>
          )}
          {currentMenu === "store" && (
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Paper className={fixedHeightArticles}>
                  <ProductListView />
                </Paper>
              </Grid>
            </Grid>
          )}
          {currentMenu === "cart" && (
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Paper className={fixedHeightArticles}>
                  <ShoppingCart />
                </Paper>
              </Grid>
            </Grid>
          )}
          {currentMenu === "account" && (
            <Grid container spacing={3}>
              <Grid item xs={12} md={6} lg={4}>
                <Paper className={fixedHeightPaper}>
                  <SignIn onFlash={onFlash} />
                </Paper>
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <Paper className={fixedHeightPaper}>
                  <Register onFlash={onFlash} />
                </Paper>
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <Paper className={fixedHeightPaper}>
                  <Activate onFlash={onFlash} />
                </Paper>
              </Grid>
            </Grid>
          )}
          {currentMenu === "contact" && (
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Paper className={fixedHeightArticles}>
                  <ContactForm />
                </Paper>
              </Grid>
            </Grid>
          )}
          {currentMenu === "notifications" && (
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Paper className={fixedHeightArticles}>
                  <Notifications />
                </Paper>
              </Grid>
            </Grid>
          )}
          {currentMenu === "logout" && (
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Paper className={fixedHeightArticles}>
                  <Logout />
                </Paper>
              </Grid>
            </Grid>
          )}
          <Box pt={4}>
            <Footer />
          </Box>
        </Container>
      </main>
    </div>
  );
};

export default Dashboard;
