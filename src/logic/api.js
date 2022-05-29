const axios = require("axios").default;

export default function api() {
  axios
    .get("/db")
    .then(function (response) {
      console.log(response);
      return response;
    })
    .catch(function (error) {
      console.log(error);
    })
    .then(function () {});
}
