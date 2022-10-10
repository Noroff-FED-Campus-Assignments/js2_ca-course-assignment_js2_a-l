// POST /api/v1/social/auth/register

const API_BASE_URL = "https://nf-api.onrender.com";
const registerUserUrl = `${API_BASE_URL}/api/v1/social/auth/register`;
const loginUrl = `${API_BASE_URL}/api/v1/social/auth/login`;
// console.log(registerUserUrl);

async function registerUser(url, data) {
  try {
    const postData = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    const response = await fetch(url, postData);
    console.log(response);
    const json = await response.json();
    // console.log(json);
    return json;
  } catch (error) {
    console.log(error);
  }
}

const userData = {
  name: "albert_holskog",
  email: "albert_holskog@noroff.no",
  password: "wefwefwefwefw",
};
// registerUser(registerUserUrl, userData);

// ----------------------loging user ----------------------------
async function loginUser(url, userData) {
  try {
    const postData = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    };
    const response = await fetch(url, postData);
    // console.log(response);
    const json = await response.json();
    // console.log(json);

    const accessToken = json.accessToken;

    localStorage.setItem("accessToken", accessToken);
  } catch (error) {
    console.log(error);
  }
}

const userTologin = {
  email: "albert_holskog@noroff.no",
  password: "wefwefwefwefw",
};

loginUser(loginUrl, userTologin);

// ------------------------------

const postUrl = `${API_BASE_URL}/api/v1/social/posts`;
const tokentest = localStorage.getItem("accessToken");

console.log(tokentest);

const testobj = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${tokentest}`,
  },
};
console.log(testobj);

async function apiCall(url, option = {}) {
  try {
    option;
    const response = await fetch(url, option);
    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.log(error);
  }
}
apiCall(postUrl, testobj);

// --------------------reguest with token----------

// async function getWithToken(url) {
//   try {
//     console.log(url);
//     const token = localStorage.getItem("accessToken");
//     console.log(token);
//     const fetchOptions = {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${token}`,
//       },
//     };
//     const response = await fetch(url, fetchOptions);
//     console.log(response);
//     const json = await response.json();
//     console.log(json);
//   } catch (error) {
//     console.log(error);
//   }
// }
// getWithToken(postUrl);
