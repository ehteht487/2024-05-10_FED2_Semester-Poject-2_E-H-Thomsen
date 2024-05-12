import { API_HOST_URL } from "../constants.mjs";
import { authFetch } from "../authFetch.mjs";

const action = "/auction/listings";
const method = "delete";

export async function removeListing(id) {
  if (!id) {
    throw new Error("The listing needs an id to be deleted");
  }
  const removeListingURL = `${API_HOST_URL}${action}/${id}`;

  const response = await authFetch(removeListingURL, {
    method,
  });

  return await response.json();
}
