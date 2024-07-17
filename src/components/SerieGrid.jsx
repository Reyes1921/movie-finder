import {ItemsGridSeries} from "./"

export const SerieGrid = ({serieData}) => {
  return (
    <>
      <h1 className="hidden">Movie Finder</h1>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-2  lg:grid-cols-4 m-5 animated fadeIn">
        {serieData.results.map((serie) => {
          return <ItemsGridSeries serie={serie} key={serie.id} />
        })}
      </div>
    </>
  )
}
