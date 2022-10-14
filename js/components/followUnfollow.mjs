import { token } from "./apiMethod.mjs";

const queryString = document.location.search;
console.log(queryString);
const params = new URLSearchParams(queryString);
console.log(params);

const nameId = params.get("name");
console.log(nameId);
console.log(token);
const followUrl = `https://nf-api.onrender.com/api/v1/social/profiles/${nameId}/follow`;
const unfollow = `https://nf-api.onrender.com/api/v1/social/profiles/${nameId}/unfollow`;
console.log(followUrl);
const otherUserUrl = `https://nf-api.onrender.com/api/v1/social/profiles/${nameId}`;

const otherProfilContainer = document.querySelector(
  ".other__container--profile"
);
const followContainer = document.querySelector(".other__follows--container");

async function otherUserApicall() {
  try {
    const response = await fetch(otherUserUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const json = await response.json();
    console.log(json);
    otherProfilContainer.innerHTML = `<div class="avatar__img--container">
                                    <img class="avatar__image" src="${json.avatar}" onerror="this.src = './svg/logo/logo.png';" alt="Profile picture" />
                                    <img class="banner__image" src="${json.banner}" onerror="this.src = './svg/logo/logo.png';" alt="Profile picture" />
                                </div>`;
  } catch (error) {
    console.log("feil i other apicall");
  }
}
const followBtn = document.querySelector(".follow__btn");
const unfollowBtn = document.querySelector(".unfollow__btn");

followBtn.addEventListener("click", async () => {
  try {
    const response = await fetch(followUrl, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const followData = await response.json();
    console.log(followData);
  } catch (error) {
    console.log(error);
  }
});

unfollowBtn.addEventListener("click", async () => {
  try {
    const response = await fetch(unfollow, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const followData = await response.json();
    console.log(followData);
  } catch (error) {
    console.log(error);
  }
});

otherUserApicall();
