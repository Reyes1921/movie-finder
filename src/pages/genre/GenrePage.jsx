import {useParams} from "react-router-dom"
import {InfiniteGenre} from "../../components"

export const GenrePage = () => {
  const {mediaType, categoryName, idCategory} = useParams()
  return (
    <InfiniteGenre media={mediaType} title={categoryName} id={idCategory} />
  )
}
