import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";

const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTRlODdiYjI0NTMxOWIwZjA2MjEzODgiLCJlbWFpbCI6Im5ldGhzYXJhQGdtYWlsLmNvbSIsImlhdCI6MTY5OTcyMTExOCwiZXhwIjoxNzAyMzEzMTE4fQ.k5hCNBAsaQMqnPb7uGuQPq82my6z-eWdmnHc0ur6by4";

const publicRequest = axios.create({
  baseURL: BASE_URL,
});

const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: {
    authorization: `Bearer ${TOKEN}`,
  },
});

export { publicRequest, userRequest };
