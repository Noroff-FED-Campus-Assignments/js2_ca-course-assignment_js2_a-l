import {
  postApiCall,
  loginUser,
  ApicallWithToken,
} from "./components/apiMethod.mjs";
import { postData } from "./components/register.mjs";
import { loginData } from "./components/login.mjs";
import { fetchOptions } from "./components/get.mjs";

const apiBaseUrl = "https://nf-api.onrender.com";
const registerUserUrl = `${apiBaseUrl}/api/v1/social/auth/register`;
const loginUrl = `${apiBaseUrl}/api/v1/social/auth/login`;
const postUrl = `${apiBaseUrl}/api/v1/social/posts`;

// postApiCall(registerUserUrl, postData);
loginUser(loginUrl, loginData);
ApicallWithToken(postUrl, fetchOptions);
