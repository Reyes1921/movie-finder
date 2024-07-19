import {useParams} from "react-router-dom"
import {LayoutSingle} from "../layout"
import {useGetMovieSerie} from "../hooks"
import {CastSerie, SimilarSeries, StatsSerie} from "../components"

export const SeriePage = () => {
  const {serieId} = useParams()

  const {movieSerie: serie, loading, error} = useGetMovieSerie(`/tv/${serieId}`)

  return (
    <LayoutSingle loading={loading} error={error}>
      <div className="w-full h-auto bg-slate-900 shadow-md overflow-hidden mx-auto grid gap-1 grid-cols-1 md:grid-cols-1 lg:grid-cols-4 m-10">
        <div className=" md:w-full flex justify-center mb-5">
          <img
            className="rounded w-ful "
            src={`${
              serie.poster_path
                ? `https://image.tmdb.org/t/p/w342/${serie.poster_path}`
                : "/movie-play.svg"
            }`}
            alt={`${serie?.name}`}
          />
        </div>
        <div className="col-span-3 lg:ml-10">
          <h3 className="text-left text-white text-3xl md:text-4xl lg:text-4xl mb-5 font-bold">
            {serie?.name}{" "}
            <span style={{color: "#3B82F6"}}>
              {serie?.first_air_date?.substr(0, 4)}
            </span>
          </h3>
          <p className="text-white text-justify mb-5 text-1xl ">
            {serie?.overview}
          </p>
          <StatsSerie data={serie} />
        </div>
      </div>

      <div className="w-full m-0 overflow-hidden">
        <CastSerie id={serie?.id} />
        <SimilarSeries serieId={serie?.id} />
      </div>
    </LayoutSingle>
  )
}
