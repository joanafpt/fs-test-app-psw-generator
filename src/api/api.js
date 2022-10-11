//const GET_PSW = "/get-password";
const CLIENT = "http://localhost:3000";
const SERVER = "https://password-app-test.herokuapp.com";

export const genPassword = (value, callback) => {
  fetch(SERVER + "/get-password", {
    method: "GET",
    credentials: "same-origin",
    headers: {
      "content-type": "application/json",
      "Access-Control-Allow-Origin": CLIENT,
      value: value,
    },
  })
    .then((response) => response.json())
    .then((data) => callback(data));
};
