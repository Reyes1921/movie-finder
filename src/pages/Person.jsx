import {useParams} from "react-router-dom"
import {LayoutSingle} from "../layout"
import {useGetMovieSerie} from "../hooks"
import {KnownFor, ReadMore} from "../components"

export const Person = () => {
  const {idPerson} = useParams()

  const {
    movieSerie: person,
    loading,
    error,
  } = useGetMovieSerie(`/person/${idPerson}`)

  return (
    <LayoutSingle loading={loading} error={error}>
      <div className="w-full h-auto bg-slate-900 shadow-md overflow-hidden mx-auto grid gap-1 grid-cols-1 md:grid-cols-1 lg:grid-cols-4 m-10">
        <div className=" md:w-full flex flex-col justify-center mb-5">
          <img
            className="rounded w-ful animated fadeIn"
            src={`https://image.tmdb.org/t/p/w342/${person?.profile_path}`}
            alt={`${person?.name}`}
          />
          <div>
            <p>
              Steven John Carell (born August 16, 1962) is an American actor and
              comedian. He played Michael Scott in The Office (2005–2011; 2013),
              NBC’s adaptation of the British series created by Stephen Merchant
              and Ricky Gervais, where Carell also worked as an occasional
              producer, writer and director. Carell has received numerous
              accolades for his performances in both film and television,
              including the Golden Globe Award for Best Actor – Television
              Series Musical or Comedy for his work on The Office. He was
              recognized as "America's Funniest Man" by Life magazine. Carell
              gained recognition as a correspondent on The Daily Show with Jon
              Stewart from 1999 to 2005. He went on to star in several comedy
              films, including Anchorman: The Legend of Ron Burgundy (2004) and
              its 2013 sequel, as well as The 40-Year-Old Virgin (2005), Evan
              Almighty (2007), Get Smart (2008), Date Night (2010), Crazy,
              Stupid, Love (2011), and The Way, Way Back (2013). He also voice
              acted in Over the Hedge (2006), Horton Hears a
            </p>
          </div>
        </div>
        <div className="col-span-3 lg:ml-9">
          <h3 className="text-left text-white text-3xl md:text-4xl lg:text-4xl mb-5 font-bold">
            {person?.name}{" "}
            <span style={{color: "#3B82F6"}}>
              {person?.known_for_department}
            </span>
          </h3>
          <div className="text-white text-justify mb-5 text-1xl ">
            <ReadMore>{person?.biography}</ReadMore>
            <div>
              <h3 className="text-left text-white text-4xl mb-10 mt-10 font-bold">
                Known For
              </h3>
              <KnownFor id={person?.id} />
            </div>
          </div>
        </div>
      </div>
    </LayoutSingle>
  )
}
