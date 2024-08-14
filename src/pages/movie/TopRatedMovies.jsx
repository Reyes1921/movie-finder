import {InfiniteMovies} from "../../components"
import {useTranslation} from "react-i18next"

export const TopRatedMovies = () => {
  const {t} = useTranslation()
  return (
    <InfiniteMovies media_type={"top_rated"} title={t("Top Rated Movies")} />
  )
}
