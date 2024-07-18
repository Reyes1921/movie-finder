import {useParams} from "react-router-dom"
import {LayoutSingle} from "../layout"
import {useGetMovieSerie} from "../hooks"
import {CastMovie, SimilarMovies, StatsMovie, CrewMovie} from "../components"
import {Accordion, AccordionTab} from "primereact/accordion"
import {FaUserGroup} from "react-icons/fa6"

export const MoviePage = () => {
  const {movieId} = useParams()

  const {
    movieSerie: movie,
    loading,
    error,
  } = useGetMovieSerie(`/movie/${movieId}`)

  return (
    <LayoutSingle loading={loading} error={error}>
      <div className="w-full h-auto bg-slate-900 shadow-md overflow-hidden mx-auto grid gap-1 grid-cols-1 lg:grid-cols-4 m-10">
        <div className="flex justify-center items-center mb-5">
          <img
            className="h-64 md:h-full max-w-full rounded object-contain bg-contain"
            src={`https://image.tmdb.org/t/p/w342/${movie?.poster_path}`}
            alt={`${movie?.title}`}
          />
        </div>
        <div className="col-span-3 lg:ml-9">
          <h3 className="text-left text-white text-3xl md:text-4xl lg:text-4xl mb-5 font-bold">
            {movie?.title}{" "}
            <span style={{color: "#3B82F6"}}>
              {movie?.release_date?.substr(0, 4)}
            </span>
          </h3>
          <p className="text-white text-justify mb-5 text-1xl ">
            {movie?.overview}
          </p>
          <StatsMovie data={movie} />
        </div>
      </div>

      <div className="w-full m-0 overflow-hidden">
        <CastMovie id={movie?.id} />
        <div className="flex items-center justify-center bg-slate-900 h-auto">
          <div className="w-full bg-slate-900">
            <div className="">
              <h3 className="text-left text-white text-4xl mb-5 font-bold my-5">
                Crew
              </h3>
              <div className="md:w-full">
                <Accordion className="bg-[#1B2335] rounded-2xl">
                  <AccordionTab
                    header={
                      <span className="flex items-center gap-2 w-full">
                        <FaUserGroup className=" text-2xl" />
                        <span className="font-bold white-space-nowrap ml-2 text-center">
                          Crew
                        </span>
                      </span>
                    }
                  >
                    <CrewMovie idMovie={movie?.id} />
                  </AccordionTab>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
        <SimilarMovies movieId={movie?.id} />
      </div>
    </LayoutSingle>
  )
}
