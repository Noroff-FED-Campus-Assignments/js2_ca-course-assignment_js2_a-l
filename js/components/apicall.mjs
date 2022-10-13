export async function registerApiCall(url, option = {}) {
  try {
    const response = await fetch(url, option);
    console.log(response);
    const json = await response.json();
    console.log("se her");
    console.log(json);
    console.log("se her");
  } catch (error) {
    console.log(error);
  }
}
// --------------------------------------------

export async function loginUser(url, option = {}) {
  try {
    const response = await fetch(url, option);
    const json = await response.json();
    const accessToken = json.accessToken;
    const userName = json.name;
    localStorage.setItem("userName", userName);
    localStorage.setItem("accessToken", accessToken);
  } catch (error) {
    console.log(error);
  }
}

// ---------------------------------------------------------

export async function ApicallWithToken(url, option = {}) {
  try {
    const response = await fetch(url, option);
    // console.log(response);
    const data = await response.json();
    // console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
}

// ----------------------------------------------------
