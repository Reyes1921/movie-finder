import InfiniteScroll from "react-infinite-scroll-component"
import {useEffect, useState} from "react"
import {Loading, SerieCategoryGrid} from "../../components"
import {Layout} from "../../layout/Layout"
import axios from "axios"
const apiBearer = import.meta.env.VITE_API_BEARER
import {useTranslation} from "react-i18next"
import {useGetMovieSerie} from "../../hooks"
import {Link} from "react-router-dom"

export const InfiniteCategorySerie = ({media_type, title, id}) => {
  const {t, i18n} = useTranslation()
  const [language, setLanguage] = useState(i18n.language)
  const [hasMore, setHasMore] = useState(true)
  const [index, setIndex] = useState(2)
  const [items, setItems] = useState([])
  const [loadingMessage, setLoadingMessage] = useState(
    <div className="flex bg-slate-900 justify-center items-center h-screen">
      <span className="loader"></span>
    </div>
  )

  const {
    movieSerie: genre,
    loading: loadingGenre,
    error,
  } = useGetMovieSerie(
    `genre/tv/list?${language === "en" ? "language=en-US" : "language=es-ES"}`
  )

  error ? console.log(error) : ""

  useEffect(() => {
    setLanguage(i18n.language)
  }, [i18n.language])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    axios
      .get(
        `https://api.themoviedb.org/3/tv/${media_type}?${
          language === "en" ? "language=en-US" : "language=es-ES"
        }`,
        {
          headers: {
            Authorization: apiBearer,
          },
        }
      )
      .then((res) => {
        setItems(res.data.results)
        setTimeout(() => {
          setLoading(false)
        }, 500)
      })
      .catch((err) => {
        console.log(err)
      })
    window.scrollTo(0, 0)
  }, [language])

  const fetchMoreData = () => {
    if (index <= 300) {
      axios
        .get(
          `https://api.themoviedb.org/3/tv/${media_type}?page=${index}&${
            language === "en" ? "language=en-US" : "language=es-ES"
          }`,
          {
            headers: {
              Authorization: apiBearer,
            },
          }
        )
        .then((res) => {
          setItems((prevItems) => [...prevItems, ...res.data.results])
          res.data.results.length > 0 ? setHasMore(true) : setHasMore(false)
        })
        .catch((err) => console.log(err))
      setIndex((prevIndex) => prevIndex + 1)
    } else {
      setHasMore(false)
    }
  }

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <InfiniteScroll
          dataLength={items.length}
          next={fetchMoreData}
          hasMore={hasMore}
          loader={loadingMessage}
        >
          <Layout>
            <h2 className="text-3xl md:text-4xl pt-8 md:pt-5 p-5 text-center md:text-left font-bold text-[#3b82f6]">
              {title[0].toUpperCase() + title.substring(1)} {t("series")}
            </h2>
            {loadingGenre ? (
              <Loading />
            ) : (
              <div className="flex justify-center items-center flex-wrap animated fadeIn px-5">
                {genre.genres.map((genres) => {
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
              </div>
            )}
            <SerieCategoryGrid serieData={items} idCat={id} />
          </Layout>
        </InfiniteScroll>
      )}
    </>
  )
}
