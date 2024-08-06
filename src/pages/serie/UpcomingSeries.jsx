// import {Layout} from "../../layout/Layout"
import {
  InfiniteMovies,
  InfiniteSeries,
  Loading,
  SerieGrid,
} from "../../components"
// import {useGetMovieSerie} from "../../hooks"

export const UpcomingSeries = () => {
  // const {movieSerie, loading, error} = useGetMovieSerie("/tv/popular")
  // error ? console.log(error) : ""

  return (
    <InfiniteSeries media_type={"on_the_air"} title={"On The Air Series"} />
    // <Layout>
    //   {loading ? (
    //     <Loading />
    //   ) : (
    //     <>
    //       <h2 className="text-3xl md:text-4xl pt-8 md:pt-5 p-5 text-center md:text-left font-bold text-[#3b82f6]">
    //         Popluar Series
    //       </h2>
    //       <SerieGrid serieData={movieSerie} />
    //     </>
    //   )}
    // </Layout>
  )
}
