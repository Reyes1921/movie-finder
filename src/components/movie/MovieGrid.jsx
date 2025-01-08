import {ItemGridMovies} from "./ItemGridMovies"

export const MovieGrid = ({movieData, language}) => {
  return (
    <>
      <h1 className="hidden">Movie Finder</h1>
      <div className="grid gap-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-5 pt-0 p-5 animated fadeIn">
        {movieData.map((movie) => {
          return (
            <ItemGridMovies
              movie={movie}
              language={language}
              key={movie.id + Math.random(0, 1)}
            />
          )
        })}
      </div>
    </>
  )
}
