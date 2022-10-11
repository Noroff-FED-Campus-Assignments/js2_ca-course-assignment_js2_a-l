import { postUrl } from "./scripts.mjs";
import { fetchOptions } from "./components/apiMethod.mjs";
const homeContainer = document.querySelector(".main__post--wrapper");

console.log(homeContainer);

export async function homePageContent(method) {
  try {
    const data = await method(postUrl, fetchOptions);

    for (let i = 2; i < 10; i++) {
      const post = data[i];
      console.log(post);
      homeContainer.innerHTML += `<div class="main__post--container">
                                      <div class="post__user">
                                            <img
                                            src="./svg/person_FILL1_wght400_GRAD0_opsz48.svg"
                                            alt=""
                                            class="avatar"
                                            />
                                            <h2 class="userName">UserName</h2>
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
  }
}
