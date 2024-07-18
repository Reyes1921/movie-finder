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

  return {
    numberFormater,
    time_convert,
    colorScore,
    findInArrayName,
    findInArrayNameTwo,
    findInArrayImg,
    findInArrayProducers,
    findInArrayId,
    responsiveOptions,
  }
}
