import {InfiniteSeries} from "../../components"
import {useTranslation} from "react-i18next"

export const TopRatedSeries = () => {
  const {t} = useTranslation()
  return (
    <InfiniteSeries media_type={"top_rated"} title={t("Top Rated Series")} />
  )
}
