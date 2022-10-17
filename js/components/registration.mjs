import { registerApiCall } from "./apiCall.mjs";

const registrationForm = document.querySelector(".register__form");
const regError = document.querySelector(".reg__error");
const registerUrl = "https://nf-api.onrender.com/api/v1/social/auth/register";

async function regValidation() {
  registrationForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const formData = new FormData(registrationForm);
    const formDataSeri = Object.fromEntries(formData);

    try {
      const data = await registerApiCall(registerUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formDataSeri),
      });
      const msg = data.message;
      const errorCode = data.error;
      if (errorCode === "Bad Request") {
        regError.textContent = msg;
      } else {
        regError.textContent = "Profile created";
        setTimeout(() => {
          window.location.replace("/index.html");
        }, "2000");
      }
    } catch (error) {
      console.log(error);
    }
  });
}
regValidation();
