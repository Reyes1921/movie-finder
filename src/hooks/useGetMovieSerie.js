import {useEffect, useState} from "react"
import {getMovieSerie} from "../helpers"

export const useGetMovieSerie = (param) => {
  const [loading, setLoading] = useState(true)
  const [movieSerie, setMovieSerie] = useState({})
  const [error, setError] = useState(null)

  const getDataMovieSerie = async () => {
    setLoading(true)
    setError(null)
    const {data, error} = await getMovieSerie(param)
    setMovieSerie(data)

    setTimeout(() => {
      setLoading(false)
    }, 500)
    setError(error)
  }

  useEffect(() => {
    getDataMovieSerie()
  }, [param])

  return {
    movieSerie,
    loading,
    error,
  }
}
