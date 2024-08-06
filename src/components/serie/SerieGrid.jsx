import {ItemsGridSeries} from "./ItemsGridSeries"

export const SerieGrid = ({serieData}) => {
  return (
    <>
      <h1 className="hidden">Movie Finder</h1>
      <div className="grid gap-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5 p-5 animated fadeIn">
        {serieData.map((serie) => {
          return <ItemsGridSeries serie={serie} key={serie.id} />
        })}
      </div>
    </>
  )
}
