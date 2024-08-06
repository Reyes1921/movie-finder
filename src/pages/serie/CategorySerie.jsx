import {useParams} from "react-router-dom"
import {InfiniteCategorySerie} from "../../components"

export const CategorySerie = () => {
  const {categoryName, idCategory} = useParams()
  return (
    <InfiniteCategorySerie
      media_type={"popular"}
      title={categoryName}
      id={idCategory}
    />
  )
}
