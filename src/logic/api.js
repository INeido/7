const axios = require("axios").default;

export function getGames() {
  return axios.get("https://neido.tech/wonder/getgames");
}

export function createGame() {
  return axios.get("https://neido.tech/wonder/creategame");
}

export function isRunning() {
  return axios.get("https://neido.tech/wonder/isrunning");
}

export function isRunningID(game_id) {
  return axios.post("https://neido.tech/wonder/isrunningid", {
    game_id: game_id,
  });
}

export function getPlayer(player_id) {
  return axios.post("https://neido.tech/wonder/getplayer", {
    player_id: player_id,
  });
}

export function getPlayers(game_id) {
  return axios.post("https://neido.tech/wonder/getplayers", {
    game_id: game_id,
  });
}

export function tidyGame(game_id) {
  return axios.post("https://neido.tech/wonder/tidygame", {
    game_id: game_id,
  });
}

export function openGame(game_id) {
  return axios.post("https://neido.tech/wonder/opengame", {
    game_id: game_id,
  });
}

export function closeGame(game_id) {
  return axios.post("https://neido.tech/wonder/closegame", {
    game_id: game_id,
  });
}

export function createPlayer(game_id, player_name, admin) {
  return axios.post("https://neido.tech/wonder/createplayer", {
    game_id: game_id,
    player_name: player_name,
    admin: admin,
  });
}

export function updatePlayer(data) {
  return axios.post("https://neido.tech/wonder/updateplayer", {
    data: data,
  });
}

export function isPlayer(game_id, player_name) {
  return axios.post("https://neido.tech/wonder/isplayer", {
    game_id: game_id,
    player_name: player_name,
  });
}

export function getScores(game_id) {
  return axios.post("https://neido.tech/wonder/getscores", {
    game_id: game_id,
  });
}
