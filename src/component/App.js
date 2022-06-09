import * as React from "react";
import Login from "./pages/Login";
import Select from "./pages/Select";
import Table from "./pages/Table";
import themeProvider from "./helper/themeProvider";

export default function _() {
  const [playerID, setPlayerID] = React.useState(0);
  const [playerScores, setPlayerScores] = React.useState({});
  const [gameID, setGameID] = React.useState(0);
  const [playerName, setPlayerName] = React.useState(0);
  const [admin, setAdmin] = React.useState(0);
  const [page, setPage] = React.useState(0);

  function firstChild(player_id, game_id, player_name, player_scores, isadmin) {
    setPlayerID(player_id);
    setGameID(game_id);
    setPlayerName(player_name);
    setPlayerScores(player_scores);
    setAdmin(isadmin);
    setPage(1);
  }

  function secondChildBackward() {
    setPage(0);
  }

  function secondChildForward(player_scores) {
    setPlayerScores(player_scores);
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
      playerscores={playerScores}
      playerid={playerID}
      gameid={gameID}
      playername={playerName}
      forward={secondChildForward}
      backward={secondChildBackward}
    ></Select>,
    <Table
      theme={theme}
      admin={admin}
      gameid={gameID}
      playername={playerName}
      forward={thirdChildForward}
      backward={thirdChildBackward}
    ></Table>,
  ];

  return pages[page];
}
