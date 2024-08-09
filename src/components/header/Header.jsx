import {useEffect, useState} from "react"
import {Link} from "react-router-dom"
import {
  Navbar,
  Collapse,
  Button,
  IconButton,
  Input,
} from "@material-tailwind/react"
import {useNavigate} from "react-router-dom"
import {useCustomFunction} from "../../hooks/useCutomFunction"
import {useTranslation} from "react-i18next"
import {SelectButton} from "primereact/selectbutton"

export function Header() {
  const [openNav, setOpenNav] = useState(false)
  const navigate = useNavigate()

  const {t, i18n} = useTranslation()
  const options = ["en", "es"]
  const [value, setValue] = useState(options[0])
  const onChangeLang = (e) => {
    const lang_code = e.target.value
    i18n.changeLanguage(lang_code)
    setValue(e.target.value)
    localStorage.setItem("language", e.target.value)
  }

  useEffect(() => {
    const lang = localStorage.getItem("language")
    if (!!lang) {
      i18n.changeLanguage(lang)
      setValue(lang)
    }
  }, [])

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    )
  }, [])

  const {navList, navListMobile} = useCustomFunction()

  const submit = (event) => {
    event.preventDefault()
    const value = event.target[0].value
    if (value.length <= 0) return
    navigate(`/search/${value}`)
  }

  return (
    <Navbar className="w-full fixed top-0 left-0 z-20 bg-[#0F172A] animated fadeIn border-0 p-5">
      <div className="container mx-auto flex flex-wrap items-center justify-between text-blue-gray-900">
        <Link
          to={"/"}
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src="/cinema-film-movie-svgrepo-com.svg"
            className="h-11 aspect-square"
            alt="Movie Finder Logo"
          />
          <span className="text-left text-white text-xl md:text-2xl font-bold">
            Movie Finder
          </span>
        </Link>
        <div className="hidden items-center gap-x-2 lg:flex">
          <div className="relative flex w-full gap-2 md:w-max">
            <form action="" onSubmit={submit} id="searchBar">
              <Input
                type="search"
                placeholder={t("Search")}
                containerProps={{
                  className: "min-w-[288px]",
                }}
                className=" !border-t-blue-gray-300 pl-9 placeholder:text-blue-gray-300 focus:!border-[#2074F6] rounded-xl"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
            </form>
            <div className="!absolute left-3 top-[13px]">
              <svg
                width="13"
                height="14"
                viewBox="0 0 14 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.97811 7.95252C10.2126 7.38634 10.3333 6.7795 10.3333 6.16667C10.3333 4.92899 9.84167 3.742 8.9665 2.86683C8.09133 1.99167 6.90434 1.5 5.66667 1.5C4.42899 1.5 3.242 1.99167 2.36683 2.86683C1.49167 3.742 1 4.92899 1 6.16667C1 6.7795 1.12071 7.38634 1.35523 7.95252C1.58975 8.51871 1.93349 9.03316 2.36683 9.4665C2.80018 9.89984 3.31462 10.2436 3.88081 10.4781C4.447 10.7126 5.05383 10.8333 5.66667 10.8333C6.2795 10.8333 6.88634 10.7126 7.45252 10.4781C8.01871 10.2436 8.53316 9.89984 8.9665 9.4665C9.39984 9.03316 9.74358 8.51871 9.97811 7.95252Z"
                  fill="#CFD8DC"
                />
                <path
                  d="M13 13.5L9 9.5M10.3333 6.16667C10.3333 6.7795 10.2126 7.38634 9.97811 7.95252C9.74358 8.51871 9.39984 9.03316 8.9665 9.4665C8.53316 9.89984 8.01871 10.2436 7.45252 10.4781C6.88634 10.7126 6.2795 10.8333 5.66667 10.8333C5.05383 10.8333 4.447 10.7126 3.88081 10.4781C3.31462 10.2436 2.80018 9.89984 2.36683 9.4665C1.93349 9.03316 1.58975 8.51871 1.35523 7.95252C1.12071 7.38634 1 6.7795 1 6.16667C1 4.92899 1.49167 3.742 2.36683 2.86683C3.242 1.99167 4.42899 1.5 5.66667 1.5C6.90434 1.5 8.09133 1.99167 8.9665 2.86683C9.84167 3.742 10.3333 4.92899 10.3333 6.16667Z"
                  stroke="#CFD8DC"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          <Button
            size="md"
            className="rounded-lg bg-[#2074F6] p-3 uppercase"
            type="submit"
            form="searchBar"
          >
            {t("Search")}
          </Button>
        </div>
        <div className="hidden lg:block">{navList}</div>
        <SelectButton
          value={value}
          onChange={onChangeLang}
          options={options}
          className="hidden lg:block"
        />
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden mr-10 mb-6"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <div className="container mx-auto">
          {navListMobile}
          <div className="flex flex-col gap-x-2 sm:flex-row sm:items-center">
            <form
              action=""
              onSubmit={submit}
              id="searchBarMobile"
              className="flex flex-col"
            >
              <div className="relative w-full gap-2 md:w-max">
                <Input
                  type="search"
                  placeholder={t("Search")}
                  containerProps={{
                    className: "min-w-[288px]",
                  }}
                  className=" !border-t-blue-gray-300 pl-9 placeholder:text-blue-gray-300 focus:!border-blue-gray-300 rounded-xl bg-transparent relative min-h-10"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
                <div className="absolute left-3 top-[13px]">
                  <svg
                    width="13"
                    height="14"
                    viewBox="0 0 14 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.97811 7.95252C10.2126 7.38634 10.3333 6.7795 10.3333 6.16667C10.3333 4.92899 9.84167 3.742 8.9665 2.86683C8.09133 1.99167 6.90434 1.5 5.66667 1.5C4.42899 1.5 3.242 1.99167 2.36683 2.86683C1.49167 3.742 1 4.92899 1 6.16667C1 6.7795 1.12071 7.38634 1.35523 7.95252C1.58975 8.51871 1.93349 9.03316 2.36683 9.4665C2.80018 9.89984 3.31462 10.2436 3.88081 10.4781C4.447 10.7126 5.05383 10.8333 5.66667 10.8333C6.2795 10.8333 6.88634 10.7126 7.45252 10.4781C8.01871 10.2436 8.53316 9.89984 8.9665 9.4665C9.39984 9.03316 9.74358 8.51871 9.97811 7.95252Z"
                      fill="#CFD8DC"
                    />
                    <path
                      d="M13 13.5L9 9.5M10.3333 6.16667C10.3333 6.7795 10.2126 7.38634 9.97811 7.95252C9.74358 8.51871 9.39984 9.03316 8.9665 9.4665C8.53316 9.89984 8.01871 10.2436 7.45252 10.4781C6.88634 10.7126 6.2795 10.8333 5.66667 10.8333C5.05383 10.8333 4.447 10.7126 3.88081 10.4781C3.31462 10.2436 2.80018 9.89984 2.36683 9.4665C1.93349 9.03316 1.58975 8.51871 1.35523 7.95252C1.12071 7.38634 1 6.7795 1 6.16667C1 4.92899 1.49167 3.742 2.36683 2.86683C3.242 1.99167 4.42899 1.5 5.66667 1.5C6.90434 1.5 8.09133 1.99167 8.9665 2.86683C9.84167 3.742 10.3333 4.92899 10.3333 6.16667Z"
                      stroke="#CFD8DC"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <Button
                size="md"
                className="mt-4 rounded-lg sm:mt-0 bg-[#2074F6] p-3 uppercase"
                type="submit"
                form="searchBarMobile"
              >
                {t("Search")}
              </Button>
            </form>
            <SelectButton
              value={value}
              onChange={onChangeLang}
              options={options}
              className=" lg:hidden m-4 flex justify-center"
            />
          </div>
        </div>
      </Collapse>
    </Navbar>
  )
}
