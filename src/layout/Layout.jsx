import {Error, Footer, NavBar, Pagination} from "../components"

export const Layout = ({loading, children, error, pagination}) => {
  return (
    <div className="bg-slate-900">
      <NavBar />
      {error != null ? (
        <Error />
      ) : loading ? (
        <div className="flex justify-center items-center h-screen">
          <span className="loader"></span>
        </div>
      ) : (
        <div>{children}</div>
      )}
      {/* <Pagination itemsPerPage={pagination} /> */}
      <Footer />
    </div>
  )
}
