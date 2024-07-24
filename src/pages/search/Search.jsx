import {Layout} from "../../layout/Layout"
import {Loading, SearchGrid} from "../../components"
import {useGetMovieSerie} from "../../hooks"
import {useParams} from "react-router-dom"

export const Search = () => {
  const {data} = useParams()
  const {movieSerie, loading, error} = useGetMovieSerie(
    `/search/multi?query=${data}`
  )
  error ? console.log(error) : ""
  return (
    <Layout loading={loading} search={movieSerie}>
      {loading ? (
        <Loading />
      ) : (
        <>
          <h2 className="text-4xl p-4 ml-5 text-center md:text-left font-bold text-[#3b82f6]">
            Results for: <span className="text-white">{data}</span>
          </h2>
          {movieSerie?.results?.length === 0 ? (
            <div className="h-screen flex justify-center items-center animated fadeIn">
              <h3 className="text-white text-center text-4xl p-20">
                There are no results to show for "
                <span className="text-blue-500">{data}</span>"
              </h3>
            </div>
          ) : (
            <SearchGrid data={movieSerie} />
          )}
        </>
      )}
    </Layout>
  )
}
