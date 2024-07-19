import {Link} from "react-router-dom"
import {Carousel} from "primereact/carousel"
import {useEffect, useState} from "react"
import {useCustomFunctions, useGetMovieSerie} from "../hooks"

export const KnownFor = ({id}) => {
  const [personId, setPersonId] = useState(id)

  const {responsiveOptionsPerson} = useCustomFunctions()
  const {
    movieSerie: moviesSeries,
    loading,
    error,
  } = useGetMovieSerie(`/person/${personId}/combined_credits`)

  useEffect(() => {
    setPersonId(id)
  }, [])

  const personTemplate = (movieOrSerie) => {
    return (
      <div
        key={movieOrSerie.id}
        className="border-2 border-transparent hover:scale-105 rounded-xl transition-all p-1"
      >
        <Link
          to={`/${movieOrSerie.media_type === "movie" ? "movie" : "serie"}/${
            movieOrSerie.title
              ? movieOrSerie.title?.toLowerCase().split(" ").join("-")
              : movieOrSerie.name?.toLowerCase().split(" ").join("-")
          }/${movieOrSerie.id}`}
        >
          <div
            className="overflow-hidden rounded-xl relative text-white h-full"
            data-movie-id={movieOrSerie.id}
          >
            <div className="absolute inset-0 z-10" />

            <div className="relative cursor-pointer group z-10 p-5 space-y-6">
              <div className=" align-self-end w-full mt-10">
                <div className="h-16" />
                <div className="space-y-6">
                  <div className="flex flex-col space-y-2 inner mt-3"></div>
                  <div className=" flex flex-col-2 justify-around text-sm"></div>
                </div>
              </div>
            </div>
            <img
              className="absolute inset-0 transform w-full -translate-y-4"
              src={`https://image.tmdb.org/t/p/w342/${movieOrSerie.poster_path}`}
              alt={`${movieOrSerie.title}`}
            />
          </div>
          <h3 className="text-base text-white text-center min-h-[56px] mt-2">
            {movieOrSerie.title || movieOrSerie.name}
          </h3>
        </Link>
      </div>
    )
  }

  return (
    <>
      {loading ? (
        <div className="flex justify-center">
          <span className="loader"></span>
        </div>
      ) : (
        <div>
          <Carousel
            value={moviesSeries.cast}
            numVisible={5}
            numScroll={3}
            responsiveOptions={responsiveOptionsPerson()}
            itemTemplate={personTemplate}
            circular
          />
        </div>
      )}
    </>
  )
}
