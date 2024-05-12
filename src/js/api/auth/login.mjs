import { API_HOST_URL } from "../constants.mjs";

const action = "/auction/auth/login";
const method = "post";

export async function login(profile) {
  const loginURL = API_HOST_URL + action;
  const body = JSON.stringify(profile);

  const response = await fetch(loginURL, {
    headers: {
      "Content-Type": "application/json"
    },
    method,
    body
  });

  const result = await response.json();
  console.log(result);
}
