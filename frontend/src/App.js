import React, { useState } from "react";
import Dashboard from "./app/components/dashboard";
import "./App.css";
import FlashMessage from "./utils/flash-message";

import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    type: "light"
  }
});

const App = props => {
  const [flashContent, setFlashContent] = useState();
  const [showFlash, setShowFlash] = useState(false);
  const handleFlashMessage = flashContent => {
    setShowFlash(false);
    setFlashContent(flashContent);
    setShowFlash(true);
  };
  return (
    <div className="App">
      <MuiThemeProvider theme={theme}>
        {showFlash && <FlashMessage {...flashContent} />}
        <div>
          <CssBaseline />
          <Dashboard onFlash={handleFlashMessage} />
        </div>
      </MuiThemeProvider>
    </div>
  );
};

export default App;
