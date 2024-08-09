import {Header, Footer} from "../components"

export const LayoutSingle = ({children}) => {
  return (
    <>
      <Header />
      <div className="mt-20">{children}</div>
      <Footer type={"single"} />
    </>
  )
}
