const loginBody = {
    email: "albert_holskog@noroff.no",
    password: "wefwefwefwefw",
};

export const loginData = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(loginBody),
};

const showReg = document.getElementById("show__reg__btn");
const loginBtn = document.getElementById("login__btn");
const backBtn = document.getElementById("back__btn");
const regBtn = document.getElementById("register__btn");
const loginForm = document.querySelector(".login__form");
const regForm = document.querySelector(".register__form");
const loginFocus = document.querySelector(".focus__email");
const regFocus = document.querySelector(".reg__focus");

loginFocus.focus();
// switching forms
showReg.addEventListener("click", (e) => {
    e.preventDefault();
    regForm.style.display = "flex";
    loginForm.style.display = "none";
    regFocus.focus();
});

const registerSubmit = document.getElementById("sub__register");
const loginSubmit = document.getElementById("sub__login");
// register user
regBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const payload = new FormData(registerSubmit);
    console.log(payload);
    fetch(url, {
        method: "POST",
        body: payload,
    });
    // .then((response) => response.json())
    // .then((data) => console.log(data));
});

// login
loginBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const payload = new FormData(loginSubmit);
    console.log(payload);
    fetch(url, {
        method: "POST",
        body: payload,
    });
    // .then((response) => response.json())
    // .then((data) => console.log(data));
});

// async click
async function handleLogin(e) {
    e.preventDefault();
    const payload = new FormData(loginSubmit);
    console.log(payload);
    await fetch();
}
