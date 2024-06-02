import { ThemeProvider } from "@emotion/react";
import React, { createContext, useContext, useMemo, useState } from "react";
import App from "./App";
import { CssBaseline, createTheme } from "@mui/material";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Edit from "./Edit";
import Template from "./Template";

export const AppContext = createContext();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Template />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/edit/:id",
        element: <Edit />,
      },
    ],
  },
  // {
  //   path: "/edit/:id",
  //   element: <Edit />,
  // },
]);
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
        <RouterProvider router={router} />
        <CssBaseline />
      </AppContext.Provider>
    </ThemeProvider>
  );
}
