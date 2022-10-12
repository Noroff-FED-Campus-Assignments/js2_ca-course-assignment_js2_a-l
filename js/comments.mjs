import { postUrl } from "./scripts.mjs";
import { ApicallWithToken } from "./components/apiCall.mjs";

const statusForm = document.querySelector(".status__update");
const token = localStorage.getItem("accessToken");

statusForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const formData = new FormData(statusForm);
  const formDataSerialized = Object.fromEntries(formData);
  try {
    ApicallWithToken(postUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(formDataSerialized),
    });
  } catch (error) {
    console.log(error);
  } finally {
    window.location.reload();
  }
});
