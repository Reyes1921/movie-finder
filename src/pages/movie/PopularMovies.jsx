import {Layout} from "../../layout/Layout"
import {Loading, MovieGridRest} from "../../components"
import {useGetMovieSerie} from "../../hooks"

export const PopularMovies = () => {
  const {movieSerie, loading, error} = useGetMovieSerie("/movie/popular")
  error ? console.log(error) : ""

  return (
    <Layout>
      {loading ? (
        <Loading />
      ) : (
        <>
          <h2 className="text-4xl p-5 text-center md:text-left font-bold text-[#3b82f6]">
            Popluar Movies
          </h2>
          <MovieGridRest movieData={movieSerie} />
        </>
      )}
    </Layout>
  )
}
