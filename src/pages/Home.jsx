import InfiniteScroll from "react-infinite-scroll-component"
import {useEffect, useState} from "react"
import {MovieGrid} from "../components"
import {Layout} from "../layout/Layout"
import axios from "axios"

export const Home = () => {
  const [hasMore, setHasMore] = useState(true)
  const [index, setIndex] = useState(2)
  const [items, setItems] = useState([])
  const [loadingMessage, setLoadingMessage] = useState(
    <div className="flex bg-slate-900  justify-center items-center h-screen">
      <span className="loader"></span>
    </div>
  )
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/popular`, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyN2E2MGUwMWFmZDMxMTRlYmM5OGJkODMwYTE0MGY1OSIsInN1YiI6IjYzYWYzYzhlODc0MWM0MDBiZmRmOGFhNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1Mh8cNx_9gdmsf2DhguV8JTzhsw5c_I_5LvGt8MQ2Aw",
        },
      })
      .then((res) => {
        setItems(res.data.results)
        setLoading(false)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  const fetchMoreData = () => {
    if (index <= 100) {
      axios
        .get(`https://api.themoviedb.org/3/movie/popular?page=${index}`, {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyN2E2MGUwMWFmZDMxMTRlYmM5OGJkODMwYTE0MGY1OSIsInN1YiI6IjYzYWYzYzhlODc0MWM0MDBiZmRmOGFhNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1Mh8cNx_9gdmsf2DhguV8JTzhsw5c_I_5LvGt8MQ2Aw",
          },
        })
        .then((res) => {
          setItems((prevItems) => [...prevItems, ...res.data.results])
          res.data.results.length > 0 ? setHasMore(true) : setHasMore(false)
        })
        .catch((err) => console.log(err))
      setIndex((prevIndex) => prevIndex + 1)
    } else {
      setLoadingMessage("")
    }
  }

  return (
    <>
      {loading ? (
        <div className="flex bg-slate-900 justify-center items-center h-screen">
          <span className="loader"></span>
        </div>
      ) : (
        <InfiniteScroll
          dataLength={items.length}
          next={fetchMoreData}
          hasMore={hasMore}
          loader={loadingMessage}
        >
          <Layout>
            <MovieGrid movieData={items} />
          </Layout>
        </InfiniteScroll>
      )}
    </>
  )
}
