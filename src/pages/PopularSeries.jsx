import {Layout} from "../layout/Layout"
import {SerieGrid} from "../components"
import {useGetMovieSerie} from "../hooks"

export const PopularSeries = () => {
  const {movieSerie, loading, error} = useGetMovieSerie("/tv/popular")
  return (
    <Layout loading={loading} error={error}>
      <h2 className="text-4xl p-4 ml-5 text-center md:text-left font-bold text-[#3b82f6]">
        Popluar Series
      </h2>
      <SerieGrid serieData={movieSerie} />
    </Layout>
  )
}
