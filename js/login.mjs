const API_BASE_URL = "https://nf-api.onrender.com";
const registerUserUrl = `${API_BASE_URL}/api/v1/social/auth/register`;

const postData = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(bodyData),
};
const bodyData = {
  name: "albert_holskog",
  email: "albert_holskog@noroff.no",
  password: "wefwefwefwefw",
};

export async function registerUser(url, option = {}) {
  try {
    option;
    const response = await fetch(url, postData);
    console.log(response);
    const json = await response.json();
    console.log(json);
    return json;
  } catch (error) {
    console.log(error);
  }
}

// registerUser(registerUserUrl, postData);
