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

export function getPlayer(data) {
  axios.post("/getplayer", { userName: data.player_name });
}

export function createPlayer(data) {
  axios.post("/createplayer", { userName: data.player_name });
}

export function updatePlayer(data) {
  axios.post("/updateplayer", { userName: data.player_name });
}

export function isAdmin(data) {
  axios.post("/isadmin", { userName: data.player_name });
}

export function isPlayer(data) {
  axios.post("/isplayer", { userName: data.player_name });
}
