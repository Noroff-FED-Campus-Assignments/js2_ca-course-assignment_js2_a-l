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
            // console.log(post);
            homeContainer.innerHTML += `<div class="main__post--container">
                                            <a href=""></a><div class="post__user">
                                            <img
                                              src="${post.author.avatar}"
                                              alt="avatar from the user"
                                              class="avatar"
                                            />
                                            <h2 class="userName"><a href="">${post.author.name}</a></h2>
                                            <h3>${post.title}</h3>
                                          </div>
                                          <div class="post__message--container">
                                            <p>
                                              ${post.body}
                                            </p>
                                            <i class="material-icons"> thumb_up </i>
                                          </div>
                                          <div>
                                            <a href="/comment.html?id=${post.id}" class="btn__comment--post">comment</a>
                                          </div>
                                        </div>`;
        }
    } catch (error) {
        console.log(error);
    }
}

// {
/* <div>
       <button class="btn__edit--post">edit</button>
       <button class="btn__delete--post">delete</button>
       </div> */
// }

// <!--
// <div class="main__post--container">
//   <div class="post__user">
//     <img
//       src="./svg/person_FILL1_wght400_GRAD0_opsz48.svg"
//       alt=""
//       class="avatar"
//     />
//     <h2 class="userName">UserName</h2>
//   </div>
//   <div class="post__message--container">
//     <p>
//       her skal post meldingingereldingermeldinger eldinge rmeldin4gere
//       ldingdingereldi55ng dingereldingdingerelding dingereldinger
//     </p>
//     <i class="material-icons"> thumb_up </i>
//   </div>
// </div>
// </section>
// <section class="main__post--wrapper">
// <div class="main__post--container">
//   <div class="post__user">
//     <img
//       src="./svg/person_FILL1_wght400_GRAD0_opsz48.svg"
//       alt=""
//       class="avatar"
//     />
//     <h2 class="userName">UserName</h2>
//   </div>
//   <div class="post__message--container">
//     <p>
//       her skal post meldingingereldingermeldinger eldinge rmeldin4gere
//       ldingdingereldi55ng dingereldingdingerelding dingereldinger
//     </p>
//     <i class="material-icons"> thumb_up </i>
//   </div>
//   <div class="container__comments">
//     <div class="comments__post">
//       <div class="post__user">
//         <img
//           src="./svg/person_FILL1_wght400_GRAD0_opsz48.svg"
//           alt=""
//           class="avatar"
//         />
//         <h2 class="userName">UserName</h2>
//       </div>
//       <div class="post__message--container">
//         <p>kommentar til post kommentar</p>
//         <i class="material-icons"> thumb_up </i>
//       </div>
//     </div>
//   </div>
// </div> --></section>
