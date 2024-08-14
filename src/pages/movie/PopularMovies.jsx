import {InfiniteMovies} from "../../components"
import {useTranslation} from "react-i18next"

export const PopularMovies = () => {
  const {t} = useTranslation()
  return <InfiniteMovies media_type={"popular"} title={t("Popular Movies")} />
}
