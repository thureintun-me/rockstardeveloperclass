import { createContext } from "react";
import App from "./App";

export const ThemeContext = createContext();

import React from "react";
import { useState } from "react";

export default function ThemeProvider() {
  const [mode, setMode] = useState();
  return (
    <ThemeContext.Provider value={{ mode, setMode }}>
      <App />
    </ThemeContext.Provider>
  );
}
