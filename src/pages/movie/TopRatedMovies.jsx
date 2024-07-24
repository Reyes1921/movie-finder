import {Layout} from "../../layout/Layout"
import {Loading, MovieGridRest} from "../../components"
import {useGetMovieSerie} from "../../hooks"

export const TopRatedMovies = () => {
  const {movieSerie, loading, error} = useGetMovieSerie("/movie/top_rated")
  error ? console.log(error) : ""

  return (
    <Layout>
      {loading ? (
        <Loading />
      ) : (
        <>
          <h2 className="text-3xl md:text-4xl pt-8 md:pt-5 p-5 text-center md:text-left font-bold text-[#3b82f6]">
            Top Rated Movies
          </h2>
          <MovieGridRest movieData={movieSerie} />
        </>
      )}
    </Layout>
  )
}
