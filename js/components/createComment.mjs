import ApicallWithToken from "./apicall";

const apiBaseUrl = "https://nf-api.onrender.com";

console.log("test");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
console.log(params);

const id = params.get("id");
console.log(id);
const commentEntryUrl = `${apiBaseUrl}/api/v1/social/posts/${id}/comment`;
console.log(commentEntryUrl);

ApicallWithToken(commentEntryUrl, option);
