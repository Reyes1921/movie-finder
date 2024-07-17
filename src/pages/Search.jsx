import {Layout} from "../layout/Layout"
import {SearchGrid} from "../components"
import {useGetMovieSerie} from "../hooks"
import {useParams} from "react-router-dom"

export const Search = () => {
  const {data} = useParams()
  const {movieSerie, loading, error} = useGetMovieSerie(
    `/search/multi?query=${data}`
  )
  return (
    <Layout loading={loading} search={movieSerie}>
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
    </Layout>
  )
}
