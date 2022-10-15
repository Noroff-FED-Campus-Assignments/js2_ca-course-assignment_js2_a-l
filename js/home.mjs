// import { postUrl } from "./scripts.mjs";
import { fetchOptions } from "./components/apiMethod.mjs";
export const homeContainer = document.querySelector(".main__post--wrapper");

export const urlPostAuthor =
  "https://nf-api.onrender.com/api/v1/social/posts?_author=true&_comments=true&_reactions=true";

export async function homePageContent(method) {
  try {
    const data = await method(urlPostAuthor, fetchOptions);
    for (let i = 0; i < 10; i++) {
      const post = data[i];
      // console.log(post);
      homeContainer.innerHTML += `<div class="main__post--container">
                                            <div class="post__user">
                                            <img
                                              src="${post.author.avatar}"
                                              alt="avatar from the user"
                                              class="avatar"
                                            />
                                            <h2 class="userName"><a href="/otherProfil.html?name=${post.author.name}">${post.author.name}</a></h2>
                                            <h3>${post.title}</h3>
                                          </div>
                                          <div class="post__message--container">
                                            <p>
                                              ${post.body}
                                            </p>
                                            <i class="material-icons react"> thumb_up </i>
                                          </div>
                                          <div>
                                            <a href="/comment.html?id=${post.id}" class="btn__comment--post">comment</a>
                                          </div>
                                        </div>`;
    }
  } catch (error) {
    console.log(error);
  } finally {
  }
}
