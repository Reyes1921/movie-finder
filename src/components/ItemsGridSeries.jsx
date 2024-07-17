import {useEffect, useState} from "react"
import {Link} from "react-router-dom"
import {useGetMovieSerie} from "../hooks/"
import {useCustomFunctions} from "../hooks"

export const ItemsGridSeries = ({serie}) => {
  const param = `tv/${serie.id}`
  const [runTimes, setRuntimes] = useState(param)
  const {movieSerie: runTime, loading} = useGetMovieSerie(runTimes)
  useEffect(() => {
    setRuntimes(param)
  }, [loading])

  const {time_convert, colorScore} = useCustomFunctions()

  return (
    <>
      <div className="flex max-w-sm w-full bg-slate-900 shadow-md rounded-lg overflow-hidden mx-auto">
        <Link
          to={`/serie/${serie.name.toLowerCase().split(" ").join("-")}/${
            serie.id
          }`}
        >
          <div className="w-2 bg-gray-800" />
          <div
            className="overflow-hidden rounded-xl relative transform shadow-lg hover:shadow-2xl movie-item text-white movie-card h-full"
            data-movie-id={serie.id}
          >
            <div className="absolute inset-0 z-10 transition duration-300  bg-gradient-to-t from-black via-gray-900 to-transparent" />

            <div
              className="relative cursor-pointer group z-10 px-10 pt-10 space-y-6 movie_info"
              data-lity=""
            >
              <div className="poster__info align-self-end w-full mt-10">
                <div className="h-32" />
                <div className="space-y-6 detail_info">
                  <div className="flex flex-col space-y-2 inner mt-12">
                    <h3
                      className="text-xl font-bold text-white"
                      data-unsp-sanitized="clean"
                    >
                      {serie.name}
                    </h3>
                  </div>
                  <div className="flex flex-row justify-between datos">
                    <div className="flex flex-col datos_col">
                      <div className="popularity">{serie.popularity}</div>
                      <div className="text-sm text-gray-400">Popularity:</div>
                    </div>
                    <div className="flex flex-col datos_col">
                      <div className="release">{serie.first_air_date}</div>
                      <div className="text-sm text-gray-400">Release date:</div>
                    </div>
                    <div className="flex flex-col datos_col">
                      <div className="release">
                        {loading
                          ? "1h 33min"
                          : time_convert(runTime.episode_run_time)}
                      </div>
                      <div className="text-sm text-gray-400">Runtime:</div>
                    </div>
                  </div>
                  <div className="flex flex-col overview min-w-[277.8px]">
                    <div className="flex flex-col" />
                    <div className="text-xs text-gray-400 mb-2">Overview:</div>
                    <p className="text-xs text-gray-100 mb-6">
                      {serie?.overview.substr(0, 120) + "..."}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <img
              alt={`${serie.name}`}
              className="absolute inset-0 transform w-full -translate-y-4"
              src={`https://image.tmdb.org/t/p/w342/${serie.poster_path}`}
              style={{filter: "grayscale(0)"}}
            />

            <div className="poster__footer flex justify-center flex-row relative pb-10 space-x-4 z-10 ">
              <div className="imdb-box w-20">
                <div
                  className={`flex flex-col border rounded-md p-1 ${colorScore(
                    serie.vote_average.toFixed(1)
                  )} w-full`}
                >
                  <div className="imdb-score text-3xl text-center font-bold text-black">
                    {serie.vote_average.toFixed(1)}
                  </div>
                  <div className="imdb-title text-center text-black">
                    moviedb
                  </div>
                  <div className="imdb-voted text-xs text-black">
                    {serie.vote_count} votes
                  </div>
                </div>
              </div>
              <button className="btn ">More Info</button>
            </div>
          </div>
        </Link>
      </div>
    </>
  )
}
