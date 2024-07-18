import {useParams} from "react-router-dom"
import {LayoutSingle} from "../layout"
import {useGetMovieSerie} from "../hooks"

export const Person = () => {
  const {idPerson} = useParams()

  const {
    movieSerie: person,
    loading,
    error,
  } = useGetMovieSerie(`/person/${idPerson}`)

  return (
    <LayoutSingle loading={loading} error={error}>
      <div className="w-full h-auto bg-slate-900 shadow-md overflow-hidden mx-auto grid gap-1 grid-cols-1 md:grid-cols-1 lg:grid-cols-4 m-10">
        <div className=" md:w-full flex justify-center mb-5">
          <img
            className="rounded w-ful animated fadeIn"
            src={`https://image.tmdb.org/t/p/w342/${person?.profile_path}`}
            alt={`${person?.name}`}
          />
        </div>
        <div className="col-span-3 lg:ml-9">
          <h3 className="text-left text-white text-3xl md:text-4xl lg:text-4xl mb-5 font-bold">
            {person?.name}{" "}
            <span style={{color: "#3B82F6"}}>
              {person?.known_for_department}
            </span>
          </h3>
          <p className="text-white text-justify mb-5 text-1xl ">
            {person?.biography}
          </p>
        </div>
      </div>
    </LayoutSingle>
  )
}
