import {InfiniteMovies} from "../../components"
import {useTranslation} from "react-i18next"

export const UpcomingMovies = () => {
  const {t} = useTranslation()
  return <InfiniteMovies media_type={"upcoming"} title={t("Upcoming Movies")} />
}
