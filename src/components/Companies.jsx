import {Carousel} from "primereact/carousel"
import {useCustomFunctions} from "../hooks"
import {languages} from "../helpers/languages"

export const Companies = ({companies}) => {
  const {responsiveOptions} = useCustomFunctions()

  const personTemplate = (company) => {
    return (
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

          <div className="mt-2">
            <p className="text-[10px] sm:text-xs md:text-sm font-bold text-center">
              {company.name}
            </p>
            <span className="text-[10px] sm:text-xs md:text-sm text-black text-center">
              {
                languages.filter(
                  (lang) => lang.iso_3166_1 === company.origin_country
                )[0]?.english_name
              }
            </span>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div
      className={` my-5 items-center justify-center bg-[slate-900] h-auto ${
        companies.length > 0 ? "flex" : "hidden"
      }`}
    >
      <div className="w-full bg-slate-900">
        <div className="">
          <h3 className="text-left text-white text-4xl mb-5 font-bold">
            Production Companies
          </h3>
        </div>
        <div className="bg-[#3B82F6] bg-opacity-80 rounded-2xl py-3">
          <div>
            <Carousel
              value={companies}
              numVisible={8}
              numScroll={3}
              responsiveOptions={responsiveOptions()}
              itemTemplate={personTemplate}
              circular
            />
          </div>
        </div>
      </div>
    </div>
  )
}
