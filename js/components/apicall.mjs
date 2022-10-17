export async function registerApiCall(url, option = {}) {
    try {
        const response = await fetch(url, option);
        const json = await response.json();
        return json;
    } catch (error) {
        console.log(error);
    }
}

export async function loginUser(url, option = {}) {
    try {
        const response = await fetch(url, option);
        const json = await response.json();
        const accessToken = json.accessToken;
        const userName = json.name;
        localStorage.setItem("userName", userName);
        localStorage.setItem("accessToken", accessToken);
        return json;
    } catch (error) {
        console.log(error);
    }
}

export async function ApicallWithToken(url, option = {}) {
    try {
        const response = await fetch(url, option);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}
