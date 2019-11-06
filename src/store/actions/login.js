export const loginSuccess = (username, password) => ({
  type: "LOGIN_SUCCESS",
  payload: {
    username,
    password
  }
});

export const loginFailure = () => ({});
