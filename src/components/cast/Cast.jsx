import {useGetMovieSerie} from "../../hooks"
import {Link} from "react-router-dom"
import {Swiper, SwiperSlide} from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import {Navigation, Pagination, Keyboard, FreeMode} from "swiper/modules"
import {useTranslation} from "react-i18next"
import {useEffect, useState} from "react"

export const Cast = ({type, id}) => {
  const {t, i18n} = useTranslation()
  const [language, setLanguage] = useState(i18n.language)

  useEffect(() => {
    setLanguage(i18n.language)
  }, [i18n.language])

  const {
    movieSerie: cast,
    loading,
    error,
  } = useGetMovieSerie(
    `/${type}/${id}/credits?${
      language === "en" ? "language=en-US" : "language=es-ES"
    }`
  )

  error ? console.log(error) : ""

  return (
    <div
      className={`md:mt-16 px-5 items-center justify-center bg-slate-900 w-full h-auto rounded-lg ${
        cast?.cast?.length > 0 ? "flex" : "hidden"
      }`}
    >
      <div className="w-full bg-slate-900 py-5 rounded-md">
        <div className="">
          <h3 className="text-left text-white text-xl md:text-4xl mb-5 font-bold">
            {t("Cast")}
          </h3>
        </div>
        <div className="bg-[#1B2335] rounded-2xl py-3 ">
          {loading ? (
            <div className="flex justify-center">
              <span className="loader"></span>
            </div>
          ) : (
            <div className="swiper-white">
              <Swiper
                loop={cast.cast.length > 8 ? true : false}
                slidesPerView={cast.cast.length > 3 ? 3 : cast.cast.length}
                slidesPerGroup={cast.cast.length > 2 ? 2 : cast.cast.length}
                breakpoints={{
                  640: {
                    slidesPerView: cast.cast.length > 3 ? 3 : cast.cast.length,
                    slidesPerGroup: cast.cast.length > 2 ? 2 : cast.cast.length,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: cast.cast.length > 5 ? 5 : cast.cast.length,
                    slidesPerGroup: cast.cast.length > 3 ? 3 : cast.cast.length,
                    spaceBetween: 40,
                  },
                  1024: {
                    slidesPerView: cast.cast.length > 8 ? 8 : cast.cast.length,
                    slidesPerGroup: cast.cast.length > 4 ? 4 : cast.cast.length,
                    spaceBetween: 30,
                  },
                }}
                freeMode={true}
                // cssMode={true}
                navigation={true}
                keyboard={true}
                modules={[FreeMode, Navigation, Pagination, Keyboard]}
                className="mySwiper"
              >
                {cast.cast.map((person) => {
                  return (
                    <SwiperSlide key={person.id}>
                      <div className="flex justify-center p-0 m-0 hover:scale-110 transition-all">
                        <Link
                          className="rounded-sm p-1"
                          to={`/person/${person.id}/${person?.name
                            .toLowerCase()
                            .split(" ")
                            .join("-")}`}
                        >
                          <img
                            src={
                              person.profile_path == null
                                ? "/profile-square.svg"
                                : `https://media.themoviedb.org/t/p/w138_and_h175_face/${person.profile_path}`
                            }
                            alt={`${person.name}`}
                            className="rounded-lg w-16 h-16 md:w-32 md:h-32 object-cover mx-auto"
                          />
                          <div className="mt-2 leading-3">
                            <p className="text-[10px] sm:text-xs md:text-sm text-center sm:text-left">
                              {person.name}
                            </p>
                            <span className="text-[10px] sm:text-xs md:text-xs text-[#3b82f6] text-center sm:text-left break-all">
                              {person.character}
                            </span>
                          </div>
                        </Link>
                      </div>
                    </SwiperSlide>
                  )
                })}
              </Swiper>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
