import axios from "axios";

export const http = axios.create({
  baseURL: "https://api.tvmaze.com/search/shows?q=batman",
  timeout: 15000,
});