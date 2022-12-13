import axios from "axios";

const isLive = true;
const API_V1 = isLive
  ? "https://delta-state-smart-waste.onrender.com/api/v1/"
  : "http://127.0.0.1:3003/api/v1/";
const LOGIN_END_POINT = `user/login`;
const REGISTER_END_POINT = `user/register`;

const AXIOS_INSTANCE = axios.create({
  baseURL: API_V1,
  headers: { "Content-Type": "application/json" },
});

const API_REQUEST = {
  API_V1,
  LOGIN_END_POINT,
  AXIOS_INSTANCE,
  REGISTER_END_POINT,
};

export default API_REQUEST;
