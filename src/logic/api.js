import axios from 'axios';

export function getGames() {
  return axios.get('https://neido.de/7/api/getgames');
}

export function createGame() {
  return axios.get('https://neido.de/7/api/creategame');
}

export function isRunning() {
  return axios.get('https://neido.de/7/api/isrunning');
}

export function isRunningID(game_id) {
  return axios.post('https://neido.de/7/api/isrunningid', {
    game_id: game_id,
  });
}

export function getPlayer(player_id) {
  return axios.post('https://neido.de/7/api/getplayer', {
    player_id: player_id,
  });
}

export function getPlayers(game_id) {
  return axios.post('https://neido.de/7/api/getplayers', {
    game_id: game_id,
  });
}

export function tidyGame(game_id) {
  return axios.post('https://neido.de/7/api/tidygame', {
    game_id: game_id,
  });
}

export function openGame(game_id) {
  return axios.post('https://neido.de/7/api/opengame', {
    game_id: game_id,
  });
}

export function closeGame(game_id) {
  return axios.post('https://neido.de/7/api/closegame', {
    game_id: game_id,
  });
}

export function createPlayer(game_id, player_name, admin) {
  return axios.post('https://neido.de/7/api/createplayer', {
    game_id: game_id,
    player_name: player_name,
    admin: admin,
  });
}

export function updatePlayer(data) {
  return axios.post('https://neido.de/7/api/updateplayer', {
    data: data,
  });
}

export function isPlayer(game_id, player_name) {
  return axios.post('https://neido.de/7/api/isplayer', {
    game_id: game_id,
    player_name: player_name,
  });
}

export function getScores(game_id) {
  return axios.post('https://neido.de/7/api/getscores', {
    game_id: game_id,
  });
}
