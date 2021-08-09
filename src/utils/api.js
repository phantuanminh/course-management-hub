import base64 from "base-64";
const API = "http://localhost:5000";

async function request(method, endpoint, body = null) {
  const options = {
    method,
    headers: {
      Authorization:
        "Basic " +
        base64.encode(sessionStorage.getItem("access_token") + ":secret"),
      "Content-Type": "application/json",
    },
  };

  if (body !== null) {
    options["body"] = JSON.stringify(body);
  }

  const response = await fetch(API + endpoint, options);

  return response;
}

export const isAuthenticated = () => {
  return request("GET", "/api/auth");
};

export const login = (username, password) => {
  return request("POST", "/api/login", { username, password });
};

export const register = (username, password) => {
  return request("POST", "/api/register", { username, password });
};

export const getToken = () => {
  return request("GET", "/api/token");
};

export const getResource = () => {
  return request("GET", "/api/resource");
};

export const addCard = (data) => {
  return request("POST", "/api/new_card", data);
};
