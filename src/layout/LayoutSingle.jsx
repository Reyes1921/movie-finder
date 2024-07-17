import {Error, Footer, NavBar} from "../components"

export const LayoutSingle = ({loading, children, error}) => {
  return (
    <div className="bg-slate-900 ">
      <NavBar />
      {error != null ? (
        <Error />
      ) : loading ? (
        <div className="flex justify-center items-center h-screen">
          <span className="loader"></span>
        </div>
      ) : (
        <div className="m-10 animated fadeIn">{children}</div>
      )}
      <Footer />
    </div>
  )
}
