import axios from "axios";
import { toast } from "react-toastify";
import URL from "../../URL";

export const Axios = axios.create({
  baseURL: `${URL.baseURL}`,
  headers: {
    "Content-Type": "application/json-patch+json",
  },
});

Axios.interceptors.request.use((request) => {
  request.headers = {
    ...request.headers,
    Authorization: sessionStorage.getItem("Authorization") || "",
  };
  return request;
});

Axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      alert("Erro de requisição. Nova autenticação necessária");
    //   toast.error("Erro de requisição. Nova autenticação necessária.");
      window.location.href = "/";
    }
    return Promise.reject(error);
  }
);