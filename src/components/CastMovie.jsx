import {useEffect, useState} from "react"
import {useGetMovieSerie} from "../hooks"
import {Link} from "react-router-dom"
import {Carousel} from "primereact/carousel"

export const CastMovie = ({id}) => {
  const [movieId, setMovieId] = useState(id)

  const responsiveOptions = [
    {
      breakpoint: "1400px",
      numVisible: 6,
      numScroll: 3,
    },
    {
      breakpoint: "1199px",
      numVisible: 3,
      numScroll: 3,
    },
    {
      breakpoint: "767px",
      numVisible: 3,
      numScroll: 3,
    },
    {
      breakpoint: "575px",
      numVisible: 2,
      numScroll: 2,
    },
  ]

  const {
    movieSerie: cast,
    loading,
    error,
  } = useGetMovieSerie(`/movie/${movieId}/credits`)

  useEffect(() => {
    setMovieId(id)
  }, [])

  const personTemplate = (person) => {
    return (
      <div className="flex justify-around items-center pb-0 mb-0 hover:scale-110 transition-all">
        <Link className="rounded-sm p-2" to={`/person/${person.id}`}>
          <img
            src={
              person.profile_path == null
                ? "/thumbnail-cast.png"
                : `https://media.themoviedb.org/t/p/w138_and_h175_face/${person.profile_path}`
            }
            alt={`${person.name}`}
            className="rounded-lg w-32 h-32 object-cover border-4 border-[#3b82f6]"
          />

          <div className="mt-2">
            <h3 className="text-sm font-bold">{person.name}</h3>
            <span className="text-[#3b82f6] text-sm">{person.character}</span>
          </div>
        </Link>
      </div>
    )
  }
  return (
    <div className="flex items-center justify-center bg-slate-900 h-auto">
      <div className="w-full bg-slate-900">
        <div className="">
          <h3 className="text-left text-white text-4xl mb-5 font-bold">Cast</h3>
        </div>
        <div className="bg-[#1B2335] rounded-2xl p-4">
          {loading ? (
            <div className="flex justify-center">
              <span className="loader"></span>
            </div>
          ) : (
            <div>
              <Carousel
                value={cast.cast}
                numVisible={9}
                numScroll={3}
                responsiveOptions={responsiveOptions}
                itemTemplate={personTemplate}
                circular
              />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
