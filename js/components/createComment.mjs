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
const editComment = `https://nf-api.onrender.com/api/v1/social/posts/${id}`;
// console.log(id);
const addComment = `https://nf-api.onrender.com/api/v1/social/posts/${id}/comment`;

const commentEntryUrl = `https://nf-api.onrender.com/api/v1/social/posts/${id}?_author=true&_reactions=true&_comments=true`;
const commentForm = document.querySelector(".comment__form");
const userName = localStorage.getItem("userName");
const token = localStorage.getItem("accessToken");
const commentContainer = document.querySelector(".container__comments");
// console.log(userName);

// get delete edit if user === user

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
            deleteOwnPost();
            editPostFunc();
        } else {
            createHtmlNotOwner(data);
            console.log(false);
        }

        submitMyComment();

        iconReact();

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
                                            <i class="material-icons react"> thumb_up </i>
                                        </div>
                                        <div id="wrapper__form">
                                            <form class="edit__form">
                                                <label for="title__comments">
                                                <input type="text" name="title" id="title__comments" placeholder="Enter new title"/>
                                                </label>
                                                <label for="comment__post">
                                                <textarea
                                                    name="body"
                                                    id="comment__post"
                                                    cols="40"
                                                    rows="4"
                                                    placeholder="Edit post here"
                                                ></textarea>
                                                </label>
                                                <button type="submit" class="editsub__btn">Send</button>
                                            </form>
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
                                            <i class="material-icons react"> thumb_up </i>
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
        commentContainer.innerHTML = "";
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
            console.log(data);
            submitComment.reset();
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

// delete event
async function deleteOwnPost() {
    const deleteBtn = document.querySelector(".deletepost__btn");
    const deleteUrl = `https://nf-api.onrender.com/api/v1/social/posts/${id}`;
    // console.log(deleteUrl);
    deleteBtn.addEventListener("click", async (e) => {
        try {
            const response = await fetch(deleteUrl, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            });
            console.log(response);
            commentContainer.innerHTML = "";
            commentWrapper.textContent = "Post was deleted";
        } catch (error) {
            console.log(error);
            commentWrapper.textContent = "Post was deleted" + error;
        } finally {
            setTimeout(() => {
                window.location.replace("/home.html");
            }, "2000");
        }
    });
}

// Edit post
async function editPostFunc() {
    const showEdit = document.querySelector(".editpost__btn");
    const formContainer = document.querySelector(".edit__form");
    const actionContainer = document.querySelector(".action__container");
    const editSendtBtn = document.querySelector(".editsub__btn");
    const wrapperForm = document.querySelector("#wrapper__form");
    // console.log(formContainer);
    showEdit.addEventListener("click", () => {
        formContainer.style.display = "block";
        actionContainer.style.display = "none";
        editSendtBtn.style.display = "block";
    });
    editSendtBtn.addEventListener("click", async (e) => {
        e.preventDefault();
        const payLoad = new FormData(formContainer);
        const payLoadSerialized = Object.fromEntries(payLoad);
        try {
            const response = await fetch(editComment, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(payLoadSerialized),
            });
            const data = await response.json(payLoadSerialized);
            console.log(data);
            formContainer.innerHTML = "";
            wrapperForm.textContent = "The Post has been updated!";
        } catch (error) {
            console.log(error);
        } finally {
            setTimeout(() => {
                getPostById();
            }, "2000");
        }
    });
}
// delete dette
export async function iconReact() {
    const icon = document.querySelector(".react");
    const reactUrl = ` https://nf-api.onrender.com/api/v1/social/posts/${id}/react/👍`;
    icon.addEventListener("click", async () => {
        try {
            const reactRespons = await fetch(reactUrl, {
                method: "PUT",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            const reactData = await reactRespons.json();
            console.log(reactData);
        } catch (error) {
            console.log(error);
        }
    });
}
