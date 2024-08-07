import {Link} from "react-router-dom"
import {useCustomFunctions} from "../../helpers/useCustomFunctions"

export const Crew = ({crewData, job}) => {
  const {findInArrayName, findInArrayNameTwo, findInArrayImg, findInArrayId} =
    useCustomFunctions()
  return (
    <>
      {findInArrayNameTwo(crewData, job).length === 0 ? (
        "Not Found"
      ) : (
        <Link
          to={`/person/${
            findInArrayId(crewData, job) +
              "/" +
              findInArrayName(crewData, job)
                ?.toLowerCase()
                .split(" ")
                .join("-") || "#"
          }`}
          key={findInArrayId(crewData, job) || Math.random(0, 1)}
          className="hover:scale-110 transition-all"
        >
          <div className="flex flex-col ">
            <img
              alt=""
              className="self-center flex-shrink-0 w-14 h-14 object-cover mb-4 bg-center bg-cover rounded-full"
              src={
                findInArrayImg(crewData, job) == null
                  ? "/profile-rounded.svg"
                  : `
                        https://media.themoviedb.org/t/p/w300_and_h450_bestv2/${findInArrayImg(
                          crewData,
                          job
                        )}
                      `
              }
            />
            <p className="text-white">
              {findInArrayName(crewData, job) == null
                ? "Not Found"
                : findInArrayName(crewData, job)}
            </p>
          </div>
        </Link>
      )}
    </>
  )
}
