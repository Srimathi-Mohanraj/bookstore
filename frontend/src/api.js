import axios from "axios";

function trimSlash(s = "") {
  return s.replace(/\/+$/, "");
}


const backendBase = process.env.REACT_APP_API_URL
  ? trimSlash(process.env.REACT_APP_API_URL)
  : "http://localhost:5000";

const api = axios.create({
  baseURL: `${backendBase}/api`,
  timeout: 15000,              
  headers: {
    "Content-Type": "application/json",
  },
});

export default api
