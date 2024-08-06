import {createBrowserRouter, Navigate, RouterProvider} from "react-router-dom"

import {
  Home,
  PopularMovies,
  PopularSeries,
  UpcomingMovies,
  UpcomingSeries,
  TopRatedMovies,
  TopRatedSeries,
  MoviePage,
  SeriePage,
  Search,
  Person,
} from "./pages"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/popular-movies",
    element: <PopularMovies />,
  },
  {
    path: "/popular-series",
    element: <PopularSeries />,
  },
  {
    path: "/upcoming-movies",
    element: <UpcomingMovies />,
  },
  {
    path: "/on-the-air-series",
    element: <UpcomingSeries />,
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
    path: "/person/:idPerson/:namePerson",
    element: <Person />,
  },
  {
    path: "/*",
    element: <Navigate to={"/"} />,
  },
])

export const MovieFinderApp = () => {
  return <RouterProvider router={router} />
}
