import {Header, Footer} from "../components"

export const Layout = ({children}) => {
  return (
    <>
      <Header />
      <div className="bg-slate-900 md:mt-20">{children}</div>
      <Footer />
    </>
  )
}
