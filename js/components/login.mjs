import { loginUser } from "./apicall.mjs";

const showReg = document.getElementById("show__reg__btn");

const backBtn = document.getElementById("back__btn");

const loginForm = document.querySelector(".login__form");
const regForm = document.querySelector(".register__form");
const loginFocus = document.querySelector(".focus__email");
const regFocus = document.querySelector(".reg__focus");
const formLogin = document.getElementById("form__login");
const loginError = document.querySelector(".login__error");
const apiBaseUrl = "https://nf-api.onrender.com";
const loginUrl = `${apiBaseUrl}/api/v1/social/auth/login`;

loginFocus.focus();
showReg.addEventListener("click", (e) => {
  e.preventDefault();
  regForm.style.display = "flex";
  loginForm.style.display = "none";
  regFocus.focus();
});
backBtn.addEventListener("click", (e) => {
  e.preventDefault();
  regForm.style.display = "none";
  loginForm.style.display = "flex";
});

async function loginValidation() {
  formLogin.addEventListener("submit", async (e) => {
    e.preventDefault();
    const formData = new FormData(formLogin);
    const formDataSeri = Object.fromEntries(formData);
    try {
      const data = await loginUser(loginUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formDataSeri),
      });
      const msg = data.message;
      const userToken = localStorage.getItem("accessToken");

      if (userToken === "undefined") {
        console.log("feiler");
        console.log(msg);
        loginError.textContent = msg;
      } else {
        console.log("ok innlogin");
        loginError.textContent = "";
        window.location.replace("/home.html");
      }
    } catch (error) {
      console.log(error);
    }
  });
}
loginValidation();
