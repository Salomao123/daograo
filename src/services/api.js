import axios from "axios";

const api = axios.create({
  baseURL: "http://api.github.com/users/Salomao123"
});

export default api;
