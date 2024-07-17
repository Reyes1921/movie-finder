import axios from "axios"

export const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Authorization: process.env.API_Bearer,
  },
})
