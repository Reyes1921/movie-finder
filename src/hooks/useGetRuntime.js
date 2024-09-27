import {useEffect, useState} from "react"
import {getMovieSerie} from "../helpers"

export const useGetRuntime = (param) => {
  const [loading, setLoading] = useState(true)
  const [runtime, setRuntime] = useState({})
  const [error, setError] = useState(null)

  const getPopularMovie = async () => {
    console.log("YYYY")
    setLoading(true)
    setError(null)
    const {data, error} = await getMovieSerie(param)
    setRuntime(data)

    setLoading(false)

    setError(error)
  }

  useEffect(() => {
    getPopularMovie()
  }, [param])

  return {
    runtime,
    loading,
    error,
  }
}
