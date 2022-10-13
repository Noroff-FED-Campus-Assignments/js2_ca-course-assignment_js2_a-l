import { registerApiCall } from "./apiCall.mjs";

const registrationForm = document.querySelector(".register__form");

const registerUrl = "https://nf-api.onrender.com/api/v1/social/auth/register";

registrationForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const formData = new FormData(registrationForm);
  const formDataSerialized = Object.fromEntries(formData);
  console.log(formDataSerialized);

  try {
    registerApiCall(registerUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formDataSerialized),
    });
  } catch (error) {
    console.log(error);
  } finally {
    // window.location.reload();
  }
});
