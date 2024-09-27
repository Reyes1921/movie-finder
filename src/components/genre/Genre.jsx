import {Link} from "react-router-dom"
import {useGetMovieSerie} from "../../hooks"
import {Loading} from "../loading/Loading"

export const Genre = ({mediaType, id, language}) => {
  const type = mediaType === "movie" ? "movie" : "serie"

  const {
    movieSerie: genre,
    loading: loadingGenre,
    error,
  } = useGetMovieSerie(
    `genre/${mediaType}/list?&${
      language === "en" ? "language=en-US" : "language=es-ES"
    }`
  )

  error ? console.log(error) : ""
  return (
    <>
      {loadingGenre ? (
        <Loading />
      ) : (
        <div className="flex justify-center items-center flex-wrap animated fadeIn px-5 min-h-[96px] mb-5">
          {genre.genres.map((genres) => {
            {
            }
            return (
              <Link
                key={genres.id}
                to={`/${type}/category/${genres.name
                  .toLowerCase()
                  .replace("?", "")
                  .split(" ")
                  .join("-")}/${genres.id}`}
              >
                <span
                  className={`${
                    id == genres.id ? "bg-white text-blue-900" : "bg-blue-900"
                  } inline-flex text-white text-center px-2 py-1 rounded text-md font-semibold m-2 hover:scale-110 transition-all`}
                >
                  {genres.name}
                </span>
              </Link>
            )
          })}
        </div>
      )}
    </>
  )
}
