import React from "react";
import Login from "./Login";
import Select from "./Select";
import Table from "./Table";
import { createTheme } from "@mui/material/styles";
//import api from "../logic/api.js";
import "./App.css";

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

export default class App extends React.Component {
  state = {
    key: "test2",
    game_id: "game_id",
    admin: "admin",
    player_name: "player_name",
    wonder_name: "wonder_name",
    wonder_mode: "wonder_mode",
    wonder: "wonder",
    money: "money",
    red: "red",
    blue: "blue",
    yellow: "yellow",
    green: "green",
    purple: "purple",
    black: "black",
    white: "white",
    armada0: "armada0",
    armada1: "armada1",
  };
  render() {
    return (
      <div className="App">
        <Login theme={defaultTheme}></Login>
      </div>
    );
  }
}
