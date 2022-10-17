import { token } from "./apiMethod.mjs";
import { homeContainer } from "../home.mjs";
const filterBtn = document.querySelector(".filter__btn");

const filterUrl = `https://nf-api.onrender.com/api/v1/social/posts/?_author=true&_comments=true`;

filterBtn.addEventListener("click", async () => {
  const response = await fetch(filterUrl, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  const filterData = await response.json();

  homeContainer.innerHTML = "";

  for (let i = 0; i < 100; i++) {
    const element = filterData[i];
    const comments = element.comments.length;

    if (comments >= 3) {
      homeContainer.innerHTML += `<div class="main__post--container">
                                  <div class="post__user">
                                  <img
                                    src="${element.author.avatar}"
                                    alt="avatar from the user"
                                    class="avatar"
                                   />
                                  <h2 class="userName"><a href="/otherProfil.html?name=${element.author.name}">${element.author.name}</a></h2>
                                   <h3>${element.title}</h3>
                                  </div>
                                  <div class="post__message--container">
                                  <p>
                                      ${element.body}
                                  </p>
                                  <i class="material-icons"> thumb_up </i>
                                  </div>
                                  <div>
                                  <a href="/comment.html?id=${element.id}" class="btn__comment--post">comment</a>
                                  </div>
                                  </div>`;
    }
  }
});
