const token = localStorage.getItem("accessToken");

export const fetchOptions = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
};
