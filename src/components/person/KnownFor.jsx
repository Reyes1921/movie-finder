import {useEffect, useState} from "react"
import {Link} from "react-router-dom"
import {useGetMovieSerie} from "../../hooks"
import {Swiper, SwiperSlide} from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import {Navigation, Pagination, Mousewheel, Keyboard} from "swiper/modules"
import {useTranslation} from "react-i18next"

export const KnownFor = ({id}) => {
  const {i18n} = useTranslation()
  const [language, setLanguage] = useState(i18n.language)
  const [personId, setPersonId] = useState(id)

  useEffect(() => {
    setLanguage(i18n.language)
  }, [i18n.language])

  const {
    movieSerie: moviesSeries,
    loading,
    error,
  } = useGetMovieSerie(
    `/person/${personId}/combined_credits?${
      language === "en" ? "language=en-US" : "language=es-ES"
    }`
  )
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
            loop={moviesSeries.cast.length > 5 ? true : false}
            slidesPerView={
              moviesSeries.cast.length > 2 ? 2 : moviesSeries.cast.length
            }
            breakpoints={{
              640: {
                slidesPerView:
                  moviesSeries.cast.length > 2 ? 2 : moviesSeries.cast.length,
              },
              768: {
                slidesPerView:
                  moviesSeries.cast.length > 3 ? 3 : moviesSeries.cast.length,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView:
                  moviesSeries.cast.length > 5 ? 5 : moviesSeries.cast.length,
                spaceBetween: 15,
              },
            }}
            cssMode={true}
            navigation={true}
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
                              .replace("?", "")
                              .split(" ")
                              .join("-")
                          : movieOrSerie.name
                              ?.toLowerCase()
                              .replace("?", "")
                              .split(" ")
                              .join("-")
                      }/${movieOrSerie.id}`}
                    >
                      <img
                        className="rounded-xl"
                        src={`${
                          movieOrSerie.poster_path
                            ? `https://image.tmdb.org/t/p/w780/${movieOrSerie.poster_path}`
                            : "/movie-play.svg"
                        }`}
                        alt={`${movieOrSerie.title}`}
                      />

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
