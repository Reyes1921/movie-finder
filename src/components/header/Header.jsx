import {Link} from "react-router-dom"
import {SearchBar} from "./SearchBar"
import "primereact/resources/themes/lara-dark-cyan/theme.css"
import {Nav} from "./Nav"

export const Header = () => {
  return (
    <header className="w-full md:fixed md:top-0 md:left-0 z-20 bg-[#0F172A] animated fadeIn">
      <div className="flex flex-wrap items-center justify-between p-4">
        <Link
          to={"/"}
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src="/cinema-film-movie-svgrepo-com.svg"
            className="h-11 aspect-square"
            alt="Movie Finder Logo"
          />
          <span className="text-left text-white text-xl md:text-3xl font-bold">
            Movie Finder
          </span>
        </Link>
        <div className="">
          <SearchBar />
        </div>
        <Nav />
      </div>
      {/* <div className="flex sm:hidden">
        <SearchBar />
      </div> */}
    </header>
  )
}
