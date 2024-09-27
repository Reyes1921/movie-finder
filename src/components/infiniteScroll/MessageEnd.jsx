import {useTranslation} from "react-i18next"

export const MessageEnd = () => {
  const {t} = useTranslation()
  return (
    <div className="flex justify-center items-center m-20 md:m-36 text-center">
      <span>{t("messageEnd")}</span>
    </div>
  )
}
