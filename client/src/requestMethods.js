import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYjQ3M2Y0NTY0ZTYwZDg3MzFiMzU4NSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3MzEwODI1MCwiZXhwIjoxNjczMzY3NDUwfQ.6dtzV5dagUbupdHPWIJnsmaNEmdy9lPpzU5vULyEf-Y";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});
export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer  ${TOKEN}` },
});
