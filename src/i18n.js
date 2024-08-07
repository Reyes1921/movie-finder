import i18n from "i18next"
import {initReactI18next} from "react-i18next"

const resources = {
  en: {
    translation: {
      Search: "Search",
      Home: "Home",
      Movies: "Movies",
      Popular: "Popular",
      Upcoming: "Upcoming",
      "Top Rated": "Top Rated",
      Series: "Series",
      "On The Air": "On The Air",
      "Origin Country": "Origin Country",
    },
  },
  es: {
    translation: {
      Search: "Buscar",
      Home: "Inicio",
      Movies: "Películas",
      Popular: "Popular",
      Upcoming: "Próximamente",
      "Top Rated": "Mejor valorados",
      Series: "Series",
      "On The Air": "Al aire",
      "Origin Country": "País de origeny",
    },
  },
}

i18n.use(initReactI18next).init({
  resources,
  lng: "en",

  interpolation: {
    escapeValue: false,
  },
})
export default i18n
