import { API_HOST_URL } from "../constants.mjs";

const action = "/auction/auth/register";
const method = "post";

export async function register(profile) {
  const registerURL = API_HOST_URL + action;
  const body = JSON.stringify(profile);

  const response = await fetch(registerURL, {
    headers: {
      "Content-Type": "application/json",
    },
    method,
    body,
  });

  const result = await response.json();
  alert("Profile was registered")
  return result
}
