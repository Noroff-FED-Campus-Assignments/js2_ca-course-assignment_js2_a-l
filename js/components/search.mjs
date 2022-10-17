import { urlPostAuthor, homeContainer } from "../home.mjs";
import { token } from "./apiMethod.mjs";
let searchArray = [];
const searchInput = document.getElementById("search__bar");
console.log(searchInput);

searchInput.addEventListener("keyup", (e) => {
  const inputString = e.target.value.toLowerCase();
  const filterSearchArray = searchArray.filter((element) => {
    return (
      element.author.name.toLowerCase().includes(inputString) ||
      element.title.toLowerCase().includes(inputString)
    );
  });
  showSearchResult(filterSearchArray);
});

async function searchApiCall() {
  try {
    const response = await fetch(urlPostAuthor, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    searchArray = await response.json();
  } catch (error) {
    console.log("error search api call");
  }
}

function showSearchResult(result) {
  const createHtml = result.map((element) => {
    return `<div class="main__post--container">
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
                                            <i class="material-icons react"> thumb_up </i>
                                          </div>
                                          <div>
                                            <a href="/comment.html?id=${element.id}" class="btn__comment--post">comment</a>
                                          </div>
                                        </div>`;
  });
  homeContainer.innerHTML = createHtml;
}

searchApiCall();
