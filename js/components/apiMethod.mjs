import { postData } from "../register.mjs";

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
