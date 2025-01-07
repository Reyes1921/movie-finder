import {languages} from "../../helpers/languages"
import {Swiper, SwiperSlide} from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import {Navigation, Pagination, Keyboard, FreeMode} from "swiper/modules"
import {useTranslation} from "react-i18next"

export const Companies = ({companies}) => {
  const {t} = useTranslation()
  return (
    <div
      className={` my-5 items-center justify-center bg-[slate-900] h-auto ${
        companies.length > 0 ? "flex" : "hidden"
      }`}
    >
      <div className="w-full bg-slate-900 p-5 rounded-lg">
        <div className="">
          <h3 className="text-left text-white text-xl md:text-4xl mb-5 font-bold">
            {t("Production Companies")}
          </h3>
        </div>
        <div className="bg-[#3B82F6] bg-opacity-80 rounded-2xl py-3">
          <div className="swiper-white">
            <Swiper
              loop={companies.length > 3 ? true : false}
              slidesPerView={companies.length > 3 ? 3 : companies.length}
              slidesPerGroup={companies.length > 2 ? 2 : companies.length}
              breakpoints={{
                640: {
                  slidesPerView: companies.length > 3 ? 3 : companies.length,
                  slidesPerGroup: companies.length > 2 ? 2 : companies.length,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: companies.length > 5 ? 5 : companies.length,
                  slidesPerGroup: companies.length > 3 ? 3 : companies.length,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: companies.length > 8 ? 8 : companies.length,
                  slidesPerGroup: companies.length > 4 ? 4 : companies.length,
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
              {companies.map((company) => {
                return (
                  <SwiperSlide key={company.id}>
                    <div className="flex justify-center p-0 m-0">
                      <div className="flex flex-col justify-center items-center">
                        <img
                          src={
                            company.logo_path == null
                              ? "/movie-play.svg"
                              : `https://media.themoviedb.org/t/p/w780/${company.logo_path}`
                          }
                          alt={`${company.name}`}
                          className={`w-16 h-16 md:w-32 md:h-32 object-contain ${
                            company.logo_path == null ? "invert" : ""
                          }`}
                        />

                        <div className="mt-2 text-center leading-3">
                          <p className="text-[10px] sm:text-xs md:text-sm font-bold text-center">
                            {company.name}
                          </p>
                          <span className="text-[10px] sm:text-xs md:text-sm text-black text-center ">
                            {
                              languages.filter(
                                (lang) =>
                                  lang.iso_3166_1 === company.origin_country
                              )[0]?.english_name
                            }
                          </span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                )
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  )
}
