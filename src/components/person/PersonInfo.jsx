import {useTranslation} from "react-i18next"

export const PersonInfo = ({info}) => {
  const {t} = useTranslation()
  return (
    <div>
      <h3 className=" text-white text-2xl mb-5 mt-5 font-bold text-center">
        {t("Personal Info")}
      </h3>
      <div className="text-left">
        <div className="p-2">
          <h2 className="text-left text-white text-lg font-bold">
            {t("Birthday")}
          </h2>
          <p className="text-gray-400 text-base">{info.birthday}</p>
        </div>
        <div className={`p-2 ${info.deathday ? "inline-block" : "hidden"}`}>
          <h2 className="text-left text-white text-lg font-bold">
            {t("Date of Death")}
          </h2>
          <p className="text-gray-400 text-base">{info.deathday}</p>
        </div>
        <div className="p-2">
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
          {info.gender === 2 ? t("Male") : t("Female")}
        </p>
      </div>
    </div>
  )
}
