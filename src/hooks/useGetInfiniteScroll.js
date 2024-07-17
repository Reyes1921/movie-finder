import {useEffect, useState} from "react"
import {getMovieSerie} from "../helpers"

export const useGetInfiniteScroll = (param) => {
  const [loading, setLoading] = useState(true)
  const [movieSerie, setMovieSerie] = useState({})
  const [error, setError] = useState(null)

  const getPopularMovie = async () => {
    setLoading(true)
    setError(null)
    const {data, error} = await getMovieSerie(param)
    setMovieSerie(data)

    setLoading(false)
    setError(error)
  }

  useEffect(() => {
    getPopularMovie()
    window.scrollTo(0, 0)
  }, [param])

  return {
    movieSerie,
    loading,
    error,
  }
}
