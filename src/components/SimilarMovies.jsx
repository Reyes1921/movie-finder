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
        <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-6 ">
          {movieSerie.results.slice(0, 6).map((movie) => {
            return (
              <div key={movie.id}>
                <Link
                  to={`/movie/${movie.title
                    .toLowerCase()
                    .split(" ")
                    .join("-")}/${movie.id}`}
                >
                  <div
                    className="overflow-hidden rounded-xl relative transform shadow-lg hover:shadow-2xl movie-item text-white movie-card h-full"
                    data-movie-id={movie.id}
                  >
                    <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-gray-900 to-transparent" />

                    <div
                      className="relative cursor-pointer group z-10 px-10 pt-10 space-y-6 movie_info"
                      data-lity=""
                    >
                      <div className="poster__info align-self-end w-full mt-10">
                        <div className="h-32" />
                        <div className="space-y-6 detail_info">
                          <div className="flex flex-col space-y-2 inner mt-3">
                            <h3
                              className="text-md font-bold text-white"
                              data-unsp-sanitized="clean"
                            >
                              {movie.title}
                            </h3>
                          </div>
                          <div className="flex flex-col overview">
                            <div className="flex flex-col" />
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
                      style={{filter: "grayscale(0)"}}
                      alt={`${movie.title}`}
                    />
                    <div className="poster__footer flex justify-center flex-row relative pb-10 space-x-4 z-10 mb-3">
                      <div className="imdb-box w-50">
                        <div
                          className={`flex flex-col border rounded-md p-1 ${colorScore(
                            movie.vote_average.toFixed(1)
                          )}`}
                        >
                          <div className="imdb-score text-3xl text-center font-bold text-black">
                            {movie.vote_average.toFixed(1)}
                          </div>
                          <div className="imdb-title text-center text-black">
                            moviedb
                          </div>
                          <div className="imdb-voted text-xs text-black">
                            {movie.vote_count} votes
                          </div>
                        </div>
                      </div>
                      <button id="btn2" className="btn bt2 text-xs ">
                        More Info
                      </button>
                    </div>
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
