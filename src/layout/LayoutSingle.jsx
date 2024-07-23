import {Header, Footer} from "../components"

export const LayoutSingle = ({children}) => {
  return (
    <>
      <Header />
      <div className="bg-slate-900 md:mt-20">{children}</div>
      <Footer />
    </>
  )
}
