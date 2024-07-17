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
    <div className=" w-full min-w-[500] min-h-[500]  max-w-full bg-slate-900 shadow-md rounded-2xl overflow-hidden mx-auto border-2 border-transparent hover:border-[#2074F6]">
      <Link
        to={`/movie/${movie.title.toLowerCase().split(" ").join("-")}/${
          movie?.id
        }`}
      >
        <div
          className="overflow-hidden rounded-xl relative text-white h-full"
          data-movie-id={movie?.id}
        >
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-[#1d273d2b] to-transparent" />

          <div className="relative cursor-pointer group z-10 p-5 pb-0">
            <div className="poster__info align-self-end w-full">
              <div className="h-64 md:h-80" />
              <div className="space-y-3">
                <div className="flex flex-col space-y-2 inner">
                  <h3 className="text-xl font-bold text-white min-h-[56px]">
                    {movie?.title}
                  </h3>
                </div>
                <div className="flex justify-around mb-0 pb-0">
                  <div className="relative text-sm">
                    <div
                      className={`flex border rounded-md ${colorScore(
                        movie?.vote_average.toFixed(1)
                      )}`}
                    >
                      <div className="text-2xl text-center font-bold text-black p-2">
                        {movie?.vote_average.toFixed(1)}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col p-1">
                    <div className="text-sm">{movie?.release_date}</div>
                    <div className="text-xs text-gray-400">Release date</div>
                  </div>
                  <div className="flex flex-col p-1">
                    <div className="text-sm">
                      {loading ? "1h 33min" : time_convert(runtime?.runtime)}
                    </div>
                    <div className="text-xs text-gray-400">Runtime</div>
                  </div>
                </div>
                <div className="flex flex-col overview">
                  {/* <div className="flex flex-col" />
                  <div className="text-xs text-gray-400 mb-2">Overview:</div> */}
                  <p className="text-xs text-gray-400 mb-5 mt-0 min-h-[56px]">
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
            style={{maskImage: "linear-gradient(black 30%, transparent)"}}
          />

          {/* <div className="flex justify-center flex-row relative  space-x-4 z-10 "> */}
          {/* <div className=" w-20">
            <div className="text-2xl text-center font-bold text-black p-2">
              {movie?.vote_average.toFixed(1)}
            </div> */}
          {/* <div className=" text-center text-black">moviedb</div> */}
          {/* <div className="imdb-voted text-xs text-black">
                  {movie?.vote_count} votes
                </div> */}
          {/* </div> */}
          {/* <button className="btn">More Info</button> */}
          {/* </div> */}
        </div>
      </Link>
    </div>
  )
}
