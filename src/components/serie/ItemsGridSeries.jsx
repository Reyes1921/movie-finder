import {Link} from "react-router-dom"

import {useCustomFunctions} from "../../hooks"

export const ItemsGridSeries = ({serie}) => {
  const {colorScore} = useCustomFunctions()

  return (
    <div className="w-full min-w-[500] min-h-[500]  max-w-full bg-slate-900 shadow-md rounded-2xl overflow-hidden mx-auto border-2 border-transparent hover:border-[#2074F6]">
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
                      className={`flex justify-center border rounded-md min-w-[40px]  ${colorScore(
                        serie?.vote_average.toFixed(1)
                      )}`}
                    >
                      <div className="text-base text-center font-bold text-black p-1">
                        {serie?.vote_average.toFixed(1)}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col p-1">
                    <div className="popularity text-xs">{serie.popularity}</div>
                    <div className="text-xs text-gray-400">Popularity:</div>
                  </div>
                  <div className="flex flex-col p-1">
                    <div className="release text-xs">
                      {serie.first_air_date}
                    </div>
                    <div className="text-xs text-gray-400">Release date:</div>
                  </div>
                </div>
                <div className="flex flex-col overview ">
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
            src={`${
              serie.poster_path
                ? `https://image.tmdb.org/t/p/w780/${serie.poster_path}`
                : "/movie-play.svg"
            }`}
            style={{maskImage: "linear-gradient(black 30%, transparent)"}}
          />
        </div>
      </Link>
    </div>
  )
}
