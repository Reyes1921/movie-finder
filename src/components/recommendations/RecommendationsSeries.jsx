import {Link} from "react-router-dom"
import {useCustomFunctions, useGetMovieSerie} from "../../hooks"

export const RecommendationsSeries = ({serieId}) => {
  const {movieSerie, loading, error} = useGetMovieSerie(
    `/tv/${serieId}/recommendations`
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
            Recommendations
          </h3>
          {loading ? (
            <div className="flex justify-center">
              <span className="loader"></span>
            </div>
          ) : (
            <div className="grid gap-3 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-6 mb-10">
              {movieSerie.results.slice(0, 6).map((serie) => {
                return (
                  <div
                    key={serie.id}
                    className="border-2 border-transparent hover:border-[#2074F6] rounded-xl"
                  >
                    <Link
                      to={`/serie/${serie.name
                        .toLowerCase()
                        .split(" ")
                        .join("-")}/${serie.id}`}
                    >
                      <div
                        className="overflow-hidden rounded-xl relative text-white h-full"
                        data-movie-id={serie.id}
                      >
                        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-[#1d273d2b] to-transparent" />

                        <div className="relative cursor-pointer group z-10 p-5 space-y-6">
                          <div className=" align-self-end w-full mt-10">
                            <div className="h-52" />
                            <div className="space-y-6">
                              <div className="flex flex-col space-y-2 inner mt-3">
                                <h3 className="text-base font-bold text-white min-h-[56px]">
                                  {serie.name}
                                </h3>
                              </div>
                              <div className=" flex flex-col-2 justify-around text-sm">
                                <div
                                  className={`flex flex-col border rounded-md p-1 min-w-[53px] ${colorScore(
                                    serie.vote_average.toFixed(1)
                                  )}`}
                                >
                                  <div className=" text-3xl text-center font-bold text-black">
                                    {serie.vote_average.toFixed(1)}
                                  </div>
                                </div>
                                <div className="flex flex-col p-1">
                                  <div className="text-sm">
                                    {serie?.first_air_date}
                                  </div>
                                  <div className="text-xs text-gray-400">
                                    Release date
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <img
                          className="absolute inset-0 transform w-full -translate-y-4"
                          src={`${
                            serie.poster_path
                              ? `https://image.tmdb.org/t/p/w780/${serie.poster_path}`
                              : "/movie-play.svg"
                          }`}
                          style={{
                            maskImage:
                              "linear-gradient(black 60%, transparent)",
                          }}
                          alt={`${serie.name}`}
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
