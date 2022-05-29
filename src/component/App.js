import React from "react";
import Login from "./Login";
import Select from "./Select";
import Table from "./Table";
//import api from "../logic/api.js";
import "./App.css";

export default class App extends React.Component {
  state = {
    player_name: "test1",
    key: "test2",
  };
  render() {
    return (
      <div className="App">
        <Login></Login>
        <Select></Select>
        <Table></Table>
      </div>
    );
  }
}
