import {useEffect, useState} from "react"
import {Link} from "react-router-dom"
import {useGetMovieSerie} from "../../hooks"
import {Swiper, SwiperSlide} from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import {Navigation, Pagination, Mousewheel, Keyboard} from "swiper/modules"

export const KnownFor = ({id}) => {
  const [personId, setPersonId] = useState(id)

  const {
    movieSerie: moviesSeries,
    loading,
    error,
  } = useGetMovieSerie(`/person/${personId}/combined_credits`)
  error ? console.log(error) : ""

  useEffect(() => {
    setPersonId(id)
  }, [id])

  return (
    <>
      {loading ? (
        <div className="flex justify-center">
          <span className="loader"></span>
        </div>
      ) : (
        <div
          className={` aspect-[8]${
            moviesSeries?.cast.length === 1
              ? "flex"
              : moviesSeries?.cast.length > 1
              ? "block"
              : "hidden"
          }`}
        >
          <Swiper
            loop={true}
            centeredSlides={true}
            breakpoints={{
              640: {
                slidesPerView:
                  moviesSeries.cast.length > 1 ? 1 : moviesSeries.cast.length,
                spaceBetween: 20,
              },
              768: {
                slidesPerView:
                  moviesSeries.cast.length > 3 ? 3 : moviesSeries.cast.length,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView:
                  moviesSeries.cast.length > 5 ? 5 : moviesSeries.cast.length,
                spaceBetween: 30,
              },
            }}
            cssMode={true}
            navigation={"true"}
            mousewheel={true}
            keyboard={true}
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            className="mySwiper"
          >
            {moviesSeries.cast.map((movieOrSerie) => {
              return (
                <SwiperSlide key={Math.random(0, movieOrSerie.id)}>
                  <div className="border-2 border-transparent hover:scale-105 rounded-xl transition-all p-1">
                    <Link
                      to={`/${
                        movieOrSerie.media_type === "movie" ? "movie" : "serie"
                      }/${
                        movieOrSerie.title
                          ? movieOrSerie.title
                              ?.toLowerCase()
                              .split(" ")
                              .join("-")
                          : movieOrSerie.name
                              ?.toLowerCase()
                              .split(" ")
                              .join("-")
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
                          src={`${
                            movieOrSerie.poster_path
                              ? `https://image.tmdb.org/t/p/w780/${movieOrSerie.poster_path}`
                              : "/movie-play.svg"
                          }`}
                          alt={`${movieOrSerie.title}`}
                        />
                      </div>
                      <h3 className="text-base text-white text-center min-h-[56px] mt-2">
                        {movieOrSerie.title || movieOrSerie.name}
                      </h3>
                    </Link>
                  </div>
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>
      )}
    </>
  )
}
