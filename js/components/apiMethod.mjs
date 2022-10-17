const loginBody = {};

export const loginData = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(loginBody),
};
// --------------------------------------------
const bodyData = {
    name: "albErt_holskog",
    email: "albEert_holskog@noroff.no",
    password: "wefwefwefwefw",
};

export const postData = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(bodyData),
};

// ---------------------------------------------

export const token = localStorage.getItem("accessToken");

export const fetchOptions = {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
    },
};

