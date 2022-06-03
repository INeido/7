import * as React from "react";
import Login from "./pages/Login";
import Select from "./pages/Select";
import Table from "./pages/Table";
import themeProvider from "./helper/themeProvider";

export default function _() {
  const [page, setPage] = React.useState(0);

  function firstChild(data) {
    setPage(data);
  }

  function secondChild(data) {
    setPage(data);
  }

  var theme = themeProvider();
  var pages = [
    <Login theme={theme} line={firstChild}></Login>,
    <Select theme={theme} line={secondChild}></Select>,
    <Table theme={theme}></Table>,
  ];

  return pages[page];
}
