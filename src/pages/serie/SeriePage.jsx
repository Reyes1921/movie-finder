import {useParams} from "react-router-dom"
import {LayoutSingle} from "../../layout"
import {useGetMovieSerie} from "../../hooks"
import {
  Companies,
  Loading,
  RecommendationsSeries,
  StatsSerie,
  Cast,
} from "../../components"

export const SeriePage = () => {
  const {serieId} = useParams()

  const {movieSerie: serie, loading, error} = useGetMovieSerie(`/tv/${serieId}`)
  error ? console.log(error) : ""
  window.scrollTo(0, 0)
  return (
    <LayoutSingle>
      {loading ? (
        <Loading />
      ) : (
        <div className="p-5">
          <div
            className="md:gg w-full h-auto shadow-md overflow-hidden bg-cover my-5 rounded-2xl"
            style={{
              maskImage: "linear-gradient(black 97%, transparent)",
              backgroundImage: `url(${
                serie.poster_path
                  ? `https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${serie.backdrop_path}`
                  : "/movie-play.svg"
              })`,
            }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-4 pp">
              <div className="col-span-1 flex justify-center">
                <img
                  className="h-64 md:h-full max-w-full rounded object-contain bg-contain p-5 aspect-[16/9]"
                  src={`${
                    serie.poster_path
                      ? `https://image.tmdb.org/t/p/w780/${serie.poster_path}`
                      : "/movie-play.svg"
                  }`}
                  alt={`${serie.name}`}
                />
              </div>
              <div className="col-span-3 md:pl-9 p-5">
                <h3 className="text-left text-white text-3xl md:text-4xl lg:text-4xl mb-5 font-bold">
                  {serie.name}
                  {" - "}
                  <span style={{color: "#3B82F6"}}>
                    {serie.first_air_date.substr(0, 4)}
                  </span>
                </h3>
                <p className="text-white text-justify mb-5 text-1xl ">
                  {serie.overview}
                </p>
                <StatsSerie data={serie} />
              </div>
            </div>
          </div>

          <div className="w-full m-0 overflow-hidden">
            <Cast type={"tv"} id={serie.id} />
            <Companies companies={serie.production_companies} />
            <RecommendationsSeries serieId={serie.id} />
          </div>
        </div>
      )}
    </LayoutSingle>
  )
}
