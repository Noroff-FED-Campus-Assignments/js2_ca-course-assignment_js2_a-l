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
