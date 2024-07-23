import {useGetMovieSerie} from "../../hooks"
import {useState} from "react"
import {Dialog} from "primereact/dialog"

export const ModalTrailer = ({dataId, type}) => {
  const [visible, setVisible] = useState(false)

  const {
    movieSerie: serie,
    loading,
    error,
  } = useGetMovieSerie(`/${type}/${dataId}/videos`)

  return (
    <div>
      <button
        className="flex hover:opacity-80 hover:scale-105 transition-all border-2 border-blue-500 rounded-2xl p-5"
        onClick={() => setVisible(true)}
      >
        <img
          src="/play-svg.svg"
          height={25}
          width={25}
          alt="play icon image"
          className="mr-2"
        />
        Watch Trailer
      </button>

      <Dialog
        visible={visible}
        modal={false}
        className="transition-all p-5 h-96 md:w-[1100px] md:h-[650px]"
        onHide={() => {
          if (!visible) return
          setVisible(false)
        }}
      >
        <iframe
          id="player"
          type="text/html"
          style={{backgroundColor: "#000"}}
          width="100%"
          height="100%"
          title={loading ? "" : serie.results[serie.results.length - 1]?.name}
          src={
            loading
              ? "#"
              : "https://www.youtube.com/embed/" +
                serie.results[serie.results.length - 1]?.key +
                "?autoplay=1&mute=0&enablejsapi=1&origin=https://movie-finder-3000.netlify.app"
          }
          autoPlay="1"
          controls="2"
          allowFullScreen={true}
        ></iframe>
      </Dialog>
    </div>
  )
}
