import {Layout} from "../../layout/Layout"
import {Loading, SerieGrid} from "../../components"
import {useGetMovieSerie} from "../../hooks"

export const TopRatedSeries = () => {
  const {movieSerie, loading, error} = useGetMovieSerie("/tv/top_rated")
  error ? console.log(error) : ""

  return (
    <Layout>
      {loading ? (
        <Loading />
      ) : (
        <>
          <h2 className="text-4xl p-4 ml-5 text-center md:text-left font-bold text-[#3b82f6]">
            Top Rated Series
          </h2>
          <SerieGrid serieData={movieSerie} />
        </>
      )}
    </Layout>
  )
}
