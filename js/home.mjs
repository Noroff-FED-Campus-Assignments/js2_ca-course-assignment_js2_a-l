// import { postUrl } from "./scripts.mjs";
import { fetchOptions } from "./components/apiMethod.mjs";
const homeContainer = document.querySelector(".main__post--wrapper");

const urlPostAuthor =
  "https://nf-api.onrender.com/api/v1/social/posts?_author=true&_comments=true&_reactions=true";

export async function homePageContent(method) {
  try {
    const data = await method(urlPostAuthor, fetchOptions);

    for (let i = 0; i < 10; i++) {
      const post = data[i];
      console.log(post);
      homeContainer.innerHTML += `<div class="main__post--container">
                                     <div class="post__user">
                                        <img
                                        src="${post.author.avatar}"
                                        alt="avatar from the user"
                                        class="avatar"
                                       />
                                        <h2 class="userName">${post.author.name}</h2>
                                        <a href="">${post.title}</a>
                                      </div>
                                      <div class="post__message--container">
                                          <p>
                                             ${post.body}
                                          </p>
                                          <i class="material-icons"> thumb_up </i>
                                      </div>
                                  </div>`;
    }
  } catch (error) {
    console.log(error);
    console.log("hei");
  }
}
