import {Link} from "react-router-dom"

import {useCustomFunctions} from "../../hooks"

export const ItemsGridSeries = ({serie}) => {
  const {time_convert, colorScore} = useCustomFunctions()

  return (
    <div className=" w-full min-w-[500] min-h-[500]  max-w-full bg-slate-900 shadow-md rounded-2xl overflow-hidden mx-auto border-2 border-transparent hover:border-[#2074F6]">
      <Link
        to={`/serie/${serie.name.toLowerCase().split(" ").join("-")}/${
          serie?.id
        }`}
      >
        <div
          className="overflow-hidden rounded-xl relative text-white h-full"
          data-movie-id={serie?.id}
        >
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-[#1d273d2b] to-transparent" />

          <div className="relative cursor-pointer group z-10 p-5 pb-0">
            <div className="poster__info align-self-end w-full">
              <div className="h-64 md:h-64" />
              <div className="space-y-3">
                <div className="flex flex-col space-y-2 inner">
                  <h3 className="text-xl font-bold text-white min-h-[56px]">
                    {serie?.name}
                  </h3>
                </div>
                <div className="flex justify-around mb-0 pb-0">
                  <div className="relative text-sm">
                    <div
                      className={`flex justify-center border rounded-md min-w-[53px] ${colorScore(
                        serie?.vote_average.toFixed(1)
                      )}`}
                    >
                      <div className="text-2xl text-center font-bold text-black p-2">
                        {serie?.vote_average.toFixed(1)}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col p-1">
                    <div className="popularity">{serie.popularity}</div>
                    <div className="text-sm text-gray-400">Popularity:</div>
                  </div>
                  <div className="flex flex-col p-1">
                    <div className="release">{serie.first_air_date}</div>
                    <div className="text-sm text-gray-400">Release date:</div>
                  </div>
                  {/* <div className="flex flex-col ">
                    <div className="release">
                      {loading
                        ? "1h 33min"
                        : time_convert(runTime.episode_run_time)}
                    </div>
                    <div className="text-sm text-gray-400">Runtime:</div>
                  </div> */}
                </div>
                <div className="flex flex-col overview min-w-[277.8px]">
                  {/* <div className="flex flex-col" />
                  <div className="text-xs text-gray-400 mb-2">Overview:</div> */}
                  <p className="text-xs text-gray-400 mb-5 mt-0 min-h-[56px]">
                    {serie?.overview.substr(0, 120) + "..."}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <img
            alt={`${serie.name}`}
            className="absolute inset-0 transform w-full -translate-y-4"
            src={`https://image.tmdb.org/t/p/w780/${serie.poster_path}`}
            style={{maskImage: "linear-gradient(black 30%, transparent)"}}
          />

          {/* <div className="poster__footer flex justify-center flex-row relative pb-10 space-x-4 z-10 ">
            <div className=" w-20">
              <div
                className={`flex flex-col border rounded-md p-1 ${colorScore(
                  serie.vote_average.toFixed(1)
                )} w-full`}
              >
                <div className=" text-3xl text-center font-bold text-black">
                  {serie.vote_average.toFixed(1)}
                </div>
                <div className=" text-center text-black">moviedb</div>
                <div className="imdb-voted text-xs text-black">
                  {serie.vote_count} votes
                </div>
              </div>
            </div>
            <button className="btn ">More Info</button>
          </div> */}
        </div>
      </Link>
    </div>
  )
}
