const loginBody = {
  email: "albert_holskog@noroff.no",
  password: "wefwefwefwefw",
};

export const loginData = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(loginBody),
};
