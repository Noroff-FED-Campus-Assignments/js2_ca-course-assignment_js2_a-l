const queryString = document.location.search;
const params = new URLSearchParams(queryString);
console.log(params);

const id = params.get("id");
const nameId = params.get("name");
const signleEntryUrl = "/api/v1/social/posts/" + id;

export const postId = `${apiBaseUrl}${signleEntryUrl}`;
