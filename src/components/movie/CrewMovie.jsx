import {Link} from "react-router-dom"
import {Crew} from "./Crew"
import {useCustomFunctions} from "../../helpers/useCustomFunctions"
import {useTranslation} from "react-i18next"
import {LazyLoadImage} from "react-lazy-load-image-component"

export const CrewMovie = ({movieSerie: crew, loading, error, img}) => {
  const {t} = useTranslation()
  error ? console.log(error) : ""

  const {findInArrayNameTwo, findInArrayProducers} = useCustomFunctions()
  return (
    <>
      {loading ? (
        <div className="flex justify-center">
          <span className="loader"></span>
        </div>
      ) : (
        <div
          className="md:w-full bg-slate-900 m-1 rounded-2xl bg-no-repeat bg-cover"
          style={{
            backgroundImage: `url(${
              img ? `https://image.tmdb.org/t/p/w780/${img}` : "/movie-play.svg"
            })`,
          }}
        >
          <section className="py-6 rounded-xl text-white pp mt-4">
            <div className="grid grid-cols-1  lg:gap-2 md:gap-4 gap-8 px-5 ">
              <div className="flex flex-col justify-center m-1 text-center border-b-2 border-blue-500">
                <p className="text-xl font-semibold leading-tight text-blue-500">
                  {t("Directed By")}
                </p>
                <div className="flex flex-col md:flex-row justify-center">
                  {findInArrayNameTwo(crew.crew, "Director", "name").length ===
                  0
                    ? t("Not Found")
                    : findInArrayNameTwo(crew.crew, "Director").map((item) => {
                        return (
                          <Link
                            to={`/person/${item.id}/${item?.name
                              .toLowerCase()
                              .split(" ")
                              .join("-")}`}
                            key={item.id}
                            className="p-5 hover:scale-110 transition-all"
                          >
                            <div className="flex flex-col ">
                              <LazyLoadImage
                                alt=""
                                className="self-center flex-shrink-0 w-14 h-14 object-cover mb-4 bg-center bg-cover rounded-full mt-2"
                                src={
                                  item.profile_path == null
                                    ? "/profile-rounded.svg"
                                    : `
                        https://media.themoviedb.org/t/p/w300_and_h450_bestv2/${item.profile_path}
                      `
                                }
                              />
                              <p className="text-white" key={item?.id}>
                                {item?.name}
                              </p>
                            </div>
                          </Link>
                        )
                      })}
                </div>
              </div>
              <div className="flex flex-col justify-center m-1 text-center border-b-2 border-blue-500">
                <p className="text-xl font-semibold leading-tight mb-5  text-blue-500">
                  {t("Writed By")}
                </p>
                <div className="flex flex-col md:flex-row justify-center">
                  {findInArrayNameTwo(crew.crew, "Writer", "Screenplay", "Book")
                    .length === 0
                    ? t("Not Found")
                    : findInArrayNameTwo(
                        crew.crew,
                        "Writer",
                        "Screenplay",
                        "Book"
                      ).map((item) => {
                        return (
                          <Link
                            to={`/person/${item.id}/${item?.name
                              .toLowerCase()
                              .split(" ")
                              .join("-")}`}
                            key={item.id}
                            className="p-5 hover:scale-110 transition-all"
                          >
                            <div className="flex flex-col ">
                              <LazyLoadImage
                                alt=""
                                className="self-center flex-shrink-0 w-14 h-14 object-cover mb-4 bg-center bg-cover rounded-full mt-2"
                                src={
                                  item.profile_path == null
                                    ? "/profile-rounded.svg"
                                    : `
                        https://media.themoviedb.org/t/p/w300_and_h450_bestv2/${item.profile_path}
                      `
                                }
                              />
                              <p className="text-white" key={item?.id}>
                                {item?.name}
                              </p>
                              <span className="text-blue-500">{item.job}</span>
                            </div>
                          </Link>
                        )
                      })}
                </div>
              </div>
              <div className="flex flex-col md:flex-row justify-around border-b-2 border-blue-500">
                <div className="flex flex-col justify-center m-1 text-center p-5">
                  <p className="text-xl font-semibold leading-tight mb-5  text-blue-500">
                    {t("Music by")}
                  </p>
                  <Crew crewData={crew.crew} job={"Original Music Composer"} />
                </div>
                <div className="flex flex-col justify-center m-1 text-center p-5">
                  <p className="text-xl font-semibold leading-tight mb-5  text-blue-500">
                    {t("Cinematography by")}
                  </p>
                  <Crew crewData={crew.crew} job={"Director of Photography"} />
                </div>
                <div className="flex flex-col justify-center m-1 text-center p-5">
                  <p className="text-xl font-semibold leading-tight mb-5  text-blue-500">
                    {t("Editing by")}
                  </p>
                  <Crew crewData={crew.crew} job={"Editor"} />
                </div>
              </div>
            </div>
            <div className="grid justify-center mt-5 mb-5 md:mb-8 lg:mb-8">
              <h4 className="text-left text-blue-500 text-3xl font-bold ">
                {t("Produced by")}
              </h4>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-5 md:grid-cols-3 text-center p-1">
              {findInArrayProducers(
                crew.crew,
                "Executive Producer",
                "Producer",
                "Co-Producer"
              ).length === 0
                ? t("Not Found")
                : findInArrayProducers(
                    crew.crew,
                    "Executive Producer",
                    "Producer",
                    "Co-Producer"
                  ).map((producer, index) => {
                    return (
                      <span className="text-white " key={index}>
                        {producer}&nbsp;
                      </span>
                    )
                  })}
            </div>
          </section>
        </div>
      )}
    </>
  )
}
