import React from "react";
import Dashboard from "./app/components/dashboard";
import "./App.css";

import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    type: "light"
  }
});

const App = props => {
  return (
    <div className="App">
      <MuiThemeProvider theme={theme}>
        <div>
          <CssBaseline />
          <Dashboard />
        </div>
      </MuiThemeProvider>
    </div>
  );
};

export default App;
