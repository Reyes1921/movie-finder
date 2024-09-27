import {ItemGridMovies} from "../movie/ItemGridMovies"
import {ItemsGridSeries} from "../serie/ItemsGridSeries"

export const GenreGrid = ({data, media}) => {
  return (
    <>
      <h1 className="hidden">Movie Finder</h1>
      <div className="grid gap-2 grid-cols-2 md:grid-cols-2 lg:grid-cols-5 pt-0 p-5 animated fadeIn">
        {data.map((dataMedia) => {
          if (media === "movie") {
            return (
              <ItemGridMovies
                movie={dataMedia}
                key={dataMedia.id + Math.random(0, 1)}
              />
            )
          } else {
            return <ItemsGridSeries serie={dataMedia} key={dataMedia.id} />
          }
        })}
      </div>
    </>
  )
}
