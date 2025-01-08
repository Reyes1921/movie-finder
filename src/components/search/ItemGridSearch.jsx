import {Link} from "react-router-dom"
import {useTranslation} from "react-i18next"

export const ItemGridSearch = ({movieSerie}) => {
  const {t} = useTranslation()
  let movieOrSerie = movieSerie.media_type === "movie" ? "movie" : "serie"
  let titleOrName = movieSerie.media_type === "movie" ? "title" : "name"
  let releasedOrAired =
    movieSerie.media_type === "movie" ? "release_date" : "first_air_date"

  return (
    <div className="w-full min-w-[500] min-h-[500] max-w-full bg-slate-900 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.4)] rounded-2xl overflow-hidden mx-auto border-2 border-transparent hover:border-[#2074F6] mb-2 pb-2">
      <Link
        to={`/${movieOrSerie}/${movieSerie[titleOrName]
          ?.toLowerCase()
          .replace("?", "")
          .split(" ")
          .join("-")}/${movieSerie.id}`}
      >
        <div
          className="overflow-hidden rounded-xl relative text-white h-full"
          data-movie-id={movieSerie.id}
        >
          <div className="absolute inset-0 z-10" />

          <div className="relative cursor-pointer group z-10 pb-0">
            <div className="align-self-end w-full">
              <div className="aspect-[15/22] mid:aspect-[16/22]" />
              <div className="space-y-3">
                {/* <div className="flex flex-col space-y-2 inner">
                  <h3 className="hidden text-xl font-bold text-white min-h-[56px] pb-5 md:pb-0">
                    {movieSerie[titleOrName]}
                  </h3>
                </div> */}
                <div className="hidden md:flex justify-around mb-0 pb-0">
                  <div className="flex flex-col ">
                    <div className="text-sm">{movieSerie[releasedOrAired]}</div>
                    <div className="text-xs text-gray-400">
                      {t("Release Date")}:
                    </div>
                  </div>
                  <div className="flex flex-col ">
                    <div className="text-xs text-gray-400">
                      {t("Media Type")}:
                    </div>
                    <div className="text-sm">
                      {movieSerie.media_type.substr(0, 1).toUpperCase() +
                        movieSerie.media_type.substr(1)}
                    </div>
                  </div>
                </div>
                {/* <div className="hidden md:flex flex-col overview">
                  <p className="text-xs text-gray-100 mb-6">
                    {movieSerie?.overview?.substr(0, 120) + "..."}
                  </p>
                </div> */}
              </div>
            </div>
          </div>
          <img
            alt={`${movieSerie[titleOrName]}`}
            rel="preload"
            width={"auto"}
            height={"auto"}
            className="absolute inset-0 transform w-full img-mask"
            src={`${
              movieSerie.poster_path
                ? `https://image.tmdb.org/t/p/w780/${movieSerie.poster_path}`
                : "/movie-play.svg"
            }`}
          />
        </div>
      </Link>
    </div>
  )
}
