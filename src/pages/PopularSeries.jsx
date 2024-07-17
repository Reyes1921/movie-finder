import {Layout} from "../layout/Layout"
import {SerieGrid} from "../components"
import {useGetMovieSerie} from "../hooks"

export const PopularSeries = () => {
  const {movieSerie, loading, error} = useGetMovieSerie("/tv/popular")
  return (
    <Layout loading={loading} error={error}>
      <SerieGrid serieData={movieSerie} />
    </Layout>
  )
}
