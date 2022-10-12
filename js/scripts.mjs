import { loginData, postData, fetchOptions } from "./components/apiMethod.mjs";

import {
    loginUser,
    postApiCall,
    ApicallWithToken,
} from "./components/apiCall.mjs";
import { homePageContent } from "./home.mjs";
const apiBaseUrl = "https://nf-api.onrender.com";
const registerUserUrl = `${apiBaseUrl}/api/v1/social/auth/register`;
const loginUrl = `${apiBaseUrl}/api/v1/social/auth/login`;
export const postUrl = `${apiBaseUrl}/api/v1/social/posts`;

// postApiCall(registerUserUrl, postData);
// loginUser(loginUrl, loginData);
// ApicallWithToken(postUrl, fetchOptions);
homePageContent(ApicallWithToken);
