import Login from "./pages/Login";
import Select from "./pages/Select";
import Table from "./pages/Table";
import themeProvider from "./helper/themeProvider";

export default function App() {
  var mode = "create";
  var theme = themeProvider();
  var pages = [
    <Login theme={theme} mode={mode}></Login>,
    <Select theme={theme}></Select>,
    <Table theme={theme}></Table>,
  ];
  var page = 1;

  return pages[page];
}
