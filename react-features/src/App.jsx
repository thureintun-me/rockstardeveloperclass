import React from "react";
import Home from "./Home";
import { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";
import { useEffect } from "react";
import { useMemo } from "react";

const expensiveFunc = () => {
  console.log("Func Call");
  return "result";
};
export default function App() {
  const { mode } = useContext(ThemeContext);

  useEffect(() => {
    console.log("Running Effect...");
  }, []);

  const result = useMemo(() => {
    return expensiveFunc();
  }, []);

  console.log("Result", result);

  return (
    <div
      style={{
        background: mode === "dark" ? "black" : "white",
        color: mode === "dark" ? "white" : "black",
        minHeight: 1500,
      }}
    >
      <Home />
    </div>
  );
}
