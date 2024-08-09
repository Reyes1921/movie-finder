import {useGetMovieSerie} from "../../hooks"
import {useState} from "react"
import {Dialog} from "primereact/dialog"
import {useTranslation} from "react-i18next"
import {LazyLoadImage} from "react-lazy-load-image-component"

export const ModalTrailer = ({dataId, type}) => {
  const [visible, setVisible] = useState(false)
  const {t} = useTranslation()

  const {
    movieSerie: data,
    loading,
    error,
  } = useGetMovieSerie(`/${type}/${dataId}/videos`)

  return (
    <div className="flex justify-center items-center">
      <button
        className={`${
          data.results?.length > 0
            ? "opacity-1 hover:opacity-80 hover:scale-105 transition-all"
            : "opacity-50"
        } flex items-center  border-2 border-blue-500 rounded-2xl p-5`}
        onClick={() => setVisible(true)}
        disabled={data.results?.length > 0 ? false : true}
      >
        <LazyLoadImage
          src="/play-svg.svg"
          height={25}
          width={25}
          alt="play icon image"
          className="mr-2"
        />
        {t("Watch Trailer")}
      </button>

      <Dialog
        visible={visible}
        modal={false}
        className="transition-all p-5 w-full h-full md:w-[1100px] md:h-[650px]"
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
          title={loading ? "" : data.results[data.results.length - 1]?.name}
          src={
            loading
              ? "#"
              : "https://www.youtube.com/embed/" +
                data?.results[
                  data?.results.findIndex(
                    (item) =>
                      item.name.includes("trailer") ||
                      item.name.includes("Trailer")
                  ) || 0
                ]?.key +
                "?autoplay=1&mute=0&enablejsapi=1&origin=https://movie-finder-3000.netlify.app"
          }
          frameBorder={0}
          onError={error}
          allowFullScreen={true}
        ></iframe>
      </Dialog>
    </div>
  )
}
