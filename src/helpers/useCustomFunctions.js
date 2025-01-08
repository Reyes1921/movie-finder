export const useCustomFunctions = () => {
  const numberFormater = (number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(number)
  }

  const time_convert = (num) => {
    let hours = Math.floor(num / 60)
    let minutes = num % 60
    return hours + "h" + " " + minutes + "min"
  }

  const colorScore = (score) => {
    if (score >= 7.0) return "bg-green-600"
    if (score >= 4.0 && score <= 70) return "bg-yellow-400"
    if (score <= 3.9) return "bg-red-800"
  }

  const findInArrayName = (array, job, job2) => {
    const index = array?.findIndex(
      (crew) => crew.job === job || crew.job === job2
    )
    return array?.[index]?.name
  }

  const findInArrayId = (array, job, job2) => {
    const index = array?.findIndex(
      (crew) => crew.job === job || crew.job === job2
    )
    return array?.[index]?.id
  }

  const findInArrayNameTwo = (array, job, job2, job3) => {
    let arr = []
    array?.forEach((element) => {
      if (element.job === job || element.job === job2 || element.job === job3) {
        arr.push(element)
      }
    })
    return arr
  }

  const findInArrayProducers = (array, job, job2, job3) => {
    const indices = []
    array?.forEach((crew, index) => {
      if (crew.job === job || crew.job === job2 || crew.job === job3) {
        indices.push(index)
      }
    })
    return indices.map((index) => array?.[index]?.name)
  }

  const findInArrayImg = (array, job, job2, job3) => {
    const index = array?.findIndex(
      (crew) => crew.job === job || crew.job === job2 || crew.job === job3
    )
    return array?.[index]?.profile_path
  }

  const responsiveOptions = () => {
    return [
      {
        breakpoint: "1400px",
        numVisible: 4,
        numScroll: 4,
      },
      {
        breakpoint: "1199px",
        numVisible: 3,
        numScroll: 3,
      },
      {
        breakpoint: "767px",
        numVisible: 3,
        numScroll: 3,
      },
      {
        breakpoint: "575px",
        numVisible: 2,
        numScroll: 2,
      },
    ]
  }

  const responsiveOptionsPerson = () => {
    return [
      {
        breakpoint: "1400px",
        numVisible: 4,
        numScroll: 4,
      },
      {
        breakpoint: "1199px",
        numVisible: 3,
        numScroll: 3,
      },
      {
        breakpoint: "767px",
        numVisible: 3,
        numScroll: 3,
      },
      {
        breakpoint: "575px",
        numVisible: 2,
        numScroll: 2,
      },
    ]
  }

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

  function calculateAge(birthdate) {
    // Parse the birthdate string into a Date object
    const birthDateObj = new Date(birthdate)
    // Get the current date
    const currentDate = new Date()
    // Calculate the age in milliseconds
    const ageInMillis = currentDate - birthDateObj
    // Convert milliseconds to years
    const ageInYears = ageInMillis / (1000 * 60 * 60 * 24 * 365.25)
    // Round down the age to the nearest integer
    const age = Math.floor(ageInYears)

    return age
  }

  function getDate(date, lang) {
    const options = {month: "short", day: "numeric", year: "numeric"}
    const language = lang === "en" ? "en-US" : "es-ES"
    return new Date(date).toLocaleDateString(language, options)
  }

  return {
    calculateAge,
    colorScore,
    findInArrayId,
    findInArrayImg,
    findInArrayName,
    findInArrayNameTwo,
    findInArrayProducers,
    getDate,
    navListMenuItemsMovies,
    navListMenuItemsSeries,
    numberFormater,
    responsiveOptions,
    responsiveOptionsPerson,
    time_convert,
  }
}
