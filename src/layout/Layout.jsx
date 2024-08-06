import {Header, Footer} from "../components"

export const Layout = ({children}) => {
  return (
    <>
      <Header />
      <div className="md:mt-20">{children}</div>
      <Footer type={"no single"} />
    </>
  )
}
