import {useParams} from "react-router-dom"
import {LayoutSingle} from "../../layout"
import {useGetMovieSerie} from "../../hooks"
import {KnownFor, Loading, PersonInfo, ReadMore} from "../../components"
import {Suspense} from "react"

export const Person = () => {
  const {idPerson} = useParams()

  const {
    movieSerie: person,
    loading,
    error,
  } = useGetMovieSerie(`/person/${idPerson}`)
  error ? console.log(error) : ""

  return (
    <Suspense fallback={<Loading />}>
      <LayoutSingle>
        {loading ? (
          <Loading />
        ) : (
          <div className="w-full h-auto bg-slate-900 shadow-md overflow-hidden mx-auto grid gap-1 grid-cols-1 md:grid-cols-4 p-5">
            <div className=" md:w-full flex flex-col justify-center mb-5 col-span-1 ">
              <img
                className="h-72 md:h-auto max-w-full rounded-2xl object-contain bg-contain p-5 aspect-[16/20]"
                src={`${
                  person.profile_path
                    ? `https://image.tmdb.org/t/p/w780/${person.profile_path}`
                    : `/profile-square.svg`
                }`}
                alt={`${person.name}`}
              />
              <div>
                <PersonInfo info={person} />
              </div>
            </div>
            <div className="col-span-3 lg:ml-9">
              <h3 className="text-left text-white text-3xl md:text-4xl lg:text-4xl mb-5 font-bold">
                {person.name},{" "}
                <span style={{color: "#3B82F6"}}>
                  {person.known_for_department}
                </span>
              </h3>
              <h3 className="text-left text-white text-2xl mb-5 mt-5 font-bold">
                Biography
              </h3>
              <div className="text-gray-400 text-justify mb-5 text-1xl ">
                <ReadMore>{person.biography}</ReadMore>
                <div>
                  <h3 className="text-left text-white text-4xl mb-10 mt-10 font-bold">
                    Known For
                  </h3>
                  <KnownFor id={person.id} />
                </div>
              </div>
            </div>
          </div>
        )}
      </LayoutSingle>
    </Suspense>
  )
}