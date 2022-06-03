import * as React from "react";
import Login from "./pages/Login";
import Select from "./pages/Select";
import Table from "./pages/Table";
import themeProvider from "./helper/themeProvider";

export default function _() {
  const [gameID, setGameID] = React.useState(0);
  const [playerName, setPlayerName] = React.useState(0);
  const [page, setPage] = React.useState(0);
  const [scores, setScores] = React.useState();

  function firstChild(game_id, player_name) {
    setGameID(game_id);
    setPlayerName(player_name);
    setPage(1);
  }

  function secondChild(data) {
    setScores(data);
    setPage(2);
  }

  function thirdChildBackward() {
    setPage(1);
  }

  function thirdChildForward() {
    setPage(3);
  }

  var theme = themeProvider();
  var pages = [
    <Login theme={theme} line={firstChild}></Login>,
    <Select
      theme={theme}
      gameid={gameID}
      playername={playerName}
      line={secondChild}
    ></Select>,
    <Table
      theme={theme}
      scores={scores}
      forward={thirdChildForward}
      backward={thirdChildBackward}
    ></Table>,
  ];

  return pages[page];
}
