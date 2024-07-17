import {useEffect, useState} from "react"
import {Link} from "react-router-dom"
import {useGetRuntime} from "../hooks/"
import {useCustomFunctions} from "../hooks"

export const ItemGridMovies = ({movie}) => {
  const param = `movie/${movie.id}`
  const [runTimes, setRuntimes] = useState(param)
  const {runtime, loading} = useGetRuntime(runTimes)
  useEffect(() => {
    setRuntimes(param)
  }, [loading])

  const {time_convert, colorScore} = useCustomFunctions()

  return (
    <div className="flex w-full min-w-[500] max-w-full bg-slate-900 shadow-md rounded-lg overflow-hidden mx-auto ">
      <Link
        to={`/movie/${movie.title.toLowerCase().split(" ").join("-")}/${
          movie?.id
        }`}
      >
        <div className="w-2 bg-gray-800" />
        <div
          className="overflow-hidden rounded-xl relative transform shadow-lg hover:shadow-2xl movie-item text-white movie-card h-full"
          data-movie-id={movie?.id}
        >
          <div className="absolute inset-0 z-10 transition duration-300  bg-gradient-to-t from-black via-gray-900 to-transparent" />

          <div className="relative cursor-pointer group z-10 px-10 pt-10 space-y-6 movie_info">
            <div className="poster__info align-self-end w-full mt-10">
              <div className="h-32" />
              <div className="space-y-6 detail_info">
                <div className="flex flex-col space-y-2 inner mt-12">
                  <h3
                    className="text-xl font-bold text-white"
                    data-unsp-sanitized="clean"
                  >
                    {movie?.title}
                  </h3>
                </div>
                <div className="flex flex-row justify-between datos">
                  <div className="flex flex-col datos_col">
                    <div className="popularity">{movie?.popularity}</div>
                    <div className="text-sm text-gray-400">Popularity:</div>
                  </div>
                  <div className="flex flex-col datos_col">
                    <div className="release">{movie?.release_date}</div>
                    <div className="text-sm text-gray-400">Release date:</div>
                  </div>
                  <div className="flex flex-col datos_col">
                    <div className="release">
                      {loading ? "1h 33min" : time_convert(runtime?.runtime)}
                    </div>
                    <div className="text-sm text-gray-400">Runtime:</div>
                  </div>
                </div>
                <div className="flex flex-col overview min-w-[277.8px]">
                  <div className="flex flex-col" />
                  <div className="text-xs text-gray-400 mb-2">Overview:</div>
                  <p className="text-xs text-gray-100 mb-6">
                    {movie?.overview?.substr(0, 120) + "..."}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <img
            alt={`${movie.title}`}
            className="absolute inset-0 transform w-full -translate-y-4"
            src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
            style={{filter: "grayscale(0)"}}
          />

          <div className="poster__footer flex justify-center flex-row relative pb-10 space-x-4 z-10 ">
            <div className="imdb-box w-20">
              <div
                className={`flex flex-col border rounded-md p-1 ${colorScore(
                  movie?.vote_average.toFixed(1)
                )} w-full`}
              >
                <div className="imdb-score text-3xl text-center font-bold text-black">
                  {movie?.vote_average.toFixed(1)}
                </div>
                <div className="imdb-title text-center text-black">moviedb</div>
                <div className="imdb-voted text-xs text-black">
                  {movie?.vote_count} votes
                </div>
              </div>
            </div>
            <button className="btn ">More Info</button>
          </div>
        </div>
      </Link>
    </div>
  )
}
