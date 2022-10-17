const loginForm = document.querySelector(".login__form");
const userName = document.querySelector("#user__name");
const userEmail = document.querySelector("#user__email");
const userPassword = document.querySelector("#user__password");
const loginBtn = document.querySelector("#login__btn");

loginForm.addEventListener("submit", function (e) {
    e.preventDefault();
    // username må sjekkes for krav
    if (checkForm(userName.value, 7)) {
        error(userName, "Username must be 8 or more characters");
    } else {
        success(userName);
    }
    if (emailVali(userEmail.value)) {
        success(userEmail);
    } else {
        error(userEmail, "Domain must be stud.noroff.no or noroff.no");
    }
    if (checkForm(userPassword.value, 7)) {
        error(userPassword, "Username must be 8 or more characters");
    } else {
        success(userPassword);
    }
});

// fikser denne etterhvert
// error and success messages
// const formError = (ele, msg) => {
//   const showElement = element.parentElement;
//   const showError = showElement.querySelector(".error__form");

//   showError.innerText = msg;
//   showElement.classList.add("error");
//   showElement.classList.remove("success");
// };

// const formSuccess = ele => {
//   const showElement = ele.parentElement;
//   const showError = showElement.querySelector("error__form");

//   showError.innerText = "";
//   showElement.classList.add("success");
//   showElement.classList.remove("error");
// };

// passord min 8 char
// username can only have _ as special characters
// loginForm.addEventListener("submit", (e) => {
//   e.preventDefault();
//   if (check)
// });

console.log("hei på deg");
// validation
function checkForm(value, leng) {
    if (value.trim().lenght >= leng) {
        return false;
    } else {
        return true;
    }
}

// regEx validator
function emailVali(email) {
    const regEx = /^([a-zA-Z0-9-_\.]+)@(noroff.no|stud.noroff.no)$/;
    const emailMatch = regEx.test(email);
    return emailMatch;
}

// testing of email vali
// console.log(emailVali("tes_t@stud.noroff.no"));
