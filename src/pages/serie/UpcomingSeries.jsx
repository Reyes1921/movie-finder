import {InfiniteSeries} from "../../components"
import {useTranslation} from "react-i18next"

export const UpcomingSeries = () => {
  const {t} = useTranslation()
  return (
    <InfiniteSeries media_type={"on_the_air"} title={t("On The Air Series")} />
  )
}
