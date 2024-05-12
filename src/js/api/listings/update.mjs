import { API_HOST_URL } from "../constants.mjs";
import { authFetch } from "../authFetch.mjs";

const action = "/auction/listings";
const method = "put";

export async function updateListing(postData) {
  if (!postData.id) {
    throw new Error("The listing needs an id to be updated");
  }
  const updateListingURL = `${API_HOST_URL}${action}/${postData.id}`;

  const response = await authFetch(updateListingURL, {
    method,
    body: JSON.stringify(postData),
  });

  return await response.json();
}
