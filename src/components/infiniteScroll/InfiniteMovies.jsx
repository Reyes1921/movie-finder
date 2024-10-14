import InfiniteScroll from "react-infinite-scroll-component"
import {useEffect, useState} from "react"
import {Loading, MovieGrid} from "../../components"
import {Layout} from "../../layout/Layout"
import axios from "axios"
const apiBearer = import.meta.env.VITE_API_BEARER
import {useTranslation} from "react-i18next"
import {MessageEnd} from "./MessageEnd"

export const InfiniteMovies = ({media_type, title}) => {
  const {i18n} = useTranslation()
  const [hasMore, setHasMore] = useState(true)
  const [index, setIndex] = useState(2)
  const [items, setItems] = useState([])
  const [language, setLanguage] = useState(i18n.language)
  const [loadingMessage, setLoadingMessage] = useState(
    <div className="flex bg-slate-900 justify-center items-center h-screen">
      <span className="loader"></span>
    </div>
  )
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLanguage(i18n.language)
  }, [i18n.language])

  useEffect(() => {
    setLoading(true)
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${media_type}?page=1&${
          language === "en" ? "language=en-US" : "language=es-ES"
        }`,
        {
          headers: {
            Authorization: apiBearer,
          },
        }
      )
      .then((res) => {
        setHasMore(true)
        setItems(res.data.results)
        setIndex(2)
        setTimeout(() => {
          setLoading(false)
        }, 500)
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(
        setTimeout(() => {
          setLoading(false)
        }, 500)
      )
    window.scrollTo(0, 0)
  }, [language])
  const fetchMoreData = () => {
    if (index <= 10) {
      axios
        .get(
          `https://api.themoviedb.org/3/movie/${media_type}?page=${index}&${
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
        .finally(
          setTimeout(() => {
            setLoading(false)
          }, 500)
        )
      setIndex((prevIndex) => prevIndex + 1)
    } else {
      setHasMore(false)
    }
  }

  return (
    <>
      <Layout>
        <h2
          className={` ${
            title ? "flex" : "hidden"
          } text-3xl md:text-4xl pt-8 md:pt-5 p-5 text-center md:text-left font-bold text-[#3b82f6]`}
        >
          {title}
        </h2>
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
            <MovieGrid movieData={items} />
          </InfiniteScroll>
        )}
      </Layout>
    </>
  )
}
