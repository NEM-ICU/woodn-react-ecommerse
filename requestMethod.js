import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";

const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTUyOTFjNWViMzg1OTUwODUwMmJmZDEiLCJlbWFpbCI6Im5ldGhzYXJhQGdtYWlsLmNvbSIsImlhdCI6MTY5OTkxMTUzNiwiZXhwIjoxNzAyNTAzNTM2fQ.bYe9dM1kpZUf1WjxPCLoSXc6LnXi9XEDa4oH4rqLO6I";

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
