import {Link, useLocation} from "react-router-dom"

export const Footer = ({type}) => {
  let location = useLocation()

  const icons = [
    {
      path: "https://github.com/Reyes1921/movie-finder",
      src: "/github.svg",
      title: "Github",
      alt: '"github logo',
    },
    {
      path: "https://www.linkedin.com/in/reyes-rondon/",
      src: "/linkedin.svg",
      title: "Linkedin",
      alt: '"linkedin logo',
    },
    {
      path: "mailto:reyesjrondon@gmail.com",
      src: "/gmail.svg",
      title: "reyesjrondon@gmail.com",
      alt: '"gmail logo',
    },
  ]
  return (
    <footer
      className={` border-gray-200 w-full ${
        type === "no single" ? "fixed bottom-0" : "block"
      }`}
      style={{backgroundColor: "#0F172A"}}
    >
      <div
        className={`flex flex-wrap justify-center md:justify-evenly items-center p-3`}
      >
        <div className="flex justify-center md:justify-start pt-2 md:pt-0 md:mt-0">
          <h3 className="text-white text-sm md:text-base">Powered By &nbsp;</h3>
          <img
            src="/themoviedb.svg"
            alt="themoviedb logo"
            className="w-5/12 lg:w-4/12 md:w-4/12 "
          />
        </div>
        <div className="flex items-center justify-center md:justify-end mt-2 md:mt-0">
          <h3 className="text-white text-sm md:text-base flex justify-center">
            Reyes Rondón
          </h3>
          {icons.map((icon) => (
            <Link
              to={icon.path}
              key={icon.alt}
              target="_blank"
              className="p-2 hover:scale-110 hover:opacity-70 inline-block"
            >
              <img
                src={icon.src}
                height="12"
                width="20"
                className="filter dark:invert"
                alt={icon.alt}
              />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}
