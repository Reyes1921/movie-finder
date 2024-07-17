import {Link} from "react-router-dom"
import {SearchBar} from "./SearchBar"
import {Menubar} from "primereact/menubar"
import "primereact/resources/themes/lara-dark-cyan/theme.css"
export const NavBar = () => {
  const items = [
    {
      label: "Home",
      url: "/",
      active: true,
    },
    {
      label: "Movies",
      items: [
        {
          label: "Popular",
          shortcut: "⌘+S",
          url: "/movies",
        },
        {
          label: "Top Rated",
          shortcut: "⌘+B",
          url: "/top-rated-movies",
        },
      ],
    },
    {
      label: "Series",
      items: [
        {
          label: "Popular",
          shortcut: "⌘+S",
          url: "/series",
        },
        {
          label: "Top Rated",
          shortcut: "⌘+B",
          url: "/top-rated-series",
        },
      ],
    },
  ]
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700 w-full">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          to={"/"}
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src="/cinema-film-movie-svgrepo-com.svg"
            className="h-12"
            alt="Movie Finder Logo"
          />
          <span className="text-left text-white text-xl md:text-3xl font-bold">
            Movie Finder
          </span>
        </Link>
        <div className="hidden sm:flex">
          <SearchBar />
        </div>
        <Menubar model={items} className="bg-[#111827] menu-mobile" />
      </div>
      <div className="flex sm:hidden">
        <SearchBar />
      </div>
    </nav>
  )
}
