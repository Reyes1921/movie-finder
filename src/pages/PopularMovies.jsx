import {Layout} from "../layout/Layout"
import {MovieGridRest} from "../components"
import {useGetMovieSerie} from "../hooks"

export const PopularMovies = () => {
  const {movieSerie, loading, error} = useGetMovieSerie("/movie/popular")

  return (
    <Layout loading={loading} error={error} pagination={movieSerie}>
      <h2 className="text-4xl p-4 ml-5 text-center md:text-left font-bold text-[#3b82f6]">
        Popluar Movies
      </h2>
      <MovieGridRest movieData={movieSerie} />
    </Layout>
  )
}
