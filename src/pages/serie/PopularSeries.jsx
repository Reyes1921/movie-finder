import {Layout} from "../../layout/Layout"
import {Loading, SerieGrid} from "../../components"
import {useGetMovieSerie} from "../../hooks"

export const PopularSeries = () => {
  const {movieSerie, loading, error} = useGetMovieSerie("/tv/popular")
  error ? console.log(error) : ""

  return (
    <Layout>
      {loading ? (
        <Loading />
      ) : (
        <>
          <h2 className="text-3xl md:text-4xl pt-8 md:pt-5 p-5 text-center md:text-left font-bold text-[#3b82f6]">
            Popluar Series
          </h2>
          <SerieGrid serieData={movieSerie} />
        </>
      )}
    </Layout>
  )
}
