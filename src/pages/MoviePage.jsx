import {useParams} from "react-router-dom"
import {LayoutSingle} from "../layout"
import {useGetMovieSerie} from "../hooks"
import {CastMovie, SimilarMovies, StatsMovie, CrewMovie} from "../components"

export const MoviePage = () => {
  const {movieId} = useParams()

  const {
    movieSerie: movie,
    loading,
    error,
  } = useGetMovieSerie(`/movie/${movieId}`)

  return (
    <LayoutSingle loading={loading} error={error}>
      <div className="w-full h-auto bg-slate-900 shadow-md overflow-hidden mx-auto grid gap-1 grid-cols-1 lg:grid-cols-4 m-10">
        <div className="flex justify-center items-center mb-5">
          <img
            className="h-64 md:h-full max-w-full rounded object-contain bg-contain"
            src={`https://image.tmdb.org/t/p/w342/${movie?.poster_path}`}
            alt={`${movie?.title}`}
          />
        </div>
        <div className="col-span-3 lg:ml-9">
          <h3 className="text-left text-white text-3xl md:text-4xl lg:text-4xl mb-5 font-bold">
            {movie?.title}{" "}
            <span style={{color: "#3B82F6"}}>
              {movie?.release_date?.substr(0, 4)}
            </span>
          </h3>
          <p className="text-white text-justify mb-5 text-1xl ">
            {movie?.overview}
          </p>
          <StatsMovie data={movie} />
        </div>
      </div>

      <div className="w-full m-0 overflow-hidden">
        <CastMovie id={movie?.id} />
        <CrewMovie idMovie={movie?.id} />
        <SimilarMovies movieId={movie?.id} />
      </div>
    </LayoutSingle>
  )
}
