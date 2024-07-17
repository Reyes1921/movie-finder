import axios from "axios"
const apiBearer = import.meta.env.VITE_API_BEARER
export const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Authorization: apiBearer,
  },
})
