import {ChevronDownIcon} from "@heroicons/react/24/solid"
import {
  Collapse,
  ListItem,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Typography,
} from "@material-tailwind/react"
import {useState} from "react"
import {Link} from "react-router-dom"

export const useCustomFunction = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMenuOpenTwo, setIsMenuOpenTwo] = useState(false)
  const [isMenuOpenMobile, setIsMenuOpenMobile] = useState(false)
  const [isMenuOpenTwoMobile, setIsMenuOpenTwoMobile] = useState(false)

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

  const renderItemsMovies = navListMenuItemsMovies.map(({title, link}) => (
    <Link to={link} key={title}>
      <MenuItem>
        <Typography
          variant="h6"
          color="blue-gray"
          className="mb-1 hover:text-blue-500"
        >
          {title}
        </Typography>
      </MenuItem>
    </Link>
  ))
  const renderItemsSeries = navListMenuItemsSeries.map(({title, link}) => (
    <Link to={link} key={title}>
      <MenuItem>
        <Typography
          variant="h6"
          color="blue-gray"
          className="mb-1 hover:text-blue-500"
        >
          {title}
        </Typography>
      </MenuItem>
    </Link>
  ))

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 outline-0">
      <Menu>
        <MenuItem>
          <Typography
            as="li"
            variant="small"
            color="blue-gray"
            className="font-medium"
          >
            <Link to="/" className="flex items-center hover:text-blue-500 ">
              Home
            </Link>
          </Typography>
        </MenuItem>
      </Menu>
      <Menu allowHover open={isMenuOpen} handler={setIsMenuOpen}>
        <MenuHandler>
          <Typography as="a" href="#" variant="small" className="font-medium">
            <MenuItem
              className={`hidden items-center gap-2 font-medium text-blue-gray-900 lg:flex lg:rounded-full hover:text-blue-500`}
            >
              Movies
              <ChevronDownIcon
                strokeWidth={2}
                className={`h-3 w-3 transition-transform  ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
            </MenuItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden gap-3 overflow-visible lg:grid bg-[#0F172A] border-2 border-blue-500 rounded-2xl mt-1 z-30">
          <ul className="col-span-4 flex w-full flex-col gap-1 border-0 text-white outline-0">
            {renderItemsMovies}
          </ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMenuOpenMobile}>{renderItemsMovies}</Collapse>
      </div>
      <Menu allowHover open={isMenuOpenTwo} handler={setIsMenuOpenTwo}>
        <MenuHandler>
          <Typography as="a" href="#" variant="small" className="font-medium">
            <MenuItem
              className={` items-center gap-2 font-medium text-blue-gray-900 lg:flex lg:rounded-full hover:text-blue-500`}
            >
              Series
              <ChevronDownIcon
                strokeWidth={2}
                className={`hidden lg:flex h-3 w-3 transition-transform  ${
                  isMenuOpenTwo ? "rotate-180" : ""
                }`}
              />
            </MenuItem>
          </Typography>
        </MenuHandler>
        <MenuList className=" gap-3 overflow-visible lg:grid bg-[#0F172A] border-2 border-blue-500 rounded-2xl mt-1 z-30">
          <ul className="col-span-4 flex w-full flex-col gap-1 border-0 text-white outline-0">
            {renderItemsSeries}
          </ul>
        </MenuList>
      </Menu>
    </ul>
  )

  const navListMobile = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 outline-0">
      <Menu>
        <Link to="/" className="flex items-center">
          <ListItem className="hover:bg-blue-500 py-2 mt-3">
            <Typography
              as="li"
              variant="small"
              color="blue-gray"
              className="font-medium"
            >
              Home
            </Typography>
          </ListItem>
        </Link>
      </Menu>
      <Menu open={isMenuOpenMobile} handler={setIsMenuOpenMobile}>
        <MenuHandler>
          <Typography as="a" href="#" variant="small" className="font-medium">
            <ListItem
              className={`items-center gap-2 font-medium text-white lg:flex lg:rounded-full  hover:bg-blue-500 py-2 ${
                isMenuOpenMobile ? "bg-blue-500" : ""
              }`}
            >
              Movies
              <ChevronDownIcon
                strokeWidth={2}
                className={`h-3 w-3 transition-transform flex  ${
                  isMenuOpenMobile ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMenuOpenMobile}>{renderItemsMovies}</Collapse>
      </div>
      <Menu open={isMenuOpenTwoMobile} handler={setIsMenuOpenTwoMobile}>
        <MenuHandler>
          <Typography as="a" href="#" variant="small" className="font-medium">
            <ListItem
              className={` items-center gap-2 font-medium text-white lg:flex lg:rounded-full hover:bg-blue-500 py-2 ${
                isMenuOpenTwoMobile ? "bg-blue-500" : ""
              }`}
            >
              Series
              <ChevronDownIcon
                strokeWidth={2}
                className={`h-3 w-3 transition-transform flex  ${
                  isMenuOpenTwoMobile ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMenuOpenTwoMobile}>{renderItemsSeries}</Collapse>
      </div>
    </ul>
  )

  return {
    navList,
    navListMobile,
  }
}
