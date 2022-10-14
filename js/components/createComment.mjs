// import ApicallWithToken from "./apicall";
// import { fetchOptions } from "./components/apiMethod.mjs";
import { ApicallWithToken } from "./apiCall.mjs";
import { fetchOptions } from "./apiMethod.mjs";
const apiBaseUrl = "https://nf-api.onrender.com";
// const deleteUrl = `/api/v1/social/posts/${id}`;
const commentWrapper = document.querySelector(".main__post--wrapper");
const actionContainer = document.querySelector(".action__container");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
// console.log(params);

const id = params.get("id");

// console.log(id);
const addComment = `https://nf-api.onrender.com/api/v1/social/posts/${id}/comment`;

const commentEntryUrl = `https://nf-api.onrender.com/api/v1/social/posts/${id}?_author=true&_reactions=true&_comments=true`;
const commentForm = document.querySelector(".comment__form");
const userName = localStorage.getItem("userName");
const token = localStorage.getItem("accessToken");
const commentContainer = document.querySelector(".container__comments");
// console.log(userName);

// get delete edit if user === user
async function getActionContainer() {
  try {
    const response = await fetch(commentEntryUrl, fetchOptions);
    const data = await response.json();
    console.log(data, "fetch med loop");
    const name = localStorage.getItem("userName");
    console.log(name);
    for (let i = 0; i < data.length; i++) {
      console.log(name);
    }

    // console.log(form);
  } catch (error) {
    console.log(error);
  } finally {
    //
  }
}
// getActionContainer();

async function getPostById() {
  try {
    const response = await fetch(commentEntryUrl, fetchOptions);
    const data = await response.json();
    // console.log(data);
    // console.log(data.author.name);
    // console.log(data.comments);
    // console.log(currentUser);
    const postAuthor = data.author.name;
    const userName = localStorage.getItem("userName");
    // console.log(userName);
    if (userName === postAuthor) {
      createHtml(data);
      console.log(true);
    } else {
      createHtmlNotOwner(data);
      console.log(false);
    }
    // if (userName !== userName) {
    //     createHtmlNotOwner(data);
    //     console.log(false);
    // }

    submitMyComment();

    // console.log(form);
  } catch (error) {
    console.log(error);
  } finally {
    showCommets();
  }
}
getPostById();

// user === user
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
                                        <div class="action__container">
                                            <button class="deletepost__btn">Delete</button>
                                            <button class="editpost__btn">Edit post</button>
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

// user !== user

function createHtmlNotOwner(data) {
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

async function showCommets() {
  try {
    const response = await fetch(commentEntryUrl, fetchOptions);
    const data = await response.json();
    // console.log(data, "show comments");
    const postCommets = data.comments;
    // console.log(postCommets);
    postCommets.forEach((ele) => {
      commentContainer.innerHTML += `<div class="comment__user">
                                                <h2 class="userName">${ele.owner}</h2>
                                            </div
                                            <div class="post__message--container">
                                                <p>${ele.body}</p>
                                                <i class="material-icons"> thumb_up </i>
                                            </div>`;
    });
  } catch (error) {
    console.log(error);
  }
}

async function submitMyComment() {
  const submitComment = document.querySelector(".comment__form");
  submitComment.addEventListener("submit", async (e) => {
    e.preventDefault();
    // console.log(submitComment);
    const payLoad = new FormData(submitComment);
    const payLoadSerialized = Object.fromEntries(payLoad);
    try {
      const response = await fetch(addComment, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payLoadSerialized),
      });
      const data = await response.json(payLoadSerialized);
      // console.log(data);
    } catch (error) {
      console.log(error);
    } finally {
      showCommets();
    }
  });
}

// user
// "email": ronjaroverdottir@stud.noroff.no
//   "password": lars123456

/* <div class="action__container">
<button class="deletepost__btn">Delete</button>
<button class="editpost__btn">Edit post</button>
<form class="editown__post">
<label for="edit__txt">
    <textarea
        name="body"
        id="edit__txt"
        cols="30"
        rows="3"
        placeholder="Edit your post"
    ></textarea>

</div> */

// delete event
async function deleteOwnPost() {
  const deleteBtn = document.querySelector(".deletepost__btn");
  deleteBtn.addEventListener("click", async (e) => {});
}
