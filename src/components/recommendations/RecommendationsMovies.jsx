import {Link} from "react-router-dom"
import {useGetMovieSerie} from "../../hooks"
import {useCustomFunctions} from "../../helpers/useCustomFunctions"
import {useTranslation} from "react-i18next"
import {LazyLoadImage} from "react-lazy-load-image-component"

export const RecommendationsMovies = ({movieId}) => {
  const {t} = useTranslation()
  const {movieSerie, loading, error} = useGetMovieSerie(
    `/movie/${movieId}/recommendations`
  )
  error ? console.log(error) : ""

  const {colorScore} = useCustomFunctions()
  return (
    <>
      {movieSerie?.results?.length === 0 ? (
        " "
      ) : (
        <>
          <h3 className="text-left text-white text-xl md:text-4xl mb-10 mt-10 font-bold">
            {t("Recommendations")}
          </h3>
          {loading ? (
            <div className="flex justify-center">
              <span className="loader"></span>
            </div>
          ) : (
            <div className="grid gap-3 grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mb-10">
              {movieSerie.results.slice(0, 6).map((movie) => {
                return (
                  <div
                    key={movie.id}
                    className="border-2 border-transparent hover:border-[#2074F6] rounded-xl"
                  >
                    <Link
                      to={`/movie/${movie.title
                        .toLowerCase()
                        .replace("?", "")
                        .split(" ")
                        .join("-")}/${movie.id}`}
                    >
                      <div
                        className="overflow-hidden rounded-xl relative text-white h-full"
                        data-movie-id={movie.id}
                      >
                        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-[#1d273d2b] to-transparent" />

                        <div className="relative cursor-pointer group z-10 p-5 space-y-6">
                          <div className=" align-self-end w-full mt-10">
                            <div className="h-52" />
                            <div className="space-y-6">
                              <div className="flex flex-col space-y-2 inner mt-3">
                                <h3 className="text-base font-bold text-white min-h-[56px]">
                                  {movie.title}
                                </h3>
                              </div>
                              <div className="hidden md:flex flex-col-2 justify-around text-sm">
                                <div
                                  className={`flex justify-center border rounded-md p-1 min-w-[53px] ${colorScore(
                                    movie.vote_average.toFixed(1)
                                  )}`}
                                >
                                  <div className=" text-3xl text-center font-bold text-black">
                                    {movie.vote_average.toFixed(1)}
                                  </div>
                                </div>
                                <div className="flex flex-col p-1">
                                  <div className="text-sm">
                                    {movie?.release_date}
                                  </div>
                                  <div className="text-xs text-gray-400">
                                    {t("Release Date")}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <LazyLoadImage
                          className="absolute inset-0 transform w-full -translate-y-4 img-mask"
                          src={`${
                            movie.poster_path
                              ? `https://image.tmdb.org/t/p/w780/${movie.poster_path}`
                              : "/movie-play.svg"
                          }`}
                          alt={`${movie.title}`}
                        />
                      </div>
                    </Link>
                  </div>
                )
              })}
            </div>
          )}
        </>
      )}
    </>
  )
}
