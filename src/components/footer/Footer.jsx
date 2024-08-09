import {Link} from "react-router-dom"
import {useTranslation} from "react-i18next"
import {LazyLoadImage} from "react-lazy-load-image-component"

export const Footer = ({type}) => {
  const {t} = useTranslation()
  const icons = [
    {
      path: t("github"),
      src: "/github.svg",
      title: "Github",
      alt: '"github logo',
    },
    {
      path: t("linkedin"),
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
      className={` border-gray-200 w-full z-20 ${
        type === "no single" ? "fixed bottom-0" : "block"
      }`}
      style={{backgroundColor: "#0F172A"}}
    >
      <div className={`flex justify-around items-center p-3 pt-1`}>
        <div className="flex justify-left md:justify-start pt-2 md:pt-0 md:mt-0">
          <h3 className="text-white text-xs md:text-base">Powered By &nbsp;</h3>
          <LazyLoadImage
            src="/themoviedb.svg"
            alt="themoviedb logo"
            width={"auto"}
            height={"auto"}
            className="w-20 md:w-28"
          />
        </div>
        <div className="flex items-center justify-left md:justify-end mt-2 md:mt-0">
          <h3 className="text-white text-xs md:text-base flex justify-center">
            Reyes Rondón
          </h3>
          {icons.map((icon) => (
            <Link
              to={icon.path}
              key={icon.alt}
              target="_blank"
              className="p-2 hover:scale-110 hover:opacity-70 inline-block"
            >
              <LazyLoadImage
                src={icon.src}
                className="filter dark:invert h-4 w-4 md:h-5 md:w-5"
                alt={icon.alt}
              />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}
