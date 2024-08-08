import {Loading, SearchGrid} from "../../components"
import {useGetMovieSerie} from "../../hooks"
import {useParams} from "react-router-dom"
import {LayoutSingle} from "../../layout/LayoutSingle"
import {useTranslation} from "react-i18next"
import {useEffect, useState} from "react"

export const Search = () => {
  const {data} = useParams()
  const {t, i18n} = useTranslation()
  const [language, setLanguage] = useState(i18n.language)

  useEffect(() => {
    setLanguage(i18n.language)
  }, [i18n.language])

  const {movieSerie, loading, error} = useGetMovieSerie(
    `/search/multi?query=${data}&${
      language === "en" ? "language=en-US" : "language=es-ES"
    }`
  )
  error ? console.log(error) : ""
  return (
    <LayoutSingle loading={loading} search={movieSerie}>
      {loading ? (
        <Loading />
      ) : (
        <>
          <h2 className="text-3xl md:text-4xl pt-8 md:pt-5 p-5 text-center md:text-left font-bold text-[#3b82f6]">
            {t("Results for")}: <span className="text-white">{data}</span>
          </h2>
          {movieSerie?.results?.length === 0 ? (
            <div className="h-screen flex justify-center items-center animated fadeIn">
              <h3 className="text-white text-center text-4xl p-20">
                {t("There are no results to show for")} "
                <span className="text-blue-500">{data}</span>"
              </h3>
            </div>
          ) : (
            <SearchGrid data={movieSerie} />
          )}
        </>
      )}
    </LayoutSingle>
  )
}
