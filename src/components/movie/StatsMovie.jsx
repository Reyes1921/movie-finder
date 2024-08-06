import {Link} from "react-router-dom"
import {languages} from "../../helpers"
import {useCustomFunctions} from "../../hooks/useCustomFunctions"
import {ModalTrailer} from "../modal/ModalTrailer"

export const StatsMovie = ({data}) => {
  const {numberFormater, time_convert, colorScore} = useCustomFunctions()

  return (
    <div className="mx-auto max-w-2xl lg:max-w-none">
      <div className="flex justify-center md:justify-start items-center flex-wrap">
        <div
          className={`border text-center rounded-md p-3 m-2 w-[100px] ${colorScore(
            data.vote_average?.toFixed(1)
          )}`}
        >
          <div className="text-3xl font-bold text-black">
            {data.vote_average?.toFixed(1)}
          </div>
          <div className="text-black">T M D B</div>
        </div>
        <div className="m-2">
          <ModalTrailer dataId={data.id} type={"movie"} />
        </div>
        <div className="m-2">
          <div className="flex justify-around">
            <div className="flex flex-col py-2 md:py-0 pr-2 md:px-5">
              <p className="text-base tracking-tight text-blue-500">
                Origin Country
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
                Spoken Languages
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
      <div className=" mt-5">
        {data.genres.map((genres) => {
          return (
            <Link
              key={genres.id}
              to={`/movie/category/${genres.name
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
      </div>

      <dl className="mt-8 grid grid-cols-2 gap-0.5 overflow-hidden rounded-2xl text-center md:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col bg-white/5 p-5">
          <dt className="text-sm font-semibold leading-6 text-gray-300">
            {data.status}
          </dt>
          <dd className="order-first text-base font-bold tracking-tight text-blue-500">
            Status
          </dd>
        </div>
        <div className="flex flex-col bg-white/5 p-5">
          <dt className="text-base font-bold leading-6 text-gray-300">
            {data.release_date}
          </dt>
          <dd className="order-first text-base font-bold tracking-tight text-blue-500">
            Release Date
          </dd>
        </div>
        <div className="flex flex-col bg-white/5 p-5">
          <dt className="text-base font-bold leading-6 text-gray-300">
            {numberFormater(data.budget)}
          </dt>
          <dd className="order-first  text-base font-bold tracking-tight text-blue-500">
            Budget
          </dd>
        </div>
        <div className="flex flex-col bg-white/5 p-5">
          <dt className="text-base font-bold leading-6 text-gray-300">
            {numberFormater(data.revenue)}
          </dt>
          <dd className="order-first  text-base font-bold tracking-tight text-blue-500">
            Revenue
          </dd>
        </div>
        <div className="flex flex-col bg-white/5 p-5">
          <dt className="text-base font-bold leading-6 text-gray-300">
            {data.popularity}
          </dt>
          <dd className="order-first  text-base font-bold tracking-tight text-blue-500">
            Popularity
          </dd>
        </div>
        <div className="flex flex-col bg-white/5 p-5">
          <dt className="text-base font-bold leading-6 text-gray-300">
            {time_convert(data.runtime)}
          </dt>
          <dd className="order-first  text-base font-bold tracking-tight text-blue-500">
            Runtime
          </dd>
        </div>
        <div className="flex flex-col bg-white/5 p-5">
          <dt className="text-base font-bold leading-6 text-gray-300">
            {data.tagline}
          </dt>
          <dd className="order-first  text-base font-bold tracking-tight text-blue-500">
            Tagline
          </dd>
        </div>
        <div className="flex flex-col bg-white/5 p-5">
          <dt className="text-base font-bold leading-6 text-gray-300">
            {data.vote_count}
          </dt>
          <dd className="order-first  text-base font-bold tracking-tight text-blue-500">
            Vote Count
          </dd>
        </div>
      </dl>
    </div>
  )
}
