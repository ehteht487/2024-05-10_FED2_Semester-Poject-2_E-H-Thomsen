import { API_HOST_URL } from "../constants.mjs";
import { authFetch } from "../authFetch.mjs";

const action = "/auction/listings";
const method = "post";

export async function createListing(postData) {
  const createListingURL = API_HOST_URL + action;

  const response = await authFetch(createListingURL, {
    method,
    body: JSON.stringify(postData),
  });

  return await response.json();
}
