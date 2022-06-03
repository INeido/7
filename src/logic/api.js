const axios = require("axios").default;

export function createGame() {
  return axios.get("/creategame");
}

export function closeGame() {
  return axios.get("/closegame");
}

export function isRunning() {
  return axios.get("/isrunning");
}

export function getPlayer(player_id) {
  return axios.post("/getplayer", {
    player_id: player_id,
  });
}

export function createPlayer(game_id, player_name) {
  return axios.post("/createplayer", {
    game_id: game_id,
    player_name: player_name,
  });
}

export function updatePlayer(data) {
  return axios.post("/updateplayer", {
    data: data,
  });
}

export function isAdmin(data) {
  return axios.post("/isadmin", { userName: data.player_name });
}

export function isPlayer(game_id, player_name) {
  return axios.post("/isplayer", {
    game_id: game_id,
    player_name: player_name,
  });
}

export function getScores(game_id) {
  return axios.post("/getscores", {
    game_id: game_id,
  });
}
