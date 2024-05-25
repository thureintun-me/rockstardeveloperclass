import { ThemeProvider } from "@emotion/react";
import React, { createContext, useContext, useMemo, useState } from "react";
import App from "./App";
import { CssBaseline, createTheme } from "@mui/material";

export const AppContext = createContext();

export default function ThemedApp() {
  const [mode, setMode] = useState("dark");

  const theme = useMemo(() => {
    return createTheme({
      palette: {
        mode: mode,
      },
    });
  }, [mode]);

  return (
    <ThemeProvider theme={theme}>
      <AppContext.Provider value={{ mode, setMode }}>
        <App />
        <CssBaseline />
      </AppContext.Provider>
    </ThemeProvider>
  );
}
