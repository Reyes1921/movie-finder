import {Link} from "react-router-dom"
import {SearchBar} from "./SearchBar"
import {Menubar} from "primereact/menubar"
import "primereact/resources/themes/lara-dark-cyan/theme.css"

export const Header = () => {
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
    <header className="w-full md:fixed md:top-0 md:left-0 md:z-20 bg-[#0F172A] animated fadeIn">
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
        <div className="hidden sm:flex">
          <SearchBar />
        </div>
        <Menubar
          model={items}
          className="bg-[#0F172A] menu-mobile lg:min-w-[322.38px] z-10"
        />
      </div>
      <div className="flex sm:hidden">
        <SearchBar />
      </div>
    </header>
  )
}
