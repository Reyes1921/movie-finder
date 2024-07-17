import {Layout} from "../layout/Layout"
import {MovieGridRest} from "../components"
import {useGetMovieSerie} from "../hooks"

export const PopularMovies = () => {
  const {movieSerie, loading, error} = useGetMovieSerie("/movie/popular")

  return (
    <Layout loading={loading} error={error} pagination={movieSerie}>
      <MovieGridRest movieData={movieSerie} />
    </Layout>
  )
}
