import {useEffect, useState} from "react"
import {useCustomFunctions, useGetMovieSerie} from "../hooks"

export const CrewSerie = ({serieId: id}) => {
  const [serieId, setSerieId] = useState(id)
  const {
    movieSerie: crew,
    loading,
    error,
  } = useGetMovieSerie(`/tv/${serieId}/credits`)
  useEffect(() => {
    setSerieId(id)
  }, [])

  const {findInArrayName, findInArrayImg, findInArrayProducers} =
    useCustomFunctions()
  return (
    <>
      <div className="md:w-full  bg-slate-900 px-8 py-4">
        <section className="py-6 rounded bg-white/5 text-white">
          <div className="grid justify-center mt-5 mb-5 md:mb-8 lg:mb-8">
            <h4 className="text-left text-blue-500 text-3xl font-bold ">
              Produced by
            </h4>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-5 md:grid-cols-3 text-center p-1">
            {findInArrayProducers(
              crew.crew,
              "Executive Producer",
              "Producer",
              "Co-Producer"
            ).map((producer, index) => {
              return (
                <span className="text-white " key={index}>
                  {producer}&nbsp;
                </span>
              )
            })}
          </div>
        </section>
      </div>
    </>
  )
}
