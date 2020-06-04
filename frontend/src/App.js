import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./app/components/app-router";
import Navigation from "./app/components/navigation";
import "./App.css";
import FlashMessage from "./utils/flash-message";
import AppContext from "./app/components/app-context";
import { theme, useStyles } from "./app/theme/theme-utils";
import axios from "./utils/axios-wrapper";
import Footer from "./app/components/footer";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider } from "@material-ui/core/styles";

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
    classes,
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
