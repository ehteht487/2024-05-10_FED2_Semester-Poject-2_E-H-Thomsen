import { API_HOST_URL } from "../constants.mjs";
import { authFetch } from "../authFetch.mjs";

const action = "/auction/listings";

export async function getListings() {
  const getListingsURL = `${API_HOST_URL}${action}`;

  const response = await authFetch(getListingsURL);

  return await response.json();
}

export async function getListing(id) {
  if (!id) {
    throw new Error("The listing needs an id");
  }

  const getListingURL = `${API_HOST_URL}${action}/${id}`;

  const response = await authFetch(getListingURL);

  return await response.json();
}
