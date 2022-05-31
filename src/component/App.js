import React from "react";
import Login from "./pages/Login";
import Select from "./pages/Select";
import Table from "./pages/Table";
import { createTheme } from "@mui/material/styles";

const defaultTheme = createTheme({
  palette: {
    primary: {
      light: "#4eba3c",
      main: "#008900",
      dark: "#005a00",
      contrastText: "#fff",
    },
  },
});

var mode = "create";

var pages = [
  <Login theme={defaultTheme} mode={mode}></Login>,
  <Select theme={defaultTheme} mode={mode}></Select>,
  <Table theme={defaultTheme} mode={mode}></Table>,
];
var page = 0;

export default function App() {
  return pages[page];
}
