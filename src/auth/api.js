import axios from "axios";

const isLive = true;
const API_V1 = isLive
  ? "https://delta-state-smart-waste.onrender.com/api/v1/"
  : "http://127.0.0.1:3003/api/v1/";
const LOGIN_END_POINT = `user/login`;
const REGISTER_END_POINT = `user/register`;
const PROFILE_END_POINT = `user/profile`;
const GENERATE_OTP_END_POINT = `user/generate-reset-code`;
const UPDATE_PASSWORD_END_POINT = `user/update-password`;

const AXIOS_INSTANCE = axios.create({
  baseURL: API_V1,
  headers: { "Content-Type": "application/json" },
});

const AXIOS_AUTH_INSTANCE = axios.create({
  baseURL: API_V1,
  headers: {
    "Content-Type": "application/json",
    Authorization: "bearer " + getToken(),
  },
});

const API_REQUEST = {
  API_V1,
  LOGIN_END_POINT,
  AXIOS_INSTANCE,
  AXIOS_AUTH_INSTANCE,
  PROFILE_END_POINT,
  REGISTER_END_POINT,
  GENERATE_OTP_END_POINT,
  UPDATE_PASSWORD_END_POINT,
};

export function storeToken(token) {
  localStorage.setItem("isA", JSON.stringify({ token: token }));
}

export function getToken() {
  try {
    let ch = JSON.parse(localStorage.getItem("isA"));
    if (ch === null) {
      return "";
    } else {
      const { token } = ch;
      return token;
    }
  } catch (error) {
    return "";
  }
}

export function logout() {
  localStorage.setItem("isA", null);
}

export default API_REQUEST;
