import {Layout} from "../layout/Layout"
import {MovieGridRest} from "../components"
import {useGetMovieSerie} from "../hooks"

export const TopRatedMovies = () => {
  const {movieSerie, loading, error} = useGetMovieSerie("/movie/top_rated")
  return (
    <Layout loading={loading} error={error}>
      <MovieGridRest movieData={movieSerie} />
    </Layout>
  )
}
