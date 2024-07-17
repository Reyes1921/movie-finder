import {createBrowserRouter, Navigate, RouterProvider} from "react-router-dom"

import {
  Home,
  PopularMovies,
  PopularSeries,
  TopRatedMovies,
  TopRatedSeries,
  MoviePage,
  SeriePage,
  Search,
} from "./pages"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/movies",
    element: <PopularMovies />,
  },
  {
    path: "/series",
    element: <PopularSeries />,
  },
  {
    path: "/search/:data",
    element: <Search />,
  },
  {
    path: "/top-rated-series",
    element: <TopRatedSeries />,
  },
  {
    path: "/top-rated-movies",
    element: <TopRatedMovies />,
  },
  {
    path: "/movie/:movieTitle/:movieId",
    element: <MoviePage />,
  },
  {
    path: "/serie/:serieTitle/:serieId",
    element: <SeriePage />,
  },
  {
    path: "/*",
    element: <Navigate to={"/"} />,
  },
])

export const MovieFinderApp = () => {
  return <RouterProvider router={router} />
}
