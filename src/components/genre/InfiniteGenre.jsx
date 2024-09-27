import InfiniteScroll from "react-infinite-scroll-component"
import {useEffect, useState} from "react"
import {Genre, GenreGrid, Loading} from "../../components"
import {Layout} from "../../layout/Layout"
import axios from "axios"
const apiBearer = import.meta.env.VITE_API_BEARER
import {useTranslation} from "react-i18next"
import {MessageEnd} from "../infiniteScroll/MessageEnd"

export const InfiniteGenre = ({media, title, id}) => {
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
  const type = media === "movie" ? "movie" : "tv"

  useEffect(() => {
    setLanguage(i18n.language)
  }, [i18n.language])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    axios
      .get(
        `https://api.themoviedb.org/3/discover/${type}?with_genres=${id}&page=1&${
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
        setIndex(2)
        setTimeout(() => {
          setLoading(false)
        }, 500)
      })
      .catch((err) => {
        console.log(err)
      })
    window.scrollTo(0, 0)
  }, [language, id])

  const fetchMoreData = () => {
    if (index <= 100) {
      axios
        .get(
          `https://api.themoviedb.org/3/discover/${type}?with_genres=${id}&page=${index}&${
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
    <Layout>
      <h2 className="text-3xl md:text-4xl pt-8 md:pt-5 p-5 text-center md:text-left font-bold text-[#3b82f6] capitalize">
        {t(media)}:{" "}
        <span className="text-white capitalize">
          {t(title[0].toUpperCase() + title.substring(1))}
        </span>
      </h2>
      <Genre language={language} mediaType={type} id={id} />
      {loading ? (
        <Loading />
      ) : (
        <InfiniteScroll
          dataLength={items.length}
          next={fetchMoreData}
          hasMore={hasMore}
          loader={loadingMessage}
          scrollThreshold={0.5}
          endMessage={<MessageEnd />}
        >
          <GenreGrid data={items} media={media} />
        </InfiniteScroll>
      )}
    </Layout>
  )
}
