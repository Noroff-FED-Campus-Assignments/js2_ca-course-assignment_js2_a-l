import { loginData, postData, fetchOptions } from "./components/apiMethod.mjs";

import {
  loginUser,
  registerApiCall,
  ApicallWithToken,
} from "./components/apiCall.mjs";
import { homePageContent } from "./home.mjs";

export const apiBaseUrl = "https://nf-api.onrender.com";
export const registerUserUrl = `${apiBaseUrl}/api/v1/social/auth/register`;
const loginUrl = `${apiBaseUrl}/api/v1/social/auth/login`;
export const postUrl = `${apiBaseUrl}/api/v1/social/posts`;

homePageContent(ApicallWithToken);
