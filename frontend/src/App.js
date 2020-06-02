import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./app/components/app-router";
import Navigation from "./app/components/navigation";
import "./App.css";
import FlashMessage from "./utils/flash-message";
import AppContext from "./app/components/app-context";
import axios from "./utils/axios-wrapper";
import Footer from "./app/components/footer";
import blueGrey from "@material-ui/core/colors/blueGrey";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";

import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    type: "light",
  },
});

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

const App = (props) => {
  const classes = useStyles();
  const [flashContent, setFlashContent] = useState();
  const [showFlash, setShowFlash] = useState(false);
  const handleFlashMessage = (flashContent) => {
    setShowFlash(false);
    setFlashContent(flashContent);
    setShowFlash(true);
  };
  useEffect(() => {
    if (localStorage.token && !appState.user.username) {
      console.log("getting some user info....");
      updateUser(localStorage.token);
    }
  });
  const updateUser = (token) => {
    if (token) {
      const url = "http://localhost:9000/auth/users/me/";
      axios
        .get(url)
        .then((resp) => {
          setAppState((appState) => ({
            ...appState,
            user: resp.data,
          }));
        })
        .catch((error) => {
          console.log(`ERRORS: ${error}`);
        });
    } else {
      setAppState((appState) => ({
        ...appState,
        user: {
          name: "",
          email: "",
          username: "",
        },
      }));
    }
  };

  const [appState, setAppState] = useState({
    user: {
      name: "",
      email: "",
      username: "",
    },
    updateUser,
    currentMenu: "home",
  });
  return (
    <BrowserRouter>
      <AppContext.Provider value={appState}>
        <div className="App">
          <MuiThemeProvider theme={theme}>
            {showFlash && <FlashMessage {...flashContent} />}
            <div className={classes.root}>
              <CssBaseline />
              <Navigation onFlash={handleFlashMessage} useStyles={useStyles} />
              <main className={classes.content}>
                <Container maxWidth="lg" className={classes.container}>
                  <Box pt={4}>
                    <AppRouter />
                  </Box>
                  <Footer />
                </Container>
              </main>
            </div>
          </MuiThemeProvider>
        </div>
      </AppContext.Provider>
    </BrowserRouter>
  );
};

export default App;
