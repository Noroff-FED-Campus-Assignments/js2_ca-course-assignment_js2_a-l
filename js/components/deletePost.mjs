// const deleteUrl = `https://nf-api.onrender.com/api/v1/social/posts/${id}`;

// async function deleteOwnPost() {
//     const deleteBtn = document.querySelector(".deletepost__btn");
//     deleteBtn.addEventListener("click", async (e) => {
//         try {
//             const response = await fetch(deleteUrl, {
//                 method: "DELETE",
//                 headers: {
//                     "Content-Type": "application/json",
//                     Authorization: `Bearer ${token}`,
//                 },
//             });
//             return response;
//             // console.log(data);
//         } catch (error) {
//             console.log(error);
//         }
//     });
// }
// async function getActionContainer() {
//     try {
//         const response = await fetch(commentEntryUrl, fetchOptions);
//         const data = await response.json();
//         console.log(data, "fetch med loop");
//         const name = localStorage.getItem("userName");
//         console.log(name);
//         for (let i = 0; i < data.length; i++) {
//             console.log(name);
//         }

//         // console.log(form);
//     } catch (error) {
//         console.log(error);
//     } finally {
//         //
//     }
// }

// Edit post
// async function editPostFunc() {
//     const showEdit = document.querySelector(".editpost__btn");
//     const formEdit = document.querySelector(".comment__form");
//     const formContainer = document.querySelector(".edit__form");
//     formContainer.style.display = "none";
//     showEdit.addEventListener("click", () => {
//         formContainer.style.display = "block";
//     });
// }
