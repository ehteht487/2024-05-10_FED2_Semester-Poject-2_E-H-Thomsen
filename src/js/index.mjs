import { setRegisterFormListener } from "./handlers/register.mjs";
import { setLoginFormListener } from "./handlers/login.mjs";
import * as listings from "./api/listings/index.mjs"

const path = location.pathname;

if (path === "/profile/register/") {
  setRegisterFormListener();
} else if (path === "/profile/login/") {
  setLoginFormListener();
}

// listings.createListing()
// listings.updateListing()
// listings.removeListing("2fbad557-53b5-49e9-b223-417a3cdc484a")
// listings.getListing()
listings.getListings().then(console.log)

listings.getListing("2fbad557-53b5-49e9-b223-417a3cdc484a").then(console.log)

