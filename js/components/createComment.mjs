// import ApicallWithToken from "./apicall";
// import { fetchOptions } from "./components/apiMethod.mjs";
import { ApicallWithToken } from "./apiCall.mjs";
import { fetchOptions } from "./apiMethod.mjs";

const apiBaseUrl = "https://nf-api.onrender.com";
const commentWrapper = document.querySelector(".main__post--wrapper");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
// console.log(params);

const id = params.get("id");
// console.log(id);
const addComment = `https://nf-api.onrender.com/api/v1/social/api/v1/social/posts/${id}/comment`;
const commentEntryUrl = `https://nf-api.onrender.com/api/v1/social/posts/${id}?_author=true&_reactions=true&_comments=true`;
const commentForm = document.querySelector(".comment__form");
const userName = localStorage.getItem("userName");
const token = localStorage.getItem("accessToken");

async function addCommentApiCall(url, option = {}) {
    try {
        const response = await fetch(url, option);
        console.log(response);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

async function getPostById() {
    try {
        const response = await fetch(commentEntryUrl, fetchOptions);
        const data = await response.json();
        // console.log(data);
        // window.localStorage.getItem("userName");
        // JSON.parse(window.localStorage.getItem("userName"));
        // let KeyName = window.localStorage.key(index);

        // if (userName === userName) {
        // }
        createHtml(data);
        submitComment();

        // console.log(form);
    } catch (error) {
        console.log(error);
    } finally {
        //
    }
}
getPostById();

function createHtml(data) {
    commentWrapper.innerHTML = `<div class="main__post--container">
                                        <div class="post__user">
                                            <img
                                                src="${data.author.avatar}"
                                                alt="avatar from user"
                                                class="avatar"
                                            />
                                            <h2 class="userName">${data.author.name}</h2>
                                            <h3>${data.title}</h3>
                                        </div>
                                        <div class="post__message--container">
                                            <p>
                                                ${data.body}
                                            </p>
                                            <i class="material-icons"> thumb_up </i>
                                        </div>
                                        <div> 
                                                <form class="status__update comment__form">
                                                    <label for="comment__post">
                                                     <textarea
                                                        name="body"
                                                        id="comment__post"
                                                        class="txt__comment"
                                                        cols="30"
                                                        rows="3"
                                                        placeholder="What’s on your mind? ......"
                                                    ></textarea>
                                                    </label>
                                                        <button class="comment__btn--post" type="submit">Post Comment</button>
                                                    </form>
                                                </div>
                                        </div>`;
}

// async function submitComment() {
//     try {
//         const form = document.querySelector(".comment__form");
//         // console.log(form);
//         form.addEventListener("submit", (e) => {
//             console.log(form);
//             e.preventDefault();
//             const payLoad = new FormData(form);
//             console.log(payLoad);
//             const payLoadSeri = Object.fromEntries(payLoad);
//             console.log(payLoadSeri);
//         });
//     } catch (error) {
//         console.log(error);
//     }
// }
async function submitComment() {
    const usersForm = document.querySelector(".comment__form");
    usersForm.addEventListener("submit", (e) => {
        e.preventDefault();
        console.log(usersForm);
        const payLoad = new FormData(usersForm);
        const payLoadSerialized = Object.fromEntries(payLoad);
        console.log(payLoadSerialized, "her");
        // stenges her, må sjekke, derfor får jeg ikke tak i try
    });
    try {
        console.log(payLoadSerialized, "inni try");
        // const response = await fetch(addComment, {
        //     method: "PUT",
        //     headers: {
        //         "Content-Type": "application/json",
        //         Authorization: `Bearer ${token}`,
        //     },
        //     body: JSON.stringify(payLoadSeri),
        // });
        // const data = await response.json();
        // console.log(data);
    } catch (error) {
        console.log(error);
    }
}

console.log(addComment);
// console.log(form);
//             e.preventDefault();
//             const payLoad = new FormData(form);
//             console.log(payLoad);
//             const payLoadSeri = Object.fromEntries(payLoad);
//             console.log(payLoadSeri);

// user
// "email": ronjaroverdottir@stud.noroff.no
//   "password": lars123456
