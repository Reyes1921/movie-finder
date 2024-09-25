import {useTranslation} from "react-i18next"
import {useGetMovieSerie} from "../../hooks"
import {LazyLoadImage} from "react-lazy-load-image-component"
import {useCustomFunctions} from "../../helpers"

export const PersonInfo = ({info}) => {
  const {
    movieSerie: infoLinks,
    loading,
    error,
  } = useGetMovieSerie(`person/${info.id}/external_ids`)

  const {calculateAge} = useCustomFunctions()

  const {t} = useTranslation()

  error ? console.log(error) : ""

  return (
    <div>
      <h3 className=" text-white text-2xl mb-5 mt-5 font-bold text-center">
        {t("Personal Info")}
      </h3>
      {loading ? (
        <div className="flex bg-slate-900 justify-center items-center h-screen">
          <span className="loader"></span>
        </div>
      ) : (
        <div className="flex flex-wrap justify-center p-5 pt-0">
          {!infoLinks?.facebook_id || (
            <a
              href={`https://www.facebook.com/${infoLinks?.facebook_id}/`}
              className="p-2"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              <LazyLoadImage
                src="/icons/facebook.svg"
                alt=""
                className="w-6 h-6"
              />
            </a>
          )}
          {!infoLinks?.instagram_id || (
            <a
              href={`https://www.instagram.com/${infoLinks?.instagram_id}/`}
              className="p-2"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              <LazyLoadImage
                src="/icons/instagram.svg"
                alt=""
                className="w-6 h-6"
              />
            </a>
          )}
          {!infoLinks?.twitter_id || (
            <a
              href={`https://x.com/${infoLinks?.twitter_id}/`}
              className="p-2"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              <LazyLoadImage src="/icons/x.svg" alt="" className="w-6 h-6" />
            </a>
          )}
          {!infoLinks?.tiktok_id || (
            <a
              href={`https://www.tiktok.com/@${infoLinks?.tiktok_id}/`}
              className="p-2"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              <LazyLoadImage
                src="/icons/tiktok.svg"
                alt=""
                className="w-6 h-6"
              />
            </a>
          )}
          {!infoLinks?.youtube_id || (
            <a
              href={`https://www.youtube.com/${infoLinks?.youtube_id}/`}
              className="p-2"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              <LazyLoadImage
                src="/icons/youtube.svg"
                alt=""
                className="w-6 h-6"
              />
            </a>
          )}
          {!infoLinks?.imdb_id || (
            <a
              href={`https://www.imdb.com/name/${infoLinks?.imdb_id}/`}
              className="p-2"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              <LazyLoadImage src="/icons/imdb.svg" alt="" className="w-6 h-6" />
            </a>
          )}
        </div>
      )}
      <div className="text-left">
        <div className={`p-2 ${info.birthday ? "block" : "hidden"}`}>
          <h2 className="text-left text-white text-lg font-bold">
            {t("Birthday")}
          </h2>
          <p className="text-gray-400 text-base">
            {info.birthday} -{" "}
            <span>
              {calculateAge(info?.birthday)} {t("years old")}
            </span>
          </p>
        </div>
        <div className={`p-2 ${info.deathday ? "block" : "hidden"}`}>
          <h2 className="text-left text-white text-lg font-bold">
            {t("Date of Death")}
          </h2>
          <p className="text-gray-400 text-base">{info.deathday}</p>
        </div>
        <div className={`p-2 ${info.place_of_birth ? "block" : "hidden"}`}>
          <h2 className="text-left text-white text-lg font-bold">
            {t("Place of Birth")}
          </h2>
          <p className="text-gray-400 text-base">{info.place_of_birth}</p>
        </div>
      </div>
      <div className="p-2">
        <h2 className="text-left text-white text-lg font-bold">
          {t("Gender")}
        </h2>
        <p className="text-gray-400 text-base">
          {info.gender === 0
            ? t("Not set / not specified")
            : info.gender === 1
            ? t("Female")
            : info.gender === 2
            ? t("Male")
            : t("Non-binary")}
        </p>
      </div>
    </div>
  )
}
