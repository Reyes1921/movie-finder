import {Link} from "react-router-dom"
import {languages} from "../../helpers"
import {ModalTrailer} from "../modal/ModalTrailer"
import {useGetMovieSerie} from "../../hooks"
import {useState} from "react"
import {useCustomFunctions} from "../../helpers/useCustomFunctions"
import {useTranslation} from "react-i18next"
import {LazyLoadImage} from "react-lazy-load-image-component"

export const StatsSerie = ({data}) => {
  const {colorScore} = useCustomFunctions()
  const [stream, setStream] = useState("US")
  const {t} = useTranslation()

  const {movieSerie, loading} = useGetMovieSerie(
    `tv/${data.id}/watch/providers`
  )

  const selectChange = (event) => {
    setStream(event.target.value)
  }
  return (
    <div className="mx-auto max-w-2xl lg:max-w-none">
      <div className="flex justify-center md:justify-start items-center flex-wrap">
        <div
          className={`border rounded-md p-3 m-2 w-[100px] ${colorScore(
            data.vote_average?.toFixed(1)
          )}`}
        >
          <div className="text-3xl text-center font-bold text-black">
            {data.vote_average?.toFixed(1)}
          </div>
          <div className=" text-center text-black">T M D B</div>
        </div>
        <div className="m-2">
          <ModalTrailer dataId={data.id} type={"tv"} />
        </div>
        <div className="m-2">
          <div className="flex justify-around">
            <div className="flex flex-col py-2 md:py-0 pr-2 md:px-5">
              <p className="text-base tracking-tight text-blue-500">
                {t("Origin Country")}
              </p>
              <span className="flex flex-wrap">
                {data.origin_country.map((item, index) => (
                  <p className="" key={item}>
                    {
                      languages.filter((lang) => lang.iso_3166_1 === item)[0]
                        ?.english_name
                    }
                    {data.origin_country.length > 1
                      ? data.origin_country.length - 1 === index
                        ? ""
                        : ", "
                      : ""}
                    &nbsp;
                  </p>
                ))}
              </span>
            </div>
            <div className="flex flex-col py-2 md:py-0 pl-2 md:px-5">
              <p className="text-base tracking-tight text-blue-500">
                {t("Spoken Languages")}
              </p>
              <span className="flex flex-wrap">
                {data.spoken_languages.map((item, index) => (
                  <p className="text-center" key={item.english_name}>
                    {item.english_name}
                    {data.spoken_languages.length > 1
                      ? data.spoken_languages.length - 1 === index
                        ? ""
                        : ", "
                      : ""}
                    &nbsp;
                  </p>
                ))}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="space-x-3 mt-5 md:flex justify-start items-center">
        {data.genres.map((genres) => {
          return (
            <Link
              key={genres.id}
              to={`/serie/category/${genres.name
                .toLowerCase()
                .split(" ")
                .join("-")}/${genres.id}`}
            >
              <span className="inline-flex bg-blue-900 text-white text-center px-2 py-1 rounded text-md font-semibold m-2 hover:scale-110 transition-all">
                {genres.name}
              </span>
            </Link>
          )
        })}
        <div className="space-x-3 mt-5 animated fadeIn">
          <div className="font-bold flex">
            {loading ? (
              ""
            ) : (
              <div
                className={`flex flex-wrap ${
                  Object.entries(movieSerie?.results).length > 0 || "hidden"
                }`}
              >
                <span className="font-bold text-blue-500">
                  {t("Streaming")}:
                </span>
                <select
                  name="select"
                  className="ml-2 text-blue-500 pl-3 min-w-[80px] min-h-[40px] text-sm rounded"
                  onChange={selectChange}
                >
                  {Object.entries(movieSerie.results).map((item) => (
                    <option
                      value={item[0]}
                      className="text-blue-500"
                      key={item[0]}
                    >
                      {item[0]}
                    </option>
                  ))}
                </select>
                <div className="flex ml-3">
                  {movieSerie?.results[stream]?.flatrate?.map((item) => {
                    return (
                      <LazyLoadImage
                        key={item.provider_name}
                        src={
                          loading
                            ? "/movie-play.svg"
                            : `https://image.tmdb.org/t/p/w780//` +
                              item.logo_path
                        }
                        alt={item.provider_name}
                        className="w-16 h-12 p-1"
                      />
                    )
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <dl className="mt-8 grid grid-cols-2 gap-0.5 overflow-hidden rounded-2xl text-center md:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col bg-white/5 p-5">
          <dt className="text-sm font-semibold leading-6 text-gray-300">
            {data.status}
          </dt>
          <dd className="order-first text-base font-bold tracking-tight text-blue-500">
            {t("Status")}
          </dd>
        </div>
        <div className="flex flex-col bg-white/5 p-5">
          <dt className="text-sm font-semibold leading-6 text-gray-300">
            {data.first_air_date}
          </dt>
          <dd className="order-first text-base font-bold tracking-tight text-blue-500">
            {t("Release Date")}
          </dd>
        </div>
        <div className="flex flex-col bg-white/5 p-5">
          <dt className="text-sm font-semibold leading-6 text-gray-300">
            {data.number_of_seasons}
          </dt>
          <dd className="order-first text-base font-bold tracking-tight text-blue-500">
            {t("Seasons")}
          </dd>
        </div>
        <div className="flex flex-col bg-white/5 p-5">
          <dt className="text-sm font-semibold leading-6 text-gray-300">
            {data.number_of_episodes}
          </dt>
          <dd className="order-first text-base font-bold tracking-tight text-blue-500">
            {t("Episodes")}
          </dd>
        </div>
        <div className="flex flex-col bg-white/5 p-5">
          <dt className="text-sm font-semibold leading-6 text-gray-300">
            {data.popularity}
          </dt>
          <dd className="order-first text-base font-bold tracking-tight text-blue-500">
            {t("Popularity")}
          </dd>
        </div>
        <div className="flex flex-col bg-white/5 p-5">
          <dt className="text-sm font-semibold leading-6 text-gray-300">
            {data.last_air_date}
          </dt>
          <dd className="order-first text-base font-bold tracking-tight text-blue-500">
            {t("Last Air Date")}
          </dd>
        </div>
        <div className="flex flex-col bg-white/5 p-5">
          <dt className="text-sm font-semibold leading-6 text-gray-300">
            {data.tagline}
          </dt>
          <dd className="order-first text-base font-bold tracking-tight text-blue-500">
            {t("Tagline")}
          </dd>
        </div>
        <div className="flex flex-col bg-white/5 p-5">
          <dt className="text-sm font-semibold leading-6 text-gray-300">
            {data.vote_count}
          </dt>
          <dd className="order-first text-base font-bold tracking-tight text-blue-500">
            {t("Vote Count")}
          </dd>
        </div>
      </dl>
    </div>
  )
}
