import {useParams} from "react-router-dom"
import {LayoutSingle} from "../../layout"
import {useGetMovieSerie} from "../../hooks"
import {KnownFor, Loading, PersonInfo, ReadMore} from "../../components"
import {useTranslation} from "react-i18next"
import {useEffect, useState} from "react"

export const Person = () => {
  const {idPerson} = useParams()
  const {t, i18n} = useTranslation()
  const [language, setLanguage] = useState(i18n.language)

  useEffect(() => {
    setLanguage(i18n.language)
  }, [i18n.language])

  const {
    movieSerie: person,
    loading,
    error,
  } = useGetMovieSerie(
    `/person/${idPerson}?${
      language === "en" ? "language=en-US" : "language=es-ES"
    }`
  )
  error ? console.log(error) : ""
  window.scrollTo(0, 0)
  return (
    <LayoutSingle>
      {loading ? (
        <Loading />
      ) : (
        <div className="w-full h-auto bg-slate-900 shadow-md overflow-hidden mx-auto grid gap-1 grid-cols-1 md:grid-cols-4 p-5">
          <div className=" md:w-full flex flex-col mb-5 col-span-1 ">
            <img
              className="h-72 md:h-auto max-w-full rounded-2xl object-contain bg-contain p-5 aspect-[16/20]"
              src={`${
                person.profile_path
                  ? `https://image.tmdb.org/t/p/w780/${person.profile_path}`
                  : `/profile-square.svg`
              }`}
              alt={`${person.name}`}
            />
            <div className="">
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
              {t("Biography")}
            </h3>
            <div className="text-gray-400 text-justify mb-5 text-1xl ">
              <ReadMore>{person.biography}</ReadMore>
              <div>
                <h3 className="text-left text-white text-2xl mb-10 mt-10 font-bold">
                  {t("Known For")}
                </h3>
                <KnownFor id={person.id} />
              </div>
            </div>
          </div>
        </div>
      )}
    </LayoutSingle>
  )
}
