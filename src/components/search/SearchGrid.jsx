import {ItemGridSearch} from "./ItemGridSearch"

export const SearchGrid = ({data}) => {
  return (
    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 p-5 animated fadeIn">
      <h1 className="hidden">Movie Finder</h1>
      {data.results.map((movieSerie) => {
        if (movieSerie.media_type !== "person")
          return <ItemGridSearch movieSerie={movieSerie} key={movieSerie.id} />
      })}
    </div>
  )
}
