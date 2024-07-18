import {Link} from "react-router-dom"
import {useCustomFunctions, useGetMovieSerie} from "../hooks"

export const SimilarMovies = ({movieId}) => {
  const {movieSerie, loading, error} = useGetMovieSerie(
    `/movie/${movieId}/similar`
  )

  const {colorScore} = useCustomFunctions()
  return (
    <>
      <h3 className="text-left text-white text-4xl mb-10 mt-10 font-bold">
        Similar Movies
      </h3>
      {loading ? (
        <div className="flex justify-center">
          <span className="loader"></span>
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-6 mb-10">
          {movieSerie.results.slice(0, 6).map((movie) => {
            return (
              <div
                key={movie.id}
                className="border-2 border-transparent hover:border-[#2074F6] rounded-xl"
              >
                <Link
                  to={`/movie/${movie.title
                    .toLowerCase()
                    .split(" ")
                    .join("-")}/${movie.id}`}
                >
                  <div
                    className="overflow-hidden rounded-xl relative text-white h-full"
                    data-movie-id={movie.id}
                  >
                    <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-gray-900 to-transparent" />

                    <div className="relative cursor-pointer group z-10 p-5 space-y-6">
                      <div className=" align-self-end w-full mt-10">
                        <div className="h-16" />
                        <div className="space-y-6">
                          <div className="flex flex-col space-y-2 inner mt-3">
                            <h3 className="text-xl font-bold text-white min-h-[56px]">
                              {movie.title}
                            </h3>
                          </div>
                          <div className=" flex flex-col-2 justify-around text-sm">
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
                                Release date
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col">
                            <div className="text-xs text-gray-400 mb-2">
                              Overview:
                            </div>
                            <p className="text-xs text-gray-100 mb-6">
                              {movie?.overview.substr(0, 40) + "..."}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <img
                      className="absolute inset-0 transform w-full -translate-y-4"
                      src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`}
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
  )
}
