import {useParams} from "react-router-dom"
import {InfiniteCategoryMovies} from "../../components"

export const CategoryMovie = () => {
  const {categoryName, idCategory} = useParams()
  return (
    <InfiniteCategoryMovies
      media_type={"popular"}
      title={categoryName}
      id={idCategory}
    />
  )
}
