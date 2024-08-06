import {
  Navbar,
  Collapse,
  Typography,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  IconButton,
} from "@material-tailwind/react"
import {ChevronDownIcon, Bars2Icon} from "@heroicons/react/24/solid"

import {useEffect, useState} from "react"

export const Nav = () => {
  // nav list menu
  const navListMenuItemsMovies = [
    {
      title: "Popular",
      link: "/popular-movies",
    },
    {
      title: "Upcoming",
      link: "/upcoming-movies",
    },
    {
      title: "Top Rated",
      link: "/top-rated-movies",
    },
  ]

  const navListMenuItemsSeries = [
    {
      title: "Popular",
      link: "/popular-series",
    },
    {
      title: "On The Air",
      link: "/on-the-air-series",
    },
    {
      title: "Top Rated",
      link: "/top-rated-series",
    },
  ]

  function NavListMenu() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isMenuOpenTwo, setIsMenuOpenTwo] = useState(false)

    const renderItemsMovies = navListMenuItemsMovies.map(({title, link}) => (
      <a href={link} key={title}>
        <MenuItem>
          <Typography
            variant="h6"
            color="blue-gray"
            className="mb-1 hover:text-blue-500"
          >
            {title}
          </Typography>
        </MenuItem>
      </a>
    ))

    const renderItemsSeries = navListMenuItemsSeries.map(({title, link}) => (
      <a href={link} key={title}>
        <MenuItem>
          <Typography
            variant="h6"
            color="blue-gray"
            className="mb-1 hover:text-blue-500"
          >
            {title}
          </Typography>
        </MenuItem>
      </a>
    ))

    return (
      <>
        <Menu allowHover open={isMenuOpen} handler={setIsMenuOpen}>
          <MenuHandler>
            <Typography as="a" href="#" variant="small" className="font-normal">
              <MenuItem
                className={`hidden items-center gap-2 font-medium text-blue-gray-900 lg:flex lg:rounded-full hover:text-blue-500 ${
                  isMenuOpen ? "text-blue-500" : ""
                }`}
              >
                Movies{" "}
                <ChevronDownIcon
                  strokeWidth={2}
                  className={`h-3 w-3 transition-transform ${
                    isMenuOpen ? "rotate-180" : ""
                  }`}
                />
              </MenuItem>
            </Typography>
          </MenuHandler>
          <MenuList className="hidden gap-3 overflow-visible lg:grid bg-[#0F172A] border-2 border-blue-500 rounded-2xl mt-1 z-30">
            <ul className="col-span-4 flex w-full flex-col gap-1 border-0">
              {renderItemsMovies}
            </ul>
          </MenuList>
        </Menu>
        <MenuItem className="flex items-center gap-2 font-medium text-blue-gray-900 lg:hidden">
          Movies{" "}
        </MenuItem>
        <ul className="ml-6 flex w-full flex-col gap-1 lg:hidden">
          {renderItemsMovies}
        </ul>
        <Menu allowHover open={isMenuOpenTwo} handler={setIsMenuOpenTwo}>
          <MenuHandler>
            <Typography as="a" href="#" variant="small" className="font-normal">
              <MenuItem
                className={`hidden items-center gap-2 font-medium text-blue-gray-900 lg:flex lg:rounded-full hover:text-blue-500 ${
                  isMenuOpenTwo ? "text-blue-500" : ""
                }`}
              >
                Series{" "}
                <ChevronDownIcon
                  strokeWidth={2}
                  className={`h-3 w-3 transition-transform ${
                    isMenuOpenTwo ? "rotate-180" : ""
                  }`}
                />
              </MenuItem>
            </Typography>
          </MenuHandler>
          <MenuList className="hidden gap-3 overflow-visible lg:grid bg-[#0F172A] border-2 border-blue-500 rounded-2xl mt-1 z-30">
            <ul className="col-span-4 flex w-full flex-col gap-1 border-0">
              {renderItemsSeries}
            </ul>
          </MenuList>
        </Menu>
        <MenuItem className="flex items-center gap-2 font-medium text-blue-gray-900 lg:hidden">
          Series{" "}
        </MenuItem>
        <ul className="ml-6 flex w-full flex-col gap-1 lg:hidden">
          {renderItemsSeries}
        </ul>
      </>
    )
  }

  function NavList() {
    return (
      <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
        <Typography
          key="Home"
          as="a"
          href="#"
          variant="small"
          color="gray"
          className="font-medium text-white"
        >
          <MenuItem className="flex items-center gap-2 lg:rounded-full">
            <span className="text-white hover:text-blue-500">Home</span>
          </MenuItem>
        </Typography>
        <NavListMenu />
      </ul>
    )
  }

  const [isNavOpen, setIsNavOpen] = useState(false)

  const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur)

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setIsNavOpen(false)
    )
  }, [])
  return (
    <Navbar className="w-auto bg-[#0F172A] border-0 shadow-none">
      <div className="relative mx-auto flex items-center justify-between text-blue-gray-900">
        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton
          size="sm"
          color="blue-gray"
          variant="text"
          onClick={toggleIsNavOpen}
          className="ml-auto mr-2 lg:hidden"
        >
          <Bars2Icon className="h-6 w-6" />
        </IconButton>
      </div>
      <Collapse open={isNavOpen} className="">
        <NavList />
      </Collapse>
    </Navbar>
  )
}
