import {useState} from "react"
import {useTranslation} from "react-i18next"

export const ReadMore = ({children}) => {
  const {t} = useTranslation()
  const text = children
  const textLength = text.length
  const [isReadMore, setIsReadMore] = useState(true)
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore)
  }
  return (
    <p className="animated fadeIn">
      {isReadMore ? text.slice(0, 1000) : text}
      <span
        onClick={toggleReadMore}
        className={`text-[#3b82f6] font-bold text-xl hover:cursor-pointer ${
          textLength > 1000 ? "inline-block" : "hidden"
        }`}
      >
        {isReadMore ? ` ...${t("read more")}` : ` ${t("show less")}`}
      </span>
    </p>
  )
}
