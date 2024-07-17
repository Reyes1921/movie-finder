import axios from "axios"

export const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyN2E2MGUwMWFmZDMxMTRlYmM5OGJkODMwYTE0MGY1OSIsInN1YiI6IjYzYWYzYzhlODc0MWM0MDBiZmRmOGFhNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1Mh8cNx_9gdmsf2DhguV8JTzhsw5c_I_5LvGt8MQ2Aw",
  },
})
