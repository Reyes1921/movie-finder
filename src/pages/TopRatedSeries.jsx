import {Layout} from "../layout/Layout"
import {SerieGrid} from "../components"
import {useGetMovieSerie} from "../hooks"

export const TopRatedSeries = () => {
  const {movieSerie, loading, error} = useGetMovieSerie("/tv/top_rated")
  return (
    <Layout loading={loading} error={error}>
      <SerieGrid serieData={movieSerie} />
    </Layout>
  )
}
