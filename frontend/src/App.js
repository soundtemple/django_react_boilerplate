import React, { useState, useEffect } from "react";
import Dashboard from "./app/components/dashboard";
import "./App.css";
import FlashMessage from "./utils/flash-message";
import AppContext from "./app/components/app-context";
import axios from "./utils/axios-wrapper";

import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    type: "light",
  },
});

const App = (props) => {
  const [flashContent, setFlashContent] = useState();
  const [showFlash, setShowFlash] = useState(false);
  const handleFlashMessage = (flashContent) => {
    setShowFlash(false);
    setFlashContent(flashContent);
    setShowFlash(true);
  };
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
    }
  };
  const handleMenuChange = (menu) => {
    console.log("Changing menu: ", menu);
    setAppState((appState) => ({
      ...appState,
      currentMenu: menu,
    }));
  };

  const [appState, setAppState] = useState({
    user: {
      name: "",
      email: "",
      username: "",
    },
    updateUser,
    currentMenu: "home",
    handleMenuChange,
  });
  return (
    <AppContext.Provider value={appState}>
      <div className="App">
        <MuiThemeProvider theme={theme}>
          {showFlash && <FlashMessage {...flashContent} />}
          <div>
            <CssBaseline />
            <Dashboard onFlash={handleFlashMessage} />
          </div>
        </MuiThemeProvider>
      </div>
    </AppContext.Provider>
  );
};

export default App;
