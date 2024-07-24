import {ItemGridMovies} from "./ItemGridMovies"

export const MovieGridRest = ({movieData}) => {
  return (
    <>
      <h1 className="hidden">Movie Finder</h1>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 m-5 mb-0 pb-5 animated fadeIn">
        {movieData.results.map((movie) => {
          return (
            <ItemGridMovies movie={movie} key={movie.id + Math.random(0, 1)} />
          )
        })}
      </div>
    </>
  )
}
