import {useGetMovieSerie} from "../../hooks"
import {Link} from "react-router-dom"
import {Swiper, SwiperSlide} from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import {Navigation, Pagination, Mousewheel, Keyboard} from "swiper/modules"

export const Cast = ({type, id}) => {
  const {
    movieSerie: cast,
    loading,
    error,
  } = useGetMovieSerie(`/${type}/${id}/credits`)

  error ? console.log(error) : ""

  return (
    <div
      className={` items-center justify-center bg-slate-900 h-auto ${
        cast?.cast?.length > 0 ? "flex" : "hidden"
      }`}
    >
      <div className="w-full bg-slate-900">
        <div className="">
          <h3 className="text-left text-white text-xl md:text-4xl mb-5 font-bold">
            Cast
          </h3>
        </div>
        <div className="bg-[#1B2335] rounded-2xl py-3">
          {loading ? (
            <div className="flex justify-center">
              <span className="loader"></span>
            </div>
          ) : (
            <div className="swiper-white">
              <Swiper
                loop={true}
                breakpoints={{
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 40,
                  },
                  1024: {
                    slidesPerView: 6,
                    spaceBetween: 30,
                  },
                }}
                cssMode={true}
                navigation={true}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
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
                          <div className="mt-2">
                            <p className="text-[10px] sm:text-xs md:text-sm font-bold text-center sm:text-left">
                              {person.name}
                            </p>
                            <span className="text-[10px] sm:text-xs md:text-sm text-[#3b82f6] text-center sm:text-left break-all">
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
