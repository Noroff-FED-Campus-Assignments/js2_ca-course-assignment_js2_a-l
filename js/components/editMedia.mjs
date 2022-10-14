// import { token } from "./apiMethod.mjs";
const btnEditMedia = document.querySelector(".btn__edit");
const editForm = document.querySelector(".edit__form");
const updBtn = document.querySelector(".upt__btn");
const userName = localStorage.getItem("userName");
const token = localStorage.getItem("accessToken");
const mediaContainer = document.querySelector(".media__container");
const editMediaUrl = `https://nf-api.onrender.com/api/v1/social/profiles/${userName}/media`;

async function editMediaApiCall(url, option = {}) {
  try {
    const response = await fetch(url, option);
    console.log(response);
    const data = await response.json();
    console.log();
  } catch (error) {}
}

btnEditMedia.addEventListener("click", () => {
  editForm.classList.add("show");
  btnEditMedia.style.display = "none";
});

editForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  btnEditMedia.style.display = "block";
  editForm.classList.remove("show");
  const formData = new FormData(editForm);
  const formDataSerialized = Object.fromEntries(formData);
  console.log(formDataSerialized);

  try {
    const response = await fetch(editMediaUrl, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(formDataSerialized),
    });
    const data = await response.json();
    console.log(data.avatar);
  } catch (error) {
    console.log(error);
  }
});

// onerror="this.src = './svg/logo/logo.png';"
const profilUrl = `https://nf-api.onrender.com/api/v1/social/profiles/${userName}`;

async function profilApiCall() {
  //
  try {
    const response = await fetch(profilUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const mediaData = await response.json();
    console.log(mediaData);
    mediaContainer.innerHTML = `<div class="avatar__img--container">
                                    <img class="avatar__image" src="${mediaData.avatar}" onerror="this.src = './svg/logo/logo.png';" alt="Profile picture" />
                                    <img class="banner__image"  src="${mediaData.banner}" onerror="this.src = './svg/logo/logo.png';" alt="Profile picture" />
                                </div>`;
  } catch (error) {
    console.log("feil i profilapicall");
  }
}
profilApiCall();
