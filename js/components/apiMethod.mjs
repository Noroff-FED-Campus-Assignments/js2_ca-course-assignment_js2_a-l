import { postData } from "./register.mjs";
import { loginData } from "./login.mjs";
import { fetchOptions } from "./get.mjs";
/**
 *
 *  Global API call for method post.
 * @param {string} url
 * @param {any} option
 * @returns
 *
 * ´´´js
 * postApiCall(URL, postData)
 * ´´´
 */

export async function postApiCall(url, option = {}) {
  try {
    option;
    const response = await fetch(url, postData);
    console.log(response);
    const json = await response.json();
    console.log(json);
    return json;
  } catch (error) {
    console.log(error);
  }
}
// --------------------------------------------

/**
 * global login API call for login av bruker
 * @param {string} url
 * @param {any} option
 *
 * ´´´js
 * loginUser(loginUrl, loginData);
 * ´´´
 */
export async function loginUser(url, option = {}) {
  try {
    option;
    const response = await fetch(url, loginData);
    const json = await response.json();
    const accessToken = json.accessToken;
    localStorage.setItem("accessToken", accessToken);
  } catch (error) {
    console.log(error);
  }
}

// ---------------------------------------------------------

export async function ApicallWithToken(url, option = {}) {
  try {
    option;
    const response = await fetch(url, fetchOptions);
    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.log(error);
  }
}
