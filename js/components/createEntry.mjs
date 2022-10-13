import { ApicallWithToken } from "./apiCall.mjs";
const createEntryUrl = "https://nf-api.onrender.com/api/v1/social/posts";

const statusForm = document.querySelector(".status__update");
const token = localStorage.getItem("accessToken");

statusForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const formData = new FormData(statusForm);
  const formDataSerialized = Object.fromEntries(formData);
  console.log(formDataSerialized);
  try {
    ApicallWithToken(createEntryUrl, {
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
    // window.location.reload();
  }
});
