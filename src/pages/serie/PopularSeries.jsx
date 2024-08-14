import {InfiniteSeries} from "../../components"
import {useTranslation} from "react-i18next"

export const PopularSeries = () => {
  const {t} = useTranslation()
  return <InfiniteSeries media_type={"popular"} title={t("Popular Series")} />
}
