import React from "react";
import Login from "./Login";
import Select from "./Select";
import Table from "./Table";
import "./App.css";

export default class App extends React.Component {
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
