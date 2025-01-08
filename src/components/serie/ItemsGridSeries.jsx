import {Link} from "react-router-dom"
import {useCustomFunctions} from "../../helpers/useCustomFunctions"
import slugify from "slugify"

export const ItemsGridSeries = ({serie}) => {
  const {colorScore} = useCustomFunctions()

  return (
    <div className="w-full min-w-[500] min-h-[500] max-w-full bg-slate-900 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.4)] rounded-2xl overflow-hidden mx-auto border-2 border-transparent hover:border-[#2074F6] mb-2 pb-2">
      <Link to={`/serie/${slugify(serie.name)}/${serie?.id}`}>
        <div
          className="overflow-hidden rounded-xl relative text-white h-full"
          data-movie-id={serie?.id}
        >
          <div className="absolute inset-0 z-10" />

          <div className="relative cursor-pointer group z-10 pb-0">
            <div className="align-self-end w-full">
              <div className="aspect-[16/22]" />
              <div className="space-y-3">
                {/* <div className="flex flex-col space-y-2 inner">
                  <h3 className="hidden text-base md:text-xl font-bold text-white min-h-[56px] pb-5 md:pb-0">
                    {serie?.name}
                  </h3>
                </div> */}
                <div className="hidden md:flex justify-around mb-0 pb-0">
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
                  <div className="flex justify-center items-center p-1">
                    <div className=" text-xs">{serie.popularity}</div>
                  </div>
                  <div className="flex justify-center items-center p-1">
                    <div className="release text-xs">
                      {serie.first_air_date}
                    </div>
                  </div>
                </div>
                {/* <div className="hidden md:flex flex-col overview ">
                  <p className="text-xs text-gray-400 mb-5 mt-0 min-h-[56px]">
                    {serie?.overview.substr(0, 120) + "..."}
                  </p>
                </div> */}
              </div>
            </div>
          </div>
          <img
            alt={`${serie.name}`}
            rel="preload"
            width={"auto"}
            height={"auto"}
            className="absolute inset-0 transform w-full img-mask"
            src={`${
              serie.poster_path
                ? `https://image.tmdb.org/t/p/w780/${serie.poster_path}`
                : "/movie-play.svg"
            }`}
          />
        </div>
      </Link>
    </div>
  )
}
