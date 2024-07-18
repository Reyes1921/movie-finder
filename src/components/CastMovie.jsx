import {useEffect, useState} from "react"
import {useGetMovieSerie} from "../hooks"
import {Link} from "react-router-dom"

export const CastMovie = ({id}) => {
  const [movieId, setMovieId] = useState(id)
  const {
    movieSerie: cast,
    loading,
    error,
  } = useGetMovieSerie(`/movie/${movieId}/credits`)
  useEffect(() => {
    setMovieId(id)
  }, [])
  return (
    <div className="flex items-center justify-center bg-slate-900 mb-5">
      <div className="md:w-full  bg-slate-900 px-1 py-1  md:m4 m-1">
        <div className="">
          <h3 className="text-left text-white text-4xl mb-5 font-bold">Cast</h3>
        </div>
        <ul className="grid grid-cols-2 lg:grid-cols-6 md:grid-cols-3 lg:gap-2 md:gap-4 gap-8 px-5">
          {loading ? (
            <div className="flex justify-center">
              <span className="loader"></span>
            </div>
          ) : (
            cast.cast.map((cast) => {
              return (
                <Link
                  to={`/person/${cast.id}`}
                  key={cast.id + Math.random(0 - 1)}
                >
                  <li className="flex items-center flex-col justify-center">
                    <img
                      src={
                        cast.profile_path == null
                          ? "/thumbnail-cast.png"
                          : `https://media.themoviedb.org/t/p/w138_and_h175_face/${cast.profile_path}`
                      }
                      alt={`${cast.name}`}
                      className="rounded-full w-16 h-16 object-cover"
                    />
                    <h5 className="font-semibold text-white text-center">
                      {cast.name}
                    </h5>
                  </li>
                </Link>
              )
            })
          )}
        </ul>
      </div>
    </div>
  )
}
