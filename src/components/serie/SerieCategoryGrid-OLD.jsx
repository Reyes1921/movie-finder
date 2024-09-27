import {ItemsGridSeries} from "./ItemsGridSeries"

export const SerieCategoryGrid = ({serieData, idCat}) => {
  return (
    <>
      <h1 className="hidden">Movie Finder</h1>
      <div className="grid gap-2 grid-cols-2 md:grid-cols-2 lg:grid-cols-5 p-5 animated fadeIn">
        {serieData.map((serie) => {
          if (serie.genre_ids.includes(Number(idCat))) {
            return (
              <ItemsGridSeries
                serie={serie}
                key={serie.id + Math.random(0, 1)}
              />
            )
          }
        })}
      </div>
    </>
  )
}
