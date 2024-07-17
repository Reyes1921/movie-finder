import {Layout} from "../layout/Layout"
import {MovieGridRest} from "../components"
import {useGetMovieSerie} from "../hooks"

export const TopRatedMovies = () => {
  const {movieSerie, loading, error} = useGetMovieSerie("/movie/top_rated")
  return (
    <Layout loading={loading} error={error}>
      <h2 className="text-4xl p-4 ml-5 text-center md:text-left font-bold text-[#3b82f6]">
        Top Rated Movies
      </h2>
      <MovieGridRest movieData={movieSerie} />
    </Layout>
  )
}
