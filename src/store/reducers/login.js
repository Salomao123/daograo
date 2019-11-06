const INITIAL_STATE = {
  username: null,
  password: null,
  error: false
};

export default function login(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return {
        ...state,
        username: action.payload.username,
        password: action.payload.password
      };
    case "LOGIN_FAILURE":
      return { ...state };
    default:
      return state;
  }
}
