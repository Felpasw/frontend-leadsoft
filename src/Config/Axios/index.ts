import axios from "axios";
import { toast } from "react-toastify";
import URL from "../../URL";

export const AxiosInstance = axios.create({
  baseURL: `${URL.baseURL}`,
  headers: {
    "Content-Type": "application/json-patch+json",
  },
});

AxiosInstance.interceptors.request.use((request) => {
  request.headers = {
    ...request.headers,
    Authorization: sessionStorage.getItem("Authorization") || "",
  };
  return request;
});

AxiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      alert("Erro de requisição. Nova autenticação necessária");
    //   toast.error("Erro de requisição. Nova autenticação necessária.");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);