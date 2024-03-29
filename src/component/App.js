import * as React from "react";
import Login from "./pages/Login";
import Select from "./pages/Select";
import Table from "./pages/Table";
import Stats from "./pages/Stats";
import themeProvider from "./helper/themeProvider";

export default function _() {
  const [playerID, setPlayerID] = React.useState(0);
  const [playerScores, setPlayerScores] = React.useState({});
  const [gameID, setGameID] = React.useState(0);
  const [playerName, setPlayerName] = React.useState(0);
  const [admin, setAdmin] = React.useState(0);
  const [page, setPage] = React.useState(0);
  const [viewer, setViewer] = React.useState(false);
  const [theme] = React.useState(themeProvider());

  const stat = () => {
    setPage(3);
  };

  const view = (game_id) => {
    setViewer(true);
    setGameID(game_id);
    setPage(2);
  };

  const firstChild = (
    player_id,
    game_id,
    player_name,
    player_scores,
    isadmin
  ) => {
    setPlayerID(player_id);
    setGameID(game_id);
    setPlayerName(player_name);
    setPlayerScores(player_scores);
    setAdmin(isadmin);
    setPage(1);
  };

  const secondChildBackward = () => {
    setPage(0);
  };

  const secondChildForward = (player_scores) => {
    setPlayerScores(player_scores);
    setPage(2);
  };

  const thirdChildBackward = () => {
    setPage(1);
  };

  const thirdChildForward = () => {
    setPage(3);
  };

  const fourthChildBackward = () => {
    setPage(2);
  };

  var pages = [
    <Login theme={theme} line={firstChild} view={view}></Login>,
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
      viewer={viewer}
      playername={playerName}
      firstpage={secondChildBackward}
      forward={thirdChildForward}
      backward={thirdChildBackward}
    ></Table>,
    <Stats
      theme={theme}
      admin={admin}
      gameid={gameID}
      playername={playerName}
      backward={fourthChildBackward}
    ></Stats>,
  ];

  return pages[page];
}
