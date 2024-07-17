import {instance} from "../api/instance"

export const getMovieSerie = async (param) => {
  try {
    const {data} = await instance.get(param)
    return {data}
  } catch (error) {
    return {error}
  }
}
