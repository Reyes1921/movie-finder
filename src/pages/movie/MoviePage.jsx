import {useParams} from "react-router-dom"
import {LayoutSingle} from "../../layout"
import {useGetMovieSerie} from "../../hooks"
import {
  CastMovie,
  RecommendationsMovies,
  StatsMovie,
  CrewMovie,
  Loading,
  Companies,
} from "../../components"
import {Accordion, AccordionTab} from "primereact/accordion"
import {FaUserGroup} from "react-icons/fa6"

export const MoviePage = () => {
  const {movieId} = useParams()

  const {
    movieSerie: movie,
    loading,
    error,
  } = useGetMovieSerie(`/movie/${movieId}`)

  const dataCrew = useGetMovieSerie(`/movie/${movieId}/credits`)

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
              backgroundImage: `url(${
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${movie.backdrop_path}`
                  : "/movie-play.svg"
              })`,
            }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-4 pp">
              <div className="col-span-1 flex justify-center">
                <img
                  className="h-64 md:h-full max-w-full rounded p-5 object-contain aspect-[16/9]"
                  loading="lazy"
                  src={`${
                    movie.poster_path
                      ? `https://image.tmdb.org/t/p/w780/${movie.poster_path}`
                      : "/movie-play.svg"
                  }`}
                  alt={`${movie.title}`}
                />
              </div>
              <div className="col-span-3 md:pl-9 p-5">
                <h3 className="text-left text-white text-xl md:text-4xl lg:text-4xl mb-5 font-bold">
                  {movie.title}
                  {" - "}
                  <span style={{color: "#3B82F6"}}>
                    {movie.release_date.substr(0, 4)}
                  </span>
                </h3>
                <p className="text-white text-justify mb-5 text-1xl">
                  {movie.overview}
                </p>
                <StatsMovie data={movie} />
              </div>
            </div>
          </div>
          <div className="w-full m-0 overflow-hidden">
            <CastMovie id={movie.id} />
            <div className="flex items-center justify-center bg-slate-900 h-auto">
              <div className="w-full bg-slate-900">
                <div className="">
                  <h3 className="text-left text-white text-xl md:text-4xl mb-5 font-bold my-5">
                    Crew
                  </h3>
                  <div className="md:w-full">
                    <Accordion className="bg-[#1B2335] rounded-2xl">
                      <AccordionTab
                        header={
                          <span className="flex items-center gap-2 w-full">
                            <FaUserGroup className=" text-xl md:text-2xl" />
                            <span className="font-bold white-space-nowrap ml-2 text-center">
                              Crew
                            </span>
                          </span>
                        }
                      >
                        <CrewMovie {...dataCrew} img={movie.poster_path} />
                      </AccordionTab>
                    </Accordion>
                  </div>
                </div>
              </div>
            </div>
            <Companies companies={movie.production_companies} />
            <RecommendationsMovies movieId={movie.id} />
          </div>
        </div>
      )}
    </LayoutSingle>
  )
}
