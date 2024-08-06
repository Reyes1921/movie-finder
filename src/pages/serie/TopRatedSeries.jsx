// import {Layout} from "../../layout/Layout"
// import {Loading, SerieGrid} from "../../components"
// import {useGetMovieSerie} from "../../hooks"

import {InfiniteSeries} from "../../components"

export const TopRatedSeries = () => {
  // const {movieSerie, loading, error} = useGetMovieSerie("/tv/top_rated")
  // error ? console.log(error) : ""

  return (
    <InfiniteSeries media_type={"top_rated"} title={"Top Rated Series"} />
    // <Layout>
    //   {loading ? (
    //     <Loading />
    //   ) : (
    //     <>
    //       <h2 className="text-3xl md:text-4xl pt-8 md:pt-5 p-5 text-center md:text-left font-bold text-[#3b82f6]">
    //         Top Rated Series
    //       </h2>
    //       <SerieGrid serieData={movieSerie} />
    //     </>
    //   )}
    // </Layout>
  )
}
