import {useEffect, useState} from "react"
import {useCustomFunctions, useGetMovieSerie} from "../../hooks"
import {Link} from "react-router-dom"

export const CrewMovie = ({idMovie: id}) => {
  const [movieId, setMovieId] = useState(id)
  const {
    movieSerie: crew,
    loading,
    error,
  } = useGetMovieSerie(`/movie/${movieId}/credits`)
  useEffect(() => {
    setMovieId(id)
  }, [])

  const {
    findInArrayName,
    findInArrayNameTwo,
    findInArrayImg,
    findInArrayProducers,
    findInArrayId,
  } = useCustomFunctions()
  return (
    <div className="md:w-full bg-slate-900 px-1 py-1 m-1 rounded-2xl">
      <section className="py-6 rounded-xl text-white">
        <div className="grid grid-cols-1  lg:gap-2 md:gap-4 gap-8 px-5 ">
          <div className="flex flex-col justify-center m-1 text-center">
            <p className="text-xl font-semibold leading-tight text-blue-500">
              Directed By
            </p>
            <div className="flex flex-col md:flex-row justify-center">
              {findInArrayNameTwo(crew?.crew, "Director", "name").length === 0
                ? "Not Found"
                : findInArrayNameTwo(crew?.crew, "Director").map((item) => {
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
                          <img
                            alt=""
                            className="self-center flex-shrink-0 w-14 hw-14 object-cover mb-4 bg-center bg-cover rounded-full mt-2"
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
          <div className="flex flex-col justify-center m-1 text-center">
            <p className="text-xl font-semibold leading-tight mb-5  text-blue-500">
              Writed By
            </p>
            <div className="flex flex-col md:flex-row justify-center">
              {findInArrayNameTwo(crew?.crew, "Writer", "Screenplay", "Book")
                .length === 0
                ? "Not Found"
                : findInArrayNameTwo(
                    crew?.crew,
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
                          <img
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
          <div className="flex flex-col md:flex-row justify-around">
            <div className="flex flex-col justify-center m-1 text-center p-5">
              <p className="text-xl font-semibold leading-tight mb-5  text-blue-500">
                Music by
              </p>
              <Link
                to={`/person/${
                  findInArrayId(crew.crew, "Original Music Composer") +
                    "/" +
                    findInArrayName(crew.crew, "Original Music Composer")
                      ?.toLowerCase()
                      .split(" ")
                      .join("-") || "/"
                }`}
                key={
                  findInArrayId(crew.crew, "Original Music Composer") ||
                  Math.random(0, 1)
                }
                className="hover:scale-110 transition-all"
              >
                <div className="flex flex-col ">
                  <img
                    alt=""
                    className="self-center flex-shrink-0 w-14 h-14 object-cover mb-4 bg-center bg-cover rounded-full"
                    src={
                      findInArrayImg(crew.crew, "Original Music Composer") ==
                      null
                        ? "/profile-rounded.svg"
                        : `
                        https://media.themoviedb.org/t/p/w300_and_h450_bestv2/${findInArrayImg(
                          crew.crew,
                          "Original Music Composer"
                        )}
                      `
                    }
                  />
                  <p className="text-white">
                    {findInArrayName(crew.crew, "Original Music Composer") ==
                    null
                      ? "Not Found"
                      : findInArrayName(crew.crew, "Original Music Composer")}
                  </p>
                </div>
              </Link>
            </div>
            <div className="flex flex-col justify-center m-1 text-center p-5">
              <p className="text-xl font-semibold leading-tight mb-5  text-blue-500">
                Cinematography by
              </p>
              <Link
                to={`/person/${
                  findInArrayId(crew.crew, "Director of Photography") +
                    "/" +
                    findInArrayName(crew.crew, "Director of Photography")
                      ?.toLowerCase()
                      .split(" ")
                      .join("-") || "#"
                }`}
                key={
                  findInArrayId(crew.crew, "Director of Photography") ||
                  Math.random(0, 1)
                }
                className="hover:scale-110 transition-all"
              >
                <div className="flex flex-col ">
                  <img
                    alt=""
                    className="self-center flex-shrink-0 w-14 h-14 object-cover mb-4 bg-center bg-cover rounded-full"
                    src={
                      findInArrayImg(crew.crew, "Director of Photography") ==
                      null
                        ? "/profile-rounded.svg"
                        : `
                        https://media.themoviedb.org/t/p/w300_and_h450_bestv2/${findInArrayImg(
                          crew.crew,
                          "Director of Photography"
                        )}
                      `
                    }
                  />
                  <p className="text-white">
                    {findInArrayName(crew.crew, "Director of Photography") ==
                    null
                      ? "Not Found"
                      : findInArrayName(crew.crew, "Director of Photography")}
                  </p>
                </div>
              </Link>
            </div>
            <div className="flex flex-col justify-center m-1 text-center p-5">
              <p className="text-xl font-semibold leading-tight mb-5  text-blue-500">
                Editing by
              </p>
              <Link
                to={`/person/${
                  findInArrayId(crew.crew, "Editor") +
                    "/" +
                    findInArrayName(crew.crew, "Editor")
                      ?.toLowerCase()
                      .split(" ")
                      .join("-") || "/"
                }`}
                key={findInArrayId(crew.crew, "Editor") || Math.random(0, 1)}
                className="hover:scale-110 transition-all"
              >
                <div className="flex flex-col ">
                  <img
                    alt=""
                    className="self-center flex-shrink-0 w-14 h-14 object-cover mb-4 bg-center bg-cover rounded-full"
                    src={
                      findInArrayImg(crew.crew, "Editor") == null
                        ? "/profile-rounded.svg"
                        : `
                        https://media.themoviedb.org/t/p/w300_and_h450_bestv2/${findInArrayImg(
                          crew.crew,
                          "Editor"
                        )}
                      `
                    }
                  />
                  <p className="text-white">
                    {findInArrayName(crew.crew, "Editor") == null
                      ? "Not Found"
                      : findInArrayName(crew.crew, "Editor")}
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="grid justify-center mt-5 mb-5 md:mb-8 lg:mb-8">
          <h4 className="text-left text-blue-500 text-3xl font-bold ">
            Produced by
          </h4>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-5 md:grid-cols-3 text-center p-1">
          {findInArrayProducers(
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
  )
}
