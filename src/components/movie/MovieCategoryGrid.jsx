import {ItemGridMovies} from "./ItemGridMovies"

export const MovieCategoryGrid = ({movieData, idCat}) => {
  return (
    <>
      <h1 className="hidden">Movie Finder</h1>
      <div className="grid gap-2 grid-cols-2 md:grid-cols-2 lg:grid-cols-5 p-5 animated fadeIn">
        {movieData.map((movie) => {
          if (movie.genre_ids.includes(Number(idCat))) {
            return (
              <ItemGridMovies
                movie={movie}
                key={movie.id + Math.random(0, 1)}
              />
            )
          }
        })}
      </div>
    </>
  )
}
