const loginForm = document.querySelector(".login__form");
const userName = document.querySelector("#user__name");
const userEmail = document.querySelector("#user__email");
const userPassword = document.querySelector("#user__password");
const loginBtn = document.querySelector("#login__btn");

loginForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const userNameValue = userName.value;
  const userEmailvalue = userEmail.value;
  const userPasswordvalue = userPassword.value;
});
